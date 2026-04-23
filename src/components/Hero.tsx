import logoWhite from "@/assets/logo-white.png";
import { ArrowRight, BookOpen, Code } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,hsl(160_70%_35%/.15),transparent_45%),radial-gradient(circle_at_85%_70%,hsl(160_70%_35%/.12),transparent_40%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 border border-primary/30 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-semibold">Disponible para proyectos y mentorías</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl">
              Domina el código con la
              <br />
              <span className="gradient-text">disciplina de un cinturón negro</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-[68ch] mx-auto lg:mx-0">
              Mentoría avanzada y desarrollo de software para empresas, equipos y desarrolladores que
              quieren productos sólidos en producción, no solo proyectos de prueba.
            </p>

            <p className="text-sm md:text-base text-foreground/85 mb-8 max-w-[65ch] mx-auto lg:mx-0">
              Especialidad en Flutter, arquitecturas limpias y backend escalable para fintech, e-commerce
              y plataformas de alto impacto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-accent text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                <ArrowRight className="w-5 h-5" />
                Empieza tu camino hoy
              </a>
              <a
                href="#cases"
                className="inline-flex items-center justify-center gap-2 bg-secondary/90 hover:bg-muted text-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-border hover:border-primary/50"
              >
                <Code className="w-5 h-5" />
                Ver casos reales
              </a>
            </div>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="px-3 py-1.5 rounded-full text-xs bg-card border border-border">Experiencia en fintech</span>
              <span className="px-3 py-1.5 rounded-full text-xs bg-card border border-border">Web y mobile en producción</span>
              <span className="px-3 py-1.5 rounded-full text-xs bg-card border border-border">Acompañamiento técnico 1:1</span>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75" />
              <img
                src={logoWhite}
                alt="Emmanuel - Karateka Programador"
                className="w-72 md:w-96 lg:w-[440px] h-auto relative z-10 animate-float drop-shadow-2xl"
              />
              <div className="absolute -bottom-2 -left-4 md:-left-10 z-20 rounded-xl bg-card/95 border border-border px-4 py-3 shadow-lg">
                <p className="text-xs text-muted-foreground">Método de trabajo</p>
                <p className="text-sm font-semibold flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  Estrategia + ejecución + resultados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
