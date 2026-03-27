import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="section-padding bg-card/30">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <p className="text-primary font-heading text-sm tracking-widest uppercase mb-2">{t("contact.tag")}</p>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        {t("contact.title")} <span className="text-gradient">{t("contact.titleHighlight")}</span>?
                    </h2>
                    <p className="text-muted-foreground font-body mb-4">
                        {t("contact.subtitle")}
                    </p>

                    {/* Terminal-style CTA */}
                    <div className="bg-card border border-border rounded-lg p-4 mb-8 max-w-md mx-auto text-left">
                        <p className="font-heading text-sm text-muted-foreground">
                            <span className="text-primary">$</span> {t("contact.terminalCommand")} <span className="text-purple-400">{t("contact.terminalArgs")}</span>
                        </p>
                        <p className="font-heading text-sm text-purple-400 mt-1">
                            {t("contact.terminalResult")}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                        <Button variant="hero" size="lg" asChild>
                            <a href="https://linkedin.com/in/filipe-maciel-lopes-221256267" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={18} />
                                LinkedIn
                            </a>
                        </Button>
                        <Button variant="heroOutline" size="lg" asChild>
                            <a href="https://github.com/Fimaciel" target="_blank" rel="noopener noreferrer">
                                <Github size={18} />
                                GitHub
                            </a>
                        </Button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground font-body">
                        <MapPin size={14} className="text-primary" />
                        {t("contact.location")}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
