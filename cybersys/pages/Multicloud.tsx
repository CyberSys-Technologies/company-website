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
  Eye,
  Laptop
} from 'lucide-react';
import { Page } from '../types';
import { CS5_FRAMEWORK } from '../constants';

const Multicloud: React.FC<{ onPageChange: (p: Page) => void }> = ({ onPageChange }) => {
  return (
    <div className="animate-in fade-in duration-1000 bg-white">
      {/* 1. PAGE HERO */}
      <section className="bg-slate-50 border-b border-slate-200 py-24 md:py-36 blueprint-grid relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-fine opacity-40 pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <button 
            onClick={() => onPageChange('solutions')}
            className="flex items-center gap-3 text-brand-primary hover:text-brand-text transition-all mb-12 text-[12px] font-black uppercase tracking-[0.4em] group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Catalog
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="reveal-on-scroll active inline-flex items-center gap-4 mb-4">
                 <div className="h-px w-12 bg-brand-primary"></div>
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary">Multicloud Orchestration Group</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-brand-text tracking-tighter uppercase leading-[0.85] mb-6">
                Multicloud Management <br /> for Flexibility, <br /> 
                <span className="text-brand-primary">Resilience, and Control.</span>
              </h1>
              <p className="text-xl text-brand-muted max-w-2xl font-medium leading-relaxed mb-8 border-l-2 border-brand-primary pl-8 py-1">
                CyberSys Technologies enables organizations to architect, manage, and optimize workloads across multiple cloud platforms — unlocking agility, cost efficiency, and operational resilience without vendor lock-in.
              </p>
              <div className="flex flex-wrap gap-6 pt-2">
                <button 
                  onClick={() => onPageChange('contact')}
                  className="px-10 py-5 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[12px] uppercase tracking-[0.4em] transition-all shadow-xl shadow-brand-primary/20 transform hover:-translate-y-1"
                >
                  Talk to a Solutions Architect
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 reveal-on-scroll active relative">
              <div className="absolute -inset-4 blueprint-grid opacity-30 pointer-events-none rounded-[2.5rem]"></div>
              <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 p-2 bg-white/50 backdrop-blur-md shadow-2xl shadow-slate-200/30 group">
                <img 
                  src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=600&q=70" 
                  alt="Multicloud Orchestration" 
                  className="w-full h-[250px] sm:h-[320px] object-cover rounded-[1.5rem] grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none rounded-[1.5rem]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOLUTION OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em] mb-10">01 / Overview</h2>
              <h3 className="text-3xl md:text-5xl font-black text-brand-text tracking-tighter uppercase leading-[1] italic">
                Simplifying <br /> Distributed <br /> Complexity.
              </h3>
            </div>
            <div className="lg:col-span-8 space-y-12">
              <p className="text-xl text-brand-muted font-medium leading-relaxed">
                Organizations increasingly adopt multiple cloud providers to leverage specialized services, optimize costs, and reduce dependency on a single vendor. However, managing complex multicloud environments introduces operational, security, and compliance challenges.
              </p>
              <p className="text-lg text-brand-muted leading-relaxed font-medium">
                CyberSys Multicloud Management solutions simplify this complexity by providing unified governance, seamless integration, and strategic orchestration of cloud services across the four hyperscalers: Microsoft, Oracle, Amazon, and Google. We help organizations achieve the flexibility, performance, and resilience required for modern enterprise workloads.
              </p>

              {/* Multicloud Architecture Diagram */}
              <div className="mt-16 w-full relative bg-slate-50 rounded-[2rem] border border-slate-200 p-8 overflow-hidden flex items-center justify-center min-h-[450px]">
                {/* Background Details */}
                <div className="absolute inset-0 blueprint-grid-fine opacity-10 pointer-events-none"></div>

                {/* SVG Connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50%" cy="50%" r="32%" fill="none" stroke="#2082A6" strokeWidth="1.5" strokeDasharray="6 6" className="opacity-30 animate-[spin_60s_linear_infinite]" />
                  <line x1="50%" y1="50%" x2="50%" y2="18%" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-50" />
                  <line x1="50%" y1="50%" x2="50%" y2="82%" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-50" />
                  <line x1="50%" y1="50%" x2="18%" y2="50%" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-50" />
                  <line x1="50%" y1="50%" x2="82%" y2="50%" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-50" />
                </svg>

                {/* Central Hub */}
                <div className="relative z-20 w-24 h-24 bg-white rounded-2xl shadow-xl border border-slate-200 flex items-center justify-center">
                  <Laptop className="w-10 h-10 text-brand-primary" />
                </div>

                {/* AWS Node (Top) */}
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-xl shadow-lg border border-slate-200 flex items-center justify-center z-10 p-4 hover:scale-110 hover:border-brand-primary/50 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="w-full h-full object-contain" />
                </div>

                {/* Google Cloud Node (Bottom) */}
                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-xl shadow-lg border border-slate-200 flex items-center justify-center z-10 p-4 hover:scale-110 hover:border-brand-primary/50 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" className="w-full h-full object-contain" />
                </div>

                {/* Oracle Node (Left) */}
                <div className="absolute left-[10%] md:left-[15%] top-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-xl shadow-lg border border-slate-200 flex items-center justify-center z-10 p-4 hover:scale-110 hover:border-brand-primary/50 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" alt="Oracle" className="w-full h-full object-contain" />
                </div>

                {/* Azure Node (Right) */}
                <div className="absolute right-[10%] md:right-[15%] top-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-xl shadow-lg border border-slate-200 flex items-center justify-center z-10 p-4 hover:scale-110 hover:border-brand-primary/50 transition-all duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" alt="Azure" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE CHALLENGE (HIDDEN) */}
      {/* 
      <section className="py-40 bg-slate-50 border-y border-slate-200 relative">
        ... content hidden for simplicity ...
      </section>
      */}

      {/* 4. THE CYBERSYS APPROACH (HIDDEN) */}
      {/*
      <section className="py-40 bg-white">
        ... content hidden for simplicity ...
      </section>
      */}

      {/* 5. SUPPORTED PLATFORMS */}
      <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
            <div className="space-y-4">
              <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">02 / Supported Platforms</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none italic">Hyperscaler <br /> Partners.</h3>
            </div>
            <p className="text-base text-slate-400 font-medium max-w-xl leading-relaxed">
              We leverage the world's most powerful cloud platforms, engineering solutions that harness their unique strengths to deliver unmatched resilience and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                company: 'Microsoft',
                product: 'Microsoft Azure',
                companyLogo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoft.svg',
                productLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
                desc: 'Enterprise-grade platform featuring Virtual Machines, Azure SQL, AKS, and Azure Functions for seamless hybrid integration and robust compliance.'
              },
              {
                company: 'Amazon',
                product: 'Amazon Web Services',
                companyLogo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazon.svg',
                productLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
                desc: 'The most comprehensive global scale, leveraging EC2, S3, Lambda, and RDS for unmatched service depth and operational resilience.'
              },
              {
                company: 'Google',
                product: 'Google Cloud',
                companyLogo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg',
                productLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
                desc: 'Leading-edge infrastructure powered by Compute Engine, BigQuery, GKE, and Vertex AI for advanced machine learning and data analytics.'
              },
              {
                company: 'Oracle',
                product: 'Oracle Cloud',
                companyLogo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/oracle.svg',
                productLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg',
                desc: 'Next-generation architecture featuring OCI Compute, Autonomous Database, OKE, and Exadata built for mission-critical enterprise applications.'
              }
            ].map((platform, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-[2rem] p-8 group hover:bg-white/10 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:border-brand-primary/50 transition-all duration-500 hover:-translate-y-2 cursor-default flex flex-col h-full relative overflow-hidden backdrop-blur-sm">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 flex items-center justify-center bg-white rounded-xl shadow-sm border border-slate-200 p-2.5">
                      <img src={platform.companyLogo} alt={platform.company} className="w-full h-full object-contain filter" />
                    </div>
                    <h4 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-brand-primary transition-colors">{platform.company}</h4>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4 bg-white/5 p-3 rounded-xl border border-white/10">
                    <img src={platform.productLogo} alt={platform.product} className="w-6 h-6 object-contain" />
                    <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{platform.product}</span>
                  </div>
                  
                  <p className="text-sm text-slate-400 font-medium leading-relaxed group-hover:text-slate-300 transition-colors">{platform.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. KEY CAPABILITIES */}
      <section className="py-24 bg-slate-50 border-y border-slate-200 relative">
        <div className="absolute inset-0 blueprint-grid-fine opacity-[0.2] pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
            <div className="space-y-4">
              <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">03 / Key Capabilities</h2>
              <h3 className="text-4xl md:text-5xl font-black text-brand-text tracking-tighter uppercase leading-none italic">Unified <br /> Performance.</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Layers />, title: 'Multicloud Strategy & Architecture', desc: 'Design tailored multicloud solutions that balance performance, compliance, and cost efficiency.' },
              { icon: <Activity />, title: 'Unified Monitoring & Management', desc: 'Centralized dashboards for visibility, governance, and operational control across clouds.' },
              { icon: <BarChart3 />, title: 'Cost Optimization & FinOps', desc: 'Analyze, allocate, and optimize cloud spending across providers for maximum efficiency.' },
              { icon: <ShieldCheck />, title: 'Security & Compliance Integration', desc: 'Apply consistent policies, controls, and auditing across all cloud platforms.' },
              { icon: <Network />, title: 'Seamless Cloud Connectivity', desc: 'Enable integrated workflows and secure data movement between disparate cloud platforms.' }
            ].map((cap, i) => (
              <div key={i} className="bg-white p-8 rounded-[1.5rem] border border-slate-200 flex flex-col h-full group hover:border-brand-primary hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <div className="p-4 bg-slate-50 text-brand-primary rounded-xl inline-block w-fit mb-8 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-sm">
                  {React.cloneElement(cap.icon as React.ReactElement<{size?: number, strokeWidth?: number}>, { size: 28, strokeWidth: 1.5 })}
                </div>
                <h4 className="text-xl font-black text-brand-text uppercase tracking-tight mb-4 group-hover:text-brand-primary transition-colors">{cap.title}</h4>
                <p className="text-base text-brand-muted font-medium leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECURITY & COMPLIANCE BY DESIGN */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 space-y-10">
              <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">04 / Security Standard</h2>
              <h3 className="text-4xl md:text-5xl font-black text-brand-text tracking-tighter uppercase leading-[0.95]">Governance <br /> without <br /> Compromise.</h3>
              <p className="text-lg text-brand-muted font-medium leading-relaxed">
                CyberSys ensures multicloud environments are governed, monitored, and protected according to industry standards and regulatory requirements.
              </p>
            </div>
            <div className="lg:col-span-7">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: 'Consistency', title: 'Consistent security policies across multiple cloud providers' },
                    { label: 'Encryption', title: 'Data protection and encryption for in-transit and at-rest workloads' },
                    { label: 'Visibility', title: 'Continuous monitoring, logging, and auditing' },
                    { label: 'Jurisdiction', title: 'Compliance with local, regional, and global regulations' }
                  ].map((item, i) => (
                    <div key={i} className="p-8 border border-slate-100 rounded-[1.5rem] bg-slate-50 group hover:border-brand-primary transition-all">
                       <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary mb-3 opacity-50">{item.label}</div>
                       <div className="text-base font-black text-brand-text uppercase tracking-tight leading-tight">{item.title}</div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BUSINESS IMPACT (HIDDEN) */}
      {/*
      <section className="py-40 bg-[#0F172A] text-white relative overflow-hidden">
        ... content hidden for simplicity ...
      </section>
      */}

      {/* 8. CS5 ALIGNMENT (HIDDEN) */}
      {/*
      <section className="py-40 bg-white">
        ... content hidden for simplicity ...
      </section>
      */}

      {/* 9. RELATED SOLUTIONS (HIDDEN) */}
      {/*
      <section className="py-40 bg-slate-50 border-y border-slate-200">
        ... content hidden for simplicity ...
      </section>
      */}

      {/* 10. PRIMARY CALL TO ACTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="max-w-7xl mx-auto bg-brand-text rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 blueprint-grid opacity-10"></div>
            <div className="relative z-10 space-y-12">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-8">
                Simplify and <br /> Optimize Your <br /> <span className="text-brand-primary italic">Environment.</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-4xl mx-auto font-medium leading-relaxed border-t border-white/10 pt-12">
                Partner with CyberSys to implement, govern, and optimize multicloud solutions that deliver flexibility, resilience, and measurable business value.
              </p>
              <div className="pt-10">
                <button 
                  onClick={() => onPageChange('contact')}
                  className="px-10 py-5 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[12px] uppercase tracking-[0.4em] transition-all shadow-xl shadow-brand-primary/20 transform hover:-translate-y-1"
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