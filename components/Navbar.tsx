"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import {
  createWhatsAppLink,
  whatsappMessages,
} from "@/lib/whatsapp";

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

        {/* NAVBAR */}
        <div className="flex h-[82px] items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            aria-label="JOB FINDER Home"
            className="flex h-[68px] w-[145px] shrink-0 items-center justify-start overflow-hidden"
          >
            <img
              src="/logo/logo.jpeg"
              alt="JOB FINDER"
              className="h-auto w-[145px] object-contain"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
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

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center gap-3 lg:flex">

            {/* WHATSAPP */}
            <a
              href={createWhatsAppLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline !min-h-[46px] !px-5"
            >
              WhatsApp
              <ArrowUpRight size={15} />
            </a>

            {/* CHECK ELIGIBILITY */}
            <Link
              href="/check-eligibility"
              className="btn btn-primary !min-h-[46px] !px-5"
            >
              Check Eligibility
            </Link>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white lg:hidden"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>

        </div>

        {/* MOBILE MENU */}
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

              {/* MOBILE WHATSAPP */}
              <a
                href={createWhatsAppLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-5"
              >
                Chat on WhatsApp
                <ArrowUpRight size={17} />
              </a>

              {/* MOBILE CHECK ELIGIBILITY */}
              <Link
                href="/check-eligibility"
                onClick={() => setOpen(false)}
                className="btn btn-outline mt-3"
              >
                Check Eligibility
                <ArrowUpRight size={17} />
              </Link>

            </nav>

          </div>
        )}

      </div>
    </header>
  );
}