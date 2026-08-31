import { GoalCategory, IndustryKey, SolutionRecommendation, DiagnosticQuestion } from '../types';

export interface GoalOption {
  id: GoalCategory;
  iconName: string;
  title: string;
  subtitle: string;
  badge?: string;
}

export const GOAL_OPTIONS: GoalOption[] = [
  {
    id: 'cloud',
    iconName: 'Cloud',
    title: 'Move to Cloud',
    subtitle: 'Modernize legacy workloads, migrate to Azure/AWS/OCI & simplify infrastructure.',
    badge: 'Popular'
  },
  {
    id: 'security',
    iconName: 'ShieldCheck',
    title: 'Secure My Business',
    subtitle: '24/7 Managed SOC, OT security, CBN/NDPR compliance & vulnerability audit.',
    badge: 'Critical'
  },
  {
    id: 'operations',
    iconName: 'Cpu',
    title: 'Optimize Operations & ERP',
    subtitle: 'Oracle ERP, Primavera P6, data warehousing, BI analytics & workflow automation.'
  },
  {
    id: 'costs',
    iconName: 'TrendingDown',
    title: 'Reduce Tech Spend',
    subtitle: 'FinOps cloud cost reduction (25-50%), licensing consolidation & server slimming.'
  },
  {
    id: 'build',
    iconName: 'Code',
    title: 'Build Something New',
    subtitle: 'Bespoke enterprise applications, SaaS platforms, AI integration & DevOps pipeline.'
  },
  {
    id: 'guided',
    iconName: 'Compass',
    title: "I'm Not Sure Yet",
    subtitle: 'Interactive 3-minute diagnostic to determine your technology maturity & priority.'
  }
];

export interface IndustryOption {
  key: IndustryKey;
  label: string;
  icon: string;
  tagline: string;
}

export const INDUSTRY_OPTIONS: IndustryOption[] = [
  { key: 'oil-gas', label: 'Oil & Gas', icon: 'Fuel', tagline: 'SCADA OT security, upstream cloud resilience & Primavera ERP' },
  { key: 'finance', label: 'Financial Services', icon: 'Landmark', tagline: 'CBN compliance, PCI-DSS, zero-downtime transaction cloud' },
  { key: 'telecom', label: 'Telecommunications', icon: 'Radio', tagline: 'High-concurrency microservices, network virtualization & 99.999% SLA' },
  { key: 'utilities', label: 'Energy & Utilities', icon: 'Zap', tagline: 'Grid telemetry monitoring, critical national infrastructure defense' },
  { key: 'government', label: 'Government & Public Sector', icon: 'Building2', tagline: 'Data sovereignty, NDPR compliance & secure citizen platforms' },
  { key: 'sme', label: 'Enterprise & SMEs', icon: 'Briefcase', tagline: 'Cost-optimized multi-cloud, Microsoft 365 governance & managed IT' }
];

