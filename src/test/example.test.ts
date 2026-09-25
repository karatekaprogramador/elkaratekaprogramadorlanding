import { readFileSync } from "node:fs";
import { act, createElement } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, describe, expect, it, vi } from "vitest";
import { LanguageProvider, useLanguage } from "../components/LanguageProvider";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Index from "../pages/Index";

const catalog = JSON.parse(readFileSync("public/i18n/en.json", "utf8"));
let root: Root;

function Sample() {
  const { t } = useLanguage();
  return createElement("span", null, t("Inicio"));
}

async function renderPage(content = createElement(Index)) {
  vi.stubGlobal("IS_REACT_ACT_ENVIRONMENT", true);
  document.body.innerHTML = '<div id="root"></div>';
  root = createRoot(document.getElementById("root")!);
  await act(async () => {
    root.render(createElement(LanguageProvider, null, content, createElement(LanguageSwitcher)));
  });
}

async function selectLanguage(language: "es" | "en") {
  await act(async () => {
    document.querySelector<HTMLButtonElement>(`button[aria-pressed="false"]${language === "en" ? ":last-child" : ":first-child"}`)?.click();
  });
}

afterEach(async () => {
  if (root) await act(async () => { root.unmount(); });
  vi.unstubAllGlobals();
  localStorage.clear();
  document.body.innerHTML = "";
  window.history.replaceState({}, "", "/");
  document.documentElement.lang = "es";
});

describe("English localization", () => {
  it("includes translations for long-form content and interaction messages", () => {
    for (const text of [
      "La IA acelera el desarrollo, pero también esconde deuda técnica, fallas de seguridad y arquitecturas frágiles. Audito, corrijo y reconstruyo sistemas vibecodeados, MVPs y plataformas complejas para que tu producto sobreviva al mundo real.",
      "Revisión profunda de código generado con IA: deuda técnica oculta, fallas de seguridad y arquitecturas frágiles. Recibes un informe priorizado con plan de corrección.",
      "Plataforma móvil para gestión de créditos y préstamos personales.",
      "Espera 30 segundos antes de volver a enviar.",
    ]) {
      expect(catalog.translations[text], text).toBeTruthy();
    }
  });

  it("covers every explicit translation key used by the pages", () => {
    for (const file of [
      "src/components/Header.tsx", "src/components/Hero.tsx", "src/components/SocialProof.tsx",
      "src/components/Services.tsx", "src/components/TechStack.tsx", "src/components/Portfolio.tsx",
      "src/components/About.tsx", "src/components/Contact.tsx", "src/components/Footer.tsx",
      "src/components/LanguageSwitcher.tsx", "src/pages/NotFound.tsx",
    ]) {
      const source = readFileSync(file, "utf8");
      for (const [, key] of source.matchAll(/\bt\("([^"]+)"\)/g)) {
        expect(catalog.translations[key], `${file}: ${key}`).toBeTruthy();
      }
    }
  });

  it("renders the entire page and newly opened contact form in English", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => ({ ok: true, json: async () => catalog })));
    await renderPage();
    await selectLanguage("en");

    expect(document.querySelector("h1")!.textContent).toContain("Your software works.");
    expect(document.body.textContent).toContain("AI speeds up development");
    expect(document.body.textContent).toContain("In-depth review of AI-generated code");
    expect(document.body.textContent).toContain("Mobile platform for managing credit");
    expect(document.body.textContent).toContain("My approach combines the discipline of karate");
    expect(document.documentElement.lang).toBe("en");

    const openForm = [...document.querySelectorAll("button")].find((button) => button.textContent?.includes("Send a message"));
    await act(async () => { openForm!.click(); });
    expect(document.querySelector('input[name="from_name"]')?.getAttribute("placeholder")).toBe("Your name");
    expect(document.body.textContent).toContain("Send me a message");
    await selectLanguage("es");
    expect(document.querySelector("h1")!.textContent).toContain("Tu sistema funciona.");
    expect(document.body.textContent).toContain("La IA acelera el desarrollo");
    expect(document.querySelector('input[name="from_name"]')?.getAttribute("placeholder")).toBe("Tu nombre");
    await selectLanguage("en");
    expect(document.querySelector('input[name="from_name"]')?.getAttribute("placeholder")).toBe("Your name");

    localStorage.setItem("last_email_ts", String(Date.now()));
    await act(async () => { document.querySelector("form")!.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true })); });
    expect(document.body.textContent).toMatch(/Please wait 30 seconds|EmailJS environment variables are missing/);

    const spanish = /[áéíóúñ¿¡]|\b(para|con|de|en|al|por|del|que|sin|más)\b/;
    const walker = document.createTreeWalker(document.getElementById("root")!, NodeFilter.SHOW_TEXT);
    const untranslated: string[] = [];
    let node: Node | null;
    while ((node = walker.nextNode())) {
      const value = node.textContent?.trim() ?? "";
      if (spanish.test(value)) untranslated.push(value);
    }
    expect(untranslated).toEqual([]);
    const untranslatedAttributes = [...document.querySelectorAll("[alt], [aria-label], [placeholder], [title]")]
      .flatMap((element) => ["alt", "aria-label", "placeholder", "title"].map((name) => element.getAttribute(name) ?? ""))
      .filter((value) => spanish.test(value));
    expect(untranslatedAttributes).toEqual([]);
  });

  it("switches between languages and restores metadata without reloading", async () => {
    const fetchCatalog = vi.fn(async () => ({ ok: true, json: async () => catalog }));
    vi.stubGlobal("fetch", fetchCatalog);
    document.title = "Español";
    await renderPage(createElement(Sample));
    await selectLanguage("en");
    expect(document.querySelector("span")!.textContent).toBe("Home");
    expect(document.title).toBe(catalog.meta.title);
    expect(localStorage.getItem("site_language")).toBe("en");
    expect(fetchCatalog).toHaveBeenCalledWith(`${import.meta.env.BASE_URL}i18n/en.json`);

    await selectLanguage("es");
    expect(document.querySelector("span")!.textContent).toBe("Inicio");
    expect(document.title).toBe("Español");
    expect(localStorage.getItem("site_language")).toBe("es");
  });

  it("restores a saved English preference after the catalog loads", async () => {
    localStorage.setItem("site_language", "en");
    vi.stubGlobal("fetch", vi.fn(async () => ({ ok: true, json: async () => catalog })));
    await renderPage(createElement(Sample));
    expect(document.querySelector("span")!.textContent).toBe("Home");
    expect(document.documentElement.lang).toBe("en");
    expect(document.querySelector('button[aria-pressed="true"]')?.textContent).toBe("EN");
  });

  it("finds the catalog beside the page when the configured base does not match deployment", async () => {
    window.history.replaceState({}, "", "/site/");
    const fetchCatalog = vi.fn(async (url: string) => ({
      ok: url === "/site/i18n/en.json",
      json: async () => catalog,
    }));
    vi.stubGlobal("fetch", fetchCatalog);
    await renderPage(createElement(Sample));
    await selectLanguage("en");
    expect(document.querySelector("span")!.textContent).toBe("Home");
    expect(fetchCatalog).toHaveBeenCalledWith("/site/i18n/en.json");
  });
});
