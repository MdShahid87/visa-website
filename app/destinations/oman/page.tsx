import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function OmanPage() {
  const whatsappMessage =
    "Hello Abdur Rhaman, I need visa assistance for Oman.";

  const whatsappLink = `https://wa.me/917897638334?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <Navbar />

      <main>
        {/* =========================================================
            HERO SECTION
        ========================================================= */}
        <section className="bg-[#0b1f3a] py-28 text-white">
          <div className="container">
            <div className="eyebrow !text-[#d4a72c]">
              Destination
            </div>

            <h1 className="display-text mt-7 text-[clamp(58px,8vw,115px)]">
              OMAN.
            </h1>

            <p className="mt-8 max-w-[650px] text-lg leading-8 text-white/60">
              Discover Oman — a country of dramatic mountains, beautiful
              coastlines, historic forts, traditional souqs and rich Omani
              culture. Plan your journey with professional visa assistance.
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

        {/* =========================================================
            INTRODUCTION SECTION
        ========================================================= */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
              <div className="eyebrow">
                Oman
              </div>

              <div>
                <h2 className="font-['Manrope'] text-4xl font-extrabold tracking-[-.05em] text-[#0b1f3a] sm:text-6xl">
                  DISCOVER
                  <br />
                  OMAN.
                </h2>

                <p className="mt-7 max-w-[700px] leading-8 text-[#667085]">
                  Oman is one of the Gulf region&apos;s most distinctive
                  destinations, combining ancient heritage with modern
                  cities, spectacular mountains, deserts and coastline.
                  Muscat, the country&apos;s capital, is known for its
                  traditional architecture, souqs and cultural landmarks.
                </p>

                <p className="mt-5 max-w-[700px] leading-8 text-[#667085]">
                  From the Sultan Qaboos Grand Mosque and Mutrah Souq to
                  historic forts, mountain villages and natural wadis, Oman
                  offers a wide range of experiences for international
                  travellers.
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
                    Discuss Oman Visa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FAMOUS PLACES SECTION
        ========================================================= */}
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
                Oman offers an impressive combination of historical
                architecture, natural landscapes and cultural experiences.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">

              {/* =====================================================
                  NIZWA FORT
              ===================================================== */}
              <div className="overflow-hidden rounded-[24px] bg-white shadow-sm">
                <div className="h-[300px] overflow-hidden bg-[#dfe5ea]">
                  <img
                    src="https://cdn2.wingie.com/uploads/f_webp%2Cs_825x620%2Cq_60%2Cfit_cover/qlet_nzwa_db39cf231d.jpg"
                    alt="Nizwa Fort Oman"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="text-sm font-bold text-[#1769e1]">
                    01
                  </div>

                  <h3 className="mt-4 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                    Nizwa Fort
                  </h3>

                  <p className="mt-3 leading-7 text-[#667085]">
                    One of Oman&apos;s most famous historic landmarks, Nizwa
                    Fort showcases the country&apos;s traditional military
                    architecture and heritage.
                  </p>
                </div>
              </div>

              {/* =====================================================
                  SULTAN QABOOS GRAND MOSQUE
              ===================================================== */}
              <div className="overflow-hidden rounded-[24px] bg-white shadow-sm">
                <div className="h-[300px] overflow-hidden bg-[#dfe5ea]">
                  <img
                    src="https://itccms.imgix.net/10042243/shutterstock_1133827391-sultan-qaboos-grand-mosque.jpg"
                    alt="Sultan Qaboos Grand Mosque Oman"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="text-sm font-bold text-[#1769e1]">
                    02
                  </div>

                  <h3 className="mt-4 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                    Sultan Qaboos Grand Mosque
                  </h3>

                  <p className="mt-3 leading-7 text-[#667085]">
                    Located in Muscat, this iconic mosque is one of Oman&apos;s
                    most recognizable architectural and religious landmarks.
                  </p>
                </div>
              </div>

              {/* =====================================================
                  WADI SHAB
              ===================================================== */}
              <div className="overflow-hidden rounded-[24px] bg-white shadow-sm">
                <div className="h-[300px] overflow-hidden bg-[#dfe5ea]">
                  <img
                    src="https://www.daymaker.travel/_next/image?q=75&url=https%3A%2F%2Fdaymaker-travel.s3-eu-central-1.amazonaws.com%2Ftrips%2F63e694d6-f99a-4d45-80f6-233d4baff299%2F3eae074f-df66-42d6-b8a8-c2eb25e9931e.jpeg&w=3840"
                    alt="Wadi Shab Oman"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="text-sm font-bold text-[#1769e1]">
                    03
                  </div>

                  <h3 className="mt-4 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                    Wadi Shab
                  </h3>

                  <p className="mt-3 leading-7 text-[#667085]">
                    A spectacular natural destination known for dramatic
                    cliffs, clear water pools and beautiful mountain scenery.
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
                  Oman Experience
                </div>

                <h2 className="font-['Manrope'] text-4xl font-extrabold tracking-[-.05em] text-[#0b1f3a] sm:text-6xl">
                  HISTORY,
                  <br />
                  CULTURE &
                  <br />
                  <span className="text-[#1769e1]">
                    MODERN LIFE.
                  </span>
                </h2>

                <p className="mt-7 max-w-[680px] leading-8 text-[#667085]">
                  Oman has a long maritime and cultural history and has
                  preserved many elements of its traditional identity.
                  Historic forts, traditional markets and old settlements can
                  be found across the country.
                </p>

                <p className="mt-5 max-w-[680px] leading-8 text-[#667085]">
                  At the same time, cities such as Muscat combine modern
                  infrastructure with traditional Omani architecture,
                  creating a distinctive travel experience.
                </p>
              </div>

              <div className="rounded-[30px] bg-[#0b1f3a] p-8 text-white sm:p-10">
                <div className="text-sm font-bold uppercase tracking-[0.16em] text-[#d4a72c]">
                  Oman Highlights
                </div>

                <div className="mt-8 space-y-6">

                  <div className="border-b border-white/10 pb-5">
                    <div className="text-2xl font-extrabold">
                      Muscat
                    </div>

                    <p className="mt-2 text-sm leading-6 text-white/55">
                      Oman&apos;s capital, combining traditional culture,
                      coastline and modern city life.
                    </p>
                  </div>

                  <div className="border-b border-white/10 pb-5">
                    <div className="text-2xl font-extrabold">
                      Nizwa
                    </div>

                    <p className="mt-2 text-sm leading-6 text-white/55">
                      A historic destination known for its fort and
                      traditional souq.
                    </p>
                  </div>

                  <div>
                    <div className="text-2xl font-extrabold">
                      Mutrah
                    </div>

                    <p className="mt-2 text-sm leading-6 text-white/55">
                      A historic waterfront area famous for Mutrah Souq,
                      traditional shops and harbour views.
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
                Oman Visa Assistance
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
                  Assistance for customers planning holidays, visits and
                  tourism in Oman.
                </p>

                <a
                  href={`https://wa.me/917897638334?text=${encodeURIComponent(
                    "Hello Abdur Rhaman, I need help with an Oman Tourist Visa."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex font-bold text-[#1769e1]"
                >
                  Ask on WhatsApp →
                </a>
              </div>

              {/* WORK PERMIT */}
              <div className="rounded-[24px] bg-white p-7">
                <div className="text-sm font-bold text-[#1769e1]">
                  02
                </div>

                <h3 className="mt-5 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                  Work Visa
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  Guidance for work-related visa and permit requirements
                  for Oman.
                </p>

                <a
                  href={`https://wa.me/917897638334?text=${encodeURIComponent(
                    "Hello Abdur Rhaman, I need help with an Oman Work Visa."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex font-bold text-[#1769e1]"
                >
                  Ask on WhatsApp →
                </a>
              </div>

              {/* VISA STAMPING */}
              <div className="rounded-[24px] bg-white p-7">
                <div className="text-sm font-bold text-[#1769e1]">
                  03
                </div>

                <h3 className="mt-5 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                  Visa Stamping
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  Assistance with Oman visa stamping and related
                  documentation processes.
                </p>

                <a
                  href={`https://wa.me/917897638334?text=${encodeURIComponent(
                    "Hello Abdur Rhaman, I need assistance with Oman Visa Stamping."
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
                  OMAN VISA
                  <br />
                  INFORMATION.
                </h2>

                <p className="mt-7 max-w-[700px] leading-8 text-[#667085]">
                  Oman visa requirements can vary depending on your
                  nationality, purpose of travel and visa category. Make sure
                  you understand the applicable requirements before beginning
                  your application.
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
                      Keep a valid passport and ensure your travel document
                      meets the applicable requirements.
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
                      Select the visa category that matches your purpose of
                      travel and individual circumstances.
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
                      Prepare the documents required for your specific Oman
                      visa application.
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
                      Plan your accommodation, flights and other travel
                      arrangements according to your approved visa.
                    </p>
                  </div>

                </div>

                <p className="mt-8 max-w-[720px] text-sm leading-7 text-[#667085]">
                  Visa rules, eligibility requirements and processing
                  conditions may change. Always confirm the latest applicable
                  requirements before submitting an application.
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
              TO OMAN?
            </h2>

            <p className="mt-6 max-w-[600px] leading-7 text-[#0b1f3a]/70">
              Speak directly with Abdur Rhaman about your Oman visa and
              travel requirements. Get assistance with your journey from
              start to finish.
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