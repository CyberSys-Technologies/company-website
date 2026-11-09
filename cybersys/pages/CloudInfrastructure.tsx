import React from 'react';
import {
  Activity, CloudUpload, Compass, DatabaseBackup, Network, Rocket, Search, Server, TrendingDown
} from 'lucide-react';
import { Page } from '../types';
import MulticloudDiagram from '../components/MulticloudDiagram';
import { BackToSolutions, ContactCTA, Eyebrow, PrimaryButton, SectionHeader, icon, useReveal } from '../components/SolutionBlocks';

const CLOUD_SOLUTIONS = [
  { icon: <CloudUpload />, title: 'Cloud Migration & Modernisation', desc: 'Move workloads to the cloud safely, and modernise them once they are there.' },
  { icon: <Network />, title: 'Hybrid & Multicloud Architecture', desc: 'Connect on-premise systems with Azure, AWS, Google Cloud and Oracle Cloud under one design.' },
  { icon: <Server />, title: 'Private Cloud & Virtualisation', desc: 'Secure, high-performance private environments for regulated and sensitive workloads, built on Huawei networking and storage.' },
  { icon: <DatabaseBackup />, title: 'Backup & Disaster Recovery', desc: 'Resilient backup and failover so critical services stay available.' },
  { icon: <TrendingDown />, title: 'Cloud Cost Optimisation', desc: 'FinOps practices that right-size resources and cut wasted spend.' },
  { icon: <Activity />, title: 'Monitoring & Management', desc: 'Ongoing visibility, capacity planning and performance tuning.' }
];

const HYPERSCALER_PARTNERS = [
  { company: 'Microsoft', companyLogo: '/partners/microsoft.svg', product: 'Microsoft Azure', productLogo: '/partners/azure.svg', color: '#0078D4',
    desc: 'Enterprise-grade platform featuring Virtual Machines, Azure SQL, AKS, and Azure Functions for seamless hybrid integration and robust compliance.' },
  { company: 'Amazon', companyLogo: '/partners/aws.webp', product: 'Amazon Web Services', productLogo: '/partners/products/aws-ec2.svg', color: '#FF9900',
    desc: 'The most comprehensive global scale, leveraging EC2, S3, Lambda, and RDS for unmatched service depth and operational resilience.' },
  { company: 'Google', companyLogo: '/partners/products/gcp-workspace.png', product: 'Google Cloud', productLogo: '/partners/google-cloud.webp', color: '#34A853',
    desc: 'Leading-edge infrastructure powered by Compute Engine, BigQuery, GKE, and Vertex AI for advanced machine learning and data analytics.' },
  { company: 'Oracle', companyLogo: '', product: 'Oracle Cloud Infrastructure', productLogo: '/partners/oracle.png', color: '#C74634',
    desc: 'Next-generation architecture featuring OCI Compute, Autonomous Database, OKE, and Exadata built for mission-critical enterprise applications.' }
];

const DELIVERY_STEPS = [
  { icon: <Search />, step: 'Infrastructure Assessment', desc: 'Evaluating existing systems, dependency maps, and capacity needs.' },
  { icon: <Compass />, step: 'Architecture', desc: 'Designing secure, high-performance hybrid cloud environments.' },
  { icon: <Rocket />, step: 'Migration', desc: 'Executing zero-downtime workload transitions with rigorous quality assurance.' }
];

