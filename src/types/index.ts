export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  summary: string;
  about: string[];
  email: string;
  github: string;
  linkedin: string;
  upwork: string;
  cv: string;
}

export interface ProjectLinks {
  ios?: string;
  android?: string;
  huawei?: string;
  web?: string;
}

export interface ProjectSEO {
  title: string;
  description: string;
}

export interface TechnicalChallenge {
  problem: string;
  solution: string;
  result: string;
}

export interface Project {
  slug: string;
  name: string;
  type: string;
  market: string;
  shortDescription: string;
  fullDescription: string;
  platforms: string[];
  role: string;
  responsibilities?: string[];
  leadership?: string[];
  techStack: string[];
  technicalChallenges?: TechnicalChallenge[];
  features: string[];
  links: ProjectLinks;
  seo: ProjectSEO;
}

export interface ProjectsData {
  featured: string[];
  projects: Record<string, Project>;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SkillsData {
  categories: SkillCategory[];
}

export interface Company {
  name: string;
  role: string;
  start: string;
  end: string;
  type: string;
}

export interface TechnicalHighlight {
  id?: string;
  title: string;
  context: string;
  slug?: string;
  problem: string;
  solution: string;
  result: string;
  link?: string;
  featured?: boolean;
}

export interface PublicSample {
  title: string;
  link: string;
  description: string;
  technologies: string[];
}

export interface Testimonial {
  text: string;
  name: string;
  role: string;
}
