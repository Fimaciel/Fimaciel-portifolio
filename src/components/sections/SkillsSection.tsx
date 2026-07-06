import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

import type { TechStackGroup, TechStackItem } from "@/features/portfolio";

/** Slugs removidos/renomeados no CDN atual; mantém URLs válidas. */
const ICON_SLUG_ALIASES: Record<string, string> = {
  css3: "css",
  csharp: "dotnet",
};

/** Ícones fora do Simple Icons (ex.: Java removido por marca registrada). */
const ICON_URL_OVERRIDES: Record<string, string> = {
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
};

const iconUrl = (slug: string) => {
  if (ICON_URL_OVERRIDES[slug]) return ICON_URL_OVERRIDES[slug];
  const resolved = ICON_SLUG_ALIASES[slug] ?? slug;
  return `https://cdn.simpleicons.org/${encodeURIComponent(resolved)}?viewbox=auto`;
};

type Tier = "core" | "familiar";

const TIER_STYLES: Record<Tier, { img: string; box: string; size: number }> = {
  core: { img: "h-10 w-10 opacity-90", box: "h-11", size: 40 },
  familiar: { img: "h-8 w-8 opacity-60", box: "h-9", size: 32 },
};

const SkillsSection = () => {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  const groups = t("skills.groups", { returnObjects: true }) as TechStackGroup[];

  const renderTrack = (items: TechStackItem[], dup: number, layout: "marquee" | "static", tier: Tier) => {
    const style = TIER_STYLES[tier];
    return (
      <ul
        key={dup}
        className={
          layout === "static"
            ? "mx-auto flex max-w-5xl flex-wrap justify-center gap-x-10 gap-y-8 px-4 md:gap-x-14"
            : "flex shrink-0 items-center gap-8 px-4 md:gap-12 md:px-6"
        }
        aria-hidden={layout === "marquee" && dup === 1}
      >
        {items.map((item) => {
          const slugs = item.icons?.length ? item.icons : item.icon ? [item.icon] : [];
          return (
            <li
              key={`${dup}-${item.name}-${slugs.join("-")}`}
              className="flex min-w-[6.75rem] flex-col items-center gap-2.5 text-center"
            >
              <div className={`flex items-center justify-center gap-2 ${style.box}`}>
                {slugs.map((slug) => (
                  <img
                    key={slug}
                    src={iconUrl(slug)}
                    alt=""
                    width={style.size}
                    height={style.size}
                    className={`${style.img} grayscale transition-[filter,opacity] duration-300 hover:opacity-100 hover:grayscale-0`}
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
              <span className="max-w-[7.5rem] font-heading text-[11px] leading-tight text-muted-foreground">
                {item.name}
              </span>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderGroup = (group: TechStackGroup, idx: number) => {
    const tier: Tier = idx === 0 ? "core" : "familiar";
    const reverse = tier === "familiar";

    return (
      <div key={group.label} className="space-y-3">
        <div className="container">
          <p className="flex items-center gap-3 font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span
              className={
                tier === "core" ? "inline-block h-px w-8 bg-primary" : "inline-block h-px w-8 bg-border"
              }
              aria-hidden
            />
            {group.label}
          </p>
        </div>
        <div
          className={
            prefersReducedMotion
              ? "relative left-1/2 w-screen -translate-x-1/2 border-y border-border bg-card/55 py-6"
              : "relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-border bg-card/55 py-6 [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]"
          }
        >
          <div
            className={prefersReducedMotion ? "" : "flex w-max animate-marquee will-change-transform"}
            style={
              prefersReducedMotion
                ? undefined
                : {
                    animationDirection: reverse ? "reverse" : "normal",
                    animationDuration: tier === "core" ? "42s" : "58s",
                  }
            }
          >
            {prefersReducedMotion ? (
              renderTrack(group.items, 0, "static", tier)
            ) : (
              <>
                {renderTrack(group.items, 0, "marquee", tier)}
                {renderTrack(group.items, 1, "marquee", tier)}
                {renderTrack(group.items, 2, "marquee", tier)}
                {renderTrack(group.items, 3, "marquee", tier)}
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="section-padding scroll-mt-24 bg-card/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-kicker mb-2">{t("skills.tag")}</p>
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            {t("skills.title")} <span className="text-gradient">{t("skills.titleHighlight")}</span>
          </h2>
          <p className="mb-10 max-w-xl font-body text-muted-foreground">{t("skills.subtitle")}</p>
        </motion.div>
      </div>

      <div className="space-y-8">{groups.map((group, idx) => renderGroup(group, idx))}</div>
    </section>
  );
};

export default SkillsSection;
