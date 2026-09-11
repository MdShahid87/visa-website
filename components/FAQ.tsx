"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="section bg-[#f6f7f5]">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <div className="eyebrow mb-6">Questions</div>

            <h2 className="section-title text-[#0b1f3a]">
              GOOD TO
              <br />
              KNOW.
            </h2>
          </div>

          <div className="border-t border-[#dce1e7]">
            {faqs.map((faq, index) => {
              const isOpen = active === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[#dce1e7]"
                >
                  <button
                    type="button"
                    onClick={() => setActive(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-['Manrope'] text-lg font-bold text-[#0b1f3a] sm:text-xl">
                      {faq.question}
                    </span>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#dce1e7]">
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-7 pr-12 text-sm leading-7 text-[#667085]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}