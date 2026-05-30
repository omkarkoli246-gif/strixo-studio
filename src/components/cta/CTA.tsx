"use client";

import { motion } from "framer-motion";
import { CalendarCheck, MessageCircle } from "lucide-react";
import { useState } from "react";
import BookingModal from "../booking/BookingModal";

export default function CTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="section-spacing px-6">
        <motion.div
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-7xl overflow-hidden bg-black"
        >
          <div className="grid grid-cols-1 items-stretch lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 text-white sm:p-14 lg:p-16">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f8dca8]">
                Let&apos;s Work Together
              </p>

              <h2 className="mt-6 text-4xl font-black leading-tight sm:text-6xl">
                Ready to grow your brand?
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
                Start with a single reel, choose a monthly content package, or
                build a complete website and ad funnel with STRIXO STUDIO.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/919370309722?text=Hi%20STRIXO%20STUDIO%2C%20I%20am%20ready%20to%20start."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#f8dca8] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:bg-white"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat On WhatsApp
                </a>

                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center justify-center gap-3 border border-white/25 px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-black"
                >
                  <CalendarCheck className="h-5 w-5" />
                  Book A Project
                </button>
              </div>
            </div>

            <video
              src="/videos/video3.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full min-h-[360px] w-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      <BookingModal open={open} setOpen={setOpen} />
    </>
  );
}
