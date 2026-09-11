import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function QatarPage() {
  const whatsappMessage =
    "Hello Abdur Rhaman, I need visa assistance for Qatar.";

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
              QATAR.
            </h1>

            <p className="mt-8 max-w-[680px] text-lg leading-8 text-white/60">
              Discover Qatar — from the modern skyline of Doha to traditional
              souqs, world-class museums and cultural destinations. Plan your
              Qatar journey with professional visa assistance.
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
                Qatar
              </div>

              <div>
                <h2 className="font-['Manrope'] text-4xl font-extrabold tracking-[-.05em] text-[#0b1f3a] sm:text-6xl">
                  DISCOVER
                  <br />
                  QATAR.
                </h2>

                <p className="mt-7 max-w-[700px] leading-8 text-[#667085]">
                  Qatar is a modern Gulf destination known for its impressive
                  architecture, international events, museums, traditional
                  markets and rich cultural heritage. Doha, the capital city,
                  combines a modern skyline with historic neighbourhoods and
                  waterfront attractions.
                </p>

                <p className="mt-5 max-w-[700px] leading-8 text-[#667085]">
                  From the Museum of Islamic Art and Souq Waqif to Katara
                  Cultural Village and the Doha Corniche, Qatar offers a
                  unique combination of modern city life and traditional
                  Qatari culture.
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
                    Discuss Qatar Visa
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
                Explore Qatar&apos;s famous cultural landmarks, traditional
                markets and architectural attractions.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">

              {/* =====================================================
                  MUSEUM OF ISLAMIC ART
              ===================================================== */}
              <div className="overflow-hidden rounded-[24px] bg-white shadow-sm">
                <div className="h-[300px] overflow-hidden bg-[#dfe5ea]">
                  <img
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/Museum_of_Islamic_Art%2C_Doha_%2854704206856%29.jpg?width=1200"
                    alt="Museum of Islamic Art Doha Qatar"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="text-sm font-bold text-[#1769e1]">
                    01
                  </div>

                  <h3 className="mt-4 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                    Museum of Islamic Art
                  </h3>

                  <p className="mt-3 leading-7 text-[#667085]">
                    One of Doha&apos;s most recognizable cultural landmarks,
                    located along the city&apos;s Corniche and known for its
                    distinctive architecture and Islamic art collection.
                  </p>
                </div>
              </div>

              {/* =====================================================
                  SOUQ WAQIF
              ===================================================== */}
              <div className="overflow-hidden rounded-[24px] bg-white shadow-sm">
                <div className="h-[300px] overflow-hidden bg-[#dfe5ea]">
                  <img
                    src="https://ak-d.tripcdn.com/images/1mi5h12000dvkot2rF0BC.jpg?proc=source%2Ftrip"
                    alt="Souq Waqif Doha Qatar"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="text-sm font-bold text-[#1769e1]">
                    02
                  </div>

                  <h3 className="mt-4 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                    Souq Waqif
                  </h3>

                  <p className="mt-3 leading-7 text-[#667085]">
                    A famous traditional market in Doha where visitors can
                    experience Qatari architecture, local shops, restaurants,
                    spices and traditional products.
                  </p>
                </div>
              </div>

              {/* =====================================================
                  KATARA CULTURAL VILLAGE
              ===================================================== */}
              <div className="overflow-hidden rounded-[24px] bg-white shadow-sm">
                <div className="h-[300px] overflow-hidden bg-[#dfe5ea]">
                  <img
                    src="https://www.civitatis.com/f/catar/doha/visita-guiada-katara-cultural-village-r32.jpg"
                    alt="Katara Cultural Village Qatar"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="text-sm font-bold text-[#1769e1]">
                    03
                  </div>

                  <h3 className="mt-4 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                    Katara Cultural Village
                  </h3>

                  <p className="mt-3 leading-7 text-[#667085]">
                    A cultural destination featuring traditional-inspired
                    architecture, art spaces, performances, restaurants and
                    public attractions.
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
                  Qatar Experience
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
                  Qatar has a strong cultural identity shaped by its history,
                  maritime traditions, desert environment and Islamic
                  heritage. Traditional markets and cultural sites continue
                  to play an important role in the country&apos;s identity.
                </p>

                <p className="mt-5 max-w-[680px] leading-8 text-[#667085]">
                  At the same time, Doha has developed into a modern
                  international city with an impressive skyline, museums,
                  sporting venues and major cultural institutions.
                </p>
              </div>

              <div className="rounded-[30px] bg-[#0b1f3a] p-8 text-white sm:p-10">
                <div className="text-sm font-bold uppercase tracking-[0.16em] text-[#d4a72c]">
                  Qatar Highlights
                </div>

                <div className="mt-8 space-y-6">

                  <div className="border-b border-white/10 pb-5">
                    <div className="text-2xl font-extrabold">
                      Doha
                    </div>

                    <p className="mt-2 text-sm leading-6 text-white/55">
                      Qatar&apos;s capital, known for its skyline, Corniche,
                      museums and cultural attractions.
                    </p>
                  </div>

                  <div className="border-b border-white/10 pb-5">
                    <div className="text-2xl font-extrabold">
                      Souq Waqif
                    </div>

                    <p className="mt-2 text-sm leading-6 text-white/55">
                      A traditional market offering a glimpse into Qatar&apos;s
                      heritage and everyday culture.
                    </p>
                  </div>

                  <div>
                    <div className="text-2xl font-extrabold">
                      Katara
                    </div>

                    <p className="mt-2 text-sm leading-6 text-white/55">
                      A cultural destination combining art, architecture,
                      performances and heritage.
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
                Qatar Visa Assistance
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
                  tourism in Qatar.
                </p>

                <a
                  href={`https://wa.me/917897638334?text=${encodeURIComponent(
                    "Hello Abdur Rhaman, I need help with a Qatar Tourist Visa."
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
                  Guidance for work-related visa and permit requirements
                  for Qatar.
                </p>

                <a
                  href={`https://wa.me/917897638334?text=${encodeURIComponent(
                    "Hello Abdur Rhaman, I need help with a Qatar Work Visa."
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
                  Assistance with Qatar visa stamping and related
                  documentation processes.
                </p>

                <a
                  href={`https://wa.me/917897638334?text=${encodeURIComponent(
                    "Hello Abdur Rhaman, I need assistance with Qatar Visa Stamping."
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
                  QATAR VISA
                  <br />
                  INFORMATION.
                </h2>

                <p className="mt-7 max-w-[700px] leading-8 text-[#667085]">
                  Qatar visa requirements can depend on your nationality,
                  purpose of travel and visa category. Make sure you
                  understand the applicable requirements before beginning
                  your application.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">

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

                  <div className="rounded-[20px] bg-[#f6f7f5] p-6">
                    <div className="text-sm font-bold text-[#1769e1]">
                      02
                    </div>

                    <h3 className="mt-4 font-['Manrope'] text-xl font-extrabold text-[#0b1f3a]">
                      Visa Category
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#667085]">
                      Choose the appropriate visa category based on your
                      purpose of travel and circumstances.
                    </p>
                  </div>

                  <div className="rounded-[20px] bg-[#f6f7f5] p-6">
                    <div className="text-sm font-bold text-[#1769e1]">
                      03
                    </div>

                    <h3 className="mt-4 font-['Manrope'] text-xl font-extrabold text-[#0b1f3a]">
                      Documents
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#667085]">
                      Prepare the documents applicable to your Qatar visa
                      application.
                    </p>
                  </div>

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
                  Qatar visa rules, eligibility requirements and processing
                  conditions can change. Always confirm the latest applicable
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
              TO QATAR?
            </h2>

            <p className="mt-6 max-w-[600px] leading-7 text-[#0b1f3a]/70">
              Speak directly with Abdur Rhaman about your Qatar visa and
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