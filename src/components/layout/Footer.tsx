import { Github, Linkedin, Gamepad2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="border-t border-border py-8 px-4">
            <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground font-body flex items-center gap-1.5">
                    {t("footer.text")} <Gamepad2 size={12} className="text-primary" /> {t("footer.textSuffix")}
                </p>
                <div className="flex items-center gap-4">
                    <a href="https://github.com/Fimaciel" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={18} />
                    </a>
                    <a href="https://linkedin.com/in/filipe-maciel-lopes-221256267" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin size={18} />
                    </a>
                </div>
                <p className="font-heading text-xs text-primary/50">{"<FM /> · "}{new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;
