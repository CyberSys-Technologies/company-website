import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight, BrainCircuit, BrickWall, Building2, ChartColumn, ChartGantt, ChevronDown, Cloud, CloudCog, CodeXml,
  Database, Infinity as InfinityIcon, KeyRound, LayoutDashboard, MailCheck, MonitorSmartphone, Network, Radar, ShieldCheck, X
} from 'lucide-react';
import { Page } from '../types';
import NetworkBackdrop from './NetworkBackdrop';

export interface PartnerSolution {
  name: string;
  detail: string;
  /** Product logo in /public/partners/products */
  icon?: string;
  /** Used where the vendor publishes no per-product logos (Oracle, Sophos, Check Point, DPAnalytics) */
  lucideIcon?: React.ReactNode;
}

export interface PartnerData {
  id: string;
  name: string;
  /** One-line summary shown on the card */
  summary: string;
  /** Subheading shown when the card is opened */
  tagline: string;
  solutions: PartnerSolution[];
  businessValue: string;
  logoUrl: string;
  /** 'mark' logos are symbols only, so the partner name is set beside them */
  logoType: 'wordmark' | 'mark';
  /** Height override for wordmarks whose artwork reads small at the default height */
  logoHeight?: string;
  /** Brand colour for outline solution icons */
  accent?: string;
}

const ICONS = '/partners/products';

