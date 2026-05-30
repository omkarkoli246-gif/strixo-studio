"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Luxury Reel Edit",
    category: "Video Editing",
    video: "/videos/video1.mp4",
  },
  {
    title: "Brand Campaign",
    category: "Meta Ads + Creative",
    video: "/videos/video2.mp4",
  },
  {
    title: "Content Production",
    category: "Reels Shoot",
    video: "/videos/video3.mp4",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-spacing px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b8752e]">
            Portfolio
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight text-black sm:text-6xl">
            Featured project styles
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group relative h-[500px] overflow-hidden border border-black/10 bg-black shadow-sm"
            >
              <video
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f8dca8]">
                  {project.category}
                </p>

                <h3 className="mt-3 text-3xl font-black text-white">
                  {project.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
