import { motion } from "framer-motion";
import { Github, Linkedin, MapPin } from "lucide-react";
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
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-2 font-heading text-sm uppercase tracking-widest text-primary">
            {t("contact.tag")}
          </p>
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            {t("contact.title")} <span className="text-gradient">{t("contact.titleHighlight")}</span>?
          </h2>
          <p className="mb-4 font-body text-muted-foreground">{t("contact.subtitle")}</p>

          {/* Terminal-style CTA */}
          <div className="mx-auto mb-8 max-w-md rounded-lg border border-border bg-card p-4 text-left">
            <p className="font-heading text-sm text-muted-foreground">
              <span className="text-primary">$</span> {t("contact.terminalCommand")}{" "}
              <span className="text-purple-400">{t("contact.terminalArgs")}</span>
            </p>
            <p className="mt-1 font-heading text-sm text-purple-400">{t("contact.terminalResult")}</p>
          </div>

          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="lg" asChild>
              <a
                href="https://linkedin.com/in/filipe-maciel-lopes-221256267"
                target="_blank"
                rel="noopener noreferrer"
              >
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

          <div className="flex items-center justify-center gap-2 font-body text-sm text-muted-foreground">
            <MapPin size={14} className="text-primary" />
            {t("contact.location")}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