export const PARTNERS: PartnerData[] = [
  {
    id: 'microsoft',
    name: 'Microsoft',
    summary: 'Azure, Microsoft 365, security and business applications, licensed and implemented.',
    tagline: 'Modern workplace, cloud and business applications',
    solutions: [
      { name: 'Microsoft 365', detail: 'Email, Teams, Office apps and secure collaboration.', icon: `${ICONS}/ms-365.svg` },
      { name: 'Microsoft Azure', detail: 'Cloud infrastructure, hybrid connectivity, data and AI services.', icon: `${ICONS}/ms-azure.svg` },
      { name: 'Dynamics 365', detail: 'ERP and CRM for finance, operations, sales and service.', icon: `${ICONS}/ms-dynamics365.svg` },
      { name: 'Microsoft Entra ID', detail: 'Identity and access management.', icon: `${ICONS}/ms-entra.svg` },
      { name: 'Microsoft Defender', detail: 'Threat protection for devices, identities and cloud.', icon: `${ICONS}/ms-defender.svg` },
      { name: 'Power Platform', detail: 'Power BI dashboards, low-code apps and automation.', icon: `${ICONS}/ms-powerplatform.svg` }
    ],
    businessValue: 'Improve collaboration and productivity on a secure, scalable cloud.',
    logoUrl: '/partners/microsoft.svg',
    logoType: 'mark'
  },
  {
    id: 'oracle',
    name: 'Oracle',
    summary: 'Oracle Cloud Infrastructure and enterprise applications.',
    tagline: 'Enterprise applications, databases and cloud infrastructure',
    solutions: [
      { name: 'Oracle Fusion Cloud ERP', detail: 'Finance, procurement and project accounting.', lucideIcon: <Building2 size={22} /> },
      { name: 'Oracle Cloud Infrastructure', detail: 'High-performance compute, storage and networking.', lucideIcon: <Cloud size={22} /> },
      { name: 'Oracle Autonomous Database', detail: 'Self-managing database for mission-critical data.', lucideIcon: <Database size={22} /> },
      { name: 'Primavera', detail: 'Enterprise project and portfolio management.', lucideIcon: <ChartGantt size={22} /> }
    ],
    businessValue: 'Improve operational visibility, process control and database performance.',
    logoUrl: '/partners/oracle.png',
    logoType: 'wordmark',
    accent: '#C74634'
  },
  {
    id: 'google-cloud',
    name: 'Google Cloud',
    summary: 'Cloud platform, data and AI analytics.',
    tagline: 'Cloud platform, data analytics and AI',
    solutions: [
      { name: 'Compute Engine', detail: 'Scalable virtual machines.', icon: `${ICONS}/gcp-compute.svg` },
      { name: 'Google Kubernetes Engine', detail: 'Managed Kubernetes for containerised apps.', icon: `${ICONS}/gcp-gke.svg` },
      { name: 'BigQuery', detail: 'Serverless data warehouse for large-scale analytics.', icon: `${ICONS}/gcp-bigquery.svg` },
      { name: 'Vertex AI', detail: 'Build, deploy and scale AI and machine-learning models.', icon: `${ICONS}/gcp-vertexai.svg` },
      { name: 'Google Workspace', detail: 'Gmail, Drive, Meet and team collaboration.', icon: `${ICONS}/gcp-workspace.png` }
    ],
    businessValue: 'Turn data into insight and bring AI into everyday operations.',
    logoUrl: '/partners/google-cloud.webp',
    logoType: 'mark'
  },
  {
    id: 'aws',
    name: 'Amazon Web Services',
    summary: 'Scalable cloud infrastructure and services.',
    tagline: 'Cloud infrastructure, databases and AI services',
    solutions: [
      { name: 'Amazon EC2', detail: 'Elastic, on-demand compute capacity.', icon: `${ICONS}/aws-ec2.svg` },
      { name: 'Amazon S3', detail: 'Durable object storage, backup and archiving.', icon: `${ICONS}/aws-s3.svg` },
      { name: 'Amazon RDS', detail: 'Managed relational databases, including Aurora.', icon: `${ICONS}/aws-rds.svg` },
      { name: 'Amazon Bedrock', detail: 'Build generative AI applications.', icon: `${ICONS}/aws-bedrock.svg` },
      { name: 'Amazon SageMaker', detail: 'Build, train and deploy machine-learning models.', icon: `${ICONS}/aws-sagemaker.svg` }
    ],
    businessValue: 'Build resilient digital services that scale with demand.',
    logoUrl: '/partners/aws.webp',
    logoType: 'wordmark'
  },
  {
    id: 'sophos',
    name: 'Sophos',
    summary: 'Endpoint, network security, XDR, managed detection and response.',
    tagline: 'Endpoint, network and managed security',
    solutions: [
      { name: 'Sophos Endpoint', detail: 'Endpoint protection with EDR and XDR (formerly Intercept X).', lucideIcon: <ShieldCheck size={22} /> },
      { name: 'Sophos Firewall', detail: 'Next-generation network firewall.', lucideIcon: <BrickWall size={22} /> },
      { name: 'Sophos MDR', detail: '24/7 managed detection and response.', lucideIcon: <Radar size={22} /> },
      { name: 'Sophos ZTNA', detail: 'Zero-trust access to business applications.', lucideIcon: <KeyRound size={22} /> },
      { name: 'Sophos Email', detail: 'Protection against phishing and email threats.', lucideIcon: <MailCheck size={22} /> }
    ],
    businessValue: 'Protect users, devices and business systems around the clock.',
    logoUrl: '/partners/sophos.svg',
    logoType: 'mark',
    accent: '#2066AF'
  },
  {
    id: 'checkpoint',
    name: 'Check Point',
    summary: 'Firewalls and advanced threat prevention.',
    tagline: 'Network, cloud and workspace security',
    solutions: [
      { name: 'Quantum', detail: 'Network security gateways and firewalls.', lucideIcon: <Network size={22} /> },
      { name: 'CloudGuard', detail: 'Security for cloud workloads and networks.', lucideIcon: <CloudCog size={22} /> },
      { name: 'Harmony', detail: 'Protection for endpoints, email, browsers and mobile.', lucideIcon: <MonitorSmartphone size={22} /> },
      { name: 'Infinity Platform', detail: 'Unified security management with AI threat intelligence.', lucideIcon: <InfinityIcon size={22} /> }
    ],
    businessValue: 'Prevent attacks before they reach your network, cloud or users.',
    logoUrl: '/partners/checkpoint.webp',
    logoType: 'wordmark',
    logoHeight: 'h-11 2xl:h-12 min-[1800px]:h-14',
    accent: '#E5007E'
  },
  {
    id: 'dpanalytics',
    name: 'DPAnalytics',
    summary: 'Custom software, AI and data analytics.',
    tagline: 'Custom software, AI and analytics',
    solutions: [
      { name: 'Custom Application Software', detail: 'Applications built around your business processes.', lucideIcon: <CodeXml size={22} /> },
      { name: 'AI Solutions', detail: 'Automation and predictive models for better decisions.', lucideIcon: <BrainCircuit size={22} /> },
      { name: 'Data Analytics', detail: 'Data integration, pipelines and reporting.', lucideIcon: <ChartColumn size={22} /> },
      { name: 'Executive Dashboards', detail: 'Real-time KPIs for leadership teams.', lucideIcon: <LayoutDashboard size={22} /> }
    ],
    businessValue: 'Turn complex business data into clear, actionable decisions.',
    logoUrl: '/partners/dpanalytics.png',
    logoType: 'wordmark',
    logoHeight: 'h-12 min-[1800px]:h-14'
  }
];

const HERO_TEXT = 'CyberSys Technologies Limited is an Enterprise Technology Company focused on Digital Transformation, Cybersecurity, Artificial Intelligence (AI), Data Analytics, Cloud Solutions, Intelligent Automation, Digitalization and Managed Services. We design, implement and support specialized technology solutions for organizations across the Oil & Gas, Banking and Financial Services, Healthcare, Real Estate and Manufacturing sectors.';

const CARD_GAP_REM = 1.25;

