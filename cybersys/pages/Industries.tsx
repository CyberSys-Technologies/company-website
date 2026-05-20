
import React, { useEffect } from 'react';
import { 
  Landmark, 
  ShieldCheck, 
  Smartphone, 
  Zap, 
  Activity, 
  Book, 
  Building, 
  ArrowRight,
  ChevronLeft,
  AlertCircle,
  Shield,
  Search,
  Compass,
  Server,
  Network,
  Scale,
  // Fix: Added missing icon imports
  RefreshCw,
  Lock
} from 'lucide-react';
import { Page } from '../types';
import { CS5_FRAMEWORK } from '../constants';

const IndustryCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  index: number;
  onAction: () => void;
}> = ({ icon, title, description, index, onAction }) => (
  <div className="bg-white p-10 border border-slate-100 rounded-[2rem] group hover:border-brand-primary transition-all duration-700 flex flex-col h-full relative overflow-hidden shadow-sm hover:shadow-xl active:scale-[0.99]">
    <div className="absolute top-8 right-8 text-[10px] font-black text-slate-200 group-hover:text-brand-primary/20 transition-colors tracking-[0.5em] uppercase">
      IND-{String(index + 1).padStart(2, '0')}
    </div>
    <div className="absolute inset-0 blueprint-grid-fine opacity-0 group-hover:opacity-[0.1] pointer-events-none transition-opacity duration-1000"></div>
    
    <div className="mb-10 relative">
      <div className="text-brand-primary transform group-hover:scale-110 transition-transform duration-700 origin-left">
        {React.cloneElement(icon as React.ReactElement<{size?: number, strokeWidth?: number}>, { size: 36, strokeWidth: 1.5 })}
      </div>
    </div>
    
    <div className="space-y-4 flex-grow mb-10">
      <h3 className="text-xl font-black text-brand-text tracking-tighter uppercase leading-tight group-hover:translate-x-1 transition-transform">{title}</h3>
      <p className="text-sm text-brand-muted font-medium leading-relaxed max-w-[95%]">{description}</p>
    </div>
    
    <button 
      onClick={onAction}
      className="flex items-center justify-between w-full group/btn pt-6 border-t border-slate-50"
    >
      <span className="text-brand-primary font-black text-[10px] uppercase tracking-[0.4em] group-hover:translate-x-2 transition-transform duration-500">Explore Solutions</span>
      <div className="h-8 w-8 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center group-hover/btn:bg-brand-primary group-hover/btn:text-white group-hover/btn:border-brand-primary transition-all duration-500 shadow-sm">
        <ArrowRight size={14} />
      </div>
    </button>
  </div>
);

