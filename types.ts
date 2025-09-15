export type Theme = 'light' | 'dark';

export interface Stat {
  icon: React.ReactNode;
  title: string;
  value: string;
}

export interface Skill {
  name: string;
  level: string;
  icon: React.ReactNode;
}

// FIX: Updated Project interface to match data structure in constants.ts
export interface Project {
  title: string;
  description: string;
  category: string;
  metrics: string[];
  image: string;
  stack: string[];
  liveLink: string;
  codeLink: string;
}

// FIX: Added missing Achievement interface
export interface Achievement {
  text: string;
}

// FIX: Added missing NavItem interface
export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}
