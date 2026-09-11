import Link from "next/link";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const whatsappMessage =
    "Hello Abdur Rhaman, I would like to discuss my visa requirement.";

  const whatsappLink = `https://wa.me/917897638334?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <footer className="bg-[#0b1f3a] text-white">
      <div className="container py-20">

        <div className="grid gap-14 lg:grid-cols-[1.3fr_.7fr_.7fr]">

          {/* BRAND + CTA */}
          <div>

            {/* LOGO */}
            <Link
              href="/"
              aria-label="JOB FINDER Home"
              className="flex h-[68px] w-[180px] items-center overflow-hidden"
            >
              <img
                src="/logo/logo.jpeg"
                alt="JOB FINDER Visa Specialist"
                className="h-auto w-[180px] object-contain"
              />
            </Link>

            {/* MAIN HEADING */}
            <h2 className="mt-10 max-w-[620px] font-['Manrope'] text-5xl font-extrabold leading-[.95] tracking-[-.06em] sm:text-7xl">
              LET&apos;S TALK ABOUT
              <br />
              YOUR JOURNEY.
            </h2>

            {/* WHATSAPP CTA */}
            <div className="mt-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  backgroundColor: "#25D366",
                  color: "#ffffff",
                }}
              >
                Chat with Abdur Rhaman
                <ArrowUpRight size={17} />
              </a>
            </div>

          </div>

          {/* NAVIGATION */}
          <div>
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-white/40">
              Navigation
            </div>

            <div className="flex flex-col gap-4 text-sm font-semibold text-white/75">

              <Link
                href="/"
                className="transition-colors hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/visa-services"
                className="transition-colors hover:text-white"
              >
                Visa Services
              </Link>

              <Link
                href="/destinations"
                className="transition-colors hover:text-white"
              >
                Destinations
              </Link>

              <Link
                href="/about"
                className="transition-colors hover:text-white"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="transition-colors hover:text-white"
              >
                Contact
              </Link>

              <Link
                href="/faq"
                className="transition-colors hover:text-white"
              >
                FAQ
              </Link>

            </div>
          </div>

          {/* CONTACT */}
          <div>

            <div className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-white/40">
              Contact
            </div>

            <div className="space-y-5 text-sm text-white/75">

              {/* LOCATION */}
              <div className="flex gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#d4a72c]"
                />

                <span>
                  Lucknow, Uttar Pradesh, India
                </span>
              </div>

              {/* PHONE */}
              <a
                href="tel:+917897638334"
                className="flex gap-3 transition-opacity hover:opacity-70"
              >
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-[#d4a72c]"
                />

                <span>
                  +91 78976 38334
                </span>
              </a>

              {/* FACEBOOK */}
              <a
                href="#"
                className="flex gap-3 transition-opacity hover:opacity-70"
              >
                <span className="flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full bg-[#d4a72c] text-[10px] font-bold text-[#0b1f3a]">
                  f
                </span>

                <span>
                  Job4U
                </span>
              </a>

            </div>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="mt-20 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 text-xs text-white/40 md:flex-row">

          <div>
            © {new Date().getFullYear()} JOB FINDER. All rights reserved.
          </div>

          <div className="flex gap-6">

            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms
            </Link>

            <Link
              href="/disclaimer"
              className="transition-colors hover:text-white"
            >
              Disclaimer
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}