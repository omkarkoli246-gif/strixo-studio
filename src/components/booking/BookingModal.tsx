"use client";

import { motion } from "framer-motion";

export default function BookingModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/50 backdrop-blur-md px-6">

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        className="glass w-full max-w-2xl rounded-[40px] p-10 shadow-2xl relative"
      >

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-3xl font-black text-black"
        >
          ×
        </button>

        <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">
          BOOK PROJECT
        </p>

        <h2 className="text-5xl font-black mt-4 text-black">
          Let’s Work Together
        </h2>

        <form className="mt-10 space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-5 rounded-2xl bg-white/70 border border-white/40 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-5 rounded-2xl bg-white/70 border border-white/40 outline-none"
          />

          <input
            type="text"
            placeholder="Your Brand / Business"
            className="w-full p-5 rounded-2xl bg-white/70 border border-white/40 outline-none"
          />

          <textarea
            placeholder="Tell us about your project..."
            rows={5}
            className="w-full p-5 rounded-2xl bg-white/70 border border-white/40 outline-none"
          />

          <button
            type="submit"
            className="w-full py-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-black text-lg shadow-2xl"
          >
            Submit Booking
          </button>

        </form>

      </motion.div>

    </div>
  );
}