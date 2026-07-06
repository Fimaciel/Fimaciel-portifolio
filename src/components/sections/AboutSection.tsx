import { motion } from "framer-motion";
import { Braces, Database, GitBranch, Server } from "lucide-react";
import { useTranslation } from "react-i18next";

import type { AboutHighlight } from "@/features/portfolio";

const icons = [Server, Braces, Database, GitBranch];

function renderRichText(text: string) {
  const parts = text.split(/(<strong>.*?<\/strong>|<code>.*?<\/code>)/g);

  return parts.map((part, index) => {
    if (part.startsWith("<strong>")) {
      return (
        <strong key={index} className="font-semibold text-foreground">
          {part.replace(/<\/?strong>/g, "")}
        </strong>
      );
    }

    if (part.startsWith("<code>")) {
      return (
        <code
          key={index}
          className="rounded border border-border bg-secondary/40 px-1.5 py-0.5 font-heading text-sm text-foreground"
        >
          {part.replace(/<\/?code>/g, "")}
        </code>
      );
    }

    return part;
  });
}

const AboutSection = () => {
  const { t } = useTranslation();
  const bio = t("about.bio", { returnObjects: true }) as string[];
  const highlights = t("about.highlights", { returnObjects: true }) as AboutHighlight[];

  return (
    <section id="about" className="section-padding scroll-mt-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]"
        >
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-kicker mb-3">{t("about.tag")}</p>
            <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
              {t("about.title")}
              <br />
              <span className="text-gradient">{t("about.titleHighlight")}</span>
            </h2>
          </div>

          <div className="border-y border-border">
            <div className="grid gap-8 py-8 md:grid-cols-[minmax(0,1fr)_11rem]">
              <div className="space-y-6">
                {bio.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className="grid gap-3 font-body text-base leading-relaxed text-muted-foreground sm:grid-cols-[3.5rem_minmax(0,1fr)]"
                  >
                    <span className="font-heading text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{renderRichText(paragraph)}</span>
                  </p>
                ))}
              </div>

              <div className="hidden border-l border-border pl-6 md:block">
                <p className="font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground">stack</p>
                <p className="mt-3 font-heading text-2xl font-semibold leading-tight text-foreground">
                  PHP
                  <br />
                  Python
                  <br />
                  SQL
                  <br />
                  JS
                </p>
              </div>
            </div>

            <div className="grid border-t border-border md:grid-cols-4">
              {highlights.map((item, index) => {
                const Icon = icons[index] ?? Server;

                return (
                  <div
                    key={item.label}
                    className="border-b border-border py-5 md:border-b-0 md:border-r md:px-5 md:last:border-r-0"
                  >
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded border border-border bg-secondary/40">
                      <Icon size={18} aria-hidden />
                    </div>
                    <p className="font-heading text-sm font-semibold text-foreground">{item.label}</p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
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
