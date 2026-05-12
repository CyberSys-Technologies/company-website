
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
  Sparkles
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
      {/* HERO: Tighter scale and more focused typography */}
      <section className="relative min-h-[75vh] flex items-center blueprint-grid border-b border-slate-50">
        <div className="absolute inset-0 blueprint-grid-fine pointer-events-none opacity-40"></div>
        
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative z-10 w-full pt-10 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-8">
              <div className="reveal-on-scroll inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white/80 backdrop-blur-md text-brand-primary text-[10px] font-black uppercase tracking-[0.3em]">
                <span className="flex h-1.5 w-1.5 rounded-full bg-brand-secondary animate-pulse"></span>
                Enterprise Resilience Standard
              </div>
              
              <h1 className="reveal-on-scroll text-5xl lg:text-6xl xl:text-[5.5rem] font-black tracking-tighter text-brand-text leading-[0.95] uppercase">
                Secure <br />
                The Core<span className="text-brand-primary">.</span>
              </h1>
              
              <p className="reveal-on-scroll text-lg text-brand-muted leading-relaxed max-w-lg font-medium border-l-4 border-brand-primary pl-8 py-1">
                Engineering technical architecture and operational certainty for global enterprises to scale without compromise.
              </p>
              
              <div className="reveal-on-scroll flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => onPageChange('contact')}
                  className="px-8 py-4 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[11px] uppercase tracking-[0.25em] flex items-center justify-center gap-3 transition-all shadow-lg shadow-brand-primary/20 transform hover:-translate-y-0.5"
                >
                  Request Consultation <ArrowRight size={16} />
                </button>
                <button 
                  onClick={() => onPageChange('solutions')}
                  className="px-8 py-4 bg-white text-brand-text border-2 border-slate-100 rounded font-black text-[11px] uppercase tracking-[0.25em] hover:bg-slate-50 transition-all"
                >
                  Explore Solutions
                </button>
              </div>
            </div>

            {/* Right Side: The Brand Image */}
            <div className="reveal-on-scroll hidden lg:block lg:col-span-6 h-[550px] relative">
               <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(15,23,42,0.15)] border border-slate-100 bg-slate-100 relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
                    alt="CyberSys Digital Infrastructure Hub" 
                    className="w-full h-full object-cover grayscale brightness-[0.8] group-hover:scale-105 transition-transform duration-[12s] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-text/40 via-transparent to-transparent opacity-40"></div>
                  
                  <div className="absolute bottom-10 left-10">
                     <div className="text-[9px] font-black text-white/50 uppercase tracking-[0.4em] mb-2.5">Infrastructure Group</div>
                     <div className="h-1 w-20 bg-brand-primary rounded-full"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORPORATE STRIP: Compact */}
      <section className="py-14 bg-white border-b border-slate-50">
        <div className="max-w-[1440px] mx-auto px-16">
          <div className="flex flex-wrap justify-between items-center gap-10 grayscale opacity-20">
             <span className="text-lg font-black tracking-tighter uppercase italic">Financials.</span>
             <span className="text-lg font-black tracking-tighter uppercase italic">Government.</span>
             <span className="text-lg font-black tracking-tighter uppercase italic">Telecoms.</span>
             <span className="text-lg font-black tracking-tighter uppercase italic">Energy.</span>
             <span className="text-lg font-black tracking-tighter uppercase italic">Public Sector.</span>
          </div>
        </div>
      </section>

      {/* CAPABILITIES: Tightened spacing */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
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

            <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* METHODOLOGY: CS5 Framework (Tighter) */}
      <section className="py-24 bg-brand-subtle">
        <div className="max-w-[1440px] mx-auto px-16">
          <div className="text-center mb-16 reveal-on-scroll">
             <h2 className="text-[9px] font-black text-brand-primary uppercase tracking-[0.6em] mb-6">Architecture Framework</h2>
             <h3 className="text-4xl lg:text-5xl font-black text-brand-text tracking-tighter uppercase leading-none">The CS5 Standard.</h3>
          </div>

          <div className="reveal-on-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-[2rem] overflow-hidden shadow-xl">
            {CS5_FRAMEWORK.map((item, i) => (
              <div key={i} className="bg-white p-12 hover:bg-brand-primary group transition-all duration-700 cursor-default">
                 <div className="text-4xl font-black text-brand-primary/15 group-hover:text-white/10 mb-6 transition-colors">{i + 1}</div>
                 <h4 className="text-xl font-black text-brand-text group-hover:text-white mb-4 uppercase tracking-tighter transition-colors">{item.term}</h4>
                 <p className="text-sm text-brand-muted group-hover:text-white/80 font-medium leading-relaxed transition-colors">{item.description}</p>
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
