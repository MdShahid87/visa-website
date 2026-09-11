"use client";

import { useState } from "react";
import { Check, ArrowUpRight } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-[28px] bg-white p-8 sm:p-12">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f8ee] text-[#1b9b51]">
          <Check size={25} />
        </div>

        <h2 className="mt-7 font-['Manrope'] text-4xl font-extrabold tracking-[-0.05em] text-[#0b1f3a]">
          Thank you.
        </h2>

        <p className="mt-4 leading-7 text-[#667085]">
          Your enquiry has been received. For a faster response, you can
          continue the conversation on WhatsApp.
        </p>

        <a
          href={createWhatsAppLink(
            "Hello Abdur Rhaman, I have submitted a visa enquiry on your website and would like to discuss it."
          )}
          target="_blank"
          rel="noreferrer"
          className="btn btn-blue mt-7"
        >
          Continue on WhatsApp
          <ArrowUpRight size={17} />
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[28px] bg-white p-7 sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider">
            Your Name
          </label>
          <input
            required
            className="form-input"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider">
            Phone
          </label>
          <input
            required
            type="tel"
            className="form-input"
            placeholder="+91"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider">
            Destination
          </label>

          <select required className="form-input">
            <option value="">Select destination</option>
            <option>Saudi Arabia</option>
            <option>United Arab Emirates</option>
            <option>Qatar</option>
            <option>Oman</option>
            <option>Kuwait</option>
            <option>Bahrain</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider">
            Visa Type
          </label>

          <select required className="form-input">
            <option value="">Select visa type</option>
            <option>Tourist Visa</option>
            <option>Work Permit</option>
            <option>Umrah Visa</option>
            <option>Visit Visa</option>
            <option>Business Visa</option>
            <option>Other</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider">
            Travel Date
          </label>

          <input type="date" className="form-input" />
        </div>

        <div className="sm:col-span-2">
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider">
            Message
          </label>

          <textarea
            className="form-input"
            placeholder="Tell us about your requirement..."
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary mt-7 w-full">
        Send Enquiry
        <ArrowUpRight size={17} />
      </button>

      <p className="mt-4 text-center text-xs leading-5 text-[#667085]">
        By submitting this form, you agree to be contacted regarding your
        enquiry.
      </p>
    </form>
  );
}