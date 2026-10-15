import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-background-soft">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative bg-background border border-border rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/8 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Empieza hoy
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 max-w-2xl mx-auto leading-tight">
              ¿Listo para digitalizar los fichajes de tu empresa?
            </h2>
            <p className="text-foreground-muted text-lg mb-10 max-w-lg mx-auto">
              Únete a las empresas que ya controlan su tiempo con Jornify. Gratis,
              para siempre.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-accent text-black font-semibold px-8 py-3.5 rounded-lg hover:bg-accent-dark transition-colors text-base"
              >
                Crear cuenta gratis
                <ArrowRight size={16} />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 border border-border text-foreground-muted font-medium px-8 py-3.5 rounded-lg hover:border-foreground-muted hover:text-foreground transition-colors text-base"
              >
                Ver características
              </a>
            </div>

            <p className="text-foreground-muted text-sm mt-6">
              Sin tarjeta de crédito · Sin límite de tiempo · Soporte incluido
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
