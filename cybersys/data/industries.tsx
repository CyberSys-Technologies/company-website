import React from 'react';
import {
  Activity, Boxes, Building2, ChartLine, ClipboardList, Cloud, CloudCog, Construction, FileLock,
  FileSearch, Fuel, Gauge, HardHat, HeartPulse, KeyRound, Landmark, Laptop, LayoutGrid,
  MailCheck, MessagesSquare, Network, Radar, ShieldCheck, Stethoscope,
  Users, Wrench, BrainCircuit, MonitorCog, GraduationCap
} from 'lucide-react';
import { Page } from '../types';

export interface IndustryItem {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export interface IndustrySolution {
  path: Page;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Industry {
  /** Route for the industry's own page */
  page: Page;
  name: string;
  icon: React.ReactNode;
  /** One line for menus and overview cards */
  summary: string;
  /** Opening paragraph on the industry page */
  intro: string;
  image: string;
  imagePosition?: string;
  /** Hero shows the whole photo (zoomed out) on a blurred copy of itself */
  fullPhoto?: boolean;
  challenges: IndustryItem[];
  /** The leading need for the sector, shown as the featured solution */
  lead: IndustrySolution & { points: string[] };
  /** Supporting solution areas */
  solutions: IndustrySolution[];
  /** Sector-specific highlight, shown on deep blue */
  spotlight: { eyebrow: string; title: string; accent: string; intro: string; items: IndustryItem[] };
}

const SOL = {
  cloud: { path: 'services-cloud' as Page, icon: <Cloud />, title: 'Cloud & Infrastructure' },
  cyber: { path: 'solutions-cybersecurity' as Page, icon: <ShieldCheck />, title: 'Cybersecurity' },
  ai: { path: 'solutions-bi' as Page, icon: <BrainCircuit />, title: 'AI & Data Analytics' },
  erp: { path: 'solutions-software' as Page, icon: <LayoutGrid />, title: 'Business Applications & ERP' },
  managed: { path: 'services-managed' as Page, icon: <MonitorCog />, title: 'IT & Managed Services' },
  training: { path: 'services-training' as Page, icon: <GraduationCap />, title: 'Training & Consultancy' }
};

// Order follows the business's priority sectors
export const INDUSTRIES: Industry[] = [
  {
    page: 'industries-oil-gas',
    name: 'Oil & Gas',
    icon: <Fuel />,
    summary: 'Secure operations and data-driven productivity.',
    intro: 'From the field to the boardroom, CyberSys Technologies helps oil and gas operators secure critical infrastructure and use modern data, AI and cloud platforms to raise productivity across upstream, midstream and downstream operations.',
    image: '/industries/oil-gas.webp',
    imagePosition: 'object-center',
    fullPhoto: true,
    challenges: [
      { title: 'Unplanned Downtime', description: 'Ageing assets fail without warning, halting production and driving up maintenance costs.' },
      { title: 'Data Trapped in Silos', description: 'Sensor, SCADA, maintenance and finance data rarely come together in one view.' },
      { title: 'Expanding Attack Surface', description: 'Connecting operational technology to IT networks exposes critical systems to cyber threats.' },
      { title: 'Complex Capital Projects', description: 'Large, multi-year projects are hard to schedule, track and keep on budget.' }
    ],
    lead: {
      ...SOL.ai,
      description: 'Put operational data to work with analytics and AI that predict problems, optimise output and support faster, better-informed decisions.',
      points: ['Predictive maintenance', 'Production optimisation', 'Real-time operational dashboards', 'HSE and incident analytics']
    },
    solutions: [
      { ...SOL.cyber, description: 'OT and SCADA network protection, firewalls and threat monitoring, delivered with our security partners.' },
      { ...SOL.cloud, description: 'Resilient cloud platforms that keep field and enterprise data available and connected.' },
      { ...SOL.erp, description: 'Oracle Primavera P6 and Fusion ERP for project controls, procurement and asset management.' },
      { ...SOL.training, description: 'Digital transformation roadmaps that prioritise the highest-value use cases.' }
    ],
    spotlight: {
      eyebrow: 'Modern Operations',
      title: 'Higher Productivity with',
      accent: 'Data & AI',
      intro: 'Modern data and AI tools help operators do more with the assets they already have, safely and at lower cost.',
      items: [
        { icon: <Wrench />, title: 'Predictive Maintenance', description: 'Use sensor and maintenance history to anticipate equipment failures before they cause downtime.' },
        { icon: <Gauge />, title: 'Production Optimisation', description: 'Analyse well and plant data to find the settings and schedules that improve output.' },
        { icon: <Activity />, title: 'Remote Monitoring', description: 'Connect field assets to the cloud for real-time visibility from any location.' },
        { icon: <FileSearch />, title: 'Intelligent Document Processing', description: 'Use AI to extract insight from reports, permits, contracts and inspection records.' },
        { icon: <HardHat />, title: 'HSE Analytics', description: 'Spot safety trends and leading indicators early, and simplify regulatory reporting.' },
        { icon: <Boxes />, title: 'Inventory & Supply Forecasting', description: 'Forecast spares and materials demand to cut stock-outs and excess inventory.' }
      ]
    }
  },
  {
    page: 'industries-banking',
    name: 'Banking & Financial Services',
    icon: <Landmark />,
    summary: 'Security-first platforms for digital banking.',
    intro: 'Banks and fintechs run on trust. CyberSys Technologies puts cybersecurity at the centre, alongside resilient cloud platforms and data, so financial institutions can innovate safely and stay compliant.',
    image: '/industries/banking-atm.webp',
    imagePosition: 'object-[62%_center]',
    challenges: [
      { title: 'Fraud & Cyber Threats', description: 'Phishing, account takeover and ransomware target customers, staff and core systems.' },
      { title: 'Regulatory Pressure', description: 'CBN guidelines, the Nigeria Data Protection Act and PCI-DSS demand demonstrable controls.' },
      { title: 'Always-On Channels', description: 'Mobile, web and card channels must stay available and fast around the clock.' },
      { title: 'Legacy Core Systems', description: 'Older platforms slow down new products and complicate integration.' }
    ],
    lead: {
      ...SOL.cyber,
      description: 'Layered protection for customers, staff and core systems, aligned with the CBN Risk-Based Cybersecurity Framework.',
      points: ['Zero trust & identity (MFA, single sign-on)', 'Endpoint, email & network protection', 'Detection & response with our partners', 'Compliance and audit readiness']
    },
    solutions: [
      { ...SOL.cloud, description: 'Highly available platforms and disaster recovery for digital channels and core workloads.' },
      { ...SOL.ai, description: 'Fraud, risk and customer analytics, with dashboards for regulatory reporting.' },
      { ...SOL.erp, description: 'Finance, procurement and CRM platforms that connect the back office.' },
      { ...SOL.training, description: 'Security and compliance readiness advisory for boards and IT teams.' }
    ],
    spotlight: {
      eyebrow: 'Security at the Core',
      title: 'Protection at',
      accent: 'Every Layer',
      intro: 'Financial institutions need defence in depth. We design, implement and manage each layer with proven technology from our security partners.',
      items: [
        { icon: <KeyRound />, title: 'Identity & Access', description: 'Strong authentication and least-privilege access for staff and partners.' },
        { icon: <Laptop />, title: 'Endpoints', description: 'Protection for every laptop, server and mobile device.' },
        { icon: <Network />, title: 'Network', description: 'Next-generation firewalls and secure branch connectivity.' },
        { icon: <MailCheck />, title: 'Email & Collaboration', description: 'Defence against phishing and business email compromise.' },
        { icon: <CloudCog />, title: 'Cloud', description: 'Posture management and workload protection across clouds.' },
        { icon: <Radar />, title: 'Detection & Response', description: 'Threat detection and incident response, delivered with our partners.' }
      ]
    }
  },
  {
    page: 'industries-real-estate',
    name: 'Real Estate',
    icon: <Building2 />,
    summary: 'Connected systems for projects and properties.',
    intro: 'From development to property management, CyberSys Technologies helps real estate firms run projects, properties and finances on connected, secure digital platforms.',
    image: '/industries/real-estate.webp',
    challenges: [
      { title: 'Fragmented Information', description: 'Project, sales, lease and finance data sit in separate tools and spreadsheets.' },
      { title: 'Cost Control on Developments', description: 'Budgets and schedules slip without clear, up-to-date project visibility.' },
      { title: 'Distributed Teams', description: 'Site, sales and head-office teams need to collaborate securely from anywhere.' },
      { title: 'Customer Data Protection', description: 'Buyer and tenant records must be handled securely and in line with data-protection law.' }
    ],
    lead: {
      ...SOL.erp,
      description: 'Connect projects, finance, sales and property operations so everyone works from the same information.',
      points: ['Oracle Primavera for development projects', 'ERP for property finance & procurement', 'Dynamics 365 for sales & tenant relationships', 'Microsoft 365 for secure collaboration']
    },
    solutions: [
      { ...SOL.cloud, description: 'Cost-optimised cloud environments sized to the business.' },
      { ...SOL.ai, description: 'Portfolio, occupancy and sales performance dashboards.' },
      { ...SOL.cyber, description: 'Protection for customer data, payments and email.' },
      { ...SOL.managed, description: 'Day-to-day IT support across offices and sites.' }
    ],
    spotlight: {
      eyebrow: 'Connected Property',
      title: 'From First Plan to',
      accent: 'Final Handover',
      intro: 'One connected view of every project and property, across the full real estate lifecycle.',
      items: [
        { icon: <Construction />, title: 'Project & Construction Control', description: 'Schedules, costs and contractors tracked in one place.' },
        { icon: <ClipboardList />, title: 'Property & Lease Management', description: 'Units, leases, renewals and maintenance requests organised.' },
        { icon: <Users />, title: 'Sales & Customer Relationships', description: 'Leads, buyers and tenants managed from first enquiry onwards.' },
        { icon: <ChartLine />, title: 'Portfolio Analytics', description: 'Performance, occupancy and returns visible at a glance.' }
      ]
    }
  },
  {
    page: 'industries-healthcare',
    name: 'Healthcare',
    icon: <HeartPulse />,
    summary: 'Protecting patient data and service continuity.',
    intro: 'CyberSys Technologies helps hospitals, clinics and health providers protect patient data and run reliable digital services, so clinicians can focus on care.',
    image: '/industries/healthcare.webp',
    imagePosition: 'object-[60%_center]',
    challenges: [
      { title: 'Sensitive Patient Data', description: 'Health records are among the most valuable, and most targeted, data there is.' },
      { title: 'Ransomware Risk', description: 'Attacks on health providers can lock systems and disrupt care.' },
      { title: 'Downtime Affects Care', description: 'When clinical systems are unavailable, patients feel it immediately.' },
      { title: 'Disconnected Systems', description: 'Records, billing and supplies often live in separate, unlinked tools.' }
    ],
    lead: {
      ...SOL.cyber,
      description: 'Keep patient data private and clinical systems running with layered security and tested recovery.',
      points: ['Access control for patient records', 'Ransomware and endpoint protection', 'Secure email and collaboration', 'Data-protection compliance support']
    },
    solutions: [
      { ...SOL.cloud, description: 'Reliable cloud platforms with backup and disaster recovery.' },
      { ...SOL.ai, description: 'Patient flow, capacity and operational dashboards.' },
      { ...SOL.erp, description: 'Finance, procurement and supply management for health providers.' },
      { ...SOL.managed, description: 'Monitoring and support that keeps clinical IT healthy.' }
    ],
    spotlight: {
      eyebrow: 'Digital Health',
      title: 'Better Care, Delivered',
      accent: 'Securely',
      intro: 'Technology that supports clinicians and administrators while keeping patient information safe.',
      items: [
        { icon: <FileLock />, title: 'Secure Patient Records', description: 'Right-person, right-time access to health information.' },
        { icon: <Stethoscope />, title: 'Reliable Clinical Systems', description: 'Resilient platforms with backup and recovery built in.' },
        { icon: <Activity />, title: 'Operational Insight', description: 'Dashboards for patient flow, capacity and performance.' },
        { icon: <MessagesSquare />, title: 'Secure Collaboration', description: 'Teams, email and file sharing protected end to end.' }
      ]
    }
  }
];
