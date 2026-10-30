import React from 'react';
import { BrainCircuit, Cloud, GraduationCap, LayoutGrid, MonitorCog, ShieldCheck } from 'lucide-react';
import { Page } from '../types';

export interface SolutionCategory {
  title: string;
  icon: React.ReactNode;
  /** Page the category opens (matches the Solutions menu) */
  path: Page;
  summary: string;
  capabilities: string[];
}

// The solutions catalogue, in menu order. Capabilities draw on the partner products
// shown on the home page (Microsoft, Oracle, Google Cloud, AWS, Sophos, Check Point, DPAnalytics).
export const SOLUTION_CATALOGUE: SolutionCategory[] = [
  {
    title: 'Cloud & Infrastructure',
    icon: <Cloud />,
    path: 'services-cloud',
    summary: 'Design, implement and run resilient hybrid, private and multicloud platforms across Microsoft Azure, AWS, Google Cloud and Oracle Cloud.',
    capabilities: ['Cloud migration & modernisation', 'Hybrid & multicloud architecture', 'Disaster recovery & backup', 'Cloud cost optimisation (FinOps)', 'Infrastructure monitoring']
  },
  {
    title: 'Cybersecurity',
    icon: <ShieldCheck />,
    path: 'solutions-cybersecurity',
    summary: 'Design, deploy and manage layered security that protects systems, data and identities against evolving threats.',
    capabilities: ['Security architecture & Zero Trust', 'Endpoint, network & email security', 'Threat detection & response (SOC/MDR)', 'Identity & access management', 'Risk, compliance & governance']
  },
  {
    title: 'AI & Data Analytics',
    icon: <BrainCircuit />,
    path: 'solutions-bi',
    summary: 'Build and implement the dashboards, predictive analytics and AI that turn enterprise data into everyday decisions.',
    capabilities: ['Executive dashboards & BI', 'Data integration & pipelines', 'Data warehousing & lakes', 'Predictive analytics & machine learning', 'AI & intelligent automation']
  },
  {
    title: 'Business Applications & ERP',
    icon: <LayoutGrid />,
    path: 'solutions-software',
    summary: 'Implement and integrate the enterprise applications that run finance, operations, projects and collaboration, plus custom software where off-the-shelf falls short.',
    capabilities: ['Oracle Fusion Cloud ERP', 'Microsoft Dynamics 365', 'Primavera project management', 'Microsoft 365 & collaboration', 'Custom application development']
  },
  {
    title: 'IT & Managed Services',
    icon: <MonitorCog />,
    path: 'services-managed',
    summary: 'Keep systems secure, available and up to date with monitoring, support and operational management, delivered alongside our technology partners.',
    capabilities: ['Monitoring & support', 'Patching & updates', 'Backup management', 'Managed security with partners', 'Licensing & asset management']
  },
  {
    title: 'Training & Consultancy',
    icon: <GraduationCap />,
    path: 'services-training',
    summary: 'Advisory and partner-backed enablement that help teams plan, adopt and get full value from technology.',
    capabilities: ['Technology strategy & roadmaps', 'Architecture & security advisory', 'Partner-led training & enablement', 'User adoption support', 'Knowledge transfer on our projects']
  }
];
