import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function ContactPage() {
  const whatsappMessage =
    "Hello Abdur Rhaman, I would like to contact you regarding my visa requirement.";

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
              Get In Touch
            </div>

            <h1 className="display-text mt-7 max-w-[1000px] text-[clamp(58px,8vw,115px)]">
              LET&apos;S TALK
              <br />
              ABOUT YOUR TRIP.
            </h1>

            <p className="mt-8 max-w-[650px] text-lg leading-8 text-white/60">
              Have a question about a visa, work permit, Umrah, ticket
              booking or another travel requirement? Contact us directly.
            </p>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
              <div>
                <div className="eyebrow">
                  Contact
                </div>

                <h2 className="mt-6 font-['Manrope'] text-4xl font-extrabold tracking-[-.05em] text-[#0b1f3a] sm:text-5xl">
                  SPEAK DIRECTLY
                  <br />
                  WITH US.
                </h2>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                {/* WHATSAPP */}
                <div className="border-t border-[#dce1e7] pt-6">
                  <div className="text-sm font-bold text-[#1769e1]">
                    WhatsApp
                  </div>

                  <h3 className="mt-4 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                    Chat with us
                  </h3>

                  <p className="mt-3 leading-7 text-[#667085]">
                    Send your visa or travel requirement directly to our
                    specialist.
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex btn"
                    style={{
                      backgroundColor: "#25D366",
                      color: "#ffffff",
                    }}
                  >
                    Open WhatsApp
                  </a>
                </div>

                {/* PHONE */}
                <div className="border-t border-[#dce1e7] pt-6">
                  <div className="text-sm font-bold text-[#1769e1]">
                    Phone
                  </div>

                  <h3 className="mt-4 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                    +91 78976 38334
                  </h3>

                  <p className="mt-3 leading-7 text-[#667085]">
                    Call directly for visa and travel assistance.
                  </p>

                  <a
                    href="tel:+917897638334"
                    className="mt-6 inline-flex btn"
                  >
                    Call Now
                  </a>
                </div>

                {/* LOCATION */}
                <div className="border-t border-[#dce1e7] pt-6">
                  <div className="text-sm font-bold text-[#1769e1]">
                    Location
                  </div>

                  <h3 className="mt-4 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                    Lucknow
                  </h3>

                  <p className="mt-3 leading-7 text-[#667085]">
                    Uttar Pradesh, India
                  </p>
                </div>

                {/* WORKING HOURS */}
                <div className="border-t border-[#dce1e7] pt-6">
                  <div className="text-sm font-bold text-[#1769e1]">
                    Assistance
                  </div>

                  <h3 className="mt-4 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                    Direct Support
                  </h3>

                  <p className="mt-3 leading-7 text-[#667085]">
                    Contact us to discuss your requirement and next steps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#d4a72c] py-24">
          <div className="container">
            <h2 className="font-['Manrope'] text-5xl font-extrabold tracking-[-.06em] text-[#0b1f3a] sm:text-7xl">
              HAVE A QUESTION?
              <br />
              LET&apos;S TALK.
            </h2>

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
                WhatsApp a Visa Specialist
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