import logoWhite from "@/assets/logo-white.png";
import { useLanguage } from "@/components/LanguageProvider";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoWhite} alt={t("Emmanuel - Karateka Programador")} className="h-8 w-auto" />
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} Emmanuel. {t("Todos los derechos reservados.")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
