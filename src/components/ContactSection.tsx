import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

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

        <Button variant="hero" size="lg" asChild className="rounded-full px-8 h-12 mb-8">
          <a href="https://wa.me/525541901529" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={20} />
            Enviar mensaje por WhatsApp
          </a>
        </Button>

        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://www.facebook.com/termanwebs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