const Industries: React.FC<{ onPageChange: (p: Page) => void }> = ({ onPageChange }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="animate-in fade-in duration-1000 bg-white">
      {/* 1. PAGE HERO */}
      <section className="bg-slate-50 border-b border-slate-200 py-24 md:py-36 blueprint-grid relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-fine opacity-40 pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="reveal-on-scroll active inline-flex items-center gap-4 mb-4">
                 <div className="h-px w-12 bg-brand-primary"></div>
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary">Sector Intelligence Group</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-brand-text tracking-tighter uppercase leading-[0.85] mb-6">
                Technology Solutions <br /> for Critical and <br /> 
                <span className="text-brand-primary">Regulated Industries.</span>
              </h1>
              <p className="text-xl text-brand-muted max-w-2xl font-medium leading-relaxed mb-8 border-l-2 border-brand-primary pl-8 py-1">
                CyberSys Technologies partners with organizations operating in high-impact, regulated, and mission-critical environments — where security, uptime, and compliance are non-negotiable.
              </p>
              <div className="flex flex-wrap gap-6 pt-2">
                <button 
                  onClick={() => onPageChange('contact')}
                  className="px-10 py-5 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[12px] uppercase tracking-[0.4em] transition-all shadow-xl shadow-brand-primary/20 transform hover:-translate-y-1"
                >
                  Talk to a Solutions Architect
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 reveal-on-scroll active relative">
              <div className="absolute -inset-4 blueprint-grid opacity-30 pointer-events-none rounded-[2.5rem]"></div>
              <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 p-2 bg-white/50 backdrop-blur-md shadow-2xl shadow-slate-200/30 group">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=70" 
                  alt="Critical Sectors" 
                  className="w-full h-[250px] sm:h-[320px] object-cover rounded-[1.5rem] grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none rounded-[1.5rem]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRIES INTRODUCTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em] mb-10">01 / Industry Focus</h2>
              <h3 className="text-4xl md:text-5xl font-black text-brand-text tracking-tighter uppercase leading-[1] italic">
                Built for Environments <br /> Where Failure Is <br /> Not an Option.
              </h3>
            </div>
            <div className="lg:col-span-8 space-y-12">
              <p className="text-2xl text-brand-muted font-medium leading-relaxed">
                Different industries face different regulatory pressures, risk profiles, and operational challenges. CyberSys designs secure digital infrastructure and cloud solutions tailored to the realities of each sector.
              </p>
              <p className="text-xl text-brand-muted leading-relaxed font-medium">
                Our industry-focused approach enables organizations to modernize confidently while protecting critical systems and sensitive data — ensuring continuity, compliance, and performance at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRIES GRID */}
      <section className="py-24 bg-slate-50 relative border-y border-slate-200">
        <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Landmark />, title: 'Government & Public Sector', desc: 'Secure digital platforms that support public services, national infrastructure, and data sovereignty.' },
              { icon: <ShieldCheck />, title: 'Financial Services', desc: 'Resilient, compliant infrastructure for banks, fintechs, and financial institutions operating in high-risk environments.' },
              { icon: <Smartphone />, title: 'Telecommunications', desc: 'Cloud and security solutions that support large-scale networks, data flows, and always-on connectivity.' },
              { icon: <Zap />, title: 'Energy & Utilities', desc: 'Protect critical infrastructure and operational systems with secure, resilient digital platforms.' },
              { icon: <Activity />, title: 'Healthcare', desc: 'Secure healthcare data, digital health platforms, and systems that protect patient privacy and service continuity.' },
              { icon: <Book />, title: 'Education & Research', desc: 'Scalable and secure digital infrastructure for learning platforms, research data, and academic institutions.' },
              { icon: <Building />, title: 'Enterprise & SMEs', desc: 'Secure, scalable cloud solutions that support growth, efficiency, and operational resilience.' }
            ].map((industry, i) => (
              <IndustryCard 
                key={i} 
                index={i}
                icon={industry.icon} 
                title={industry.title} 
                description={industry.desc} 
                onAction={() => onPageChange('contact')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY-SPECIFIC CHALLENGES */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="max-w-4xl space-y-12 mb-24">
            <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">02 / The Challenge</h2>
            <h3 className="text-4xl md:text-7xl font-black text-brand-text tracking-tighter uppercase leading-none italic">Understanding <br /> Industry Risk.</h3>
            <p className="text-2xl text-brand-muted font-medium leading-relaxed">Managing mission-critical infrastructure requires an acute understanding of sector-specific regulatory and operational hurdles.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Regulatory Pressure', icon: <Scale />, desc: 'Compliance requirements differ across industries. We design systems that align with specific governance frameworks.' },
              { title: 'Security Threats', icon: <Lock />, desc: 'Industries managing sensitive services face increasing cyber threats requiring proactive, multi-layered protection.' },
              { title: 'Operational Continuity', icon: <Activity />, desc: 'Downtime is costly. Infrastructure must be resilient, monitored, and recoverable by design.' },
              { icon: <RefreshCw />, title: 'Scalability & Modernization', desc: 'Legacy systems must evolve without disrupting operations or increasing the organizational risk profile.' }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-slate-50 rounded-3xl space-y-10 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-700 h-full">
                <div className="text-brand-primary transform group-hover:scale-110 transition-transform">
                  {React.cloneElement(item.icon as React.ReactElement<{size?: number, strokeWidth?: number}>, { size: 36, strokeWidth: 1.5 })}
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-black text-brand-text uppercase tracking-tight leading-none italic">{item.title}</h4>
                  <p className="text-sm text-brand-muted font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW CYBERSYS SUPPORTS INDUSTRIES (HIDDEN) */}
      {/*
      <section className="py-40 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
        ... content hidden for simplicity ...
      </section>
      */}

      {/* 6. CS5 INDUSTRY ALIGNMENT (HIDDEN) */}
      {/*
      <section className="py-40 bg-white">
        ... content hidden for simplicity ...
      </section>
      */}

      {/* 7. PRIMARY CALL TO ACTION */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="max-w-7xl mx-auto bg-brand-text rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 blueprint-grid opacity-10"></div>
            <div className="relative z-10 space-y-12">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-8">
                Let’s Build <br /> Industry-Ready <br /> <span className="text-brand-primary italic">Infrastructure.</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-4xl mx-auto font-medium leading-relaxed border-t border-white/10 pt-16">
                Engage CyberSys to design secure, compliant, and resilient systems tailored to your industry’s unique requirements.
              </p>
              <div className="pt-10">
                <button 
                  onClick={() => onPageChange('contact')}
                  className="px-10 py-5 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[12px] uppercase tracking-[0.4em] transition-all shadow-xl shadow-brand-primary/20 transform hover:-translate-y-1"
                >
                  Request a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
