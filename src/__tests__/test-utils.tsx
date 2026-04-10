import { render, type RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "next-themes";
import type { ReactElement, ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";

import i18n from "@/lib/i18n";

interface AllProvidersProps {
  children: ReactNode;
  initialLanguage?: string;
  initialRoute?: string;
}

function AllProviders({ children, initialLanguage = "pt", initialRoute = "/" }: AllProvidersProps) {
  if (i18n.language !== initialLanguage) {
    void i18n.changeLanguage(initialLanguage);
  }
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider attribute="class" defaultTheme="dark" storageKey="portfolio-theme-test">
        <MemoryRouter initialEntries={[initialRoute]}>{children}</MemoryRouter>
      </ThemeProvider>
    </I18nextProvider>
  );
}

interface CustomRenderOptions extends Omit<RenderOptions, "wrapper"> {
  initialLanguage?: string;
  initialRoute?: string;
}

export function renderWithProviders(ui: ReactElement, options: CustomRenderOptions = {}) {
  const { initialLanguage, initialRoute, ...rest } = options;
  return render(ui, {
    wrapper: ({ children }) => (
      <AllProviders initialLanguage={initialLanguage} initialRoute={initialRoute}>
        {children}
      </AllProviders>
    ),
    ...rest,
  });
}

export * from "@testing-library/react";
