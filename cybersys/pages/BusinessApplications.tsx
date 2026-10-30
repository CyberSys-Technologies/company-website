import React from 'react';
import {
  ClipboardCheck, CodeXml, Rocket, Search, Settings, Users
} from 'lucide-react';
import { Page } from '../types';
import { ContactCTA, Eyebrow, SectionHeader, SplitHero, icon, useReveal } from '../components/SolutionBlocks';

const PLATFORMS = [
  {
    name: 'Oracle Fusion Cloud ERP',
    logo: '/partners/oracle.png',
    desc: 'Finance, procurement, project accounting and risk management on a single cloud platform, with continuous updates and built-in analytics.',
    points: ['Financials & accounting', 'Procurement & supplier management', 'Project financials']
  },
  {
    name: 'Microsoft Dynamics 365',
    logo: '/partners/products/ms-dynamics365.svg',
    desc: 'Connected ERP and CRM for finance, operations, sales and customer service, integrated with Microsoft 365 and Power Platform.',
    points: ['Finance & operations', 'Sales & customer service', 'Business Central for growing firms']
  },
  { name: 'Oracle Primavera', logo: '/partners/oracle.png', desc: 'Enterprise project and portfolio management for complex capital programmes.' },
  { name: 'Microsoft 365', logo: '/partners/products/ms-365.svg', desc: 'Email, Teams and Office apps with secure collaboration and governance.' },
  { name: 'Custom Applications', iconNode: <CodeXml />, desc: 'Bespoke software and integrations where off-the-shelf falls short.' }
];

const LIFECYCLE = [
  { icon: <Search />, step: 'Discover', desc: 'Map processes, pain points and requirements with your teams.' },
  { icon: <Settings />, step: 'Design & Configure', desc: 'Fit the platform to how your business works, not the other way round.' },
  { icon: <Users />, step: 'Migrate & Integrate', desc: 'Move legacy data safely and connect the systems around it.' },
  { icon: <ClipboardCheck />, step: 'Test & Train', desc: 'Prove every process end to end and get users confident.' },
  { icon: <Rocket />, step: 'Go Live & Support', desc: 'Launch with hypercare, then keep improving after go-live.' }
];

const BusinessApplications: React.FC<{ onPageChange: (p: Page) => void }> = ({ onPageChange }) => {
  useReveal();

  return (
    <div className="bg-white overflow-hidden">
      <SplitHero
        onPageChange={onPageChange}
        eyebrow="Enterprise Applications"
        title={<>Business Apps & <span className="text-brand-primary">ERP</span></>}
        intro="CyberSys Technologies implements and integrates the enterprise applications that run finance, operations, projects and collaboration, plus custom software where off-the-shelf falls short."
        cta="Talk to an ERP Consultant"
        image="/pages/business-apps.webp"
        imageAlt="Business system dashboards on a desktop monitor"
        imagePosition="object-center"
      />

      {/* 2. PLATFORMS: two featured cards plus three compact ones (bento) */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16">
          <SectionHeader
            eyebrow="Platforms We Implement"
            title={<>The Systems That <span className="text-brand-primary">Run Your Business</span></>}
            text="Our consultants implement Oracle and Microsoft business platforms, from first workshop to go-live and beyond."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
            {PLATFORMS.map((p, i) => {
              const featured = i < 2;
              return (
                <div
                  key={p.name}
                  className={`reveal-cascade group rounded-[1.25rem] border border-slate-200 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-[0_24px_50px_-30px_rgba(32,130,166,0.45)] ${
                    featured ? 'lg:col-span-3 bg-gradient-to-br from-white to-brand-mist/70' : 'lg:col-span-2 bg-white'
                  }`}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <div className="h-10 flex items-center">
                    {p.logo
                      ? <img src={p.logo} alt="" className={`${p.logo.endsWith('oracle.png') ? 'h-5' : 'h-10'} w-auto object-contain`} />
                      : <span className="w-10 h-10 rounded-xl bg-brand-mist text-brand-primary flex items-center justify-center">{icon(p.iconNode, 20)}</span>}
                  </div>
                  <h3 className={`mt-5 font-bold text-brand-text tracking-tight ${featured ? 'text-xl' : 'text-lg'}`}>{p.name}</h3>
                  <p className="mt-2 text-sm md:text-base text-brand-muted font-medium leading-relaxed">{p.desc}</p>
                  {p.points && (
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {p.points.map(pt => (
                        <li key={pt} className="text-xs font-bold text-brand-primary bg-white border border-brand-primary/15 rounded-md px-3 py-1.5">{pt}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. IMPLEMENTATION LIFECYCLE: vertical timeline, steps slide in alternately */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16">
          <SectionHeader eyebrow="Implementation Approach" title={<>From Workshop to <span className="text-brand-primary">Go-Live</span></>} className="mb-14" />
          <ol className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-mint md:-translate-x-1/2" aria-hidden="true"></div>
            {LIFECYCLE.map((l, i) => {
              const right = i % 2 === 1;
              return (
                <li key={l.step} className="relative pl-20 md:pl-0 pb-10 last:pb-0 md:grid md:grid-cols-2 md:gap-16">
                  <span className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-12 h-12 rounded-full bg-white border-2 border-brand-secondary text-brand-primary flex items-center justify-center z-10">
                    {icon(l.icon, 20)}
                  </span>
                  <div className={`${right ? 'md:col-start-2 reveal-from-right' : 'md:text-right reveal-from-left'}`}>
                    <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-brand-primary/40 hover:shadow-[0_20px_40px_-28px_rgba(32,130,166,0.5)] transition-all duration-500">
                      <div className="text-[13px] font-medium uppercase tracking-[0.2em] text-brand-secondary">Phase 0{i + 1}</div>
                      <h3 className="mt-2 text-xl font-semibold text-brand-text">{l.step}</h3>
                      <p className="mt-2 text-base text-brand-muted font-medium leading-relaxed">{l.desc}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <ContactCTA
        onPageChange={onPageChange}
        eyebrow="Start the Conversation"
        title={<>Modernise How <span className="text-brand-primary">You Operate</span></>}
        text="Whether you are replacing a legacy ERP, rolling out Dynamics 365 or connecting existing systems, CyberSys Technologies takes you from first workshop to go-live and beyond."
        consultLabel="Speak to an ERP consultant"
      />
    </div>
  );
};

export default BusinessApplications;
