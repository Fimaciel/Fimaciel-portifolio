export interface Project {
    name: string;
    desc: string;
    tech: string[];
    type: string;
    highlight: boolean;
    githubUrl?: string;
    liveUrl?: string;
}

export interface SkillItem {
    name: string;
    level: number;
}

export interface SkillCategory {
    title: string;
    skills: SkillItem[];
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    tasks: string[];
}

export interface Education {
    title: string;
    institution: string;
    status: string;
}

export interface Certification {
    title: string;
    issuer: string;
    year: string;
}

export interface NavLink {
    label: string;
    href: string;
}
