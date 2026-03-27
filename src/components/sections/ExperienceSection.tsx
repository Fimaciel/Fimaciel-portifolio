import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    tasks: string[];
}

const ExperienceSection = () => {
    const { t } = useTranslation();
    const experiences = t("experience.items", { returnObjects: true }) as ExperienceItem[];

    return (
        <section id="experience" className="section-padding bg-card/30">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-primary font-heading text-sm tracking-widest uppercase mb-2">{t("experience.tag")}</p>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
                        {t("experience.title")} <span className="text-gradient">{t("experience.titleHighlight")}</span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

                    <div className="space-y-10">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.4 }}
                                className="relative pl-12 md:pl-16"
                            >
                                {/* Dot */}
                                <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-primary glow-box" />

                                <div className="bg-card border border-border rounded-lg p-6 hover:border-glow transition-colors">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                                        <div className="flex items-center gap-2">
                                            <Briefcase size={16} className="text-primary" />
                                            <h3 className="font-heading font-bold text-foreground">{exp.company}</h3>
                                        </div>
                                        <span className="text-xs text-muted-foreground font-heading">{exp.period}</span>
                                    </div>
                                    <p className="text-sm text-primary font-body mb-3">{exp.role}</p>
                                    <ul className="space-y-1.5">
                                        {exp.tasks.map((task, ti) => (
                                            <li key={ti} className="text-sm text-muted-foreground font-body flex items-start gap-2">
                                                <span className="text-primary mt-1.5 text-[6px]">●</span>
                                                {task}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
