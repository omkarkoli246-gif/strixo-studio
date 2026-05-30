"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function BookingModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/70 px-6 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-2xl border border-black/10 bg-white p-8 shadow-2xl sm:p-10"
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close booking form"
          className="absolute right-5 top-5 grid h-10 w-10 place-items-center border border-black/10 text-black transition hover:bg-black hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b8752e]">
          Book Project
        </p>

        <h2 className="mt-4 text-4xl font-black text-black sm:text-5xl">
          Let&apos;s Work Together
        </h2>

        <form
          action="https://formsubmit.co/strixostudio4@gmail.com"
          method="POST"
          className="mt-9 space-y-5"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="New STRIXO STUDIO booking"
          />
          <input
            type="hidden"
            name="_next"
            value="https://strixo-studio.vercel.app/#contact"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-black/10 bg-gray-50 p-5 outline-none transition focus:border-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border border-black/10 bg-gray-50 p-5 outline-none transition focus:border-black"
          />

          <input
            type="text"
            name="business"
            placeholder="Your Brand / Business"
            required
            className="w-full border border-black/10 bg-gray-50 p-5 outline-none transition focus:border-black"
          />

          <textarea
            name="message"
            placeholder="Tell us about your project..."
            rows={5}
            required
            className="w-full border border-black/10 bg-gray-50 p-5 outline-none transition focus:border-black"
          />

          <button
            type="submit"
            className="w-full bg-black py-5 text-lg font-black text-white shadow-xl transition hover:bg-[#d9a55b] hover:text-black"
          >
            Submit Booking
          </button>
        </form>
      </motion.div>
    </div>
  );
}
