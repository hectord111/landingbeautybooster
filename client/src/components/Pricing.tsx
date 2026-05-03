import { motion } from "framer-motion";
import { Calendar, MapPin, Check } from "lucide-react";

const services = [
  {
    icon: Calendar,
    name: "SISTEMA DE CITAS",
    description:
      "Tu sistema de reservas personalizado con tu marca, colores y estilo. Tus clientes reservan 24/7 desde cualquier dispositivo.",
    price: "35",
    priceNote: "€/mes + IVA",
    setup: "89€ de configuración inicial",
    features: [
      "Calendario inteligente con gestión de barberos",
      "Recordatorios automáticos a tus clientes",
      "Panel de control con métricas en tiempo real",
      "Personalizado con tu marca y colores",
      "Soporte técnico incluido",
    ],
  },
  {
    icon: MapPin,
    name: "POSICIONAMIENTO GOOGLE MAPS",
    description:
      "Optimizamos tu perfil de Google Business para que aparezcas en las primeras posiciones cuando busquen barberías cerca.",
    price: "30",
    priceNote: "€/mes + IVA",
    setup: null,
    features: [
      "Optimización completa de Google Business Profile",
      "Estrategia de reseñas y reputación online",
      "SEO local con keywords de tu zona",
      "Informes mensuales de rendimiento",
      "Más visibilidad, más clientes",
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
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative p-8 lg:p-10 rounded-sm border border-border bg-card hover:border-gold/30 transition-all duration-500 group flex flex-col"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />

              <div className="relative z-10 flex flex-col flex-1">
                {/* Icon + Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-gold/20 rounded-sm">
                    <service.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-display text-xl tracking-wider text-foreground">
                    {service.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-5xl text-foreground">
                      {service.price}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {service.priceNote}
                    </span>
                  </div>
                  {service.setup && (
                    <p className="text-xs text-gold mt-2 font-medium">
                      + {service.setup} (pago único)
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contacto"
                  className="block text-center py-3.5 rounded-sm font-semibold text-sm border border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300"
                >
                  Solicitar Info
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Combo note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 border border-gold/20 rounded-sm bg-gold/5">
            <span className="text-sm text-foreground">
              Contrata ambos servicios y obtén un <span className="text-gold font-semibold">precio especial</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
