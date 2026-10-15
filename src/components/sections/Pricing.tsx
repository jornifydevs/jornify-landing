import { Check } from "lucide-react";

const features = [
  "Fichaje de entrada, pausa y salida",
  "Gestión de centros de trabajo ilimitados",
  "Panel de administración completo",
  "Informes de asistencia exportables",
  "Gestión de ausencias y vacaciones",
  "Calendario de festivos",
  "Importación de empleados desde Excel",
  "Códigos de invitación únicos",
  "Acceso desde cualquier dispositivo",
  "Soporte por email",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Precios
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Simple y{" "}
            <span className="text-accent">sin sorpresas</span>
          </h2>
          <p className="text-foreground-muted mt-4 max-w-xl mx-auto text-lg">
            Empieza gratis hoy. Sin tarjeta de crédito, sin límite de tiempo.
          </p>
        </div>

        {/* Single plan card centered */}
        <div className="max-w-md mx-auto">
          <div className="relative bg-background-card border border-accent/40 rounded-2xl p-8 shadow-lg shadow-accent/5">
            {/* Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-accent text-black text-xs font-bold px-4 py-1 rounded-full">
                Acceso completo
              </span>
            </div>

            {/* Plan name & price */}
            <div className="text-center mb-8">
              <p className="text-foreground-muted text-sm uppercase tracking-widest mb-2">Plan</p>
              <h3 className="text-foreground text-3xl font-bold mb-1">Gratuito</h3>
              <div className="flex items-end justify-center gap-1 mt-4">
                <span className="text-5xl font-bold text-foreground">€0</span>
                <span className="text-foreground-muted pb-2">/mes</span>
              </div>
              <p className="text-foreground-muted text-sm mt-2">Para siempre. Sin límites.</p>
            </div>

            {/* CTA */}
            <a
              href="#"
              className="block w-full text-center bg-accent text-black font-semibold py-3 rounded-lg hover:bg-accent-dark transition-colors mb-8"
            >
              Crear cuenta gratis
            </a>

            {/* Features list */}
            <ul className="flex flex-col gap-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={11} className="text-accent" />
                  </div>
                  <span className="text-foreground-muted text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
