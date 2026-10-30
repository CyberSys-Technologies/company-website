# CyberSys Technologies Website: Handover Guide

This guide is for whoever looks after www.cybersystechnologies.com next. It covers how the site is built and hosted, which outside services it uses and why, where the keys are kept, and how to make common changes safely.

No passwords or keys are written in this file or anywhere in the code. They live only in the service dashboards and in Vercel's settings.

---

## 1. The short version

| What | Where / how |
|---|---|
| Code | GitHub: `CyberSys-Technologies/company-website`. The website itself is in the `cybersys/` folder. |
| Hosting | **Vercel**. Every push to the `main` branch goes **live automatically**. Pushes to any other branch create a private **preview** link. |
| Website framework | React 19 + TypeScript, built with Vite. Styling uses Tailwind CSS, built at deploy time. |
| Contact form | Sends to our own server function (`cybersys/api/contact.ts`) on Vercel. That function checks for bots with **Cloudflare Turnstile** and sends the email through **Resend**. |
| Domain / DNS | `cybersystechnologies.com`, managed at the company's domain registrar. Resend's email records and Google's verification record are added there. |
| Search engines | Google Search Console, with the sitemap at `/sitemap.xml`. |

---

## 2. Accounts the company must own

Every account below should be registered to a **company** email address that more than one person can reach (for example an IT or admin mailbox), not a personal one. Whoever owns these logins controls the website.

| Service | What it is used for | Free plan enough? |
|---|---|---|
| **GitHub** | Stores the code and its full history. | Yes |
| **Vercel** | Builds and hosts the site, runs the contact-form function, and holds the secret keys. | Yes (Hobby). Pro is recommended for commercial use. |
| **Cloudflare** (Turnstile only) | Stops spam bots using the contact form. The domain does **not** need to be on Cloudflare. | Yes |
| **Resend** | Delivers contact-form messages to the company inbox. | Yes (3,000 emails/month) |
| **Domain registrar / DNS** | Owns the domain name; email and verification records are added here. | n/a |
| **Google Search Console** | Shows how the site appears in Google; the sitemap is submitted here. | Yes |

At handover, either transfer each account or add the new person as a team member, and change any shared passwords.

---

## 3. Why each add-on is there

### Cloudflare Turnstile: bot protection on the contact form
Public forms attract spam bots. Turnstile is Cloudflare's privacy-friendly alternative to "click all the traffic lights" puzzles.
- Most visitors never see it. It checks the browser quietly and only asks for a click if something looks suspicious.
- The page gets a one-time token from Cloudflare, and our server function checks that token with Cloudflare **before** sending any email. A bot can't skip this by calling the server directly.
- Keys:
  - **Site key:** public, safe for the page to see. Kept in Vercel as `TURNSTILE_SITE_KEY` and handed to the page by `GET /api/contact`.
  - **Secret key:** private, used only on the server. Kept in Vercel as `TURNSTILE_SECRET_KEY`.
- Managed at: dash.cloudflare.com → Turnstile → the "CyberSys Website" widget. The allowed **hostnames** must include the live domain, plus any preview domain you want to test on.

### Resend: sends the form emails
A website can't reliably send email by itself; messages would land in spam or be refused. Resend is an email-sending service.
- We verified the `cybersystechnologies.com` domain in Resend with DNS records (SPF and DKIM). This proves to Gmail and Outlook that Resend may send on our behalf, so enquiries reach the inbox and not spam.
- Each enquiry arrives from `website@cybersystechnologies.com` (or whatever `CONTACT_FROM` says). **Reply-To** is set to the visitor's email, so pressing Reply answers them directly.
- Key: `RESEND_API_KEY`, private and server only, with **sending access** only.
- Managed at: resend.com. Its **Emails** log shows every message sent, which is useful if someone says "I submitted the form but you never replied".
- ⚠️ Do **not** delete the Resend DNS records at the registrar, or form emails will stop arriving or go to spam.

### Vercel: hosting, the form function and the secret keys
- Builds the site from GitHub and serves it worldwide over HTTPS.
- Runs `api/contact.ts` as a "serverless function" (a small piece of server code that runs on demand). This keeps the secret keys off visitors' computers.
- Applies the **security headers** in `vercel.json` (see section 5).
- **Firewall rate-limit rule** on `/api/contact`, which caps how many messages one visitor can send. This is a second layer on top of the limit in the code.

### Why not a simple form service (as before)?
The site used to post straight from the browser to a free form-relay service. That exposed the company email address in the page code, had no real bot protection, and depended on a third party nobody controlled. The current setup keeps everything inside company-owned accounts.

---

## 4. Environment variables (Vercel → Project → Settings → Environment Variables)

Set these for **Production** and **Preview**. After changing any of them, **redeploy** for the change to take effect (Deployments → ⋯ → Redeploy).

| Name | Secret? | What it is |
|---|---|---|
| `TURNSTILE_SITE_KEY` | No (public by design) | Cloudflare Turnstile site key |
| `TURNSTILE_SECRET_KEY` | **Yes** | Cloudflare Turnstile secret key |
| `RESEND_API_KEY` | **Yes** | Resend API key (sending access) |
| `CONTACT_FROM` | No | Sender, e.g. `CyberSys Website <website@cybersystechnologies.com>`. Must be on the verified domain. |
| `CONTACT_TO` | No | Inbox that receives enquiries, e.g. `info@cybersystechnologies.com` |
| `ALLOWED_ORIGINS` | No, optional | Extra web addresses allowed to post the form (comma-separated). Vercel preview addresses are already allowed automatically. |

