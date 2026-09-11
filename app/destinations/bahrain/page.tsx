import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { ArrowUpRight } from "lucide-react";

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
        {/* =====================================================
            HERO SECTION
        ===================================================== */}
        <section className="bg-[#0b1f3a] py-28 text-white">
          <div className="container">
            <div className="eyebrow !text-[#d4a72c]">
              Destination
            </div>

            <h1 className="display-text mt-7 text-[clamp(58px,8vw,115px)] text-white">
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

        {/* =====================================================
            INTRODUCTION SECTION
        ===================================================== */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
              <div className="eyebrow">
                Bahrain
              </div>

              <div>
                <h2 className="font-['Manrope'] text-4xl font-extrabold tracking-[-.05em] text-[#0b1f3a] sm:text-6xl">
                  DISCOVER
                  <br />
                  BAHRAIN.
                </h2>

                <p className="mt-7 max-w-[700px] leading-8 text-[#667085]">
                  Bahrain is an island kingdom in the Arabian Gulf known
                  for its rich history, traditional markets, Islamic
                  architecture and modern city life. From the historic
                  Bahrain Fort to the famous Manama Souq, the country
                  offers a unique mix of heritage and contemporary
                  experiences.
                </p>

                <p className="mt-5 max-w-[700px] leading-8 text-[#667085]">
                  Whether you are visiting Bahrain for tourism, work or
                  another purpose, we can help you understand the visa
                  requirements and prepare for your journey.
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

        {/* =====================================================
            FAMOUS PLACES IN BAHRAIN
        ===================================================== */}
        <section className="section bg-[#f6f7f5]">
          <div className="container">
            <div className="mb-14">
              <div className="eyebrow mb-5">
                Explore Bahrain
              </div>

              <h2 className="section-title max-w-[850px] text-[#0b1f3a]">
                FAMOUS PLACES
                <br />
                TO EXPLORE.
              </h2>

              <p className="mt-6 max-w-[650px] leading-8 text-[#667085]">
                Discover some of Bahrain&apos;s most recognised landmarks,
                historic sites and cultural destinations.
              </p>
            </div>

            {/* PLACES GRID */}
            <div className="grid gap-6 md:grid-cols-3">

              {/* =================================================
                  BAHRAIN FORT
              ================================================= */}
              <article className="group overflow-hidden rounded-[24px] bg-white shadow-sm">
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src="https://cdn.sanity.io/images/rizm0do5/production/d1aa0a31bfc2ff5356d38843b7f4ed6c3f617b37-2400x1593.jpg"
                    alt="Bahrain Fort"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 rounded-full bg-[#0b1f3a]/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    Heritage
                  </div>
                </div>

                <div className="p-7">
                  <div className="text-sm font-bold text-[#1769e1]">
                    01
                  </div>

                  <h3 className="mt-3 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                    Bahrain Fort
                  </h3>

                  <p className="mt-3 leading-7 text-[#667085]">
                    A historic archaeological site on Bahrain&apos;s
                    northern coast and a UNESCO World Heritage Site.
                    The fort reflects thousands of years of Bahrain&apos;s
                    history and ancient civilisations.
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex font-bold text-[#1769e1]"
                  >
                    Ask About Bahrain →
                  </a>
                </div>
              </article>

              {/* =================================================
                  AL-FATEH GRAND MOSQUE
              ================================================= */}
              <article className="group overflow-hidden rounded-[24px] bg-white shadow-sm">
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src="https://traveltradejournal.com/wp-content/uploads/2024/01/Bahrain.jpg"
                    alt="Al-Fateh Grand Mosque Bahrain"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 rounded-full bg-[#0b1f3a]/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    Architecture
                  </div>
                </div>

                <div className="p-7">
                  <div className="text-sm font-bold text-[#1769e1]">
                    02
                  </div>

                  <h3 className="mt-3 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                    Al-Fateh Grand Mosque
                  </h3>

                  <p className="mt-3 leading-7 text-[#667085]">
                    One of Bahrain&apos;s most recognisable Islamic
                    landmarks in Manama, known for its impressive
                    architecture, large dome and beautiful interiors.
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex font-bold text-[#1769e1]"
                  >
                    Ask About Bahrain →
                  </a>
                </div>
              </article>

              {/* =================================================
                  MANAMA SOUQ
              ================================================= */}
              <article className="group overflow-hidden rounded-[24px] bg-white shadow-sm">
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src="https://s7g10.scene7.com/is/image/jazeeraairways/bahrain_souq_bab_al_bahrain"
                    alt="Bab Al Bahrain Manama Souq"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 rounded-full bg-[#0b1f3a]/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    Culture
                  </div>
                </div>

                <div className="p-7">
                  <div className="text-sm font-bold text-[#1769e1]">
                    03
                  </div>

                  <h3 className="mt-3 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                    Manama Souq
                  </h3>

                  <p className="mt-3 leading-7 text-[#667085]">
                    One of Bahrain&apos;s oldest and most famous markets,
                    located near Bab Al Bahrain and known for gold,
                    spices, sweets, textiles, souvenirs and traditional
                    Bahraini culture.
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex font-bold text-[#1769e1]"
                  >
                    Ask About Bahrain →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            VISA SERVICES SECTION
        ===================================================== */}
        <section className="section bg-white">
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

              {/* TOURIST VISA */}
              <div className="rounded-[24px] bg-[#f6f7f5] p-7">
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

              {/* WORK VISA */}
              <div className="rounded-[24px] bg-[#f6f7f5] p-7">
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

              {/* VISA STAMPING */}
              <div className="rounded-[24px] bg-[#f6f7f5] p-7">
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

        {/* =====================================================
            BAHRAIN QUICK FACTS
        ===================================================== */}
        <section className="section bg-[#f6f7f5]">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
              <div className="eyebrow">
                About Bahrain
              </div>

              <div>
                <h2 className="font-['Manrope'] text-4xl font-extrabold tracking-[-.05em] text-[#0b1f3a] sm:text-6xl">
                  HISTORY,
                  <br />
                  CULTURE &amp;
                  <br />
                  MODERN LIFE.
                </h2>

                <p className="mt-7 max-w-[700px] leading-8 text-[#667085]">
                  Bahrain combines ancient heritage with modern
                  infrastructure and Arabian hospitality. The kingdom is
                  known for historic archaeological sites, traditional
                  markets, pearl heritage, beaches and contemporary
                  shopping and entertainment.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[20px] bg-white p-5">
                    <div className="text-2xl font-extrabold text-[#0b1f3a]">
                      Manama
                    </div>

                    <div className="mt-2 text-sm text-[#667085]">
                      Capital City
                    </div>
                  </div>

                  <div className="rounded-[20px] bg-white p-5">
                    <div className="text-2xl font-extrabold text-[#0b1f3a]">
                      Gulf
                    </div>

                    <div className="mt-2 text-sm text-[#667085]">
                      Arabian Gulf
                    </div>
                  </div>

                  <div className="rounded-[20px] bg-white p-5">
                    <div className="text-2xl font-extrabold text-[#0b1f3a]">
                      Heritage
                    </div>

                    <div className="mt-2 text-sm text-[#667085]">
                      Ancient Culture
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}
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
                <ArrowUpRight size={17} />
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