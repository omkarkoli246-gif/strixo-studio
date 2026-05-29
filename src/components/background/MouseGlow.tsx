"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const handleMove = (e: MouseEvent) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };

  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 200,
        y: position.y - 200,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
      }}
      className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-400/20 blur-3xl pointer-events-none z-0"
    />
  );
}