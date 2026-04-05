import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center section-padding pt-28 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--hero-gradient)" }} />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 opacity-0 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
          Diseño web profesional
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          Diseño de páginas web modernas para negocios que quieren{" "}
          <span className="text-gradient">vender más.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Páginas web claras, rápidas y optimizadas para convertir visitas en clientes desde el primer día.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in" style={{ animationDelay: "0.45s" }}>
          <Button variant="hero" size="lg" asChild className="rounded-full px-8 h-12">
            <a href="https://wa.me/525541901529" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} />
              Enviar mensaje por WhatsApp
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild className="rounded-full px-8 h-12">
            <a href="#servicios">
              Ver servicios
            </a>
          </Button>
        </div>

        <a href="#valor" className="inline-flex mt-16 opacity-0 animate-fade-in text-muted-foreground hover:text-foreground transition-colors" style={{ animationDelay: "0.7s" }}>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
