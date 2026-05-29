"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section-spacing px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left Content */}
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">
            CONTACT
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-4 text-black">
            Let’s Build Something Amazing
          </h2>

          <p className="mt-8 text-gray-600 text-xl leading-relaxed">
            Have a project in mind?
            STRIXO STUDIO is ready to help your brand grow
            with premium content, editing and digital marketing.
          </p>

          <div className="mt-10 space-y-4">

            <p className="text-lg font-semibold text-black">
              📧 strixostudio4@gmail.com
            </p>

            <p className="text-lg font-semibold text-black">
              📞 +91 9370309722
            </p>

            <p className="text-lg font-semibold text-black">
              📍 Pune, Maharashtra
            </p>

          </div>

        </motion.div>

        {/* Form */}
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="glass rounded-[40px] p-10 shadow-2xl"
        >

          <form
            action="https://formsubmit.co/strixostudio4@gmail.com"
            method="POST"
            className="space-y-6"
          >

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000"
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-5 rounded-2xl bg-white/70 border border-white/40 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-5 rounded-2xl bg-white/70 border border-white/40 outline-none"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-5 rounded-2xl bg-white/70 border border-white/40 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              required
              className="w-full p-5 rounded-2xl bg-white/70 border border-white/40 outline-none"
            />

            <button
              type="submit"
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-black text-lg shadow-2xl hover:scale-[1.02] transition duration-300"
            >
              Send Message
            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}