import { useLanguage } from "@/components/LanguageProvider";

const techCategories = [
  {
    title: "Lenguajes",
    items: ["Java", "PHP", "TypeScript", "JavaScript", "Dart"],
  },
  {
    title: "Backend",
    items: ["Spring Boot", "Laravel", "NodeJS", "Express"],
  },
  {
    title: "Frontend",
    items: ["Angular 8+", "React", "Flutter", "jQuery"],
  },
  {
    title: "Bases de Datos SQL",
    items: ["MySQL", "MariaDB", "PostgreSQL", "SQL Server", "Oracle"],
  },
  {
    title: "Bases de Datos NoSQL",
    items: ["MongoDB", "Firebase"],
  },
  {
    title: "Cloud & Servidores",
    items: ["Google GCP", "DigitalOcean", "Linode", "Heroku", "BlueHost"],
  },
];

const TechStack = () => {
  const { t } = useLanguage();
  return (
    <section id="tech" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("Stack")} <span className="gradient-text">{t("Tecnológico")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("Experiencia sólida en un amplio ecosistema de tecnologías")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h3 className="text-lg font-semibold text-primary mb-4">
                {t(category.title)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm bg-secondary rounded-lg text-foreground font-mono hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
