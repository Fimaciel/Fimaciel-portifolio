export interface NavLinkItem {
  label: string;
  href: string;
}

export interface ProjectItem {
  name: string;
  desc: string;
  tech: string[];
  type: string;
  highlight: boolean;
  github?: string;
  deploy?: string;
  image?: string;
  gradient?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  tasks: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  status: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
}

export interface AboutHighlight {
  label: string;
  desc: string;
}

export interface TechStackItem {
  name: string;
  icon?: string;
  icons?: string[];
}
