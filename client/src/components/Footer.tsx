import { Instagram, Facebook, Linkedin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-border section-darker">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-3xl tracking-tight text-gold italic">
                Beauty
              </span>
              <span className="font-display text-3xl tracking-tight text-foreground">
                Booster
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Sistemas de citas personalizados y posicionamiento en Google Maps
              para centros de belleza que quieren crecer. Digitaliza tu negocio y
              multiplica tus clientas.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-border rounded-sm hover:border-gold/50 hover:text-gold transition-all duration-300 text-muted-foreground"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-border rounded-sm hover:border-gold/50 hover:text-gold transition-all duration-300 text-muted-foreground"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-border rounded-sm hover:border-gold/50 hover:text-gold transition-all duration-300 text-muted-foreground"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans font-semibold text-xs uppercase tracking-widest text-foreground mb-4">
              Servicios
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Sistema de Citas
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Google Maps SEO
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Gestión de Reseñas
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Marketing Local
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-xs uppercase tracking-widest text-foreground mb-4">
              Empresa
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a href="#precios" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 BeautyBooster. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="text-xs text-muted-foreground hover:text-gold transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="text-xs text-muted-foreground hover:text-gold transition-colors">
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
