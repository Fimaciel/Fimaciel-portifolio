import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { getResumeHref, portfolioConfig } from "@/config/portfolio";

const contactCards = [
  {
    icon: Linkedin,
    color: "text-stone-300",
    bg: "bg-stone-400/10",
    border: "hover:border-stone-300/40",
    titleKey: "contact.cards.linkedin.title",
    descKey: "contact.cards.linkedin.desc",
    href: portfolioConfig.links.linkedin,
  },
  {
    icon: Github,
    color: "text-zinc-300",
    bg: "bg-zinc-400/10",
    border: "hover:border-zinc-300/40",
    titleKey: "contact.cards.github.title",
    descKey: "contact.cards.github.desc",
    href: portfolioConfig.links.github,
  },
  {
    icon: Mail,
    color: "text-neutral-300",
    bg: "bg-neutral-400/10",
    border: "hover:border-neutral-300/40",
    titleKey: "contact.cards.email.title",
    descKey: "contact.cards.email.desc",
    href: portfolioConfig.links.email,
  },
];

const ContactSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="contact" className="section-padding scroll-mt-24 bg-card/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="section-kicker mb-2">{t("contact.tag")}</p>
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
                  className={`surface-panel group flex flex-col items-center rounded-lg p-6 transition-all hover:shadow-md ${card.border}`}
                >
                  <div className={`mb-3 rounded-lg p-3 ${card.bg}`}>
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
              <a href={getResumeHref(i18n.language)} target="_blank" rel="noopener noreferrer">
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
