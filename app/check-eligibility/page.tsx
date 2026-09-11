import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function CheckEligibilityPage() {
  const whatsappMessage =
    "Hello Abdur Rhaman, I would like to check my visa eligibility.";

  const whatsappLink = `https://wa.me/917897638334?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <Navbar />

      <main>
        <section className="bg-[#0b1f3a] py-28 text-white">
          <div className="container">
            <div className="eyebrow !text-[#d4a72c]">
              Visa Eligibility
            </div>

            <h1 className="display-text mt-7 max-w-[1000px] text-[clamp(58px,8vw,115px)]">
              CHECK YOUR
              <br />
              ELIGIBILITY.
            </h1>

            <p className="mt-8 max-w-[650px] text-lg leading-8 text-white/60">
              Tell us about your destination and travel plans. Our visa
              specialist can help you understand the general requirements
              for your journey.
            </p>

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
                Check on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
              <div className="eyebrow">
                What We Need
              </div>

              <div>
                <h2 className="font-['Manrope'] text-4xl font-extrabold tracking-[-.05em] text-[#0b1f3a] sm:text-6xl">
                  A FEW DETAILS.
                  <br />
                  CLEARER GUIDANCE.
                </h2>

                <p className="mt-7 max-w-[720px] leading-8 text-[#667085]">
                  Visa eligibility depends on factors such as your
                  nationality, destination, visa category, travel purpose
                  and current immigration requirements.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="border-t border-[#dce1e7] pt-5">
                    <div className="text-sm font-bold text-[#1769e1]">
                      01
                    </div>

                    <h3 className="mt-3 font-['Manrope'] text-xl font-extrabold text-[#0b1f3a]">
                      Destination
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#667085]">
                      Tell us the country you want to travel to.
                    </p>
                  </div>

                  <div className="border-t border-[#dce1e7] pt-5">
                    <div className="text-sm font-bold text-[#1769e1]">
                      02
                    </div>

                    <h3 className="mt-3 font-['Manrope'] text-xl font-extrabold text-[#0b1f3a]">
                      Visa Type
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#667085]">
                      Tell us whether you need a tourist, work, Umrah or
                      another visa.
                    </p>
                  </div>

                  <div className="border-t border-[#dce1e7] pt-5">
                    <div className="text-sm font-bold text-[#1769e1]">
                      03
                    </div>

                    <h3 className="mt-3 font-['Manrope'] text-xl font-extrabold text-[#0b1f3a]">
                      Nationality
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#667085]">
                      Your nationality can affect visa requirements.
                    </p>
                  </div>

                  <div className="border-t border-[#dce1e7] pt-5">
                    <div className="text-sm font-bold text-[#1769e1]">
                      04
                    </div>

                    <h3 className="mt-3 font-['Manrope'] text-xl font-extrabold text-[#0b1f3a]">
                      Travel Purpose
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#667085]">
                      Explain the purpose and approximate timing of your
                      journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f7f5] py-24">
          <div className="container">
            <div className="max-w-[800px]">
              <div className="eyebrow">
                Next Step
              </div>

              <h2 className="mt-6 font-['Manrope'] text-5xl font-extrabold tracking-[-.06em] text-[#0b1f3a] sm:text-7xl">
                LET&apos;S CHECK
                <br />
                YOUR REQUIREMENT.
              </h2>

              <p className="mt-6 max-w-[650px] leading-8 text-[#667085]">
                Send your basic travel details directly on WhatsApp and
                continue with our visa specialist.
              </p>

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
                  Talk to a Visa Specialist
                </a>
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