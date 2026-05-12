
import React, { useEffect } from 'react';
import { 
  ShieldCheck, 
  Target, 
  Users, 
  Globe, 
  Award, 
  Heart, 
  ArrowRight, 
  ChevronRight,
  Zap,
  Cpu,
  Landmark,
  Compass,
  MapPin
} from 'lucide-react';
import { Page } from '../types';

const Company: React.FC<{ onPageChange: (p: Page) => void }> = ({ onPageChange }) => {
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
      <section className="bg-slate-50 border-b border-slate-200 py-32 md:py-60 blueprint-grid relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-fine opacity-40 pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="max-w-5xl">
            <div className="reveal-on-scroll active inline-flex items-center gap-4 mb-10">
               <div className="h-px w-12 bg-brand-primary"></div>
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary">Corporate Authority</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-brand-text tracking-tighter uppercase leading-[0.85] mb-12">
              Building Africa’s <br /> 
              <span className="text-brand-primary">Digital Backbone.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-muted max-w-3xl font-medium leading-relaxed mb-16 border-l-2 border-brand-primary pl-12 py-2">
              CyberSys Technologies exists to give global organizations the absolute confidence to operate, scale, and compete — powered by resilient, world-class infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STRATEGIC INTENT (Purpose & Vision) */}
      <section className="py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6">
              <div className="p-16 bg-slate-50 rounded-[3.5rem] border border-slate-100 group hover:border-brand-primary transition-all duration-700 h-full relative overflow-hidden">
                <div className="absolute top-12 right-12 text-[10px] font-black text-slate-200 group-hover:text-brand-primary/20 transition-colors tracking-[0.5em] uppercase">STR-01</div>
                <div className="mb-12">
                  <Target className="text-brand-primary group-hover:scale-110 transition-transform duration-700" size={48} strokeWidth={1.25} />
                </div>
                <h3 className="text-3xl font-black text-brand-text uppercase tracking-tighter mb-8 italic">Our Purpose</h3>
                <p className="text-xl text-brand-muted font-medium leading-relaxed">
                  To design, secure, and manage intelligent environments that ensure security, compliance, and absolute uptime for enterprises and governments operating in complex jurisdictions.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="p-16 bg-brand-text rounded-[3.5rem] border border-slate-100 group hover:border-brand-primary transition-all duration-700 h-full relative overflow-hidden">
                <div className="absolute top-12 right-12 text-[10px] font-black text-white/10 group-hover:text-brand-primary/20 transition-colors tracking-[0.5em] uppercase">STR-02</div>
                <div className="mb-12">
                  <Globe className="text-brand-primary group-hover:scale-110 transition-transform duration-700" size={48} strokeWidth={1.25} />
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 italic">Our Vision</h3>
                <p className="text-xl text-slate-400 font-medium leading-relaxed">
                  To be the primary authority for enterprise technology across the continent, bridging the gap between local operational realities and global engineering standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES & DIFFERENTIATORS */}
      <section className="py-40 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-fine opacity-[0.2] pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5 space-y-12">
              <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">02 / Differentiators</h2>
              <h3 className="text-4xl md:text-6xl font-black text-brand-text tracking-tighter uppercase leading-[0.9] italic">Global Standards, <br /> Local Resilience.</h3>
              <p className="text-xl text-brand-muted font-medium leading-relaxed">
                We bridge the gap between global technology providers and regional infrastructure requirements, ensuring every solution is resilient to constraints while remaining competitive.
              </p>
              <div className="pt-8">
                 <div className="p-10 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-6">
                    <div className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em]">CS5 Compliance</div>
                    <p className="text-2xl font-black text-brand-text uppercase tracking-tight">Outcome-driven technology delivery focusing on business yield.</p>
                 </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: <ShieldCheck />, title: 'Compliance-Aware', desc: 'Deep expertise in financial and telecommunications regulations across key African markets.' },
                  { icon: <Award />, title: 'Yield-Focused', desc: 'We don’t just deploy technology; we measure its impact on your operational efficiency and bottom line.' },
                  { icon: <Zap />, title: 'Operational Uptime', desc: 'Architectures engineered for maximum uptime, even in challenging connectivity environments.' },
                  { icon: <Compass />, title: 'Strategic Roadmap', desc: 'Enterprise-grade architecture planning that aligns technology with long-term business goals.' }
                ].map((item, i) => (
                  <div key={i} className="p-12 bg-white rounded-[2.5rem] border border-slate-200 hover:border-brand-primary transition-all group">
                    <div className="text-brand-primary mb-8 group-hover:scale-110 transition-transform">
                       {React.cloneElement(item.icon as React.ReactElement<{size?: number, strokeWidth?: number}>, { size: 36, strokeWidth: 1.5 })}
                    </div>
                    <h4 className="text-xl font-black text-brand-text uppercase tracking-tighter mb-4 italic">{item.title}</h4>
                    <p className="text-sm text-brand-muted font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GLOBAL OPERATIONS */}
      <section className="py-40 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-10"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
             <div className="lg:col-span-5 space-y-12">
                <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">03 / Footprint</h2>
                <h3 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none italic">Global Hubs, <br /> Local Access.</h3>
                <p className="text-xl text-slate-400 font-medium leading-relaxed">
                  Headquartered in the heart of Africa’s technology ecosystem, with global operational nodes to support international enterprise requirements.
                </p>
                
                <div className="space-y-8 pt-8 border-t border-white/10">
                   <div className="flex items-start gap-8 group">
                      <div className="p-4 bg-white/5 text-brand-primary rounded-2xl group-hover:bg-brand-primary group-hover:text-white transition-all">
                        <MapPin size={28} />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] mb-2">Regional Authority</div>
                        <div className="text-2xl font-black uppercase tracking-tight">Lagos, Nigeria</div>
                      </div>
                   </div>
                   <div className="flex items-start gap-8 group">
                      <div className="p-4 bg-white/5 text-brand-accent rounded-2xl group-hover:bg-brand-accent group-hover:text-white transition-all">
                        <MapPin size={28} />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em] mb-2">Global Operations</div>
                        <div className="text-2xl font-black uppercase tracking-tight">London, UK</div>
                      </div>
                   </div>
                </div>
             </div>
             <div className="lg:col-span-7">
                <div className="aspect-square bg-white/5 rounded-[5rem] border border-white/10 flex items-center justify-center p-20 group relative">
                   <div className="absolute inset-0 blueprint-grid-fine opacity-20"></div>
                   <div className="text-[12rem] md:text-[20rem] font-black text-brand-primary opacity-20 italic select-none group-hover:scale-110 transition-transform duration-[10s] tracking-tighter">CS</div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-[1em] text-brand-primary">Lagos Node</p>
                        <p className="text-4xl font-black uppercase italic tracking-tighter">Continental Hub</p>
                      </div>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 5. JOIN THE INTELLIGENCE */}
      <section className="py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
            <div className="lg:col-span-6 space-y-12">
              <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">04 / Careers</h2>
              <h3 className="text-4xl md:text-7xl font-black text-brand-text tracking-tighter uppercase leading-none">The <br /> Intelligence.</h3>
              <p className="text-2xl text-brand-muted font-medium leading-relaxed">
                We are looking for world-class engineering and technical talent to build the next generation of resilient platforms. At CyberSys, we prioritize excellence and bold innovation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                 <div className="flex items-center gap-6 p-8 border border-slate-100 rounded-3xl bg-slate-50 group hover:border-brand-primary transition-all">
                    <Users className="text-brand-primary group-hover:scale-110 transition-transform" />
                    <span className="font-black text-[12px] uppercase tracking-[0.2em] text-brand-text">Life at CyberSys</span>
                 </div>
                 <div className="flex items-center gap-6 p-8 border border-slate-100 rounded-3xl bg-slate-50 group hover:border-brand-primary transition-all">
                    <Award className="text-brand-primary group-hover:scale-110 transition-transform" />
                    <span className="font-black text-[12px] uppercase tracking-[0.2em] text-brand-text">Talent Programs</span>
                 </div>
              </div>
              <button 
                onClick={() => onPageChange('contact')}
                className="px-12 py-6 bg-brand-text text-white rounded font-black text-[11px] uppercase tracking-[0.4em] hover:bg-brand-primary transition-all shadow-2xl"
              >
                Explore Open Roles
              </button>
            </div>
            <div className="lg:col-span-6">
               <div className="bg-brand-primary p-24 rounded-[5rem] text-white space-y-12 relative overflow-hidden group shadow-[0_60px_100px_-30px_rgba(32,130,166,0.3)]">
                  <div className="absolute inset-0 blueprint-grid opacity-20"></div>
                  <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none relative z-10">Ethical <br /> Technology.</h3>
                  <p className="text-xl opacity-90 leading-relaxed font-medium relative z-10 border-t border-white/20 pt-10">
                    Our commitment to ethical technology ensures that our AI and data platforms are designed with transparency, privacy, and community impact at the core.
                  </p>
                  <div className="pt-4 relative z-10">
                    <div className="flex items-center gap-6 group/link cursor-pointer">
                      <span className="text-[11px] font-black uppercase tracking-[0.5em]">Learn More</span>
                      <ArrowRight size={20} className="group-hover/link:translate-x-4 transition-transform" />
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRIMARY CALL TO ACTION */}
      <section className="py-40 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="max-w-6xl mx-auto bg-brand-text rounded-[6rem] p-24 md:p-40 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 blueprint-grid opacity-10"></div>
            <div className="relative z-10 space-y-16">
              <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-12">
                Partner with the <br /> <span className="text-brand-primary italic">Authority.</span>
              </h2>
              <p className="text-2xl text-slate-400 max-w-4xl mx-auto font-medium leading-relaxed border-t border-white/10 pt-16">
                Schedule a session with one of our lead architects to discuss your infrastructure modernization roadmap and operational yield.
              </p>
              <div className="pt-10">
                <button 
                  onClick={() => onPageChange('contact')}
                  className="px-20 py-8 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[14px] uppercase tracking-[0.5em] transition-all shadow-2xl shadow-brand-primary/20 transform hover:-translate-y-2"
                >
                  Start the Dialogue
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
