import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "STARTER",
    price: "149",
    period: "/mes",
    description: "Ideal para barberías que empiezan a digitalizarse",
    features: [
      "Sistema de citas básico",
      "Hasta 2 barberos",
      "Recordatorios por WhatsApp",
      "Perfil de Google Maps optimizado",
      "Soporte por email",
    ],
    highlighted: false,
  },
  {
    name: "PROFESIONAL",
    price: "299",
    period: "/mes",
    description: "Para barberías que quieren dominar su zona",
    features: [
      "Sistema de citas avanzado",
      "Barberos ilimitados",
      "Recordatorios WhatsApp + SMS",
      "Google Maps + SEO local completo",
      "Panel de métricas avanzado",
      "Gestión de reseñas",
      "Soporte prioritario",
    ],
    highlighted: true,
  },
  {
    name: "ELITE",
    price: "499",
    period: "/mes",
    description: "Solución completa para cadenas de barberías",
    features: [
      "Todo lo del plan Profesional",
      "Multi-local (varias sedes)",
      "App móvil personalizada",
      "Campañas de marketing local",
      "Consultor dedicado",
      "Informes semanales",
      "Integraciones a medida",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-24 md:py-32 relative">
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Precios
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
            PLANES QUE <span className="text-gold">SE ADAPTAN</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Sin permanencia. Cancela cuando quieras. Resultados desde el primer mes.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative p-8 rounded-sm border ${
                plan.highlighted
                  ? "border-gold/50 bg-card gold-glow"
                  : "border-border bg-card"
              } flex flex-col`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-primary-foreground text-xs font-bold tracking-wider rounded-sm">
                  POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-xl tracking-wider text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="font-display text-5xl text-foreground">{plan.price}€</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`block text-center py-3.5 rounded-sm font-semibold text-sm transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gold text-primary-foreground hover:bg-gold-light hover:shadow-[0_0_20px_oklch(0.78_0.12_75/0.3)]"
                    : "border border-border text-foreground hover:border-gold/50 hover:text-gold"
                }`}
              >
                Empezar Ahora
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
