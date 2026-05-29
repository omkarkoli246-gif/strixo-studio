"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Luxury Reel Edit",
    category: "Video Editing",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",
  },

  {
    title: "Brand Campaign",
    category: "Social Media",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },

  {
    title: "Content Production",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-spacing px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">

          <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">
            PORTFOLIO
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-4 text-black">
            Featured Projects
          </h2>

        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.03,
              }}
              className="relative overflow-hidden rounded-[40px] h-[500px] group cursor-pointer shadow-2xl"
            >

              {/* Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.5,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500" />

              {/* Content */}
              <div className="absolute bottom-10 left-10 z-10">

                <p className="text-sm tracking-widest uppercase text-cyan-300 font-semibold">
                  {project.category}
                </p>

                <h3 className="text-4xl font-black text-white mt-3">
                  {project.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}