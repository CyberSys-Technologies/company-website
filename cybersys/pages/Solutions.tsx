import React from 'react';
import { 
  Shield, 
  Cloud, 
  ArrowRight, 
  Database, 
  Layers, 
  TrendingUp, 
  Lock,
  ChevronLeft,
  Activity,
  Zap,
  BrainCircuit,
  Settings,
  ShieldCheck,
  CheckCircle2,
  RefreshCw,
  Search,
  Users,
  Compass,
  Crosshair,
  Server,
  AlertCircle,
  Fingerprint,
  Eye,
  FileSearch,
  GanttChart,
  Landmark,
  Cpu,
  Network
} from 'lucide-react';
import { Page } from '../types';
import { CS5_FRAMEWORK } from '../constants';

interface SolutionsProps {
  onPageChange: (p: Page) => void;
  detailView?: string;
}

const SOLUTION_CATEGORIES = [
  {
    title: 'Cloud & Infrastructure',
    icon: <Cloud />,
    path: 'solutions-cloud' as Page,
    summary: 'Architect, modernize, and manage resilient cloud and hybrid infrastructure that delivers high availability, performance, and scalability.',
    capabilities: ['Cloud architecture & design', 'Hybrid cloud & on-prem integration', 'Infrastructure modernization', 'Cloud migration & optimization'],
    cta: 'Explore Cloud & Infrastructure'
  },
  {
    title: 'Cybersecurity',
    icon: <Shield />,
    path: 'solutions-cybersecurity' as Page,
    summary: 'Protect systems, data, and identities with enterprise-grade security architectures designed for evolving threats and regulatory environments.',
    capabilities: ['Security architecture & Zero Trust', 'Threat detection & response', 'Identity & access management (IAM)', 'Risk, compliance & governance', 'Security operations & monitoring'],
    cta: 'Explore Cybersecurity'
  },
  {
    title: 'Multicloud Management',
    icon: <Layers />,
    path: 'multicloud' as Page,
    summary: 'Design and manage workloads across multiple cloud platforms with unified governance, visibility, and cost control.',
    capabilities: ['Multicloud strategy & architecture', 'Unified monitoring & management', 'Vendor lock-in avoidance', 'Cost optimization & FinOps', 'Secure connectivity across clouds'],
    cta: 'Explore Multicloud Management'
  },
  {
    title: 'Data, AI & Analytics',
    icon: <BrainCircuit />,
    path: 'solutions-data' as Page,
    summary: 'Enable intelligent decision-making with secure data platforms, analytics, and AI-ready infrastructure.',
    capabilities: ['Data platforms & engineering', 'Business intelligence & analytics', 'AI & machine learning enablement', 'Data governance & security'],
    cta: 'Explore Data & AI Solutions'
  },
  {
    title: 'Digital Transformation & Applications',
    icon: <Settings />,
    path: 'solutions-digital' as Page,
    summary: 'Modernize and integrate enterprise applications to help improve agility, efficiency, and system interoperability.',
    capabilities: ['Enterprise application development', 'Application modernization', 'Cloud-native & API-driven systems', 'Systems integration'],
    cta: 'Explore Digital Transformation'
  },
  {
    title: 'Managed Services & Support',
    icon: <RefreshCw />,
    path: 'solutions-managed' as Page,
    summary: 'Ensure continuous performance, security, and availability with 24/7 managed services and operational support.',
    capabilities: ['Managed cloud services', 'Managed security services', '24/7 monitoring & operations', 'Service level agreements (SLA)'],
    cta: 'Explore Managed Services'
  }
];

