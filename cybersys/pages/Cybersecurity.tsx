import React from 'react';
import { ArrowRight, BrickWall, CloudCog, FileCheck, KeyRound, Laptop, MailCheck, Radar } from 'lucide-react';
import { Page } from '../types';
import { SectionHeader, SplitHero, icon, useReveal } from '../components/SolutionBlocks';

interface PartnerProduct {
  name: string;
  logo: string;
}

const SOPHOS = '/partners/sophos.svg';
const CHECK_POINT = '/partners/checkpoint.webp';
const MICROSOFT = '/partners/microsoft.svg';
const FORTINET = '/partners/fortinet.svg';
const PALO_ALTO = '/partners/paloalto.svg';
const HUAWEI = '/partners/huawei.webp';

// Capabilities mapped to the partner products CyberSys Technologies delivers
const CAPABILITIES: { icon: React.ReactNode; title: string; desc: string; products: PartnerProduct[] }[] = [
  {
    icon: <Laptop />,
    title: 'Endpoint Protection & XDR',
    desc: 'Stop ransomware, malware and exploits on every laptop, server and mobile device, with detection and response across them.',
    products: [
      { name: 'Sophos Endpoint', logo: SOPHOS },
      { name: 'Palo Alto Networks Cortex XDR', logo: PALO_ALTO },
      { name: 'Check Point Harmony Endpoint', logo: CHECK_POINT },
      { name: 'Microsoft Defender for Endpoint', logo: MICROSOFT }
    ]
  },
  {
    icon: <BrickWall />,
    title: 'Network & Firewall Security',
    desc: 'Next-generation firewalls and gateways that inspect traffic, block intrusions and secure branch and data-centre networks.',
    products: [
      { name: 'Fortinet FortiGate', logo: FORTINET },
      { name: 'Palo Alto Networks NGFW', logo: PALO_ALTO },
      { name: 'Sophos Firewall', logo: SOPHOS },
      { name: 'Check Point Quantum', logo: CHECK_POINT },
      { name: 'Huawei HiSecEngine', logo: HUAWEI }
    ]
  },
  {
    icon: <CloudCog />,
    title: 'Cloud Security',
    desc: 'Posture management and workload protection across Azure, AWS, Google Cloud and Oracle Cloud environments.',
    products: [
      { name: 'Palo Alto Networks Cortex Cloud', logo: PALO_ALTO },
      { name: 'Check Point CloudGuard', logo: CHECK_POINT },
      { name: 'Microsoft Defender for Cloud', logo: MICROSOFT }
    ]
  },
  {
    icon: <KeyRound />,
    title: 'Identity & Zero Trust Access',
    desc: 'Verify every user and device before granting access, with single sign-on, MFA and zero-trust access to applications.',
    products: [
      { name: 'Microsoft Entra ID', logo: MICROSOFT },
      { name: 'Palo Alto Networks Prisma SASE', logo: PALO_ALTO },
      { name: 'Fortinet FortiSASE', logo: FORTINET },
      { name: 'Sophos ZTNA', logo: SOPHOS }
    ]
  },
  {
    icon: <MailCheck />,
    title: 'Email & Collaboration Security',
    desc: 'Block phishing, business email compromise and malicious attachments across email and collaboration tools.',
    products: [
      { name: 'Sophos Email', logo: SOPHOS },
      { name: 'Check Point Harmony Email', logo: CHECK_POINT },
      { name: 'Fortinet FortiMail', logo: FORTINET },
      { name: 'Microsoft Defender for Office 365', logo: MICROSOFT }
    ]
  },
  {
    icon: <Radar />,
    title: 'Managed Detection & Response',
    desc: '24/7 threat hunting, monitoring and incident response from security analysts, backed by global threat intelligence.',
    products: [
      { name: 'Sophos MDR', logo: SOPHOS },
      { name: 'Palo Alto Networks Cortex XSIAM', logo: PALO_ALTO },
      { name: 'Check Point Infinity ThreatCloud AI', logo: CHECK_POINT }
    ]
  }
];

const STANDARDS = ['NDPR / NDPA', 'CBN Risk-Based Cybersecurity Framework', 'ISO/IEC 27001', 'PCI-DSS', 'SOC 2'];

const Cybersecurity: React.FC<{ onPageChange: (p: Page) => void }> = ({ onPageChange }) => {
  // Scroll reveals: capabilities cascade, then the compliance panel rises in
  useReveal();

  return (
    <div className="bg-white overflow-hidden">
      <SplitHero
        onPageChange={onPageChange}
        eyebrow="Threat Protection & Governance"
        title={<>Cyber<span className="text-brand-primary">security</span></>}
        intro="CyberSys Technologies designs, implements and manages enterprise-grade security that protects systems, data and identities against evolving threats and regulatory demands."
        cta="Talk to a Security Architect"
        image="/hero/security-lock.webp"
        imageAlt="Padlock linked to laptop, fingerprint, cloud and email security icons"
        imagePosition="object-center"
      />

      {/* 2. CORE CAPABILITIES with the partner products behind each, plus standards */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16">
          <SectionHeader
            eyebrow="Core Capabilities"
            title={<>Layered Protection, <span className="text-brand-primary">End-to-End</span></>}
            text="We design, deploy and manage each layer of your defence with proven technology from our security partners."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, i) => (
              <div
                key={cap.title}
                className="reveal-cascade h-full flex flex-col bg-white p-6 rounded-[1.25rem] border border-slate-200 group transition-all duration-500 hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-[0_24px_50px_-30px_rgba(32,130,166,0.45)]"
                style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-mist text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                  {icon(cap.icon, 22)}
                </div>
                <h4 className="mt-5 text-lg font-semibold text-brand-text leading-tight">{cap.title}</h4>
                <p className="mt-2 text-sm md:text-base text-brand-muted font-medium leading-relaxed flex-grow">{cap.desc}</p>
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <div className="text-[13px] font-medium uppercase tracking-[0.2em] text-slate-400 mb-3">Delivered with</div>
                  <ul className="space-y-2.5">
                    {cap.products.map(product => (
                      <li key={product.name} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                        <span className="w-16 h-5 flex-shrink-0 flex items-center">
                          <img src={product.logo} alt="" className="max-h-full max-w-full object-contain" />
                        </span>
                        {product.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Risk, compliance & governance: full-width panel closing the section as its call to action */}
          <div className="mt-10 rounded-[1.25rem] bg-brand-mist border border-brand-primary/10 overflow-hidden reveal-on-scroll">
            <div className="h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-mint"></div>
            <div className="p-7 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="w-12 h-12 rounded-xl bg-white text-brand-primary flex items-center justify-center">
                  <FileCheck size={24} strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 text-xl lg:text-2xl font-semibold text-brand-text">Risk, Compliance & Governance</h3>
                <p className="mt-3 text-base text-brand-muted leading-relaxed font-medium">
                  Security assessments, policies and audit-ready reporting aligned with the regulations and standards that apply to your sector.
                </p>
              </div>
              <ul className="lg:col-span-4 space-y-3">
                {STANDARDS.map(standard => (
                  <li key={standard} className="flex items-center gap-3 text-sm font-bold text-brand-text">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary flex-shrink-0"></span>
                    {standard}
                  </li>
                ))}
              </ul>
              <div className="lg:col-span-3">
                <button
                  onClick={() => onPageChange('contact')}
                  className="w-full inline-flex items-center justify-between gap-3 px-6 py-4 bg-brand-action hover:bg-brand-deep text-white rounded font-semibold text-[11px] uppercase tracking-[0.15em] transition-colors"
                >
                  Request a Security Assessment <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;
