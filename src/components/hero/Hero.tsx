"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import MagneticButton from "../buttons/MagneticButton";

export default function Hero() {

  const { scrollY } = useScroll();

  const y =
    useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >

        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full" />

      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-sm md:text-base uppercase tracking-[6px] text-indigo-600 font-bold"
        >
          Premium Digital Agency
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-8 text-6xl md:text-8xl font-black leading-tight text-black"
        >

          We Build
          <span className="block gradient-text">
            Viral Brands
          </span>

        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="mt-10 text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >

          STRIXO STUDIO creates premium reels,
          cinematic edits and social media
          experiences that help brands grow fast.

        </motion.p>

        {/* Magnetic Button */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="mt-14 flex justify-center"
        >

          <MagneticButton text="Start Your Project" />

        </motion.div>

      </div>

    </section>
  );
}