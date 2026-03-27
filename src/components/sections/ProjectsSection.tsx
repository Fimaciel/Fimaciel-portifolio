import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

interface ProjectItem {
    name: string;
    desc: string;
    tech: string[];
    type: string;
    highlight: boolean;
}

const ProjectsSection = () => {
    const { t } = useTranslation();
    const projects = t("projects.items", { returnObjects: true }) as ProjectItem[];

    return (
        <section id="projects" className="section-padding bg-card/30">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-primary font-heading text-sm tracking-widest uppercase mb-2">{t("projects.tag")}</p>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        {t("projects.title")} <span className="text-gradient">{t("projects.titleHighlight")}</span>
                    </h2>
                    <p className="text-muted-foreground font-body mb-12 max-w-lg">
                        {t("projects.subtitle")}
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            className={`bg-card border rounded-lg p-6 md:p-8 hover:glow-box transition-all group ${p.highlight ? "border-primary/30" : "border-border hover:border-glow"
                                }`}
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Folder size={18} className="text-primary" />
                                        <span className="text-xs text-muted-foreground font-heading">{p.type}</span>
                                        {p.highlight && (
                                            <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-heading uppercase tracking-wider">
                                                {t("projects.highlightBadge")}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="font-heading font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                                        {p.name}
                                        <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                                    </h3>
                                    <p className="text-sm text-muted-foreground font-body max-w-xl">{p.desc}</p>
                                </div>
                                <div className="flex flex-wrap gap-2 md:justify-end md:max-w-[200px]">
                                    {p.tech.map((techItem) => (
                                        <span
                                            key={techItem}
                                            className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-md font-heading"
                                        >
                                            {techItem}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-10 text-center"
                >
                    <Button variant="heroOutline" size="lg" asChild>
                        <a href="https://github.com/Fimaciel" target="_blank" rel="noopener noreferrer">
                            <Github size={18} />
                            {t("projects.githubButton")}
                            <ExternalLink size={14} />
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
