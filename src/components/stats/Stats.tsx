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
    number: "5★",
    title: "Client Rating",
  },
];

export default function Stats() {
  return (
    <section className="section-spacing px-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
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
              className="glass rounded-[35px] p-10 text-center shadow-2xl hover:scale-105 transition duration-300"
            >

              <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                {item.number}
              </h2>

              <p className="mt-5 text-gray-700 text-lg font-semibold">
                {item.title}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}