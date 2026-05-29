"use client";

import { motion } from "framer-motion";

import { useState } from "react";

import BookingModal from "../booking/BookingModal";

export default function CTA() {

  const [open, setOpen] =
    useState(false);

  return (
    <>
      <section className="section-spacing px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="max-w-7xl mx-auto rounded-[40px] overflow-hidden relative"
        >

          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500" />

          {/* Glow */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/20 blur-3xl rounded-full" />

          <div className="relative z-10 px-10 py-24 md:px-20 text-center">

            <p className="text-sm font-semibold tracking-widest text-white uppercase">
              LET’S WORK TOGETHER
            </p>

            <h2 className="text-5xl md:text-7xl font-black text-white mt-6 leading-tight">
              Ready To Grow <br />
              Your Brand?
            </h2>

            <p className="mt-8 text-white/80 text-xl max-w-3xl mx-auto">
              STRIXO STUDIO helps brands dominate social media
              with premium editing, reels and digital marketing.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">

              <a
                href="https://wa.me/919370309722"
                target="_blank"
                className="px-10 py-5 rounded-full bg-white text-black font-black text-lg hover:scale-105 transition duration-300 shadow-2xl"
              >
                Chat On WhatsApp
              </a>

              <button
                onClick={() => setOpen(true)}
                className="px-10 py-5 rounded-full border border-white/40 text-white font-black text-lg hover:bg-white hover:text-black transition duration-300"
              >
                Book A Project
              </button>

            </div>

          </div>

        </motion.div>

      </section>

      <BookingModal
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}