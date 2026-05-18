
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
