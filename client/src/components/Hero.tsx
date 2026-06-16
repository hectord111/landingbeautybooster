import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Soft blush base (shown if the image fails to load) */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80"
          alt="Centro de belleza moderno"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-gold/30 rounded-full bg-gold/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm text-gold font-medium">
              Soluciones digitales para centros de belleza
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-6"
          >
            <span className="text-foreground">Digitaliza</span>
            <br />
            <span className="text-foreground">tu centro de </span>
            <span className="text-gold italic gold-text-glow">belleza</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            Sistemas de citas personalizados y posicionamiento en Google Maps.
            Haz que tus clientas te encuentren y reserven su cita sin esfuerzo.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-primary-foreground font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_oklch(0.6_0.15_350/0.35)] group"
            >
              Solicitar Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#precios"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-full hover:border-gold/50 hover:text-gold transition-all duration-300"
            >
              Ver Planes
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-border/50"
          >
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gold" />
              <div>
                <p className="font-display text-2xl text-foreground">+500</p>
                <p className="text-xs text-muted-foreground">Centros de belleza digitalizados</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gold" />
              <div>
                <p className="font-display text-2xl text-foreground">TOP 3</p>
                <p className="text-xs text-muted-foreground">Posición en Google Maps</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 flex items-center justify-center text-gold font-bold text-sm">%</div>
              <div>
                <p className="font-display text-2xl text-foreground">+40%</p>
                <p className="text-xs text-muted-foreground">Más reservas al mes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  );
}
