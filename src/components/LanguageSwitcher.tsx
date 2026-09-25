import { useEffect, useRef, useState } from "react";

type Catalog = { meta: { title: string; description: string; ogTitle: string; ogDescription: string }; translations: Record<string, string> };
const originals = new WeakMap<Text, string>();
const normalize = (value: string) => value.replace(/\s+/g, " ").trim();
function translatePage(translations: Record<string, string>, language: "es" | "en") {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  let node: Node | null;
  while ((node = walker.nextNode())) nodes.push(node as Text);
  nodes.forEach((textNode) => {
    const parent = textNode.parentElement;
    if (!parent || ["SCRIPT", "STYLE"].includes(parent.tagName)) return;
    const original = originals.get(textNode) ?? textNode.nodeValue ?? "";
    if (!originals.has(textNode)) originals.set(textNode, original);
    const key = normalize(original);
    if (language === "en" && translations[key]) {
      const leading = original.match(/^\s*/)?.[0] ?? "";
      const trailing = original.match(/\s*$/)?.[0] ?? "";
      textNode.nodeValue = `${leading}${translations[key]}${trailing}`;
    } else textNode.nodeValue = original;
  });
  document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input[placeholder], textarea[placeholder]").forEach((element) => {
    const original = element.dataset.i18nOriginal ?? element.placeholder;
    element.dataset.i18nOriginal = original;
    element.placeholder = language === "en" ? translations[original] ?? original : original;
  });
}
export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<"es" | "en">(() => localStorage.getItem("site_language") === "en" ? "en" : "es");
  const [catalog, setCatalog] = useState<Catalog | null>(null);
  const initialized = useRef(false);
  useEffect(() => { fetch("/i18n/en.json").then((response) => response.json()).then(setCatalog).catch(() => setCatalog(null)); }, []);
  useEffect(() => {
    if (!catalog) return;
    translatePage(catalog.translations, language);
    document.documentElement.lang = language;
    if (language === "en") {
      document.title = catalog.meta.title;
      document.querySelector('meta[name="description"]')?.setAttribute("content", catalog.meta.description);
      document.querySelector('meta[property="og:title"]')?.setAttribute("content", catalog.meta.ogTitle);
      document.querySelector('meta[property="og:description"]')?.setAttribute("content", catalog.meta.ogDescription);
      document.querySelector('meta[property="og:locale"]')?.setAttribute("content", "en_US");
    } else if (initialized.current) { window.location.reload(); return; }
    initialized.current = true;
    localStorage.setItem("site_language", language);
  }, [catalog, language]);
  return <div className="fixed bottom-5 right-5 z-[60] flex rounded-lg border border-border bg-card/95 p-1 shadow-lg backdrop-blur" role="group" aria-label="Language selector">{(["es", "en"] as const).map((code) => <button key={code} type="button" onClick={() => setLanguage(code)} aria-pressed={language === code} className={`rounded-md px-3 py-2 text-xs font-bold transition-colors ${language === code ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>{code.toUpperCase()}</button>)}</div>;
}