`cybersys/.env.example` lists the same names. Real `.env` files are blocked from Git by `.gitignore`. **Never commit keys to GitHub.**

### Rotating a key (if one leaks or a staff member leaves)
1. Create a new key in Cloudflare or Resend.
2. Paste it into Vercel's environment variables.
3. Redeploy.
4. Delete the old key in Cloudflare or Resend.

---

## 5. Security measures in place

**Contact form (`api/contact.ts`).** Every message passes these checks before an email is sent:
1. It must come from our own website, as a JSON request of at most 10 KB.
2. A rate limit allows 5 messages per visitor per 10 minutes, on top of the Vercel Firewall rule.
3. Bot checks:
   - a hidden "website" field that only bots fill in;
   - a minimum time spent on the form;
   - the Turnstile token, verified with Cloudflare.
4. Every field is trimmed, length-limited and validated (name, email, phone pattern, message length).
5. Visitor text is escaped before it goes into the email, so HTML or script can't be injected. Line breaks are stripped from the subject, so mail headers can't be injected.
6. Error messages are generic and reveal nothing about the setup.

**Security headers (`vercel.json`):**
- **Content-Security-Policy.** The page may only load code, styles, fonts and images from the website itself. The one exception is Cloudflare Turnstile. This blocks most injected-script attacks.
  - If you ever add a third-party tool (analytics, chat widget, embedded map or video), its domain must be added here or it will be blocked.
- **Strict-Transport-Security:** browsers always use HTTPS.
- **X-Frame-Options / frame-ancestors:** other sites can't embed ours (stops click-jacking).
- **X-Content-Type-Options, Referrer-Policy, Permissions-Policy (camera, mic and location off), Cross-Origin-Opener-Policy.**

**Other measures:**
- Production builds don't publish source maps (`vite.config.ts`).
- There are no secrets in the front-end code.

You can check the headers at any time at securityheaders.com.

---

## 6. SEO

- **Clean page addresses** are defined in `cybersys/routes.ts` (`ROUTES`), for example `/about`, `/solutions/cybersecurity` and `/industries/oil-gas`. Old `#page` links from the previous site redirect automatically.
- **Titles and descriptions** for each page are in `routes.ts` (`PAGE_META`). Keep titles under about 60 characters and descriptions under about 160.
- **Share previews** (WhatsApp, LinkedIn, X) use the tags in `index.html` and the image `public/og-image.jpg` (1200×630).
- **Company details for Google** (address, phone, social profiles) are the JSON-LD block in `index.html`. Update it if the address or phone changes.
- **Sitemap:** `public/sitemap.xml`. **Robots:** `public/robots.txt`.
  - **When you add or rename a page, add it to `routes.ts` and `sitemap.xml`.**

---

## 7. Speed (for slow networks)

- Styling is generated at build time (about 9 KB). Fonts (Montserrat) are bundled with the site.
- Each page's code downloads only when that page is opened.
- Images are WebP, mostly 40–100 KB. The original JPG and PNG files are kept next to them in `public/`.
- **To add a new image:** export or convert it to WebP at about 1600px wide and quality 70–80. Squoosh.app works, or the `sharp` library already in the project. Aim for under 150 KB.
- Built files are cached by browsers for a year (they get new names on every build). Images are cached for a week.

---

## 8. Everyday tasks

**Run the site on your computer.** Requires Node.js 20+.
```
cd cybersys
npm install
npm run dev        # http://localhost:3000
```
The contact form can't send from localhost, because the `/api` function only runs on Vercel. The form shows its "email us instead" fallback. Test sending on a Vercel preview.

**Make a change safely:**
1. Create a branch: `git checkout -b my-change`.
2. Edit, then run `npm run build` to make sure it builds.
3. Push the branch. Vercel posts a **preview link** on the GitHub pull request. Check it there.
4. Merge into `main`. The change goes **live** within a minute or two.

**Undo a bad release:** in Vercel → Deployments, open the last good deployment → ⋯ → **Promote to Production** (instant rollback).

**Where things are:**

| Item | Location |
|---|---|
| Page text | `cybersys/pages/*.tsx`; industry content in `cybersys/data/industries.tsx` |
| Navigation menu | `cybersys/constants.tsx` (`NAV_LINKS`) |
| Phone, WhatsApp and email | `cybersys/constants.tsx`, `components/Layout.tsx` (footer), `pages/Contact.tsx` |
| Brand colours and fonts | `cybersys/tailwind.config.js` |
| Design decisions and change history | `cybersys/REVAMP_LOG.md` |

---

## 9. Troubleshooting

| Problem | Likely cause and fix |
|---|---|
| Form says "Verification failed" | The Turnstile keys are wrong or missing, or the site's hostname isn't in the Turnstile widget's hostname list. Check Cloudflare and the Vercel env vars, then redeploy. |
| Form says "not available right now" | `RESEND_API_KEY` or `CONTACT_FROM` isn't set in Vercel. |
| Form says "could not send" | Resend refused the email. Check the Resend dashboard → Emails/Logs. Usually the domain isn't verified, or `CONTACT_FROM` isn't on the verified domain. |
| Enquiries land in spam | The Resend DNS records are missing or changed at the registrar. Re-check them in Resend → Domains. |
| A new script, widget or embed doesn't load | The Content-Security-Policy is blocking it. Add its domain in `vercel.json`. |
| A page address shows 404 or the Home page | It's missing from `routes.ts`. |

---

*Last updated: 30 October 2026, during the website revamp.*
