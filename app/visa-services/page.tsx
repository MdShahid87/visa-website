import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { services } from "@/data/services";

export default function VisaServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-[#0b1f3a] py-28 text-white">
          <div className="container">
            <div className="eyebrow !text-[#d4a72c]">
              Visa Services
            </div>

            <h1 className="display-text mt-7 max-w-[1000px] text-[clamp(60px,9vw,130px)]">
              SUPPORT FOR
              <br />
              YOUR NEXT MOVE.
            </h1>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <div className="border-t border-[#dce1e7]">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/visa-services/${service.slug}`}
                  className="group grid gap-6 border-b border-[#dce1e7] py-10 lg:grid-cols-[100px_1fr_60px] lg:items-center"
                >
                  <span className="font-bold text-[#1769e1]">
                    {service.number}
                  </span>

                  <div>
                    <h2 className="font-['Manrope'] text-4xl font-extrabold tracking-[-.05em] text-[#0b1f3a]">
                      {service.title}
                    </h2>

                    <p className="mt-3 max-w-[650px] leading-7 text-[#667085]">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#dce1e7] group-hover:bg-[#0b1f3a] group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBottomBar />
    </>
  );
}