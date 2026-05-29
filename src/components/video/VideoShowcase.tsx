"use client";

import { motion } from "framer-motion";

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
    <section className="section-spacing px-6">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">
            VIDEO SHOWCASE
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-4 text-black">
            Our Creative Work
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Explore premium reels, edits and branding
            projects created by STRIXO STUDIO.
          </p>

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">

          {videos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="glass rounded-[35px] overflow-hidden shadow-2xl"
            >

              <video
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-[500px] object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-black text-black">
                  {item.title}
                </h3>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}