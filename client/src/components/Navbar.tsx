import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#servicios", label: "Servicios" },
    { href: "#beneficios", label: "Beneficios" },
    { href: "#como-funciona", label: "Cómo Funciona" },
    { href: "#precios", label: "Precios" },
    { href: "#testimonios", label: "Testimonios" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-18 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-3xl md:text-4xl tracking-tight text-gold italic">
            Beauty
          </span>
          <span className="font-display text-3xl md:text-4xl tracking-tight text-foreground">
            Booster
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="px-6 py-2.5 border border-gold/50 text-gold font-semibold text-sm rounded-full hover:bg-gold/10 transition-all duration-300"
          >
            Contactar
          </a>
          <a
            href="https://beautybooster.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold text-primary-foreground font-semibold text-sm rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_20px_oklch(0.64_0.105_350/0.35)]"
          >
            Acceder a la App
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-gold transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-6 py-3 border border-gold/50 text-gold font-semibold text-sm rounded-full text-center"
              >
                Contactar
              </a>
              <a
                href="https://beautybooster.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gold text-primary-foreground font-semibold text-sm rounded-full text-center"
              >
                Acceder a la App
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
