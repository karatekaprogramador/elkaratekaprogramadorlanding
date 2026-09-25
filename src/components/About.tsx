import profilePhoto from "@/assets/profile_2.webp";
import { useLanguage } from "@/components/LanguageProvider";

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Photo with hover effect */}
          <div className="flex-shrink-0">
            <div className="relative group">
              {/* Glow effect behind */}
              <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90" />
              
              {/* Photo container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-border group-hover:border-primary/50 transition-colors duration-500">
                <img
                  src={profilePhoto}
                  alt={t("Emmanuel - Karateka Programador")}
                  className="w-full h-full object-cover photo-grayscale"
                />
              </div>
              
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-primary rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-primary rounded-br-lg" />
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("Sobre")} <span className="gradient-text">{t("Mí")}</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              {t("Soy Emmanuel, desarrollador de software con pasión por crear soluciones tecnológicas innovadoras y formar a nuevos talentos en el mundo de la programación.")}
            </p>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t("Mi enfoque combina la disciplina del karate con la precisión del código. Cada proyecto es un reto que enfrento con determinación, y cada alumno es un futuro desarrollador al que guío hacia la excelencia técnica.")}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">{t("Años de experiencia")}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">{t("Proyectos completados")}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">{t("Alumnos formados")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
