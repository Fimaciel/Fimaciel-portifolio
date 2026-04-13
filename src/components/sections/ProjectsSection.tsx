import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useRef, type MouseEvent } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import type { ProjectItem } from "@/types/portfolio";

function TiltCard({ p, delay }: { p: ProjectItem; delay: number }) {
  const { t } = useTranslation();
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale3d(1.03,1.03,1.03)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.45 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transition: "transform 0.15s ease-out" }}
        className={`flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-sm ${
          p.highlight ? "border-primary/30" : "border-border"
        }`}
      >
        {/* Gradient / image area */}
        <div
          className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${
            p.gradient ?? "from-primary/20 to-purple-500/20"
          }`}
        >
          {p.image ? (
            <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
          ) : (
            <span className="select-none font-heading text-3xl font-bold text-foreground/20">{"{ }"}</span>
          )}
          {p.highlight && (
            <span className="absolute right-3 top-3 rounded-full bg-primary/90 px-2.5 py-0.5 font-heading text-[10px] uppercase tracking-wider text-primary-foreground">
              {t("projects.highlightBadge")}
            </span>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-5">
          <p className="mb-1 font-heading text-[11px] uppercase tracking-widest text-muted-foreground">
            {p.type}
          </p>
          <h3 className="mb-2 font-heading text-lg font-bold text-foreground">{p.name}</h3>
          <p className="mb-4 flex-1 font-body text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

          {/* Tech tags */}
          <div className="mb-5 flex flex-wrap gap-1.5">
            {p.tech.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-secondary px-2 py-0.5 font-heading text-[11px] text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-2 border-t border-border pt-4">
            {p.github ? (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border bg-secondary px-3 py-2 font-heading text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Github size={14} />
                Code
              </a>
            ) : (
              <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-1.5 rounded-lg border border-border bg-secondary/50 px-3 py-2 font-heading text-xs text-muted-foreground/50">
                <Github size={14} />
                Code
              </span>
            )}
            {p.deploy ? (
              <a
                href={p.deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 font-heading text-xs text-primary-foreground transition-opacity hover:opacity-90"
              >
                <ExternalLink size={14} />
                Live
              </a>
            ) : (
              <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-1.5 rounded-lg bg-primary/20 px-3 py-2 font-heading text-xs text-primary/40">
                <ExternalLink size={14} />
                Live
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const ProjectsSection = () => {
  const { t } = useTranslation();
  const projects = t("projects.items", { returnObjects: true }) as ProjectItem[];

  return (
    <section id="projects" className="section-padding">
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <TiltCard key={p.name} p={p} delay={i * 0.1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
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
