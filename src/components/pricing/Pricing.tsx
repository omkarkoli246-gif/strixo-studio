"use client";

import { motion } from "framer-motion";
import { Check, CreditCard, MessageCircle } from "lucide-react";

const websitePlans = [
  {
    title: "Basic Website",
    price: "₹18,000",
    description: "Clean online presence for small businesses.",
    features: [
      "2-3 pages",
      "Mobile responsive design",
      "WhatsApp enquiry button",
      "Contact form",
      "Basic launch SEO",
    ],
  },
  {
    title: "Advance Website",
    price: "₹25,000",
    description: "Modern site for brands that need stronger trust.",
    featured: true,
    features: [
      "4-6 pages",
      "Premium responsive UI",
      "Google Map integration",
      "Lead focused sections",
      "Basic SEO setup",
    ],
  },
  {
    title: "Premium Website",
    price: "₹33,000",
    description: "A richer website with product or service showcase.",
    features: [
      "6-10 pages",
      "Premium UI/UX",
      "Fast loading setup",
      "Advanced SEO structure",
      "Product or portfolio showcase",
    ],
  },
];

function upiLink(note: string) {
  return `upi://pay?pa=9370309722@fam&pn=STRIXO%20STUDIO&cu=INR&tn=${encodeURIComponent(note)}`;
}

function whatsappLink(plan: string) {
  return `https://wa.me/919370309722?text=${encodeURIComponent(
    `Hi STRIXO STUDIO, I want details for ${plan}.`
  )}`;
}

export default function Pricing() {
  return (
    <section id="pricing" className="section-spacing px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.26em] text-[#b8752e]">
            Website Plans
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight text-black sm:text-6xl">
            Premium websites built for enquiries and brand trust
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Pick a website package, pay an advance through UPI, and start your
            project with STRIXO STUDIO.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {websitePlans.map((plan, index) => (
            <motion.article
              key={plan.title}
              initial={{ opacity: 0, y: 42 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className={`border p-7 shadow-sm backdrop-blur ${
                plan.featured
                  ? "border-black bg-black text-white"
                  : "border-black/10 bg-white/75 text-black"
              }`}
            >
              {plan.featured ? (
                <p className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-[#f8dca8]">
                  Most Popular
                </p>
              ) : null}

              <h3 className="text-3xl font-black">{plan.title}</h3>

              <p
                className={`mt-4 leading-7 ${
                  plan.featured ? "text-white/70" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>

              <div
                className={`mt-8 border-y py-6 ${
                  plan.featured ? "border-white/15" : "border-black/10"
                }`}
              >
                <p className="text-5xl font-black">{plan.price}</p>
              </div>

              <ul className="mt-7 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`mt-0.5 h-5 w-5 flex-none ${
                        plan.featured ? "text-[#f8dca8]" : "text-[#b8752e]"
                      }`}
                    />
                    <span
                      className={plan.featured ? "text-white/80" : "text-gray-700"}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 grid gap-3">
                <a
                  href={whatsappLink(plan.title)}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center justify-center gap-3 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] transition ${
                    plan.featured
                      ? "bg-[#f8dca8] text-black hover:bg-white"
                      : "bg-black text-white hover:bg-[#d9a55b] hover:text-black"
                  }`}
                >
                  <MessageCircle className="h-5 w-5" />
                  Book On WhatsApp
                </a>

                <a
                  href={upiLink(`${plan.title} advance payment`)}
                  className={`inline-flex items-center justify-center gap-3 border px-6 py-4 text-sm font-black uppercase tracking-[0.12em] transition ${
                    plan.featured
                      ? "border-white/20 text-white hover:bg-white hover:text-black"
                      : "border-black/15 text-black hover:bg-black hover:text-white"
                  }`}
                >
                  <CreditCard className="h-5 w-5" />
                  Pay Advance
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
