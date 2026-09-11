"use client";

import { ArrowUpRight } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappMessage =
    "Hello Abdur Rhaman, I would like to discuss my visa requirement.";

  const whatsappLink = `https://wa.me/917897638334?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-outline"
    >
      WhatsApp
      <ArrowUpRight size={17} />
    </a>
  );
}