import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { destinations } from "@/data/destinations";

export default function Destinations() {
  return (
    <section className="section bg-[#f6f7f5]">
      <div className="container">
        {/* SECTION HEADER */}
        <div className="grid gap-8 lg:grid-cols-[.6fr_1.4fr]">
          <div className="eyebrow">
            Destinations
          </div>
          <div>
            <h2 className="section-title">
              WHEREVER
              <br />
              YOU&rsquo;RE
              <br />
              HEADED.
            </h2>
            <p className="mt-7 max-w-[650px] text-lg leading-8 text-[#667085]">
              Explore visa and travel assistance for some of the
              most requested destinations.
            </p>
          </div>
        </div>

        {/* DESTINATION GRID */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {destinations.map((destination, index) => (
            <Link
              key={destination.slug}
              href={`/destinations/${destination.slug}`}
              className="group relative min-h-[310px] overflow-hidden rounded-[28px] bg-[#0b1f3a] p-8 transition-all duration-500 hover:-translate-y-2"
            >

              {/* BACKGROUND GLOW */}
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#1769e1]/30 blur-[2px] transition-transform duration-700 group-hover:scale-125" />

              <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-[#d4a72c]/20 transition-transform duration-700 group-hover:scale-125" />

              {/* BACKGROUND IMAGE */}
              <div className="absolute right-7 top-7 h-20 w-20 rounded-full border border-white/10 bg-[#1769e1]/20" />

              {/* ARROW */}
              <div className="absolute right-8 top-8 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#0b1f3a]">
                <ArrowUpRight size={18} />
              </div>

              {/* DESTINATION NUMBER */}
              <div className="relative z-10 text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">
                Destination {String(index + 1).padStart(2, "0")}
              </div>

              {/* COUNTRY NAME */}
              <div className="absolute bottom-20 left-8 right-8 z-10">
                <h3 className="font-['Manrope'] text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl">
                 {destination.name}
               </h3>
              </div>

              {/* DESCRIPTION */}
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <p className="text-sm leading-6 text-white/75">
                  Visa and travel assistance for {destination.name}.
                </p>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}