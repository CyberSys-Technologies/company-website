import React, { useEffect, useRef, useState } from 'react';
import { 
  ArrowRight, 
  Shield, 
  Database, 
  Cloud, 
  Server,
  Settings,
  Users,
  RefreshCcw,
  Maximize,
  Target
} from 'lucide-react';
import { CS5_FRAMEWORK } from '../constants';
import { Page } from '../types';
import PartnerEcosystem from '../components/PartnerEcosystem';
// import SolutionsMarketplace from '../components/SolutionsMarketplace'; // Temporarily commented out for future refinement

interface HomeProps {
  onPageChange: (p: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onPageChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Typewriter effect state for hero text
  const fullHeroText = "Engineering technical architecture and operational certainty for global enterprises to scale without compromise.";
  const [typedHeroText, setTypedHeroText] = useState<string>('');
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);

  useEffect(() => {
    let index = 0;
    const typingSpeed = 28; // classy typing rhythm
    const timer = setInterval(() => {
      index++;
      setTypedHeroText(fullHeroText.slice(0, index));
      if (index >= fullHeroText.length) {
        clearInterval(timer);
        setIsTypingComplete(true);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(
      '.reveal-on-scroll, .reveal-from-left, .reveal-from-right, .reveal-zoom, .reveal-cascade, .reveal-expand'
    );
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Diverse animations for C.O.R.E. pillars: converging left/zoom/zoom/right
  const coreAnimations = [
    'reveal-from-left',
    'reveal-zoom',
    'reveal-zoom',
    'reveal-from-right'
  ];

  return (
    <div className="bg-white overflow-hidden" ref={containerRef}>
      
      {/* 1. HERO WITH VISIBLE BACKGROUND IMAGE & TYPEWRITER ANIMATION (OPTIMIZED FOR LARGE MONITORS) */}
      <section className="relative min-h-[85vh] 2xl:min-h-[88vh] flex items-center border-b border-slate-50 overflow-hidden">
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
        
        {/* Container expands for large monitors / ultrawides */}
        <div className="max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-6 sm:px-12 md:px-16 2xl:px-24 relative z-20 w-full pt-28 pb-24 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="space-y-8 max-w-4xl 2xl:max-w-5xl">
            
            <h1 className="reveal-on-scroll text-5xl sm:text-6xl lg:text-[6rem] xl:text-[7rem] 2xl:text-[8rem] font-black tracking-tighter text-white leading-[0.95] uppercase">
              Secure <br />
              The C.O.R.E<span className="text-brand-primary">.</span>
            </h1>
            
            {/* Typewriter text with blinking cursor */}
            <p className="text-lg sm:text-xl 2xl:text-2xl text-slate-300 leading-relaxed font-medium border-l-4 border-brand-primary pl-6 py-1 max-w-3xl text-left min-h-[4.5rem] flex items-center flex-wrap">
              <span>{typedHeroText}</span>
              <span className={`inline-block w-2.5 h-6 ml-1.5 bg-brand-primary align-middle ${isTypingComplete ? 'animate-pulse' : 'animate-cursor'}`}></span>
            </p>
            
            <div className="reveal-on-scroll flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
              <button 
                onClick={() => onPageChange('contact')}
                className="px-10 2xl:px-12 py-5 2xl:py-6 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[12px] 2xl:text-[13px] uppercase tracking-[0.25em] flex items-center justify-center gap-3 transition-all shadow-xl shadow-brand-primary/30 transform hover:-translate-y-1 cursor-pointer"
              >
                Request Consultation <ArrowRight size={16} />
              </button>
              <button 
                onClick={() => onPageChange('solutions')}
                className="px-10 2xl:px-12 py-5 2xl:py-6 bg-white/10 backdrop-blur-md text-white border-2 border-white/20 rounded font-black text-[12px] 2xl:text-[13px] uppercase tracking-[0.25em] hover:bg-white/20 transition-all cursor-pointer"
              >
                Explore Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEDICATED PARTNER ECOSYSTEM: VISIBLE IMMEDIATELY BENEATH HERO */}
      <PartnerEcosystem onPageChange={onPageChange} />

      {/* 3. MINI SOLUTIONS MARKETPLACE (COMMENTED OUT AS REQUESTED) */}
      {/* <SolutionsMarketplace onPageChange={onPageChange} /> */}

      {/* 4. METHODOLOGY: CS5 Framework (Sequential Float-Up) */}
      <section className="py-24 2xl:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>
        <div className="max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-6 sm:px-12 md:px-16 2xl:px-24 relative z-10">
          <div className="text-center mb-20 reveal-on-scroll">
             <h2 className="text-[10px] 2xl:text-[11px] font-black text-brand-primary uppercase tracking-[0.5em] mb-4">Architecture Framework</h2>
             <h3 className="text-4xl lg:text-5xl 2xl:text-6xl font-black text-brand-text tracking-tighter uppercase leading-none">The CS5 Standard</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-10">
            {CS5_FRAMEWORK.map((item, i) => (
              <div 
                key={i} 
                className="relative group reveal-on-scroll" 
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                 <div className="h-full p-8 2xl:p-10 bg-white border border-slate-100 rounded-[1.5rem] transition-all duration-500 hover:shadow-[0_15px_40px_-15px_rgba(32,130,166,0.15)] hover:border-brand-primary/20 hover:-translate-y-1 relative">
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
                    <h4 className="text-xl 2xl:text-2xl font-black text-brand-text mb-3 uppercase tracking-tighter group-hover:text-brand-primary transition-colors duration-500">{item.term}</h4>
                    <p className="text-sm 2xl:text-base text-brand-muted font-medium leading-relaxed">
                      {item.description}
                    </p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VALUE PROPOSITION: C.O.R.E (Converging Left / Zoom / Right Entrances) */}
      <section className="py-32 2xl:py-36 bg-[#0A0F1C] relative overflow-hidden text-white border-b border-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none transform translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-secondary/5 blur-[100px] rounded-full mix-blend-screen pointer-events-none transform -translate-x-1/2"></div>
        <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none"></div>
        
        <div className="max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-6 sm:px-12 md:px-16 2xl:px-24 relative z-10">
          <div className="text-center mb-20 reveal-zoom">
             <h2 className="text-[10px] 2xl:text-[11px] font-black text-brand-secondary uppercase tracking-[0.5em] mb-4">Value Proposition</h2>
             <h3 className="text-4xl lg:text-5xl 2xl:text-6xl font-black text-white tracking-tighter uppercase leading-none flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
               The C.O.R.E. Engine
               <div className="relative inline-flex items-center justify-center opacity-90 mt-4 md:mt-0">
                 <Settings className="text-brand-primary animate-[spin_8s_linear_infinite]" size={56} strokeWidth={1.5} />
                 <Settings className="text-brand-secondary absolute -bottom-2 -right-4 animate-[spin_8s_linear_infinite_reverse]" size={32} strokeWidth={2} />
               </div>
             </h3>
             <p className="mt-6 text-slate-400 font-medium max-w-2xl 2xl:max-w-3xl mx-auto text-base 2xl:text-lg">Our Enterprise Value Proposition built on four foundational pillars designed to accelerate your digital transformation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-8">
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
              <div 
                key={i} 
                className={`relative group ${coreAnimations[i]}`} 
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="h-full bg-white/[0.02] backdrop-blur-xl border border-white/10 p-10 2xl:p-12 rounded-[2rem] hover:bg-white/[0.06] hover:border-brand-primary/30 transition-all duration-500 transform group-hover:-translate-y-2 shadow-2xl relative overflow-hidden">
                   <div className="absolute -inset-20 bg-gradient-to-r from-brand-primary/0 via-brand-primary/10 to-brand-secondary/0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-x-full group-hover:translate-x-full"></div>
                   
                   <div className="text-[5rem] 2xl:text-[6rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-brand-primary to-brand-primary/20 mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 transform origin-left">
                     {item.letter}
                   </div>
                   <h4 className="text-xl 2xl:text-2xl font-black text-white mb-3 uppercase tracking-tighter">{item.title}</h4>
                   <p className="text-sm 2xl:text-base text-slate-400 font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
                     {item.desc}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CAPABILITIES: Full width grid (Cascading Depth Entrance) */}
      <section className="py-24 2xl:py-32 bg-white relative">
        <div className="max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-6 sm:px-12 md:px-16 2xl:px-24">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-8">
            {[
              { icon: <Cloud />, title: 'Multicloud', desc: 'Unified orchestration across AWS, Azure, and Google Cloud, optimized for yield.' },
              { icon: <Shield />, title: 'Cyber Governance', desc: 'Advanced perimeter protection aligned with strict regulatory frameworks.' },
              { icon: <Database />, title: 'Data Sovereignty', desc: 'Secure local data environments complying with residency laws and global access.' },
              { icon: <Server />, title: 'Resilient Infra', desc: 'Zero-downtime private and hybrid architectures for mission-critical continuity.' }
            ].map((item, i) => (
              <div 
                key={i} 
                className="reveal-cascade p-8 2xl:p-10 corporate-card rounded-[1.5rem] group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-6 p-4 bg-brand-primary/5 text-brand-primary inline-block rounded-xl group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                  {React.cloneElement(item.icon as React.ReactElement<{size?: number}>, { size: 24 })}
                </div>
                <h3 className="text-xl 2xl:text-2xl font-black text-brand-text tracking-tighter mb-4 uppercase">{item.title}</h3>
                <p className="text-sm 2xl:text-base text-brand-muted font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION (Expand & Glow Presence) */}
      <section className="py-32 2xl:py-36 bg-brand-text relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-[0.03]"></div>
        <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-10 text-center relative z-10 space-y-12 reveal-expand">
          <h2 className="text-4xl md:text-6xl 2xl:text-7xl font-black text-white tracking-tighter leading-none uppercase">
            Build for <br /> <span className="text-brand-primary">The Future.</span>
          </h2>
          <p className="text-xl 2xl:text-2xl text-slate-400 font-medium max-w-3xl mx-auto border-t border-white/5 pt-12">
            Initiate your transition to a resilient, multicloud-powered environment with CyberSys.
          </p>
          <div className="pt-4">
            <button 
              onClick={() => onPageChange('contact')}
              className="px-12 2xl:px-14 py-5 2xl:py-6 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[11px] 2xl:text-[13px] uppercase tracking-[0.4em] transition-all shadow-xl shadow-brand-primary/20 transform hover:-translate-y-1 cursor-pointer"
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
