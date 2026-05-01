import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "CONSULTA GRATUITA",
    description:
      "Analizamos tu barbería, tus necesidades y tus objetivos. Te proponemos la solución ideal sin compromiso.",
  },
  {
    number: "02",
    title: "DISEÑO PERSONALIZADO",
    description:
      "Creamos tu sistema de citas con tu marca y colores. Optimizamos tu perfil de Google Maps con estrategia local.",
  },
  {
    number: "03",
    title: "LANZAMIENTO",
    description:
      "Implementamos todo en menos de 7 días. Te formamos para que domines el panel de control desde el primer día.",
  },
  {
    number: "04",
    title: "CRECIMIENTO",
    description:
      "Monitorizamos resultados y optimizamos continuamente. Más visibilidad, más reservas, más ingresos.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 md:py-32 section-dark grain-overlay relative">
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Proceso
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
            CÓMO <span className="text-gold">FUNCIONA</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-gold/30 to-transparent z-0" />
              )}

              <div className="relative z-10">
                {/* Number */}
                <span className="font-display text-6xl text-gold/20 leading-none">
                  {step.number}
                </span>
                <h3 className="font-display text-xl tracking-wide text-foreground mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Results Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-br from-gold/10 via-transparent to-gold/5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative overflow-hidden rounded-sm border border-border">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663399306078/VfcBb45G5ghCMm6VPu8Ur7/results-dashboard-DmprSAB3XeuQknayAygsVM.webp"
              alt="Dashboard de resultados BarberBoost"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="text-sm text-gold font-medium mb-1">Panel de Control</p>
              <p className="font-display text-2xl text-foreground">
                MÉTRICAS EN TIEMPO REAL
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
