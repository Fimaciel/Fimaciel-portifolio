import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { portfolioConfig } from "@/config/portfolio";
import type { NavLinkItem } from "@/features/portfolio";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const links = t("nav.links", { returnObjects: true }) as NavLinkItem[];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const toggleLang = () => i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt");

  return (
    <nav className="fixed left-0 right-0 top-3 z-50 px-4 transition-all duration-300">
      <div
        className={`mx-auto flex h-14 w-full max-w-screen-xl items-center justify-between rounded-lg border px-4 backdrop-blur-md transition-all ${
          scrolled ? "border-border bg-background/85 shadow-sm" : "border-border/60 bg-background/55"
        }`}
      >
        <a href="#home" className="font-heading text-lg font-bold text-primary">
          {portfolioConfig.brand}
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-4 flex items-center gap-2 border-l border-border pl-4">
            <button
              onClick={toggleTheme}
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 font-heading text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              aria-label="Toggle language"
            >
              <Languages size={16} />
              {i18n.language === "pt" ? "EN" : "PT"}
            </button>
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-primary"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggleLang}
            className="rounded-md px-2 py-1.5 font-heading text-xs text-muted-foreground transition-colors hover:text-primary"
            aria-label="Toggle language"
          >
            {i18n.language === "pt" ? "EN" : "PT"}
          </button>
          <button className="text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 w-full max-w-screen-xl overflow-hidden rounded-lg border border-border bg-background/95 shadow-lg backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 font-body text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
