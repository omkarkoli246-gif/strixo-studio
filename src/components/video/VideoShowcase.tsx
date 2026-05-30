"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const videos = [
  {
    title: "Premium Reel Edit",
    video: "/videos/video1.mp4",
  },
  {
    title: "Creative Brand Shoot",
    video: "/videos/video2.mp4",
  },
  {
    title: "Luxury Business Promo",
    video: "/videos/video3.mp4",
  },
];

export default function VideoShowcase() {
  return (
    <section id="video-showcase" className="section-spacing px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b8752e]">
            Video Showcase
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight text-black sm:text-6xl">
            Recent reels and creative work
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Explore premium edits and brand content created by STRIXO STUDIO.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {videos.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="overflow-hidden border border-black/10 bg-white shadow-sm"
            >
              <video
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                className="h-[520px] w-full bg-black object-cover"
              />

              <div className="flex items-center gap-3 p-6">
                <PlayCircle className="h-6 w-6 text-[#b8752e]" />
                <h3 className="text-2xl font-black text-black">
                  {item.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
