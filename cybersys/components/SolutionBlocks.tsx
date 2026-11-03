import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, Mail, Phone, Users } from 'lucide-react';
import { Page } from '../types';

/** Observes every reveal class on the page; re-runs when `key` changes */
export const useReveal = (key?: unknown) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });
    document.querySelectorAll('.reveal-on-scroll, .reveal-from-left, .reveal-from-right, .reveal-zoom, .reveal-cascade').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);
};

export const icon = (node: React.ReactNode, size: number, strokeWidth = 1.6) =>
  React.cloneElement(node as React.ReactElement<{ size?: number; strokeWidth?: number }>, { size, strokeWidth });

export const BackToSolutions: React.FC<{ onPageChange: (p: Page) => void; light?: boolean }> = ({ onPageChange, light }) => (
  <button
    onClick={() => onPageChange('solutions')}
    className={`inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors mb-8 group ${
      light ? 'text-white/70 hover:text-white' : 'text-slate-500 hover:text-brand-primary'
    }`}
  >
    <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Solutions
  </button>
);

export const Eyebrow: React.FC<{ children: React.ReactNode; light?: boolean; className?: string }> = ({ children, light, className = '' }) => (
  <div className={`text-[13px] font-medium uppercase tracking-[0.2em] ${light ? 'text-brand-mint' : 'text-brand-action'} ${className}`}>{children}</div>
);

export const BUTTON_CLASS = 'inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-brand-action hover:bg-brand-deep text-white rounded font-semibold text-[11px] uppercase tracking-[0.15em] transition-colors cursor-pointer';

export const PrimaryButton: React.FC<{ onClick: () => void; children: React.ReactNode; className?: string }> = ({ onClick, children, className = '' }) => (
  <button onClick={onClick} className={`${BUTTON_CLASS} ${className}`}>
    {children} <ArrowRight size={15} />
  </button>
);

/** Centred section heading: eyebrow, title and optional supporting text, stacked */
export const SectionHeader: React.FC<{
  eyebrow?: string;
  title: React.ReactNode;
  text?: React.ReactNode;
  className?: string;
  /** Reveal animation class for the block */
  reveal?: string;
}> = ({ eyebrow, title, text, className = 'mb-12', reveal = 'reveal-on-scroll' }) => (
  <div className={`text-center ${reveal} ${className}`}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2 className={`${eyebrow ? 'mt-5' : ''} text-3xl md:text-4xl font-bold text-brand-text leading-[1.1]`}>{title}</h2>
    {text && <p className="mt-5 text-base md:text-lg text-brand-muted font-medium leading-relaxed">{text}</p>}
  </div>
);

/** Fade only the photo edges that have a gap beside them, so it blends into the blurred copy behind */
const fade = (dir: string) => `linear-gradient(to ${dir}, transparent, #000 40px, #000 calc(100% - 40px), transparent)`;

/** Whole (zoomed-out) photo, with a lightly blurred copy of itself filling any space around it */
export const HeroPhoto: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [gap, setGap] = useState<'bottom' | 'right' | null>(null);

  useEffect(() => {
    const box = boxRef.current, img = imgRef.current;
    if (!box || !img) return;
    const measure = () => {
      if (!img.naturalWidth || !box.clientHeight) return;
      const ratio = img.naturalWidth / img.naturalHeight - box.clientWidth / box.clientHeight;
      setGap(Math.abs(ratio) < 0.02 ? null : ratio > 0 ? 'bottom' : 'right');
    };
    const observer = new ResizeObserver(measure);
    observer.observe(box);
    img.addEventListener('load', measure);
    measure();
    return () => { observer.disconnect(); img.removeEventListener('load', measure); };
  }, [src]);

  const mask = gap ? fade(gap) : undefined;
  return (
    <>
      <img src={src} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover scale-110 blur-[6px] brightness-95" />
      <div ref={boxRef} className="absolute inset-0 flex items-center justify-center">
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className="block max-w-full max-h-full w-auto h-auto animate-hero-image"
          style={{ maskImage: mask, WebkitMaskImage: mask }}
        />
      </div>
    </>
  );
};

