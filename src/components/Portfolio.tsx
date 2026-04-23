import { ExternalLink, Github, Calendar, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import micredixapp from "@/assets/micredixapp.png";
import micredixweb from "@/assets/micredixweb.png";
import prioritymax from "@/assets/prioritymax.png";
import presentationfolders from "@/assets/presentationfolder.png";


const experiences = [
  {
    company: "Innovo Company 2020 C.A",
    role: "Desarrollador",
    period: "May 2024 - Actual | Venezuela | Equipo 8-10 personas",
    description:
      "Liderazgo técnico mobile para PriorityMax (BLoC/Cubit, Clean Architecture + DDD, modularización y flavors), desarrollo y publicación de flujos de crédito/suscripción con APIs REST y RBAC, implementación de pruebas unitarias/widget, soporte a releases quincenales y estabilización en producción, además de CI/CD con Fastlane para build, firma y despliegues automatizados.",
    technologies: [
      "Flutter",
      "Dart",
      "BLoC/Cubit",
      "Clean Architecture",
      "DDD",
      "Fastlane",
      "Flutter Test",
      "Flavors",
      "Modularización",
      "APIs REST",
      "Liderazgo Técnico",
      "CI/CD",
      "Laravel",
      "Nginx",
      "Docker",
      "NodeJS",
      "Express",
      "PHP",
      "MySQL",
      "SQL Server",
      "Git",
      "GitLab",
    ],
  },
  {
    company: "The Rocket Code",
    role: "Software Developer",
    period: "Oct 2023 - May 2024 | Remoto (Mexico)",
    description:
      "Desarrollo de la app logística Long Haul en Flutter (iOS/Android) para operación en campo, paradas/incidencias y sincronización con backend; implementación de módulos fintech con flujos transaccionales e integraciones de servicios manteniendo calidad en releases; aporte a patrones de arquitectura (BLoC/Cubit, modularización y flavors) y prácticas de testing. Además, desarrollo de app web de seguros con Java Liferay + Spring Framework, incluyendo módulos de cotizador y cron job de migración de usuarios desde DB2 hacia Oracle.",
    technologies: [
      "Flutter",
      "Dart",
      "BLoC/Cubit",
      "APIs REST",
      "Flutter Test",
      "Git",
      "Modularización",
      "Flavors",
      "Java",
      "Liferay",
      "Spring Framework",
      "DB2",
      "Oracle",
    ],
  },
  {
    company: "Intelix Synergy",
    role: "Analista de aplicaciones",
    period: "Dic 2019 - May 2024 | Venezuela",
    description:
      "Construí y mantuve soluciones para e-commerce, e-learning y fintech con Angular, React y Magento 2.x; desarrollé productos móviles en Flutter para finanzas y comercio electrónico. Integré apps con servicios backend (Spring Boot / Node.js) y capas SQL/NoSQL, implementé arquitecturas asíncronas con Apache Kafka, despliegues con Docker y API gateways, además de gestión de infraestructura en AWS, Linode y Heroku.",
    technologies: [
      "Angular",
      "React",
      "Magento 2",
      "Flutter",
      "Spring Boot",
      "Node.js",
      "SQL/NoSQL",
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "MongoDB",
      "Kafka",
      "Docker",
      "API Gateway",
      "AWS",
      "Heroku",
      "Linode",
    ],
  },
  {
    company: "Virtually Present",
    role: "Magento Developer",
    period: "Sep 2021 - Abr 2022",
    description:
      "Desarrollo de módulos custom para Magento 2.x, soporte y mantenimiento de e-commerce, y configuración de servidor/CDN para despliegue y operación.",
    technologies: ["Magento 2", "PHP", "Linux", "CDN"],
  },
  {
    company: "APDPrinting",
    role: "Web Developer",
    period: "Feb 2019 - Dic 2019",
    description:
      "Implementación y mantenimiento de e-commerce en Magento 2, desarrollo en PHP con APIs para integraciones y soporte técnico en entornos Linux.",
    technologies: ["Magento 2", "PHP", "MySQL", "Linux", "jQuery"],
  },
  {
    company: "Freelancer",
    role: "Desarrollador de Software",
    period: "Oct 2017 - Actual",
    description:
      "Desarrollo y mantenimiento evolutivo de aplicaciones mobile/web para distintos clientes, integración de APIs RESTful e implementación de módulos e-commerce (incluyendo Magento 2).",
    technologies: ["Flutter", "Angular", "React", "PHP", "REST APIs", "Magento 2", "Git"],
  },
];

const projects = [
  {
    title: "PriorityMax (Fintech Mobile)",
    description:
      "Liderazgo técnico y desarrollo móvil para producto fintech nacional: arquitectura DDD + BLoC/Cubit, flujos de crédito/suscripción, integraciones backend y releases quincenales. Escaló a más de 280K usuarios Android y 6K+ en iOS.",
    image: prioritymax,
    technologies: ["Flutter", "Dart", "BLoC/Cubit", "DDD", "REST APIs", "Fastlane", "CI/CD"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.innovo.prioritymax&hl=es_VE",
    githubUrl: "#",
  },
  {
    title: "Long Haul (Logística en Ruta)",
    description:
      "Aplicación Flutter iOS/Android para operación en campo, paradas/incidencias y sincronización con backend. Incluyó evolución continua en producción y mejoras de arquitectura mobile con modularización y flavors.",
    image: micredixapp,
    technologies: ["Flutter", "Dart", "BLoC/Cubit", "MVVM", "Provider", "REST APIs", "Flutter Test"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.Mobtion.Credix.Credixcel&hl=es_VE",
    githubUrl: "#",
  },
  {
    title: "Plataforma de Seguros (Web Empresarial)",
    description:
      "Desarrollo y mantenimiento en plataforma de seguros con Java Liferay + Spring Framework, incluyendo módulos de cotizador e integraciones para migración de usuarios entre DB2 y Oracle.",
    image: micredixweb,
    technologies: ["Java", "Liferay", "Spring Framework", "Integraciones", "DB2", "Oracle"],
    liveUrl: "https://micredix.com/personas/sign/sign-in",
    githubUrl: "#",
  },
  {
    title: "MiCredix (Mobile + Web)",
    description:
      "Suite fintech para créditos y préstamos con app móvil y plataforma web. Integración de frontend-backend, seguridad por roles y operación de negocio en producción.",
    image: micredixweb,
    technologies: ["Flutter", "Angular", "Spring Boot", "REST APIs", "SQL Server"],
    liveUrl: "https://micredix.com/personas/sign/sign-in",
    githubUrl: "#",
  },
  {
    title: "E-commerce Magento 2 (Multi-proyecto)",
    description:
      "Implementación de módulos custom, mejoras de checkout/catálogo, soporte productivo e integraciones en tiendas Magento 2.x para clientes de distintos sectores.",
    image: presentationfolders,
    technologies: ["Magento 2", "PHP", "MySQL", "Linux", "Nginx/Apache", "CDN"],
    liveUrl: "https://presentationfolders.ca/",
    githubUrl: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mi <span className="gradient-text">Portafolio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trayectoria profesional y proyectos destacados en producción
          </p>
        </div>

        {/* Experiencia Laboral */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Building2 className="w-6 h-6 text-primary" />
            Experiencia Laboral
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
                    <div className="p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300">
                      <div className="flex items-center gap-2 text-primary text-sm mb-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <h4 className="text-xl font-semibold mb-1">{exp.role}</h4>
                      <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
                      <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Proyectos */}
        <div id="cases">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Github className="w-6 h-6 text-primary" />
            Proyectos en Producción
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden hover:shadow-lg hover:shadow-primary/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-secondary/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver proyecto
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
