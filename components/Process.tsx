const steps = [
  {
    number: "01",
    title: "Tell Us Your Requirement",
    text: "Share your destination, visa type and travel requirement.",
  },
  {
    number: "02",
    title: "Get Document Guidance",
    text: "Understand the information and documents generally needed.",
  },
  {
    number: "03",
    title: "Submit Required Information",
    text: "Provide the required information for your application assistance.",
  },
  {
    number: "04",
    title: "Application Assistance",
    text: "Get guidance through the relevant application process.",
  },
  {
    number: "05",
    title: "Receive Updates",
    text: "Stay connected with your specialist for process updates.",
  },
];

export default function Process() {
  return (
    <section className="section bg-[#f6f7f5]">
      <div className="container">
        <div className="mb-16 grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
          <div className="eyebrow">Our process</div>

          <div>
            <h2 className="section-title max-w-[850px] text-[#0b1f3a]">
              SIMPLE PROCESS.
              <br />
              CLEAR NEXT STEPS.
            </h2>
          </div>
        </div>

        <div className="border-t border-[#dce1e7]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid gap-5 border-b border-[#dce1e7] py-8 lg:grid-cols-[120px_1fr_1fr] lg:items-center"
            >
              <div className="font-['Manrope'] text-4xl font-extrabold text-[#1769e1]">
                {step.number}
              </div>

              <h3 className="font-['Manrope'] text-2xl font-extrabold tracking-[-0.03em] text-[#0b1f3a] sm:text-3xl">
                {step.title}
              </h3>

              <p className="max-w-[440px] leading-7 text-[#667085]">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}