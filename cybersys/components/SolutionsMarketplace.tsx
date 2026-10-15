import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Send, 
  Code2, 
  Cpu, 
  Shield
} from 'lucide-react';
import { Page } from '../types';

export interface MarketplaceItem {
  id: string;
  name: string;
  vendor: string;
  category: 
    | 'Business Productivity' 
    | 'Cloud Infrastructure' 
    | 'Cybersecurity' 
    | 'Enterprise Applications' 
    | 'Custom Software & Automation' 
    | 'Data, Analytics & AI';
  logoUrl?: string;
  customIcon?: React.ReactNode;
  description: string;
  businessBenefit: string;
  keyFeatures: string[];
  ctaLabel: string;
  targetPage: Page;
  featured?: boolean;
}

export const MARKETPLACE_ITEMS: MarketplaceItem[] = [
  {
    id: 'm365',
    name: 'Microsoft 365',
    vendor: 'Microsoft',
    category: 'Business Productivity',
    logoUrl: '/partners/microsoft.svg',
    description: 'Empower teams with business email, collaboration, document sharing, meetings, and productivity tools through Microsoft\'s cloud-based workplace platform.',
    businessBenefit: 'Improve collaboration and everyday productivity.',
    keyFeatures: ['Teams & Exchange Online', 'OneDrive & SharePoint', 'Intune Mobile Security', 'Enterprise Compliance'],
    ctaLabel: 'Explore Microsoft 365',
    targetPage: 'solutions',
    featured: true
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    vendor: 'Microsoft',
    category: 'Cloud Infrastructure',
    logoUrl: '/partners/azure.svg',
    description: 'Build, deploy, and scale applications and infrastructure using Microsoft\'s cloud platform, with security and governance aligned to your organisation\'s requirements.',
    businessBenefit: 'Modernise infrastructure and scale on demand.',
    keyFeatures: ['Azure Virtual Machines & AKS', 'Azure SQL & Managed DBs', 'ExpressRoute Hybrid Connect', 'FinOps Cost Optimization'],
    ctaLabel: 'Explore Azure Solutions',
    targetPage: 'multicloud',
    featured: true
  },
  {
    id: 'aws',
    name: 'Amazon Web Services (AWS)',
    vendor: 'Amazon',
    category: 'Cloud Infrastructure',
    logoUrl: '/partners/aws.png',
    description: 'Access flexible cloud infrastructure, compute, storage, databases, and cloud-native capabilities to support changing business demands.',
    businessBenefit: 'Build resilient, scalable digital services.',
    keyFeatures: ['EC2 & EKS Containers', 'High-Durability S3 Storage', 'Multi-Region High Availability', 'Serverless Lambda APIs'],
    ctaLabel: 'Explore AWS Solutions',
    targetPage: 'multicloud',
    featured: true
  },
  {
    id: 'gcp',
    name: 'Google Cloud Platform',
    vendor: 'Google Cloud',
    category: 'Cloud Infrastructure',
    logoUrl: '/partners/google-cloud.png',
    description: 'Explore cloud infrastructure, data platforms, analytics, and AI capabilities that support modern business applications and data-driven decision-making.',
    businessBenefit: 'Turn technology and data into business value.',
    keyFeatures: ['Compute Engine & GKE', 'BigQuery Modern Warehousing', 'Vertex AI Foundation Models', 'Cloud Security Command'],
    ctaLabel: 'Explore Google Cloud',
    targetPage: 'multicloud',
    featured: true
  },
  {
    id: 'oracle',
    name: 'Oracle Enterprise Applications',
    vendor: 'Oracle',
    category: 'Enterprise Applications',
    logoUrl: '/partners/oracle.png',
    description: 'Support enterprise finance, procurement, project management, and connected business processes through suitable Oracle enterprise solutions.',
    businessBenefit: 'Improve operational visibility and process control.',
    keyFeatures: ['Oracle Cloud ERP / E-Business', 'Primavera EPPM Project Control', 'Autonomous Transaction Processing', 'OCI Interconnect Architecture'],
    ctaLabel: 'Explore Oracle Solutions',
    targetPage: 'solutions',
    featured: true
  },
  {
    id: 'sophos',
    name: 'Sophos Cybersecurity',
    vendor: 'Sophos',
    category: 'Cybersecurity',
    logoUrl: '/partners/sophos.svg',
    description: 'Strengthen your security posture with appropriate endpoint, network, and threat protection solutions delivered through the Sophos ecosystem.',
    businessBenefit: 'Help protect users, devices, and business systems.',
    keyFeatures: ['Intercept X Endpoint with XDR', 'Next-Gen Synchronized Firewalls', '24/7 Managed Threat Response', 'Zero Trust Network Access'],
    ctaLabel: 'Explore Security Solutions',
    targetPage: 'solutions-cybersecurity',
    featured: true
  },
  {
    id: 'custom-software',
    name: 'Custom Software & Automation',
    vendor: 'CyberSys Engineering',
    category: 'Custom Software & Automation',
    customIcon: <Code2 className="text-brand-primary" size={24} />,
    description: 'Engineer high-performance bespoke enterprise web applications, microservices, and secure API gateways tailored to your exact business rules.',
    businessBenefit: 'Eliminate bottlenecks with tailored digital systems.',
    keyFeatures: ['Microservices & Event-Driven APIs', 'Scalable React & Cloud Backends', 'Legacy Database Modernization', 'Automated DevOps CI/CD Pipelines'],
    ctaLabel: 'Explore Custom Software',
    targetPage: 'solutions-software'
  },
  {
    id: 'dpanalytics',
    name: 'DPAnalytics & Enterprise BI',
    vendor: 'DPAnalytics',
    category: 'Data, Analytics & AI',
    logoUrl: '/partners/dpanalytics.png',
    description: 'Transform fragmented business data into actionable executive dashboards, predictive modeling algorithms, and compliance-ready reporting.',
    businessBenefit: 'Convert complex data into strategic yield.',
    keyFeatures: ['Custom C-Suite Dashboards', 'Automated ETL Data Pipelines', 'Predictive ML Yield Models', 'Audited Regulatory Compliance'],
    ctaLabel: 'Explore Analytics & BI',
    targetPage: 'solutions-bi'
  },
  {
    id: 'managed-soc',
    name: '24/7 Managed SOC & Cloud Ops',
    vendor: 'CyberSys Operations',
    category: 'Cybersecurity',
    customIcon: <Shield className="text-brand-primary" size={24} />,
    description: 'Continuous 24/7 security operations center, AI-powered threat hunting, automated incident containment, and multicloud infrastructure management.',
    businessBenefit: 'Guaranteed uptime and proactive cyber defense.',
    keyFeatures: ['Round-the-Clock Threat Monitoring', 'Proactive Incident Remediation', 'CBN / NDPR / ISO Compliance', 'Strict 15-Minute SLA Response'],
    ctaLabel: 'Explore Managed SOC',
    targetPage: 'services-managed'
  },
  {
    id: 'digital-transform',
    name: 'Digital Transformation & OT Modernization',
    vendor: 'CyberSys Solutions',
    category: 'Enterprise Applications',
    customIcon: <Cpu className="text-brand-primary" size={24} />,
    description: 'Connect legacy Operational Technology (OT) and core industrial machinery with agile modern cloud architectures and real-time telemetry.',
    businessBenefit: 'Modernize legacy systems without business disruption.',
    keyFeatures: ['OT / SCADA Cloud Interconnect', 'Real-Time Edge Telemetry', 'Legacy System API Wrappers', 'Enterprise Architecture Roadmap'],
    ctaLabel: 'Explore Digital Transformation',
    targetPage: 'solutions-digital'
  }
];