const CloudInfrastructureDetail: React.FC<{ onPageChange: (p: Page) => void }> = ({ onPageChange }) => {
  return (
    <div className="animate-in fade-in duration-1000 bg-white">
      {/* 1. PAGE HERO */}
      <section className="bg-slate-50 border-b border-slate-200 py-32 md:py-60 blueprint-grid relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-fine opacity-40 pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <button 
            onClick={() => onPageChange('solutions')}
            className="flex items-center gap-3 text-brand-primary hover:text-brand-text transition-all mb-16 text-[12px] font-black uppercase tracking-[0.4em] group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Catalog
          </button>
          <div className="max-w-5xl">
            <div className="reveal-on-scroll active inline-flex items-center gap-4 mb-10">
               <div className="h-px w-12 bg-brand-primary"></div>
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary">Cloud Infrastructure Group</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-brand-text tracking-tighter uppercase leading-[0.85] mb-12">
              Cloud & Infrastructure <br /> Solutions Built <br /> 
              <span className="text-brand-primary">for Resilience and Scale.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-muted max-w-3xl font-medium leading-relaxed mb-16 border-l-2 border-brand-primary pl-12 py-2">
              CyberSys Technologies designs, deploys, and manages secure, high-performance cloud and hybrid infrastructure that enables enterprises and governments to operate with confidence and efficiency.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <button 
                onClick={() => onPageChange('contact')}
                className="px-14 py-7 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[12px] uppercase tracking-[0.4em] transition-all shadow-2xl shadow-brand-primary/20 transform hover:-translate-y-1"
              >
                Talk to a Solutions Architect
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOLUTION OVERVIEW */}
      <section className="py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em] mb-10">01 / Overview</h2>
              <h3 className="text-4xl md:text-5xl font-black text-brand-text tracking-tighter uppercase leading-[1] italic">
                The Foundation of <br /> Operational Excellence.
              </h3>
            </div>
            <div className="lg:col-span-8 space-y-12">
              <p className="text-2xl text-brand-muted font-medium leading-relaxed">
                Modern organizations require infrastructure that is not only powerful but secure, resilient, and scalable. CyberSys Cloud & Infrastructure solutions provide enterprise-grade platforms across cloud, hybrid, and on-premise environments.
              </p>
              <p className="text-xl text-brand-muted leading-relaxed font-medium">
                Our approach integrates modern cloud architecture, intelligent automation, and multicloud management, enabling organizations to optimize performance, reduce operational complexity, and scale without compromising security or reliability.
              </p>
              <div className="bg-slate-50 p-10 rounded-[2.5rem] border-l-8 border-brand-primary">
                <p className="text-xl font-bold text-brand-text leading-relaxed">
                  CyberSys solutions are designed to support mission-critical workloads with high availability, compliance, and operational continuity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE CHALLENGE */}
      <section className="py-40 bg-slate-50 border-y border-slate-200 relative">
        <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
             <div className="lg:col-span-5 space-y-10">
                <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">02 / The Challenge</h2>
                <h3 className="text-4xl md:text-6xl font-black text-brand-text tracking-tighter uppercase leading-none italic">Navigating <br /> System Complexity.</h3>
                <p className="text-xl text-brand-muted font-medium leading-relaxed">Enterprises and government organizations face increasing pressure to modernize infrastructure while maintaining security, uptime, and regulatory compliance.</p>
             </div>
             <div className="lg:col-span-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: 'Legacy Maintenance', desc: 'Legacy systems that are costly to maintain and difficult to integrate.' },
                    { title: 'Operational Friction', desc: 'Rising operational complexity with hybrid and multicloud environments.' },
                    { title: 'Availability Risk', desc: 'Risk of downtime affecting critical business operations.' },
                    { title: 'Cost Inefficiency', desc: 'Difficulty managing cost and optimizing resources.' },
                    { title: 'Regulatory Barriers', desc: 'Regulatory compliance and data residency requirements.' }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-10 rounded-3xl border border-slate-200 flex items-start gap-6 group hover:border-brand-primary transition-colors shadow-sm">
                      <div className="flex-shrink-0 text-brand-primary group-hover:scale-110 transition-transform"><AlertCircle size={28} /></div>
                      <div>
                        <h4 className="text-lg font-black text-brand-text uppercase tracking-tight mb-3 leading-none">{item.title}</h4>
                        <p className="text-sm text-brand-muted font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 p-10 bg-brand-text text-white rounded-[2.5rem] relative overflow-hidden group">
                  <div className="absolute inset-0 blueprint-grid opacity-10"></div>
                  <p className="text-lg font-medium leading-relaxed relative z-10 italic">
                    "Without a structured, resilient approach, infrastructure modernization projects risk inefficiency, security gaps, and operational disruption."
                  </p>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 4. THE CYBERSYS APPROACH */}
      <section className="py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="max-w-4xl space-y-12 mb-24">
            <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">03 / The CyberSys Approach</h2>
            <h3 className="text-4xl md:text-7xl font-black text-brand-text tracking-tighter uppercase leading-none">Structured <br /> Engineering.</h3>
            <p className="text-2xl text-brand-muted font-medium leading-relaxed">CyberSys applies a structured, security-first approach to cloud and infrastructure design that balances flexibility, performance, and compliance.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: <GanttChart />, text: 'Enterprise-grade architecture aligned with business goals' },
              { icon: <Settings />, text: 'Cloud-first, hybrid, or on-prem solutions tailored to operational realities' },
              { icon: <ShieldCheck />, text: 'Integrated security and compliance-by-design' },
              { icon: <Cpu />, text: 'Automation and monitoring for efficiency and reliability' },
              { icon: <RefreshCw />, text: 'Continuous optimization and lifecycle management' }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-slate-50 rounded-3xl space-y-10 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-700 h-full">
                <div className="text-brand-primary transform group-hover:scale-110 transition-transform">{React.cloneElement(item.icon as React.ReactElement<{size?: number, strokeWidth?: number}>, { size: 36, strokeWidth: 1.5 })}</div>
                <p className="text-sm font-black text-brand-text uppercase tracking-tight leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 py-16 border-t border-slate-100 text-center">
            <p className="text-3xl font-black text-brand-text uppercase tracking-tighter italic">
              "Our approach ensures that infrastructure is <span className="text-brand-primary underline decoration-2 underline-offset-8">resilient, scalable, and capable</span> of supporting both current and future needs."
            </p>
          </div>
        </div>
      </section>

      {/* 5. KEY CAPABILITIES */}
      <section className="py-40 bg-slate-50 border-y border-slate-200 relative">
        <div className="absolute inset-0 blueprint-grid-fine opacity-[0.2] pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
            <div className="space-y-4">
              <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">04 / Key Capabilities</h2>
              <h3 className="text-4xl md:text-6xl font-black text-brand-text tracking-tighter uppercase leading-none italic">Resilient Digital <br /> Foundations.</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: <Cloud />, title: 'Cloud Architecture & Design', desc: 'Planning and implementing cloud environments optimized for performance, resilience, and cost-efficiency.' },
              { icon: <Layers />, title: 'Hybrid Cloud & On-Premise Integration', desc: 'Seamlessly connect existing systems with cloud services for flexible, scalable operations.' },
              { icon: <Cpu />, title: 'Infrastructure Modernization', desc: 'Upgrade legacy systems to modern, secure, and efficient infrastructure platforms.' },
              { icon: <Database />, title: 'Cloud Migration & Optimization', desc: 'Migrate workloads safely and optimize for cost, security, and performance.' },
              { icon: <Activity />, title: 'Automation & Monitoring', desc: 'Implement intelligent automation and centralized monitoring to ensure uptime and operational efficiency.' }
            ].map((cap, i) => (
              <div key={i} className="bg-white p-14 rounded-[3rem] border border-slate-200 flex flex-col h-full group hover:border-brand-primary transition-all duration-700 shadow-sm">
                <div className="p-6 bg-slate-50 text-brand-primary rounded-2xl inline-block w-fit mb-12 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:-rotate-6">
                  {React.cloneElement(cap.icon as React.ReactElement<{size?: number, strokeWidth?: number}>, { size: 36, strokeWidth: 1.25 })}
                </div>
                <h4 className="text-2xl font-black text-brand-text uppercase tracking-tight mb-6 group-hover:text-brand-primary transition-colors">{cap.title}</h4>
                <p className="text-lg text-brand-muted font-medium leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECURITY & COMPLIANCE BY DESIGN */}
      <section className="py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
            <div className="lg:col-span-5 space-y-12">
              <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">05 / Coverage Areas</h2>
              <h3 className="text-4xl md:text-7xl font-black text-brand-text tracking-tighter uppercase leading-[0.95]">Security & <br /> Compliance <br /> by Design.</h3>
              <p className="text-xl text-brand-muted font-medium leading-relaxed">
                CyberSys integrates security and compliance at every layer of infrastructure to meet regulatory and operational requirements without compromising performance.
              </p>
            </div>
            <div className="lg:col-span-7">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { label: 'Infrastructure', title: 'Network security and segmentation' },
                    { label: 'Data', title: 'Data protection and encryption' },
                    { label: 'Observability', title: 'Continuous monitoring and auditing' },
                    { label: 'Standards', title: 'Compliance with local and international standards' },
                    { label: 'Continuity', title: 'Disaster recovery and business continuity planning' }
                  ].map((item, i) => (
                    <div key={i} className="p-10 border border-slate-100 rounded-[2.5rem] bg-slate-50 group hover:border-brand-primary transition-all">
                       <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary mb-4 opacity-50">{item.label}</div>
                       <div className="text-lg font-black text-brand-text uppercase tracking-tight leading-tight">{item.title}</div>
                    </div>
                  ))}
               </div>
               <p className="mt-12 text-lg text-brand-muted font-medium italic border-t border-slate-100 pt-10">
                 "This ensures systems are secure, resilient, and aligned with both industry best practices and regulatory requirements."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BUSINESS IMPACT */}
      <section className="py-40 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-10"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="mb-24 space-y-6">
            <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.8em]">06 / Business Impact</h2>
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none">Measurable Yield.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: <Zap />, title: 'Operational Resilience', desc: 'High availability and disaster recovery capabilities reduce the risk of downtime and operational disruption.' },
              { icon: <TrendingUp />, title: 'Cost Optimization', desc: 'Efficient infrastructure management lowers operational costs and maximizes ROI.' },
              { icon: <Settings />, title: 'Scalable Growth', desc: 'Systems are designed to scale seamlessly as organizational demands increase.' },
              { icon: <ShieldCheck />, title: 'Security & Compliance', desc: 'Embedded security and compliance frameworks reduce risk and ensure regulatory alignment.' }
            ].map((outcome, i) => (
              <div key={i} className="p-12 border border-white/10 rounded-[3rem] space-y-12 hover:bg-brand-primary transition-all duration-1000 group hover:-translate-y-4">
                <div className="text-brand-primary group-hover:text-white transition-colors">
                  {React.cloneElement(outcome.icon as React.ReactElement<{size?: number, strokeWidth?: number}>, { size: 52, strokeWidth: 1 })}
                </div>
                <div className="space-y-6">
                  <h4 className="text-2xl font-black uppercase tracking-tight leading-none italic">{outcome.title}</h4>
                  <p className="text-lg text-slate-400 group-hover:text-white/80 font-medium leading-relaxed transition-colors">{outcome.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CS5 ALIGNMENT */}
      <section className="py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
            <div className="lg:col-span-6 space-y-12">
              <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">07 / Execution Standard</h2>
              <h3 className="text-4xl md:text-6xl font-black text-brand-text tracking-tighter uppercase leading-[0.95]">Delivered at <br /> World-Class <br /> Standards.</h3>
              <p className="text-2xl text-brand-muted font-medium leading-relaxed">
                All Cloud & Infrastructure solutions are delivered using CyberSys’s CS5 framework, ensuring resilience, integration, scalability, and measurable business value.
              </p>
            </div>
            <div className="lg:col-span-6">
               <div className="bg-brand-primary p-24 rounded-[5rem] text-white flex flex-col items-center justify-center text-center space-y-12 shadow-[0_80px_120px_-30px_rgba(32,130,166,0.3)] relative overflow-hidden group">
                  <div className="absolute inset-0 blueprint-grid opacity-20 group-hover:scale-125 transition-transform duration-[20s] ease-linear"></div>
                  <div className="text-[12px] font-black uppercase tracking-[1em] opacity-40 relative z-10">CS5 Reference</div>
                  <div className="text-4xl md:text-[5rem] font-black tracking-tighter uppercase italic leading-[0.9] relative z-10 drop-shadow-2xl">
                    Cyber <br /> Synergy <br /> Security <br /> Systems <br /> Scalability <br /> Solutions
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. RELATED SOLUTIONS */}
      <section className="py-40 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <h3 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em] mb-20 text-center">Related Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             {[
               { title: 'Cybersecurity', path: 'solutions-cybersecurity' },
               { title: 'Multicloud Management', path: 'multicloud' },
               { title: 'Managed Services & Support', path: 'solutions-managed' }
             ].map((rel, i) => (
               <button 
                 key={i} 
                 onClick={() => onPageChange(rel.path as Page)}
                 className="p-12 bg-white border border-slate-200 rounded-[3rem] text-center hover:border-brand-primary hover:shadow-xl transition-all duration-700 group"
               >
                 <div className="text-xl font-black text-brand-text uppercase tracking-tight group-hover:text-brand-primary transition-colors mb-6">{rel.title}</div>
                 <ArrowRight className="mx-auto text-brand-primary group-hover:translate-x-4 transition-transform" />
               </button>
             ))}
          </div>
        </div>
      </section>

      {/* 10. PRIMARY CALL TO ACTION */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="max-w-6xl mx-auto bg-brand-text rounded-[6rem] p-24 md:p-40 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 blueprint-grid opacity-10"></div>
            <div className="relative z-10 space-y-16">
              <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-12">
                Build Resilient <br /> Infra with <br /> <span className="text-brand-primary italic">Confidence.</span>
              </h2>
              <p className="text-2xl text-slate-400 max-w-4xl mx-auto font-medium leading-relaxed border-t border-white/10 pt-16">
                Engage CyberSys to design, deploy, and manage cloud and hybrid infrastructure that supports operational continuity, security, and scalable growth.
              </p>
              <div className="pt-10">
                <button 
                  onClick={() => onPageChange('contact')}
                  className="px-20 py-8 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[14px] uppercase tracking-[0.5em] transition-all shadow-2xl shadow-brand-primary/20 transform hover:-translate-y-2"
                >
                  Request a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const CybersecurityDetail: React.FC<{ onPageChange: (p: Page) => void }> = ({ onPageChange }) => {
  return (
    <div className="animate-in fade-in duration-1000 bg-white">
      {/* 1. PAGE HERO */}
      <section className="bg-slate-50 border-b border-slate-200 py-32 md:py-60 blueprint-grid relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-fine opacity-40 pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <button 
            onClick={() => onPageChange('solutions')}
            className="flex items-center gap-3 text-brand-primary hover:text-brand-text transition-all mb-16 text-[12px] font-black uppercase tracking-[0.4em] group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Catalog
          </button>
          <div className="max-w-5xl">
            <div className="reveal-on-scroll active inline-flex items-center gap-4 mb-10">
               <div className="h-px w-12 bg-brand-primary"></div>
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary">Security Architecture Group</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-brand-text tracking-tighter uppercase leading-[0.85] mb-12">
              Enterprise Cybersecurity Built <br /> 
              <span className="text-brand-primary">for Critical Systems.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-muted max-w-3xl font-medium leading-relaxed mb-16 border-l-2 border-brand-primary pl-12 py-2">
              CyberSys Technologies delivers security-by-design architectures that protect systems, data, and identities across cloud, multicloud, and on-premise environments — ensuring resilience, compliance, and operational continuity.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <button 
                onClick={() => onPageChange('contact')}
                className="px-14 py-7 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[12px] uppercase tracking-[0.4em] transition-all shadow-2xl shadow-brand-primary/20 transform hover:-translate-y-1"
              >
                Talk to a Solutions Architect
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOLUTION OVERVIEW */}
      <section className="py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em] mb-10">01 / Overview</h2>
              <h3 className="text-4xl md:text-5xl font-black text-brand-text tracking-tighter uppercase leading-[1] italic">
                Defending the <br /> Digital Core.
              </h3>
            </div>
            <div className="lg:col-span-8 space-y-12">
              <p className="text-2xl text-brand-muted font-medium leading-relaxed">
                Cyber threats are evolving in scale, sophistication, and impact. Organizations operating critical systems require cybersecurity solutions that go beyond perimeter defenses and reactive controls.
              </p>
              <p className="text-xl text-brand-muted leading-relaxed font-medium">
                CyberSys Cybersecurity solutions are designed to protect digital environments end-to-end — from infrastructure and applications to users and data. Our approach integrates security architecture, continuous monitoring, and governance to reduce risk while enabling secure digital growth.
              </p>
              <p className="text-xl text-brand-muted leading-relaxed font-medium">
                We design cybersecurity frameworks that align with regulatory requirements, operational realities, and global best practices — without compromising performance or scalability.
              </p>
              <div className="bg-slate-50 p-10 rounded-[2.5rem] border-l-8 border-brand-primary">
                <p className="text-xl font-bold text-brand-text leading-relaxed italic">
                  CyberSys applies a proactive, architecture-driven approach that embeds protection at every layer of the digital environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE CHALLENGE */}
      <section className="py-40 bg-slate-50 border-y border-slate-200 relative">
        <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
             <div className="lg:col-span-5 space-y-10">
                <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">02 / The Challenge</h2>
                <h3 className="text-4xl md:text-6xl font-black text-brand-text tracking-tighter uppercase leading-none italic">An Expanding <br /> Attack Surface.</h3>
                <p className="text-xl text-brand-muted font-medium leading-relaxed">Modern organizations face a rapidly expanding attack surface driven by cloud adoption, remote access, and system integration. At the same time, regulatory requirements continue to increase across industries.</p>
                <p className="text-lg text-brand-muted font-bold uppercase tracking-tight">Common challenges include:</p>
             </div>
             <div className="lg:col-span-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: 'Threat Proliferation', desc: 'Increasing cyber threats targeting critical systems and sensitive data.' },
                    { title: 'Fragmented Visibility', desc: 'Limited visibility across hybrid and multicloud environments.' },
                    { title: 'Compliance Pressure', desc: 'Compliance pressure from industry and government regulations.' },
                    { title: 'Identity Sprawl', desc: 'Identity sprawl and weak access controls.' },
                    { title: 'Delayed Response', desc: 'Difficulty responding to incidents in real time.' }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-10 rounded-3xl border border-slate-200 flex items-start gap-6 group hover:border-brand-primary transition-colors shadow-sm">
                      <div className="flex-shrink-0 text-brand-primary group-hover:scale-110 transition-transform"><AlertCircle size={28} /></div>
                      <div>
                        <h4 className="text-lg font-black text-brand-text uppercase tracking-tight mb-3 leading-none">{item.title}</h4>
                        <p className="text-sm text-brand-muted font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 p-10 bg-brand-text text-white rounded-[2.5rem] relative overflow-hidden group">
                  <div className="absolute inset-0 blueprint-grid opacity-10"></div>
                  <p className="text-lg font-medium leading-relaxed relative z-10 italic">
                    "Without a structured, security-first approach, these challenges expose organizations to operational disruption, financial loss, and reputational risk."
                  </p>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 4. THE CYBERSYS APPROACH */}
      <section className="py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="max-w-4xl space-y-12 mb-24">
            <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">03 / The CyberSys Approach</h2>
            <h3 className="text-4xl md:text-7xl font-black text-brand-text tracking-tighter uppercase leading-none italic">Architecture-Driven <br /> Protection.</h3>
            <p className="text-2xl text-brand-muted font-medium leading-relaxed">CyberSys applies a proactive, architecture-driven approach to cybersecurity that embeds protection at every layer of the digital environment.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: <Compass />, text: 'Security architectures aligned with business and risk objectives' },
              { icon: <ShieldCheck />, text: 'Zero Trust principles applied across users, systems, and data' },
              { icon: <Activity />, text: 'Continuous monitoring and threat detection' },
              { icon: <Landmark />, text: 'Compliance-aware design and governance' },
              { icon: <Layers />, text: 'Integration of security across cloud, multicloud, and on-premise systems' }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-slate-50 rounded-3xl space-y-10 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-700 h-full">
                <div className="text-brand-primary transform group-hover:scale-110 transition-transform">{React.cloneElement(item.icon as React.ReactElement<{size?: number, strokeWidth?: number}>, { size: 36, strokeWidth: 1.5 })}</div>
                <p className="text-sm font-black text-brand-text uppercase tracking-tight leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 py-16 border-t border-slate-100 text-center">
            <p className="text-3xl font-black text-brand-text uppercase tracking-tighter italic">
              "Security is not treated as an add-on — it is <span className="text-brand-primary underline decoration-2 underline-offset-8">designed into the system from day one.</span>"
            </p>
          </div>
        </div>
      </section>

      {/* 5. KEY CAPABILITIES */}
      <section className="py-40 bg-slate-50 border-y border-slate-200 relative">
        <div className="absolute inset-0 blueprint-grid-fine opacity-[0.2] pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
            <div className="space-y-4">
              <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">04 / Key Capabilities</h2>
              <h3 className="text-4xl md:text-6xl font-black text-brand-text tracking-tighter uppercase leading-none italic">Modular Protection <br /> Infrastructure.</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: <Lock />, title: 'Security Architecture & Zero Trust', desc: 'Design and implementation of layered security architectures that minimize trust assumptions and reduce attack surfaces.' },
              { icon: <Crosshair />, title: 'Threat Detection & Response', desc: 'Continuous monitoring, alerting, and response to identify and contain threats in real time.' },
              { icon: <Fingerprint />, title: 'Identity & Access Management (IAM)', desc: 'Secure user and system access through strong authentication, authorization, and identity governance.' },
              { icon: <ShieldCheck />, title: 'Risk, Compliance & Governance', desc: 'Alignment of security controls with regulatory frameworks and organizational risk policies.' },
              { icon: <Eye />, title: 'Security Operations & Monitoring', desc: 'Centralized visibility and operational oversight across all environments.' }
            ].map((cap, i) => (
              <div key={i} className="bg-white p-14 rounded-[3rem] border border-slate-200 flex flex-col h-full group hover:border-brand-primary transition-all duration-700 shadow-sm">
                <div className="p-6 bg-slate-50 text-brand-primary rounded-2xl inline-block w-fit mb-12 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:-rotate-6">
                  {React.cloneElement(cap.icon as React.ReactElement<{size?: number, strokeWidth?: number}>, { size: 36, strokeWidth: 1.25 })}
                </div>
                <h4 className="text-2xl font-black text-brand-text uppercase tracking-tight mb-6 group-hover:text-brand-primary transition-colors">{cap.title}</h4>
                <p className="text-lg text-brand-muted font-medium leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECURITY & COMPLIANCE BY DESIGN */}
      <section className="py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
            <div className="lg:col-span-5 space-y-12">
              <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">05 / Compliance Standard</h2>
              <h3 className="text-4xl md:text-7xl font-black text-brand-text tracking-tighter uppercase leading-[0.95]">Security & <br /> Compliance <br /> by Design.</h3>
              <p className="text-xl text-brand-muted font-medium leading-relaxed">
                CyberSys designs cybersecurity solutions that support regulatory compliance and audit readiness without introducing operational complexity.
              </p>
            </div>
            <div className="lg:col-span-7">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { label: 'Identity', title: 'Identity and access controls' },
                    { label: 'Protection', title: 'Data protection and encryption' },
                    { label: 'Transparency', title: 'Logging, monitoring, and audit trails' },
                    { label: 'Enforcement', title: 'Policy enforcement and governance' },
                    { label: 'Response', title: 'Incident response and reporting' }
                  ].map((item, i) => (
                    <div key={i} className="p-10 border border-slate-100 rounded-[2.5rem] bg-slate-50 group hover:border-brand-primary transition-all">
                       <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary mb-4 opacity-50">{item.label}</div>
                       <div className="text-lg font-black text-brand-text uppercase tracking-tight leading-tight">{item.title}</div>
                    </div>
                  ))}
               </div>
               <p className="mt-12 text-lg text-brand-muted font-medium italic border-t border-slate-100 pt-10">
                 "This ensures organizations can demonstrate compliance while maintaining strong security posture and system performance."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BUSINESS IMPACT */}
      <section className="py-40 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-10"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="mb-24 space-y-6">
            <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.8em]">06 / Business Impact</h2>
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none">Strategic Resilience.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: <Zap />, title: 'Operational Resilience', desc: 'Improved system availability and reduced risk of disruption from cyber incidents.' },
              { icon: <TrendingUp />, title: 'Risk Reduction', desc: 'Lower exposure to breaches, data loss, and regulatory penalties.' },
              { icon: <ShieldCheck />, title: 'Regulatory Confidence', desc: 'Security controls aligned with applicable compliance and governance requirements.' },
              { icon: <BrainCircuit />, title: 'Secure Growth', desc: 'Cybersecurity frameworks that support digital expansion without increasing risk.' }
            ].map((outcome, i) => (
              <div key={i} className="p-12 border border-white/10 rounded-[3rem] space-y-12 hover:bg-brand-primary transition-all duration-1000 group hover:-translate-y-4">
                <div className="text-brand-primary group-hover:text-white transition-colors">
                  {React.cloneElement(outcome.icon as React.ReactElement<{size?: number, strokeWidth?: number}>, { size: 52, strokeWidth: 1 })}
                </div>
                <div className="space-y-6">
                  <h4 className="text-2xl font-black uppercase tracking-tight leading-none italic">{outcome.title}</h4>
                  <p className="text-lg text-slate-400 group-hover:text-white/80 font-medium leading-relaxed transition-colors">{outcome.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CS5 ALIGNMENT */}
      <section className="py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
            <div className="lg:col-span-6 space-y-12">
              <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">07 / Execution Standard</h2>
              <h3 className="text-4xl md:text-6xl font-black text-brand-text tracking-tighter uppercase leading-[0.95]">Delivered at <br /> World-Class <br /> Standards.</h3>
              <p className="text-2xl text-brand-muted font-medium leading-relaxed">
                CyberSys Cybersecurity solutions are delivered using our CS5 framework — ensuring protection, integration, and scalability across the full technology lifecycle.
              </p>
            </div>
            <div className="lg:col-span-6">
               <div className="bg-brand-primary p-24 rounded-[5rem] text-white flex flex-col items-center justify-center text-center space-y-12 shadow-[0_80px_120px_-30px_rgba(32,130,166,0.3)] relative overflow-hidden group">
                  <div className="absolute inset-0 blueprint-grid opacity-20 group-hover:scale-125 transition-transform duration-[20s] ease-linear"></div>
                  <div className="text-[12px] font-black uppercase tracking-[1em] opacity-40 relative z-10">CS5 Reference</div>
                  <div className="text-4xl md:text-[5rem] font-black tracking-tighter uppercase italic leading-[0.9] relative z-10 drop-shadow-2xl">
                    Cyber <br /> Synergy <br /> Security <br /> Systems <br /> Scalability <br /> Solutions
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. RELATED SOLUTIONS */}
      <section className="py-40 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <h3 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em] mb-20 text-center">Related Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             {[
               { title: 'Cloud & Infrastructure', path: 'solutions-cloud' },
               { title: 'Multicloud Management', path: 'multicloud' },
               { title: 'Managed Services & Support', path: 'solutions-managed' }
             ].map((rel, i) => (
               <button 
                 key={i} 
                 onClick={() => onPageChange(rel.path as Page)}
                 className="p-12 bg-white border border-slate-200 rounded-[3rem] text-center hover:border-brand-primary hover:shadow-xl transition-all duration-700 group"
               >
                 <div className="text-xl font-black text-brand-text uppercase tracking-tight group-hover:text-brand-primary transition-colors mb-6">{rel.title}</div>
                 <ArrowRight className="mx-auto text-brand-primary group-hover:translate-x-4 transition-transform" />
               </button>
             ))}
          </div>
        </div>
      </section>

      {/* 10. PRIMARY CALL TO ACTION */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="max-w-6xl mx-auto bg-brand-text rounded-[6rem] p-24 md:p-40 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 blueprint-grid opacity-10"></div>
            <div className="relative z-10 space-y-16">
              <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-12">
                Secure Your <br /> Systems with <br /> <span className="text-brand-primary italic">Confidence.</span>
              </h2>
              <p className="text-2xl text-slate-400 max-w-4xl mx-auto font-medium leading-relaxed border-t border-white/10 pt-16">
                Engage CyberSys to design and manage cybersecurity solutions that protect critical systems, meet compliance requirements, and support long-term digital growth.
              </p>
              <div className="pt-10">
                <button 
                  onClick={() => onPageChange('contact')}
                  className="px-20 py-8 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[14px] uppercase tracking-[0.5em] transition-all shadow-2xl shadow-brand-primary/20 transform hover:-translate-y-2"
                >
                  Request a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const GenericSolutionDetail: React.FC<{ data: any, onPageChange: (p: Page) => void }> = ({ data, onPageChange }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-5 duration-1000">
      <section className="bg-slate-50 border-b border-slate-200 py-24 md:py-40 blueprint-grid relative">
        <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
          <button 
            onClick={() => onPageChange('solutions')}
            className="flex items-center gap-3 text-brand-primary hover:text-brand-text transition-all mb-12 text-[12px] font-black uppercase tracking-[0.4em] group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Catalog
          </button>
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-7xl font-black text-brand-text tracking-tighter uppercase leading-[0.9] mb-8">
              {data.title}
            </h1>
            <p className="text-xl text-brand-muted max-w-3xl font-medium leading-relaxed border-l-2 border-brand-primary pl-8 py-2">
              {data.summary}
            </p>
            <div className="pt-10">
              <button 
                onClick={() => onPageChange('contact')}
                className="px-10 py-5 bg-brand-primary text-white rounded font-black text-[12px] uppercase tracking-[0.4em] shadow-xl hover:bg-brand-accent transition-all transform hover:-translate-y-1"
              >
                Talk to a Solutions Architect
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
             <div className="lg:col-span-8 space-y-12">
                <h2 className="text-3xl font-black text-brand-text uppercase tracking-tight border-b border-slate-100 pb-6">Core Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.capabilities.map((cap: string, i: number) => (
                    <div key={i} className="p-8 bg-slate-50 rounded-[1.5rem] border border-slate-100 group hover:border-brand-primary hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                      <div className="mb-6 p-4 bg-white inline-block rounded-xl group-hover:bg-brand-primary/10 transition-colors shadow-sm">
                        <CheckCircle2 size={24} className="text-brand-primary" strokeWidth={2} />
                      </div>
                      <h3 className="text-lg font-black text-brand-text group-hover:text-brand-primary transition-colors uppercase tracking-tight leading-snug">{cap}</h3>
                    </div>
                  ))}
                </div>
             </div>
             <div className="lg:col-span-4">
                <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-200 space-y-8 h-fit sticky top-32">
                  <h3 className="text-2xl font-black text-brand-text uppercase tracking-tight">Technical Standards</h3>
                  <p className="text-base text-brand-muted leading-relaxed font-medium">
                    Our architectures comply with global standards (ISO/IEC 27001, SOC 2) and regional data directives.
                  </p>
                  <div className="grid grid-cols-1 gap-6 pt-6 border-t border-slate-200">
                    <div className="flex items-center gap-6 group">
                       <div className="p-4 bg-white border border-slate-200 text-brand-primary rounded-xl group-hover:bg-brand-primary group-hover:text-white transition-all">
                        <Shield size={24} strokeWidth={1.5} />
                       </div>
                       <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-text">Security-by-Design</div>
                    </div>
                    <div className="flex items-center gap-6 group">
                       <div className="p-4 bg-white border border-slate-200 text-brand-primary rounded-xl group-hover:bg-brand-primary group-hover:text-white transition-all">
                        <Zap size={24} strokeWidth={1.5} />
                       </div>
                       <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-text">Ultra Reliability</div>
                    </div>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

const Overview: React.FC<{ onPageChange: (p: Page) => void }> = ({ onPageChange }) => {
  return (
    <div className="animate-in fade-in duration-1000 bg-white">
      {/* 1. PAGE HERO */}
      <section className="bg-slate-50 border-b border-slate-200 py-24 md:py-40 blueprint-grid relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-fine opacity-40 pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="max-w-5xl">
            <div className="reveal-on-scroll active inline-flex items-center gap-4 mb-10">
               <div className="h-px w-12 bg-brand-primary"></div>
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary">Solutions Catalog</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-brand-text tracking-tighter uppercase leading-[0.85] mb-12">
              Enterprise <br /> Technology <br /> 
              <span className="text-brand-primary">Continuity.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-muted max-w-2xl font-medium leading-relaxed mb-16 border-l-2 border-brand-primary pl-10">
              CyberSys Technologies delivers integrated cloud, cybersecurity, multicloud, and digital infrastructure solutions designed to protect critical systems and enable global scale.
            </p>
            <div className="flex flex-wrap gap-6">
              <button 
                onClick={() => onPageChange('contact')}
                className="px-12 py-6 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[12px] uppercase tracking-[0.3em] transition-all shadow-2xl shadow-brand-primary/20 transform hover:-translate-y-1"
              >
                Talk to a Solutions Architect
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 h-px bg-slate-200 hidden lg:block"></div>
      </section>

      {/* 2. SOLUTIONS OVERVIEW INTRO */}
      <section className="py-24 bg-white border-b border-slate-50">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-black text-brand-text tracking-tighter uppercase leading-[1] italic">
                Supporting <br /> Mission-Critical <br /> Operations.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-12">
                <p className="text-2xl text-brand-muted font-medium leading-relaxed">
                  Today’s enterprises operate in complex, regulated, and highly connected environments. CyberSys designs and manages secure digital platforms that ensure operational resilience, data protection, and performance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                   <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
                      <div className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em]">Design Standard</div>
                      <p className="text-base text-brand-text font-bold">Security-by-design at the core of every deployment.</p>
                   </div>
                   <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
                      <div className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em]">Scale Standard</div>
                      <p className="text-base text-brand-text font-bold">Scalability as an inherent architectural feature.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION CATEGORIES (PRIMARY GRID) */}
      <section className="py-24 bg-slate-50 relative">
        <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOLUTION_CATEGORIES.map((sol, i) => (
              <div 
                key={i} 
                className="bg-white p-10 md:p-14 border border-slate-100 rounded-[2.5rem] group hover:border-brand-primary transition-all duration-700 flex flex-col h-full relative overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-primary/5 active:scale-[0.99]"
              >
                {/* Architectural Numbering */}
                <div className="absolute top-10 right-10 text-[10px] font-black text-slate-200 group-hover:text-brand-primary/20 transition-colors tracking-[0.5em] uppercase">
                  S-{String(i + 1).padStart(2, '0')}
                </div>
                
                {/* Fine Grid Hover Overlay */}
                <div className="absolute inset-0 blueprint-grid-fine opacity-0 group-hover:opacity-[0.1] pointer-events-none transition-opacity duration-1000"></div>

                <div className="mb-12 relative">
                  <div className="text-brand-primary transform group-hover:scale-110 transition-transform duration-700 origin-left">
                    {React.cloneElement(sol.icon as React.ReactElement<{size?: number, strokeWidth?: number}>, { size: 40, strokeWidth: 1.25 })}
                  </div>
                </div>
                
                <div className="space-y-6 flex-grow mb-12">
                  <h3 className="text-2xl font-black text-brand-text tracking-tighter uppercase leading-tight group-hover:translate-x-1 transition-transform">{sol.title}</h3>
                  <p className="text-base text-brand-muted font-medium leading-relaxed max-w-[90%]">{sol.summary}</p>
                </div>
                
                <div className="space-y-8 mb-14 border-t border-slate-50 pt-10">
                  <div className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-300">Technical Scope</div>
                  <div className="space-y-4">
                    {sol.capabilities.map((cap, j) => (
                      <div key={j} className="flex items-start gap-4 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 group-hover:text-slate-600 transition-colors">
                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-0.5 opacity-20 group-hover:opacity-100 transition-all group-hover:scale-125"></div> 
                        <span className="flex-1">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => onPageChange(sol.path)}
                  className="flex items-center justify-between w-full group/btn pt-6"
                >
                  <span className="text-brand-primary font-black text-[11px] uppercase tracking-[0.4em] group-hover:translate-x-2 transition-transform duration-500">{sol.cta}</span>
                  <div className="h-10 w-10 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center group-hover/btn:bg-brand-primary group-hover/btn:text-white group-hover/btn:border-brand-primary transition-all duration-500 shadow-sm">
                    <ArrowRight size={18} />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW CYBERSYS DELIVERS */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
             <div className="lg:col-span-4 space-y-8">
                <h2 className="text-[11px] font-black text-brand-primary uppercase tracking-[0.6em]">Process Flow</h2>
                <h3 className="text-4xl md:text-6xl font-black text-brand-text tracking-tighter uppercase leading-none">Structured <br /> Delivery.</h3>
                <p className="text-lg text-brand-muted font-medium max-w-sm">A rigorous methodology ensuring absolute alignment between architectural design and operational reality.</p>
             </div>
             <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  { title: 'Assess', icon: <Search />, desc: 'Understand business objectives, technical requirements, risk posture, and compliance needs.' },
                  { title: 'Design', icon: <Compass />, desc: 'Architect secure, resilient, and scalable solutions aligned with operational realities.' },
                  { title: 'Secure & Manage', icon: <Server />, desc: 'Implement, monitor, and continuously optimize systems for performance, security, and reliability.' }
                ].map((step, i) => (
                  <div key={i} className="bg-white p-12 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-8 relative group">
                    <div className="absolute top-0 right-0 p-6 text-[4rem] font-black text-slate-50 group-hover:text-slate-100 transition-colors pointer-events-none">0{i+1}</div>
                    <div className="h-16 w-16 bg-slate-50 text-brand-primary rounded-2xl flex items-center justify-center relative z-10">
                       {React.cloneElement(step.icon as React.ReactElement<{size?: number, strokeWidth?: number}>, { size: 28, strokeWidth: 1.5 })}
                    </div>
                    <div className="space-y-4 relative z-10">
                      <h4 className="text-2xl font-black text-brand-text uppercase tracking-tighter leading-none">{step.title}</h4>
                      <p className="text-base text-brand-muted font-medium leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 5. BUSINESS OUTCOMES (YIELD-FOCUSED) */}
      <section className="py-24 bg-brand-text text-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-10"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-end mb-24">
             <div className="lg:col-span-8 space-y-6">
                <h2 className="text-[11px] font-black text-brand-primary uppercase tracking-[0.6em]">Yield Metrics</h2>
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">Measurable Outcomes.</h3>
             </div>
             <div className="lg:col-span-4 lg:text-right">
                <p className="text-slate-400 font-medium text-lg italic">Engineering value into every infrastructure layer.</p>
             </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: <Activity />, title: 'Operational Resilience', desc: 'High availability, disaster recovery, and continuity planning.' },
              { icon: <ShieldCheck />, title: 'Security & Compliance', desc: 'Protection against threats and alignment with regulatory standards.' },
              { icon: <TrendingUp />, title: 'Cost Optimization', desc: 'Efficient resource utilization across cloud environments.' },
              { icon: <Zap />, title: 'Scalable Growth', desc: 'Infrastructure designed to grow with organizational demand.' }
            ].map((outcome, i) => (
              <div key={i} className="p-12 border border-white/10 rounded-[3rem] space-y-12 hover:bg-white/5 transition-all duration-700 group">
                <div className="text-brand-primary group-hover:scale-110 transition-transform">
                  {React.cloneElement(outcome.icon as React.ReactElement<{size?: number, strokeWidth?: number}>, { size: 48, strokeWidth: 1 })}
                </div>
                <div className="space-y-6">
                  <h4 className="text-2xl font-black uppercase tracking-tight leading-none italic">{outcome.title}</h4>
                  <p className="text-base text-slate-400 font-medium leading-relaxed">{outcome.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CS5 ALIGNMENT SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
            <div className="lg:col-span-6 space-y-12">
              <h3 className="text-4xl md:text-6xl font-black text-brand-text tracking-tighter uppercase leading-[0.95] mb-8">World-Class <br /> Delivery Standards.</h3>
              <p className="text-xl text-brand-muted font-medium leading-relaxed max-w-2xl">
                Every CyberSys solution is delivered using our CS5 framework — ensuring security, system integration, scalability, and measurable value.
              </p>
              <div className="grid grid-cols-2 gap-8">
                 {CS5_FRAMEWORK.map((f, i) => (
                   <div key={i} className="flex flex-col gap-2 group">
                      <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary opacity-50 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                      <div className="text-lg font-black uppercase text-brand-text">{f.term}</div>
                      <div className="h-0.5 w-0 group-hover:w-full bg-brand-primary transition-all duration-700"></div>
                   </div>
                 ))}
              </div>
            </div>
            <div className="lg:col-span-6">
               <div className="bg-brand-primary p-24 rounded-[5rem] text-white flex flex-col items-center justify-center text-center space-y-12 shadow-[0_80px_120px_-30px_rgba(32,130,166,0.25)] relative overflow-hidden group">
                  <div className="absolute inset-0 blueprint-grid opacity-20 group-hover:scale-125 transition-transform duration-[15s] ease-linear"></div>
                  <div className="text-[12px] font-black uppercase tracking-[1em] opacity-40 relative z-10">Technical Reference</div>
                  <div className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9] relative z-10 drop-shadow-2xl">
                    Cyber <br /> Synergy <br /> Security <br /> Systems <br /> Scalability <br /> Solutions
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRIMARY CTA */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="max-w-7xl mx-auto bg-brand-text rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 blueprint-grid opacity-10"></div>
            <div className="relative z-10 space-y-12">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-8">
                Let’s Design the <br /> <span className="text-brand-primary italic">Right Solution.</span>
              </h2>
              <p className="text-2xl text-slate-400 max-w-4xl mx-auto font-medium leading-relaxed border-t border-white/10 pt-16">
                Whether you are securing critical systems, adopting multicloud, or modernizing infrastructure, CyberSys partners with you from strategy to execution.
              </p>
              <div className="pt-10">
                <button 
                  onClick={() => onPageChange('contact')}
                  className="px-16 py-8 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[14px] uppercase tracking-[0.5em] transition-all shadow-2xl shadow-brand-primary/20 transform hover:-translate-y-2"
                >
                  Request a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Solutions: React.FC<SolutionsProps> = ({ onPageChange, detailView }) => {
  /* Commented out to use the simplified generic detail view
  if (detailView === 'cybersecurity') {
    return <CybersecurityDetail onPageChange={onPageChange} />;
  }
  
  if (detailView === 'cloud') {
    return <CloudInfrastructureDetail onPageChange={onPageChange} />;
  }
  */

  if (detailView) {
    const detailData = SOLUTION_CATEGORIES.find(s => s.path.includes(detailView));
    if (detailData) {
      return <GenericSolutionDetail data={detailData} onPageChange={onPageChange} />;
    }
  }
  return <Overview onPageChange={onPageChange} />;
};

export default Solutions;