"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const moveCursor = (e: MouseEvent) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        animate={{
          x: position.x - 10,
          y: position.y - 10,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        className="fixed top-0 left-0 w-5 h-5 rounded-full bg-indigo-600 pointer-events-none z-[999999]"
      />

      {/* Glow */}
      <motion.div
        animate={{
          x: position.x - 25,
          y: position.y - 25,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 18,
        }}
        className="fixed top-0 left-0 w-14 h-14 rounded-full bg-cyan-400/30 blur-2xl pointer-events-none z-[999998]"
      />
    </>
  );
}