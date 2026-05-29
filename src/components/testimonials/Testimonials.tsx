"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Business Owner",
    review:
      "STRIXO STUDIO completely transformed our brand presence online. The reels and edits were premium level.",
  },

  {
    name: "Sneha Patil",
    role: "Content Creator",
    review:
      "Amazing editing quality and professional communication. Highly recommended for social media growth.",
  },

  {
    name: "Aman Verma",
    role: "Startup Founder",
    review:
      "Our engagement and views increased massively after working with STRIXO STUDIO.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-spacing px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">
            TESTIMONIALS
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-4 text-black">
            What Our Clients Say
          </h2>

        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {testimonials.map((item, index) => (

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
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="glass rounded-[35px] p-10 shadow-2xl hover:scale-105 transition duration-300"
            >

              <div className="flex gap-1 text-yellow-500 text-2xl">
                ★★★★★
              </div>

              <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                {item.review}
              </p>

              <div className="mt-8">

                <h3 className="text-2xl font-black text-black">
                  {item.name}
                </h3>

                <p className="text-gray-500 mt-1">
                  {item.role}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}