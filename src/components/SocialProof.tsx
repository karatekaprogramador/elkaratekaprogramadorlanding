import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ShieldCheck, Trophy, Users } from "lucide-react";

const stats = [
  { label: "Años de experiencia", value: "8+", icon: Trophy },
  { label: "Proyectos en producción", value: "50+", icon: CheckCircle2 },
  { label: "Alumnos formados", value: "30+", icon: Users },
  { label: "Sectores trabajados", value: "Fintech · E-commerce · E-learning", icon: ShieldCheck },
];

const companies = [
  "Innovo Company 2020 C.A",
  "The Rocket Code",
  "Intelix Synergy",
  "Virtually Present",
  "APDPrinting",
];

const productionStack = [
  "Flutter",
  "Spring Boot",
  "Node.js",
  "Angular",
  "React",
  "Magento 2",
  "Docker",
  "Kafka",
  "PostgreSQL",
  "MySQL",
  "SQL Server",
  "MongoDB",
  "AWS",
  "Linode",
  "Heroku",
];

const SocialProof = () => {
  return (
    <section id="proof" className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Resultados que <span className="gradient-text">generan confianza</span>
          </h2>
          <p className="text-muted-foreground text-lg mx-auto">
            Trabajo con enfoque en impacto real: productos web/mobile en producción, arquitectura sólida y
            acompañamiento técnico de alto nivel.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="p-5 rounded-xl card-gradient border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl card-gradient border border-border">
            <h3 className="text-lg font-semibold mb-3">Empresas y equipos</h3>
            <div className="flex flex-wrap gap-2">
              {companies.map((company) => (
                <Badge key={company} variant="secondary" className="text-xs">
                  {company}
                </Badge>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-xl card-gradient border border-border">
            <h3 className="text-lg font-semibold mb-3">Stack aplicado en producción</h3>
            <div className="flex flex-wrap gap-2">
              {productionStack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
