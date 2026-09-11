"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { createWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Visa Services", href: "/visa-services" },
    { label: "Destinations", href: "/destinations" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f6f7f5]/90 backdrop-blur-xl">
      <div className="container">
        <div className="flex h-[82px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0b1f3a] text-sm font-extrabold text-white">
              JQ
            </div>

            <div>
              <div className="font-['Manrope'] text-[18px] font-extrabold tracking-[-0.04em]">
                JOB FINDER
              </div>
              <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#667085]">
                Visa Specialist
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] font-semibold text-[#394150] transition-colors hover:text-[#1769e1]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={createWhatsAppLink(whatsappMessages.general)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline !min-h-[46px] !px-5"
            >
              WhatsApp
              <ArrowUpRight size={15} />
            </a>

            <Link
              href="/check-eligibility"
              className="btn btn-primary !min-h-[46px] !px-5"
            >
              Check Eligibility
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white lg:hidden"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {open && (
          <div className="border-t border-black/5 py-5 lg:hidden">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-black/5 py-4 text-lg font-semibold"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={createWhatsAppLink(whatsappMessages.general)}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary mt-5"
              >
                Chat on WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}