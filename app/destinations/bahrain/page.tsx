import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function BahrainPage() {
  const whatsappMessage =
    "Hello Abdur Rhaman, I need visa assistance for Bahrain.";

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
              Destination
            </div>

            <h1 className="display-text mt-7 text-[clamp(58px,8vw,115px)]">
              BAHRAIN.
            </h1>

            <p className="mt-8 max-w-[620px] text-lg leading-8 text-white/60">
              Visa and travel assistance for customers planning to travel
              to Bahrain.
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
                Bahrain
              </div>

              <div>
                <h2 className="font-['Manrope'] text-4xl font-extrabold tracking-[-.05em] text-[#0b1f3a] sm:text-6xl">
                  TELL US ABOUT
                  <br />
                  YOUR JOURNEY.
                </h2>

                <p className="mt-7 max-w-[700px] leading-8 text-[#667085]">
                  Whether you are travelling for tourism, work or another
                  purpose, visa requirements can vary by nationality and
                  visa category.
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
                    Discuss Bahrain Visa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="section bg-[#f6f7f5]">
          <div className="container">
            <div className="mb-14">
              <div className="eyebrow mb-5">
                Bahrain Assistance
              </div>

              <h2 className="section-title max-w-[800px] text-[#0b1f3a]">
                WHAT DO YOU NEED
                <br />
                HELP WITH?
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {/* Tourist Visa */}
              <div className="rounded-[24px] bg-white p-7">
                <div className="text-sm font-bold text-[#1769e1]">
                  01
                </div>

                <h3 className="mt-5 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                  Tourist Visa
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  Assistance for customers planning tourism or visits to
                  Bahrain.
                </p>

                <a
                  href={`https://wa.me/917897638334?text=${encodeURIComponent(
                    "Hello Abdur Rhaman, I need help with a Bahrain Tourist Visa."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex font-bold text-[#1769e1]"
                >
                  Ask on WhatsApp →
                </a>
              </div>

              {/* Work Visa */}
              <div className="rounded-[24px] bg-white p-7">
                <div className="text-sm font-bold text-[#1769e1]">
                  02
                </div>

                <h3 className="mt-5 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                  Work Visa
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  Guidance for work-related visa and permit requirements
                  for Bahrain.
                </p>

                <a
                  href={`https://wa.me/917897638334?text=${encodeURIComponent(
                    "Hello Abdur Rhaman, I need help with a Bahrain Work Visa."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex font-bold text-[#1769e1]"
                >
                  Ask on WhatsApp →
                </a>
              </div>

              {/* Visa Stamping */}
              <div className="rounded-[24px] bg-white p-7">
                <div className="text-sm font-bold text-[#1769e1]">
                  03
                </div>

                <h3 className="mt-5 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                  Visa Stamping
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  Assistance with Bahrain visa stamping and related
                  documentation processes.
                </p>

                <a
                  href={`https://wa.me/917897638334?text=${encodeURIComponent(
                    "Hello Abdur Rhaman, I need assistance with Bahrain Visa Stamping."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex font-bold text-[#1769e1]"
                >
                  Ask on WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-[#d4a72c] py-24">
          <div className="container">
            <h2 className="font-['Manrope'] text-5xl font-extrabold tracking-[-.06em] text-[#0b1f3a] sm:text-7xl">
              PLANNING A TRIP
              <br />
              TO BAHRAIN?
            </h2>

            <p className="mt-6 max-w-[550px] leading-7 text-[#0b1f3a]/70">
              Speak directly with Abdur Rhaman about your visa and travel
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