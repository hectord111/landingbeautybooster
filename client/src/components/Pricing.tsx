import { motion } from "framer-motion";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Independent",
    subtitle: "Para una sola profesional",
    price: "19",
    priceNote: "€/mes",
    setup: "89€ de configuración inicial",
    description:
      "Para profesionales autónomas de la belleza que quieren dejar de improvisar.",
    features: [
      "Agenda inteligente",
      "Reservas online 24/7",
      "Gestión completa de clientas",
      "Recordatorios automáticos",
      "Estadísticas detalladas",
      "Control de horarios",
      "URL personalizada de reservas",
      "Web de reservas con tu marca",
      "Código QR para tu centro de belleza",
      "Reseñas de clientas",
      "Galería de trabajos",
      "Gestión de servicios ilimitados",
      "Soporte por WhatsApp",
    ],
  },
  {
    name: "Unlimited",
    subtitle: "Para centros con 2 profesionales o más",
    price: "29",
    priceNote: "€/mes",
    setup: "89€ de configuración inicial",
    popular: true,
    description:
      "Para centros de belleza con equipo que quieren el control total.",
    features: [
      "Todo lo del plan Independent",
      "Profesionales ilimitadas",
      "Gestión de equipo completa",
      "Multicuenta (varios centros)",
      "Control de horarios por profesional",
    ],
  },
  {
    name: "Unlimited anual",
    subtitle: "Para centros con 2 profesionales o más",
    price: "299",
    priceNote: "€/año",
    bestValue: true,
    description:
      "Ahorra 49€ al año. Para los que van en serio.",
    savingsNote: "= 24,90€/mes",
    originalPrice: "29€/mes",
    features: [
      "Todo lo del plan Unlimited",
    ],
  },
];

export default function Pricing() {
  const [expandedPlan, setExpandedPlan] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedPlan(expandedPlan === index ? null : index);
  };

  return (
    <section id="precios" className="py-24 md:py-32 relative">
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight">
            Elige tu <span className="text-gold italic">plan</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-sm">
            15 días gratis · Sin permanencia · Sin excusas
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative p-7 lg:p-8 rounded-lg border bg-card transition-all duration-500 group flex flex-col ${
                plan.popular
                  ? "border-gold/50 shadow-[0_0_40px_oklch(0.64_0.105_350/0.12)]"
                  : plan.bestValue
                  ? "border-gold/30"
                  : "border-border"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 right-6 px-4 py-1 bg-gold text-primary-foreground text-xs font-semibold tracking-wider rounded-full">
                  Más popular
                </div>
              )}
              {/* Best value badge */}
              {plan.bestValue && (
                <div className="absolute -top-3 right-6 px-4 py-1 border border-gold/50 text-gold text-xs font-semibold tracking-wider rounded-full bg-card">
                  Mejor precio
                </div>
              )}

              {/* Plan Name & Subtitle */}
              <div className="mb-5">
                <h3 className="font-display text-2xl tracking-tight text-foreground">
                  {plan.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {plan.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl md:text-5xl text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {plan.priceNote}
                  </span>
                </div>
                {plan.savingsNote && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {plan.savingsNote}{" "}
                    <span className="line-through">{plan.originalPrice}</span>
                  </p>
                )}
                {plan.setup && (
                  <p className="text-xs text-gold mt-2 font-medium">
                    + {plan.setup} (pago único)
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {plan.description}
              </p>

              {/* Features - show first 4 or all */}
              <ul className="space-y-3 mb-4 flex-1">
                {(expandedPlan === index
                  ? plan.features
                  : plan.features.slice(0, 4)
                ).map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Expand/Collapse button */}
              {plan.features.length > 4 && (
                <button
                  onClick={() => toggleExpand(index)}
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-gold transition-colors mb-6 cursor-pointer"
                >
                  {expandedPlan === index ? (
                    <>
                      Ver menos <ChevronUp className="w-3 h-3" />
                    </>
                  ) : (
                    <>
                      Ver todas las funciones ({plan.features.length}){" "}
                      <ChevronDown className="w-3 h-3" />
                    </>
                  )}
                </button>
              )}

              {/* CTA */}
              <a
                href="#contacto"
                className={`block text-center py-3.5 rounded-full font-semibold text-sm transition-all duration-300 mt-auto ${
                  plan.popular
                    ? "bg-gold text-primary-foreground hover:bg-gold-light hover:shadow-[0_0_20px_oklch(0.64_0.105_350/0.35)]"
                    : "border border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground"
                }`}
              >
                Empezar gratis
              </a>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-muted-foreground">
            Soporte por WhatsApp incluido en todos los planes.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 mt-4 border border-gold/20 rounded-lg bg-gold/5">
            <span className="text-sm text-foreground">
              Posicionamiento en Google Maps disponible como{" "}
              <span className="text-gold font-semibold">servicio adicional</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
