import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { ArrowUpRight, MapPin, Waves, Building2 } from "lucide-react";

export default function KuwaitPage() {
  const whatsappMessage =
    "Hello Abdur Rhaman, I need visa assistance for Kuwait.";

  const whatsappLink = `https://wa.me/917897638334?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <Navbar />

      <main>

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#0b1f3a] py-24 text-white lg:py-32">
          <div className="container relative z-10">
            <div className="grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">

              {/* LEFT CONTENT */}
              <div>
                <div className="eyebrow !text-[#d4a72c]">
                  Destination
                </div>

                <h1 className="display-text mt-7 text-[clamp(58px,8vw,115px)] text-white">
                  KUWAIT.
                </h1>

                <p className="mt-8 max-w-[620px] text-lg leading-8 text-white/65">
                  Visa and travel assistance for customers planning to travel
                  to Kuwait for tourism, work and other purposes.
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

              {/* HERO IMAGE */}
              <div className="relative overflow-hidden rounded-[32px]">
                <img
                  src="https://theglampackinglawyer.com/wp-content/uploads/2024/03/IMG_3974-768x1024.jpg"
                  alt="Kuwait Towers in Kuwait City"
                  className="h-[420px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-7 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                  KUWAIT CITY · ARABIAN GULF
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =====================================================
            INTRODUCTION
        ===================================================== */}
        <section className="section bg-white">
          <div className="container">

            <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">

              <div className="eyebrow">
                Kuwait
              </div>

              <div>
                <h2 className="font-['Manrope'] text-4xl font-extrabold tracking-[-.05em] text-[#0b1f3a] sm:text-6xl">
                  DISCOVER
                  <br />
                  KUWAIT.
                </h2>

                <p className="mt-7 max-w-[700px] leading-8 text-[#667085]">
                  Kuwait is a modern Gulf country known for its impressive
                  skyline, Arabian culture, traditional markets and rich
                  maritime heritage. Kuwait City combines modern architecture
                  with historic neighbourhoods, mosques and traditional souqs.
                </p>

                <p className="mt-5 max-w-[700px] leading-8 text-[#667085]">
                  Whether you are travelling to Kuwait for tourism, employment,
                  business or another purpose, understanding the right visa
                  category and documentation is an important part of preparing
                  for your journey.
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
                    Discuss Kuwait Visa
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            FAMOUS PLACES
        ===================================================== */}
        <section className="section bg-[#f6f7f5]">
          <div className="container">

            <div className="mb-14">
              <div className="eyebrow mb-5">
                Explore Kuwait
              </div>

              <h2 className="section-title max-w-[850px] text-[#0b1f3a]">
                FAMOUS PLACES
                <br />
                TO EXPLORE.
              </h2>

              <p className="mt-6 max-w-[650px] leading-8 text-[#667085]">
                Discover some of Kuwait&apos;s most recognisable landmarks,
                cultural destinations and places of interest.
              </p>
            </div>


            {/* =================================================
                PLACES GRID
            ================================================= */}
            <div className="grid gap-6 md:grid-cols-3">


              {/* =================================================
                  01 — KUWAIT TOWERS
              ================================================= */}
              <article className="group overflow-hidden rounded-[24px] bg-white shadow-sm">

                <div className="relative h-[280px] overflow-hidden">

                  <img
                    src="https://theglampackinglawyer.com/wp-content/uploads/2024/03/IMG_3974-768x1024.jpg"
                    alt="Kuwait Towers"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/50 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-[#0b1f3a]/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[.16em] text-white">
                    Landmark
                  </div>

                </div>


                <div className="p-7">

                  <div className="text-sm font-bold text-[#1769e1]">
                    01
                  </div>

                  <h3 className="mt-3 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                    Kuwait Towers
                  </h3>

                  <p className="mt-3 leading-7 text-[#667085]">
                    One of Kuwait&apos;s most iconic landmarks and a defining
                    part of the country&apos;s modern skyline.
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex font-bold text-[#1769e1]"
                  >
                    Ask About Kuwait →
                  </a>

                </div>

              </article>


              {/* =================================================
                  02 — GRAND MOSQUE
              ================================================= */}
              <article className="group overflow-hidden rounded-[24px] bg-white shadow-sm">

                <div className="relative h-[280px] overflow-hidden">

                  <img
                    src="https://www.aljazeera.net/wp-content/uploads/2022/10/image-261.jpg?resize=1800%2C1080"
                    alt="Grand Mosque of Kuwait"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/45 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-[#0b1f3a]/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[.16em] text-white">
                    Architecture
                  </div>

                </div>


                <div className="p-7">

                  <div className="text-sm font-bold text-[#1769e1]">
                    02
                  </div>

                  <h3 className="mt-3 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                    Grand Mosque
                  </h3>

                  <p className="mt-3 leading-7 text-[#667085]">
                    A major Islamic landmark in Kuwait known for its impressive
                    architecture, large prayer hall and distinctive dome.
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex font-bold text-[#1769e1]"
                  >
                    Ask About Kuwait →
                  </a>

                </div>

              </article>


              {/* =================================================
                  03 — SOUQ AL-MUBARAKIYA
              ================================================= */}
              <article className="group overflow-hidden rounded-[24px] bg-white shadow-sm">

                <div className="relative h-[280px] overflow-hidden">

                  <img
                    src="https://travel2unlimited.com/wp-content/uploads/2022/10/313399952_10160559013348701_7937721945065180123_n_10160558999993701-773x1030.jpg"
                    alt="Souq Al-Mubarakiya Kuwait"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/45 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-[#0b1f3a]/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[.16em] text-white">
                    Culture
                  </div>

                </div>


                <div className="p-7">

                  <div className="text-sm font-bold text-[#1769e1]">
                    03
                  </div>

                  <h3 className="mt-3 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                    Souq Al-Mubarakiya
                  </h3>

                  <p className="mt-3 leading-7 text-[#667085]">
                    A traditional market in Kuwait City known for local food,
                    spices, perfumes, textiles and authentic Kuwaiti culture.
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex font-bold text-[#1769e1]"
                  >
                    Ask About Kuwait →
                  </a>

                </div>

              </article>

            </div>

          </div>
        </section>


        {/* =====================================================
            VISA SERVICES
        ===================================================== */}
        <section className="section bg-white">
          <div className="container">

            <div className="mb-14">

              <div className="eyebrow mb-5">
                Kuwait Assistance
              </div>

              <h2 className="section-title max-w-[800px] text-[#0b1f3a]">
                WHAT DO YOU NEED
                <br />
                HELP WITH?
              </h2>

              <p className="mt-6 max-w-[650px] leading-8 text-[#667085]">
                Tell us about your travel purpose and we can help you
                understand the relevant visa support and documentation
                requirements.
              </p>

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
                  Assistance for customers planning tourism, visits and travel
                  to Kuwait.
                </p>

                <a
                  href={`https://wa.me/917897638334?text=${encodeURIComponent(
                    "Hello Abdur Rhaman, I need help with a Kuwait Tourist Visa."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex font-bold text-[#1769e1]"
                >
                  Ask on WhatsApp →
                </a>

              </div>


              {/* WORK PERMIT */}
              <div className="rounded-[24px] bg-[#f6f7f5] p-7">

                <div className="text-sm font-bold text-[#1769e1]">
                  02
                </div>

                <h3 className="mt-5 font-['Manrope'] text-2xl font-extrabold text-[#0b1f3a]">
                  Work Permit
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  Guidance and assistance related to Kuwait work permit
                  requirements and employment documentation.
                </p>

                <a
                  href={`https://wa.me/917897638334?text=${encodeURIComponent(
                    "Hello Abdur Rhaman, I need help with a Kuwait Work Permit."
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
                  Assistance with Kuwait visa stamping and related
                  documentation processes.
                </p>

                <a
                  href={`https://wa.me/917897638334?text=${encodeURIComponent(
                    "Hello Abdur Rhaman, I need assistance with Kuwait Visa Stamping."
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
            KUWAIT CULTURE
        ===================================================== */}
        <section className="section bg-[#f6f7f5]">
          <div className="container">

            <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">

              <div className="eyebrow">
                About Kuwait
              </div>

              <div>

                <h2 className="font-['Manrope'] text-4xl font-extrabold tracking-[-.05em] text-[#0b1f3a] sm:text-6xl">
                  MODERN CITY,
                  <br />
                  RICH CULTURE.
                </h2>

                <p className="mt-7 max-w-[720px] leading-8 text-[#667085]">
                  Kuwait offers a distinctive combination of modern
                  development and traditional Gulf culture. Kuwait City
                  features contemporary buildings and shopping destinations,
                  while traditional markets and cultural sites preserve the
                  country&apos;s heritage.
                </p>

                <p className="mt-5 max-w-[720px] leading-8 text-[#667085]">
                  Visitors can experience Arabian hospitality, local cuisine,
                  historic markets and the distinctive coastal character of
                  Kuwait.
                </p>


                <div className="mt-8 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-[20px] bg-white p-6">
                    <MapPin
                      className="text-[#d4a72c]"
                      size={28}
                    />

                    <div className="mt-4 text-xl font-extrabold text-[#0b1f3a]">
                      Kuwait City
                    </div>

                    <div className="mt-2 text-sm text-[#667085]">
                      Capital Area
                    </div>
                  </div>


                  <div className="rounded-[20px] bg-white p-6">
                    <Waves
                      className="text-[#1769e1]"
                      size={28}
                    />

                    <div className="mt-4 text-xl font-extrabold text-[#0b1f3a]">
                      Arabian Gulf
                    </div>

                    <div className="mt-2 text-sm text-[#667085]">
                      Coastal Destination
                    </div>
                  </div>


                  <div className="rounded-[20px] bg-white p-6">
                    <Building2
                      className="text-[#d4a72c]"
                      size={28}
                    />

                    <div className="mt-4 text-xl font-extrabold text-[#0b1f3a]">
                      Heritage
                    </div>

                    <div className="mt-2 text-sm text-[#667085]">
                      Arabian Culture
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            IMPORTANT VISA INFORMATION
        ===================================================== */}
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
                  MAY VARY.
                </h2>

                <p className="mt-6 max-w-[720px] leading-8 text-[#667085]">
                  Kuwait visa requirements, documentation and procedures can
                  vary depending on the applicant&apos;s nationality, purpose
                  of travel, visa category and current immigration regulations.
                </p>

                <p className="mt-5 max-w-[720px] leading-8 text-[#667085]">
                  Requirements and immigration rules can change, so applicants
                  should confirm the latest applicable requirements before
                  submitting a visa application.
                </p>

                <div className="mt-8">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Check Kuwait Requirements
                    <ArrowUpRight size={17} />
                  </a>
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

            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>

                <h2 className="font-['Manrope'] text-5xl font-extrabold tracking-[-.06em] text-[#0b1f3a] sm:text-7xl">
                  PLANNING A TRIP
                  <br />
                  TO KUWAIT?
                </h2>

                <p className="mt-6 max-w-[550px] leading-7 text-[#0b1f3a]/70">
                  Speak directly with Abdur Rhaman about your Kuwait visa
                  and travel requirement.
                </p>

              </div>

              <div>

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

          </div>
        </section>

      </main>

      <Footer />
      <MobileBottomBar />
    </>
  );
}