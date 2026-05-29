"use client";

import { motion } from "framer-motion";

const videos = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
];

export default function VideoShowcase() {
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
            PORTFOLIO
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-4 text-black">
            Featured Reel Projects
          </h2>

        </motion.div>

        {/* Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

          {videos.map((video, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="relative rounded-[35px] overflow-hidden shadow-2xl group"
            >

              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[650px] object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-8 left-8">

                <h3 className="text-2xl font-black text-white">
                  Premium Reel Edit
                </h3>

                <p className="text-gray-300 mt-2">
                  STRIXO STUDIO Production
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}