/** Hero: centred text on light grey, photo filling the other half */
export const SplitHero: React.FC<{
  onPageChange: (p: Page) => void;
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  cta: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  /** Show the "Back to Solutions" link (solution pages only) */
  showBack?: boolean;
  /** Send the button to a link (e.g. mailto) instead of the Contact page */
  ctaHref?: string;
}> = ({ onPageChange, eyebrow, title, intro, cta, image, imageAlt, imagePosition = 'object-center', showBack = true, ctaHref }) => (
  <section className="bg-slate-50 border-b border-slate-100">
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex items-center justify-center px-6 sm:px-12 md:px-16 2xl:px-24 py-14 lg:py-20 2xl:py-24">
        <div className="max-w-xl w-full mx-auto text-left animate-hero-rise">
          {showBack && <BackToSolutions onPageChange={onPageChange} />}
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-[2rem] sm:text-5xl lg:text-[2.6rem] xl:text-5xl 2xl:text-6xl font-bold text-brand-text leading-[1.1]">
            {title}
          </h1>
          <p className="mt-6 text-base md:text-lg 2xl:text-xl text-brand-muted font-medium leading-relaxed">{intro}</p>
          {ctaHref
            ? <a href={ctaHref} className={`${BUTTON_CLASS} mt-8`}>{cta} <ArrowRight size={15} /></a>
            : <PrimaryButton onClick={() => onPageChange('contact')} className="mt-8">{cta}</PrimaryButton>}
        </div>
      </div>
      <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-0 overflow-hidden">
        <img src={image} alt={imageAlt} className={`absolute inset-0 w-full h-full object-cover ${imagePosition} animate-hero-image`} />
      </div>
    </div>
  </section>
);

/** Closing section: message plus three ways to reach us */
export const ContactCTA: React.FC<{
  onPageChange: (p: Page) => void;
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  consultLabel: string;
  tone?: 'white' | 'mist';
}> = ({ onPageChange, eyebrow, title, text, consultLabel, tone = 'white' }) => (
  <section className={`py-16 lg:py-20 relative overflow-hidden ${tone === 'mist' ? 'bg-brand-mist' : 'bg-white'}`}>
    <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16 2xl:px-24 relative">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-20 items-center">
        <div className="xl:col-span-6 max-w-3xl reveal-from-left">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl md:text-4xl 2xl:text-5xl font-bold text-brand-text leading-[1.1]">{title}</h2>
          <p className="mt-6 text-base md:text-lg text-brand-muted font-medium leading-relaxed">{text}</p>
        </div>
        <div className="xl:col-span-6 reveal-from-right">
          <div className="rounded-[1.5rem] bg-white border border-slate-200 overflow-hidden shadow-[0_20px_45px_-30px_rgba(32,130,166,0.4)]">
            {[
              { icon: <Users />, label: consultLabel, value: 'Book a consultation', action: () => onPageChange('contact') },
              { icon: <Mail />, label: 'Email us', value: 'info@cybersystechnologies.com', href: 'mailto:info@cybersystechnologies.com' },
              { icon: <Phone />, label: 'Call or WhatsApp us', value: '+234 802 595 5618 · +234 810 907 6541', href: 'tel:+2348025955618' }
            ].map(item => {
              const inner = (
                <>
                  <span className="w-11 h-11 flex-shrink-0 rounded-xl bg-brand-mist text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    {icon(item.icon, 20, 1.75)}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-[12px] font-medium uppercase tracking-[0.2em] text-slate-400">{item.label}</span>
                    <span className="block mt-1 text-base font-bold text-brand-text group-hover:text-brand-primary transition-colors break-words">{item.value}</span>
                  </span>
                  <ArrowRight size={18} className="text-slate-300 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                </>
              );
              const cls = 'group flex items-center gap-5 w-full text-left px-7 py-5 border-b border-slate-100 last:border-b-0 hover:bg-brand-mist/60 transition-colors';
              return item.href
                ? <a key={item.label} href={item.href} className={cls}>{inner}</a>
                : <button key={item.label} onClick={item.action} className={cls}>{inner}</button>;
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/** Closing section: text on light grey, photo filling the other half (like Home) */
export const PhotoCTA: React.FC<{
  onPageChange: (p: Page) => void;
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  image: string;
  imageAlt: string;
}> = ({ onPageChange, eyebrow, title, text, cta, image, imageAlt }) => (
  <section className="bg-slate-50 border-t border-slate-100">
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex items-center justify-center px-6 sm:px-12 md:px-16 2xl:px-24 py-16 lg:py-20 2xl:py-24">
        <div className="max-w-xl w-full mx-auto text-left reveal-from-left">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl md:text-4xl 2xl:text-5xl font-bold text-brand-text leading-[1.1]">{title}</h2>
          <p className="mt-6 text-base md:text-lg 2xl:text-xl text-brand-muted font-medium leading-relaxed">{text}</p>
          <PrimaryButton onClick={() => onPageChange('contact')} className="mt-8">{cta}</PrimaryButton>
        </div>
      </div>
      <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-0 overflow-hidden">
        <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      </div>
    </div>
  </section>
);
