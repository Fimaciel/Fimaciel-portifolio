import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FileCode2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  CODE_VARIANTS,
  type CodeVariant,
  getCodeFileExtension,
  renderHeroCode,
  type HeroProfile,
  type HeroProfileKeys,
} from "@/lib/heroCodeBlockFormats";

const STORAGE_KEY = "portfolio-hero-code-variant";

function isCodeVariant(v: string): v is CodeVariant {
  return (CODE_VARIANTS as readonly string[]).includes(v);
}

interface CodeBlockI18n {
  fileBase: string;
  selectAria: string;
  variants: Record<string, string>;
  keys: HeroProfileKeys;
  profile: HeroProfile;
}

export default function HeroCodeBlock() {
  const { t } = useTranslation();
  const data = t("hero.codeBlock", { returnObjects: true }) as CodeBlockI18n;

  const [variant, setVariant] = useState<CodeVariant>("json");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && isCodeVariant(saved)) setVariant(saved);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, variant);
    } catch {
      /* ignore */
    }
  }, [variant]);

  const filename = `${data.fileBase}${getCodeFileExtension(variant)}`;

  const code = useMemo(
    () => renderHeroCode(variant, data.profile, data.keys),
    [variant, data.profile, data.keys],
  );

  return (
    <div className="glow-box overflow-hidden rounded-xl border border-border bg-card shadow-lg">
      <div className="flex flex-row flex-wrap items-center gap-x-2 gap-y-2 border-b border-border bg-muted/40 px-3 py-3 sm:px-4">
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:min-w-[8rem]">
          <FileCode2 className="h-4 w-4 shrink-0 text-primary" aria-hidden />
          <span className="truncate font-heading text-xs text-foreground" title={filename}>
            {filename}
          </span>
        </div>

        <span className="select-none font-heading text-sm text-muted-foreground" aria-hidden>
          |
        </span>

        <Select
          value={variant}
          onValueChange={(v) => isCodeVariant(v) && setVariant(v)}
          aria-label={data.selectAria}
        >
          <SelectTrigger className="h-9 w-[min(100%,11rem)] shrink-0 font-heading text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {CODE_VARIANTS.map((id) => (
              <SelectItem key={id} value={id} className="font-heading text-xs">
                {data.variants[id] ?? id}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="border-b border-border/80 bg-muted/20 px-4 py-2">
        <span
          className="select-none font-heading text-[11px] tracking-widest text-muted-foreground/70 sm:text-xs"
          aria-hidden
        >
          ---
        </span>
      </div>

      <div className="overflow-x-auto p-4 md:p-5">
        <pre className="m-0 text-left font-heading text-[11px] leading-relaxed sm:text-xs">
          <code className="text-foreground">{code}</code>
        </pre>
      </div>
    </div>
  );
}
