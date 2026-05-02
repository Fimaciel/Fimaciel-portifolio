import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";
import type { ExperienceItem } from "@/types/portfolio";

const ExperienceSection = () => {
  const { t } = useTranslation();
  const experiences = t("experience.items", { returnObjects: true }) as ExperienceItem[];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 font-heading text-sm uppercase tracking-widest text-primary">
            {t("experience.tag")}
          </p>
          <h2 className="mb-12 font-heading text-3xl font-bold md:text-4xl">
            {t("experience.title")} <span className="text-gradient">{t("experience.titleHighlight")}</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div
            className="absolute bottom-0 left-4 top-0 w-px bg-border md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.4 }}
                  className={cn("relative grid grid-cols-1 md:grid-cols-2 md:gap-8", "pl-12 md:pl-0")}
                >
                  <div
                    className="glow-box absolute left-2.5 top-1 z-10 h-3 w-3 rounded-full bg-primary md:left-1/2 md:-translate-x-1/2"
                    aria-hidden
                  />

                  {isLeft ? (
                    <>
                      <div className="md:pr-8">
                        <ExperienceContent exp={exp} />
                      </div>
                      <div className="hidden md:block" aria-hidden />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" aria-hidden />
                      <div className="md:pl-8">
                        <ExperienceContent exp={exp} />
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

function ExperienceContent({ exp }: { exp: ExperienceItem }) {
  return (
    <div>
      <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Briefcase size={16} className="text-primary" />
          <h3 className="font-heading font-bold text-foreground">{exp.company}</h3>
        </div>
        <span className="font-heading text-xs text-muted-foreground">{exp.period}</span>
      </div>
      <p className="mb-3 font-body text-sm text-primary">{exp.role}</p>
      <ul className="space-y-1.5">
        {exp.tasks.map((task, ti) => (
          <li key={ti} className="flex items-start gap-2.5 font-body text-sm text-muted-foreground">
            <span className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
            <span className="flex-1">{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceSection;
