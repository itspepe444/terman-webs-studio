import { Button } from "@/components/ui/button";
import { MessageCircle, Rocket } from "lucide-react";

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <Rocket size={16} />
          Próximamente
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
          Proyectos en desarrollo
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          Actualmente estamos trabajando en nuevos proyectos que estarán disponibles próximamente.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          Cada sitio está diseñado con enfoque en resultados, rendimiento y experiencia de usuario.
        </p>
        <div className="glass rounded-2xl p-6 sm:p-8 md:p-10">
          <p className="font-display text-lg sm:text-xl font-semibold text-foreground mb-6">
            ¿Quieres ser de los primeros en tener tu página web profesional?
          </p>
          <Button variant="hero" size="lg" asChild className="rounded-full px-6 sm:px-8 h-12 w-full sm:w-auto">
            <a href="https://wa.me/525541901529" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} />
              <span className="text-sm sm:text-base">Contáctame y comencemos</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
