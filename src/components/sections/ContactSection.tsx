import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";

const contactCards = [
  {
    icon: Linkedin,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    border: "hover:border-sky-400/40",
    titleKey: "contact.cards.linkedin.title",
    descKey: "contact.cards.linkedin.desc",
    href: "https://linkedin.com/in/filipe-maciel-lopes-221256267",
  },
  {
    icon: Github,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "hover:border-purple-400/40",
    titleKey: "contact.cards.github.title",
    descKey: "contact.cards.github.desc",
    href: "https://github.com/Fimaciel",
  },
  {
    icon: Mail,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "hover:border-emerald-400/40",
    titleKey: "contact.cards.email.title",
    descKey: "contact.cards.email.desc",
    href: "mailto:filipe.maciel.lopes13@gmail.com",
  },
];

const ContactSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-2 font-heading text-sm uppercase tracking-widest text-primary">
            {t("contact.tag")}
          </p>
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            {t("contact.title")} <span className="text-gradient">{t("contact.titleHighlight")}</span>?
          </h2>
          <p className="mb-10 font-body text-muted-foreground">{t("contact.subtitle")}</p>

          {/* Contact cards */}
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.a
                  key={card.titleKey}
                  href={card.href}
                  target={card.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={card.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`group flex flex-col items-center rounded-xl border border-border bg-card p-6 transition-all hover:shadow-md ${card.border}`}
                >
                  <div className={`mb-3 rounded-xl p-3 ${card.bg}`}>
                    <Icon size={24} className={card.color} aria-hidden />
                  </div>
                  <p className="font-heading text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                    {t(card.titleKey)}
                  </p>
                  <p className="mt-1 font-body text-xs text-muted-foreground">{t(card.descKey)}</p>
                </motion.a>
              );
            })}
          </div>

          {/* CV download */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mb-8"
          >
            <Button variant="hero" size="lg" asChild>
              <a
                href={i18n.language.startsWith("en") ? "/curriculo-en.pdf" : "/curriculo-pt.pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={18} />
                {t("contact.downloadCv")}
              </a>
            </Button>
          </motion.div>

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
