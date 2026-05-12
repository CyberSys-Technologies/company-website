
import React, { useEffect } from 'react';
import { 
  Code2, 
  Cpu, 
  BarChart4, 
  GraduationCap, 
  ChevronLeft, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Workflow,
  Search,
  Settings,
  Database,
  Users,
  Layers,
  Activity,
  Shield
} from 'lucide-react';
import { Page } from '../types';

interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  icon: React.ReactNode;
  capabilities: string[];
  process: { step: string; desc: string }[];
  path: Page;
}

const SERVICES_CONTENT: Record<string, ServiceData> = {
  software: {
    id: 'software',
    title: 'Custom Software Development',
    subtitle: 'Bespoke Enterprise Systems',
    path: 'services-software',
    summary: 'We engineer high-performance, secure, and scalable enterprise applications designed to solve complex operational challenges and deliver measurable business yield.',
    icon: <Code2 />,
    capabilities: [
      'Enterprise Application Architecture',
      'Scalable Backend Engineering',
      'Modern Frontend Experiences',
      'Cloud-Native Microservices',
      'API Design & Ecosystems'
    ],
    process: [
      { step: 'Logic Discovery', desc: 'Mapping complex business rules and operational workflows.' },
      { step: 'Architecture', desc: 'Designing for high concurrency and absolute reliability.' },
      { step: 'Execution', desc: 'Sprint-based engineering following world-class QA standards.' }
    ]
  },
  digital: {
    id: 'digital',
    title: 'Digital Transformation & IOT',
    subtitle: 'Connected Operational Intelligence',
    path: 'services-digital',
    summary: 'Bridging the physical and digital worlds through intelligent sensors and modernized core systems to drive real-time operational efficiency.',
    icon: <Cpu />,
    capabilities: [
      'Operational Technology (OT) Modernization',
      'IOT Sensor Networks & Orchestration',
      'Legacy System Integration',
      'Real-time Data Streams',
      'Connected Asset Management'
    ],
    process: [
      { step: 'Asset Audit', desc: 'Analyzing physical assets and current digital touchpoints.' },
      { step: 'Sensor Design', desc: 'Architecting the connectivity mesh for robust data flow.' },
      { step: 'Transformation', desc: 'Rolling out the intelligence layer across operations.' }
    ]
  },
  bi: {
    id: 'bi',
    title: 'Business Intelligence',
    subtitle: 'Strategic Data Sovereignty',
    path: 'services-bi',
    summary: 'Transforming vast volumes of raw enterprise data into actionable strategic insights that power decision-making and optimize ROI.',
    icon: <BarChart4 />,
    capabilities: [
      'Advanced Data Visualization',
      'Predictive Analytics Models',
      'Data Warehousing & ETL',
      'Executive KPI Frameworks',
      'Operational Yield Reporting'
    ],
    process: [
      { step: 'Data Ingestion', desc: 'Aggregating fragmented data sources into a unified lake.' },
      { step: 'Refining', desc: 'Cleansing and structuring data for maximum accuracy.' },
      { step: 'Insights', desc: 'Deploying intelligence dashboards for strategic oversight.' }
    ]
  },
  training: {
    id: 'training',
    title: 'Training & Consultancy',
    subtitle: 'Knowledge Transfer Authority',
    path: 'services-training',
    summary: 'Empowering enterprise teams with the technical skills and architectural guidance required to maintain a resilient digital core.',
    icon: <GraduationCap />,
    capabilities: [
      'Custom Technical Training Paths',
      'Architecture Governance & Audits',
      'Security Awareness Programs',
      'Cloud Maturity Assessments',
      'CTO/CIO Advisory Services'
    ],
    process: [
      { step: 'Skill Gap Analysis', desc: 'Evaluating team capabilities against target standards.' },
      { step: 'Program Design', desc: 'Tailoring knowledge transfer for maximum retention.' },
      { step: 'Upscaling', desc: 'Executing deep-dive sessions and ongoing advisory.' }
    ]
  }
};

