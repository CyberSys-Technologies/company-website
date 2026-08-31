
export type Page = 
  | 'home' 
  | 'solutions' 
  | 'solutions-software' 
  | 'solutions-digital' 
  | 'solutions-bi' 
  | 'solutions-cybersecurity' 
  | 'services'
  | 'services-cloud'
  | 'services-multicloud'
  | 'services-managed'
  | 'services-training'
  | 'industries' 
  | 'multicloud' 
  | 'why-cybersys' 
  | 'insights' 
  | 'company' 
  | 'contact';


export interface NavLink {
  label: string;
  path: Page;
  description?: string;
  subLinks?: NavLink[];
}

export interface SolutionItem {
  title: string;
  description: string;
}

export interface IndustryItem {
  name: string;
  description: string;
  focus: string[];
}

export type GoalCategory = 'cloud' | 'security' | 'operations' | 'costs' | 'build' | 'guided';

export type IndustryKey = 'oil-gas' | 'finance' | 'telecom' | 'utilities' | 'government' | 'sme';

export interface DiagnosticOption {
  id: string;
  label: string;
  description?: string;
  nextStepId?: string;
  recommendationTag?: string;
}

export interface DiagnosticQuestion {
  id: string;
  question: string;
  subtitle?: string;
  options: DiagnosticOption[];
}

export interface ArchitectureComponent {
  layer: 'Identity & Access' | 'Perimeter & OT Security' | 'Multicloud Infrastructure' | 'Core Applications & ERP' | 'Compliance & SOC';
  title: string;
  techStack: string[];
  description: string;
}

export interface SolutionRecommendation {
  id: string;
  title: string;
  tagline: string;
  primaryGoal: GoalCategory;
  priorities: string[];
  recommendedTechnologies: string[];
  cyberSysServices: string[];
  expectedOutcome: string;
  estimatedComplexity: 'Low' | 'Medium' | 'High' | 'Enterprise';
  targetArchitecture: ArchitectureComponent[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedActions?: { label: string; action: string }[];
}

export interface AssessmentLeadData {
  name: string;
  email: string;
  company: string;
  industry: string;
  companySize: string;
  primaryGoal: string;
}

