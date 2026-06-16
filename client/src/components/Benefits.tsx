import { motion } from "framer-motion";
import { Clock, Users, Star, Zap, Shield, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Ahorra Tiempo",
    description:
      "Elimina las llamadas y mensajes para gestionar citas. Tu agenda se organiza sola.",
  },
  {
    icon: Users,
    title: "Más Clientes",
    description:
      "Aparece en Google Maps cuando busquen centros de belleza cerca. Atrae clientas nuevas cada día.",
  },
  {
    icon: Star,
    title: "Mejor Reputación",
    description:
      "Gestión inteligente de reseñas que impulsa tu valoración y genera confianza.",
  },
  {
    icon: Zap,
    title: "Menos No-Shows",
    description:
      "Recordatorios automáticos que reducen las citas perdidas hasta un 80%.",
  },
  {
    icon: Shield,
    title: "Tu Marca, Tu Estilo",
    description:
      "Sistema 100% personalizado con los colores y la identidad de tu centro de belleza.",
  },
  {
    icon: BarChart3,
    title: "Datos que Importan",
    description:
      "Panel con métricas claras: reservas, ingresos, horarios pico y más.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/3 to-transparent pointer-events-none" />

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
            Beneficios
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
            ¿POR QUÉ <span className="text-gold">BEAUTYBOOSTER</span>?
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-card border border-border rounded-sm hover:border-gold/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center border border-gold/20 rounded-sm mb-5 group-hover:border-gold/50 transition-colors duration-500">
                  <benefit.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-display text-xl tracking-wide text-foreground mb-3">
                  {benefit.title.toUpperCase()}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
