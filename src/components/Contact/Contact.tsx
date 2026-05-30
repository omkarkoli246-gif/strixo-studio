"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
  {
    label: "strixostudio4@gmail.com",
    Icon: Mail,
  },
  {
    label: "+91 9370309722",
    Icon: Phone,
  },
  {
    label: "Pune, Maharashtra",
    Icon: MapPin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-spacing px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -38 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b8752e]">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight text-black sm:text-6xl">
            Let&apos;s build something amazing
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
            Have a reel, campaign, website or monthly social media plan in
            mind? STRIXO STUDIO is ready to help your brand grow.
          </p>

          <div className="mt-9 space-y-4">
            {contactItems.map((item) => (
              <p
                key={item.label}
                className="flex items-center gap-3 text-lg font-bold text-black"
              >
                <item.Icon className="h-5 w-5 text-[#b8752e]" />
                {item.label}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 38 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="border border-black/10 bg-white/75 p-7 shadow-sm backdrop-blur sm:p-10"
        >
          <form
            action="https://formsubmit.co/strixostudio4@gmail.com"
            method="POST"
            className="space-y-5"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New STRIXO STUDIO enquiry"
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
              className="w-full border border-black/10 bg-white p-5 outline-none transition focus:border-black"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-black/10 bg-white p-5 outline-none transition focus:border-black"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full border border-black/10 bg-white p-5 outline-none transition focus:border-black"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              required
              className="w-full border border-black/10 bg-white p-5 outline-none transition focus:border-black"
            />

            <button
              type="submit"
              className="w-full bg-black py-5 text-lg font-black text-white shadow-xl transition hover:bg-[#d9a55b] hover:text-black"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
