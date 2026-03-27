import type { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
    {
        title: "Backend",
        skills: [
            { name: "PHP / Laravel", level: 90 },
            { name: "Python / Django", level: 85 },
            { name: "Flask", level: 70 },
        ],
    },
    {
        title: "Frontend",
        skills: [
            { name: "HTML / CSS", level: 90 },
            { name: "JavaScript", level: 80 },
            { name: "Bootstrap", level: 85 },
        ],
    },
    {
        title: "Banco de Dados",
        skills: [
            { name: "PostgreSQL", level: 85 },
            { name: "SQL", level: 85 },
        ],
    },
    {
        title: "Outros",
        skills: [
            { name: "APIs REST", level: 85 },
            { name: "Git", level: 80 },
            { name: "Web Scraping", level: 75 },
            { name: "Deploy", level: 80 },
            { name: "C# / Java", level: 60 },
        ],
    },
];
