
import React, { useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Shield, 
  Database, 
  Cloud, 
  Landmark, 
  Smartphone, 
  Zap, 
  Server,
  Sparkles,
  Settings,
  Users,
  RefreshCcw,
  Maximize,
  Target
} from 'lucide-react';
import { CS5_FRAMEWORK } from '../constants';
import { Page } from '../types';

const Home: React.FC<{ onPageChange: (p: Page) => void }> = ({ onPageChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const partners = [
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png' },
    { name: 'Microsoft Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg' },
    { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/1024px-Google_Cloud_logo.svg.png' },
    { name: 'DPAnalytics', logo: 'https://i.ibb.co/DDWj1y2F/black-logo.png' },
    { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/1024px-Oracle_logo.svg.png' },
    { name: 'AI Systems', icon: <Sparkles size={44} strokeWidth={1.5} /> }
  ];

  return (
    <div className="bg-white overflow-hidden" ref={containerRef}>
      {/* HERO: Full width banner */}
      <section className="relative min-h-[85vh] flex items-center border-b border-slate-50 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
            alt="CyberSys Digital Infrastructure Hub" 
            className="w-full h-full object-cover grayscale brightness-[0.4]"
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-brand-text/60 bg-gradient-to-t from-brand-text/80 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 blueprint-grid-fine pointer-events-none opacity-20 z-10"></div>
        
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative z-20 w-full pt-20 pb-20 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="space-y-8 max-w-3xl">
            {/* 
            <div className="reveal-on-scroll inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-brand-secondary text-[10px] font-black uppercase tracking-[0.3em]">
              <span className="flex h-1.5 w-1.5 rounded-full bg-brand-secondary animate-pulse"></span>
              Enterprise Resilience Standard
            </div>
            */}
            
            <h1 className="reveal-on-scroll text-5xl sm:text-6xl lg:text-[6rem] xl:text-[7rem] font-black tracking-tighter text-white leading-[0.95] uppercase">
              Secure <br />
              The C.O.R.E<span className="text-brand-primary">.</span>
            </h1>
            
            <p className="reveal-on-scroll text-lg sm:text-xl text-slate-300 leading-relaxed font-medium border-l-4 border-brand-primary pl-6 py-1 max-w-2xl text-left">
              Engineering technical architecture and operational certainty for global enterprises to scale without compromise.
            </p>
            
            <div className="reveal-on-scroll flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
              <button 
                onClick={() => onPageChange('contact')}
                className="px-10 py-5 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[12px] uppercase tracking-[0.25em] flex items-center justify-center gap-3 transition-all shadow-xl shadow-brand-primary/30 transform hover:-translate-y-1"
              >
                Request Consultation <ArrowRight size={16} />
              </button>
              <button 
                onClick={() => onPageChange('solutions')}
                className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border-2 border-white/20 rounded font-black text-[12px] uppercase tracking-[0.25em] hover:bg-white/20 transition-all"
              >
                Explore Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY: CS5 Framework (Tighter) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative z-10">
          <div className="text-center mb-20 reveal-on-scroll">
             <h2 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.5em] mb-4">Architecture Framework</h2>
             <h3 className="text-4xl lg:text-5xl font-black text-brand-text tracking-tighter uppercase leading-none">The CS5 Standard</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-on-scroll">
            {CS5_FRAMEWORK.map((item, i) => (
              <div key={i} className="relative group" style={{ transitionDelay: `${i * 80}ms` }}>
                 <div className="h-full p-8 bg-white border border-slate-100 rounded-[1.5rem] transition-all duration-500 hover:shadow-[0_15px_40px_-15px_rgba(32,130,166,0.15)] hover:border-brand-primary/20 hover:-translate-y-1 relative">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-4 bg-slate-50 text-slate-400 inline-flex items-center justify-center rounded-xl group-hover:bg-brand-primary/5 group-hover:text-brand-primary transition-all duration-500 font-black text-4xl min-w-[4.5rem] min-h-[4.5rem]">
                        0{i + 1}
                      </div>
                      <div className="p-3 rounded-full bg-slate-50 group-hover:bg-brand-primary/5 transition-colors duration-500">
                        {
                          [
                            <Users className="text-slate-300 group-hover:text-brand-primary transition-colors duration-500" size={24} key="icon-0" />,
                            <RefreshCcw className="text-slate-300 group-hover:text-brand-primary transition-colors duration-500" size={24} key="icon-1" />,
                            <Shield className="text-slate-300 group-hover:text-brand-primary transition-colors duration-500" size={24} key="icon-2" />,
                            <Server className="text-slate-300 group-hover:text-brand-primary transition-colors duration-500" size={24} key="icon-3" />,
                            <Maximize className="text-slate-300 group-hover:text-brand-primary transition-colors duration-500" size={24} key="icon-4" />,
                            <Target className="text-slate-300 group-hover:text-brand-primary transition-colors duration-500" size={24} key="icon-5" />
                          ][i]
                        }
                      </div>
                    </div>
                    <h4 className="text-xl font-black text-brand-text mb-3 uppercase tracking-tighter group-hover:text-brand-primary transition-colors duration-500">{item.term}</h4>
                    <p className="text-sm text-brand-muted font-medium leading-relaxed">
                      {item.description}
                    </p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION: C.O.R.E */}
      <section className="py-32 bg-[#0A0F1C] relative overflow-hidden text-white border-b border-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none transform translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-secondary/5 blur-[100px] rounded-full mix-blend-screen pointer-events-none transform -translate-x-1/2"></div>
        <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none"></div>
        
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative z-10">
          <div className="text-center mb-20 reveal-on-scroll">
             <h2 className="text-[10px] font-black text-brand-secondary uppercase tracking-[0.5em] mb-4">Value Proposition</h2>
             <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase leading-none flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
               The C.O.R.E. Engine
               <div className="relative inline-flex items-center justify-center opacity-90 mt-4 md:mt-0">
                 <Settings className="text-brand-primary animate-[spin_8s_linear_infinite]" size={56} strokeWidth={1.5} />
                 <Settings className="text-brand-secondary absolute -bottom-2 -right-4 animate-[spin_8s_linear_infinite_reverse]" size={32} strokeWidth={2} />
               </div>
             </h3>
             <p className="mt-6 text-slate-400 font-medium max-w-2xl mx-auto">Our Enterprise Value Proposition built on four foundational pillars designed to accelerate your digital transformation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-on-scroll">
            {[
              { 
                letter: 'C', 
                title: 'Compliance & Control', 
                desc: 'Built-in alignment with NDPR, CBN, ISO 27001. Audit-ready evidence.' 
              },
              { 
                letter: 'O', 
                title: 'Optimized Multi-Cloud', 
                desc: 'Vendor-neutral advisory (Azure, AWS, OCI, GCP) reducing TCO by 25-50% via AI FinOps.' 
              },
              { 
                letter: 'R', 
                title: 'Resilient Security', 
                desc: 'Nigeria-based, 24/7 Managed SOC with AI threat hunting and proactive defense.' 
              },
              { 
                letter: 'E', 
                title: 'Enterprise Analytics & AI', 
                desc: 'Real-time dashboards, predictive ML embedded in ERP and cloud workloads.' 
              }
            ].map((item, i) => (
              <div key={i} className="relative group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="h-full bg-white/[0.02] backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] hover:bg-white/[0.06] hover:border-brand-primary/30 transition-all duration-500 transform group-hover:-translate-y-2 shadow-2xl relative overflow-hidden">
                   {/* Abstract hover glow */}
                   <div className="absolute -inset-20 bg-gradient-to-r from-brand-primary/0 via-brand-primary/10 to-brand-secondary/0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-x-full group-hover:translate-x-full"></div>
                   
                   <div className="text-[5rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-brand-primary to-brand-primary/20 mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 transform origin-left">
                     {item.letter}
                   </div>
                   <h4 className="text-xl font-black text-white mb-3 uppercase tracking-tighter">{item.title}</h4>
                   <p className="text-sm text-slate-400 font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
                     {item.desc}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE STRIP: Marquee */}
      <section className="py-10 md:py-14 bg-white border-b border-slate-50 overflow-hidden flex items-center">
        <div className="relative flex w-full grayscale opacity-20">
          <div className="flex w-max animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex space-x-12 md:space-x-24 px-6 md:px-12 items-center">
                 <span className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic">Financials</span>
                 <span className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic">Government</span>
                 <span className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic">Telecoms</span>
                 <span className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic">Energy</span>
                 <span className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic">Public Sector</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES: Full width grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-16">
          <div className="flex flex-col gap-16 items-start">
            {/* 
            <div className="reveal-on-scroll lg:w-2/5 lg:sticky lg:top-28 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-black text-brand-text tracking-tighter uppercase leading-[0.95] mb-6">
                The New <br /> Standard.
              </h2>
              <p className="text-base text-brand-muted font-medium leading-relaxed max-w-md">
                Bridging global cloud standards and regional infrastructure realities, delivering outcome-driven technology.
              </p>
              <div className="pt-4">
                <div className="border-l-4 border-brand-primary pl-8 py-4 bg-slate-50/50 rounded-r-xl pr-6 inline-block">
                   <div className="text-5xl font-black text-brand-text tracking-tighter">100+</div>
                   <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mt-2">Deployments</div>
                </div>
              </div>
            </div>
            */}

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Cloud />, title: 'Multicloud', desc: 'Unified orchestration across AWS, Azure, and Google Cloud, optimized for yield.' },
                { icon: <Shield />, title: 'Cyber Governance', desc: 'Advanced perimeter protection aligned with strict regulatory frameworks.' },
                { icon: <Database />, title: 'Data Sovereignty', desc: 'Secure local data environments complying with residency laws and global access.' },
                { icon: <Server />, title: 'Resilient Infra', desc: 'Zero-downtime private and hybrid architectures for mission-critical continuity.' }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="reveal-on-scroll p-8 corporate-card rounded-[1.5rem] group"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="mb-6 p-4 bg-brand-primary/5 text-brand-primary inline-block rounded-xl group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                    {React.cloneElement(item.icon as React.ReactElement<{size?: number}>, { size: 24 })}
                  </div>
                  <h3 className="text-xl font-black text-brand-text tracking-tighter mb-4 uppercase">{item.title}</h3>
                  <p className="text-sm text-brand-muted font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC ALLIANCES: Partner Section */}
      <section className="py-24 bg-white border-y border-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-fine opacity-[0.1] pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-16 relative z-10">
          <div className="text-center mb-20 reveal-on-scroll">
             <h2 className="text-[9px] font-black text-brand-primary uppercase tracking-[0.6em] mb-4">Strategic Alliances</h2>
             <h3 className="text-3xl font-black text-brand-text tracking-tighter uppercase leading-none italic">Powering Resilience Through Global Partnerships.</h3>
          </div>
          
          <div className="reveal-on-scroll grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center">
            {partners.map((partner, i) => (
              <div 
                key={i} 
                className="group relative flex flex-col items-center justify-center transition-all duration-700 h-24"
              >
                <div className="absolute inset-0 blueprint-grid-fine opacity-0 group-hover:opacity-10 transition-opacity rounded-xl"></div>
                <div className="relative grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110 flex items-center justify-center">
                   {partner.logo ? (
                     <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className={`max-h-12 w-auto object-contain ${partner.name === 'AWS' ? 'max-h-10' : ''}`}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://via.placeholder.com/150x50?text=${partner.name}`;
                      }}
                    />
                   ) : (
                     <div className="text-brand-primary">
                       {partner.icon}
                     </div>
                   )}
                </div>
                <span className="mt-4 text-[8px] font-black text-slate-300 group-hover:text-brand-primary uppercase tracking-[0.4em] transition-colors">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION: Refined Scale */}
      <section className="py-32 bg-brand-text relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-[0.03]"></div>
        <div className="max-w-4xl mx-auto px-10 text-center relative z-10 space-y-12">
          <h2 className="reveal-on-scroll text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
            Build for <br /> <span className="text-brand-primary">The Future.</span>
          </h2>
          <p className="reveal-on-scroll text-xl text-slate-400 font-medium max-w-2xl mx-auto border-t border-white/5 pt-12">
            Initiate your transition to a resilient, multicloud-powered environment with CyberSys.
          </p>
          <div className="reveal-on-scroll pt-4">
            <button 
              onClick={() => onPageChange('contact')}
              className="px-12 py-5 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[11px] uppercase tracking-[0.4em] transition-all shadow-xl shadow-brand-primary/20 transform hover:-translate-y-1"
            >
              Start Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
