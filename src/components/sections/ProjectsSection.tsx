import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import type { ProjectItem } from "@/types/portfolio";

function circularDistance(i: number, center: number, total: number) {
  let d = (((i - center) % total) + total) % total;
  if (d > total / 2) d -= total;
  return d;
}

function ProjectCard({ p, active }: { p: ProjectItem; active: boolean }) {
  const { t } = useTranslation();

  return (
    <div
      className={`relative flex h-full w-full flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-500 ${
        active
          ? "border-primary/60 shadow-2xl shadow-primary/20 ring-1 ring-primary/40"
          : "border-border/60 shadow-md"
      }`}
    >
      <div
        className={`relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-gradient-to-br ${
          p.gradient ?? "from-primary/20 to-purple-500/20"
        }`}
      >
        {p.image ? (
          <img
            src={p.image}
            alt={p.name}
            className={`h-full w-full object-cover transition-transform duration-700 ${
              active ? "scale-105" : "scale-100"
            }`}
          />
        ) : (
          <span className="absolute inset-0 flex select-none items-center justify-center font-heading text-7xl font-bold text-foreground/20">
            {"{ }"}
          </span>
        )}

        {p.highlight && (
          <span className="absolute right-3 top-3 rounded-full bg-primary/90 px-3 py-1 font-heading text-[10px] uppercase tracking-widest text-primary-foreground shadow-md backdrop-blur-sm">
            {t("projects.highlightBadge")}
          </span>
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card via-card/70 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-1 font-heading text-[11px] uppercase tracking-widest text-primary">{p.type}</p>
        <h3 className="mb-2 font-heading text-xl font-bold text-foreground">{p.name}</h3>
        <p className="mb-4 flex-1 font-body text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {p.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-secondary px-2 py-0.5 font-heading text-[11px] text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2 border-t border-border pt-4">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-secondary px-3 py-2 font-heading text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary ${
                !p.deploy ? "flex-1" : ""
              }`}
            >
              <Github size={14} />
              Code
            </a>
          )}
          {p.deploy && (
            <a
              href={p.deploy}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 font-heading text-xs text-primary-foreground transition-opacity hover:opacity-90"
            >
              <ExternalLink size={14} />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const ProjectsSection = () => {
  const { t } = useTranslation();
  const projects = t("projects.items", { returnObjects: true }) as ProjectItem[];

  const slides = projects.length > 0 ? [...projects, ...projects, ...projects] : [];
  const startIndex =
    slides.length > 0 ? projects.length + Math.max(0, Math.ceil(projects.length / 2) - 1) : 0;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
    skipSnaps: false,
    dragFree: false,
    startIndex,
  });

  const [current, setCurrent] = useState(startIndex);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="projects" className="section-padding overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="mb-2 font-heading text-sm uppercase tracking-widest text-primary">
              {t("projects.tag")}
            </p>
            <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
              {t("projects.title")} <span className="text-gradient">{t("projects.titleHighlight")}</span>
            </h2>
            <p className="max-w-lg font-body text-muted-foreground">{t("projects.subtitle")}</p>
          </div>

          <div className="mt-4 flex items-center gap-3 sm:mt-0">
            <button
              onClick={scrollPrev}
              aria-label="Anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="min-w-[3.5rem] text-center font-heading text-sm tabular-nums text-muted-foreground">
              {String((current % projects.length) + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
            <button
              onClick={scrollNext}
              aria-label="Próximo"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="relative">
        <div ref={emblaRef} className="overflow-visible px-4 py-10">
          <div className="flex touch-pan-y select-none">
            {slides.map((p, i) => {
              const dist = Math.abs(circularDistance(i, current, slides.length));
              const isActive = dist === 0;
              const scale = dist === 0 ? 1 : dist === 1 ? 0.92 : 0.84;
              const opacity = dist === 0 ? 1 : dist === 1 ? 0.7 : 0.4;
              const zIndex = dist === 0 ? 20 : dist === 1 ? 10 : 1;

              return (
                <div
                  key={`${p.name}-${i}`}
                  className="relative flex shrink-0 grow-0 items-stretch px-3"
                  style={{ flex: "0 0 320px", zIndex }}
                >
                  <button
                    type="button"
                    onClick={() => !isActive && emblaApi?.scrollTo(i)}
                    disabled={isActive}
                    aria-label={isActive ? p.name : `Ir para ${p.name}`}
                    className="block w-full rounded-2xl text-left transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-grab"
                    style={{
                      transform: `scale(${scale})`,
                      opacity,
                    }}
                  >
                    <ProjectCard p={p} active={isActive} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {projects.map((_, i) => {
          const activeIdx = current % projects.length;
          return (
            <button
              key={i}
              onClick={() => {
                const offset = i - activeIdx;
                if (offset === 0) return;
                emblaApi?.scrollTo(current + offset);
              }}
              aria-label={`Ir para projeto ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIdx
                  ? "w-8 bg-primary"
                  : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
            />
          );
        })}
      </div>

      <div className="container">
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
