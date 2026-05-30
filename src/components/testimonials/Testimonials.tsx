"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Business Owner",
    review:
      "STRIXO STUDIO completely transformed our brand presence online. The reels and edits looked premium.",
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
    <section className="section-spacing overflow-hidden px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b8752e]">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight text-black sm:text-6xl">
            What clients say about STRIXO
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="border border-black/10 bg-white/75 p-7 shadow-sm backdrop-blur"
            >
              <div className="flex gap-1 text-[#d9a55b]">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <p className="mt-6 text-base leading-7 text-gray-700">
                {item.review}
              </p>

              <div className="mt-7">
                <h3 className="text-2xl font-black text-black">{item.name}</h3>
                <p className="mt-1 text-gray-500">{item.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
