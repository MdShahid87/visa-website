import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { destinations } from "@/data/destinations";

export default function Destinations() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="eyebrow mb-5">Destinations</div>

            <h2 className="section-title max-w-[720px] text-[#0b1f3a]">
              WHERE ARE YOU
              <br />
              PLANNING TO GO?
            </h2>
          </div>

          <p className="max-w-[330px] leading-7 text-[#667085]">
            Explore popular destinations and start a conversation with our
            visa specialist.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <Link
              key={destination.slug}
              href={`/destinations/${destination.slug}`}
              className="group relative min-h-[300px] overflow-hidden rounded-[24px] bg-[#0b1f3a] p-7 text-white"
            >
              <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all group-hover:bg-white group-hover:text-[#0b1f3a]">
                <ArrowUpRight size={17} />
              </div>

              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[50px] border-[#1769e1]"
                />
                <div
                  className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full border-[40px] border-[#d4a72c]"
                />
              </div>

              <div className="relative z-10 flex h-full flex-col justify-end">
                <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                  Destination {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="font-['Manrope'] text-3xl font-extrabold tracking-[-0.05em] sm:text-4xl">
                  {destination.name}
                </h3>

                <p className="mt-3 max-w-[280px] text-sm leading-6 text-white/60">
                  {destination.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}