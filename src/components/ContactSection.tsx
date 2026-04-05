import { Button } from "@/components/ui/button";
import { MessageCircle, Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding bg-secondary/30">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">Contacto</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
          ¿Listo para llevar tu negocio a internet?
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          Escríbeme y cuéntame sobre tu proyecto. Estoy listo para ayudarte a crear una presencia profesional que genere resultados.
        </p>

        <Button variant="hero" size="lg" asChild className="rounded-full px-8 h-12 mb-10">
          <a href="https://wa.me/525541901529" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={20} />
            Enviar mensaje por WhatsApp
          </a>
        </Button>

        <div className="flex flex-col items-center gap-4 mt-2">
          <p className="text-sm text-muted-foreground font-medium">También puedes encontrarme en:</p>
          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/525541901529"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium group"
            >
              <MessageCircle size={18} className="group-hover:text-primary transition-colors" />
              WhatsApp
            </a>
            <a
              href="https://www.facebook.com/termanwebs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium group"
            >
              <Facebook size={18} className="group-hover:text-primary transition-colors" />
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
