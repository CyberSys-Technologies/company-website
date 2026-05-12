
import React from 'react';
import { NavLink, IndustryItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { 
    label: 'Solutions', 
    path: 'solutions',
    subLinks: [
      { label: 'Cloud & Infrastructure', path: 'solutions-cloud', description: 'Resilient hybrid and private cloud architectures.' },
      { label: 'Cybersecurity', path: 'solutions-cybersecurity', description: 'Enterprise-grade threat protection and governance.' },
      { label: 'Multicloud Mastery', path: 'multicloud', description: 'Unified orchestration across AWS, Azure, and OCI.' },
      { label: 'Managed Services', path: 'solutions', description: '24/7 operational continuity and optimization.' },
    ]
  },
  {
    label: 'Services',
    path: 'services',
    subLinks: [
      { label: 'Custom software development', path: 'services-software', description: 'Bespoke enterprise applications engineered for scale.' },
      { label: 'Digital transformation & IOT', path: 'services-digital', description: 'Modernizing core operations with connected intelligence.' },
      { label: 'Business intelligence', path: 'services-bi', description: 'Turning complex data into actionable strategic yield.' },
      { label: 'Training & consultancy', path: 'services-training', description: 'Expert knowledge transfer and architecture guidance.' },
    ]
  },
  { 
    label: 'Industries', 
    path: 'industries',
    subLinks: [
      { label: 'Financial Services', path: 'industries', description: 'Securing the backbone of digital banking.' },
      { label: 'Government', path: 'industries', description: 'Digital sovereignty and public sector security.' },
      { label: 'Telecommunications', path: 'industries', description: 'Scalable platforms for massive connectivity.' },
      { label: 'Energy & Utilities', path: 'industries', description: 'Critical infrastructure and OT protection.' },
    ]
  },
  { label: 'Multicloud', path: 'multicloud' },
  { label: 'Company', path: 'company' },
  { label: 'Contact', path: 'contact' },
];

export const CS5_FRAMEWORK = [
  { term: 'Cyber', description: 'Advanced protection for the complex digital landscape.' },
  { term: 'Synergy', description: 'Seamless integration across heterogeneous multicloud environments.' },
  { term: 'Security', description: 'Compliance-aware infrastructure engineered by design.' },
  { term: 'Systems', description: 'Resilient architectures for absolute operational continuity.' },
  { term: 'Scalability', description: 'Building for today, ready for exponential global growth.' },
  { term: 'Solutions', description: 'Outcome-driven technology delivery focusing on business yield.' },
];

export const CYBER_VALUES = [
  { letter: 'C', value: 'Confidence', desc: 'Secure operations in any global jurisdiction.' },
  { letter: 'Y', value: 'Yield-Focused', desc: 'Optimizing infrastructure for maximum business efficiency.' },
  { letter: 'B', value: 'Bold Innovation', desc: 'Leading with African-first resilient design.' },
  { letter: 'E', value: 'Excellence', desc: 'Adhering to world-class delivery and engineering standards.' },
  { letter: 'R', value: 'Reliability', desc: 'Unwavering uptime for mission-critical environments.' },
];

export const INDUSTRIES: (IndustryItem & { icon: string })[] = [
  { 
    name: 'Government & Public Sector', 
    description: 'Enabling digital sovereignty and citizen-facing platform security.',
    focus: ['Secure Digital Government', 'Data Sovereignty', 'Infrastructure Resilience'],
    icon: 'Landmark'
  },
  { 
    name: 'Financial Services', 
    description: 'Securing the backbone of digital banking and payments across the continent.',
    focus: ['Banking & Fintech Security', 'Regulatory Compliance', 'High Availability'],
    icon: 'Shield'
  },
  { 
    name: 'Telecommunications', 
    description: 'Building scalable platforms for the next billion users.',
    focus: ['Network Infra & Cloud', 'Large-Scale Security', 'Analytics'],
    icon: 'Smartphone'
  },
  { 
    name: 'Energy & Utilities', 
    description: 'Protecting critical national infrastructure and optimizing performance.',
    focus: ['Critical Infra Protection', 'OT Security', 'Data Monitoring'],
    icon: 'Zap'
  },
  { 
    name: 'Healthcare', 
    description: 'Securing health data and enabling digital health platforms.',
    focus: ['Data Security & Privacy', 'Digital Health Platforms', 'Compliance'],
    icon: 'Activity'
  },
  { 
    name: 'Education & Research', 
    description: 'Powering digital learning and secure research data platforms.',
    focus: ['Digital Learning Infra', 'Research Data Platforms', 'Secure Systems'],
    icon: 'Book'
  },
  { 
    name: 'Enterprise & SMEs', 
    description: 'Accelerating secure cloud adoption for business growth.',
    focus: ['Secure Cloud Adoption', 'Business Continuity', 'Growth Platforms'],
    icon: 'Building'
  }
];
