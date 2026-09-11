import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function AirTicketPage() {
  const whatsappMessage =
    "Hello Abdur Rhaman, I need help with Air Ticket booking.";

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
              AIR
              <br />
              TICKETS.
            </h1>

            <p className="mt-8 max-w-[620px] text-lg leading-8 text-white/60">
              Travel assistance for domestic and international flight
              booking requirements.
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
                Air Ticket Assistance
              </div>

              <div>
                <h2 className="font-['Manrope'] text-4xl font-extrabold tracking-[-.05em] text-[#0b1f3a] sm:text-6xl">
                  PLAN THE
                  <br />
                  ROUTE AHEAD.
                </h2>

                <p className="mt-7 max-w-[700px] leading-8 text-[#667085]">
                  Share your destination, preferred travel date and
                  requirements with us for air ticket assistance.
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
                    Discuss Your Journey
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
                Our Assistance
              </div>

              <h2 className="section-title max-w-[800px] text-[#0b1f3a]">
                FLIGHT BOOKING
                <br />
                MADE SIMPLE.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {/* DOMESTIC */}
              <div className="rounded-[24px] bg-white p-7">
                <div className="text-sm font-bold text-[#1769e1]">
                  01
                </div>

                <h3 className="mt-5 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                  Domestic Flights
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  Assistance with flight bookings for domestic travel
                  requirements.
                </p>

                <a
                  href={`https://wa.me/917897638334?text=${encodeURIComponent(
                    "Hello Abdur Rhaman, I need help booking a domestic flight."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex font-bold text-[#1769e1]"
                >
                  Ask on WhatsApp →
                </a>
              </div>

              {/* INTERNATIONAL */}
              <div className="rounded-[24px] bg-white p-7">
                <div className="text-sm font-bold text-[#1769e1]">
                  02
                </div>

                <h3 className="mt-5 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                  International Flights
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  Support for international flight booking and travel
                  planning.
                </p>

                <a
                  href={`https://wa.me/917897638334?text=${encodeURIComponent(
                    "Hello Abdur Rhaman, I need help booking an international flight."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex font-bold text-[#1769e1]"
                >
                  Ask on WhatsApp →
                </a>
              </div>

              {/* TRAVEL REQUIREMENTS */}
              <div className="rounded-[24px] bg-white p-7">
                <div className="text-sm font-bold text-[#1769e1]">
                  03
                </div>

                <h3 className="mt-5 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                  Travel Assistance
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  Discuss your destination, dates and travel requirements
                  directly with our team.
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex font-bold text-[#1769e1]"
                >
                  Contact Us →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-[#d4a72c] py-24">
          <div className="container">
            <h2 className="font-['Manrope'] text-5xl font-extrabold tracking-[-.06em] text-[#0b1f3a] sm:text-7xl">
              NEED A
              <br />
              TICKET?
            </h2>

            <p className="mt-6 max-w-[550px] leading-7 text-[#0b1f3a]/70">
              Tell us where you are travelling and when you plan to
              travel. Our team can assist with your booking requirements.
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
                Ask on WhatsApp
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