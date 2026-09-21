import { Bot, Code2, FileSearch, Gauge, GraduationCap, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Auditoría de Sistemas Vibecodeados",
    description:
      "Revisión profunda de código generado con IA: deuda técnica oculta, fallas de seguridad y arquitecturas frágiles. Recibes un informe priorizado con plan de corrección.",
  },
  {
    icon: FileSearch,
    title: "Auditoría de MVPs y Sistemas Complejos",
    description:
      "Evaluación de escalabilidad, mantenibilidad y costos antes de seguir invirtiendo. Sabrás en qué estado real está tu producto y qué corregir primero.",
  },
  {
    icon: Code2,
    title: "Desarrollo de Sistemas a Medida",
    description:
      "Software robusto desde el diseño: web, móvil y backends con arquitectura feature-first y DDD, construidos para crecer sin reescribirse.",
  },
  {
    icon: GraduationCap,
    title: "Clases y Talleres de Tecnología",
    description:
      "Formación práctica para desarrolladores y equipos: desarrollo de software, arquitectura, buenas prácticas e IA aplicada al trabajo real.",
  },
  {
    icon: Gauge,
    title: "Optimización y Performance",
    description:
      "Diagnóstico y corrección de cuellos de botella en cualquier sistema: latencia, queries lentas y costos de infraestructura. Más rápido y más barato de operar.",
  },
  {
    icon: Bot,
    title: "Arquitectura Agéntica para Software",
    description:
      "Diseño de sistemas con agentes de IA: orquestación, automatización de QA, guardrails y flujos donde la IA opera con control y trazabilidad.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Servicios con <span className="gradient-text">disciplina de dojo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluciones técnicas directas para software que debe funcionar en producción, no solo en demo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
