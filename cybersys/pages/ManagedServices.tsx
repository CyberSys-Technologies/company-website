import React, { useEffect, useState } from 'react';
import {
  Activity, Cloud, Headset, HardDrive, Receipt, RefreshCw, ShieldCheck, Check
} from 'lucide-react';
import { Page } from '../types';
import { BackToSolutions, Eyebrow, PhotoCTA, PrimaryButton, SectionHeader, icon, useReveal } from '../components/SolutionBlocks';

const SERVICES = [
  { icon: <Cloud />, name: 'Cloud workloads', status: 'Healthy', detail: 'Azure, AWS and OCI resources monitored' },
  { icon: <ShieldCheck />, name: 'Endpoint security', status: 'Protected', detail: 'All devices reporting in' },
  { icon: <RefreshCw />, name: 'Patching', status: 'Up to date', detail: 'Monthly cycle complete' },
  { icon: <HardDrive />, name: 'Backups', status: 'Verified', detail: 'Last restore test passed' },
  { icon: <Headset />, name: 'User support', status: 'Available', detail: 'Requests logged and tracked to resolution' }
];

/** Illustrative status board: rows check in one by one, and hovering a row reveals its detail */
const StatusBoard: React.FC = () => {
  const [checked, setChecked] = useState(0);
  const [hover, setHover] = useState<number | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setChecked(SERVICES.length); return; }
    const timer = window.setInterval(() => setChecked(c => (c >= SERVICES.length ? c : c + 1)), 450);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-[560px] mx-auto">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.35)] overflow-hidden">
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-slate-100">
          <div>
            <div className="text-sm text-slate-500">Your environment</div>
            <div className="mt-0.5 text-lg font-semibold text-brand-text">Service health</div>
          </div>
        </div>
        <ul onMouseLeave={() => setHover(null)}>
          {SERVICES.map((s, i) => {
            const done = i < checked;
            const open = hover === i;
            return (
              <li key={s.name}>
                <button
                  type="button"
                  onMouseEnter={() => setHover(i)}
                  onFocus={() => setHover(i)}
                  className={`w-full flex items-center gap-4 px-6 sm:px-8 py-4 text-left border-b border-slate-100 last:border-b-0 transition-colors ${open ? 'bg-brand-mist/70' : ''}`}
                >
                  <span className={`w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center transition-colors ${open ? 'bg-brand-primary text-white' : 'bg-brand-mist text-brand-primary'}`}>
                    {icon(s.icon, 20)}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-sm font-semibold text-brand-text">{s.name}</span>
                    <span className={`block text-xs text-brand-muted overflow-hidden transition-all duration-300 ${open ? 'max-h-6 opacity-100 mt-0.5' : 'max-h-0 opacity-0'}`}>{s.detail}</span>
                  </span>
                  <span className={`inline-flex items-center gap-2 text-xs font-semibold transition-all duration-500 ${done ? 'text-brand-secondary opacity-100' : 'text-slate-300 opacity-60'}`}>
                    {done ? <Check size={14} strokeWidth={3} /> : <span className="w-3 h-3 rounded-full border-2 border-slate-300 border-t-transparent animate-spin" />}
                    {done ? s.status : 'Checking'}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const COVERAGE = [
  { icon: <Activity />, title: 'Monitoring & Support', desc: 'Proactive monitoring of key systems, with support when issues arise.' },
  { icon: <RefreshCw />, title: 'Patching & Updates', desc: 'Keeping systems current, supported and secure.' },
  { icon: <HardDrive />, title: 'Backup Management', desc: 'Backups monitored and restores tested, so recovery works when needed.' },
  { icon: <ShieldCheck />, title: 'Managed Security', desc: 'Endpoint, firewall and detection services delivered with our security partners.' },
  { icon: <Receipt />, title: 'Licensing & Asset Management', desc: 'Microsoft, Oracle and cloud licences tracked and right-sized.' },
  { icon: <Headset />, title: 'User Support', desc: 'A clear point of contact for your staff’s IT requests.' }
]

const ManagedServices: React.FC<{ onPageChange: (p: Page) => void }> = ({ onPageChange }) => {
  useReveal();

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. HERO: text and a live status board */}
      <section className="relative bg-white border-b border-slate-100">
        <div className="absolute inset-0 blueprint-grid opacity-50 pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16 relative py-16 lg:py-20">
          <BackToSolutions onPageChange={onPageChange} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 xl:col-span-5 max-w-xl w-full mx-auto text-left animate-hero-rise">
              <Eyebrow>Operational Continuity</Eyebrow>
              <h1 className="mt-5 text-[2rem] sm:text-5xl lg:text-[2.6rem] xl:text-5xl 2xl:text-6xl font-bold text-brand-text leading-[1.1]">
                IT & Managed<br /> <span className="text-brand-primary">Services</span>
              </h1>
              <p className="mt-6 text-base md:text-lg 2xl:text-xl text-brand-muted font-medium leading-relaxed">
                CyberSys Technologies helps keep your systems secure, available and up to date, with monitoring, support and operational management delivered alongside our technology partners.
              </p>
              <PrimaryButton onClick={() => onPageChange('contact')} className="mt-8">Talk to Our Service Team</PrimaryButton>
            </div>
            <div className="lg:col-span-6 xl:col-span-7 animate-hero-image">
              <StatusBoard />
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT'S COVERED: horizontal cards, three columns, sliding in from the right */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16">
          <SectionHeader eyebrow="Our Services" title={<>Where We <span className="text-brand-primary">Come In</span></>} />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {COVERAGE.map((c, i) => (
              <div
                key={c.title}
                className="reveal-from-right group flex items-start gap-4 bg-white rounded-2xl border-l-4 border-brand-secondary/40 hover:border-brand-secondary p-6 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.35)] hover:-translate-y-1 transition-all duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="w-12 h-12 flex-shrink-0 rounded-xl bg-brand-mist text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                  {icon(c.icon, 22)}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-brand-text leading-snug">{c.title}</h3>
                  <p className="mt-2 text-sm text-brand-muted font-medium leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PhotoCTA
        onPageChange={onPageChange}
        eyebrow="Work with CyberSys"
        title="Focus on Your Business"
        text="Talk to CyberSys Technologies about the support your systems need, so your team can focus on what matters."
        cta="Discuss Managed Services"
        image="/pages/managed-services-desk.webp"
        imageAlt="CyberSys Technologies professional working at a desk"
      />
    </div>
  );
};

export default ManagedServices;
