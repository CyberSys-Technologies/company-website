import React from 'react';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { Page } from '../types';
import { INDUSTRIES, Industry } from '../data/industries';
import { ContactCTA, Eyebrow, HeroPhoto, PrimaryButton, SectionHeader, icon, useReveal } from '../components/SolutionBlocks';

/** Split hero shared by the overview and industry pages */
const IndustryHero: React.FC<{
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  /** Show the whole photo on a blurred copy of itself instead of filling the panel */
  fullPhoto?: boolean;
  onBack?: () => void;
  onCta: () => void;
}> = ({ eyebrow, title, intro, image, imageAlt, imagePosition = 'object-center', fullPhoto, onBack, onCta }) => {
  return (
  <section className="bg-slate-50 border-b border-slate-100">
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex items-center justify-center px-6 sm:px-12 md:px-16 2xl:px-24 py-14 lg:py-20 2xl:py-24">
        <div className="max-w-xl w-full mx-auto text-left animate-hero-rise">
          {onBack && (
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500 hover:text-brand-primary transition-colors mb-8 group"
            >
              <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> All Industries
            </button>
          )}
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-[2rem] sm:text-5xl lg:text-[2.6rem] xl:text-5xl 2xl:text-6xl font-bold text-brand-text leading-[1.1]">
            {title}
          </h1>
          <p className="mt-6 text-base md:text-lg 2xl:text-xl text-brand-muted font-medium leading-relaxed">{intro}</p>
          <PrimaryButton onClick={onCta} className="mt-8">Talk to an Industry Specialist</PrimaryButton>
        </div>
      </div>
      <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-0 overflow-hidden">
        {fullPhoto
          ? <HeroPhoto src={image} alt={imageAlt} />
          : <img src={image} alt={imageAlt} className={`absolute inset-0 w-full h-full object-cover ${imagePosition} animate-hero-image`} />}
      </div>
    </div>
  </section>
  );
};

/** Photo card linking to an industry page */
const IndustryCard: React.FC<{ industry: Industry; onOpen: () => void; delay: number }> = ({ industry, onOpen, delay }) => (
  <button
    onClick={onOpen}
    className="reveal-cascade group w-full text-left bg-white rounded-[1.25rem] overflow-hidden border border-slate-200 hover:border-brand-primary/40 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(32,130,166,0.45)] transition-all duration-500 flex flex-col"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="relative w-full overflow-hidden h-52 lg:h-60">
      <img src={industry.image} alt="" className={`w-full h-full object-cover ${industry.imagePosition || 'object-center'} group-hover:scale-105 transition-transform duration-700`} loading="lazy" />
      <span className="absolute left-5 bottom-5 w-11 h-11 rounded-xl bg-white text-brand-primary flex items-center justify-center shadow-md">
        {icon(industry.icon, 22)}
      </span>
    </div>
    <div className="p-6 lg:p-7 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-brand-text tracking-tight leading-tight">{industry.name}</h3>
      <p className="mt-2 text-sm md:text-base text-brand-muted font-medium leading-relaxed flex-grow">{industry.summary}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.2em] text-brand-action">
        Explore industry <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </div>
  </button>
);

