import React, { useEffect, useRef, useState } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2, Loader2, Mail, MapPin, Phone } from 'lucide-react';
import { Page } from '../types';
import { INDUSTRIES } from '../data/industries';
import { SOLUTION_CATALOGUE } from '../data/solutions';
import { Eyebrow, icon, useReveal } from '../components/SolutionBlocks';
import WhatsAppIcon from '../components/WhatsAppIcon';
import Turnstile, { TurnstileHandle, useTurnstileSiteKey } from '../components/Turnstile';
import { WHATSAPP_URL } from '../constants';

const TOPICS = [
  ...SOLUTION_CATALOGUE.map(s => s.title),
  'Partnership',
  'General enquiry'
];

const INDUSTRY_OPTIONS = [...INDUSTRIES.map(i => i.name), 'Manufacturing', 'Other'];

/** Pre-select the topic (and industry) from the page the visitor came from */
const topicFor = (from: Page | null): { topic: string; industry: string } => {
  const solution = SOLUTION_CATALOGUE.find(s => s.path === from);
  if (solution) return { topic: solution.title, industry: '' };
  const industry = INDUSTRIES.find(i => i.page === from);
  if (industry) return { topic: 'General enquiry', industry: industry.name };
  return { topic: 'General enquiry', industry: '' };
};

const EMPTY = { name: '', email: '', company: '', phone: '', message: '' };

// Field limits, matched by the server in api/contact.ts
const MAX = { name: 100, email: 254, company: 120, phone: 30, message: 5000 };

const inputClass = 'w-full bg-white border border-slate-200 rounded-lg px-4 py-3.5 text-base text-brand-text placeholder:text-slate-400 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/15 outline-none transition';
const labelClass = 'block text-sm font-semibold text-brand-text mb-2';

