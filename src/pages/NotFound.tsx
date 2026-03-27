import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-center px-4">
      <h1 className="text-9xl font-heading font-black text-primary/20 absolute select-none">404</h1>
      <div className="relative z-10">
        <h2 className="text-3xl font-heading font-bold mb-4">{t("common.not_found_title")}</h2>
        <p className="text-muted-foreground font-body mb-8 max-w-md mx-auto">
          {t("common.not_found_desc")}
        </p>
        <Button asChild variant="hero">
          <Link to="/">
            {t("common.back_home")}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
