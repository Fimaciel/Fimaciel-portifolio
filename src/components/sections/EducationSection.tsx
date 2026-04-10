import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";

import type { CertificationItem, EducationItem } from "@/types/portfolio";

const EducationSection = () => {
  const { t } = useTranslation();
  const educationItems = t("education.items", { returnObjects: true }) as EducationItem[];
  const certifications = t("education.certifications", { returnObjects: true }) as CertificationItem[];

  return (
    <section id="education" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 font-heading text-sm uppercase tracking-widest text-primary">
            {t("education.tag")}
          </p>
          <h2 className="mb-12 font-heading text-3xl font-bold md:text-4xl">
            {t("education.title")} <span className="text-gradient">{t("education.titleHighlight")}</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Education */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              <GraduationCap size={18} className="text-primary" />
              {t("education.academicTitle")}
            </h3>
            <div className="space-y-4">
              {educationItems.map((e, i) => (
                <motion.div
                  key={e.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="hover:border-glow rounded-lg border border-border bg-card p-5 transition-colors"
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

          {/* Certifications */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              <Award size={18} className="text-primary" />
              {t("education.certificationsTitle")}
            </h3>
            <div className="space-y-4">
              {certifications.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="hover:border-glow rounded-lg border border-border bg-card p-5 transition-colors"
                >
                  <p className="font-heading text-sm font-semibold text-foreground">{c.title}</p>
                  <p className="mt-1 font-body text-xs text-muted-foreground">
                    {c.issuer} {c.year && `· ${c.year}`}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
