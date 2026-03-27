import { motion } from "framer-motion";
import { Code2, Server, Database, Globe, Gamepad2, Terminal } from "lucide-react";
import { useTranslation } from "react-i18next";

const iconMap = [Server, Code2, Database, Globe];

const AboutSection = () => {
    const { t } = useTranslation();

    const bio = t("about.bio", { returnObjects: true }) as string[];
    const highlights = t("about.highlights", { returnObjects: true }) as { label: string; desc: string }[];
    const stats = t("about.stats", { returnObjects: true }) as { value: string; label: string }[];

    const colorMap = ["text-purple-400", "text-sky-400", "text-yellow-400", "text-rose-400"];

    return (
        <section id="about" className="section-padding">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-primary font-heading text-sm tracking-widest uppercase mb-2">{t("about.tag")}</p>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10">
                        {t("about.title")} <span className="text-gradient">{t("about.titleHighlight")}</span>
                    </h2>

                    <div className="grid md:grid-cols-5 gap-12 items-start">
                        <div className="md:col-span-3 space-y-5">
                            {/* Terminal-style bio */}
                            <div className="bg-card border border-border rounded-lg p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Terminal size={16} className="text-primary" />
                                    <span className="text-xs font-heading text-muted-foreground">README.md</span>
                                </div>
                                <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                                    {bio.map((paragraph, i) => {
                                        // Parse <strong> and <code> tags from the translation string
                                        const parts = paragraph.split(/(<strong>.*?<\/strong>|<code>.*?<\/code>)/g);
                                        return (
                                            <p key={i}>
                                                {parts.map((part, j) => {
                                                    if (part.startsWith("<strong>")) {
                                                        return <span key={j} className="text-foreground font-medium">{part.replace(/<\/?strong>/g, "")}</span>;
                                                    }
                                                    if (part.startsWith("<code>")) {
                                                        return <span key={j} className="text-primary font-heading text-sm">{part.replace(/<\/?code>/g, "")}</span>;
                                                    }
                                                    return part;
                                                })}
                                                {i === bio.length - 1 && <Gamepad2 size={14} className="inline text-primary ml-1" />}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Fun stats */}
                            <div className="grid grid-cols-3 gap-3">
                                {stats.map((stat, i) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.3 }}
                                        className="bg-card border border-border rounded-lg p-4 text-center"
                                    >
                                        <p className="text-2xl font-heading font-bold text-gradient">{stat.value}</p>
                                        <p className="text-xs text-muted-foreground font-body mt-1">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="md:col-span-2 grid grid-cols-1 gap-4">
                            {highlights.map((h, i) => {
                                const Icon = iconMap[i] || Globe;
                                return (
                                    <motion.div
                                        key={h.label}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.4 }}
                                        className="bg-card border border-border rounded-lg p-4 hover:border-glow transition-all group flex items-center gap-4"
                                    >
                                        <div className={`p-2.5 rounded-md bg-secondary ${colorMap[i]}`}>
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <p className="font-heading font-semibold text-sm text-foreground">{h.label}</p>
                                            <p className="text-xs text-muted-foreground mt-0.5">{h.desc}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
