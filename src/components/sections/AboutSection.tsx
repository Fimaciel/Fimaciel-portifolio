import { motion } from "framer-motion";
import { Code2, Database, Globe, Server, Terminal } from "lucide-react";
import { useTranslation } from "react-i18next";

import PhantomSpiderWatermark from "@/components/backgrounds/PhantomSpiderWatermark";
import type { AboutHighlight } from "@/types/portfolio";

const iconMap = [Server, Code2, Database, Globe];
const colorMap = ["text-purple-400", "text-sky-400", "text-yellow-400", "text-rose-400"];

const AboutSection = () => {
  const { t } = useTranslation();

  const bio = t("about.bio", { returnObjects: true }) as string[];
  const highlights = t("about.highlights", { returnObjects: true }) as AboutHighlight[];

  return (
    <section id="about" className="section-padding relative">
      <PhantomSpiderWatermark />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 font-heading text-sm uppercase tracking-widest text-primary">{t("about.tag")}</p>
          <h2 className="mb-10 font-heading text-3xl font-bold md:mb-12 md:text-4xl">
            {t("about.title")} <span className="text-gradient">{t("about.titleHighlight")}</span>
          </h2>

          <div className="grid items-stretch gap-8 lg:grid-cols-2">
            {/* Sobre mim — único card narrativo */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-lg border border-l-4 border-border border-l-neutral-900/85 bg-card p-6 shadow-sm dark:border-l-white/70 md:p-8"
            >
              <div className="mb-5 flex items-center gap-2">
                <Terminal size={16} className="text-primary" />
                <span className="font-heading text-xs text-muted-foreground">README.md</span>
              </div>
              <div className="space-y-4 font-body leading-relaxed text-muted-foreground">
                {bio.map((paragraph, i) => {
                  const parts = paragraph.split(/(<strong>.*?<\/strong>|<code>.*?<\/code>)/g);
                  return (
                    <p key={i}>
                      {parts.map((part, j) => {
                        if (part.startsWith("<strong>")) {
                          return (
                            <span key={j} className="font-medium text-foreground">
                              {part.replace(/<\/?strong>/g, "")}
                            </span>
                          );
                        }
                        if (part.startsWith("<code>")) {
                          return (
                            <span key={j} className="font-heading text-sm text-primary">
                              {part.replace(/<\/?code>/g, "")}
                            </span>
                          );
                        }
                        return part;
                      })}
                    </p>
                  );
                })}
              </div>
            </motion.div>

            {/* Stacks de trabalho — um único card com faixas */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-sm md:p-8"
            >
              <h3 className="mb-6 font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                {t("about.stackTitle")}
              </h3>
              <ul className="flex-1 divide-y divide-border">
                {highlights.map((h, i) => {
                  const Icon = iconMap[i] || Globe;
                  return (
                    <li key={h.label} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                      <div className={`h-fit shrink-0 rounded-md bg-secondary p-2.5 ${colorMap[i]}`}>
                        <Icon size={20} aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <p className="font-heading text-sm font-semibold text-foreground">{h.label}</p>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{h.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
