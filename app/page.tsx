import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import VisaFinder from "@/components/VisaFinder";
import Process from "@/components/Process";
import Destinations from "@/components/Destinations";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function Home() {
  const whatsappMessage =
    "Hello Abdur Rhaman, I would like to discuss my visa requirement.";

  const whatsappLink = `https://wa.me/917897638334?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* DIRECT ASSISTANCE */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
              <div className="eyebrow">
                Direct assistance
              </div>

              <div>
                <h2 className="font-['Manrope'] text-4xl font-extrabold leading-[1] tracking-[-0.05em] text-[#0b1f3a] sm:text-6xl">
                  YOUR TRAVEL PLANS.
                  <br />
                  OUR GUIDANCE.
                </h2>

                <p className="mt-7 max-w-[680px] text-lg leading-8 text-[#667085]">
                  JOB FINDER provides visa and travel assistance from
                  Lucknow, helping customers understand their requirements
                  and connect directly with a visa specialist.
                </p>

                <div className="mt-7">
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
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <VisaFinder />
        <Services />
        <Process />
        <Destinations />
        <FAQ />

        {/* FINAL CTA */}
        <section className="bg-[#d4a72c] py-24">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
              <h2 className="font-['Manrope'] text-6xl font-extrabold leading-[.9] tracking-[-.07em] text-[#0b1f3a] sm:text-8xl">
                READY TO START
                <br />
                YOUR JOURNEY?
              </h2>

              <div>
                <p className="max-w-[380px] leading-7 text-[#0b1f3a]/70">
                  Have a visa or travel question? Talk directly with
                  Abdur Rhaman.
                </p>

                <div className="mt-7">
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
                    WhatsApp a Visa Specialist
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}