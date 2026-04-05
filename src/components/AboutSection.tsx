const AboutSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4 opacity-0 animate-fade-in">
          Por qué hago esto
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Construyendo algo con propósito
        </h2>
        <div className="space-y-5 text-muted-foreground leading-relaxed text-lg opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <p>
            Este proyecto nace de la idea de construir un estilo de vida diferente: trabajar de forma independiente, con libertad y haciendo algo que realmente genere valor.
          </p>
          <p>
            Desde el inicio, entendí que muchos negocios tienen un gran potencial, pero no cuentan con una presencia profesional en internet, lo que limita su crecimiento.
          </p>
          <p>
            Por eso decidí enfocarme en crear páginas web claras, modernas y funcionales, pensadas no solo para verse bien, sino para ayudar a los negocios a atraer clientes y crecer.
          </p>
          <p>
            Más que solo crear páginas, el objetivo es ofrecer una solución simple y efectiva para que cualquier negocio pueda dar el siguiente paso en el mundo digital.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
