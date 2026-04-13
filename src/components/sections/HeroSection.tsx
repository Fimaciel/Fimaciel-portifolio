import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroBackdrop from "@/components/backgrounds/HeroBackdrop";
import HeroCodeBlock from "@/components/sections/HeroCodeBlock";
import { ArrowDown, Download, Github, Linkedin, Mail, Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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

function computeYearsExp(startISO: string): number {
  const start = new Date(startISO);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const m = now.getMonth() - start.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < start.getDate())) years--;
  return years;
}

const HeroSection = () => {
  const { t } = useTranslation();
  const yearsExp = computeYearsExp("2023-09-04");

  return (
    <section id="home" className="section-padding relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-background/40 dark:bg-background/45" aria-hidden />
      <div className="pointer-events-none absolute inset-0 z-[1] min-h-full w-full">
        <HeroBackdrop />
      </div>

      <div className="container relative z-10">
        <div className="grid items-stretch gap-12 lg:grid-cols-2">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5"
            >
              <Circle size={8} className="animate-pulse fill-purple-400 text-purple-400" />
              <span className="font-heading text-xs tracking-wide text-primary">🎮 {t("hero.status")}</span>
            </motion.div>

            <h1 className="mb-4 font-heading text-4xl font-bold leading-[1.1] md:text-6xl lg:text-7xl">
              {t("hero.title")} <span className="text-gradient">{t("hero.subtitle")}</span>
            </h1>

            <div className="mb-6 h-8 font-heading text-lg md:text-xl">
              <TypingText />
            </div>

            <p className="mb-8 max-w-lg font-body text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("hero.description", { yearsExp })
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
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/filipe-maciel-lopes-221256267"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card/50 px-3 py-2 font-heading text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Fimaciel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card/50 px-3 py-2 font-heading text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  aria-label="GitHub"
                >
                  <Github size={14} />
                  GitHub
                </a>
                <a
                  href="/curriculo.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card/50 px-3 py-2 font-heading text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  aria-label={t("hero.buttons.resume")}
                >
                  <Download size={14} />
                  {t("hero.buttons.resume")}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — bloco de código (stack) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="hidden lg:flex lg:items-stretch"
          >
            <div className="w-full">
              <HeroCodeBlock />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