export const DIAGNOSTIC_QUESTIONS: Record<GoalCategory, DiagnosticQuestion[]> = {
  cloud: [
    {
      id: 'cloud-current',
      question: 'What is your current infrastructure state?',
      subtitle: 'Select the option that best matches your deployment today.',
      options: [
        { id: 'on-prem', label: '100% On-Premise Data Center / Local Servers', description: 'Hardware maintenance costs are escalating' },
        { id: 'single-cloud', label: 'Single Cloud Provider (Azure, AWS, or GCP)', description: 'Seeking optimization or multicloud redundancy' },
        { id: 'hybrid', label: 'Hybrid Environment (On-Prem + Cloud)', description: 'Facing orchestration and connectivity challenges' },
        { id: 'legacy-app', label: 'Legacy Monolith Applications requiring Modernization', description: 'Hard to scale and refactor' }
      ]
    },
    {
      id: 'cloud-workload',
      question: 'What type of workloads are you planning to migrate?',
      subtitle: 'This determines the target cloud architecture.',
      options: [
        { id: 'mission-critical', label: 'Core Enterprise ERP / Oracle / SAP Databases', recommendationTag: 'OCI & Azure Interconnect' },
        { id: 'web-apps', label: 'Customer-Facing Web & Mobile Applications', recommendationTag: 'AWS / Azure Kubernetes' },
        { id: 'file-backup', label: 'Backup, Disaster Recovery & File Storage', recommendationTag: 'Hybrid Object Storage' },
        { id: 'analytics-ai', label: 'Data Lake & Business Intelligence Pipelines', recommendationTag: 'BigQuery / Synapse' }
      ]
    }
  ],
  security: [
    {
      id: 'sec-priority',
      question: 'What is your urgent security priority?',
      subtitle: 'We will tailor our recommendations based on immediate exposure.',
      options: [
        { id: 'audit-compliance', label: 'Passing NDPR / CBN / ISO 27001 Regulatory Audits', description: 'Need immediate compliance governance' },
        { id: 'incident-response', label: 'Remediating a Recent Breach / Active Vulnerability', description: 'Urgent threat hunting required' },
        { id: 'soc-monitoring', label: 'Need 24/7 Managed SOC & Threat Detection', description: 'Lack internal security telemetry team' },
        { id: 'ot-scada', label: 'Securing Operational Tech (OT), Field & SCADA assets', description: 'Critical infrastructure protection' }
      ]
    },
    {
      id: 'sec-maturity',
      question: 'Do you currently have a 24/7 Security Operations Center (SOC)?',
      options: [
        { id: 'no-soc', label: 'No SOC – We rely on basic antivirus & firewalls', recommendationTag: 'CyberSys Managed SOC' },
        { id: 'part-soc', label: 'In-house IT team handles security part-time', recommendationTag: 'Co-Managed SIEM/EDR' },
        { id: 'outdated-soc', label: 'Existing SOC lacks AI threat hunting & OT visibility', recommendationTag: 'AI SOC Upgrade' }
      ]
    }
  ],
  operations: [
    {
      id: 'ops-system',
      question: 'Which core business applications do you run?',
      options: [
        { id: 'oracle-erp', label: 'Oracle E-Business Suite / Fusion / Primavera P6', recommendationTag: 'Oracle Expertise' },
        { id: 'microsoft-365', label: 'Microsoft Dynamics 365 & M365 Ecosystem', recommendationTag: 'Azure & D365' },
        { id: 'custom-erp', label: 'Custom In-House ERP or Legacy SQL Databases', recommendationTag: 'App Modernization' },
        { id: 'multiple-silos', label: 'Multiple Disconnected Systems & Spreadsheets', recommendationTag: 'BI & Integration Engine' }
      ]
    }
  ],
  costs: [
    {
      id: 'cost-spend',
      question: 'What is your primary cost friction point?',
      options: [
        { id: 'unpredictable-cloud', label: 'Unpredictable monthly Azure / AWS / GCP invoices', recommendationTag: 'FinOps Optimization' },
        { id: 'hardware-refresh', label: 'Upcoming expensive physical server & storage refresh', recommendationTag: 'Cloud Consolidation' },
        { id: 'oracle-licensing', label: 'High Oracle / Microsoft enterprise software licensing', recommendationTag: 'License Audit' }
      ]
    }
  ],
  build: [
    {
      id: 'build-type',
      question: 'What type of software platform do you want to build?',
      options: [
        { id: 'saas-portal', label: 'Enterprise B2B Web App or Customer Portal', recommendationTag: 'Cloud Native Microservices' },
        { id: 'mobile-app', label: 'High-Security Mobile Banking or Telecom App', recommendationTag: 'Zero-Trust Mobile App' },
        { id: 'ai-automation', label: 'AI Document Processing & Workflow Automation', recommendationTag: 'Generative AI Engine' }
      ]
    }
  ],
  guided: [
    {
      id: 'guided-start',
      question: 'Where is your organization experiencing the biggest bottleneck?',
      options: [
        { id: 'g-cloud', label: 'Infrastructure Uptime & High Cloud Costs', nextStepId: 'cloud' },
        { id: 'g-sec', label: 'Cybersecurity Exposure & Compliance Audits', nextStepId: 'security' },
        { id: 'g-data', label: 'Data Silos & Outdated Business Applications', nextStepId: 'operations' }
      ]
    }
  ]
};

