
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Linkedin, Twitter, Mail } from 'lucide-react';
import { Page, NavLink } from '../types';
import { NAV_LINKS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-brand-primary selection:text-white relative">
      


      {/* Header */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/98 backdrop-blur-2xl py-3 shadow-[0_1px_0_0_rgba(15,23,42,0.04)]' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 flex items-center justify-between">
          
          {/* BRAND IDENTITY - Single image logo */}
          <div 
            className="flex items-center cursor-pointer group flex-shrink-0 lg:mr-12" 
            onClick={() => { onPageChange('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <img 
              src="https://i.ibb.co/tw47GgY9/Cybersys-Logo-p.png" 
              alt="CyberSys Technologies" 
              className="h-7 md:h-8 w-auto object-contain transition-all duration-500" 
            />
          </div>

          {/* NAVIGATION LINKS */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12 lg:ml-auto lg:mr-8 xl:mr-16">
            {NAV_LINKS.map((link) => (
              <div 
                key={link.label} 
                className="relative py-1"
                onMouseEnter={() => link.subLinks && handleMouseEnter(link.label)}
                onMouseLeave={() => link.subLinks && handleMouseLeave()}
              >
                <button
                  onClick={() => {
                    onPageChange(link.path);
                    setActiveDropdown(null);
                  }}
                  className={`text-[11px] font-black uppercase tracking-[0.25em] transition-all flex items-center gap-1.5 ${
                    currentPage === link.path || activeDropdown === link.label 
                      ? 'text-brand-primary' 
                      : 'text-brand-muted hover:text-brand-text'
                  }`}
                >
                  {link.label}
                  {link.subLinks && (
                    <ChevronDown size={12} className={`transition-transform duration-500 ${activeDropdown === link.label ? 'rotate-180' : ''} opacity-30`} />
                  )}
                </button>

                {/* DROPDOWN MENU */}
                {link.subLinks && activeDropdown === link.label && (
                  <div className="absolute top-full -left-20 w-[600px] pt-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="bg-white border border-slate-100 rounded-[1.5rem] shadow-[0_40px_80px_-20px_rgba(15,23,42,0.15)] overflow-hidden">
                      <div className="grid grid-cols-12">
                        {/* Interactive Content */}
                        <div className="col-span-7 p-10 bg-white">
                          <div className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 mb-8 border-b border-slate-50 pb-4">
                            Infrastructure & Services
                          </div>
                          <div className="space-y-2">
                            {link.subLinks.map((sub) => (
                              <button
                                key={sub.label}
                                onClick={() => {
                                  onPageChange(sub.path);
                                  setActiveDropdown(null);
                                }}
                                className="w-full flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all text-left group/sub"
                              >
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-200 group-hover/sub:bg-brand-primary transition-all"></div>
                                <div>
                                  <div className="text-[13px] font-black text-brand-text group-hover/sub:text-brand-primary transition-colors uppercase tracking-tight">{sub.label}</div>
                                  <div className="text-[10px] text-slate-400 font-medium leading-tight mt-1">{sub.description}</div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                        {/* Strategic Insight */}
                        <div className="col-span-5 bg-slate-50/70 p-10 border-l border-slate-100/50">
                           <div className="h-full flex flex-col justify-between">
                              <div className="space-y-4">
                                <div className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-primary">Operational Strategy</div>
                                <h4 className="text-xl font-black text-brand-text leading-tight uppercase italic tracking-tighter">Resilience <br /> Standards.</h4>
                                <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                                  Architectures engineered for regional complexity and global security standards.
                                </p>
                              </div>
                              <button 
                                onClick={() => { onPageChange(link.path); setActiveDropdown(null); }}
                                className="group flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] text-brand-primary mt-8"
                              >
                                Exploration <ArrowRight size={12} className="group-hover:translate-x-2 transition-transform" />
                              </button>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CALL TO ACTION */}
          <div className="hidden lg:flex items-center pl-12 border-l border-slate-100">
            <button 
              onClick={() => onPageChange('contact')}
              className="px-8 py-4 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[11px] uppercase tracking-[0.25em] transition-all duration-500 shadow-xl shadow-brand-primary/20 transform hover:-translate-y-0.5"
            >
              Consult Architect
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            className="lg:hidden text-brand-text p-2 hover:bg-slate-100 rounded-lg transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[80px] bg-white z-[60] p-10 flex flex-col gap-10 animate-in slide-in-from-right duration-500 shadow-2xl overflow-y-auto">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="space-y-4">
                <button
                  onClick={() => { onPageChange(link.path); setIsMenuOpen(false); }}
                  className={`w-full text-left text-3xl font-black tracking-tighter py-2 border-b border-slate-100 flex justify-between items-center ${currentPage === link.path ? 'text-brand-primary' : 'text-brand-text'}`}
                >
                  {link.label}
                  {link.subLinks && <ChevronDown size={24} className="opacity-20" />}
                </button>
                {link.subLinks && (
                  <div className="pl-6 grid grid-cols-1 gap-6 pt-2">
                    {link.subLinks.map((sub) => (
                      <button
                        key={sub.label}
                        onClick={() => { onPageChange(sub.path); setIsMenuOpen(false); }}
                        className="text-left group"
                      >
                        <div className="text-base font-black text-slate-800 uppercase tracking-tight">{sub.label}</div>
                        <div className="text-[11px] text-slate-400 font-medium leading-relaxed mt-1">{sub.description}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-auto pt-10 border-t border-slate-100">
              <button 
                onClick={() => { onPageChange('contact'); setIsMenuOpen(false); }}
                className="w-full py-6 bg-brand-primary text-white font-black text-xs uppercase tracking-[0.3em] rounded"
              >
                Request Consultation
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* CONTENT MOUNT */}
      <main className="flex-grow pt-[84px] md:pt-[100px]">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0F172A] pt-32 pb-16 relative overflow-hidden text-white border-t border-white/5">
        <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-32">
            
            <div className="lg:col-span-4 space-y-12">
              <div className="flex items-center">
                <img 
                  src="https://i.ibb.co/tw47GgY9/Cybersys-Logo-p.png" 
                  alt="CyberSys Technologies" 
                  className="h-10 md:h-12 w-auto object-contain" 
                />
              </div>
              <p className="text-slate-400 text-base leading-relaxed font-medium max-w-md">
                Primary authority for resilient enterprise infrastructure and security architecture across the African continent.
              </p>
              <div className="flex gap-6">
                {[Linkedin, Twitter, Mail].map((Icon, idx) => (
                  <button key={idx} className="p-3 bg-white/5 rounded-full hover:bg-brand-primary transition-all text-slate-500 group">
                    <Icon size={18} className="group-hover:scale-110 duration-300" />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h4 className="text-white font-black text-[11px] uppercase tracking-[0.4em] mb-10 border-l-2 border-brand-primary pl-5">Solutions</h4>
              <ul className="space-y-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                <li className="hover:text-brand-primary cursor-pointer transition-colors" onClick={() => onPageChange('solutions-software')}>Software</li>
                <li className="hover:text-brand-primary cursor-pointer transition-colors" onClick={() => onPageChange('solutions-digital')}>Digital</li>
                <li className="hover:text-brand-primary cursor-pointer transition-colors" onClick={() => onPageChange('solutions-bi')}>Analytics</li>
                <li className="hover:text-brand-primary cursor-pointer transition-colors" onClick={() => onPageChange('solutions-cybersecurity')}>Security</li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-white font-black text-[11px] uppercase tracking-[0.4em] mb-10 border-l-2 border-brand-primary pl-5">Services</h4>
              <ul className="space-y-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                <li className="hover:text-brand-primary cursor-pointer transition-colors" onClick={() => onPageChange('services-cloud')}>Cloud Infra</li>
                <li className="hover:text-brand-primary cursor-pointer transition-colors" onClick={() => onPageChange('services-multicloud')}>Multicloud</li>
                <li className="hover:text-brand-primary cursor-pointer transition-colors" onClick={() => onPageChange('services-managed')}>Managed</li>
                <li className="hover:text-brand-primary cursor-pointer transition-colors" onClick={() => onPageChange('services-training')}>Training</li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-white font-black text-[11px] uppercase tracking-[0.4em] mb-10 border-l-2 border-brand-primary pl-5">Corporate</h4>
              <ul className="space-y-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                <li className="cursor-pointer hover:text-brand-primary transition-colors" onClick={() => onPageChange('company')}>Company</li>
                <li className="cursor-pointer hover:text-brand-primary transition-colors" onClick={() => onPageChange('why-cybersys')}>Why CyberSys</li>
                <li className="cursor-pointer hover:text-brand-primary transition-colors" onClick={() => onPageChange('contact')}>RFP Portal</li>
                <li className="cursor-pointer hover:text-brand-primary transition-colors">Ethics</li>
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-12">
              <h4 className="text-white font-black text-[11px] uppercase tracking-[0.4em] mb-10 border-l-2 border-brand-primary pl-5">Operations</h4>
              <div className="space-y-8">
                <div>
                  <p className="text-[10px] text-brand-primary font-black uppercase tracking-[0.4em] mb-2">Africa Hub</p>
                  <p className="text-base text-slate-300 font-bold uppercase tracking-tight">Lagos</p>
                </div>
                <div>
                  <p className="text-[10px] text-brand-accent font-black uppercase tracking-[0.4em] mb-2">Global</p>
                  <p className="text-base text-slate-300 font-bold uppercase tracking-tight">London, UK</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.5em]">
              © 2026 CyberSys Technologies. Resilience standards observed.
            </p>
            <div className="flex gap-12 text-[10px] text-slate-500 font-black uppercase tracking-[0.4em]">
              <span className="hover:text-white cursor-pointer">Compliance</span>
              <span className="hover:text-white cursor-pointer">Privacy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
