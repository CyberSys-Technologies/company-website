import React from 'react';
import { BookOpen, Check, Compass } from 'lucide-react';
import { Page } from '../types';
import { ContactCTA, SectionHeader, SplitHero, icon, useReveal } from '../components/SolutionBlocks';

const CONSULTANCY = [
  'Technology strategy & roadmaps',
  'Cloud and security architecture advisory',
  'Digital transformation planning',
  'Platform and vendor selection'
];

const ENABLEMENT = [
  'Access to our partners’ training programmes and materials',
  'Sessions with partner specialists where needed',
  'User adoption support for the solutions we deliver',
  'Knowledge transfer and handover on our projects'
];

const PARTNERS: { name: string; logo: string; mark?: boolean }[] = [
  { name: 'Microsoft', logo: '/partners/microsoft.svg', mark: true },
  { name: 'AWS', logo: '/partners/aws.webp' },
  { name: 'Google Cloud', logo: '/partners/google-cloud.webp', mark: true },
  { name: 'Oracle', logo: '/partners/oracle.png' },
  { name: 'Sophos', logo: '/partners/sophos.svg', mark: true },
  { name: 'Check Point', logo: '/partners/checkpoint.webp' },
  { name: 'Fortinet', logo: '/partners/fortinet.svg' },
  { name: 'Palo Alto Networks', logo: '/partners/paloalto.svg' },
  { name: 'Huawei', logo: '/partners/huawei.webp', mark: true }
];

const TrainingConsultancy: React.FC<{ onPageChange: (p: Page) => void }> = ({ onPageChange }) => {
  useReveal();

  return (
    <div className="bg-white overflow-hidden">
      <SplitHero
        onPageChange={onPageChange}
        eyebrow="Guidance & Enablement"
        title={<>Training & <span className="text-brand-primary">Consultancy</span></>}
        intro="CyberSys Technologies helps organisations plan and adopt technology with confidence, drawing on our own advisory experience and the resources and expertise of our technology partners."
        cta="Talk to Us"
        image="/pages/training.webp"
        imageAlt="CyberSys Technologies consultant advising a colleague at a laptop"
        imagePosition="object-[50%_40%]"
      />

      {/* 2. TWO WAYS WE HELP: consultancy on white, partner-backed enablement on deep blue */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16">
          <SectionHeader eyebrow="How We Help" title={<>Advise and <span className="text-brand-primary">Enable</span></>} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="reveal-from-left rounded-[1.25rem] border border-slate-200 p-7 lg:p-9 hover:border-brand-primary/40 hover:shadow-[0_24px_50px_-30px_rgba(32,130,166,0.45)] transition-all duration-500">
              <span className="w-12 h-12 rounded-xl bg-brand-mist text-brand-primary flex items-center justify-center">{icon(<Compass />, 22)}</span>
              <h3 className="mt-6 text-2xl font-bold text-brand-text">Consultancy</h3>
              <p className="mt-3 text-base text-brand-muted font-medium leading-relaxed">Practical advice that turns technology plans into clear, achievable roadmaps.</p>
              <ul className="mt-6 space-y-3">
                {CONSULTANCY.map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm md:text-base font-semibold text-brand-text">
                    <span className="w-5 h-5 flex-shrink-0 rounded-full bg-brand-secondary/15 text-brand-secondary flex items-center justify-center"><Check size={12} strokeWidth={3} /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal-from-right rounded-[1.25rem] bg-brand-mist p-7 lg:p-9">
              <span className="w-12 h-12 rounded-xl bg-white text-brand-primary flex items-center justify-center">{icon(<BookOpen />, 22)}</span>
              <h3 className="mt-6 text-2xl font-bold text-brand-text">Enablement</h3>
              <p className="mt-3 text-base text-brand-muted font-medium leading-relaxed">We connect your teams with the learning resources and specialists of our technology partners.</p>
              <ul className="mt-6 space-y-3">
                {ENABLEMENT.map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm md:text-base font-semibold text-brand-text">
                    <span className="w-5 h-5 flex-shrink-0 rounded-full bg-brand-secondary/15 text-brand-secondary flex items-center justify-center"><Check size={12} strokeWidth={3} /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BACKED BY OUR PARTNERS: logo strip on a light teal wash */}
      <section className="py-16 lg:py-20 bg-brand-mist">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16">
          <SectionHeader
            eyebrow="Backed by Our Partners"
            title={<>Learning Resources from <span className="text-brand-primary">Global Leaders</span></>}
            text="Where your teams need training, we draw on the programmes, materials and experts of the technology partners behind our solutions."
            reveal="reveal-zoom"
          />
            <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4">
              {PARTNERS.map((p, i) => (
                <div
                  key={p.name}
                  className="reveal-zoom h-24 bg-white rounded-2xl flex items-center justify-center px-6 hover:-translate-y-1 transition-transform duration-500"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  {p.mark
                    ? <span className="flex items-center gap-3"><img src={p.logo} alt="" className="h-8 w-auto object-contain" /><span className="text-lg font-semibold text-slate-600">{p.name}</span></span>
                    : <img src={p.logo} alt={p.name} className="max-h-9 max-w-full object-contain" />}
                </div>
              ))}
            </div>
        </div>
      </section>

      <ContactCTA
        onPageChange={onPageChange}
        eyebrow="Start the Conversation"
        title={<>Plan Your Next <span className="text-brand-primary">Step</span></>}
        text="Talk to CyberSys Technologies about a strategy engagement or about enabling your teams on the platforms you use."
        consultLabel="Speak to a consultant"
      />
    </div>
  );
};

export default TrainingConsultancy;