const ServicesOverview: React.FC<{ onPageChange: (p: Page) => void }> = ({ onPageChange }) => {
  return (
    <div className="animate-in fade-in duration-1000 bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-slate-200 py-32 md:py-60 blueprint-grid relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-fine opacity-40 pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="max-w-5xl">
            <div className="reveal-on-scroll active inline-flex items-center gap-4 mb-10">
               <div className="h-px w-12 bg-brand-primary"></div>
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary">Services Architecture</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-brand-text tracking-tighter uppercase leading-[0.85] mb-12">
              Engineering <br /> The Enterprise <br /> 
              <span className="text-brand-primary">Technical Layer.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-muted max-w-3xl font-medium leading-relaxed mb-16 border-l-2 border-brand-primary pl-10">
              CyberSys delivers outcome-driven technical services designed to modernize core operations, secure data flows, and build resilient software infrastructure for global organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.values(SERVICES_CONTENT).map((service, i) => (
              <div 
                key={service.id} 
                className="group relative p-12 bg-slate-50 border border-slate-100 rounded-[3.5rem] hover:bg-white hover:border-brand-primary hover:shadow-[0_40px_80px_-20px_rgba(15,23,42,0.1)] transition-all duration-700 overflow-hidden"
              >
                <div className="absolute top-12 right-12 text-[10px] font-black text-slate-200 group-hover:text-brand-primary/20 transition-colors tracking-[0.5em] uppercase">
                  SVC-0{i+1}
                </div>
                <div className="mb-12 p-6 bg-white rounded-2xl inline-block text-brand-primary shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 transform group-hover:-rotate-6">
                  {React.cloneElement(service.icon as React.ReactElement<{size?: number, strokeWidth?: number}>, { size: 40, strokeWidth: 1.25 })}
                </div>
                <div className="space-y-6 mb-12">
                  <h3 className="text-3xl font-black text-brand-text uppercase tracking-tighter leading-tight">{service.title}</h3>
                  <p className="text-lg text-brand-muted font-medium leading-relaxed">{service.summary}</p>
                </div>
                <div className="space-y-4 mb-14 border-t border-slate-200 pt-10">
                  <div className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">Core Capabilities</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.capabilities.slice(0, 4).map((cap, j) => (
                      <div key={j} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-brand-muted">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-30 group-hover:opacity-100 transition-opacity"></div>
                        {cap}
                      </div>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => onPageChange(service.path)}
                  className="flex items-center justify-between w-full pt-6 group/btn border-t border-slate-100"
                >
                  <span className="text-brand-primary font-black text-[11px] uppercase tracking-[0.4em] group-hover:translate-x-2 transition-transform duration-500">View Detailed Scope</span>
                  <div className="h-12 w-12 bg-white border border-slate-200 rounded-full flex items-center justify-center group-hover/btn:bg-brand-primary group-hover/btn:text-white group-hover/btn:border-brand-primary transition-all duration-500">
                    <ArrowRight size={20} />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Value Section */}
      <section className="py-40 bg-brand-text text-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-10"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
            <div className="lg:col-span-6 space-y-12">
              <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">The Yield Advantage</h2>
              <h3 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] italic">
                Outcome-Driven <br /> Technical Execution.
              </h3>
              <p className="text-xl text-slate-400 font-medium leading-relaxed">
                CyberSys doesn't just provide man-hours; we provide operational results. Every service engagement is benchmarked against your business goals and our CS5 resilience standard.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-8">
                <div className="space-y-4">
                  <ShieldCheck className="text-brand-primary" size={32} />
                  <h4 className="text-lg font-black uppercase tracking-tight italic">Security-First Engineering</h4>
                  <p className="text-sm text-slate-500 font-medium">Protection is built into the foundation of every line of code and every system we deploy.</p>
                </div>
                <div className="space-y-4">
                  <Zap className="text-brand-secondary" size={32} />
                  <h4 className="text-lg font-black uppercase tracking-tight italic">Zero-Downtime Philosophy</h4>
                  <p className="text-sm text-slate-500 font-medium">Architecture designed for absolute continuity, even during migrations and upgrades.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="bg-white/5 border border-white/10 rounded-[4rem] p-20 relative group">
                <div className="absolute inset-0 blueprint-grid-fine opacity-20"></div>
                <div className="space-y-10 relative z-10">
                  <h4 className="text-[9px] font-black text-brand-primary uppercase tracking-[0.6em]">Service Standards</h4>
                  <ul className="space-y-8">
                    {[
                      'World-class QA and architectural audits',
                      'Rigorous compliance-aware design',
                      'African regional infrastructure expertise',
                      'Global security framework adherence'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-6">
                        <CheckCircle2 size={24} className="text-brand-primary flex-shrink-0" />
                        <span className="text-xl font-bold uppercase tracking-tighter">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="max-w-6xl mx-auto bg-slate-50 border border-slate-200 rounded-[6rem] p-24 md:p-40 text-center relative overflow-hidden shadow-sm">
            <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>
            <div className="relative z-10 space-y-12">
              <h2 className="text-4xl md:text-7xl font-black text-brand-text tracking-tighter uppercase leading-[0.85]">
                Modernize Your <br /> <span className="text-brand-primary italic">Operational Core.</span>
              </h2>
              <p className="text-xl md:text-2xl text-brand-muted max-w-3xl mx-auto font-medium leading-relaxed">
                Connect with our solution architects to discuss how our specialized technical services can accelerate your digital objectives.
              </p>
              <div className="pt-10 flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => onPageChange('contact')}
                  className="px-12 py-6 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[12px] uppercase tracking-[0.4em] transition-all shadow-xl shadow-brand-primary/20 transform hover:-translate-y-1"
                >
                  Request Consultation
                </button>
                <button 
                  onClick={() => onPageChange('home')}
                  className="px-12 py-6 bg-white text-brand-text border border-slate-200 rounded font-black text-[12px] uppercase tracking-[0.4em] hover:bg-slate-100 transition-all"
                >
                  Back to Core
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceDetail: React.FC<{ content: ServiceData; onPageChange: (p: Page) => void }> = ({ content, onPageChange }) => {
  return (
    <div className="animate-in fade-in duration-1000 bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-slate-200 py-32 md:py-52 blueprint-grid relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-fine opacity-40 pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <button 
            onClick={() => onPageChange('services')}
            className="flex items-center gap-3 text-brand-primary hover:text-brand-text transition-all mb-16 text-[10px] font-black uppercase tracking-[0.4em] group"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Services
          </button>
          <div className="max-w-5xl">
            <div className="reveal-on-scroll active inline-flex items-center gap-4 mb-10">
               <div className="h-px w-12 bg-brand-primary"></div>
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary">{content.subtitle}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-brand-text tracking-tighter uppercase leading-[0.85] mb-12">
              {content.title.split(' & ').map((part, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br />}
                  {part}
                  {i === 0 && content.title.includes('&') && <span className="text-brand-primary"> & </span>}
                </React.Fragment>
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-brand-muted max-w-3xl font-medium leading-relaxed mb-16 border-l-2 border-brand-primary pl-10">
              {content.summary}
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <button 
                onClick={() => onPageChange('contact')}
                className="px-12 py-6 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[11px] uppercase tracking-[0.4em] transition-all shadow-2xl shadow-brand-primary/20 transform hover:-translate-y-1"
              >
                Start Technical Dialogue
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32">
            <div className="lg:col-span-4 space-y-12">
               <div className="p-8 bg-slate-50 text-brand-primary rounded-3xl inline-block">
                 {React.cloneElement(content.icon as React.ReactElement<{size?: number, strokeWidth?: number}>, { size: 48, strokeWidth: 1.25 })}
               </div>
               <h2 className="text-4xl md:text-5xl font-black text-brand-text tracking-tighter uppercase leading-none italic">
                 Core <br /> Engineering <br /> Focus.
               </h2>
               <p className="text-lg text-brand-muted font-medium leading-relaxed">
                 Every engagement starts with a deep understanding of your business logic and operational goals, ensuring we deliver value beyond code.
               </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {content.capabilities.map((cap, i) => (
                  <div key={i} className="p-10 border border-slate-100 rounded-[2.5rem] bg-slate-50 group hover:border-brand-primary transition-all duration-500">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-primary font-black text-xs group-hover:bg-brand-primary group-hover:text-white transition-all">
                        0{i+1}
                      </div>
                      <div className="h-px flex-1 bg-slate-200 group-hover:bg-brand-primary/20 transition-all"></div>
                    </div>
                    <h3 className="text-xl font-black text-brand-text uppercase tracking-tight leading-tight group-hover:text-brand-primary transition-colors">{cap}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-40 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-32 space-y-6">
            <h2 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.6em]">Methodology</h2>
            <h3 className="text-4xl md:text-6xl font-black text-brand-text tracking-tighter uppercase italic leading-none">Structured Delivery Flow.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-[3rem] overflow-hidden shadow-2xl">
            {content.process.map((step, i) => (
              <div key={i} className="bg-white p-16 space-y-10 group hover:bg-brand-text transition-all duration-700">
                <div className="text-[12rem] font-black text-slate-50 absolute -top-10 -right-10 group-hover:text-white/5 transition-colors select-none">
                  {i + 1}
                </div>
                <div className="relative z-10 space-y-8">
                  <div className="h-2 w-20 bg-brand-primary rounded-full group-hover:w-full transition-all duration-700"></div>
                  <h4 className="text-2xl font-black text-brand-text group-hover:text-white uppercase tracking-tighter leading-none transition-colors">{step.step}</h4>
                  <p className="text-lg text-brand-muted group-hover:text-slate-400 font-medium leading-relaxed transition-colors">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yield Impact Section */}
      <section className="py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
             <div className="lg:col-span-5 space-y-12">
               <h2 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.6em]">Measurable Yield</h2>
               <h3 className="text-4xl md:text-7xl font-black text-brand-text tracking-tighter uppercase leading-[0.9] italic">Impact on the Digital Core.</h3>
               <p className="text-xl text-brand-muted font-medium leading-relaxed">
                 We don't just deliver technical services; we deliver operational results that can be measured, audited, and scaled.
               </p>
               <div className="pt-8 grid grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <div className="text-4xl font-black text-brand-primary tracking-tighter">99.9%</div>
                    <div className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">Target Continuity</div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-4xl font-black text-brand-secondary tracking-tighter">24/7</div>
                    <div className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">Operational Support</div>
                  </div>
               </div>
             </div>
             <div className="lg:col-span-7">
                <div className="bg-brand-text rounded-[5rem] p-24 text-white relative overflow-hidden group">
                  <div className="absolute inset-0 blueprint-grid opacity-10"></div>
                  <div className="relative z-10 space-y-12">
                    <ShieldCheck size={48} className="text-brand-primary" />
                    <h4 className="text-3xl font-black uppercase italic tracking-tighter leading-tight">Security-First <br /> Engineering.</h4>
                    <p className="text-lg text-slate-400 font-medium leading-relaxed">
                      Every service we provide is audited against the CyberSys CS5 standard for resilience and data sovereignty. We build security into the foundation, not as an afterthought.
                    </p>
                    <div className="pt-6">
                       <button className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary border-b border-brand-primary pb-2 hover:text-white hover:border-white transition-all">Explore our compliance standard</button>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="max-w-6xl mx-auto bg-brand-text rounded-[6rem] p-24 md:p-40 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 blueprint-grid opacity-10"></div>
            <div className="relative z-10 space-y-16">
              <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-12">
                Elevate Your <br /> <span className="text-brand-primary italic">Engineering.</span>
              </h2>
              <p className="text-2xl text-slate-400 max-w-4xl mx-auto font-medium leading-relaxed border-t border-white/10 pt-16">
                Consult with our lead architects to discuss how our {content.title} expertise can modernize your operations.
              </p>
              <div className="pt-10">
                <button 
                  onClick={() => onPageChange('contact')}
                  className="px-16 py-8 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[14px] uppercase tracking-[0.5em] transition-all shadow-2xl shadow-brand-primary/20 transform hover:-translate-y-2"
                >
                  Start Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Services: React.FC<{ onPageChange: (p: Page) => void; serviceType?: string }> = ({ onPageChange, serviceType }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [serviceType]);

  if (!serviceType) {
    return <ServicesOverview onPageChange={onPageChange} />;
  }

  const content = SERVICES_CONTENT[serviceType];
  if (!content) {
    return <ServicesOverview onPageChange={onPageChange} />;
  }

  return <ServiceDetail content={content} onPageChange={onPageChange} />;
};

export default Services;
