"use client";

import { motion } from "framer-motion";

const plans = [
  {
    title: "Basic Plan",
    price: "₹18K",
    features: [
      "2-3 Pages Website",
      "Simple & Clean Design",
      "Mobile Friendly",
      "WhatsApp Button",
      "Contact Form",
    ],
  },

  {
    title: "Advance Plan",
    price: "₹25K",
    features: [
      "4-6 Pages Website",
      "Modern UI Design",
      "Responsive Design",
      "WhatsApp Integration",
      "Google Map",
      "Basic SEO Setup",
    ],
  },

  {
    title: "Premium Plan",
    price: "₹33K",
    features: [
      "6-10 Pages Website",
      "Premium UI/UX",
      "Fast Loading",
      "Advanced SEO",
      "Admin Panel",
      "Product Showcase",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="section-spacing px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">

          <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">
            WEBSITE PLANS
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-4 text-black">
            Flexible Pricing For Every Business
          </h2>

          <p className="mt-6 text-gray-600 text-xl max-w-3xl mx-auto">
            Choose the perfect website package for your business and start building your online presence.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">

          {plans.map((plan, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.03,
              }}
              className="glass p-10 rounded-[30px] shadow-2xl border border-white/20 relative overflow-hidden"
            >

              {/* Popular Badge */}
              <div className="absolute top-5 right-5 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-xs font-black uppercase tracking-widest">
                Most Popular
              </div>

              {/* Title */}
              <h3 className="text-3xl font-black text-black">
                {plan.title}
              </h3>

              {/* Price */}
              <div className="mt-6 text-5xl font-black gradient-text">
                {plan.price}
              </div>

              {/* Features */}
              <ul className="mt-10 space-y-4">

                {plan.features.map((feature, i) => (

                  <li
                    key={i}
                    className="text-gray-700 text-lg flex items-center gap-3"
                  >
                    ✅ {feature}
                  </li>

                ))}

              </ul>

              {/* Buttons */}
              <div className="mt-10 flex flex-col gap-4">

                <a
                  href="https://wa.me/919370309722"
                  target="_blank"
                  className="w-full text-center px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-black shadow-2xl hover:scale-105 transition duration-300"
                >
                  Book On WhatsApp
                </a>

                <a
                  href="upi://pay?pa=9370309722@fam&pn=STRIXO%20STUDIO&cu=INR"
                  className="w-full text-center px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-black shadow-2xl hover:scale-105 transition duration-300"
                >
                  Pay Advance
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}