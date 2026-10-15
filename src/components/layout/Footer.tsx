const links = [
  { label: "Características", href: "#features" },
  { label: "Cómo funciona", href: "#how-it-works" },
  { label: "Precios", href: "#pricing" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-lg text-foreground">
          <span className="text-accent text-xl leading-none">◆</span>
          <span>Jornify</span>
        </a>

        {/* Nav */}
        <nav className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-sm text-foreground-muted">
          © {new Date().getFullYear()} Jornify. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
