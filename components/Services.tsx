import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <div className="eyebrow mb-6">What we do</div>
            <h2 className="section-title max-w-[480px] text-[#0b1f3a]">
              VISA SUPPORT FOR YOUR NEXT MOVE.
            </h2>

            <p className="mt-7 max-w-[400px] leading-7 text-[#667085]">
              From visa requirements to travel preparation, get direct
              assistance for your journey.
            </p>
          </div>

          <div className="border-t border-[#dce1e7]">
            {services.map((service) => (
              <Link
                href={`/visa-services/${service.slug}`}
                key={service.slug}
                className="group grid gap-5 border-b border-[#dce1e7] py-7 transition-all hover:px-3 lg:grid-cols-[80px_1fr_50px] lg:items-center"
              >
                <div className="text-sm font-bold text-[#1769e1]">
                  {service.number}
                </div>

                <div>
                  <h3 className="font-['Manrope'] text-3xl font-extrabold tracking-[-0.04em] text-[#0b1f3a] sm:text-4xl">
                    {service.title}
                  </h3>

                  <p className="mt-2 max-w-[560px] text-sm leading-6 text-[#667085]">
                    {service.description}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dce1e7] transition-all group-hover:border-[#0b1f3a] group-hover:bg-[#0b1f3a] group-hover:text-white">
                  <ArrowUpRight size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}