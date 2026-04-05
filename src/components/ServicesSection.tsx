import { Globe, MousePointerClick, Smartphone, Target } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Páginas web profesionales",
    desc: "Diseño de páginas modernas y funcionales enfocadas en mostrar tu negocio y generar confianza.",
  },
  {
    icon: MousePointerClick,
    title: "Landing pages",
    desc: "Páginas enfocadas en convertir visitantes en clientes, ideales para promociones o servicios específicos.",
  },
  {
    icon: Smartphone,
    title: "Diseño rápido y optimizado",
    desc: "Sitios rápidos, adaptados a celular y pensados para una buena experiencia de usuario.",
  },
  {
    icon: Target,
    title: "Enfoque en resultados",
    desc: "Cada página está diseñada con el objetivo de ayudarte a conseguir clientes.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">Servicios</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Lo que puedo hacer por tu negocio
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group glass rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
