/**
 * POST /api/contact — Vercel serverless function behind the website contact form.
 *
 * Every message is checked before anything is sent:
 *   1. Only same-site POST requests with a small JSON body are accepted.
 *   2. A per-visitor rate limit stops floods (best effort; see RATE_LIMIT note).
 *   3. Bot checks: a hidden "website" field that people never fill in, a minimum time
 *      on the form, and a Cloudflare Turnstile token verified with Cloudflare.
 *   4. Every field is trimmed, length-limited and validated; the email is then built
 *      with all visitor text HTML-escaped and line breaks stripped from the subject.
 * The message is emailed through Resend. Error replies stay generic so nothing about
 * the setup leaks to the visitor.
 *
 * GET /api/contact returns the public Turnstile site key, so the key lives only in
 * Vercel settings and is never built into the page.
 *
 * Environment variables (set in Vercel → Project → Settings → Environment Variables):
 *   TURNSTILE_SITE_KEY    Cloudflare Turnstile site key (public by design; served by GET)
 *   TURNSTILE_SECRET_KEY  Cloudflare Turnstile secret key
 *   RESEND_API_KEY        Resend API key
 *   CONTACT_FROM          Sender, on a domain verified in Resend, e.g. "CyberSys Website <website@cybersystechnologies.com>"
 *   CONTACT_TO            Inbox that receives enquiries (defaults to info@cybersystechnologies.com)
 *   ALLOWED_ORIGINS       Optional extra comma-separated origins (e.g. a preview URL)
 */

declare const process: { env: Record<string, string | undefined> };

const SITE_ORIGINS = ['https://www.cybersystechnologies.com', 'https://cybersystechnologies.com'];
const MAX_BODY_BYTES = 10_000;
const MIN_FILL_MS = 3_000;            // real people take longer than this to fill the form
const RATE_LIMIT = { max: 5, windowMs: 10 * 60_000 };

// Kept in memory, so it only holds within one warm function instance. A Vercel Firewall
// rate-limit rule on /api/contact gives a hard limit across all instances.
const hits = new Map<string, number[]>();

const LIMITS = { name: 100, email: 254, company: 120, phone: 30, topic: 100, industry: 60, message: 5000 };
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i;
const PHONE_RE = /^[+()\d\s.-]{6,30}$/;

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
  });

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

/** Trim, remove control characters (keeping line breaks in the message) and cap the length */
const clean = (value: unknown, max: number, multiline = false) => {
  if (typeof value !== 'string') return '';
  const stripped = multiline
    ? value.replace(/\r\n?/g, '\n').replace(/[\u0000-\u0009\u000B-\u001F\u007F]/g, '')
    : value.replace(/[\u0000-\u001F\u007F]/g, ' ');
  return stripped.trim().slice(0, max);
};

const allowedOrigins = () => [
  ...SITE_ORIGINS,
  // Vercel preview deployments (set automatically by Vercel)
  ...[process.env.VERCEL_URL, process.env.VERCEL_BRANCH_URL].filter(Boolean).map(host => `https://${host}`),
  ...(process.env.ALLOWED_ORIGINS || '').split(',').map(o => o.trim()).filter(Boolean)
];

const rateLimited = (ip: string) => {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter(t => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT.max;
};

const verifyTurnstile = async (token: string, ip: string) => {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  // Reasons are logged for whoever checks Vercel → Logs; the visitor only sees a generic message
  if (!secret) { console.warn('[contact] Turnstile: TURNSTILE_SECRET_KEY is not set'); return false; }
  if (!token) { console.warn('[contact] Turnstile: no token sent (site key missing on the page, or the widget failed)'); return false; }
  const form = new URLSearchParams({ secret, response: token });
  if (ip) form.set('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: form });
  const data = await res.json().catch(() => null) as { success?: boolean; hostname?: string; 'error-codes'?: string[] } | null;
  if (data?.success !== true) console.warn('[contact] Turnstile rejected:', JSON.stringify(data?.['error-codes'] || data));
  return data?.success === true;
};

export function GET(): Response {
  return new Response(JSON.stringify({ siteKey: process.env.TURNSTILE_SITE_KEY || '' }), {
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=300' }
  });
}

export async function POST(request: Request): Promise<Response> {
  // 1. Same-site JSON only
  const origin = request.headers.get('origin') || '';
  if (!allowedOrigins().includes(origin)) return json(403, { ok: false, error: 'Request not allowed.' });
  if (!(request.headers.get('content-type') || '').includes('application/json')) {
    return json(415, { ok: false, error: 'Unsupported request.' });
  }
  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return json(413, { ok: false, error: 'Message is too long.' });

  // 2. Rate limit per visitor
  const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
  if (rateLimited(ip)) return json(429, { ok: false, error: 'Too many messages. Please try again later.' });

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw);
  } catch {
    return json(400, { ok: false, error: 'Invalid request.' });
  }

  // 3. Bot checks. Bots that fill the hidden field or submit instantly get a quiet "success"
  //    so they learn nothing; nothing is sent.
  const startedAt = Number(body.startedAt);
  if (clean(body.website, 200) || !Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) {
    return json(200, { ok: true });
  }
  if (!(await verifyTurnstile(clean(body.turnstileToken, 2048), ip))) {
    return json(403, { ok: false, error: 'Verification failed. Please refresh the page and try again.' });
  }

  // 4. Validate every field
  const fields = {
    name: clean(body.name, LIMITS.name),
    email: clean(body.email, LIMITS.email),
    company: clean(body.company, LIMITS.company),
    phone: clean(body.phone, LIMITS.phone),
    topic: clean(body.topic, LIMITS.topic),
    industry: clean(body.industry, LIMITS.industry),
    message: clean(body.message, LIMITS.message, true)
  };
  if (fields.name.length < 2) return json(400, { ok: false, error: 'Please enter your full name.' });
  if (!EMAIL_RE.test(fields.email)) return json(400, { ok: false, error: 'Please enter a valid email address.' });
  if (fields.phone && !PHONE_RE.test(fields.phone)) return json(400, { ok: false, error: 'Please enter a valid phone number.' });
  if (!fields.topic) return json(400, { ok: false, error: 'Please choose what we can help with.' });
  if (fields.message.length < 10) return json(400, { ok: false, error: 'Please tell us a little more in your message.' });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  const to = process.env.CONTACT_TO || 'info@cybersystechnologies.com';
  if (!apiKey || !from) return json(500, { ok: false, error: 'The form is not available right now.' });

  const rows: [string, string][] = [
    ['Name', fields.name],
    ['Email', fields.email],
    ['Company', fields.company || 'Not provided'],
    ['Phone', fields.phone || 'Not provided'],
    ['Topic', fields.topic],
    ['Industry', fields.industry || 'Not specified']
  ];
  const subject = `Website enquiry: ${fields.topic}${fields.industry ? ` (${fields.industry})` : ''} from ${fields.name}`.replace(/[\r\n]+/g, ' ');
  const html = `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">${
    rows.map(([k, v]) => `<tr><td style="color:#4A5567"><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`).join('')
  }</table><p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(fields.message)}</p>`;
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\n${fields.message}`;

  const sent = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to: [to], reply_to: fields.email, subject, html, text })
  }).catch(() => null);

  if (!sent || !sent.ok) {
    console.warn('[contact] Resend refused the email:', sent ? sent.status + ' ' + (await sent.text().catch(() => '')) : 'network error');
    return json(502, { ok: false, error: 'We could not send your message. Please email us instead.' });
  }
  return json(200, { ok: true });
}
