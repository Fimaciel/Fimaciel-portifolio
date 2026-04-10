import { describe, expect, it } from "vitest";

import { renderWithProviders, screen } from "@/__tests__/test-utils";

import Navbar from "./Navbar";

describe("Navbar", () => {
  it("renders the brand monogram", () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText("<FM />")).toBeInTheDocument();
  });

  it("renders all PT navigation links", () => {
    renderWithProviders(<Navbar />, { initialLanguage: "pt" });
    const expected = ["Início", "Sobre", "Projetos", "Stack", "Experiência", "Formação", "Contato"];
    for (const label of expected) {
      const matches = screen.getAllByText(label);
      expect(matches.length).toBeGreaterThan(0);
    }
  });

  it("exposes theme and language toggle buttons", () => {
    renderWithProviders(<Navbar />);
    expect(screen.getAllByLabelText("Toggle theme").length).toBeGreaterThan(0);
    expect(screen.getAllByLabelText("Toggle language").length).toBeGreaterThan(0);
  });
});
