import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function UmrahVisaPage() {
  const whatsappMessage =
    "Assalamu Alaikum, I need information about Umrah Visa.";

  const whatsappLink = `https://wa.me/917897638334?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="bg-[#0b1f3a] py-28 text-white">
          <div className="container">
            <div className="eyebrow !text-[#d4a72c]">
              Visa Service
            </div>

            <h1 className="display-text mt-7 text-[clamp(58px,8vw,115px)]">
              UMRAH
              <br />
              VISA.
            </h1>

            <p className="mt-8 max-w-[620px] text-lg leading-8 text-white/60">
              Assistance for Umrah visa requirements and travel preparation.
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

        {/* OVERVIEW */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
              <div className="eyebrow">
                Umrah Assistance
              </div>

              <div>
                <h2 className="font-['Manrope'] text-4xl font-extrabold tracking-[-.05em] text-[#0b1f3a] sm:text-6xl">
                  PREPARE FOR
                  <br />
                  YOUR JOURNEY.
                </h2>

                <p className="mt-7 max-w-[700px] leading-8 text-[#667085]">
                  We assist customers with Umrah visa-related requirements
                  and travel preparation. Requirements and procedures can
                  change, so the latest requirements should always be
                  confirmed before applying.
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
                    Discuss Umrah Visa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="section bg-[#f6f7f5]">
          <div className="container">
            <div className="mb-14">
              <div className="eyebrow mb-5">
                Our Process
              </div>

              <h2 className="section-title text-[#0b1f3a]">
                SIMPLE STEPS.
                <br />
                CLEAR GUIDANCE.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* 01 */}
              <div className="border-t border-[#dce1e7] pt-6">
                <div className="text-sm font-bold text-[#1769e1]">
                  01
                </div>

                <h3 className="mt-5 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                  Tell Us
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  Share your Umrah travel requirement and planned journey.
                </p>
              </div>

              {/* 02 */}
              <div className="border-t border-[#dce1e7] pt-6">
                <div className="text-sm font-bold text-[#1769e1]">
                  02
                </div>

                <h3 className="mt-5 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                  Documents
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  Understand the documentation and information generally
                  required.
                </p>
              </div>

              {/* 03 */}
              <div className="border-t border-[#dce1e7] pt-6">
                <div className="text-sm font-bold text-[#1769e1]">
                  03
                </div>

                <h3 className="mt-5 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                  Assistance
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  Continue with our specialist for guidance on the next
                  steps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* IMPORTANT */}
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
                  CAN CHANGE.
                </h2>

                <p className="mt-6 max-w-[720px] leading-8 text-[#667085]">
                  Umrah visa requirements, procedures and supporting
                  documents may change based on current regulations.
                  Always confirm the latest requirements before making
                  your application or travel arrangements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#d4a72c] py-24">
          <div className="container">
            <h2 className="font-['Manrope'] text-5xl font-extrabold tracking-[-.06em] text-[#0b1f3a] sm:text-7xl">
              READY FOR
              <br />
              YOUR UMRAH?
            </h2>

            <p className="mt-6 max-w-[550px] leading-7 text-[#0b1f3a]/70">
              Speak directly with Abdur Rhaman about your Umrah visa
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