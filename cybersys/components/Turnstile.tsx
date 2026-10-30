import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

/**
 * Cloudflare Turnstile: a privacy-friendly bot check, usually invisible to people.
 * The script loads only when this component is on screen (the Contact page), and the
 * token it returns is verified on the server by /api/contact.
 * The public site key is fetched from GET /api/contact (TURNSTILE_SITE_KEY in Vercel);
 * without it nothing renders and the form works without the check.
 */

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, options: Record<string, unknown>) => string;
      reset: (id?: string) => void;
      remove: (id?: string) => void;
    };
  }
}

let siteKeyPromise: Promise<string> | null = null;
const fetchSiteKey = () => {
  if (!siteKeyPromise) {
    siteKeyPromise = fetch('/api/contact')
      .then(res => (res.ok ? res.json() : null))
      .then(data => (data && typeof data.siteKey === 'string' ? data.siteKey : ''))
      .catch(() => '');
  }
  return siteKeyPromise;
};

/** The Turnstile site key, or '' when Turnstile is not configured (e.g. local dev) */
export const useTurnstileSiteKey = () => {
  const [siteKey, setSiteKey] = useState('');
  useEffect(() => {
    let active = true;
    fetchSiteKey().then(key => { if (active) setSiteKey(key); });
    return () => { active = false; };
  }, []);
  return siteKey;
};

const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

let scriptPromise: Promise<void> | null = null;
const loadScript = () => {
  if (window.turnstile) return Promise.resolve();
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => { scriptPromise = null; reject(new Error('Turnstile failed to load')); };
      document.head.appendChild(script);
    });
  }
  return scriptPromise;
};

export interface TurnstileHandle { reset: () => void }

const Turnstile = forwardRef<TurnstileHandle, { siteKey: string; onToken: (token: string) => void }>(({ siteKey, onToken }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const onTokenRef = useRef(onToken);
  onTokenRef.current = onToken;

  useImperativeHandle(ref, () => ({
    reset: () => {
      onTokenRef.current('');
      if (widgetId.current) window.turnstile?.reset(widgetId.current);
    }
  }));

  useEffect(() => {
    if (!siteKey) return;
    let cancelled = false;
    loadScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.turnstile) return;
        widgetId.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          appearance: 'interaction-only',
          callback: (token: string) => onTokenRef.current(token),
          'expired-callback': () => onTokenRef.current(''),
          'error-callback': () => onTokenRef.current('')
        });
      })
      .catch(() => onTokenRef.current(''));
    return () => {
      cancelled = true;
      if (widgetId.current) window.turnstile?.remove(widgetId.current);
      widgetId.current = null;
    };
  }, [siteKey]);

  if (!siteKey) return null;
  return <div ref={containerRef} className="mt-6" />;
});

export default Turnstile;
