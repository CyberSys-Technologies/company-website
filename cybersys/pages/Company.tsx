import React from 'react';
import { Eye, Target } from 'lucide-react';
import { Page } from '../types';
import { CORE_PILLARS } from '../constants';
import { ContactCTA, Eyebrow, HeroPhoto, PrimaryButton, SectionHeader, icon, useReveal } from '../components/SolutionBlocks';

const Company: React.FC<{ onPageChange: (p: Page) => void }> = ({ onPageChange }) => {
  useReveal();

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. HERO: text on light grey, team photo filling the other half */}
      <section id="who-we-are" className="bg-slate-50 border-b border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-6 sm:px-12 md:px-16 2xl:px-24 py-14 lg:py-20 2xl:py-24">
            <div className="max-w-xl w-full mx-auto text-left animate-hero-rise">
              <Eyebrow>About CyberSys Technologies</Eyebrow>
              <h1 className="mt-5 text-[2rem] sm:text-5xl lg:text-[2.6rem] xl:text-5xl 2xl:text-6xl font-bold text-brand-text leading-[1.1]">
                Secure Digital <span className="text-brand-primary">Infrastructure</span>
              </h1>
              <p className="mt-6 text-base md:text-lg 2xl:text-xl text-brand-muted font-medium leading-relaxed">
                We design, implement and support secure, resilient and scalable cloud, cybersecurity, data and business application solutions for enterprises and public sector institutions across Africa.
              </p>
              <PrimaryButton onClick={() => onPageChange('contact')} className="mt-8">Talk to Us</PrimaryButton>
            </div>
          </div>
          <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-0 overflow-hidden">
            <HeroPhoto src="/about/workstation.webp" alt="CyberSys Technologies engineer working at a development workstation" />
          </div>
        </div>
      </section>

      {/* 2. OUR STORY: centred heading and one paragraph, full content width */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16 2xl:px-24 text-center">
          <SectionHeader eyebrow="Who We Are" title={<>Global Standards, <span className="text-brand-primary">Local Understanding</span></>} className="mb-8" reveal="reveal-zoom" />
          <p className="text-base md:text-lg 2xl:text-xl text-brand-muted font-medium leading-relaxed reveal-on-scroll">
            CyberSys Technologies Limited is an Enterprise Technology Company focused on Digital Transformation, Cybersecurity, Artificial Intelligence (AI), Data Analytics, Cloud Solutions, Intelligent Automation and Managed Services. Established to address the growing complexity of digital transformation in emerging markets, we bridge the gap between global technology standards and local operational realities. Working with partners including Microsoft, Oracle, Google Cloud, AWS, Sophos and Check Point, our own team designs, implements and supports solutions for organisations across Oil & Gas, Banking and Financial Services, Real Estate, Healthcare and Manufacturing.
          </p>
        </div>
      </section>

      {/* 3. MISSION & VISION: mission on white, vision on deep blue */}
      <section id="mission-vision" className="pb-16 lg:pb-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="reveal-zoom rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 sm:p-10 hover:border-brand-primary/40 transition-colors duration-500">
              <span className="w-12 h-12 rounded-xl bg-white text-brand-primary flex items-center justify-center">{icon(<Target />, 24)}</span>
              <h3 className="mt-6 text-2xl font-bold text-brand-text">Our Mission</h3>
              <p className="mt-4 text-base md:text-lg text-brand-muted font-medium leading-relaxed">
                To enable digital transformation through secure cloud adoption, regulatory-compliant cybersecurity, and analytics-driven business decision-making.
              </p>
            </div>
            <div className="reveal-zoom rounded-[1.5rem] bg-brand-mist p-8 sm:p-10" style={{ transitionDelay: '120ms' }}>
              <span className="w-12 h-12 rounded-xl bg-white text-brand-primary flex items-center justify-center">{icon(<Eye />, 24)}</span>
              <h3 className="mt-6 text-2xl font-bold text-brand-text">Our Vision</h3>
              <p className="mt-4 text-base md:text-lg text-brand-muted font-medium leading-relaxed">
                To be West Africa’s most trusted technology partner, delivering secure cloud services across the four hyperscalers (Microsoft Azure, Oracle Cloud, Amazon Web Services and Google Cloud), advanced cybersecurity, and AI and data-driven transformation for enterprises and government.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CYBERSYS: cards cascade in */}
      <section id="differentiators" className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16">
          <SectionHeader eyebrow="Why CyberSys Technologies" title={<>Built on <span className="text-brand-primary">C.O.R.E.</span></>} text="Four pillars that set us apart and guide every solution we deliver." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_PILLARS.map((p, i) => (
              <div
                key={p.letter}
                className="reveal-cascade group relative bg-white rounded-[1.25rem] border border-slate-200 p-7 overflow-hidden hover:border-brand-primary/40 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(32,130,166,0.45)] transition-all duration-500"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="absolute -right-3 -bottom-8 text-[9rem] font-bold leading-none text-brand-mist group-hover:text-brand-primary/10 transition-colors duration-500 select-none" aria-hidden="true">{p.letter}</span>
                <span className="relative w-12 h-12 rounded-xl bg-brand-primary text-white flex items-center justify-center text-2xl font-bold">{p.letter}</span>
                <h3 className="relative mt-6 text-lg font-semibold text-brand-text">
                  <span className="text-brand-primary">{p.title.charAt(0)}</span>{p.title.slice(1)}
                </h3>
                <p className="relative mt-2 text-base text-brand-muted font-medium leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        onPageChange={onPageChange}
        eyebrow="Start the Conversation"
        title={<>Partner with <span className="text-brand-primary">CyberSys Technologies</span></>}
        text="Speak with our team about your cloud, security, data or business application priorities, and how we can help you move forward."
        consultLabel="Speak to our team"
      />
    </div>
  );
};

export default Company;
