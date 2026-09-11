import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function EmigrationPage() {
  const whatsappMessage =
    "Hello Abdur Rhaman, I need assistance with Emigration.";

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
              Travel Service
            </div>

            <h1 className="display-text mt-7 text-[clamp(58px,8vw,115px)]">
              EMIGRATION
              <br />
              SUPPORT.
            </h1>

            <p className="mt-8 max-w-[620px] text-lg leading-8 text-white/60">
              Guidance for emigration-related documentation and travel
              requirements.
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

        {/* INTRODUCTION SECTION */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
              <div className="eyebrow">
                Emigration Assistance
              </div>

              <div>
                <h2 className="font-['Manrope'] text-4xl font-extrabold tracking-[-.05em] text-[#0b1f3a] sm:text-6xl">
                  UNDERSTAND
                  <br />
                  THE PROCESS.
                </h2>

                <p className="mt-7 max-w-[700px] leading-8 text-[#667085]">
                  Emigration requirements can vary depending on destination,
                  employment, nationality and current regulations. Speak
                  with our specialist for guidance based on your situation.
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
                    Discuss Your Requirement
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
                Our Assistance
              </div>

              <h2 className="section-title max-w-[800px] text-[#0b1f3a]">
                A CLEARER
                <br />
                WAY FORWARD.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {/* STEP 01 */}
              <div className="rounded-[24px] bg-white p-7">
                <div className="text-sm font-bold text-[#1769e1]">
                  01
                </div>

                <h3 className="mt-5 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                  Understand
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  Share your destination, employment and travel
                  requirements.
                </p>
              </div>

              {/* STEP 02 */}
              <div className="rounded-[24px] bg-white p-7">
                <div className="text-sm font-bold text-[#1769e1]">
                  02
                </div>

                <h3 className="mt-5 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                  Documentation
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  Understand the documents and information generally
                  required.
                </p>
              </div>

              {/* STEP 03 */}
              <div className="rounded-[24px] bg-white p-7">
                <div className="text-sm font-bold text-[#1769e1]">
                  03
                </div>

                <h3 className="mt-5 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                  Assistance
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  Continue the conversation with our specialist for
                  guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-[#d4a72c] py-24">
          <div className="container">
            <h2 className="font-['Manrope'] text-5xl font-extrabold tracking-[-.06em] text-[#0b1f3a] sm:text-7xl">
              HAVE AN
              <br />
              EMIGRATION QUESTION?
            </h2>

            <p className="mt-6 max-w-[550px] leading-7 text-[#0b1f3a]/70">
              Speak directly with Abdur Rhaman about your emigration
              requirements and next steps.
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