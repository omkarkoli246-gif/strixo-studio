"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Clapperboard,
  LayoutPanelTop,
  Megaphone,
  Palette,
  Share2,
} from "lucide-react";

const services = [
  {
    title: "Reel Editing",
    description: "Script, editing, effects, captions and 4K export.",
    Icon: Clapperboard,
  },
  {
    title: "Reels Shoot",
    description: "Professional shoot planning for creator and brand content.",
    Icon: Camera,
  },
  {
    title: "Meta Ads Management",
    description: "Campaign setup, creatives, tracking and optimization.",
    Icon: Megaphone,
  },
  {
    title: "Social Media Handling",
    description: "Monthly content posting, page hygiene and brand consistency.",
    Icon: Share2,
  },
  {
    title: "Website Design",
    description: "Modern responsive websites built for enquiries and trust.",
    Icon: LayoutPanelTop,
  },
  {
    title: "Thumbnail / Poster Design",
    description: "Fast, polished creative assets for campaigns and uploads.",
    Icon: Palette,
  },
];

export default function Services() {
  return (
    <section id="services" className="section-spacing px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.26em] text-[#b8752e]">
            Services
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight text-black sm:text-6xl">
            Everything your brand needs to look premium online
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border border-black/10 bg-white/70 p-7 shadow-sm backdrop-blur"
            >
              <service.Icon className="h-8 w-8 text-[#b8752e]" />

              <h3 className="mt-6 text-2xl font-black text-black">
                {service.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
