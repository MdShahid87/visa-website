import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white py-24">
        <div className="container max-w-[850px]">
          <div className="eyebrow">Legal</div>

          <h1 className="section-title mt-6 text-[#0b1f3a]">
            DISCLAIMER
          </h1>

          <div className="mt-12 space-y-8 leading-8 text-[#667085]">
            <p>
              JOB FINDER is a visa and travel assistance service. Information
              on this website is provided for general guidance.
            </p>

            <p>
              Visa approval, eligibility, processing times and immigration
              decisions are determined by the relevant authorities and may
              vary by applicant and destination.
            </p>

            <p>
              No information on this website should be interpreted as a
              promise or guarantee of visa approval.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}