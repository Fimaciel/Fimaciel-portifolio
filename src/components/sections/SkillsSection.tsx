import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

import type { TechStackItem } from "@/types/portfolio";

/** Slugs removidos/renomeados no CDN atual; mantém URLs válidas. */
const ICON_SLUG_ALIASES: Record<string, string> = {
  css3: "css",
  csharp: "dotnet",
  java: "openjdk",
};

const iconUrl = (slug: string) => {
  const resolved = ICON_SLUG_ALIASES[slug] ?? slug;
  return `https://cdn.simpleicons.org/${encodeURIComponent(resolved)}?viewbox=auto`;
};

const SkillsSection = () => {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  const items = t("skills.items", { returnObjects: true }) as TechStackItem[];

  const track = (dup: number, layout: "marquee" | "static") => (
    <ul
      key={dup}
      className={
        layout === "static"
          ? "mx-auto flex max-w-5xl flex-wrap justify-center gap-x-10 gap-y-8 px-4 md:gap-x-14"
          : "flex shrink-0 items-center gap-10 px-5 md:gap-14 md:px-8"
      }
      aria-hidden={layout === "marquee" && dup === 1}
    >
      {items.map((item) => {
        const slugs = item.icons?.length ? item.icons : item.icon ? [item.icon] : [];
        return (
          <li
            key={`${dup}-${item.name}-${slugs.join("-")}`}
            className="flex flex-col items-center gap-2.5 text-center"
          >
            <div className="flex h-10 items-center justify-center gap-2">
              {slugs.map((slug) => (
                <img
                  key={slug}
                  src={iconUrl(slug)}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 opacity-85 grayscale transition-[filter,opacity] duration-300 hover:opacity-100 hover:grayscale-0"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
            <span className="max-w-[7.5rem] font-body text-xs leading-tight text-muted-foreground">
              {item.name}
            </span>
          </li>
        );
      })}
    </ul>
  );

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 font-heading text-sm uppercase tracking-widest text-primary">
            {t("skills.tag")}
          </p>
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            {t("skills.title")} <span className="text-gradient">{t("skills.titleHighlight")}</span>
          </h2>
          <p className="mb-10 max-w-xl font-body text-muted-foreground">{t("skills.subtitle")}</p>
        </motion.div>

        <div
          className={
            prefersReducedMotion
              ? "relative rounded-xl border border-border bg-card/40 py-8"
              : "relative overflow-hidden rounded-xl border border-border bg-card/40 py-8 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          }
        >
          <div className={prefersReducedMotion ? "" : "flex w-max animate-marquee"}>
            {prefersReducedMotion ? (
              track(0, "static")
            ) : (
              <>
                {track(0, "marquee")}
                {track(1, "marquee")}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
