import {
  Clock,
  Coffee,
  BarChart3,
  Building2,
  CalendarDays,
  FileSpreadsheet,
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Fichaje instantáneo",
    description:
      "Tus empleados fichan entrada, pausa y salida en menos de 5 segundos desde cualquier dispositivo.",
  },
  {
    icon: Coffee,
    title: "Control de descansos",
    description:
      "Configura tiempos de pausa por centro. Libre o programado, siempre con registro exacto.",
  },
  {
    icon: BarChart3,
    title: "Informes automáticos",
    description:
      "Genera informes de asistencia por centro y rango de fechas en un clic. Exporta cuando quieras.",
  },
  {
    icon: Building2,
    title: "Multi-centro",
    description:
      "Gestiona varios centros de trabajo con sus propios horarios, turnos y configuraciones independientes.",
  },
  {
    icon: CalendarDays,
    title: "Ausencias y vacaciones",
    description:
      "Tus empleados solicitan vacaciones, bajas y permisos desde la app. Tú los gestionas desde el panel.",
  },
  {
    icon: FileSpreadsheet,
    title: "Importación masiva",
    description:
      "Añade a todo tu equipo de una vez subiendo un Excel. Sin altas manuales una a una.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Características
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Todo lo que necesitas para gestionar{" "}
            <span className="text-accent">el tiempo de tu equipo</span>
          </h2>
          <p className="text-foreground-muted mt-4 max-w-xl mx-auto text-lg">
            Sin apps extra, sin Excel, sin papel. Todo centralizado en un panel
            simple para ti y tu equipo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-background-card border border-border rounded-2xl p-6 hover:border-accent/30 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                <Icon size={20} className="text-accent" />
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">{title}</h3>
              <p className="text-foreground-muted text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
