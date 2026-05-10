import { motion } from "framer-motion";
import { User, Users, Check } from "lucide-react";

const plans = [
  {
    icon: User,
    name: "BARBERO ÚNICO",
    description:
      "Ideal para barberías con un solo barbero. Tu sistema de citas personalizado con todo lo que necesitas.",
    price: "19",
    priceNote: "€/mes + IVA",
    features: [
      "1 barbero con gestión de horarios",
      "Reservas online 24/7",
      "Recordatorios automáticos a tus clientes",
      "Personalizado con tu marca y colores",
      "Soporte técnico incluido",
    ],
  },
  {
    icon: Users,
    name: "BARBEROS ILIMITADOS",
    description:
      "Para barberías con equipo. Gestiona todos tus barberos, horarios y sedes desde un solo panel.",
    price: "29",
    priceNote: "€/mes + IVA",
    popular: true,
    features: [
      "Barberos ilimitados con horarios individuales",
      "Gestión de múltiples sedes",
      "Reservas online 24/7",
      "Recordatorios automáticos a tus clientes",
      "Personalizado con tu marca y colores",
      "Soporte técnico prioritario",
    ],
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
            PRECIOS <span className="text-gold">CLAROS</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Sin permanencia. Sin letra pequeña. Cancela cuando quieras.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative p-8 lg:p-10 rounded-sm border bg-card hover:border-gold/30 transition-all duration-500 group flex flex-col ${
                plan.popular ? "border-gold/50" : "border-border"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-primary-foreground text-xs font-semibold tracking-wider rounded-sm">
                  POPULAR
                </div>
              )}

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />

              <div className="relative z-10 flex flex-col flex-1">
                {/* Icon + Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-gold/20 rounded-sm">
                    <plan.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-display text-xl tracking-wider text-foreground">
                    {plan.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-5xl text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {plan.priceNote}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contacto"
                  className={`block text-center py-3.5 rounded-sm font-semibold text-sm transition-all duration-300 ${
                    plan.popular
                      ? "bg-gold text-primary-foreground hover:bg-gold-light hover:shadow-[0_0_20px_oklch(0.78_0.12_75/0.3)]"
                      : "border border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground"
                  }`}
                >
                  Solicitar Info
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 border border-gold/20 rounded-sm bg-gold/5">
            <span className="text-sm text-foreground">
              Posicionamiento en Google Maps disponible como <span className="text-gold font-semibold">servicio adicional</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
