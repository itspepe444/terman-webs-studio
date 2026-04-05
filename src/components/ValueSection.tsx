import { Zap, Handshake, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Entrega rápida",
    desc: "Tu página lista en 24 a 72 horas. Sin demoras innecesarias.",
  },
  {
    icon: Handshake,
    title: "Sin procesos complicados",
    desc: "Comunicación directa y proceso simple de inicio a fin.",
  },
  {
    icon: TrendingUp,
    title: "Enfoque en resultados",
    desc: "Cada página está pensada para atraer más clientes y ventas.",
  },
];

const ValueSection = () => {
  return (
    <section id="valor" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="group glass rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <v.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
