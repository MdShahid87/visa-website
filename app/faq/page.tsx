import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import FAQ from "@/components/FAQ";

export default function FAQPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-[#0b1f3a] py-28 text-white">
          <div className="container">
            <div className="eyebrow !text-[#d4a72c]">
              Frequently Asked Questions
            </div>

            <h1 className="display-text mt-7 text-[clamp(60px,9vw,125px)]">
              GOOD TO
              <br />
              KNOW.
            </h1>
          </div>
        </section>

        <FAQ />
      </main>

      <Footer />
      <MobileBottomBar />
    </>
  );
}