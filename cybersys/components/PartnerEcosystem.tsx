import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Page } from '../types';

export interface PartnerData {
  id: string;
  name: string;
  tagline: string;
  category: string;
  role: string;
  description: string;
  capabilities: string[];
  businessValue: string;
  targetPage: Page;
  logoUrl?: string;
  customIcon?: React.ReactNode;
}

// Company-level alliances for the infinite scrolling track (Azure excluded as it is a product)
export const MARQUEE_ALLIANCES: { name: string; logoUrl: string }[] = [
  { name: 'Microsoft', logoUrl: '/partners/microsoft.svg' },
  { name: 'Amazon Web Services (AWS)', logoUrl: '/partners/aws.png' },
  { name: 'Google Cloud', logoUrl: '/partners/google-cloud.png' },
  { name: 'Oracle', logoUrl: '/partners/oracle.png' },
  { name: 'Sophos', logoUrl: '/partners/sophos.svg' },
  { name: 'DPAnalytics', logoUrl: '/partners/dpanalytics.png' }
];

// Interactive Spotlight list including both hyperscalers and dedicated platform solutions (Azure & OCI included)
export const SPOTLIGHT_PARTNERS: PartnerData[] = [
  {
    id: 'microsoft',
    name: 'Microsoft',
    tagline: 'Modern Workplace & Productivity Infrastructure',
    category: 'Enterprise Productivity',
    role: 'Workplace collaboration, enterprise licensing, Teams, identity management, and Microsoft 365 governance.',
    description: 'Empower enterprise teams with business email, unified collaboration, document sharing, meetings, and productivity tools through Microsoft’s cloud-based workplace platform.',
    capabilities: [
      'Microsoft 365 Architecture & Migration',
      'Microsoft Entra ID (Azure AD) Identity',
      'Enterprise Agreement Licensing',
      'Endpoint Security & Intune Compliance'
    ],
    businessValue: 'Improve collaboration and everyday workplace productivity.',
    targetPage: 'solutions',
    logoUrl: '/partners/microsoft.svg'
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    tagline: 'Enterprise Hybrid & Multicloud Infrastructure',
    category: 'Cloud Infrastructure',
    role: 'Scalable compute, Azure SQL, AKS container orchestration, disaster recovery, and hybrid cloud interconnectivity.',
    description: 'Build, deploy, and scale applications and infrastructure using Microsoft’s cloud platform, with security and governance aligned to your organisation’s requirements.',
    capabilities: [
      'Azure Virtual Machines & AKS Clusters',
      'Enterprise Azure SQL & Managed DBs',
      'ExpressRoute Hybrid Interconnect',
      'AI FinOps Cost Governance (Save 25-50%)'
    ],
    businessValue: 'Modernise infrastructure and scale on demand.',
    targetPage: 'multicloud',
    logoUrl: '/partners/azure.svg'
  },
  {
    id: 'aws',
    name: 'Amazon Web Services (AWS)',
    tagline: 'Resilient Cloud Compute & Global Microservices',
    category: 'Cloud Infrastructure',
    role: 'Elastic compute (EC2), scalable object storage (S3), serverless architectures, and multi-region failover.',
    description: 'Access flexible cloud infrastructure, compute, storage, databases, and cloud-native capabilities to support changing business demands.',
    capabilities: [
      'AWS EKS & Containerized Microservices',
      'High-Durability S3 & Glacier Archival',
      'Aurora & DynamoDB Database Scaling',
      'Automated Multi-Region Disaster Recovery'
    ],
    businessValue: 'Build resilient, scalable digital services.',
    targetPage: 'multicloud',
    logoUrl: '/partners/aws.png'
  },
  {
    id: 'google-cloud',
    name: 'Google Cloud',
    tagline: 'High-Throughput Analytics & Enterprise AI',
    category: 'Cloud Infrastructure & AI',
    role: 'BigQuery data warehousing, Vertex AI integration, Google Kubernetes Engine (GKE), and secure multicloud mesh.',
    description: 'Explore cloud infrastructure, data platforms, analytics, and AI capabilities that support modern business applications and data-driven decision-making.',
    capabilities: [
      'BigQuery Enterprise Data Warehousing',
      'Google Kubernetes Engine (GKE)',
      'Vertex AI & Intelligent Automation',
      'Anthos Multicloud Orchestration'
    ],
    businessValue: 'Turn technology and data into business value.',
    targetPage: 'multicloud',
    logoUrl: '/partners/google-cloud.png'
  },
  {
    id: 'oracle',
    name: 'Oracle',
    tagline: 'Mission-Critical ERP, Databases & Primavera',
    category: 'Enterprise Applications',
    role: 'Enterprise resource planning, Autonomous Database, Primavera EPPM, and financial process automation.',
    description: 'Support enterprise finance, procurement, project management, and connected business processes through suitable Oracle enterprise solutions.',
    capabilities: [
      'Oracle Cloud ERP & E-Business Suite',
      'Primavera EPPM Project Governance',
      'Enterprise Database Architecture',
      'Mission-Critical Availability'
    ],
    businessValue: 'Improve operational visibility and process control.',
    targetPage: 'solutions',
    logoUrl: '/partners/oracle.png'
  },
  {
    id: 'oci',
    name: 'Oracle Cloud Infrastructure (OCI)',
    tagline: 'Autonomous Compute, Exadata & Multicloud Mesh',
    category: 'Cloud Infrastructure',
    role: 'OCI bare metal compute, Autonomous Database clusters, high-performance Exadata, and cross-cloud interconnectivity.',
    description: 'Architect, migrate, and run mission-critical enterprise workloads on OCI with extreme price-performance, automated patching, and native low-latency interconnects to Microsoft Azure.',
    capabilities: [
      'OCI Compute & Autonomous Database',
      'Exadata Cloud Service & Database Migration',
      'Oracle & Azure Low-Latency Interconnect',
      'Enterprise Disaster Recovery & Data Guard'
    ],
    businessValue: 'Extreme database performance and predictable cloud economics.',
    targetPage: 'multicloud',
    logoUrl: '/partners/oracle.png'
  },
  {
    id: 'sophos',
    name: 'Sophos',
    tagline: 'Synchronized Cybersecurity & 24/7 Threat Protection',
    category: 'Cybersecurity',
    role: 'Next-Gen endpoint defense, Xstream firewalls, Managed Threat Response (MTR), and zero-trust network access.',
    description: 'Strengthen your security posture with appropriate endpoint, network, and threat protection solutions delivered through the Sophos ecosystem.',
    capabilities: [
      'Sophos Intercept X with XDR & EDR',
      'Sophos Firewall & Zero Trust Network Access (ZTNA)',
      '24/7 Managed Threat Response (MTR)',
      'Automated Threat Hunting & Incident Remediation'
    ],
    businessValue: 'Help protect users, devices, and business systems.',
    targetPage: 'solutions-cybersecurity',
    logoUrl: '/partners/sophos.svg'
  },
  {
    id: 'dpanalytics',
    name: 'DPAnalytics',
    tagline: 'Advanced Enterprise Intelligence & Decision Systems',
    category: 'Data, Analytics & AI',
    role: 'Predictive data modeling, executive KPI dashboards, regulatory data pipelines, and analytics automation.',
    description: 'Bridge heterogeneous enterprise data silos with customized analytics engines engineered to deliver actionable executive clarity.',
    capabilities: [
      'Custom Executive KPI Dashboards',
      'Automated Data Extraction & ETL Pipelines',
      'Predictive Business Forecasting',
      'Regulatory Reporting & Data Governance'
    ],
    businessValue: 'Convert complex corporate data into actionable strategic yield.',
    targetPage: 'solutions-bi',
    logoUrl: '/partners/dpanalytics.png'
  }
];

