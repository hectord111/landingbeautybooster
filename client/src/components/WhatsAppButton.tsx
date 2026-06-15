import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "34667281362";
  const message = encodeURIComponent(
    "Hola, me interesa saber más sobre BarberBooster."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
    </a>
  );
}
