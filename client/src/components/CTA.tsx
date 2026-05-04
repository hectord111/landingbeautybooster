import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    barbershop: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensaje enviado correctamente. Te contactaremos pronto.");
    setFormData({ name: "", email: "", phone: "", barbershop: "", message: "" });
  };

  return (
    <section id="contacto" className="py-24 md:py-32 relative">
      {/* Background image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663399306078/VfcBb45G5ghCMm6VPu8Ur7/barber-tools-pattern-Kho7As2waBjc29aLCebMzD.webp"
          alt="Herramientas de barbería sobre fondo oscuro"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-background/95" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
              Contacto
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-6">
              ¿LISTO PARA
              <br />
              <span className="text-gold">IMPULSAR</span> TU BARBERÍA?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
              Solicita una consulta gratuita y descubre cómo podemos ayudarte a
              conseguir más clientes y automatizar tu gestión de citas.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-gold/20 rounded-sm">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Teléfono</p>
                  <p className="text-foreground font-medium">+34 612 345 678</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-gold/20 rounded-sm">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">hola@barberbooster.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-gold/20 rounded-sm">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Ubicación</p>
                  <p className="text-foreground font-medium">España · 100% Remoto</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 bg-card border border-border rounded-sm space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground text-sm focus:border-gold/50 focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground text-sm focus:border-gold/50 focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground text-sm focus:border-gold/50 focus:outline-none transition-colors"
                    placeholder="+34 600 000 000"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Barbería
                  </label>
                  <input
                    type="text"
                    value={formData.barbershop}
                    onChange={(e) =>
                      setFormData({ ...formData, barbershop: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground text-sm focus:border-gold/50 focus:outline-none transition-colors"
                    placeholder="Nombre de tu barbería"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground text-sm focus:border-gold/50 focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntanos qué necesitas..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gold text-primary-foreground font-semibold rounded-sm hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_20px_oklch(0.78_0.12_75/0.3)]"
              >
                Enviar Mensaje
                <Send className="w-4 h-4" />
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Te responderemos en menos de 24 horas
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
