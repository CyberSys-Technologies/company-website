
export type Page =
  | 'home'
  | 'solutions'
  | 'services-cloud'
  | 'solutions-cybersecurity'
  | 'solutions-bi'
  | 'solutions-software'
  | 'services-managed'
  | 'services-training'
  | 'industries'
  | 'industries-oil-gas'
  | 'industries-banking'
  | 'industries-real-estate'
  | 'industries-healthcare'
  | 'company'
  | 'careers'
  | 'contact';

export interface NavLink {
  label: string;
  path: Page;
  /** Section id to scroll to after navigating (e.g. About Us items on the Company page) */
  anchor?: string;
  description?: string;
  /** Small icon shown beside the item in dropdown menus */
  icon?: import('react').ReactNode;
  subLinks?: NavLink[];
}