const CloudInfrastructure: React.FC<{ onPageChange: (p: Page) => void }> = ({ onPageChange }) => {
  // Scroll reveals: hero rises, solutions cascade, steps slide in from the left, CTA zooms
  useReveal();

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. HERO: text on the left, live multicloud diagram on the right */}
      <section className="relative bg-white border-b border-slate-100">
        <div className="absolute inset-0 blueprint-grid opacity-50 pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16 relative py-16 lg:py-20">
          <BackToSolutions onPageChange={onPageChange} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-10 items-center">
            <div className="lg:col-span-5 max-w-xl w-full mx-auto text-left animate-hero-rise">
              <Eyebrow>Resilient Hybrid Platforms</Eyebrow>
              <h1 className="mt-5 text-[2rem] sm:text-5xl lg:text-[2.6rem] xl:text-5xl 2xl:text-6xl font-bold text-brand-text leading-[1.1]">
                Cloud &<br /> <span className="text-brand-primary">Infrastructure</span>
              </h1>
              <p className="mt-6 text-base md:text-lg 2xl:text-xl text-brand-muted font-medium leading-relaxed">
                CyberSys Technologies architects, implements and manages secure, high-performance cloud environments across the four major cloud hyperscalers, built to support heavy workloads and scale with operational continuity.
              </p>
              <PrimaryButton onClick={() => onPageChange('contact')} className="mt-8">Start a Technical Conversation</PrimaryButton>
            </div>
            <div className="lg:col-span-7 animate-hero-image">
              <MulticloudDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* 2. HYPERSCALER PARTNERS: header splits in, cards rise one after another */}
      <section className="py-16 lg:py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16 relative">
          <SectionHeader
            eyebrow="Supported Platforms"
            title={<>Hyperscaler <span className="text-brand-primary">Partners</span></>}
            text="We design, migrate and run workloads on the world's leading cloud platforms, choosing the right one for each workload."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {HYPERSCALER_PARTNERS.map((h, i) => (
              <div key={h.company} className="reveal-on-scroll" style={{ transitionDelay: `${i * 110}ms` }}>
                <div className="relative h-full bg-white rounded-[1.25rem] p-6 overflow-hidden group transition-all duration-500 hover:-translate-y-2 shadow-[0_24px_50px_-28px_rgba(0,0,0,0.45)]"
                  style={{ ['--brand' as string]: h.color }}>
                  <span className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ backgroundColor: h.color }}></span>
                  <div className="flex items-center gap-4">
                    <span className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-3">
                      {h.companyLogo
                        ? <img src={h.companyLogo} alt="" className="max-w-full max-h-full object-contain" />
                        : <span className="block w-8 h-5 rounded-full border-[3.5px]" style={{ borderColor: h.color }} />}
                    </span>
                    <span className="text-xl font-bold text-brand-text tracking-tight transition-colors duration-300 group-hover:[color:var(--brand)]">{h.company}</span>
                  </div>
                  <div className="mt-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-brand-mist/70 border border-brand-primary/10">
                    <span className="w-14 h-7 flex items-center justify-center flex-shrink-0">
                      <img src={h.productLogo} alt="" className="max-w-full max-h-full object-contain" />
                    </span>
                    <span className="text-base font-bold text-brand-text leading-tight">{h.product}</span>
                  </div>
                  <p className="mt-5 text-sm md:text-base text-brand-muted font-medium leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CLOUD SOLUTIONS: what we offer, cascading in */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16">
          <SectionHeader eyebrow="Our Cloud Solutions" title={<>Everything Your Cloud <span className="text-brand-primary">Needs</span></>} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 rounded-[1.75rem] overflow-hidden border border-slate-200">
            {CLOUD_SOLUTIONS.map((item, i) => (
              <div
                key={item.title}
                className="reveal-cascade bg-white p-7 group hover:bg-brand-mist/60 transition-colors duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-mist text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                  {icon(item.icon, 22)}
                </div>
                <h4 className="mt-6 text-lg font-semibold text-brand-text leading-tight">{item.title}</h4>
                <p className="mt-2 text-sm md:text-base text-brand-muted font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STRUCTURED DELIVERY FLOW: light hover, steps slide in from the left */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16">
          <SectionHeader eyebrow="Methodology" title={<>Structured <span className="text-brand-primary">Delivery Flow</span></>} reveal="reveal-zoom" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {DELIVERY_STEPS.map((s, i) => (
              <div key={s.step} className="reveal-from-left" style={{ transitionDelay: `${i * 130}ms` }}>
                <div className="h-full bg-white p-7 rounded-[1.25rem] border border-slate-200 relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:border-brand-primary/40 hover:shadow-[0_24px_50px_-30px_rgba(32,130,166,0.45)]">
                  <div className="absolute -top-6 -right-2 text-[6rem] font-bold leading-none text-slate-50 group-hover:text-brand-mint/20 transition-colors duration-500 select-none">{i + 1}</div>
                  <div className="relative space-y-6">
                    <div className="h-12 w-12 rounded-xl bg-brand-mist text-brand-primary flex items-center justify-center transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-brand-primary group-hover:to-brand-secondary group-hover:text-white group-hover:rotate-[-6deg]">
                      {icon(s.icon, 22)}
                    </div>
                    <div className="h-1 w-14 bg-brand-secondary rounded-full group-hover:w-full transition-all duration-700"></div>
                    <h4 className="text-xl font-semibold text-brand-text leading-[1.1] group-hover:text-brand-primary transition-colors">{s.step}</h4>
                    <p className="text-base text-brand-muted font-medium leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <ContactCTA
        onPageChange={onPageChange}
        tone="mist"
        eyebrow="Talk to an Architect"
        title={<>Engineering <span className="text-brand-primary">Infrastructure</span></>}
        text="Consult with our architects to discuss how CyberSys Technologies can design, implement and run the cloud and infrastructure your operations need."
        consultLabel="Speak to a cloud architect"
      />
    </div>
  );
};

export default CloudInfrastructure;
