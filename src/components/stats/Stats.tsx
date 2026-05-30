"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "10+",
    title: "Projects Completed",
  },
  {
    number: "10+",
    title: "Happy Clients",
  },
  {
    number: "1M+",
    title: "Social Media Views",
  },
  {
    number: "5 Star",
    title: "Client Rating",
  },
];

export default function Stats() {
  return (
    <section className="section-spacing px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="border border-black/10 bg-white/75 p-7 text-center shadow-sm backdrop-blur"
            >
              <h2 className="text-4xl font-black text-[#b8752e] sm:text-5xl">
                {item.number}
              </h2>

              <p className="mt-4 text-base font-bold text-gray-700">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
