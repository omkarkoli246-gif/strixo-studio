"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Video Editing",
    description:
      "Premium cinematic reels and edits for brands and creators.",
  },

  {
    title: "Social Media Management",
    description:
      "Complete Instagram growth and content handling.",
  },

  {
    title: "Branding",
    description:
      "Build a powerful and modern digital brand identity.",
  },

  {
    title: "Content Strategy",
    description:
      "High-performing content plans for maximum reach.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-spacing px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">

          <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">
            SERVICES
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-4 text-black">
            What We Offer
          </h2>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
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
              className="glass p-10 rounded-[30px] shadow-2xl border border-white/20"
            >

              <h3 className="text-3xl font-black text-black">
                {service.title}
              </h3>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                {service.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}