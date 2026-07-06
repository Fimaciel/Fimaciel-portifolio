import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Radio } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import HeroBackdrop from "@/components/backgrounds/HeroBackdrop";
import HeroCodeBlock from "@/components/sections/HeroCodeBlock";
import { Button } from "@/components/ui/button";
import { getResumeHref, portfolioConfig } from "@/config/portfolio";

const TypingText = () => {
  const { t } = useTranslation();
  const roles = t("hero.roles", { returnObjects: true }) as string[];
  const [current, setCurrent] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[current];
    const timeout = deleting ? 30 : 60;

    if (!deleting && text === target) {
      setTimeout(() => setDeleting(true), 2000);
      return;
    }

    if (deleting && text === "") {
      setDeleting(false);
      setCurrent((c) => (c + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setText(deleting ? target.slice(0, text.length - 1) : target.slice(0, text.length + 1));
    }, timeout);

    return () => clearTimeout(timer);
  }, [text, deleting, current, roles]);

  return (
    <span className="text-primary">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const facts = t("hero.facts", { returnObjects: true }) as { label: string; value: string }[];

  return (
    <section
      id="home"
      className="relative flex min-h-[88svh] items-center overflow-hidden px-4 pb-14 pt-24 md:px-8 md:pb-16 md:pt-28"
    >
      <div className="absolute inset-0 z-0 bg-background/20" aria-hidden />
      <div className="pointer-events-none absolute inset-0 z-[1] min-h-full w-full">
        <HeroBackdrop />
      </div>

      <div className="container relative z-10">
        <div className="mb-8 flex flex-wrap items-center gap-3 border-y border-border/70 py-3 font-heading text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-primary">{t("hero.kicker")}</span>
          <span className="hidden h-px flex-1 bg-border sm:block" aria-hidden />
          <span className="flex items-center gap-2">
            <Radio size={13} className="text-accent" />
            {t("hero.status")}
          </span>
        </div>

        <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(27rem,0.86fr)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <h1 className="mb-4 max-w-4xl font-heading text-4xl font-bold leading-[1.02] md:text-6xl lg:text-7xl">
              {t("hero.title")} <span className="text-gradient">{t("hero.subtitle")}</span>
            </h1>

            <div className="mb-6 h-8 font-heading text-lg text-primary md:text-xl">
              <TypingText />
            </div>

            <p className="mb-8 max-w-2xl border-l-2 border-primary/50 pl-5 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("hero.description")
                .split("<code")
                .map((part, i) => {
                  if (i === 0) return part;
                  const end = part.indexOf("</code>");
                  const code = part.slice(part.indexOf(">") + 1, end);
                  const rest = part.slice(end + 7);
                  return (
                    <span key={i}>
                      <code className="rounded bg-primary/10 px-1.5 py-0.5 text-sm text-primary">{code}</code>
                      {rest}
                    </span>
                  );
                })}
            </p>

            <div className="mb-8 grid gap-3 sm:grid-cols-3">
              {facts.map((fact) => (
                <div key={fact.label} className="surface-panel rounded-lg p-4">
                  <p className="font-heading text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {fact.label}
                  </p>
                  <p className="mt-2 font-heading text-sm text-foreground">{fact.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="#projects">
                    <ArrowDown size={18} />
                    {t("hero.buttons.projects")}
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="#contact">
                    <Mail size={18} />
                    {t("hero.buttons.contact")}
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={portfolioConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card/70 px-3 py-2 font-heading text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
                <a
                  href={portfolioConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card/70 px-3 py-2 font-heading text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  aria-label="GitHub"
                >
                  <Github size={14} />
                  GitHub
                </a>
                <a
                  href={getResumeHref(i18n.language)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card/70 px-3 py-2 font-heading text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  aria-label={t("hero.buttons.resume")}
                >
                  <Download size={14} />
                  {t("hero.buttons.resume")}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="hidden lg:flex lg:items-stretch"
          >
            <div className="w-full border-l border-border/70 pl-6">
              <HeroCodeBlock />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
