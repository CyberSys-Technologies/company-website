import React from 'react';
import { CYBER_VALUES } from '../constants';
import { Page } from '../types';
import { ShieldCheck, Award, Zap, ChevronRight } from 'lucide-react';

const WhyCyberSys: React.FC<{ onPageChange: (p: Page) => void }> = ({ onPageChange }) => {
  return (
    <div className="animate-in fade-in duration-1000 bg-white">
      {/* 1. PAGE HERO */}
      <section className="bg-slate-50 border-b border-slate-200 py-24 md:py-40 blueprint-grid relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-fine opacity-40 pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="max-w-5xl">
            <div className="reveal-on-scroll active inline-flex items-center gap-4 mb-10">
               <div className="h-px w-12 bg-brand-primary"></div>
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary">Brand Promise</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-brand-text tracking-tighter uppercase leading-[0.85] mb-12">
              The Standard for <br /> <span className="text-brand-primary">Enterprise Trust.</span>
            </h1>
            <p className="text-xl text-brand-muted max-w-3xl font-medium leading-relaxed mb-16 border-l-2 border-brand-primary pl-10">
              In an era of rapid digital shift, organizations need more than a technology vendor—they need a long-term partner with a deep understanding of infrastructure resilience and regulatory landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* 2. VALUES SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.6em] mb-4">Our DNA</h2>
            <h3 className="text-4xl font-black text-brand-text uppercase tracking-tighter italic">The CYBER Brand Values</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {CYBER_VALUES.map((val) => (
              <div key={val.letter} className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center group hover:border-brand-primary transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-white border border-slate-200 flex items-center justify-center rounded-2xl text-brand-primary font-black text-3xl mb-8 shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-all">
                  {val.letter}
                </div>
                <h4 className="font-black text-brand-text uppercase tracking-tight mb-4 group-hover:text-brand-primary transition-colors">{val.value}</h4>
                <p className="text-brand-muted text-sm font-medium leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DIFFERENTIATORS */}
      <section className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl md:text-6xl font-black text-brand-text tracking-tighter uppercase leading-[0.9] italic">Built for African Realities, <br /> Global Standards.</h2>
              <p className="text-xl text-brand-muted font-medium leading-relaxed">We bridge the gap between global technology and local operational needs, ensuring that every solution is resilient to regional constraints while remaining globally competitive.</p>
              <div className="space-y-8">
                {[
                  { icon: <ShieldCheck />, title: 'Compliance-Aware Infrastructure', desc: 'Deep expertise in financial and telecommunications regulations across key markets.' },
                  { icon: <Award />, title: 'Yield-Focused Outcomes', desc: 'We measure impact on your operational efficiency and bottom line.' },
                  { icon: <Zap />, title: 'Operational Uptime', desc: 'Architectures engineered for maximum continuity in any environment.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="p-4 bg-white border border-slate-200 text-brand-primary rounded-xl group-hover:bg-brand-primary group-hover:text-white transition-all shadow-sm h-fit">
                      {React.cloneElement(item.icon as React.ReactElement<{size?: number, strokeWidth?: number}>, { size: 28, strokeWidth: 1.5 })}
                    </div>
                    <div>
                      <h4 className="font-black text-brand-text uppercase tracking-tight text-lg mb-2">{item.title}</h4>
                      <p className="text-brand-muted font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-text rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 blueprint-grid opacity-10"></div>
              <div className="relative z-10 space-y-12">
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter italic mb-8">Ready to <br /> Partner?</h3>
                <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">Schedule a session with one of our lead architects to discuss your modernization roadmap.</p>
                <button 
                  onClick={() => onPageChange('contact')}
                  className="w-full py-6 bg-brand-primary hover:bg-brand-accent text-white font-black text-[12px] uppercase tracking-[0.4em] rounded transition-all transform hover:-translate-y-1 shadow-xl shadow-brand-primary/20"
                >
                  Talk to a Solutions Architect
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyCyberSys;
