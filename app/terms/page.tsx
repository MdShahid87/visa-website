import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white py-24">
        <div className="container max-w-[850px]">
          <div className="eyebrow">Legal</div>

          <h1 className="section-title mt-6 text-[#0b1f3a]">
            TERMS &
            <br />
            CONDITIONS
          </h1>

          <div className="mt-12 space-y-8 leading-8 text-[#667085]">
            <p>
              Information provided on this website is for general
              informational purposes and should not be considered a
              guarantee of visa approval.
            </p>

            <p>
              Visa requirements, fees, processing times and immigration
              procedures may change. Applicants should confirm current
              requirements before submitting an application.
            </p>

            <p>
              JOB FINDER provides assistance and guidance but final decisions
              are made by the relevant authorities.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}