const IndustryDetail: React.FC<{ industry: Industry; onPageChange: (p: Page) => void }> = ({ industry, onPageChange }) => {
  useReveal(industry.page);
  const others = INDUSTRIES.filter(i => i.page !== industry.page);
  const { lead, spotlight } = industry;

  return (
    <div className="bg-white overflow-hidden">
      <IndustryHero
        eyebrow="Industries"
        title={industry.name}
        intro={industry.intro}
        image={industry.image}
        imageAlt={industry.name}
        imagePosition={industry.imagePosition}
        fullPhoto={industry.fullPhoto}
        onBack={() => onPageChange('industries')}
        onCta={() => onPageChange('contact')}
      />

      {/* 2. CHALLENGES: editorial numbered list */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16">
          <SectionHeader eyebrow="The Challenge" title={<>What the Sector <span className="text-brand-primary">Faces</span></>} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
              {industry.challenges.map((c, i) => (
                <div key={c.title} className="border-t-2 border-slate-200 hover:border-brand-secondary pt-6 transition-colors duration-500 reveal-on-scroll" style={{ transitionDelay: `${i * 90}ms` }}>
                  <div className="text-sm font-bold text-brand-primary tracking-[0.2em]">0{i + 1}</div>
                  <h3 className="mt-3 text-lg font-semibold text-brand-text">{c.title}</h3>
                  <p className="mt-2 text-base text-brand-muted font-medium leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* 3. HOW WE HELP: one row of compact solution cards, the leading need first */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16">
          <SectionHeader eyebrow="How We Help" title={<>Solutions Built for <span className="text-brand-primary">{industry.name}</span></>} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {[lead, ...industry.solutions].map((s, i) => (
              <button
                key={s.title}
                onClick={() => onPageChange(s.path)}
                className={`reveal-cascade group relative overflow-hidden text-left bg-white rounded-[1.25rem] border p-6 hover:border-brand-primary/40 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(32,130,166,0.45)] transition-all duration-500 flex flex-col ${i === 0 ? 'border-brand-primary/30' : 'border-slate-200'}`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                {/* The sector's leading need is marked with a teal bar and a filled icon */}
                {i === 0 && <span className="absolute left-0 right-0 top-0 h-1 bg-brand-secondary" aria-hidden="true"></span>}
                <span className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-500 ${i === 0 ? 'bg-brand-primary text-white' : 'bg-brand-mist text-brand-primary group-hover:bg-brand-primary group-hover:text-white'}`}>
                  {icon(s.icon, 20)}
                </span>
                <h3 className="mt-5 text-base lg:text-lg font-semibold text-brand-text leading-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-brand-muted font-medium leading-relaxed flex-grow">{s.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.2em] text-slate-400 group-hover:text-brand-primary transition-colors">
                  Explore <ArrowRight size={13} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPOTLIGHT: solid deep blue, sector-specific use cases */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16">
          <SectionHeader eyebrow={spotlight.eyebrow} title={<>{spotlight.title} <span className="text-brand-primary">{spotlight.accent}</span></>} text={spotlight.intro} />
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${spotlight.items.length > 4 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-px bg-brand-mist rounded-[1.25rem] overflow-hidden`}>
            {spotlight.items.map((item, i) => (
              <div key={item.title} className="reveal-zoom group relative bg-white p-7 hover:bg-brand-mist/60 transition-colors duration-500" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="w-12 h-12 rounded-xl bg-brand-mist text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                  {icon(item.icon, 22)}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-brand-text">{item.title}</h3>
                <p className="mt-2 text-sm md:text-base text-brand-muted font-medium leading-relaxed">{item.description}</p>
                <span className="absolute left-0 bottom-0 h-1 w-0 bg-brand-mint group-hover:w-full transition-all duration-700"></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OTHER INDUSTRIES */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16">
          <Eyebrow className="mb-8 text-center">Other Industries</Eyebrow>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {others.map((other, i) => (
              <button
                key={other.page}
                onClick={() => onPageChange(other.page)}
                className="reveal-on-scroll group text-left rounded-2xl overflow-hidden border border-slate-200 hover:border-brand-primary/40 hover:-translate-y-1 transition-all duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="h-32 overflow-hidden">
                  <img src={other.image} alt="" className={`w-full h-full object-cover ${other.imagePosition || 'object-center'} group-hover:scale-105 transition-transform duration-700`} loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="text-base font-bold text-brand-text tracking-tight group-hover:text-brand-primary transition-colors">{other.name}</div>
                  <p className="mt-1 text-sm text-brand-muted leading-relaxed">{other.summary}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        onPageChange={onPageChange}
        tone="mist"
        eyebrow="Start the Conversation"
        title={<>Talk to Us About <span className="text-brand-primary">{industry.name}</span></>}
        text="Tell CyberSys Technologies about the challenges your organisation faces and we will show you where technology can make the biggest difference."
        consultLabel="Speak to an industry specialist"
      />
    </div>
  );
};

const IndustriesOverview: React.FC<{ onPageChange: (p: Page) => void }> = ({ onPageChange }) => {
  useReveal('overview');

  return (
    <div className="bg-white overflow-hidden">
      <IndustryHero
        eyebrow="Industries"
        title={<>Technology for <span className="text-brand-primary">Critical Industries</span></>}
        intro="CyberSys Technologies designs, implements and supports technology for organisations in high-impact, regulated and mission-critical environments, where security, uptime and compliance are non-negotiable."
        image="/industries/overview-lab.webp"
        imageAlt="Laboratory scientist in a face mask, goggles and gloves examining a flask"
        imagePosition="object-[70%_center]"
        onCta={() => onPageChange('contact')}
      />

      {/* 2. INDUSTRY CARDS: two featured, three standard */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16">
          <SectionHeader
            eyebrow="Sectors We Serve"
            title={<>Built for Environments Where <span className="text-brand-primary">Failure Is Not an Option</span></>}
            text="Each industry faces different regulatory pressures, risks and operational realities. We design solutions around them."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto">
            {INDUSTRIES.map((industry, i) => (
              <div key={industry.page} className="flex">
                <IndustryCard industry={industry} delay={i * 90} onOpen={() => onPageChange(industry.page)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        onPageChange={onPageChange}
        eyebrow="Start the Conversation"
        title={<>Let’s Build Industry-Ready <span className="text-brand-primary">Infrastructure</span></>}
        text="Engage CyberSys Technologies to design secure, compliant and resilient systems tailored to your industry’s unique requirements."
        consultLabel="Speak to an industry specialist"
      />
    </div>
  );
};

const Industries: React.FC<{ onPageChange: (p: Page) => void; industryPage?: Page }> = ({ onPageChange, industryPage }) => {
  const industry = INDUSTRIES.find(i => i.page === industryPage);
  if (industry) {
    return <IndustryDetail key={industry.page} industry={industry} onPageChange={onPageChange} />;
  }
  return <IndustriesOverview onPageChange={onPageChange} />;
};

export default Industries;
