import React from 'react';
import { Activity, ArrowRight, Compass, Search, Server, ShieldCheck, TrendingUp, Zap } from 'lucide-react';
import { Page } from '../types';
import { SOLUTION_CATALOGUE } from '../data/solutions';
import { ContactCTA, Eyebrow, PrimaryButton, SectionHeader, icon, useReveal } from '../components/SolutionBlocks';

interface SolutionsProps {
  onPageChange: (p: Page) => void;
}

// Positions (in % of the hero image) for the solution nodes drawn over it
const SOLUTION_NODES = SOLUTION_CATALOGUE.map((sol, i) => {
  const spots = [[25, 20], [75, 20], [80, 50], [72, 81], [28, 81], [20, 50]];
  const labels = ['Cloud', 'Cybersecurity', 'AI & Analytics', 'ERP & Apps', 'Managed IT', 'Training'];
  return { icon: sol.icon, label: labels[i], x: spots[i][0], y: spots[i][1] };
});

const Solutions: React.FC<SolutionsProps> = ({ onPageChange }) => {
  // Scroll reveals: each section uses a different entrance (rise, cascade, zoom, slide)
  useReveal();

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. HERO: centred text, with the six solution areas connected to CyberSys in a framed image */}
      <section className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-6 sm:px-12 md:px-16 py-14 lg:py-16">
          <div className="max-w-xl w-full mx-auto text-left animate-hero-rise">
            <Eyebrow>Solutions Catalogue</Eyebrow>
            <h1 className="mt-5 text-[2rem] sm:text-5xl lg:text-[2.6rem] xl:text-5xl 2xl:text-6xl font-bold text-brand-text leading-[1.1]">
              Supporting Digital <span className="text-brand-primary">Transformation</span>
            </h1>
            <p className="mt-6 text-base md:text-lg 2xl:text-xl text-brand-muted font-medium leading-relaxed">
              Modern enterprises operate in complex, regulated, and highly connected environments. CyberSys Technologies designs, implements and manages secure digital platforms that ensure operational resilience, data protection, and performance.
            </p>
            <PrimaryButton onClick={() => onPageChange('contact')} className="mt-8">Talk to a Solutions Architect</PrimaryButton>
          </div>

          <div className="relative w-full max-w-[540px] mx-auto aspect-[5/4] rounded-[1.5rem] overflow-hidden shadow-[0_30px_60px_-40px_rgba(15,23,42,0.5)]">
            <img
              src="/pages/solutions-network.webp"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-[60%_center] animate-hero-image"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/30 via-transparent to-brand-primary/20" aria-hidden="true"></div>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              {SOLUTION_NODES.map(n => (
                <line key={n.label} x1="50" y1="50" x2={n.x} y2={n.y} stroke="white" strokeOpacity="0.7" strokeWidth="1.5" strokeDasharray="5 7" className="animate-dash-flow" vectorEffect="non-scaling-stroke" />
              ))}
            </svg>
            {/* Outer layers position (translate), inner layers animate, so the two transforms don't clash */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="rounded-xl bg-white px-3.5 py-2.5 shadow-[0_0_0_8px_rgba(255,255,255,0.15),0_20px_50px_-10px_rgba(0,0,0,0.4)] flex items-center justify-center animate-hero-rise">
                <img src="/cybersys-logo.webp" alt="CyberSys Technologies" className="w-[84px] sm:w-[100px] h-auto object-contain" />
              </div>
            </div>
            {SOLUTION_NODES.map((n, i) => (
              <div key={n.label} className="absolute w-0 h-0" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
                <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-5 flex flex-col items-center">
                  <div className="flex flex-col items-center gap-1.5 animate-hero-rise" style={{ animationDelay: `${300 + i * 120}ms` }}>
                    <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur text-brand-primary flex items-center justify-center shadow-[0_0_0_5px_rgba(255,255,255,0.18),0_10px_24px_-8px_rgba(0,0,0,0.45)]">
                      {icon(n.icon, 17, 1.75)}
                    </span>
                    <span className="hidden sm:block text-[10px] font-semibold uppercase tracking-[0.15em] text-white text-center whitespace-nowrap drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">{n.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SOLUTION CATEGORIES: compact cards so all six fit on a laptop screen */}
      <section className="py-14 lg:py-16 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 relative z-10">
          <SectionHeader
            eyebrow="What We Offer"
            title={<>End-to-End <span className="text-brand-primary">Technology Solutions</span></>}
            text="Six solution areas, designed and implemented by our own team with our global technology partners, from the cloud your business runs on to the people who run it."
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SOLUTION_CATALOGUE.map((sol, i) => (
              <button
                key={sol.title}
                onClick={() => onPageChange(sol.path)}
                className="reveal-cascade text-left bg-white px-5 py-5 border border-slate-200 rounded-[1.25rem] group hover:border-brand-primary hover:-translate-y-1 transition-all duration-500 flex flex-col h-full hover:shadow-[0_24px_50px_-30px_rgba(32,130,166,0.45)]"
                style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              >
                <div className="flex items-center gap-3.5">
                  <span className="w-10 h-10 flex-shrink-0 rounded-xl bg-brand-mist text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                    {icon(sol.icon, 19, 1.6)}
                  </span>
                  <h3 className="text-base xl:text-lg font-semibold text-brand-text leading-tight">{sol.title}</h3>
                </div>
                <p className="mt-3 text-[13px] text-brand-muted font-medium leading-[1.55]">{sol.summary}</p>
                {/* Capabilities as compact tags so all six cards fit on a laptop screen */}
                <ul className="mt-3 flex flex-wrap gap-1.5 flex-grow content-start">
                  {sol.capabilities.map(cap => (
                    <li key={cap} className="text-[11px] font-semibold text-slate-600 bg-slate-50 border border-slate-100 rounded-md px-2 py-0.5 leading-snug">
                      {cap}
                    </li>
                  ))}
                </ul>
                <span className="mt-3 inline-flex items-center gap-2 text-brand-action font-medium text-[12px] uppercase tracking-[0.2em]">
                  Explore solution <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROCESS FLOW: centred heading, steps zoom in */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
          <SectionHeader
            eyebrow="Process Flow"
            title={<>Structured <span className="text-brand-primary">Delivery</span></>}
            text="We take every engagement from assessment through design to implementation, so what is planned is what gets built."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Assess', icon: <Search />, desc: 'Understand business objectives, technical requirements, risk posture, and compliance needs.' },
              { title: 'Design', icon: <Compass />, desc: 'Architect secure, resilient, and scalable solutions aligned with operational realities.' },
              { title: 'Implement', icon: <Server />, desc: 'Deploy, integrate, and continuously optimize systems for performance, security, and reliability.' }
            ].map((step, i) => (
              <div key={step.title} className="reveal-zoom" style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="h-full bg-white p-7 rounded-[1.25rem] border border-slate-200 relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:border-brand-primary/40 hover:shadow-[0_24px_50px_-30px_rgba(32,130,166,0.45)]">
                  <div className="absolute top-4 right-6 text-[3rem] font-bold leading-none text-slate-100 group-hover:text-brand-primary/15 transition-colors duration-500 pointer-events-none">0{i + 1}</div>
                  <div className="h-12 w-12 bg-brand-mist text-brand-primary rounded-xl flex items-center justify-center relative z-10 transition-all duration-500 group-hover:bg-brand-primary group-hover:text-white group-hover:rotate-[-6deg]">
                    {icon(step.icon, 22, 1.5)}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-brand-text leading-[1.1] group-hover:text-brand-primary transition-colors duration-500 relative z-10">{step.title}</h3>
                  <p className="mt-3 text-sm md:text-base text-brand-muted font-medium leading-relaxed relative z-10">{step.desc}</p>
                  {/* Accent line that draws across on hover */}
                  <div className="absolute left-0 bottom-0 h-1 w-0 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-mint group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MEASURABLE OUTCOMES: light teal wash, cards slide in from the right */}
      <section className="py-16 lg:py-20 bg-brand-mist relative overflow-hidden">
        <div className="absolute -top-32 -right-20 w-[32rem] h-[32rem] bg-brand-mint/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-20 w-[28rem] h-[28rem] bg-brand-primary/10 blur-[110px] rounded-full pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 relative">
          <SectionHeader
            eyebrow="Business Value"
            title={<>Measurable <span className="text-brand-primary">Outcomes</span></>}
            text="Engineering value into every infrastructure layer."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Activity />, title: 'Operational Resilience', desc: 'High availability, disaster recovery, and continuity planning.' },
              { icon: <ShieldCheck />, title: 'Security & Compliance', desc: 'Protection against threats and alignment with regulatory standards.' },
              { icon: <TrendingUp />, title: 'Cost Optimization', desc: 'Efficient resource utilization across cloud environments.' },
              { icon: <Zap />, title: 'Scalable Growth', desc: 'Infrastructure designed to grow with organizational demand.' }
            ].map((outcome, i) => (
              <div key={outcome.title} className="reveal-from-right" style={{ transitionDelay: `${i * 110}ms` }}>
                <div className="h-full bg-white rounded-[1.25rem] overflow-hidden group transition-transform duration-500 hover:-translate-y-2 shadow-[0_20px_45px_-30px_rgba(32,130,166,0.4)]">
                  <div className="h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-mint"></div>
                  <div className="p-7">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      {icon(outcome.icon, 22, 1.75)}
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-brand-text leading-tight">{outcome.title}</h3>
                    <p className="mt-2 text-sm md:text-base text-brand-muted font-medium leading-relaxed">{outcome.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <ContactCTA
        onPageChange={onPageChange}
        eyebrow="Start the Conversation"
        title={<>Let’s design the <span className="text-brand-primary">right solution</span></>}
        text="Whether you are securing critical systems, adopting multicloud, or modernizing infrastructure, CyberSys Technologies works with you from strategy through implementation and support."
        consultLabel="Speak to a solutions architect"
      />
    </div>
  );
};

export default Solutions;