interface PartnerEcosystemProps {
  onPageChange: (p: Page) => void;
}

const PartnerEcosystem: React.FC<PartnerEcosystemProps> = ({ onPageChange }) => {
  const [selectedPartnerId, setSelectedPartnerId] = useState<string>('azure');
  const [isFading, setIsFading] = useState<boolean>(false);

  const handleSelectPartner = (id: string) => {
    if (id === selectedPartnerId) return;
    setIsFading(true);
    setTimeout(() => {
      setSelectedPartnerId(id);
      setIsFading(false);
    }, 150);
  };

  const selectedPartner = SPOTLIGHT_PARTNERS.find(p => p.id === selectedPartnerId) || SPOTLIGHT_PARTNERS[1];

  return (
    <section id="partner-ecosystem" className="py-24 2xl:py-32 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>

      {/* Screen container optimized for large monitors and ultrawides */}
      <div className="max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-6 sm:px-12 md:px-16 2xl:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 2xl:mb-20 reveal-on-scroll">
          <h2 className="text-[10px] 2xl:text-[11px] font-black text-brand-primary uppercase tracking-[0.5em] mb-4">
            Strategic Alliances
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-black text-brand-text tracking-tighter uppercase leading-none">
            Global Technology. <br />
            <span className="text-brand-primary">Connected by CyberSys.</span>
          </h3>
          <p className="mt-6 text-base sm:text-lg 2xl:text-xl text-brand-muted font-medium leading-relaxed max-w-3xl mx-auto">
            We bring together leading cloud, cybersecurity, enterprise software, and analytics platforms to help organisations build secure, scalable, and intelligent digital environments.
          </p>
        </div>

        {/* COMPONENT A: INFINITE HORIZONTAL LOGO MARQUEE (COMPANY ALLIANCES ONLY, NO HEADER LABEL) */}
        <div className="mb-20 reveal-on-scroll">
          <div className="relative py-2 overflow-hidden group">
            {/* Edge Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none"></div>

            {/* Continuous Marquee Track */}
            <div className="flex w-max animate-marquee-slow pause-on-hover items-center">
              {[...MARQUEE_ALLIANCES, ...MARQUEE_ALLIANCES, ...MARQUEE_ALLIANCES, ...MARQUEE_ALLIANCES].map((partner, index) => {
                return (
                  <div
                    key={`marquee-${index}`}
                    className="mx-3 sm:mx-6 2xl:mx-8 px-8 py-5 rounded-2xl border bg-white border-slate-200/80 shadow-sm hover:border-brand-primary/40 hover:shadow-md transition-all duration-300 flex items-center gap-4 flex-shrink-0 cursor-default"
                  >
                    <div className="w-9 h-9 2xl:w-10 2xl:h-10 flex items-center justify-center flex-shrink-0">
                      <img 
                        src={partner.logoUrl} 
                        alt={partner.name} 
                        className="max-h-7 2xl:max-h-8 max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-sm 2xl:text-base font-black text-brand-text tracking-tight uppercase whitespace-nowrap">
                      {partner.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* COMPONENT B: INTERACTIVE PARTNER SPOTLIGHT (OPPOSING SIDES ENTRANCE WITH DARK BLUE CORE CARD) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 2xl:gap-12 items-stretch">
          
          {/* Left Column: Interactive Partner Selector List (Reveals from Left) */}
          <div className="lg:col-span-5 reveal-from-left grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 2xl:gap-4">
            {SPOTLIGHT_PARTNERS.map((partner) => {
              const isSelected = selectedPartnerId === partner.id;
              return (
                <div
                  key={partner.id}
                  onClick={() => handleSelectPartner(partner.id)}
                  className={`p-5 2xl:p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white border-brand-primary shadow-xl shadow-brand-primary/10 translate-x-2'
                      : 'bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300 hover:translate-x-1'
                  }`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-11 h-11 2xl:w-12 2xl:h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 flex-shrink-0 group-hover:scale-105 transition-transform">
                      {partner.logoUrl ? (
                        <img 
                          src={partner.logoUrl} 
                          alt={partner.name} 
                          className="max-h-7 max-w-full object-contain"
                        />
                      ) : (
                        partner.customIcon
                      )}
                    </div>
                    <div className="truncate">
                      <h4 className="text-sm 2xl:text-base font-black text-brand-text uppercase tracking-tight">
                        {partner.name}
                      </h4>
                      <p className="text-xs 2xl:text-sm text-brand-muted truncate font-medium mt-0.5">
                        {partner.category}
                      </p>
                    </div>
                  </div>

                  <ArrowRight 
                    size={16} 
                    className={`transition-all ${
                      isSelected 
                        ? 'text-brand-primary translate-x-0 opacity-100' 
                        : 'text-slate-300 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                    }`} 
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Spotlight Detailed Card (DARK BLUE CORE STYLING) */}
          <div className="lg:col-span-7 reveal-from-right flex flex-col">
            <div 
              className={`h-full bg-[#0A0F1C] text-white rounded-[2rem] border border-white/10 p-8 sm:p-12 2xl:p-16 shadow-2xl relative overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                isFading ? 'opacity-40 scale-[0.99]' : 'opacity-100 scale-100'
              }`}
            >
              {/* Ambient Dark Core Radial Glows */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-secondary/5 blur-[90px] rounded-full mix-blend-screen pointer-events-none"></div>
              <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none"></div>

              <div className="relative z-10">
                
                {/* Header: Logo & Partner Name */}
                <div className="flex items-center gap-5 pb-8 mb-8 border-b border-white/10">
                  <div className="w-16 h-16 2xl:w-20 2xl:h-20 rounded-2xl bg-white p-3 flex items-center justify-center flex-shrink-0 shadow-lg">
                    {selectedPartner.logoUrl ? (
                      <img 
                        src={selectedPartner.logoUrl} 
                        alt={selectedPartner.name} 
                        className="max-h-11 2xl:max-h-13 max-w-full object-contain" 
                      />
                    ) : (
                      selectedPartner.customIcon
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl 2xl:text-4xl font-black text-white tracking-tighter uppercase">
                      {selectedPartner.name}
                    </h3>
                    <p className="text-xs 2xl:text-sm font-black uppercase tracking-[0.2em] text-brand-secondary mt-1">
                      {selectedPartner.category}
                    </p>
                  </div>
                </div>

                {/* Tagline & Description */}
                <div className="mb-8 2xl:mb-10">
                  <h4 className="text-lg sm:text-xl 2xl:text-2xl font-black text-white uppercase tracking-tight leading-snug mb-3">
                    {selectedPartner.tagline}
                  </h4>
                  <p className="text-sm sm:text-base 2xl:text-lg text-slate-300 leading-relaxed font-normal">
                    {selectedPartner.description}
                  </p>
                </div>

                {/* Engineering Capabilities */}
                <div className="mb-8 2xl:mb-10">
                  <div className="text-[10px] 2xl:text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">
                    Key Capabilities
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 2xl:gap-4">
                    {selectedPartner.capabilities.map((cap, i) => (
                      <div 
                        key={i} 
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs 2xl:text-sm text-slate-200 font-semibold hover:border-brand-primary/40 transition-colors"
                      >
                        <CheckCircle2 size={16} className="text-brand-secondary mt-0.5 flex-shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Impact Box */}
                <div className="p-5 2xl:p-6 rounded-2xl bg-gradient-to-r from-brand-primary/20 via-brand-secondary/10 to-transparent border border-brand-primary/30 mb-8 2xl:mb-10">
                  <div className="text-[10px] 2xl:text-[11px] font-black uppercase tracking-[0.25em] text-brand-secondary mb-1.5">
                    Real Business Impact
                  </div>
                  <p className="text-sm 2xl:text-base text-white font-bold leading-relaxed">
                    {selectedPartner.businessValue}
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-white/10">
                <button
                  onClick={() => onPageChange(selectedPartner.targetPage)}
                  className="w-full sm:w-auto px-8 2xl:px-10 py-4 2xl:py-5 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[11px] 2xl:text-[12px] uppercase tracking-[0.25em] transition-all shadow-xl shadow-brand-primary/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Explore Solutions Architecture <ArrowRight size={14} />
                </button>

                <button
                  onClick={() => onPageChange('contact')}
                  className="w-full sm:w-auto px-8 2xl:px-10 py-4 2xl:py-5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded font-black text-[11px] 2xl:text-[12px] uppercase tracking-[0.25em] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Request Consultation <ExternalLink size={13} />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* "Explore More Options" CTA button */}
        <div className="mt-16 2xl:mt-20 text-center reveal-on-scroll">
          <button
            onClick={() => onPageChange('solutions')}
            className="px-10 2xl:px-12 py-5 2xl:py-6 border-2 border-slate-300 hover:border-brand-primary text-brand-text hover:text-brand-primary rounded font-black text-[11px] 2xl:text-[13px] uppercase tracking-[0.25em] transition-all bg-white shadow-sm hover:shadow-md inline-flex items-center gap-3 cursor-pointer"
          >
            Explore More Options & Solutions <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default PartnerEcosystem;