export function generateRecommendation(
  goal: GoalCategory,
  industry: IndustryKey,
  answers: Record<string, string>
): SolutionRecommendation {
  let rec: SolutionRecommendation = {
    id: `rec-${goal}-${industry}`,
    title: 'Multicloud Infrastructure & Cyber Resilience Standard',
    tagline: 'Engineered for absolute operational continuity and regulatory alignment.',
    primaryGoal: goal,
    priorities: [
      'Comprehensive Security & Vulnerability Audit',
      'Multicloud FinOps Cost Reduction',
      'Zero-Downtime Migration Roadmap'
    ],
    recommendedTechnologies: ['Microsoft Azure', 'AWS', 'Oracle Cloud (OCI)', 'Palo Alto Security'],
    cyberSysServices: ['Managed Cloud Services', 'Cyber Governance & SOC', 'Custom App Engineering'],
    expectedOutcome: '30-45% TCO reduction, 99.99% operational uptime, and 100% NDPR audit readiness.',
    estimatedComplexity: 'Medium',
    targetArchitecture: [
      {
        layer: 'Identity & Access',
        title: 'Zero-Trust IAM & MFA',
        techStack: ['Azure Entra ID', 'Okta Enterprise'],
        description: 'Role-based access control with continuous session verification across multi-region teams.'
      },
      {
        layer: 'Perimeter & OT Security',
        title: 'AI Threat Protection & Managed SOC',
        techStack: ['Palo Alto Networks', 'Fortinet OT', 'CyberSys 24/7 SOC'],
        description: 'Real-time telemetry monitoring, automated incident response, and SCADA protection.'
      },
      {
        layer: 'Multicloud Infrastructure',
        title: 'Hybrid Cloud Orchestration',
        techStack: ['AWS EKS', 'Azure Cloud', 'OCI Database Service'],
        description: 'Fault-tolerant multi-provider mesh supporting high availability and data sovereignty.'
      },
      {
        layer: 'Core Applications & ERP',
        title: 'Connected Enterprise Core',
        techStack: ['Oracle Primavera', 'Microsoft D365', 'Node.js Microservices'],
        description: 'Unified operational pipeline linking field operations with central analytics.'
      },
      {
        layer: 'Compliance & SOC',
        title: 'NDPR / CBN Audit Engine',
        techStack: ['CyberSys Audit Suite', 'ISO 27001 Framework'],
        description: 'Automated continuous compliance reporting and immutable security logging.'
      }
    ]
  };

  if (goal === 'security') {
    rec.title = 'Enterprise Cyber Resilience & 24/7 Managed SOC';
    rec.priorities = [
      'Immediate Cyber Threat Assessment',
      '24/7 SOC Monitoring & Threat Hunting',
      'NDPR & CBN Regulatory Compliance Lockdown'
    ];
    rec.recommendedTechnologies = ['CyberSys Managed SOC', 'Microsoft Sentinel', 'Palo Alto Networks'];
    rec.cyberSysServices = ['Managed Cyber Security', 'OT & Industrial Security', 'Compliance Governance'];
    rec.expectedOutcome = 'Elimination of critical vulnerability vectors and 24/7 active defense with guaranteed <15min response SLA.';
    rec.estimatedComplexity = 'High';
  } else if (goal === 'costs') {
    rec.title = 'FinOps & Multicloud Cost Optimization Program';
    rec.priorities = [
      'Comprehensive Cloud Bill Audit (Azure/AWS/OCI)',
      'Right-Sizing & Reserved Instance Optimization',
      'Unused Asset Cleanup & Licensing Consolidation'
    ];
    rec.recommendedTechnologies = ['Azure Cost Management', 'AWS Cost Explorer', 'Oracle FinOps'];
    rec.cyberSysServices = ['Multicloud Mastery', 'Managed Services', 'Licensing Optimization'];
    rec.expectedOutcome = 'Guaranteed 25% to 50% immediate reduction in recurring cloud infrastructure expenses.';
    rec.estimatedComplexity = 'Low';
  } else if (goal === 'operations') {
    rec.title = 'Enterprise ERP & Business Intelligence Acceleration';
    rec.priorities = [
      'Oracle Fusion & Primavera P6 Optimization',
      'Centralized Real-Time Analytics Dashboard',
      'Automated Cross-Departmental Workflows'
    ];
    rec.recommendedTechnologies = ['Oracle OCI', 'Primavera P6', 'Power BI / Tableau', 'Custom Node/Python APIs'];
    rec.cyberSysServices = ['Custom Software Development', 'Business Intelligence & Analytics', 'Cloud Infra'];
    rec.expectedOutcome = 'Single source of truth for business metrics and 4x faster project decision velocity.';
    rec.estimatedComplexity = 'Medium';
  }

  if (industry === 'oil-gas') {
    rec.title += ' (Oil & Gas Specialized)';
    rec.priorities.unshift('SCADA & OT Industrial Network Defense');
    rec.recommendedTechnologies.push('Fortinet OT', 'Primavera P6 Enterprise');
  } else if (industry === 'finance') {
    rec.title += ' (Fintech & Banking Ready)';
    rec.priorities.unshift('CBN Compliance & Zero-Trust Transaction Mesh');
    rec.recommendedTechnologies.push('PCI-DSS Compliance Suite');
  }

  return rec;
}

