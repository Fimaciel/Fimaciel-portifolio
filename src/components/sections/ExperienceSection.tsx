import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import type { ExperienceItem } from "@/features/portfolio";

const ExperienceSection = () => {
  const { t } = useTranslation();
  const experiences = t("experience.items", { returnObjects: true }) as ExperienceItem[];

  return (
    <section id="experience" className="section-padding scroll-mt-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-kicker mb-2">{t("experience.tag")}</p>
          <h2 className="mb-12 font-heading text-3xl font-bold md:text-4xl">
            {t("experience.title")} <span className="text-gradient">{t("experience.titleHighlight")}</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div
            className="absolute bottom-0 left-3 top-0 w-px bg-border md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          <div className="space-y-14">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.article
                  key={exp.company}
                  initial={{ opacity: 0, x: isLeft ? -18 : 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.35 }}
                  className="relative grid grid-cols-1 pl-10 md:grid-cols-2 md:gap-16 md:pl-0"
                >
                  <div
                    className="absolute left-[0.45rem] top-1 h-3 w-3 rounded-sm border border-primary bg-background md:left-1/2 md:-translate-x-1/2"
                    aria-hidden
                  />

                  <ExperienceContent
                    exp={exp}
                    align={isLeft ? "right" : "left"}
                    side={isLeft ? "left" : "right"}
                  />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

function ExperienceContent({
  exp,
  align,
  side,
}: {
  exp: ExperienceItem;
  align: "left" | "right";
  side: "left" | "right";
}) {
  const content = (
    <div className={align === "right" ? "md:text-right" : undefined}>
      <p className="font-heading text-xs uppercase tracking-[0.18em] text-muted-foreground">{exp.period}</p>
      <h3 className="mt-2 font-heading text-lg font-bold text-foreground">{exp.company}</h3>
      <p className="mt-1 font-body text-sm text-primary">{exp.role}</p>

      <ul className="mt-5 space-y-2.5">
        {exp.tasks.map((task) => (
          <li
            key={task}
            className={`flex gap-2.5 font-body text-sm leading-relaxed text-muted-foreground ${
              align === "right" ? "md:flex-row-reverse" : ""
            }`}
          >
            <span className="mt-[0.62rem] h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return side === "left" ? (
    <>
      <div className="md:pr-2">{content}</div>
      <div className="hidden md:block" aria-hidden />
    </>
  ) : (
    <>
      <div className="hidden md:block" aria-hidden />
      <div className="md:pl-2">{content}</div>
    </>
  );
}

export default ExperienceSection;
