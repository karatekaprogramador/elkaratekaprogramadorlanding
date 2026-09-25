import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";

type Language = "es" | "en";
type Catalog = { meta: { title: string; description: string; ogTitle: string; ogDescription: string }; translations: Record<string, string> };
type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void; t: (text: string) => string; ready: boolean };

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [selectedLanguage, setLanguage] = useState<Language>(() => localStorage.getItem("site_language") === "en" ? "en" : "es");
  const [catalog, setCatalog] = useState<Catalog | null>(null);
  const originalMeta = useRef<{ title: string; description: string | null; ogTitle: string | null; ogDescription: string | null; ogLocale: string | null } | null>(null);
  const language = selectedLanguage === "en" && catalog ? "en" : "es";
  const t = useCallback((text: string) => language === "en" ? catalog?.translations[text.replace(/\s+/g, " ").trim()] ?? text : text, [catalog, language]);

  useEffect(() => {
    const catalogUrl = `${import.meta.env.BASE_URL}i18n/en.json`;
    const load = async (url: string) => {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Translation catalog unavailable");
      return response.json() as Promise<Catalog>;
    };
    let active = true;
    load(catalogUrl)
      .catch(() => {
        const fallbackUrl = new URL("i18n/en.json", window.location.href).pathname;
        if (fallbackUrl === catalogUrl) throw new Error("Translation catalog unavailable");
        return load(fallbackUrl);
      })
      .then((result) => { if (active) setCatalog(result); })
      .catch(() => { if (active) setCatalog(null); });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!catalog) return;
    const description = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    originalMeta.current ??= {
      title: document.title,
      description: description?.getAttribute("content") ?? null,
      ogTitle: ogTitle?.getAttribute("content") ?? null,
      ogDescription: ogDescription?.getAttribute("content") ?? null,
      ogLocale: ogLocale?.getAttribute("content") ?? null,
    };
    document.documentElement.lang = language;
    const meta = language === "en"
      ? { title: catalog.meta.title, description: catalog.meta.description, ogTitle: catalog.meta.ogTitle, ogDescription: catalog.meta.ogDescription, ogLocale: "en_US" }
      : originalMeta.current;
    document.title = meta.title;
    if (meta.description !== null) description?.setAttribute("content", meta.description);
    if (meta.ogTitle !== null) ogTitle?.setAttribute("content", meta.ogTitle);
    if (meta.ogDescription !== null) ogDescription?.setAttribute("content", meta.ogDescription);
    if (meta.ogLocale !== null) ogLocale?.setAttribute("content", meta.ogLocale);
    localStorage.setItem("site_language", language);
  }, [catalog, language]);

  return <LanguageContext.Provider value={{ language, setLanguage, t, ready: !!catalog }}>{children}</LanguageContext.Provider>;
}
