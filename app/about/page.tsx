import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-[#0b1f3a] py-28 text-white">
          <div className="container">
            <div className="eyebrow !text-[#d4a72c]">About</div>

            <h1 className="display-text mt-7 max-w-[1000px] text-[clamp(60px,9vw,125px)]">
              PEOPLE
              <br />
              FIRST.
            </h1>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
              <div className="eyebrow">Abdur Rhaman</div>

              <div>
                <h2 className="font-['Manrope'] text-4xl font-extrabold tracking-[-.05em] text-[#0b1f3a] sm:text-6xl">
                  VISA SPECIALIST.
                  <br />
                  DIRECT ASSISTANCE.
                </h2>

                <p className="mt-7 max-w-[720px] leading-8 text-[#667085]">
                  JOB FINDER is a visa and travel assistance service based
                  in Lucknow, Uttar Pradesh. Customers can contact Abdur
                  Rhaman directly for assistance with visa and travel
                  requirements.
                </p>

                <div className="mt-8">
                  <WhatsAppButton />
                </div>
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