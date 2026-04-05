const Footer = () => {
  return (
    <footer className="px-6 py-8 border-t border-border/50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-display font-semibold text-foreground">
          Ter<span className="text-primary">Man</span> Webs
        </span>
        <span>© {new Date().getFullYear()} Todos los derechos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;
