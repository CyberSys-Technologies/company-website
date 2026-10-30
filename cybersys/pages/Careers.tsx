import React from 'react';
import { BrainCircuit, Cloud, FileText, LayoutGrid, Mail, ShieldCheck } from 'lucide-react';
import { Page } from '../types';
import { SectionHeader, SplitHero, icon, useReveal } from '../components/SolutionBlocks';

const CV_MAILTO = 'mailto:info@cybersystechnologies.com?subject=Careers%20at%20CyberSys%20Technologies';

const AREAS = [
  { icon: <Cloud />, title: 'Cloud & Infrastructure', desc: 'Designing, migrating and running platforms on Azure, AWS, Google Cloud and Oracle Cloud.' },
  { icon: <ShieldCheck />, title: 'Cybersecurity', desc: 'Implementing and managing endpoint, network, identity and cloud security.' },
  { icon: <BrainCircuit />, title: 'Data & AI', desc: 'Building dashboards, data pipelines and AI solutions for our clients.' },
  { icon: <LayoutGrid />, title: 'Business Applications', desc: 'Implementing ERP and enterprise applications such as Oracle and Dynamics 365.' }
];


const Careers: React.FC<{ onPageChange: (p: Page) => void }> = ({ onPageChange }) => {
  useReveal();

  return (
    <div className="bg-white overflow-hidden">
      <SplitHero
        onPageChange={onPageChange}
        showBack={false}
        eyebrow="Careers"
        title={<>Grow with <span className="text-brand-primary">CyberSys Technologies</span></>}
        intro="We are always keen to hear from talented people who want to design, implement and support technology that organisations across Africa rely on."
        cta="Send Your CV"
        ctaHref={CV_MAILTO}
        image="/pages/careers.webp"
        imageAlt="Two CyberSys Technologies colleagues working together at a laptop"
        imagePosition="object-[58%_center]"
      />

      {/* 2. AREAS OF EXPERTISE */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
          <SectionHeader
            eyebrow="Career Opportunities"
            title={<>Our Areas of <span className="text-brand-primary">Expertise</span></>}
            text="Our teams implement and support solutions with our global technology partners. We welcome applications from professionals in the following areas."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {AREAS.map((a, i) => (
              <div
                key={a.title}
                className="reveal-cascade group rounded-[1.25rem] border border-slate-200 p-6 hover:border-brand-primary/40 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(32,130,166,0.45)] transition-all duration-500"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="w-11 h-11 rounded-xl bg-brand-mist text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                  {icon(a.icon, 20)}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-brand-text">{a.title}</h3>
                <p className="mt-2 text-sm text-brand-muted font-medium leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW TO APPLY: one simple instruction and the button */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 md:px-16">
          <SectionHeader eyebrow="How to Apply" title={<>Send Us Your <span className="text-brand-primary">CV</span></>} className="mb-10" reveal="reveal-zoom" />
          <div className="reveal-on-scroll max-w-2xl mx-auto text-center bg-white rounded-[1.25rem] border border-slate-200 p-8 lg:p-10">
            <span className="mx-auto w-12 h-12 rounded-full bg-brand-mist text-brand-primary flex items-center justify-center">{icon(<FileText />, 22)}</span>
            <p className="mt-5 text-base md:text-lg text-brand-muted font-medium leading-relaxed">
              Email your CV to <a href={CV_MAILTO} className="font-semibold text-brand-text hover:text-brand-primary transition-colors">info@cybersystechnologies.com</a> with “Careers” in the subject line.
            </p>
            <a
              href={CV_MAILTO}
              className="mt-8 inline-flex items-center gap-2.5 px-7 py-3.5 bg-brand-action hover:bg-brand-deep text-white rounded font-semibold text-[11px] uppercase tracking-[0.15em] transition-colors"
            >
              {icon(<Mail />, 15)} Send Your CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
