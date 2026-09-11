const WHATSAPP_NUMBER = "917897638334";

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

export const whatsappMessages = {
  general:
    "Hello Abdur Rhaman, I would like to discuss my visa requirement.",

  tourist:
    "Hello Abdur Rhaman, I need help with a Tourist Visa.",

  work:
    "Hello Abdur Rhaman, I need help with a Work Permit.",

  umrah:
    "Assalamu Alaikum, I need information about Umrah Visa.",

  ticket:
    "Hello Abdur Rhaman, I need help with Air Ticket booking.",

  emigration:
    "Hello Abdur Rhaman, I need assistance with Emigration.",

  stamping:
    "Hello Abdur Rhaman, I need assistance with Visa Stamping.",
};