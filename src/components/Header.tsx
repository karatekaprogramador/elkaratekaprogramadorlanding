import logoWhite from "@/assets/logo-white.png";

const Header = () => {
  const navItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Resultados", href: "#proof" },
    { label: "Servicios", href: "#services" },
    { label: "Casos", href: "#cases" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <img src={logoWhite} alt="Emmanuel - Karateka Programador" className="h-10 w-auto" />
          </a>
          
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="bg-primary hover:bg-accent text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Agendar llamada
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
