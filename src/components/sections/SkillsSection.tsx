import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface SkillItem {
    name: string;
    level: number;
}

interface SkillCategoryItem {
    title: string;
    skills: SkillItem[];
}

const SkillsSection = () => {
    const { t } = useTranslation();
    const skillCategories = t("skills.categories", { returnObjects: true }) as SkillCategoryItem[];

    return (
        <section id="skills" className="section-padding">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-primary font-heading text-sm tracking-widest uppercase mb-2">{t("skills.tag")}</p>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
                        {t("skills.title")} <span className="text-gradient">{t("skills.titleHighlight")}</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((cat, ci) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: ci * 0.1, duration: 0.4 }}
                            className="bg-card border border-border rounded-lg p-6"
                        >
                            <h3 className="font-heading font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">
                                {cat.title}
                            </h3>
                            <div className="space-y-4">
                                {cat.skills.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between text-sm mb-1.5">
                                            <span className="font-body text-foreground">{skill.name}</span>
                                            <span className="text-muted-foreground font-heading text-xs">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-primary rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
