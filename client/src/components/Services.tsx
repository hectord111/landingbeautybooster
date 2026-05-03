import { motion } from "framer-motion";
import { Calendar, MapPin, Smartphone, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "SISTEMA DE CITAS",
    subtitle: "Personalizado para tu barbería",
    description:
      "Desarrollamos un sistema de reservas a medida con tu marca, colores y estilo. Tus clientes reservan 24/7 desde cualquier dispositivo sin llamadas ni esperas.",
    features: [
      "Calendario inteligente con gestión de barberos",
      "Recordatorios automáticos a tus clientes",
      "Panel de control con métricas en tiempo real",
      "Integración con redes sociales",
    ],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663399306078/VfcBb45G5ghCMm6VPu8Ur7/booking-system-mockup-g7TV5az6cvpxbJKMCKjL2T.webp",
  },
  {
    icon: MapPin,
    title: "GOOGLE MAPS",
    subtitle: "Posicionamiento local",
    description:
      "Optimizamos tu perfil de Google Business para que aparezcas en las primeras posiciones cuando alguien busque barberías cerca. Más visibilidad, más clientes.",
    features: [
      "Optimización completa de Google Business Profile",
      "Estrategia de reseñas y reputación online",
      "SEO local con keywords de tu zona",
      "Informes mensuales de rendimiento",
    ],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663399306078/VfcBb45G5ghCMm6VPu8Ur7/google-maps-service-oJQXUEkiRTaRPAyMjEQ8Xn.webp",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 section-dark grain-overlay relative">
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
            Nuestros Servicios
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
            TODO LO QUE TU BARBERÍA
            <br />
            <span className="text-gold">NECESITA PARA CRECER</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Text Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-gold/30 rounded-sm">
                    <service.icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">
                    {service.subtitle}
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-gold/20 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative overflow-hidden rounded-sm border border-border">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
