import { useState } from "react";
import { Menu, X, Sun, Moon, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

interface NavLinkItem {
    label: string;
    href: string;
}

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const { t, i18n } = useTranslation();

    const links = t("nav.links", { returnObjects: true }) as NavLinkItem[];

    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
    const toggleLang = () => i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt");

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container flex items-center justify-between h-16">
                <a href="#home" className="font-heading font-bold text-lg text-primary">
                    {"<FM />"}
                </a>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-6">
                    <ul className="flex gap-6">
                        {links.map((l) => (
                            <li key={l.href}>
                                <a
                                    href={l.href}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-2 ml-4 border-l border-border pl-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button
                            onClick={toggleLang}
                            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-heading text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                            aria-label="Toggle language"
                        >
                            <Languages size={16} />
                            {i18n.language === "pt" ? "EN" : "PT"}
                        </button>
                    </div>
                </div>

                {/* Mobile toggle */}
                <div className="flex md:hidden items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-md text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button
                        onClick={toggleLang}
                        className="px-2 py-1.5 rounded-md text-xs font-heading text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Toggle language"
                    >
                        {i18n.language === "pt" ? "EN" : "PT"}
                    </button>
                    <button
                        className="text-foreground"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-background border-b border-border overflow-hidden"
                    >
                        <ul className="flex flex-col gap-2 p-4">
                            {links.map((l) => (
                                <li key={l.href}>
                                    <a
                                        href={l.href}
                                        onClick={() => setOpen(false)}
                                        className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
