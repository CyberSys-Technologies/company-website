import { Page } from './types';

/** Clean web address for every page, so each one can be indexed and shared on its own */
export const ROUTES: Record<Page, string> = {
  'home': '/',
  'company': '/about',
  'solutions': '/solutions',
  'services-cloud': '/solutions/cloud-infrastructure',
  'solutions-cybersecurity': '/solutions/cybersecurity',
  'solutions-bi': '/solutions/ai-data-analytics',
  'solutions-software': '/solutions/business-applications',
  'services-managed': '/solutions/managed-services',
  'services-training': '/solutions/training-consultancy',
  'industries': '/industries',
  'industries-oil-gas': '/industries/oil-gas',
  'industries-banking': '/industries/banking-financial-services',
  'industries-real-estate': '/industries/real-estate',
  'industries-healthcare': '/industries/healthcare',
  'careers': '/careers',
  'contact': '/contact'
};

/** Search-result title and description for each page */
export const PAGE_META: Record<Page, { title: string; description: string }> = {
  'home': {
    title: 'CyberSys Technologies | Enterprise Technology, Cloud & Cybersecurity in Nigeria',
    description: 'CyberSys Technologies designs, implements and supports cloud, cybersecurity, AI, data analytics and managed services for enterprises across Oil & Gas, Banking, Healthcare, Real Estate and Manufacturing.'
  },
  'company': {
    title: 'About Us | CyberSys Technologies',
    description: 'CyberSys Technologies Limited is a Lagos-based enterprise technology company bridging global technology standards and local operational realities.'
  },
  'solutions': {
    title: 'Solutions | CyberSys Technologies',
    description: 'Cloud & infrastructure, cybersecurity, AI & data analytics, business applications, IT managed services and training, designed and implemented by CyberSys Technologies.'
  },
  'services-cloud': {
    title: 'Cloud & Infrastructure | CyberSys Technologies',
    description: 'Secure, high-performance cloud environments on Microsoft Azure, AWS, Google Cloud and Oracle Cloud, architected, implemented and managed by CyberSys Technologies.'
  },
  'solutions-cybersecurity': {
    title: 'Cybersecurity | CyberSys Technologies',
    description: 'Endpoint, network, cloud, identity and email security plus risk and compliance, delivered with Sophos, Check Point, Fortinet, Palo Alto Networks and Microsoft by CyberSys Technologies.'
  },
  'solutions-bi': {
    title: 'AI & Data Analytics | CyberSys Technologies',
    description: 'Dashboards, data platforms, predictive analytics and AI that turn enterprise data into everyday decisions.'
  },
  'solutions-software': {
    title: 'Business Applications & ERP | CyberSys Technologies',
    description: 'Oracle Fusion, Microsoft Dynamics 365, Primavera and custom applications, implemented and integrated by CyberSys Technologies.'
  },
  'services-managed': {
    title: 'IT & Managed Services | CyberSys Technologies',
    description: 'Monitoring, support, patching, backup and licensing management that keep your systems secure, available and up to date.'
  },
  'services-training': {
    title: 'Training & Consultancy | CyberSys Technologies',
    description: 'Technology strategy, architecture and security advisory, plus partner-backed training and enablement for your teams.'
  },
  'industries': {
    title: 'Industries | CyberSys Technologies',
    description: 'Technology for critical industries: Oil & Gas, Banking & Financial Services, Real Estate and Healthcare.'
  },
  'industries-oil-gas': {
    title: 'Oil & Gas Technology Solutions | CyberSys Technologies',
    description: 'Secure critical infrastructure and use data, AI and cloud to raise productivity across upstream, midstream and downstream operations.'
  },
  'industries-banking': {
    title: 'Banking & Financial Services Technology | CyberSys Technologies',
    description: 'Cybersecurity, resilient cloud platforms and data for banks and fintechs, aligned with CBN and NDPA requirements.'
  },
  'industries-real-estate': {
    title: 'Real Estate Technology Solutions | CyberSys Technologies',
    description: 'Run projects, properties and finances on connected, secure digital platforms.'
  },
  'industries-healthcare': {
    title: 'Healthcare Technology Solutions | CyberSys Technologies',
    description: 'Secure patient records, reliable clinical systems and operational insight for healthcare providers.'
  },
  'careers': {
    title: 'Careers | CyberSys Technologies',
    description: 'Build your career in cloud, cybersecurity, data & AI and business applications with CyberSys Technologies in Lagos.'
  },
  'contact': {
    title: 'Contact Us | CyberSys Technologies',
    description: 'Talk to CyberSys Technologies by phone, WhatsApp or email, or visit our office in Lekki Phase 1, Lagos.'
  }
};

const PAGE_BY_PATH = Object.fromEntries(Object.entries(ROUTES).map(([page, path]) => [path, page as Page]));

// Old hash names and previous-site addresses, sent to the closest current page
const LEGACY: Record<string, Page> = {
  'services': 'solutions',
  'solutions-digital': 'solutions',
  'multicloud': 'services-cloud',
  'services-multicloud': 'services-cloud',
  'why-cybersys': 'company',
  'insights': 'home',
  'industries-telecom': 'industries'
};

/** Page named by an old #page link (e.g. #company), or null for a normal in-page anchor */
export const pageFromHash = (hash: string): Page | null => {
  const name = hash.replace('#', '');
  if ((ROUTES as Record<string, string>)[name]) return name as Page;
  return LEGACY[name] || null;
};

/** Page for a clean address, ignoring a trailing slash, or null if there is none */
export const pageFromPath = (pathname: string): Page | null =>
  PAGE_BY_PATH[pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname] || null;
