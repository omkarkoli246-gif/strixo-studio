"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does delivery take?",
    answer:
      "Most reel projects are delivered within 2–3 days depending on complexity.",
  },

  {
    question: "Do you provide revisions?",
    answer:
      "Yes. We provide revisions to ensure the final content matches your vision perfectly.",
  },

  {
    question: "Do you handle social media accounts?",
    answer:
      "Yes. STRIXO STUDIO offers complete social media handling and growth services.",
  },

  {
    question: "Which payment methods do you accept?",
    answer:
      "We accept UPI, Bank Transfer and online payments.",
  },
];

export default function FAQ() {

  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="section-spacing px-6">

      <div className="max-w-5xl mx-auto">

        <div className="text-center">

          <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">
            FAQ
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-4 text-black">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="mt-16 space-y-6">

          {faqs.map((item, index) => (

            <div
              key={index}
              className="glass rounded-[30px] p-8 shadow-xl cursor-pointer"
              onClick={() =>
                setActive(active === index ? null : index)
              }
            >

              <div className="flex items-center justify-between">

                <h3 className="text-xl font-bold text-black">
                  {item.question}
                </h3>

                <span className="text-3xl font-bold text-indigo-600">
                  {active === index ? "-" : "+"}
                </span>

              </div>

              {active === index && (

                <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                  {item.answer}
                </p>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}