const CATEGORIES = [
  'All Solutions',
  'Business Productivity',
  'Cloud Infrastructure',
  'Cybersecurity',
  'Enterprise Applications',
  'Custom Software & Automation',
  'Data, Analytics & AI'
] as const;

type CategoryType = (typeof CATEGORIES)[number];

interface SolutionsMarketplaceProps {
  onPageChange: (p: Page) => void;
}

const SolutionsMarketplace: React.FC<SolutionsMarketplaceProps> = ({ onPageChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All Solutions');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [enquiryModalItem, setEnquiryModalItem] = useState<MarketplaceItem | null>(null);

  // Quick Enquiry Form State
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Filter items based on Category & Search Query
  const filteredItems = useMemo(() => {
    return MARKETPLACE_ITEMS.filter((item) => {
      const matchesCategory = 
        selectedCategory === 'All Solutions' || item.category === selectedCategory;
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.vendor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.businessBenefit.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.keyFeatures.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const generatedId = `CS-MKT-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      await fetch('https://formsubmit.co/ajax/info@cybersystechnologies.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          inquiry_id: generatedId,
          solution_requested: enquiryModalItem?.name,
          solution_category: enquiryModalItem?.category,
          vendor: enquiryModalItem?.vendor,
          name: enquiryForm.name,
          email: enquiryForm.email,
          phone: enquiryForm.phone || 'Not provided',
          company: enquiryForm.company || 'Not provided',
          message: enquiryForm.message,
          _subject: `Solutions Marketplace Inquiry: ${enquiryModalItem?.name} [${generatedId}]`
        })
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeEnquiryModal = () => {
    setEnquiryModalItem(null);
    setSubmitted(false);
    setEnquiryForm({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <section id="solutions-marketplace" className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 relative z-10">
        
        {/* Section Identity matching website visual hierarchy */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <h2 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.5em] mb-4">
            Solutions for Modern Business
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-text tracking-tighter uppercase leading-none">
            The Right Technology. <br />
            <span className="text-brand-primary">Real Business Impact.</span>
          </h3>
          <p className="mt-6 text-base sm:text-lg text-brand-muted font-medium leading-relaxed">
            Discover the platforms and digital solutions that help your organisation work smarter, operate securely, and scale with confidence.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="mb-12 space-y-6">
          
          {/* Search bar & count */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search solutions (e.g. Azure, Sophos, M365, ERP, SOC)..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-brand-primary text-sm text-brand-text placeholder-slate-400 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            <div className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <span>Showing</span>
              <span className="text-brand-primary font-black">
                {filteredItems.length}
              </span>
              <span>Solutions</span>
            </div>
          </div>

          {/* Clean Category Tabs */}
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto pb-2 border-b border-slate-100 scrollbar-none">
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              const count = category === 'All Solutions' 
                ? MARKETPLACE_ITEMS.length 
                : MARKETPLACE_ITEMS.filter(item => item.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-5 py-3 text-xs font-black uppercase tracking-[0.16em] whitespace-nowrap transition-all duration-200 flex items-center gap-2 flex-shrink-0 cursor-pointer border-b-2 ${
                    isSelected
                      ? 'border-brand-primary text-brand-primary'
                      : 'border-transparent text-brand-muted hover:text-brand-text'
                  }`}
                >
                  <span>{category}</span>
                  <span className="text-[10px] text-slate-400 font-mono">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Solution Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
            <Filter size={32} className="mx-auto text-slate-300 mb-3" />
            <h4 className="text-lg font-black text-brand-text uppercase mb-1">No solutions match your criteria</h4>
            <p className="text-sm text-brand-muted mb-4">Try clearing your search query or selecting another category.</p>
            <button
              onClick={() => { setSelectedCategory('All Solutions'); setSearchQuery(''); }}
              className="px-6 py-3 bg-brand-primary text-white text-xs font-black uppercase tracking-wider rounded"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="corporate-card rounded-[1.5rem] p-8 flex flex-col justify-between group"
              >
                <div>
                  {/* Top: Logo & Category */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 p-2.5 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      {item.logoUrl ? (
                        <img 
                          src={item.logoUrl} 
                          alt={item.name} 
                          className="max-h-8 max-w-full object-contain"
                          loading="lazy"
                        />
                      ) : (
                        item.customIcon
                      )}
                    </div>

                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary text-right max-w-[170px] truncate mt-1">
                      {item.category}
                    </span>
                  </div>

                  {/* Title & Vendor */}
                  <div className="mb-4">
                    <h3 className="text-xl font-black text-brand-text tracking-tighter uppercase group-hover:text-brand-primary transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 mt-1 block">
                      Partner: {item.vendor}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-brand-muted font-medium leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Business Value (No Stars) */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 mb-6">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary mb-1">
                      Business Value
                    </div>
                    <div className="text-xs font-bold text-brand-text leading-snug">
                      {item.businessBenefit}
                    </div>
                  </div>

                  {/* Capabilities List */}
                  <div className="space-y-2 mb-8">
                    {item.keyFeatures.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-brand-muted font-medium">
                        <CheckCircle2 size={13} className="text-brand-primary flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-6 border-t border-slate-100 flex items-center gap-3">
                  <button
                    onClick={() => onPageChange(item.targetPage)}
                    className="flex-1 py-3 px-4 bg-brand-primary hover:bg-brand-accent text-white rounded font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-md shadow-brand-primary/10"
                  >
                    <span>{item.ctaLabel}</span>
                    <ArrowRight size={13} />
                  </button>

                  <button
                    onClick={() => setEnquiryModalItem(item)}
                    className="py-3 px-4 border border-slate-200 hover:border-brand-primary text-brand-text hover:text-brand-primary bg-white rounded font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center"
                    title="Enquire About This Solution"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* QUICK ENQUIRY MODAL */}
      {enquiryModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={closeEnquiryModal}
              className="absolute right-6 top-6 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 size={30} />
                </div>
                <h3 className="text-2xl font-black text-brand-text uppercase tracking-tight">
                  Enquiry Submitted
                </h3>
                <p className="text-sm text-brand-muted max-w-sm mx-auto font-medium">
                  Thank you. An enterprise specialist for <strong>{enquiryModalItem.name}</strong> will review your requirements and respond shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={closeEnquiryModal}
                    className="px-8 py-3 bg-brand-primary text-white text-xs font-black uppercase tracking-wider rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6 pb-4 border-b border-slate-100">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-primary">
                    Solution Enquiry
                  </span>
                  <h3 className="text-2xl font-black text-brand-text tracking-tighter uppercase mt-1">
                    {enquiryModalItem.name}
                  </h3>
                  <p className="text-xs text-brand-muted mt-1 font-medium">
                    {enquiryModalItem.category} • Partner: {enquiryModalItem.vendor}
                  </p>
                </div>

                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={enquiryForm.name}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                      placeholder="e.g. Adebayo Ogunlesi"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={enquiryForm.email}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={enquiryForm.phone}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                        placeholder="+234..."
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1.5">
                      Organisation / Company
                    </label>
                    <input
                      type="text"
                      value={enquiryForm.company}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, company: e.target.value })}
                      placeholder="Enterprise / Government entity"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1.5">
                      Requirements or Scope
                    </label>
                    <textarea
                      rows={3}
                      value={enquiryForm.message}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                      placeholder={`Tell us about your ${enquiryModalItem.name} requirements or timeline...`}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-primary"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        closeEnquiryModal();
                        onPageChange('contact');
                      }}
                      className="text-xs text-brand-primary hover:underline font-bold"
                    >
                      Go to Full Contact Page →
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-brand-primary hover:bg-brand-accent text-white font-black text-[11px] uppercase tracking-[0.2em] rounded transition-all flex items-center gap-2 shadow-md disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                      <Send size={13} />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default SolutionsMarketplace;
