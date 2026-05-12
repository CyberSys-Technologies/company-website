import React from 'react';
import { 
  Layers, 
  ArrowRight, 
  ChevronLeft, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Globe, 
  Activity, 
  Search, 
  Compass, 
  Server, 
  Lock, 
  Cpu, 
  TrendingUp, 
  BrainCircuit, 
  Settings,
  AlertCircle,
  Network,
  Database,
  Cloud,
  /* Added missing icon imports */
  GanttChart,
  Eye
} from 'lucide-react';
import { Page } from '../types';
import { CS5_FRAMEWORK } from '../constants';

const Multicloud: React.FC<{ onPageChange: (p: Page) => void }> = ({ onPageChange }) => {
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
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary">Multicloud Orchestration Group</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-brand-text tracking-tighter uppercase leading-[0.85] mb-12">
              Multicloud Management <br /> for Flexibility, <br /> 
              <span className="text-brand-primary">Resilience, and Control.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-muted max-w-3xl font-medium leading-relaxed mb-16 border-l-2 border-brand-primary pl-12 py-2">
              CyberSys Technologies enables organizations to architect, manage, and optimize workloads across multiple cloud platforms — unlocking agility, cost efficiency, and operational resilience without vendor lock-in.
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
                Simplifying <br /> Distributed <br /> Complexity.
              </h3>
            </div>
            <div className="lg:col-span-8 space-y-12">
              <p className="text-2xl text-brand-muted font-medium leading-relaxed">
                Organizations increasingly adopt multiple cloud providers to leverage specialized services, optimize costs, and reduce dependency on a single vendor. However, managing complex multicloud environments introduces operational, security, and compliance challenges.
              </p>
              <p className="text-xl text-brand-muted leading-relaxed font-medium">
                CyberSys Multicloud Management solutions simplify this complexity by providing unified governance, seamless integration, and strategic orchestration across AWS, Azure, Oracle OCI, and Google Cloud Platform. We help organizations achieve the flexibility, performance, and resilience required for modern enterprise workloads.
              </p>
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
                <h3 className="text-4xl md:text-6xl font-black text-brand-text tracking-tighter uppercase leading-none italic">Multicloud <br /> Friction.</h3>
                <p className="text-xl text-brand-muted font-medium leading-relaxed">While multicloud environments provide numerous advantages, organizations face significant challenges that can introduce risk, inefficiency, and unnecessary cost.</p>
             </div>
             <div className="lg:col-span-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: 'Operational Complexity', desc: 'Increased operational complexity across multiple cloud platforms.' },
                    { title: 'Inconsistent Security', desc: 'Risk of inconsistent security policies and misconfigurations across environments.' },
                    { title: 'Cost Proliferation', desc: 'Difficulty optimizing costs across providers without unified visibility.' },
                    { title: 'Sovereignty Gaps', desc: 'Compliance and data residency requirements across multiple jurisdictions.' },
                    { title: 'Performance Silos', desc: 'Lack of visibility into workload performance and dependencies between clouds.' }
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
             </div>
           </div>
        </div>
      </section>

      {/* 4. THE CYBERSYS APPROACH */}
      <section className="py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="max-w-4xl space-y-12 mb-24">
            <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">03 / The CyberSys Approach</h2>
            <h3 className="text-4xl md:text-7xl font-black text-brand-text tracking-tighter uppercase leading-none">Governance-First <br /> Orchestration.</h3>
            <p className="text-2xl text-brand-muted font-medium leading-relaxed">CyberSys applies a structured, governance-first approach to multicloud management, ensuring organizations realize the benefits of multiple cloud providers without introducing operational risk.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: <GanttChart />, text: 'Strategic multicloud architecture aligned with business objectives' },
              { icon: <Eye />, text: 'Unified monitoring and management for end-to-end visibility' },
              { icon: <ShieldCheck />, text: 'Integrated security and compliance controls across clouds' },
              { icon: <TrendingUp />, text: 'Cost optimization and workload placement based on best-fit platform' },
              { icon: <Network />, text: 'Seamless connectivity and orchestration between clouds' }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-slate-50 rounded-3xl space-y-10 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-700 h-full">
                <div className="text-brand-primary transform group-hover:scale-110 transition-transform">{React.cloneElement(item.icon as React.ReactElement<{size?: number, strokeWidth?: number}>, { size: 36, strokeWidth: 1.5 })}</div>
                <p className="text-sm font-black text-brand-text uppercase tracking-tight leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 py-16 border-t border-slate-100 text-center">
            <p className="text-3xl font-black text-brand-text uppercase tracking-tighter italic">
              "We focus on <span className="text-brand-primary underline decoration-2 underline-offset-8">simplifying complexity</span>, enhancing resilience, and maximizing value for every workload."
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
              <h3 className="text-4xl md:text-6xl font-black text-brand-text tracking-tighter uppercase leading-none italic">Unified <br /> Performance.</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: <Layers />, title: 'Multicloud Strategy & Architecture', desc: 'Design tailored multicloud solutions that balance performance, compliance, and cost efficiency.' },
              { icon: <Activity />, title: 'Unified Monitoring & Management', desc: 'Centralized dashboards for visibility, governance, and operational control across clouds.' },
              { icon: <BarChart3 />, title: 'Cost Optimization & FinOps', desc: 'Analyze, allocate, and optimize cloud spending across providers for maximum efficiency.' },
              { icon: <ShieldCheck />, title: 'Security & Compliance Integration', desc: 'Apply consistent policies, controls, and auditing across all cloud platforms.' },
              { icon: <Network />, title: 'Seamless Cloud Connectivity', desc: 'Enable integrated workflows and secure data movement between disparate cloud platforms.' }
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
              <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">05 / Security Standard</h2>
              <h3 className="text-4xl md:text-7xl font-black text-brand-text tracking-tighter uppercase leading-[0.95]">Governance <br /> without <br /> Compromise.</h3>
              <p className="text-xl text-brand-muted font-medium leading-relaxed">
                CyberSys ensures multicloud environments are governed, monitored, and protected according to industry standards and regulatory requirements.
              </p>
            </div>
            <div className="lg:col-span-7">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { label: 'Consistency', title: 'Consistent security policies across multiple cloud providers' },
                    { label: 'Encryption', title: 'Data protection and encryption for in-transit and at-rest workloads' },
                    { label: 'Visibility', title: 'Continuous monitoring, logging, and auditing' },
                    { label: 'Jurisdiction', title: 'Compliance with local, regional, and global regulations' },
                    { label: 'Incident Response', title: 'Incident response and remediation across all clouds' }
                  ].map((item, i) => (
                    <div key={i} className="p-10 border border-slate-100 rounded-[2.5rem] bg-slate-50 group hover:border-brand-primary transition-all">
                       <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary mb-4 opacity-50">{item.label}</div>
                       <div className="text-lg font-black text-brand-text uppercase tracking-tight leading-tight">{item.title}</div>
                    </div>
                  ))}
               </div>
               <p className="mt-12 text-lg text-brand-muted font-medium italic border-t border-slate-100 pt-10">
                 "This approach allows enterprises to benefit from multicloud flexibility without compromising security or regulatory compliance."
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
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none">Strategic Orchestration.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: <Zap />, title: 'Operational Resilience', desc: 'High availability and workload redundancy across clouds reduce risk of downtime.' },
              { icon: <TrendingUp />, title: 'Cost Efficiency', desc: 'Optimized workload placement and FinOps practices reduce unnecessary cloud spend.' },
              { icon: <BrainCircuit />, title: 'Agility & Flexibility', desc: 'Deploy workloads on the platform best suited for the task, enabling faster innovation.' },
              { icon: <ShieldCheck />, title: 'Governance & Compliance', desc: 'Unified control over policies, monitoring, and audits simplifies regulatory adherence.' }
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
                CyberSys Multicloud Management solutions are delivered using our CS5 framework — ensuring systems are secure, integrated, scalable, and aligned to measurable business outcomes.
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
               { title: 'Cybersecurity', path: 'solutions-cybersecurity' },
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
                Simplify and <br /> Optimize Your <br /> <span className="text-brand-primary italic">Environment.</span>
              </h2>
              <p className="text-2xl text-slate-400 max-w-4xl mx-auto font-medium leading-relaxed border-t border-white/10 pt-16">
                Partner with CyberSys to implement, govern, and optimize multicloud solutions that deliver flexibility, resilience, and measurable business value.
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

export default Multicloud;