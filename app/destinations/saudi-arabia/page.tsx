import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function SaudiArabiaPage() {
  const whatsappMessage =
    "Hello Abdur Rhaman, I need visa assistance for Saudi Arabia.";

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
              Destination
            </div>
            <h1 className="display-text mt-7 text-[clamp(58px,8vw,115px)]">
              SAUDI
              <br />
              ARABIA.
            </h1>
            <p className="mt-8 max-w-[680px] text-lg leading-8 text-white/60">
              Discover Saudi Arabia — from the spiritual cities of Makkah
              and Madinah to historic destinations, modern cities, deserts
              and the Red Sea coastline. Plan your journey with professional
              visa assistance.
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

        {/*INTRODUCTION SECTION*/}
        <section className="section bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
              <div className="eyebrow">
                Saudi Arabia
              </div>

              <div>
                <h2 className="font-['Manrope'] text-4xl font-extrabold tracking-[-.05em] text-[#0b1f3a] sm:text-6xl">
                  DISCOVER
                  <br />
                  SAUDI ARABIA.
                </h2>

                <p className="mt-7 max-w-[700px] leading-8 text-[#667085]">
                  Saudi Arabia is a country rich in Islamic heritage,
                  history and natural landscapes. It is home to the holy
                  cities of Makkah and Madinah and attracts millions of
                  visitors for religious journeys every year.
                </p>

                <p className="mt-5 max-w-[700px] leading-8 text-[#667085]">
                  Beyond its religious significance, Saudi Arabia offers
                  historic sites, modern cities, desert landscapes, mountain
                  regions and a growing range of tourism experiences.
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
                    Discuss Saudi Visa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*FAMOUS PLACES SECTION*/}
        <section className="section bg-[#f6f7f5]">
          <div className="container">
            <div className="mb-14">
              <div className="eyebrow mb-5">
                Famous Places
              </div>

              <h2 className="section-title max-w-[850px] text-[#0b1f3a]">
                PLACES TO
                <br />
                EXPLORE.
              </h2>

              <p className="mt-6 max-w-[650px] leading-7 text-[#667085]">
                Saudi Arabia offers a unique combination of spiritual
                destinations, ancient heritage and spectacular natural
                landscapes.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">

              {/* =====================================================
                  MAKKAH
              ===================================================== */}
              <div className="overflow-hidden rounded-[24px] bg-white shadow-sm">
                <div className="h-[300px] overflow-hidden bg-[#dfe5ea]">
                  <img
                    src="https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&q=85"
                    alt="Makkah Saudi Arabia"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="text-sm font-bold text-[#1769e1]">
                    01
                  </div>

                  <h3 className="mt-4 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                    Makkah
                  </h3>

                  <p className="mt-3 leading-7 text-[#667085]">
                    The holiest city in Islam and the destination of millions
                    of Muslims undertaking Hajj and Umrah.
                  </p>
                </div>
              </div>

              {/*MADINAH */}
              <div className="overflow-hidden rounded-[24px] bg-white shadow-sm">
                <div className="h-[300px] overflow-hidden bg-[#dfe5ea]">
                  <img
                    src="https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=1200&q=85"
                    alt="Madinah Saudi Arabia"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="text-sm font-bold text-[#1769e1]">
                    02
                  </div>

                  <h3 className="mt-4 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                    Madinah
                  </h3>

                  <p className="mt-3 leading-7 text-[#667085]">
                    A deeply significant Islamic city, home to Al-Masjid
                    an-Nabawi and an important destination for Muslim
                    travellers.
                  </p>
                </div>
              </div>

              {/* =====================================================
                  ALULA
              ===================================================== */}
              <div className="overflow-hidden rounded-[24px] bg-white shadow-sm">
                <div className="h-[300px] overflow-hidden bg-[#dfe5ea]">
                  <img
                    src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85"
                    alt="AlUla Saudi Arabia"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="text-sm font-bold text-[#1769e1]">
                    03
                  </div>

                  <h3 className="mt-4 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                    AlUla
                  </h3>

                  <p className="mt-3 leading-7 text-[#667085]">
                    A remarkable destination known for ancient heritage,
                    dramatic rock formations and spectacular desert
                    landscapes.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================
            HISTORY, CULTURE & MODERN LIFE
        ========================================================= */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">

              <div>
                <div className="eyebrow mb-5">
                  Saudi Arabia Experience
                </div>

                <h2 className="font-['Manrope'] text-4xl font-extrabold tracking-[-.05em] text-[#0b1f3a] sm:text-6xl">
                  HERITAGE,
                  <br />
                  FAITH &
                  <br />
                  <span className="text-[#1769e1]">
                    MODERN LIFE.
                  </span>
                </h2>

                <p className="mt-7 max-w-[680px] leading-8 text-[#667085]">
                  Saudi Arabia has a unique cultural identity shaped by
                  Islamic heritage, centuries of history and traditional
                  Arabian culture. Makkah and Madinah hold exceptional
                  importance for Muslims around the world.
                </p>

                <p className="mt-5 max-w-[680px] leading-8 text-[#667085]">
                  Today, cities such as Riyadh and Jeddah combine modern
                  infrastructure, business and entertainment with traditional
                  architecture, markets and cultural experiences.
                </p>
              </div>

              <div className="rounded-[30px] bg-[#0b1f3a] p-8 text-white sm:p-10">
                <div className="text-sm font-bold uppercase tracking-[0.16em] text-[#d4a72c]">
                  Saudi Highlights
                </div>

                <div className="mt-8 space-y-6">

                  {/* HIGHLIGHT 01 */}
                  <div className="border-b border-white/10 pb-5">
                    <div className="text-2xl font-extrabold">
                      Makkah
                    </div>

                    <p className="mt-2 text-sm leading-6 text-white/55">
                      One of the most important spiritual destinations for
                      Muslims worldwide.
                    </p>
                  </div>

                  {/* HIGHLIGHT 02 */}
                  <div className="border-b border-white/10 pb-5">
                    <div className="text-2xl font-extrabold">
                      Madinah
                    </div>

                    <p className="mt-2 text-sm leading-6 text-white/55">
                      A major Islamic heritage destination and home to the
                      Prophet&apos;s Mosque.
                    </p>
                  </div>

                  {/* HIGHLIGHT 03 */}
                  <div>
                    <div className="text-2xl font-extrabold">
                      AlUla
                    </div>

                    <p className="mt-2 text-sm leading-6 text-white/55">
                      Famous for ancient archaeological sites, mountains and
                      desert landscapes.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================
            VISA SERVICES SECTION
        ========================================================= */}
        <section className="section bg-[#f6f7f5]">
          <div className="container">
            <div className="mb-14">
              <div className="eyebrow mb-5">
                Saudi Arabia Visa Assistance
              </div>

              <h2 className="section-title max-w-[850px] text-[#0b1f3a]">
                WHAT DO YOU NEED
                <br />
                HELP WITH?
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">

              {/* TOURIST VISA */}
              <div className="rounded-[24px] bg-white p-7">
                <div className="text-sm font-bold text-[#1769e1]">
                  01
                </div>

                <h3 className="mt-5 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                  Tourist Visa
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  Assistance for customers planning tourism, holidays and
                  visits to Saudi Arabia.
                </p>

                <a
                  href={`https://wa.me/917897638334?text=${encodeURIComponent(
                    "Hello Abdur Rhaman, I need help with a Saudi Arabia Tourist Visa."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex font-bold text-[#1769e1]"
                >
                  Ask on WhatsApp →
                </a>
              </div>

              {/* UMRAH VISA */}
              <div className="rounded-[24px] bg-white p-7">
                <div className="text-sm font-bold text-[#1769e1]">
                  02
                </div>

                <h3 className="mt-5 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                  Umrah Visa
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  Assistance with Umrah visa requirements and travel
                  preparation for your pilgrimage.
                </p>

                <a
                  href={`https://wa.me/917897638334?text=${encodeURIComponent(
                    "Assalamu Alaikum, I need information about Umrah Visa for Saudi Arabia."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex font-bold text-[#1769e1]"
                >
                  Ask on WhatsApp →
                </a>
              </div>

              {/* WORK VISA */}
              <div className="rounded-[24px] bg-white p-7">
                <div className="text-sm font-bold text-[#1769e1]">
                  03
                </div>

                <h3 className="mt-5 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                  Work Visa
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  Guidance for work-related visa and employment requirements
                  for Saudi Arabia.
                </p>

                <a
                  href={`https://wa.me/917897638334?text=${encodeURIComponent(
                    "Hello Abdur Rhaman, I need help with a Saudi Arabia Work Visa."
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

        {/* =========================================================
            IMPORTANT VISA INFORMATION
        ========================================================= */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">

              <div className="eyebrow">
                Before You Apply
              </div>

              <div>
                <h2 className="font-['Manrope'] text-4xl font-extrabold tracking-[-.05em] text-[#0b1f3a] sm:text-6xl">
                  SAUDI VISA
                  <br />
                  INFORMATION.
                </h2>

                <p className="mt-7 max-w-[700px] leading-8 text-[#667085]">
                  Saudi Arabia visa requirements can depend on your
                  nationality, purpose of travel and visa category. Umrah,
                  tourist and work-related travel can have different
                  requirements and procedures.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">

                  {/* 01 */}
                  <div className="rounded-[20px] bg-[#f6f7f5] p-6">
                    <div className="text-sm font-bold text-[#1769e1]">
                      01
                    </div>

                    <h3 className="mt-4 font-['Manrope'] text-xl font-extrabold text-[#0b1f3a]">
                      Passport
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#667085]">
                      Keep a valid passport and check the applicable validity
                      requirements before travelling.
                    </p>
                  </div>

                  {/* 02 */}
                  <div className="rounded-[20px] bg-[#f6f7f5] p-6">
                    <div className="text-sm font-bold text-[#1769e1]">
                      02
                    </div>

                    <h3 className="mt-4 font-['Manrope'] text-xl font-extrabold text-[#0b1f3a]">
                      Visa Category
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#667085]">
                      Select the correct category based on whether your
                      journey is for tourism, Umrah, work or another purpose.
                    </p>
                  </div>

                  {/* 03 */}
                  <div className="rounded-[20px] bg-[#f6f7f5] p-6">
                    <div className="text-sm font-bold text-[#1769e1]">
                      03
                    </div>

                    <h3 className="mt-4 font-['Manrope'] text-xl font-extrabold text-[#0b1f3a]">
                      Documents
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#667085]">
                      Prepare the documents applicable to your specific Saudi
                      Arabia visa application.
                    </p>
                  </div>

                  {/* 04 */}
                  <div className="rounded-[20px] bg-[#f6f7f5] p-6">
                    <div className="text-sm font-bold text-[#1769e1]">
                      04
                    </div>

                    <h3 className="mt-4 font-['Manrope'] text-xl font-extrabold text-[#0b1f3a]">
                      Travel Plan
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#667085]">
                      Plan your flights, accommodation and other travel
                      arrangements according to your visa conditions.
                    </p>
                  </div>

                </div>

                <p className="mt-8 max-w-[720px] text-sm leading-7 text-[#667085]">
                  Saudi Arabia visa rules, eligibility requirements,
                  processing conditions and religious travel requirements can
                  change. Always confirm the latest applicable requirements
                  before submitting an application.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA SECTION
        ========================================================= */}
        <section className="bg-[#d4a72c] py-24">
          <div className="container">
            <h2 className="font-['Manrope'] text-5xl font-extrabold tracking-[-.06em] text-[#0b1f3a] sm:text-7xl">
              PLANNING A TRIP
              <br />
              TO SAUDI ARABIA?
            </h2>

            <p className="mt-6 max-w-[620px] leading-7 text-[#0b1f3a]/70">
              Speak directly with Abdur Rhaman about your Saudi Arabia visa,
              Umrah or travel requirements. Get assistance with your journey
              from start to finish.
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