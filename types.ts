export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  overview: string;
  role: string;
  duration: string;
  tools: string[];
  problem: string;
  solution: string;
  heroImage: string;
  images: string[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  details?: string[];
}

export interface Skill {
  name: string;
  icon?: string;
  category: 'design' | 'core' | 'soft';
}