/** Cards per row, matched to the layout breakpoints (lg: 4, sm: 2, mobile: 1) */
const useColumns = () => {
  const getColumns = () => (window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1);
  const [columns, setColumns] = useState(getColumns);

  useEffect(() => {
    const handleResize = () => setColumns(getColumns());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return columns;
};

/**
 * Becomes true once the element scrolls into view. Held in state (rather than a DOM class)
 * so cards keep their revealed state when the grid re-flows on resize.
 */
const useInView = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
};

const PartnerLogo: React.FC<{ partner: PartnerData }> = ({ partner }) => {
  if (partner.logoType === 'wordmark') {
    return <img src={partner.logoUrl} alt={partner.name} className={`${partner.logoHeight || 'h-9 2xl:h-10 min-[1800px]:h-12'} w-auto max-w-[200px] min-[1800px]:max-w-[240px] object-contain`} />;
  }
  return (
    <span className="flex items-center gap-3">
      <img src={partner.logoUrl} alt="" className="h-9 2xl:h-10 min-[1800px]:h-12 w-auto object-contain" />
      <span className="text-xl 2xl:text-2xl min-[1800px]:text-[1.7rem] font-semibold text-slate-600 tracking-tight">{partner.name}</span>
    </span>
  );
};

const SolutionIcon: React.FC<{ solution: PartnerSolution; partner: PartnerData }> = ({ solution, partner }) => {
  const [failed, setFailed] = useState(false);
  const tile = 'w-12 h-12 flex-shrink-0 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center';

  if (solution.lucideIcon) {
    // Outline icon in the partner's brand colour (logo blue for our own services)
    const accent = partner.accent || '#2082A6';
    return (
      <div className={tile} style={{ color: accent }}>
        {solution.lucideIcon}
      </div>
    );
  }
  // Fall back to the partner's own mark if a product logo is unavailable
  const src = !solution.icon || failed ? partner.logoUrl : solution.icon;
  return (
    <div className={`${tile} p-2`}>
      <img src={src} alt="" className="max-w-full max-h-full object-contain" onError={() => setFailed(true)} />
    </div>
  );
};

interface PartnerEcosystemProps {
  onPageChange: (p: Page) => void;
}

const PartnerEcosystem: React.FC<PartnerEcosystemProps> = ({ onPageChange }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const columns = useColumns();
  const panelRef = useRef<HTMLDivElement>(null);
  const [gridRef, gridInView] = useInView<HTMLDivElement>();

  const selected = PARTNERS.find(p => p.id === selectedId) || null;

  // Keep the opened panel in view, mainly for single-column (mobile) layouts
  useEffect(() => {
    if (selectedId && panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [selectedId]);

  const rows: PartnerData[][] = [];
  for (let i = 0; i < PARTNERS.length; i += columns) {
    rows.push(PARTNERS.slice(i, i + columns));
  }

  const cardBasis = `calc((100% - ${(columns - 1) * CARD_GAP_REM}rem) / ${columns})`;

  return (
    <section id="partner-ecosystem" className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 2xl:pb-24 bg-white">
      {/* Faint pulsing network behind the headline and partner grid */}
      <NetworkBackdrop />
      <div className="relative max-w-[1440px] 2xl:max-w-[1600px] min-[1800px]:max-w-[1880px] mx-auto px-6 sm:px-12 md:px-16 2xl:px-24">

        {/* Hero: headline, company summary and the two main actions, centred */}
        <div className="text-center mb-20 lg:mb-28 2xl:mb-32 animate-hero-rise">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-brand-text leading-[1.1] uppercase">
            Global Technology. <br />
            <span className="text-brand-primary">Connected by CyberSys.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg 2xl:text-xl text-brand-muted font-medium leading-relaxed">
            {HERO_TEXT}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => onPageChange('contact')}
              className="px-7 py-3.5 bg-brand-action hover:bg-brand-deep text-white rounded font-semibold text-[11px] uppercase tracking-[0.15em] flex items-center justify-center gap-2.5 transition-colors cursor-pointer"
            >
              Request Consultation <ArrowRight size={15} />
            </button>
            <button
              onClick={() => onPageChange('solutions')}
              className="px-7 py-3.5 bg-white text-brand-text border-2 border-slate-200 hover:border-brand-primary hover:text-brand-primary rounded font-semibold text-[11px] uppercase tracking-[0.15em] transition-colors cursor-pointer"
            >
              Explore Solutions
            </button>
          </div>
        </div>

        {/* Partner grid: the detail panel opens directly beneath the row of the selected card */}
        <div ref={gridRef} className="space-y-5">
          {rows.map((row, rowIndex) => {
            const rowHasSelection = !!selected && row.some(p => p.id === selected.id);
            return (
              <React.Fragment key={rowIndex}>
                <div className="flex justify-center" style={{ gap: `${CARD_GAP_REM}rem` }}>
                  {row.map(partner => {
                    const isSelected = partner.id === selectedId;
                    const order = PARTNERS.indexOf(partner);
                    return (
                      <div
                        key={partner.id}
                        style={{ flex: `0 0 ${cardBasis}`, transitionDelay: gridInView ? `${order * 80}ms` : '0ms' }}
                        className={`reveal-cascade ${gridInView ? 'active' : ''}`}
                      >
                      <button
                        type="button"
                        onClick={() => setSelectedId(isSelected ? null : partner.id)}
                        aria-expanded={isSelected}
                        aria-controls="partner-detail"
                        className={`w-full h-full text-left bg-white rounded-xl border p-7 2xl:p-8 min-[1800px]:p-10 flex flex-col justify-between min-h-[200px] min-[1800px]:min-h-[250px] cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_50px_-30px_rgba(32,130,166,0.45)] ${
                          isSelected
                            ? 'border-brand-primary -translate-y-1 shadow-[0_24px_50px_-30px_rgba(32,130,166,0.45)]'
                            : 'border-slate-200 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_14px_32px_-22px_rgba(15,23,42,0.28)] hover:border-brand-primary/50'
                        }`}
                      >
                        <div>
                          <div className="h-12 min-[1800px]:h-14 flex items-center mb-6">
                            <PartnerLogo partner={partner} />
                          </div>
                          <p className="text-base 2xl:text-lg min-[1800px]:text-xl text-brand-muted leading-relaxed">
                            {partner.summary}
                          </p>
                        </div>
                        <span className={`mt-6 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors ${
                          isSelected ? 'text-brand-primary' : 'text-slate-400'
                        }`}>
                          {isSelected ? 'Close' : 'View solutions'}
                          <ChevronDown size={14} className={`transition-transform duration-300 ${isSelected ? 'rotate-180' : ''}`} />
                        </span>
                      </button>
                      </div>
                    );
                  })}
                </div>

                {rowHasSelection && selected && (
                  <div
                    id="partner-detail"
                    ref={panelRef}
                    key={selected.id}
                    className="animate-panel-in relative bg-white rounded-xl border-2 border-brand-secondary scroll-mt-28 overflow-hidden shadow-[0_24px_50px_-30px_rgba(1,203,174,0.45)]"
                  >
                    <div className="relative">
                    {/* Heading */}
                    <div className="flex items-start justify-between gap-6 px-8 sm:px-10 2xl:px-12 pt-8 sm:pt-10 pb-8 border-b border-slate-100">
                      <div className="flex items-center gap-5">
                        <span className="w-14 h-14 2xl:w-16 2xl:h-16 flex-shrink-0 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2.5">
                          <img src={selected.logoUrl} alt="" className="max-w-full max-h-full object-contain" />
                        </span>
                        <div>
                        <h3 className="text-2xl 2xl:text-3xl font-bold text-brand-text leading-tight">
                          {selected.name}
                        </h3>
                        <p className="mt-1 text-base 2xl:text-lg text-brand-primary font-semibold leading-relaxed">
                          {selected.tagline}
                        </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedId(null)}
                        aria-label="Close partner details"
                        className="p-2 -mr-2 rounded-lg text-slate-400 hover:text-brand-text hover:bg-slate-50 transition-colors"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    {/* Solutions */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 px-8 sm:px-10 2xl:px-12 py-10">
                      {selected.solutions.map(solution => (
                        <li key={solution.name} className="flex items-start gap-4">
                          <SolutionIcon solution={solution} partner={selected} />
                          <div>
                            <div className="text-base 2xl:text-lg font-semibold text-brand-text tracking-tight leading-snug">
                              {solution.name}
                            </div>
                            <p className="mt-1 text-sm 2xl:text-base text-brand-muted leading-relaxed">
                              {solution.detail}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    {/* Business impact and next step */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-8 sm:px-10 2xl:px-12 py-7 bg-brand-mist border-t border-slate-100">
                      <div className="border-l-2 border-brand-secondary pl-5">
                        <div className="text-[13px] font-medium uppercase tracking-[0.2em] text-brand-action mb-1">
                          Business Impact
                        </div>
                        <p className="text-sm 2xl:text-base text-brand-text font-semibold leading-relaxed">
                          {selected.businessValue}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => onPageChange('contact')}
                        className="self-start md:self-auto flex-shrink-0 inline-flex items-center gap-2 px-7 py-4 bg-brand-action hover:bg-brand-deep text-white rounded font-semibold text-[11px] 2xl:text-[12px] uppercase tracking-[0.15em] transition-colors cursor-pointer"
                      >
                        Talk to us <ArrowRight size={14} />
                      </button>
                    </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PartnerEcosystem;
