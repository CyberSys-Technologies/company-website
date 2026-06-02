
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
  Shield,
  Cloud,
  RefreshCw
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
  cloud: {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    subtitle: 'Resilient Hybrid Platforms',
    path: 'services-cloud',
    summary: 'We architect, deploy, and manage secure, high-performance hybrid and private cloud environments designed to support mission-critical workloads and scale with absolute operational continuity.',
    icon: <Cloud />,
    capabilities: [
      'Hybrid & Private Cloud Architecture',
      'Infrastructure Modernization',
      'Safe Workload Migration',
      'Resilience & High Availability',
      'Capacity Planning & FinOps'
    ],
    process: [
      { step: 'Infra Audit', desc: 'Evaluating existing systems, dependency maps, and capacity needs.' },
      { step: 'Architecture', desc: 'Designing secure, high-performance hybrid cloud environments.' },
      { step: 'Migration', desc: 'Executing zero-downtime workload transitions under world-class QA.' }
    ]
  },
  multicloud: {
    id: 'multicloud',
    title: 'Multicloud Mastery',
    subtitle: 'Unified Platform Orchestration',
    path: 'services-multicloud',
    summary: 'Unified orchestration of cloud services across the four hyperscalers (Microsoft Azure, Oracle Cloud, Amazon Web Services, and Google Cloud) to eliminate vendor lock-in, optimize infrastructure spend, and enforce compliance policies.',
    icon: <Layers />,
    capabilities: [
      'Multicloud Strategy & Design',
      'Unified Platform Orchestration',
      'Cross-Cloud Secure Connectivity',
      'Cost Optimization & FinOps',
      'Compliance-Aware Guardrails'
    ],
    process: [
      { step: 'Cloud Maturity', desc: 'Assessing workload requirements and platform compatibility.' },
      { step: 'Orchestration', desc: 'Designing unified management, visibility, and control layers.' },
      { step: 'Governance', desc: 'Enforcing consistent security and compliance guardrails.' }
    ]
  },
  managed: {
    id: 'managed',
    title: 'Managed Services',
    subtitle: '24/7 Operational Continuity',
    path: 'services-managed',
    summary: 'Ensuring continuous performance, availability, and enterprise-grade threat protection through proactive 24/7 operations, SLA guarantees, and regular audits.',
    icon: <RefreshCw />,
    capabilities: [
      '24/7 Operational Monitoring',
      'Proactive Patching & Upgrades',
      'Managed Security Operations',
      'SLA-Backed Support Plans',
      'Continuous Audits & Compliance'
    ],
    process: [
      { step: 'SLA Definition', desc: 'Establishing performance thresholds and response protocols.' },
      { step: 'Monitoring Setup', desc: 'Deploying deep observability systems and automated alerts.' },
      { step: 'Operations', desc: 'Providing continuous proactive management, scaling, and support.' }
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
      <section className="bg-slate-50 border-b border-slate-200 py-24 md:py-36 blueprint-grid relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-fine opacity-40 pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="reveal-on-scroll active inline-flex items-center gap-4 mb-4">
                 <div className="h-px w-12 bg-brand-primary"></div>
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary">Services Architecture</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-brand-text tracking-tighter uppercase leading-[0.85] mb-6">
                Engineering <br /> The Enterprise <br /> 
                <span className="text-brand-primary">Technical Layer.</span>
              </h1>
              <p className="text-xl text-brand-muted max-w-2xl font-medium leading-relaxed border-l-2 border-brand-primary pl-8 py-1">
                CyberSys delivers outcome-driven technical services designed to modernize core operations, secure data flows, and build resilient software infrastructure for global organizations.
              </p>
            </div>
            <div className="lg:col-span-5 reveal-on-scroll active relative">
              <div className="absolute -inset-4 blueprint-grid opacity-30 pointer-events-none rounded-[2.5rem]"></div>
              <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 p-2 bg-white/50 backdrop-blur-md shadow-2xl shadow-slate-200/30 group">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=70" 
                  alt="Services Architecture" 
                  className="w-full h-[250px] sm:h-[320px] object-cover rounded-[1.5rem] grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none rounded-[1.5rem]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
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

      {/* Strategic Value Section (HIDDEN) */}
      {/*
      <section className="py-40 bg-brand-text text-white relative overflow-hidden">
        ... content hidden for simplicity ...
      </section>
      */}

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="max-w-6xl mx-auto bg-slate-50 border border-slate-200 rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden shadow-sm">
            <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>
            <div className="relative z-10 space-y-12">
              <h2 className="text-4xl md:text-6xl font-black text-brand-text tracking-tighter uppercase leading-[0.85]">
                Modernize Your <br /> <span className="text-brand-primary italic">Operational Core.</span>
              </h2>
              <p className="text-xl text-brand-muted max-w-3xl mx-auto font-medium leading-relaxed">
                Connect with our solution architects to discuss how our specialized technical services can accelerate your digital objectives.
              </p>
              <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => onPageChange('contact')}
                  className="px-10 py-5 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[12px] uppercase tracking-[0.4em] transition-all shadow-xl shadow-brand-primary/20 transform hover:-translate-y-1"
                >
                  Request Consultation
                </button>
                <button 
                  onClick={() => onPageChange('home')}
                  className="px-10 py-5 bg-white text-brand-text border border-slate-200 rounded font-black text-[12px] uppercase tracking-[0.4em] hover:bg-slate-100 transition-all"
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
      <section className="bg-slate-50 border-b border-slate-200 py-24 md:py-36 blueprint-grid relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-fine opacity-40 pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <button 
            onClick={() => onPageChange('services')}
            className="flex items-center gap-3 text-brand-primary hover:text-brand-text transition-all mb-12 text-[10px] font-black uppercase tracking-[0.4em] group"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Services
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="reveal-on-scroll active inline-flex items-center gap-4 mb-4">
                 <div className="h-px w-12 bg-brand-primary"></div>
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary">{content.subtitle}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-brand-text tracking-tighter uppercase leading-[0.85] mb-6">
                {content.title.split(' & ').map((part, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <br />}
                    {part}
                    {i === 0 && content.title.includes('&') && <span className="text-brand-primary"> & </span>}
                  </React.Fragment>
                ))}
              </h1>
              <p className="text-xl text-brand-muted max-w-2xl font-medium leading-relaxed mb-8 border-l-2 border-brand-primary pl-8 py-1">
                {content.summary}
              </p>
              <div className="flex flex-wrap gap-6 pt-2">
                <button 
                  onClick={() => onPageChange('contact')}
                  className="px-10 py-5 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[11px] uppercase tracking-[0.4em] transition-all shadow-xl shadow-brand-primary/20 transform hover:-translate-y-1"
                >
                  Start Technical Dialogue
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 reveal-on-scroll active relative">
              <div className="absolute -inset-4 blueprint-grid opacity-30 pointer-events-none rounded-[2.5rem]"></div>
              <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 p-2 bg-white/50 backdrop-blur-md shadow-2xl shadow-slate-200/30 group">
                <img 
                  src={
                    content.id === 'cloud' 
                      ? 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=70'
                      : content.id === 'multicloud'
                      ? 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=600&q=70'
                      : content.id === 'managed'
                      ? 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=70'
                      : 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=70'
                  } 
                  alt={content.title}
                  className="w-full h-[250px] sm:h-[320px] object-cover rounded-[1.5rem] grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none rounded-[1.5rem]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4 space-y-10">
               <div className="p-6 bg-slate-50 text-brand-primary rounded-[1.5rem] inline-block">
                 {React.cloneElement(content.icon as React.ReactElement<{size?: number, strokeWidth?: number}>, { size: 36, strokeWidth: 1.25 })}
               </div>
               <h2 className="text-3xl md:text-4xl font-black text-brand-text tracking-tighter uppercase leading-none italic">
                 Core <br /> Engineering <br /> Focus.
               </h2>
               <p className="text-base text-brand-muted font-medium leading-relaxed">
                 Every engagement starts with a deep understanding of your business logic and operational goals, ensuring we deliver value beyond code.
               </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {content.capabilities.map((cap, i) => (
                  <div key={i} className="p-8 border border-slate-100 rounded-[1.5rem] bg-slate-50 group hover:border-brand-primary transition-all duration-500 hover:-translate-y-1">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-primary font-black text-xs group-hover:bg-brand-primary group-hover:text-white transition-all">
                        0{i+1}
                      </div>
                      <div className="h-px flex-1 bg-slate-200 group-hover:bg-brand-primary/20 transition-all"></div>
                    </div>
                    <h3 className="text-lg font-black text-brand-text uppercase tracking-tight leading-tight group-hover:text-brand-primary transition-colors">{cap}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.6em]">Methodology</h2>
            <h3 className="text-4xl md:text-5xl font-black text-brand-text tracking-tighter uppercase italic leading-none">Structured Delivery Flow.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm">
            {content.process.map((step, i) => (
              <div key={i} className="bg-white p-12 space-y-8 group hover:bg-brand-text transition-all duration-700 relative overflow-hidden">
                <div className="text-[10rem] font-black text-slate-50 absolute -top-10 -right-10 group-hover:text-white/5 transition-colors select-none">
                  {i + 1}
                </div>
                <div className="relative z-10 space-y-6">
                  <div className="h-2 w-16 bg-brand-primary rounded-full group-hover:w-full transition-all duration-700"></div>
                  <h4 className="text-xl font-black text-brand-text group-hover:text-white uppercase tracking-tighter leading-none transition-colors">{step.step}</h4>
                  <p className="text-base text-brand-muted group-hover:text-slate-400 font-medium leading-relaxed transition-colors">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yield Impact Section (HIDDEN) */}
      {/*
      <section className="py-40 bg-white">
        ... content hidden for simplicity ...
      </section>
      */}

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="max-w-6xl mx-auto bg-brand-text rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 blueprint-grid opacity-10"></div>
            <div className="relative z-10 space-y-12">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-8">
                Elevate Your <br /> <span className="text-brand-primary italic">Engineering.</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-4xl mx-auto font-medium leading-relaxed border-t border-white/10 pt-12">
                Consult with our lead architects to discuss how our {content.title} expertise can modernize your operations.
              </p>
              <div className="pt-8">
                <button 
                  onClick={() => onPageChange('contact')}
                  className="px-12 py-6 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[12px] uppercase tracking-[0.4em] transition-all shadow-xl shadow-brand-primary/20 transform hover:-translate-y-1"
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