const Contact: React.FC<{ from?: Page | null }> = ({ from = null }) => {
  useReveal();
  const initial = topicFor(from);
  const [form, setForm] = useState({ ...EMPTY, topic: initial.topic, industry: initial.industry });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorText, setErrorText] = useState('');
  // Bot checks: a hidden field people never see, time spent on the form, and Turnstile
  const [website, setWebsite] = useState('');
  const [token, setToken] = useState('');
  const startedAt = useRef(Date.now());
  const turnstileRef = useRef<TurnstileHandle>(null);
  const siteKey = useTurnstileSiteKey();

  // Re-apply the pre-selection if the visitor arrives from a different page
  useEffect(() => {
    const next = topicFor(from);
    setForm(f => ({ ...f, topic: next.topic, industry: next.industry }));
  }, [from]);

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }));

  const subject = `Website enquiry: ${form.topic}${form.industry ? ` (${form.industry})` : ''} from ${form.name || 'a visitor'}`;
  const body = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Company: ${form.company || 'Not provided'}`,
    `Phone: ${form.phone || 'Not provided'}`,
    `Topic: ${form.topic}`,
    `Industry: ${form.industry || 'Not specified'}`,
    '',
    form.message
  ].join('\n');
  const mailto = `mailto:info@cybersystechnologies.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (siteKey && !token) {
      setErrorText('Please wait a moment while we check you are not a bot, then try again.');
      setStatus('error');
      return;
    }
    setStatus('sending');
    setErrorText('');
    try {
      // Sent to our own server function, which validates, checks for bots and emails the team
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          topic: form.topic,
          industry: form.industry,
          message: form.message,
          website,
          startedAt: startedAt.current,
          turnstileToken: token
        })
      });
      const result = await response.json().catch(() => null) as { ok?: boolean; error?: string } | null;
      if (response.ok && result?.ok) {
        setStatus('sent');
      } else {
        setErrorText(result?.error || '');
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      // Each Turnstile token works once
      turnstileRef.current?.reset();
    }
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. HERO: text on light grey, photo filling the other half */}
      <section className="bg-slate-50 border-b border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-6 sm:px-12 md:px-16 2xl:px-24 py-14 lg:py-20 2xl:py-24">
            <div className="max-w-xl w-full mx-auto text-left animate-hero-rise">
              <Eyebrow>Contact Us</Eyebrow>
              <h1 className="mt-5 text-[2.25rem] sm:text-5xl xl:text-6xl font-bold text-brand-text leading-[1.1]">
                Get in <span className="text-brand-primary">Touch</span>
              </h1>
              <p className="mt-6 text-base md:text-lg 2xl:text-xl text-brand-muted font-medium leading-relaxed">
                Tell us what you are working on and the CyberSys Technologies team will get back to you. You can also call, email, message us on WhatsApp or visit our Lagos office.
              </p>
            </div>
          </div>
          <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-0 overflow-hidden">
            <img src="/contact-support.webp" alt="CyberSys Technologies team member ready to help" className="absolute inset-0 w-full h-full object-cover object-[35%_center] animate-hero-image" />
          </div>
        </div>
      </section>

      {/* 2. FORM AND DETAILS */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16">
            {/* Details: light mist panel beside the form from lg */}
            <aside className="lg:col-span-5 xl:col-span-4 reveal-from-left">
              <div className="rounded-[1.75rem] bg-brand-mist p-8 sm:p-10 lg:sticky lg:top-28">
                <h2 className="text-2xl font-semibold text-brand-text">Reach us directly</h2>
                <p className="mt-3 text-base text-brand-muted font-medium leading-relaxed">Use any of the details below.</p>
                <ul className="mt-10 space-y-8">
                  <li className="flex items-start gap-4">
                    <span className="w-11 h-11 flex-shrink-0 rounded-xl bg-white text-brand-primary flex items-center justify-center">{icon(<Mail />, 20)}</span>
                    <span className="min-w-0">
                      <span className="block text-sm text-brand-muted">Email</span>
                      <a href="mailto:info@cybersystechnologies.com" className="block mt-1 text-[15px] font-bold text-brand-text hover:text-brand-primary transition-colors [overflow-wrap:anywhere]">info@cybersystechnologies.com</a>
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-11 h-11 flex-shrink-0 rounded-xl bg-white text-brand-primary flex items-center justify-center">{icon(<Phone />, 20)}</span>
                    <span>
                      <span className="block text-sm text-brand-muted">Phone</span>
                      <a href="tel:+2348025955618" className="block mt-1 text-base font-bold text-brand-text hover:text-brand-primary transition-colors">+234 802 595 5618</a>
                      <a href="tel:+2348109076541" className="block text-base font-bold text-brand-text hover:text-brand-primary transition-colors">+234 810 907 6541</a>
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-11 h-11 flex-shrink-0 rounded-xl bg-white text-brand-primary flex items-center justify-center"><WhatsAppIcon size={20} /></span>
                    <span>
                      <span className="block text-sm text-brand-muted">WhatsApp</span>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block mt-1 text-base font-bold text-brand-text hover:text-brand-primary transition-colors">+234 802 595 5618</a>
                      <span className="block text-sm text-brand-muted">Chat with us or send a message</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-11 h-11 flex-shrink-0 rounded-xl bg-white text-brand-primary flex items-center justify-center">{icon(<MapPin />, 20)}</span>
                    <span>
                      <span className="block text-sm text-brand-muted">Office</span>
                      <span className="block mt-1 text-base font-bold text-brand-text leading-snug">Plot 23, Providence Street, Lekki Phase 1, Lagos, Nigeria</span>
                    </span>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-7 xl:col-span-8 reveal-from-right">
              {status === 'sent' ? (
                <div className="h-full rounded-[1.75rem] border border-slate-200 p-10 sm:p-14 flex flex-col items-start justify-center">
                  <span className="w-14 h-14 rounded-full bg-brand-secondary/10 text-brand-secondary flex items-center justify-center"><CheckCircle2 size={28} /></span>
                  <h2 className="mt-6 text-3xl font-bold text-brand-text">Thank you, {form.name.split(' ')[0] || 'we got it'}</h2>
                  <p className="mt-4 text-lg text-brand-muted font-medium leading-relaxed max-w-xl">
                    Your message about <span className="font-semibold text-brand-text">{form.topic}</span> has been sent. We will reply to <span className="font-semibold text-brand-text">{form.email}</span> as soon as possible.
                  </p>
                  <button
                    onClick={() => { setForm(f => ({ ...f, ...EMPTY })); setStatus('idle'); startedAt.current = Date.now(); }}
                    className="mt-8 text-sm font-bold text-brand-primary hover:text-brand-deep underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative rounded-[1.75rem] border border-slate-200 p-6 sm:p-10">
                  <h2 className="text-2xl font-semibold text-brand-text">Send us a message</h2>
                  <p className="mt-2 text-base text-brand-muted">Fields marked * are required.</p>

                  {status === 'error' && (
                    <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl border border-amber-200 bg-amber-50 p-5">
                      <AlertCircle size={20} className="text-amber-600 flex-shrink-0" />
                      <p className="text-sm text-amber-900 font-medium flex-1">{errorText || 'We couldn’t send your message just now. You can send it straight from your email app instead.'}</p>
                      <a href={mailto} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brand-primary text-white text-sm font-bold hover:bg-brand-deep transition-colors">
                        <Mail size={15} /> Email us
                      </a>
                    </div>
                  )}

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="c-topic" className={labelClass}>What can we help with? *</label>
                      <select id="c-topic" required value={form.topic} onChange={update('topic')} className={`${inputClass} cursor-pointer`}>
                        {TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="c-industry" className={labelClass}>Your industry</label>
                      <select id="c-industry" value={form.industry} onChange={update('industry')} className={`${inputClass} cursor-pointer`}>
                        <option value="">Select an industry</option>
                        {INDUSTRY_OPTIONS.map(i => <option key={i} value={i}>{i}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="c-name" className={labelClass}>Full name *</label>
                      <input id="c-name" required type="text" autoComplete="name" minLength={2} maxLength={MAX.name} value={form.name} onChange={update('name')} className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="c-email" className={labelClass}>Work email *</label>
                      <input id="c-email" required type="email" autoComplete="email" maxLength={MAX.email} value={form.email} onChange={update('email')} className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="c-company" className={labelClass}>Company</label>
                      <input id="c-company" type="text" autoComplete="organization" maxLength={MAX.company} value={form.company} onChange={update('company')} className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="c-phone" className={labelClass}>Phone</label>
                      <input id="c-phone" type="tel" autoComplete="tel" maxLength={MAX.phone} pattern="[+()0-9 .-]{6,30}" title="Digits, spaces and + ( ) - only" value={form.phone} onChange={update('phone')} className={inputClass} />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="c-message" className={labelClass}>Message *</label>
                      <textarea id="c-message" required rows={6} minLength={10} maxLength={MAX.message} value={form.message} onChange={update('message')} className={`${inputClass} resize-y`} placeholder="Tell us a little about what you need." />
                    </div>
                  </div>

                  {/* Hidden from people (and screen readers); bots that fill it in are ignored */}
                  <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
                    <label htmlFor="c-website">Website</label>
                    <input id="c-website" type="text" tabIndex={-1} autoComplete="off" value={website} onChange={e => setWebsite(e.target.value)} />
                  </div>

                  <Turnstile ref={turnstileRef} siteKey={siteKey} onToken={setToken} />

                  <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                    <p className="text-sm text-brand-muted">
                      Or email us at <a href={mailto} className="font-semibold text-brand-primary hover:underline">info@cybersystechnologies.com</a>
                    </p>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-brand-action hover:bg-brand-deep text-white rounded font-semibold text-[11px] uppercase tracking-[0.15em] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? <><Loader2 size={16} className="animate-spin" /> Sending</> : <>Send Message <ArrowRight size={16} /></>}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
