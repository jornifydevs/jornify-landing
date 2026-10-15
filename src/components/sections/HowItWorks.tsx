import { Building2, UserPlus, BarChart3 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Building2,
    title: "Crea tu empresa",
    description:
      "Regístrate en segundos, configura tu empresa y añade tus centros de trabajo con sus horarios y características.",
  },
  {
    step: "02",
    icon: UserPlus,
    title: "Invita a tu equipo",
    description:
      "Genera códigos de invitación únicos para cada empleado. Ellos se registran con el código y quedan asignados automáticamente.",
  },
  {
    step: "03",
    icon: BarChart3,
    title: "Controla en tiempo real",
    description:
      "Desde el panel de administración ves quién está trabajando ahora mismo, descarga informes y gestiona ausencias sin esfuerzo.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background-soft">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Cómo funciona
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Listo en{" "}
            <span className="text-accent">menos de 10 minutos</span>
          </h2>
          <p className="text-foreground-muted mt-4 max-w-xl mx-auto text-lg">
            Sin instalaciones, sin configuración compleja. Tres pasos y tu
            equipo ya está fichando.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-border" />

          {steps.map(({ step, icon: Icon, title, description }) => (
            <div key={step} className="relative flex flex-col items-center text-center gap-4">
              {/* Step bubble */}
              <div className="relative w-20 h-20 rounded-2xl bg-background border border-border flex items-center justify-center flex-shrink-0 z-10">
                <Icon size={28} className="text-accent" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-black text-xs font-bold flex items-center justify-center">
                  {step.replace("0", "")}
                </span>
              </div>

              <div>
                <h3 className="text-foreground font-semibold text-xl mb-2">{title}</h3>
                <p className="text-foreground-muted text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
