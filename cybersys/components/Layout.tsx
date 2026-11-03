
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Linkedin, Instagram, Youtube, Mail } from 'lucide-react';
import { Page, NavLink } from '../types';
import { NAV_LINKS, WHATSAPP_URL, WHATSAPP_URL_2 } from '../constants';
import { ROUTES } from '../routes';
import WhatsAppIcon from './WhatsAppIcon';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [navHeight, setNavHeight] = useState(88);
  const timeoutRef = useRef<number | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // The nav shrinks when scrolled; keep the mobile menu pinned directly beneath it
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const observer = new ResizeObserver(() => setNavHeight(nav.getBoundingClientRect().height));
    observer.observe(nav);
    return () => observer.disconnect();
  }, []);

  // Stop the page behind the open mobile menu from scrolling; collapse its sections on close
  useEffect(() => {
    if (!isMenuOpen) setMobileExpanded(null);
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Navigate, then (for About Us items) scroll to the section on that page, clear of the fixed nav
  const goTo = (link: NavLink) => {
    onPageChange(link.path);
    setActiveDropdown(null);
    setIsMenuOpen(false);
    if (link.anchor) {
      const anchor = link.anchor;
      window.setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - (navRef.current?.offsetHeight || 80);
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 150);
    }
  };

  // Real links (crawlable, open in a new tab) that still navigate in-app on a normal click
  const linkProps = (link: NavLink) => ({
    href: ROUTES[link.path] + (link.anchor ? `#${link.anchor}` : ''),
    onClick: (e: React.MouseEvent) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      goTo(link);
    }
  });

  // Footer link at the bottom of each dropdown, pointing at the section's overview page
  const overviewLabel = (link: NavLink) =>
    link.path === 'company' ? 'About CyberSys Technologies' : `All ${link.label.toLowerCase()}`;

  const renderIcon = (icon: React.ReactNode, size: number) =>
    React.isValidElement(icon)
      ? React.cloneElement(icon as React.ReactElement<{ size?: number; strokeWidth?: number }>, { size, strokeWidth: 1.75 })
      : null;

  // Solutions covers both the solutions-* and services-* pages; About Us covers the company pages
  const isLinkActive = (link: NavLink) => {
    if (link.path === 'solutions') return currentPage.startsWith('solutions') || currentPage.startsWith('services');
    if (link.path === 'industries') return currentPage.startsWith('industries');
    if (link.path === 'company') return currentPage === 'company';
    return currentPage === link.path;
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-brand-primary selection:text-white relative max-w-full overflow-x-hidden">

      {/* Header */}
      <nav 
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-2xl py-2 shadow-[0_1px_0_0_rgba(15,23,42,0.04)]' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 flex items-center justify-between w-full">
          
          {/* BRAND IDENTITY - Single image logo */}
          <a
            href="/"
            aria-label="CyberSys Technologies home"
            className="flex items-center cursor-pointer group flex-shrink-0 mr-4 lg:mr-6 xl:mr-10"
            onClick={(e) => { e.preventDefault(); onPageChange('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <img 
              src="/cybersys-logo.webp" 
              alt="CyberSys Technologies" 
              className="h-12 w-auto min-w-[180px] object-contain" 
            />
          </a>

          {/* NAVIGATION LINKS */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-10 2xl:gap-12 lg:ml-auto">
            {NAV_LINKS.map((link, index) => {
              const isActive = isLinkActive(link) || activeDropdown === link.label;
              // Items toward the right edge open leftwards so the menu stays on screen
              const alignRight = index >= NAV_LINKS.length - 2;
              const wide = (link.subLinks?.length || 0) > 5;
              return (
                <div 
                  key={link.label} 
                  className="relative py-2 flex-shrink-0"
                  onMouseEnter={() => link.subLinks && handleMouseEnter(link.label)}
                  onMouseLeave={() => link.subLinks && handleMouseLeave()}
                >
                  <a
                    {...linkProps(link)}
                    aria-haspopup={link.subLinks ? 'true' : undefined}
                    aria-expanded={link.subLinks ? activeDropdown === link.label : undefined}
                    className={link.path === 'contact'
                      // Contact doubles as the call to action: blue text that fills into a button on hover
                      ? `-my-2 px-5 py-2.5 xl:px-6 xl:py-3 rounded text-[13px] xl:text-[14px] font-semibold uppercase tracking-[0.12em] whitespace-nowrap transition-all duration-300 hover:bg-brand-primary hover:text-white hover:shadow-xl hover:shadow-brand-primary/20 hover:-translate-y-0.5 ${
                          isActive ? 'bg-brand-primary text-white' : 'text-brand-primary'
                        }`
                      : `text-[13px] xl:text-[14px] font-medium uppercase tracking-[0.12em] transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                          isActive ? 'text-brand-primary' : 'text-brand-text hover:text-brand-primary'
                        }`}
                  >
                    {link.label}
                    {link.subLinks && (
                      <ChevronDown size={15} className={`transition-transform duration-300 opacity-60 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                    )}
                  </a>

                  {/* DROPDOWN MENU: the outer layer positions, the inner panel animates, so the
                      entrance animation's transform never fights the centring transform */}
                  {link.subLinks && activeDropdown === link.label && (
                    <div className={`absolute top-full pt-4 z-50 ${
                      alignRight ? 'right-0' : 'left-1/2 -translate-x-1/2'
                    } ${wide ? 'w-[700px]' : 'w-[420px]'}`}>
                      <div className="animate-panel-in bg-white rounded-2xl border border-slate-200/70 shadow-[0_24px_60px_-20px_rgba(15,23,42,0.25)] overflow-hidden">
                        <div className="h-[3px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-mint" aria-hidden="true"></div>
                        <div className={`p-3 grid gap-1 ${wide ? 'grid-cols-2' : 'grid-cols-1'}`}>
                          {link.subLinks.map((sub) => (
                            <a
                              key={sub.label}
                              {...linkProps(sub)}
                              className="group/sub flex items-start gap-4 w-full text-left px-4 py-3.5 rounded-xl hover:bg-brand-mist transition-colors"
                            >
                              <span className="w-10 h-10 flex-shrink-0 rounded-lg bg-brand-mist text-brand-primary flex items-center justify-center group-hover/sub:bg-brand-primary group-hover/sub:text-white transition-colors">
                                {renderIcon(sub.icon, 20)}
                              </span>
                              <span className="min-w-0">
                                <span className="flex items-center gap-2 text-[15px] font-bold text-brand-text group-hover/sub:text-brand-primary transition-colors">
                                  {sub.label}
                                </span>
                                <span className="block text-[13px] text-slate-500 leading-snug mt-1">{sub.description}</span>
                              </span>
                            </a>
                          ))}
                        </div>
                        <a
                          {...linkProps(link)}
                          className="group/all w-full flex items-center justify-between px-7 py-4 bg-slate-50 border-t border-slate-100 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-primary hover:text-brand-deep transition-colors"
                        >
                          {overviewLabel(link)}
                          <ArrowRight size={14} className="transition-transform group-hover/all:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            className="lg:hidden text-brand-text p-2 hover:bg-slate-100 rounded-lg transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </nav>

      {/* MOBILE MENU: rendered outside <nav>, whose backdrop-blur would otherwise trap this fixed panel inside the nav bar */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed left-0 right-0 bottom-0 bg-white z-[60] px-6 sm:px-10 py-6 flex flex-col gap-8 border-t border-slate-100 overflow-y-auto"
          style={{ top: navHeight }}
        >
          <div className="divide-y divide-slate-100 border-b border-slate-100">
            {NAV_LINKS.map((link) => {
              const isOpen = mobileExpanded === link.label;
              return (
                <div key={link.label}>
                  <button
                    onClick={() => (link.subLinks ? setMobileExpanded(isOpen ? null : link.label) : goTo(link))}
                    aria-expanded={link.subLinks ? isOpen : undefined}
                    className={`w-full flex items-center justify-between py-5 text-left text-2xl font-semibold tracking-tight transition-colors ${
                      isLinkActive(link) || isOpen || link.path === 'contact' ? 'text-brand-primary' : 'text-brand-text'
                    }`}
                  >
                    {link.label}
                    {link.subLinks && (
                      <ChevronDown size={20} className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-primary' : ''}`} />
                    )}
                  </button>
                  {link.subLinks && isOpen && (
                    <div className="animate-panel-in pb-5 space-y-1">
                      {link.subLinks.map((sub) => (
                        <a
                          key={sub.label}
                          {...linkProps(sub)}
                          className="w-full flex items-center gap-4 px-2 py-3 rounded-lg text-left hover:bg-brand-mist transition-colors"
                        >
                          <span className="w-9 h-9 flex-shrink-0 rounded-lg bg-brand-mist text-brand-primary flex items-center justify-center">
                            {renderIcon(sub.icon, 18)}
                          </span>
                          <span className="text-base font-bold text-brand-text">{sub.label}</span>
                        </a>
                      ))}
                      <a
                        {...linkProps(link)}
                        className="mt-2 ml-2 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.2em] text-brand-action"
                      >
                        {overviewLabel(link)} <ArrowRight size={13} />
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* CONTENT MOUNT */}
      <main className="flex-grow pt-[80px]">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-brand-deep text-white relative">
        {/* Logo-stripe accent: ocean blue, teal, mint */}
        <div className="h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-mint" aria-hidden="true"></div>
        <div className="max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-8 md:px-16 2xl:px-20 pt-20 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

            <div className="sm:col-span-2 lg:col-span-3 space-y-8">
              {/* All-white logo for the deep-blue footer (client-approved) */}
              <img src="/cybersys-logo.webp" alt="CyberSys Technologies" className="h-10 md:h-12 w-auto object-contain brightness-0 invert" />
              <p className="text-white/70 text-sm leading-relaxed font-medium max-w-sm">
                Primary authority for resilient enterprise infrastructure and security architecture across the African continent.
              </p>
              <div className="flex gap-3">
                {[
                  { href: 'https://www.linkedin.com/company/cybersys-technologies1/', label: 'LinkedIn', icon: <Linkedin size={18} /> },
                  { href: 'https://www.instagram.com/cybersystechnologieslimited', label: 'Instagram', icon: <Instagram size={18} /> },
                  { href: 'https://www.youtube.com/@cybersystechnologieslimited', label: 'YouTube', icon: <Youtube size={18} /> }
                ].map(social => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-brand-deep transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                  className="p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-brand-deep transition-colors"
                >
                  <WhatsAppIcon size={18} />
                </a>
                <a
                  href="mailto:info@cybersystechnologies.com"
                  aria-label="Email CyberSys Technologies"
                  className="p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-brand-deep transition-colors"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Footer columns mirror the main navigation */}
            {NAV_LINKS.filter(link => link.subLinks && link.path !== 'industries').map(link => (
              <div key={link.label} className="lg:col-span-3">
                <h4 className="text-white font-medium text-[13px] tracking-[0.2em] mb-8 uppercase">{link.label}</h4>
                <ul className="space-y-4 text-[12px] font-bold text-white/70 uppercase tracking-wider">
                  {link.subLinks!.map(sub => (
                    <li key={sub.label}>
                      <a {...linkProps(sub)} className="text-left hover:text-brand-mint transition-colors">{sub.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="lg:col-span-3 space-y-5">
              <h4 className="text-white font-medium text-[13px] tracking-[0.2em] mb-8 uppercase">Contact</h4>
              <div>
                <p className="text-[13px] text-brand-mint font-medium uppercase tracking-[0.2em] mb-1">Headquarters</p>
                <p className="text-xs text-white/80 font-semibold leading-relaxed">
                  Plot 23, Providence Street, Lekki Phase 1, Lagos, Nigeria
                </p>
              </div>
              <div>
                <p className="text-[13px] text-brand-mint font-medium uppercase tracking-[0.2em] mb-1">Direct Lines</p>
                <div className="space-y-1">
                  <a href="tel:+2348025955618" className="block text-xs text-white/80 hover:text-brand-mint transition-colors font-medium">
                    +234 802 595 5618
                  </a>
                  <a href="tel:+2348109076541" className="block text-xs text-white/80 hover:text-brand-mint transition-colors font-medium">
                    +234 810 907 6541
                  </a>
                </div>
              </div>
              <div>
                <p className="text-[13px] text-brand-mint font-medium uppercase tracking-[0.2em] mb-1">WhatsApp</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-white/80 hover:text-brand-mint transition-colors font-medium">
                  <WhatsAppIcon size={14} /> +234 802 595 5618
                </a>
                <a href={WHATSAPP_URL_2} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-1 text-xs text-white/80 hover:text-brand-mint transition-colors font-medium">
                  <WhatsAppIcon size={14} /> +234 810 907 6541
                </a>
              </div>
              <div>
                <p className="text-[13px] text-brand-mint font-medium uppercase tracking-[0.2em] mb-1">Official Email</p>
                <a href="mailto:info@cybersystechnologies.com" className="text-xs text-white/80 hover:text-brand-mint transition-colors font-medium break-all block">
                  info@cybersystechnologies.com
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/15">
            <p className="text-[13px] text-white/50 font-medium uppercase tracking-[0.2em] text-center md:text-left">
              © {new Date().getFullYear()} CyberSys Technologies Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};


export default Layout;

