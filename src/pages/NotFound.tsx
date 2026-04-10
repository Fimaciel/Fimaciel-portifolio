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
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="absolute select-none font-heading text-9xl font-black text-primary/20">404</h1>
      <div className="relative z-10">
        <h2 className="mb-4 font-heading text-3xl font-bold">{t("common.not_found_title")}</h2>
        <p className="mx-auto mb-8 max-w-md font-body text-muted-foreground">{t("common.not_found_desc")}</p>
        <Button asChild variant="hero">
          <Link to="/">{t("common.back_home")}</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
