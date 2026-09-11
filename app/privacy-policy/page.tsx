import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white py-24">
        <div className="container max-w-[850px]">
          <div className="eyebrow">Legal</div>

          <h1 className="section-title mt-6 text-[#0b1f3a]">
            PRIVACY POLICY
          </h1>

          <div className="mt-12 space-y-8 leading-8 text-[#667085]">
            <p>
              JOB FINDER respects your privacy. Information submitted through
              our website may be used to respond to your enquiry and provide
              requested visa or travel assistance.
            </p>

            <p>
              We do not guarantee that information submitted online will
              result in visa approval. Requirements and immigration rules
              may change.
            </p>

            <p>
              If you have questions about how your information is handled,
              please contact us directly.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}