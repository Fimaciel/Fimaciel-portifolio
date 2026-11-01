export const portfolioConfig = {
  owner: "Filipe Maciel Lopes",
  brand: "<FM />",
  links: {
    github: "https://github.com/Fimaciel",
    linkedin: "https://linkedin.com/in/filipe-maciel-lopes-221256267",
    email: "mailto:filipemaciellopes01@gmail.com",
  },
  resumes: {
    pt: "/curriculo-pt.pdf",
    en: "/curriculo-en.pdf",
  },
} as const;

export type SupportedLocale = keyof typeof portfolioConfig.resumes;

export function getResumeHref(language: string): string {
  const locale: SupportedLocale = language.startsWith("en") ? "en" : "pt";
  return portfolioConfig.resumes[locale];
}
