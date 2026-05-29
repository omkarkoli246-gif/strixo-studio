"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 2.3,
        duration: 0.8,
      }}
      className="fixed inset-0 z-[999999] bg-[#f8f5ef] flex items-center justify-center"
    >

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="text-center"
      >

        <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
          STRIXO
        </h1>

        <p className="mt-4 text-gray-600 text-xl tracking-[6px] uppercase">
          Studio
        </p>

      </motion.div>

    </motion.div>
  );
}