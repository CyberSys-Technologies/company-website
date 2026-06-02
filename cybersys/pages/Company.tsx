
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
      <section className="bg-slate-50 border-b border-slate-200 py-24 md:py-36 blueprint-grid relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-fine opacity-40 pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="reveal-on-scroll active inline-flex items-center gap-4 mb-4">
                 <div className="h-px w-12 bg-brand-primary"></div>
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary">Corporate Authority</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-brand-text tracking-tighter uppercase leading-[0.85] mb-6">
                Secure Digital <br /> 
                <span className="text-brand-primary">Infrastructure.</span>
              </h1>
              <div className="space-y-4 border-l-2 border-brand-primary pl-6 py-1">
                <p className="text-lg text-brand-text font-black uppercase tracking-tight max-w-2xl leading-snug">
                  Delivering secure, resilient, and scalable cloud, cybersecurity, and data-driven platforms for enterprises and public sector institutions across Africa.
                </p>
                <p className="text-base text-brand-muted max-w-2xl font-medium leading-relaxed">
                  Established to address the growing complexity of digital transformation in emerging markets, CyberSys bridges the gap between global technology standards and local operational realities by designing and managing intelligent digital environments tailored to African business and institutional needs.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 reveal-on-scroll active relative">
              <div className="absolute -inset-4 blueprint-grid opacity-30 pointer-events-none rounded-[2.5rem]"></div>
              <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 p-2 bg-white/50 backdrop-blur-md shadow-2xl shadow-slate-200/30 group">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=70" 
                  alt="Corporate Authority" 
                  className="w-full h-[250px] sm:h-[320px] object-cover rounded-[1.5rem] grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none rounded-[1.5rem]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STRATEGIC INTENT (Purpose & Vision) */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-12 md:p-16 bg-slate-50 rounded-[2rem] md:rounded-[3.5rem] border border-slate-100 group hover:border-brand-primary transition-all duration-700 h-full relative overflow-hidden">
                <div className="absolute top-8 right-8 md:top-12 md:right-12 text-[10px] font-black text-slate-200 group-hover:text-brand-primary/20 transition-colors tracking-[0.5em] uppercase">STR-01</div>
                <div className="mb-8 md:mb-12">
                  <Target className="text-brand-primary group-hover:scale-110 transition-transform duration-700" size={48} strokeWidth={1.25} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-brand-text uppercase tracking-tighter mb-6 md:mb-8 italic">Our Mission</h3>
                <p className="text-lg md:text-xl text-brand-muted font-medium leading-relaxed">
                  To enable digital transformation through secure cloud adoption, regulatory-compliant cybersecurity and analytics business intelligent decision making.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-12 md:p-16 bg-brand-text rounded-[2rem] md:rounded-[3.5rem] border border-slate-100 group hover:border-brand-primary transition-all duration-700 h-full relative overflow-hidden">
                <div className="absolute top-8 right-8 md:top-12 md:right-12 text-[10px] font-black text-white/10 group-hover:text-brand-primary/20 transition-colors tracking-[0.5em] uppercase">STR-02</div>
                <div className="mb-8 md:mb-12">
                  <Globe className="text-brand-primary group-hover:scale-110 transition-transform duration-700" size={48} strokeWidth={1.25} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-6 md:mb-8 italic">Our Vision</h3>
                <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
                  To be West Africa's most trusted technology partner, delivering secure cloud services across the four hyperscalers (Microsoft Azure, Oracle Cloud, Amazon Web Services, and Google Cloud), advanced cybersecurity, and AI data-driven transformation for enterprises and government customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES & DIFFERENTIATORS */}
      <section className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-fine opacity-[0.2] pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
            <div className="lg:col-span-5 space-y-8 md:space-y-12">
              <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">02 / Differentiators</h2>
              <h3 className="text-3xl md:text-5xl font-black text-brand-text tracking-tighter uppercase leading-[0.9] mb-4 italic">Global Standards, <br /> Local Resilience.</h3>
              <p className="text-lg md:text-xl text-brand-muted font-medium leading-relaxed">
                We bridge the gap between global technology providers and regional infrastructure requirements, ensuring every solution is resilient to constraints while remaining competitive.
              </p>
              <div className="pt-4 md:pt-8">
                 <div className="p-6 md:p-10 bg-white border border-slate-200 rounded-2xl md:rounded-3xl shadow-sm space-y-4 md:space-y-6">
                    <div className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em]">CS5 Compliance</div>
                    <p className="text-xl md:text-2xl font-black text-brand-text uppercase tracking-tight">Outcome-driven technology delivery focusing on business yield.</p>
                 </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {[
                  { icon: <ShieldCheck />, title: 'Compliance-Aware', desc: 'Deep expertise in financial and telecommunications regulations across key African markets.' },
                  { icon: <Award />, title: 'Yield-Focused', desc: 'We don’t just deploy technology; we measure its impact on your operational efficiency and bottom line.' },
                  { icon: <Zap />, title: 'Operational Uptime', desc: 'Architectures engineered for maximum uptime, even in challenging connectivity environments.' },
                  { icon: <Compass />, title: 'Strategic Roadmap', desc: 'Enterprise-grade architecture planning that aligns technology with long-term business goals.' }
                ].map((item, i) => (
                  <div key={i} className="p-6 sm:p-8 md:p-12 bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-200 hover:border-brand-primary transition-all group">
                    <div className="text-brand-primary mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                       {React.cloneElement(item.icon as React.ReactElement<{size?: number, strokeWidth?: number}>, { size: 36, strokeWidth: 1.5 })}
                    </div>
                    <h4 className="text-lg md:text-xl font-black text-brand-text uppercase tracking-tighter mb-3 md:mb-4 italic">{item.title}</h4>
                    <p className="text-sm text-brand-muted font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GLOBAL OPERATIONS */}
      <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-10"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-center">
             <div className="lg:col-span-5 space-y-8 md:space-y-12">
                <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">03 / Footprint</h2>
                <h3 className="text-3xl md:text-6xl font-black tracking-tighter uppercase leading-none italic">Global Hubs, <br /> Local Access.</h3>
                <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
                  Headquartered in the heart of Africa’s technology ecosystem, with global operational nodes to support international enterprise requirements.
                </p>
                
                <div className="space-y-6 md:space-y-8 pt-6 md:pt-8 border-t border-white/10">
                   <div className="flex items-start gap-4 sm:gap-8 group">
                      <div className="p-4 bg-white/5 text-brand-primary rounded-2xl group-hover:bg-brand-primary group-hover:text-white transition-all flex-shrink-0">
                        <MapPin size={28} />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] mb-2">Regional Authority</div>
                        <div className="text-xl md:text-2xl font-black uppercase tracking-tight">Lagos, Nigeria</div>
                      </div>
                   </div>
                   <div className="flex items-start gap-4 sm:gap-8 group">
                      <div className="p-4 bg-white/5 text-brand-accent rounded-2xl group-hover:bg-brand-accent group-hover:text-white transition-all flex-shrink-0">
                        <MapPin size={28} />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em] mb-2">Global Operations</div>
                        <div className="text-xl md:text-2xl font-black uppercase tracking-tight">London, UK</div>
                      </div>
                   </div>
                </div>
             </div>
             <div className="lg:col-span-7">
                <div className="aspect-square rounded-[2.5rem] md:rounded-[4rem] border border-white/10 flex items-center justify-center p-2 group relative overflow-hidden bg-white/5 shadow-2xl">
                   <img 
                     src="/lagos-node.png" 
                     alt="Lagos Skyline Node" 
                     className="w-full h-full object-cover rounded-[2.1rem] md:rounded-[3.6rem] opacity-30 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700"
                     loading="lazy"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent pointer-events-none rounded-[2.1rem] md:rounded-[3.6rem]"></div>
                   <div className="absolute inset-0 blueprint-grid-fine opacity-20 pointer-events-none rounded-[2.1rem] md:rounded-[3.6rem]"></div>
                   
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-2 md:space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-[1em] text-brand-primary">Lagos Node</p>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-white">Continental Hub</p>
                      </div>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 5. JOIN THE INTELLIGENCE */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-center">
            <div className="lg:col-span-6 space-y-8 md:space-y-12">
              <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">04 / Careers</h2>
              <h3 className="text-3xl md:text-6xl font-black text-brand-text tracking-tighter uppercase leading-none">The <br /> Intelligence.</h3>
              <p className="text-xl md:text-2xl text-brand-muted font-medium leading-relaxed">
                We are looking for world-class engineering and technical talent to build the next generation of resilient platforms. At CyberSys, we prioritize excellence and bold innovation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-8">
                 <div className="flex items-center gap-4 md:gap-6 p-6 md:p-8 border border-slate-100 rounded-2xl md:rounded-3xl bg-slate-50 group hover:border-brand-primary transition-all">
                    <Users className="text-brand-primary group-hover:scale-110 transition-transform" />
                    <span className="font-black text-[12px] uppercase tracking-[0.2em] text-brand-text">Life at CyberSys</span>
                 </div>
                 <div className="flex items-center gap-4 md:gap-6 p-6 md:p-8 border border-slate-100 rounded-2xl md:rounded-3xl bg-slate-50 group hover:border-brand-primary transition-all">
                    <Award className="text-brand-primary group-hover:scale-110 transition-transform" />
                    <span className="font-black text-[12px] uppercase tracking-[0.2em] text-brand-text">Talent Programs</span>
                 </div>
              </div>
              <button 
                onClick={() => onPageChange('contact')}
                className="px-10 py-5 md:px-12 md:py-6 bg-brand-text text-white rounded font-black text-[11px] uppercase tracking-[0.4em] hover:bg-brand-primary transition-all shadow-2xl"
              >
                Explore Open Roles
              </button>
            </div>
            <div className="lg:col-span-6">
               <div className="bg-brand-primary p-8 sm:p-16 md:p-24 rounded-[2.5rem] md:rounded-[5rem] text-white space-y-8 md:space-y-12 relative overflow-hidden group shadow-[0_60px_100px_-30px_rgba(32,130,166,0.3)]">
                  <div className="absolute inset-0 blueprint-grid opacity-20"></div>
                  <h3 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none relative z-10">Ethical <br /> Technology.</h3>
                  <p className="text-lg md:text-xl opacity-90 leading-relaxed font-medium relative z-10 border-t border-white/20 pt-8 md:pt-10">
                    Our commitment to ethical technology ensures that our AI and data platforms are designed with transparency, privacy, and community impact at the core.
                  </p>
                  <div className="pt-4 relative z-10">
                    <div className="flex items-center gap-4 md:gap-6 group/link cursor-pointer">
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
      <section className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
          <div className="max-w-7xl mx-auto bg-brand-text rounded-[2rem] md:rounded-[4rem] p-8 sm:p-16 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 blueprint-grid opacity-10"></div>
            <div className="relative z-10 space-y-8 md:space-y-12">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-4 md:mb-8">
                Partner with the <br /> <span className="text-brand-primary italic">Authority.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-4xl mx-auto font-medium leading-relaxed border-t border-white/10 pt-8 md:pt-16">
                Schedule a session with one of our lead architects to discuss your infrastructure modernization roadmap and operational yield.
              </p>
              <div className="pt-4 md:pt-10">
                <button 
                  onClick={() => onPageChange('contact')}
                  className="px-8 py-4 md:px-10 md:py-5 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[12px] uppercase tracking-[0.4em] transition-all shadow-xl shadow-brand-primary/20 transform hover:-translate-y-1"
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
