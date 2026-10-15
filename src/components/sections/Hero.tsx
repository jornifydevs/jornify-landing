import { ArrowRight, Clock, Users, BarChart3 } from "lucide-react";

const stats = [
  { icon: Clock, value: "< 5 seg", label: "para fichar" },
  { icon: Users, value: "Multi-centro", label: "y multi-rol" },
  { icon: BarChart3, value: "Informes", label: "en tiempo real" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-accent/3 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Copy */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div className="inline-flex w-fit items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-sm font-medium px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Fichaje digital para tu empresa
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Controla el tiempo de tu equipo.{" "}
            <span className="text-accent">Sin complicaciones.</span>
          </h1>

          {/* Sub */}
          <p className="text-lg text-foreground-muted leading-relaxed max-w-lg">
            Jornify es la app de registro horario más simple para empresas. Tus
            empleados fichan en segundos, tú tienes los informes al instante.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-accent text-black font-semibold px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors"
            >
              Empieza gratis
              <ArrowRight size={16} />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 border border-border text-foreground-muted font-medium px-6 py-3 rounded-lg hover:border-foreground-muted hover:text-foreground transition-colors"
            >
              Ver cómo funciona
            </a>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-6 pt-4 border-t border-border mt-2">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={16} className="text-accent" />
                <span className="text-foreground font-semibold text-sm">{value}</span>
                <span className="text-foreground-muted text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: App mockup */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm">
            {/* Main card */}
            <div className="bg-background-card border border-border rounded-2xl p-6 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-foreground-muted uppercase tracking-wider">Centro Madrid</p>
                  <p className="text-foreground font-semibold mt-0.5">Martes, 25 Feb</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Clock size={18} className="text-accent" />
                </div>
              </div>

              {/* Time display */}
              <div className="text-center py-4">
                <p className="text-5xl font-bold text-foreground tabular-nums">09:24</p>
                <div className="inline-flex items-center gap-1.5 mt-3 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Trabajando
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <button className="bg-background-soft border border-border text-foreground-muted text-sm font-medium py-2.5 rounded-lg hover:border-foreground-muted transition-colors">
                  Pausa
                </button>
                <button className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium py-2.5 rounded-lg hover:bg-red-500/20 transition-colors">
                  Salida
                </button>
              </div>

              {/* Daily summary */}
              <div className="mt-4 pt-4 border-t border-border flex justify-between text-sm">
                <div className="text-center">
                  <p className="text-foreground-muted text-xs">Entrada</p>
                  <p className="text-foreground font-semibold mt-0.5">08:00</p>
                </div>
                <div className="text-center">
                  <p className="text-foreground-muted text-xs">Horas hoy</p>
                  <p className="text-foreground font-semibold mt-0.5">1h 24m</p>
                </div>
                <div className="text-center">
                  <p className="text-foreground-muted text-xs">Pausas</p>
                  <p className="text-foreground font-semibold mt-0.5">0</p>
                </div>
              </div>
            </div>

            {/* Floating notification */}
            <div className="absolute -top-4 -right-4 bg-background-soft border border-border rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                <Users size={12} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-foreground font-medium">3 empleados activos</p>
                <p className="text-xs text-foreground-muted">ahora mismo</p>
              </div>
            </div>

            {/* Floating report card */}
            <div className="absolute -bottom-4 -left-4 bg-background-soft border border-border rounded-xl px-4 py-2.5 shadow-lg">
              <p className="text-xs text-foreground-muted">Horas esta semana</p>
              <p className="text-foreground font-bold text-lg mt-0.5">38.5h <span className="text-green-400 text-sm font-normal">↑ 2h</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
