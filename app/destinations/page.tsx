import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import Destinations from "@/components/Destinations";

export default function DestinationsPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-[#0b1f3a] py-28 text-white">
          <div className="container">
            <div className="eyebrow !text-[#d4a72c]">
              Destinations
            </div>

            <h1 className="display-text mt-7 text-[clamp(60px,9vw,125px)]">
              GO
              <br />
              FURTHER.
            </h1>

            <p className="mt-8 max-w-[600px] text-lg leading-8 text-white/60">
              Explore destinations where JOB FINDER can assist with visa and
              travel requirements.
            </p>
          </div>
        </section>

        <Destinations />
      </main>

      <Footer />
      <MobileBottomBar />
    </>
  );
}