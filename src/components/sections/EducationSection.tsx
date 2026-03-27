import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

interface EducationItem {
    title: string;
    institution: string;
    status: string;
}

interface CertificationItem {
    title: string;
    issuer: string;
    year: string;
}

const EducationSection = () => {
    const { t } = useTranslation();
    const educationItems = t("education.items", { returnObjects: true }) as EducationItem[];
    const certifications = t("education.certifications", { returnObjects: true }) as CertificationItem[];

    return (
        <section id="education" className="section-padding">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-primary font-heading text-sm tracking-widest uppercase mb-2">{t("education.tag")}</p>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
                        {t("education.title")} <span className="text-gradient">{t("education.titleHighlight")}</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Education */}
                    <div>
                        <h3 className="flex items-center gap-2 font-heading font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">
                            <GraduationCap size={18} className="text-primary" />
                            {t("education.academicTitle")}
                        </h3>
                        <div className="space-y-4">
                            {educationItems.map((e, i) => (
                                <motion.div
                                    key={e.title}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.4 }}
                                    className="bg-card border border-border rounded-lg p-5 hover:border-glow transition-colors"
                                >
                                    <p className="font-heading font-semibold text-sm text-foreground">{e.title}</p>
                                    <p className="text-xs text-muted-foreground mt-1 font-body">{e.institution}</p>
                                    <span className="inline-block mt-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded font-heading">
                                        {e.status}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="flex items-center gap-2 font-heading font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">
                            <Award size={18} className="text-primary" />
                            {t("education.certificationsTitle")}
                        </h3>
                        <div className="space-y-4">
                            {certifications.map((c, i) => (
                                <motion.div
                                    key={c.title}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.4 }}
                                    className="bg-card border border-border rounded-lg p-5 hover:border-glow transition-colors"
                                >
                                    <p className="font-heading font-semibold text-sm text-foreground">{c.title}</p>
                                    <p className="text-xs text-muted-foreground mt-1 font-body">
                                        {c.issuer} {c.year && `· ${c.year}`}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