export const GROUNDED_KNOWLEDGE_BASE = [
  {
    keywords: ['azure', 'aws', 'oci', 'oracle', 'multicloud', 'cloud migration'],
    response: `CyberSys is a certified authority in Multicloud Architecture (AWS, Microsoft Azure, and Oracle Cloud OCI). 
We design hybrid and multi-cloud strategies that prevent vendor lock-in, reduce TCO by up to 50%, and ensure high availability across African and global regions.`
  },
  {
    keywords: ['security', 'soc', 'cybersecurity', 'breach', 'firewall', 'threat', 'ndpr', 'cbn', 'ot'],
    response: `CyberSys operates a 24/7 Managed Security Operations Center (SOC) tailored for enterprise, financial, and Oil & Gas infrastructure. 
Our capabilities include NDPR/CBN audit compliance, OT/SCADA industrial security, vulnerability scanning, and proactive AI threat hunting.`
  },
  {
    keywords: ['oracle', 'primavera', 'erp', 'business intelligence', 'analytics', 'database'],
    response: `CyberSys specializes in Oracle Enterprise Solutions, including Oracle Fusion, E-Business Suite, and Primavera P6 for complex project management in Oil & Gas and Utilities. 
We integrate these with custom BI analytics dashboards for real-time strategic yield.`
  },
  {
    keywords: ['cost', 'pricing', 'expensive', 'finops', 'save', 'budget'],
    response: `Through our Cloud FinOps & Infrastructure Assessment, CyberSys helps clients reduce monthly cloud spend on AWS, Azure, and OCI by 25% to 50%. We eliminate idle assets, optimize licensing, and implement automated scaling.`
  },
  {
    keywords: ['cs5', 'framework', 'standard'],
    response: `The CS5 Standard is CyberSys's architectural methodology built on 6 core pillars:
1. Customer: Outcome-first delivery
2. Synergy: Seamless multi-cloud integration
3. Security: Compliance-aware zero-trust design
4. Systems: Zero-downtime resilient architectures
5. Scalability: Ready for exponential expansion
6. Solutions: Quantifiable business yield.`
  },
  {
    keywords: ['contact', 'office', 'lagos', 'london', 'location', 'consult'],
    response: `CyberSys operates from our primary Africa Hub in Lagos, Nigeria, with global operational capabilities out of London, UK. You can request an architect consultation directly via our portal or contact us at contact@cybersys.com.`
  }
];

export function getGroundedBotReply(query: string): string {
  const q = query.toLowerCase();
  for (const item of GROUNDED_KNOWLEDGE_BASE) {
    if (item.keywords.some(k => q.includes(k))) {
      return item.response;
    }
  }

  return `CyberSys Technologies provides enterprise-grade infrastructure engineering, multicloud orchestration (Azure, AWS, OCI), 24/7 SOC cybersecurity, and Oracle/Primavera solutions. 
Based on your inquiry about "${query}", our solution architects can evaluate your environment and provide a tailored technical roadmap. Would you like to launch our quick interactive Solution Finder or request a consultation?`;
}
