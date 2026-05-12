
export type Page = 
  | 'home' 
  | 'solutions' 
  | 'solutions-cloud' 
  | 'solutions-cybersecurity' 
  | 'solutions-multicloud' 
  | 'solutions-data' 
  | 'solutions-digital' 
  | 'solutions-managed' 
  | 'industries' 
  | 'multicloud' 
  | 'why-cybersys' 
  | 'insights' 
  | 'company' 
  | 'services'
  | 'services-software'
  | 'services-digital'
  | 'services-bi'
  | 'services-training'
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
