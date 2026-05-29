"use client";

import { motion } from "framer-motion";

const posts = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
];

export default function InstagramFeed() {
  return (
    <section className="section-spacing px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">

          <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">
            INSTAGRAM
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-4 text-black">
            Follow Our Content
          </h2>

          <p className="mt-6 text-gray-600 text-xl">
            Premium edits, reels and cinematic content.
          </p>

        </div>

        {/* Videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">

          {posts.map((post, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.03,
              }}
              className="overflow-hidden rounded-[30px] shadow-2xl"
            >

              <video
                src={post}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[500px] object-cover"
              />

            </motion.div>

          ))}

        </div>

        {/* Instagram Button */}
        <div className="flex justify-center mt-14">

          <a
            href="https://instagram.com/strixo_studio"
            target="_blank"
            className="px-10 py-5 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white font-black text-lg shadow-2xl hover:scale-105 transition duration-300"
          >
            Follow On Instagram
          </a>

        </div>

      </div>

    </section>
  );
}