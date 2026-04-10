import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Folder, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import type { ProjectItem } from "@/types/portfolio";

const ProjectsSection = () => {
  const { t } = useTranslation();
  const projects = t("projects.items", { returnObjects: true }) as ProjectItem[];

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 font-heading text-sm uppercase tracking-widest text-primary">
            {t("projects.tag")}
          </p>
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            {t("projects.title")} <span className="text-gradient">{t("projects.titleHighlight")}</span>
          </h2>
          <p className="mb-12 max-w-lg font-body text-muted-foreground">{t("projects.subtitle")}</p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`hover:glow-box group rounded-lg border bg-card p-6 transition-all md:p-8 ${
                p.highlight ? "border-primary/30" : "hover:border-glow border-border"
              }`}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-3">
                    <Folder size={18} className="text-primary" />
                    <span className="font-heading text-xs text-muted-foreground">{p.type}</span>
                    {p.highlight && (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 font-heading text-[10px] uppercase tracking-wider text-primary">
                        {t("projects.highlightBadge")}
                      </span>
                    )}
                  </div>
                  <h3 className="mb-2 flex items-center gap-2 font-heading text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                    {p.name}
                    <ArrowUpRight
                      size={16}
                      className="text-primary opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </h3>
                  <p className="max-w-xl font-body text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 md:max-w-[200px] md:justify-end">
                  {p.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="rounded-md bg-secondary px-2.5 py-1 font-heading text-xs text-secondary-foreground"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://github.com/Fimaciel" target="_blank" rel="noopener noreferrer">
              <Github size={18} />
              {t("projects.githubButton")}
              <ExternalLink size={14} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
