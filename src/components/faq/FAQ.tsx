"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does reel delivery take?",
    answer:
      "Most reel projects are delivered within 2-3 days, depending on the shoot material and editing complexity.",
  },
  {
    question: "Do you provide revisions?",
    answer:
      "Yes. Revisions are included so the final content matches your brand and campaign goal.",
  },
  {
    question: "Do you handle social media accounts?",
    answer:
      "Yes. STRIXO STUDIO offers monthly social media handling for posting, creatives and account consistency.",
  },
  {
    question: "Which payment methods do you accept?",
    answer:
      "We accept UPI and bank transfer. The package buttons open a direct UPI payment link on mobile.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="section-spacing px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b8752e]">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight text-black sm:text-6xl">
            Common questions before you book
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = active === index;

            return (
              <button
                key={item.question}
                type="button"
                className="w-full border border-black/10 bg-white/75 p-6 text-left shadow-sm backdrop-blur"
                onClick={() => setActive(isOpen ? null : index)}
              >
                <span className="flex items-center justify-between gap-6">
                  <span className="text-lg font-black text-black">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <Minus className="h-5 w-5 text-[#b8752e]" />
                  ) : (
                    <Plus className="h-5 w-5 text-[#b8752e]" />
                  )}
                </span>

                {isOpen ? (
                  <span className="mt-5 block text-base leading-7 text-gray-600">
                    {item.answer}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
