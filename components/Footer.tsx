import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

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
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-extrabold text-[#0b1f3a]">
                JQ
              </div>

              <div>
                <div className="font-['Manrope'] text-xl font-extrabold tracking-[-0.04em]">
                  JOB FINDER
                </div>

                <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/50">
                  Visa Specialist
                </div>
              </div>
            </div>

            <h2 className="mt-10 max-w-[620px] font-['Manrope'] text-5xl font-extrabold leading-[.95] tracking-[-.06em] sm:text-7xl">
              LET&apos;S TALK ABOUT
              <br />
              YOUR JOURNEY.
            </h2>

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
              </a>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-white/40">
              Navigation
            </div>

            <div className="flex flex-col gap-4 text-sm font-semibold text-white/75">
              <Link href="/">Home</Link>

              <Link href="/visa-services">
                Visa Services
              </Link>

              <Link href="/destinations">
                Destinations
              </Link>

              <Link href="/about">
                About
              </Link>

              <Link href="/contact">
                Contact
              </Link>

              <Link href="/faq">
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
                  className="shrink-0 text-[#d4a72c]"
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
                  className="shrink-0 text-[#d4a72c]"
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
            <Link href="/privacy-policy">
              Privacy
            </Link>

            <Link href="/terms">
              Terms
            </Link>

            <Link href="/disclaimer">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}