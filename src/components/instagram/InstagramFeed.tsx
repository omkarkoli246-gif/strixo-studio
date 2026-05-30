"use client";

import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

const posts = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
];

export default function InstagramFeed() {
  return (
    <section className="section-spacing px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b8752e]">
            Instagram
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight text-black sm:text-6xl">
            Follow our latest content
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Premium edits, reels and cinematic content from STRIXO STUDIO.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="overflow-hidden border border-black/10 bg-black shadow-sm"
            >
              <video
                src={post}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-[500px] w-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://instagram.com/strixo_studio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-black px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#d9a55b] hover:text-black"
          >
            <FaInstagram className="h-5 w-5" />
            Follow On Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
