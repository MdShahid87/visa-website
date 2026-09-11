import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function UAEPage() {
  const whatsappMessage =
    "Hello Abdur Rhaman, I need visa assistance for UAE.";

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
              UNITED
              <br />
              ARAB EMIRATES.
            </h1>

            <p className="mt-8 max-w-[680px] text-lg leading-8 text-white/60">
              Discover the United Arab Emirates — from the iconic skyline of
              Dubai to the cultural heritage of Abu Dhabi, world-famous
              landmarks, luxury destinations and unforgettable experiences.
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
                United Arab Emirates
              </div>

              <div>
                <h2 className="font-['Manrope'] text-4xl font-extrabold tracking-[-.05em] text-[#0b1f3a] sm:text-6xl">
                  DISCOVER
                  <br />
                  THE UAE.
                </h2>

                <p className="mt-7 max-w-[700px] leading-8 text-[#667085]">
                  The United Arab Emirates is one of the most popular
                  destinations in the Gulf, known for its modern cities,
                  impressive architecture, shopping, beaches, desert
                  experiences and rich cultural heritage.
                </p>

                <p className="mt-5 max-w-[700px] leading-8 text-[#667085]">
                  Dubai and Abu Dhabi are major international destinations,
                  while the other emirates offer their own landscapes,
                  cultural attractions and travel experiences.
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
                    Discuss UAE Visa
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
                From world-famous skyscrapers and luxurious islands to
                magnificent mosques, the UAE offers countless places to
                discover.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">

              {/* =====================================================
                  BURJ KHALIFA
              ===================================================== */}
              <div className="overflow-hidden rounded-[24px] bg-white shadow-sm">
                <div className="h-[300px] overflow-hidden bg-[#dfe5ea]">
                  <img
                    src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=85"
                    alt="Burj Khalifa Dubai UAE"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="text-sm font-bold text-[#1769e1]">
                    01
                  </div>

                  <h3 className="mt-4 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                    Burj Khalifa
                  </h3>

                  <p className="mt-3 leading-7 text-[#667085]">
                    Dubai&apos;s iconic landmark and one of the world&apos;s
                    most recognizable skyscrapers, offering spectacular views
                    across the city.
                  </p>
                </div>
              </div>

              {/* =====================================================
                  SHEIKH ZAYED GRAND MOSQUE
              ===================================================== */}
              <div className="overflow-hidden rounded-[24px] bg-white shadow-sm">
                <div className="h-[300px] overflow-hidden bg-[#dfe5ea]">
                  <img
                    src="https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=1200&q=85"
                    alt="Sheikh Zayed Grand Mosque Abu Dhabi UAE"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="text-sm font-bold text-[#1769e1]">
                    02
                  </div>

                  <h3 className="mt-4 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                    Sheikh Zayed Grand Mosque
                  </h3>

                  <p className="mt-3 leading-7 text-[#667085]">
                    One of Abu Dhabi&apos;s most important landmarks, known
                    for its impressive white architecture, domes and detailed
                    Islamic design.
                  </p>
                </div>
              </div>

              {/* =====================================================
                  PALM JUMEIRAH
              ===================================================== */}
              <div className="overflow-hidden rounded-[24px] bg-white shadow-sm">
                <div className="h-[300px] overflow-hidden bg-[#dfe5ea]">
                  <img
                    src="https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1200&q=85"
                    alt="Palm Jumeirah Dubai UAE"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="text-sm font-bold text-[#1769e1]">
                    03
                  </div>

                  <h3 className="mt-4 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                    Palm Jumeirah
                  </h3>

                  <p className="mt-3 leading-7 text-[#667085]">
                    Dubai&apos;s famous man-made island known for luxury
                    resorts, waterfront views, beaches and distinctive
                    architecture.
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
                  UAE Experience
                </div>

                <h2 className="font-['Manrope'] text-4xl font-extrabold tracking-[-.05em] text-[#0b1f3a] sm:text-6xl">
                  HERITAGE,
                  <br />
                  CULTURE &
                  <br />
                  <span className="text-[#1769e1]">
                    MODERN LIFE.
                  </span>
                </h2>

                <p className="mt-7 max-w-[680px] leading-8 text-[#667085]">
                  The UAE combines traditional Emirati culture with modern
                  infrastructure and some of the world&apos;s most ambitious
                  architectural developments. Visitors can experience
                  traditional souqs, mosques, museums and heritage sites
                  alongside modern attractions.
                </p>

                <p className="mt-5 max-w-[680px] leading-8 text-[#667085]">
                  Dubai and Abu Dhabi have become major international
                  destinations for tourism, business, shopping, entertainment
                  and global events.
                </p>
              </div>

              <div className="rounded-[30px] bg-[#0b1f3a] p-8 text-white sm:p-10">
                <div className="text-sm font-bold uppercase tracking-[0.16em] text-[#d4a72c]">
                  UAE Highlights
                </div>

                <div className="mt-8 space-y-6">

                  {/* HIGHLIGHT 01 */}
                  <div className="border-b border-white/10 pb-5">
                    <div className="text-2xl font-extrabold">
                      Dubai
                    </div>

                    <p className="mt-2 text-sm leading-6 text-white/55">
                      A global destination known for its skyline, shopping,
                      entertainment and luxury experiences.
                    </p>
                  </div>

                  {/* HIGHLIGHT 02 */}
                  <div className="border-b border-white/10 pb-5">
                    <div className="text-2xl font-extrabold">
                      Abu Dhabi
                    </div>

                    <p className="mt-2 text-sm leading-6 text-white/55">
                      The UAE capital, known for cultural landmarks, museums,
                      beaches and impressive architecture.
                    </p>
                  </div>

                  {/* HIGHLIGHT 03 */}
                  <div>
                    <div className="text-2xl font-extrabold">
                      Desert
                    </div>

                    <p className="mt-2 text-sm leading-6 text-white/55">
                      Experience the UAE&apos;s desert landscapes through
                      traditional and modern desert activities.
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
                UAE Visa Assistance
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
                  tourism in the United Arab Emirates.
                </p>

                <a
                  href={`https://wa.me/917897638334?text=${encodeURIComponent(
                    "Hello Abdur Rhaman, I need help with a UAE Tourist Visa."
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
                  02
                </div>

                <h3 className="mt-5 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                  Work Visa
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  Guidance for work-related visa and employment requirements
                  in the United Arab Emirates.
                </p>

                <a
                  href={`https://wa.me/917897638334?text=${encodeURIComponent(
                    "Hello Abdur Rhaman, I need help with a UAE Work Visa."
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
                  Assistance with UAE visa stamping and related documentation
                  processes.
                </p>

                <a
                  href={`https://wa.me/917897638334?text=${encodeURIComponent(
                    "Hello Abdur Rhaman, I need assistance with UAE Visa Stamping."
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
                  UAE VISA
                  <br />
                  INFORMATION.
                </h2>

                <p className="mt-7 max-w-[700px] leading-8 text-[#667085]">
                  UAE visa requirements can depend on your nationality,
                  purpose of travel, visa category and applicable immigration
                  rules. Make sure you understand the current requirements
                  before beginning your application.
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
                      Select the appropriate UAE visa category based on your
                      purpose of travel and circumstances.
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
                      Prepare the documents applicable to your specific UAE
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
                      Plan your flights, accommodation and other travel
                      arrangements according to your visa conditions.
                    </p>
                  </div>

                </div>

                <p className="mt-8 max-w-[720px] text-sm leading-7 text-[#667085]">
                  UAE visa rules, eligibility requirements, fees and
                  processing conditions can change. Always confirm the latest
                  applicable requirements before submitting an application.
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
              TO THE UAE?
            </h2>

            <p className="mt-6 max-w-[600px] leading-7 text-[#0b1f3a]/70">
              Speak directly with Abdur Rhaman about your UAE visa and
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