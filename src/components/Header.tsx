import logoWhite from "@/assets/isotipo-blanco.png";
import { useLanguage } from "@/components/LanguageProvider";

const Header = () => {
  const { t } = useLanguage();
  const navItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Resultados", href: "#proof" },
    { label: "Servicios", href: "#services" },
    { label: "Casos", href: "#cases" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 sm:px-5 md:px-6 md:py-4">
        <nav className="flex items-center justify-between gap-3">
          <a href="#hero" className="flex h-14 w-28 shrink-0 items-center justify-center overflow-hidden sm:h-16 sm:w-36 md:h-20 md:w-[200px] lg:w-[240px]" aria-label={t("Ir al inicio")}>
            <img src={logoWhite} alt="El Karateka Programador" className="h-36 w-36 max-w-none object-contain sm:h-44 sm:w-44 md:h-[220px] md:w-[220px] lg:h-[240px] lg:w-[240px]" />
          </a>
          
          <ul className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="shrink-0 rounded-lg bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/25 sm:px-4 sm:py-2.5 sm:text-sm md:px-5"
          >
            {t("Diagnóstico gratuito")}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;