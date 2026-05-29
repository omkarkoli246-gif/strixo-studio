"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {

  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[5px] z-[999999] origin-left bg-gradient-to-r from-indigo-600 via-cyan-500 to-purple-600"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}