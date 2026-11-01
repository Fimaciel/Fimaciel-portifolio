import { motion } from "framer-motion";
import { Award, FlaskConical, GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";

import type { AcademicProjectItem, CertificationItem, EducationItem } from "@/features/portfolio";

const EducationSection = () => {
  const { t } = useTranslation();
  const educationItems = t("education.items", { returnObjects: true }) as EducationItem[];
  const academicProjects = t("education.projects", { returnObjects: true }) as AcademicProjectItem[];
  const certifications = t("education.certifications", { returnObjects: true }) as CertificationItem[];

  return (
    <section id="education" className="section-padding scroll-mt-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-kicker mb-2">{t("education.tag")}</p>
          <h2 className="mb-12 font-heading text-3xl font-bold md:text-4xl">
            {t("education.title")} <span className="text-gradient">{t("education.titleHighlight")}</span>
          </h2>
        </motion.div>

        <div className="grid overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-[0.85fr_1.15fr] lg:gap-px">
          <div className="bg-background/95 p-6 md:p-8">
            <h3 className="mb-5 flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              <GraduationCap size={18} className="text-primary" />
              {t("education.academicTitle")}
            </h3>
            <div className="divide-y divide-border border-y border-border">
              {educationItems.map((e, i) => (
                <motion.div
                  key={e.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="py-5"
                >
                  <p className="font-heading text-sm font-semibold text-foreground">{e.title}</p>
                  <p className="mt-1 font-body text-xs text-muted-foreground">{e.institution}</p>
                  <span className="mt-2 inline-block rounded bg-primary/10 px-2 py-0.5 font-heading text-xs text-primary">
                    {e.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="border-t border-border bg-background/95 p-6 md:p-8 lg:border-l lg:border-t-0">
            <h3 className="mb-5 flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              <FlaskConical size={18} className="text-primary" />
              {t("education.projectsTitle")}
            </h3>
            <div className="space-y-6">
              {academicProjects.map((project, i) => (
                <motion.article
                  key={project.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="border-l-2 border-primary pl-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-heading text-lg font-semibold text-foreground">{project.name}</p>
                    <span className="font-heading text-xs text-primary">{project.period}</span>
                  </div>
                  <p className="mt-1 font-heading text-xs uppercase tracking-wider text-muted-foreground">
                    {project.type} · {project.role}
                  </p>
                  <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {project.tasks.map((task) => (
                      <li key={task} className="flex gap-3 font-body text-sm text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 bg-primary" aria-hidden />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="mb-5 flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
            <Award size={18} className="text-primary" />
            {t("education.certificationsTitle")}
          </h3>
          <div className="grid border-y border-border sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification, i) => (
              <motion.div
                key={certification.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                className="border-b border-border px-0 py-5 sm:px-5 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0"
              >
                <p className="font-heading text-sm font-semibold text-foreground">{certification.title}</p>
                <p className="mt-1 font-body text-xs text-muted-foreground">
                  {certification.issuer} {certification.year && `· ${certification.year}`}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
