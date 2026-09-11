import { MessageCircle, Phone } from "lucide-react";
import { createWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

export default function MobileBottomBar() {
  return (
    <div className="mobile-bottom-bar">
      <a href="tel:+917897638334">
        <Phone size={17} />
        Call
      </a>
      <a
        href={createWhatsAppLink(whatsappMessages.general)}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={17} />
        WhatsApp
      </a>
    </div>
  );
}