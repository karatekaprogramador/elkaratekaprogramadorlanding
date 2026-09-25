import { useLanguage } from "@/components/LanguageProvider";

export default function LanguageSwitcher() {
  const { language, setLanguage, ready, t } = useLanguage();
  return <div className="fixed bottom-5 right-5 z-[60] flex rounded-lg border border-border bg-card/95 p-1 shadow-lg backdrop-blur" role="group" aria-label={t("Selector de idioma")}>{(["es", "en"] as const).map((code) => <button key={code} type="button" onClick={() => setLanguage(code)} disabled={code === "en" && !ready} aria-pressed={language === code} className={`rounded-md px-3 py-2 text-xs font-bold transition-colors ${language === code ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>{code.toUpperCase()}</button>)}</div>;
}
