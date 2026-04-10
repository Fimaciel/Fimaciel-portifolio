import { describe, expect, it } from "vitest";

import en from "@/i18n/locales/en.json";
import pt from "@/i18n/locales/pt.json";

type AnyRecord = Record<string, unknown>;

function collectKeys(obj: AnyRecord, prefix = ""): string[] {
  return Object.entries(obj).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return collectKeys(value as AnyRecord, path);
    }
    return [path];
  });
}

describe("i18n resources", () => {
  it("loads PT and EN locales", () => {
    expect(pt).toBeDefined();
    expect(en).toBeDefined();
  });

  it("PT and EN share the same key structure", () => {
    const ptKeys = collectKeys(pt as AnyRecord).sort();
    const enKeys = collectKeys(en as AnyRecord).sort();
    expect(enKeys).toEqual(ptKeys);
  });

  it("exposes the expected top-level namespaces", () => {
    const namespaces = [
      "nav",
      "hero",
      "about",
      "projects",
      "skills",
      "experience",
      "education",
      "contact",
      "footer",
    ];
    for (const ns of namespaces) {
      expect(pt).toHaveProperty(ns);
      expect(en).toHaveProperty(ns);
    }
  });
});
