import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
    {
        name: "Eficiência Fiscal",
        desc: "Sistema completo em Laravel para gestão fiscal. Integração com scripts Python para web scraping automatizado, deploy e manutenção de servidores em produção.",
        tech: ["Laravel", "Python", "PostgreSQL", "Web Scraping"],
        type: "🏢 Empresa",
        highlight: true,
    },
    {
        name: "Mix Generator",
        desc: "Sistema Django para gestão de produtos e vendas. O desafio mais legal: parsear PDFs complexos e transformar dados bagunçados em relatórios limpos.",
        tech: ["Django", "Python", "PostgreSQL", "PDF Processing"],
        type: "🧪 Projeto Solo",
        highlight: false,
    },
    {
        name: "Agrox Hub",
        desc: "Funcionalidades web para o setor agrícola. Primeiro freela, primeiras lições sobre trabalhar com clientes e prazos reais.",
        tech: ["Web Development"],
        type: "🌱 Freelancer",
        highlight: false,
    },
];
