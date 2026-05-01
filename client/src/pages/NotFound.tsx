import { Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="font-display text-[10rem] leading-none text-gold/20">
          404
        </h1>
        <h2 className="font-display text-3xl tracking-wide text-foreground -mt-6 mb-4">
          PÁGINA NO ENCONTRADA
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <button
          onClick={() => setLocation("/")}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-primary-foreground font-semibold rounded-sm hover:bg-gold-light transition-all duration-300"
        >
          <Home className="w-4 h-4" />
          Volver al Inicio
        </button>
      </div>
    </div>
  );
}
