"use client";
import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";
export default function VisaFinder() {
  const [destination, setDestination] = useState("");
  const [visaType, setVisaType] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const message = `Hello Abdur Rhaman, I need visa assistance. Destination: ${
    destination || "Not selected"
  }. Visa type: ${visaType || "Not selected"}.`;

  return (
    <section className="section bg-[#0b1f3a] text-white">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <div className="eyebrow mb-6 !text-[#d4a72c]">
              Visa Finder
            </div>

            <h2 className="section-title">
              FIND THE RIGHT
              <br />
              NEXT STEP.
            </h2>

            <p className="mt-7 max-w-[440px] leading-7 text-white/60">
              Tell us where you are planning to travel and what you need.
              We&apos;ll help you understand the next steps.
            </p>
          </div>

          <div className="rounded-[28px] bg-white p-7 text-[#101418] sm:p-10">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider">
                      Destination
                    </label>

                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="form-input"
                      required
                    >
                      <option value="">Select country</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="United Arab Emirates">UAE</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Oman">Oman</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Bahrain">Bahrain</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider">
                      Visa Type
                    </label>

                    <select
                      value={visaType}
                      onChange={(e) => setVisaType(e.target.value)}
                      className="form-input"
                      required
                    >
                      <option value="">Select visa type</option>
                      <option value="Tourist Visa">Tourist Visa</option>
                      <option value="Work Permit">Work Permit</option>
                      <option value="Umrah Visa">Umrah Visa</option>
                      <option value="Visit Visa">Visit Visa</option>
                      <option value="Business Visa">Business Visa</option>
                    </select>
                  </div>
                </div>

                <div className="mt-7">
                  <button type="submit" className="btn btn-primary w-full">
                    Check Requirements
                    <ArrowUpRight size={17} />
                  </button>
                </div>

                <p className="mt-5 text-xs leading-5 text-[#667085]">
                  Requirements can vary by nationality, destination and
                  current immigration rules.
                </p>
              </form>
            ) : (
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f8ee] text-[#1b9b51]">
                  <Check size={22} />
                </div>

                <h3 className="mt-6 font-['Manrope'] text-3xl font-extrabold tracking-[-0.04em]">
                  Let&apos;s discuss your requirement.
                </h3>

                <p className="mt-4 leading-7 text-[#667085]">
                  You selected{" "}
                  <strong>{visaType}</strong> for{" "}
                  <strong>{destination}</strong>.
                </p>

                <a
                  href={createWhatsAppLink(message)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-blue mt-7 w-full"
                >
                  Continue on WhatsApp
                  <ArrowUpRight size={17} />
                </a>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 w-full text-sm font-bold text-[#667085]"
                >
                  Start again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}