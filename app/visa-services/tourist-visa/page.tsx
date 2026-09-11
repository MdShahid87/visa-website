import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function TouristVisaPage() {
  const whatsappMessage =
    "Hello Abdur Rhaman, I need help with a Tourist Visa.";

  const whatsappLink = `https://wa.me/917897638334?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="bg-[#0b1f3a] py-28 text-white">
          <div className="container">
            <div className="eyebrow !text-[#d4a72c]">
              Visa Service
            </div>

            <h1 className="display-text mt-7 max-w-[1000px] text-[clamp(58px,8vw,115px)]">
              TOURIST
              <br />
              VISA.
            </h1>

            <p className="mt-8 max-w-[600px] text-lg leading-8 text-white/60">
              Assistance for travellers planning international holidays,
              visits and travel experiences.
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
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
              <div className="eyebrow">
                Overview
              </div>

              <div>
                <h2 className="font-['Manrope'] text-4xl font-extrabold tracking-[-.05em] text-[#0b1f3a] sm:text-6xl">
                  PLAN YOUR TRIP.
                  <br />
                  UNDERSTAND THE PROCESS.
                </h2>

                <p className="mt-7 max-w-[720px] leading-8 text-[#667085]">
                  Tourist visa requirements depend on the destination,
                  nationality and current immigration rules. We can help
                  you understand the general process and connect you with
                  direct assistance.
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
                    Discuss Your Visa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="section bg-[#f6f7f5]">
          <div className="container">
            <div className="mb-14">
              <div className="eyebrow mb-5">
                Our Process
              </div>

              <h2 className="section-title max-w-[800px] text-[#0b1f3a]">
                SIMPLE STEPS.
                <br />
                CLEAR GUIDANCE.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* STEP 01 */}
              <div className="border-t border-[#dce1e7] pt-6">
                <div className="text-sm font-bold text-[#1769e1]">
                  01
                </div>

                <h3 className="mt-5 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                  Requirement
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  Tell us your destination, travel purpose and expected
                  travel date.
                </p>
              </div>

              {/* STEP 02 */}
              <div className="border-t border-[#dce1e7] pt-6">
                <div className="text-sm font-bold text-[#1769e1]">
                  02
                </div>

                <h3 className="mt-5 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                  Documents
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  Understand the documents and information generally
                  required for your visa.
                </p>
              </div>

              {/* STEP 03 */}
              <div className="border-t border-[#dce1e7] pt-6">
                <div className="text-sm font-bold text-[#1769e1]">
                  03
                </div>

                <h3 className="mt-5 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                  Assistance
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  Continue with our specialist for guidance on your next
                  steps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* IMPORTANT INFORMATION */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
              <div className="eyebrow">
                Important
              </div>

              <div>
                <h2 className="font-['Manrope'] text-4xl font-extrabold tracking-[-.05em] text-[#0b1f3a] sm:text-5xl">
                  REQUIREMENTS
                  <br />
                  CAN VARY.
                </h2>

                <p className="mt-6 max-w-[720px] leading-8 text-[#667085]">
                  Visa requirements, processing times and supporting
                  documents can vary depending on your nationality,
                  destination and visa category. Current requirements
                  should always be confirmed before applying.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-[#d4a72c] py-24">
          <div className="container">
            <h2 className="font-['Manrope'] text-5xl font-extrabold tracking-[-.06em] text-[#0b1f3a] sm:text-7xl">
              HAVE A TOURIST
              <br />
              VISA QUESTION?
            </h2>

            <p className="mt-6 max-w-[550px] leading-7 text-[#0b1f3a]/70">
              Speak directly with Abdur Rhaman about your tourist visa
              requirement.
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
                Talk to a Specialist
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <MobileBottomBar />
    </>
  );
}