
import React from 'react';
import { Award, BrainCircuit, Cloud, GraduationCap, LayoutGrid, MonitorCog, ShieldCheck, Target, Users } from 'lucide-react';
import { NavLink } from './types';
import { INDUSTRIES } from './data/industries';

// Main line, also reachable on WhatsApp
export const WHATSAPP_URL = 'https://wa.me/2348025955618';

export const NAV_LINKS: NavLink[] = [
  {
    label: 'About Us',
    path: 'company',
    subLinks: [
      { label: 'Who We Are', icon: <Users />, path: 'company', anchor: 'who-we-are', description: 'Our story and what we do.' },
      { label: 'Mission & Vision', icon: <Target />, path: 'company', anchor: 'mission-vision', description: 'What drives us and where we are going.' },
      { label: 'Why CyberSys', icon: <Award />, path: 'company', anchor: 'differentiators', description: 'Global standards, local resilience.' },
    ]
  },
  {
    label: 'Solutions',
    path: 'solutions',
    subLinks: [
      { label: 'Cloud & Infrastructure', icon: <Cloud />, path: 'services-cloud', description: 'Hybrid, private and multicloud platforms built to scale.' },
      { label: 'Cybersecurity', icon: <ShieldCheck />, path: 'solutions-cybersecurity', description: 'Threat protection, identity and compliance by design.' },
      { label: 'AI & Data Analytics', icon: <BrainCircuit />, path: 'solutions-bi', description: 'Dashboards, predictive models and AI that drive decisions.' },
      { label: 'Business Applications & ERP', icon: <LayoutGrid />, path: 'solutions-software', description: 'ERP, enterprise applications and custom software.' },
      { label: 'IT & Managed Services', icon: <MonitorCog />, path: 'services-managed', description: 'Monitoring, support and operational management.' },
      { label: 'Training & Consultancy', icon: <GraduationCap />, path: 'services-training', description: 'Advisory and partner-backed enablement.' },
    ]
  },
  {
    label: 'Industries',
    path: 'industries',
    subLinks: [
      ...INDUSTRIES.map(industry => ({ label: industry.name, path: industry.page, description: industry.summary, icon: industry.icon })),
    ]
  },
  { label: 'Careers', path: 'careers' },
  { label: 'Contact', path: 'contact' },
];

// The C.O.R.E. value proposition, shown on About Us
export const CORE_PILLARS = [
  {
    letter: 'C',
    title: 'Compliance & Control',
    desc: 'Built-in alignment with regulatory and compliance requirements. Audit-ready evidence.'
  },
  {
    letter: 'O',
    title: 'Optimized Multi-Cloud',
    desc: 'We match each workload to the right cloud partner (Azure, AWS, Oracle or Google Cloud) based on your needs, with costs kept under control.'
  },
  {
    letter: 'R',
    title: 'Resilient Security',
    desc: 'Nigeria-based, 24/7 Managed SOC with AI threat hunting and proactive defense.'
  },
  {
    letter: 'E',
    title: 'Enterprise Analytics & AI',
    desc: 'Real-time dashboards, predictive ML embedded in ERP and cloud workloads.'
  }
];
