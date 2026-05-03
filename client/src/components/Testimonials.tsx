import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Martínez",
    role: "Propietario de BarberKing",
    location: "Madrid",
    text: "Desde que implementamos BarberBooster, las reservas aumentaron un 60%. Ya no perdemos tiempo con llamadas y los clientes nos encuentran fácilmente en Google Maps.",
    stars: 5,
  },
  {
    name: "Alejandro Ruiz",
    role: "Fundador de The Blade Studio",
    location: "Barcelona",
    text: "El sistema de citas es increíble. Personalizado con nuestra marca y nuestros colores. Los clientes nos dicen que es muy fácil de usar. La inversión se recuperó en el primer mes.",
    stars: 5,
  },
  {
    name: "Miguel Ángel Torres",
    role: "Director de Cortes Premium",
    location: "Valencia",
    text: "Pasamos de la posición 15 a la 2 en Google Maps en solo 3 meses. Los no-shows bajaron un 75% gracias a los recordatorios automáticos. Totalmente recomendable.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 md:py-32 section-dark grain-overlay relative">
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
            Testimonios
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
            LO QUE DICEN <span className="text-gold">NUESTROS CLIENTES</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 bg-card border border-border rounded-sm relative group hover:border-gold/20 transition-all duration-500"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-gold/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border/50">
                <p className="font-semibold text-foreground text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {testimonial.role} · {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
