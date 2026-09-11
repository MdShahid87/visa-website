"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Plane } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#f6f7f5]">
      <div className="container">
        <div className="grid min-h-[calc(100vh-82px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="eyebrow mb-7">
              Visa & Travel Assistance · Lucknow
            </div>

            <h1 className="display-text max-w-[850px] text-[clamp(58px,8.5vw,125px)] text-[#0b1f3a]">
              YOUR
              <br />
              JOURNEY
              <br />
              STARTS <span className="text-[#1769e1]">HERE.</span>
            </h1>

            <p className="mt-8 max-w-[580px] text-[17px] leading-8 text-[#667085]">
              Professional visa and travel assistance for tourist visas,
              work permits, Umrah visas, air tickets, emigration and visa
              stamping.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/check-eligibility" className="btn btn-primary">
                Check Visa Requirements
                <ArrowUpRight size={17} />
              </Link>
              <WhatsAppButton />
            </div>

            <div className="mt-12 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#667085]">
              <ArrowDownRight size={17} />
              Explore our services
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="relative"
          >
            <div className="visual-card">
              <div className="grid-lines" />

              <div className="absolute right-8 top-8 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#d4a72c] text-[#0b1f3a]">
                <Plane size={27} />
              </div>

              <div className="absolute bottom-8 left-8 right-8 z-10">
                <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">
                  JOB FINDER
                </div>

                <div className="font-['Manrope'] text-5xl font-extrabold leading-[.95] tracking-[-.06em] text-white sm:text-7xl">
                  TRAVEL
                  <br />
                  WITH
                  <br />
                  CONFIDENCE.
                </div>
              </div>

              <div className="absolute left-[16%] top-[27%] h-[230px] w-[170px] rotate-[-9deg] rounded-[18px] bg-[#f4f0e7] p-5 shadow-2xl">
                <div className="h-2 w-20 rounded-full bg-[#1769e1]" />
                <div className="mt-6 h-3 w-24 rounded-full bg-[#0b1f3a]/20" />
                <div className="mt-2 h-3 w-16 rounded-full bg-[#0b1f3a]/10" />

                <div className="mt-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#1769e1]/20 text-xl font-bold text-[#1769e1]">
                  JF
                </div>

                <div className="mt-8 h-2 w-full rounded-full bg-[#0b1f3a]/10" />
                <div className="mt-2 h-2 w-3/4 rounded-full bg-[#0b1f3a]/10" />
              </div>

              <div className="absolute right-[13%] top-[42%] h-[170px] w-[220px] rotate-[7deg] rounded-[18px] bg-white p-5 shadow-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#667085]">
                    Boarding Pass
                  </span>
                  <span className="text-xs font-bold text-[#1769e1]">
                    JF
                  </span>
                </div>

                <div className="mt-7 flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-extrabold text-[#0b1f3a]">
                      LKO
                    </div>
                    <div className="text-[9px] text-[#667085]">LUCKNOW</div>
                  </div>

                  <Plane size={22} className="text-[#1769e1]" />

                  <div>
                    <div className="text-3xl font-extrabold text-[#0b1f3a]">
                      DXB
                    </div>
                    <div className="text-[9px] text-[#667085]">DUBAI</div>
                  </div>
                </div>

                <div className="mt-5 h-7 rounded-md bg-[repeating-linear-gradient(90deg,#0b1f3a_0,#0b1f3a_2px,transparent_2px,transparent_5px)] opacity-40" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}