import { Github, Linkedin, Gamepad2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border px-4 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="flex items-center gap-1.5 font-body text-sm text-muted-foreground">
          {t("footer.text")} <Gamepad2 size={12} className="text-primary" /> {t("footer.textSuffix")}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Fimaciel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/filipe-maciel-lopes-221256267"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin size={18} />
          </a>
        </div>
        <p className="font-heading text-xs text-primary/50">
          {"<FM /> · "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
