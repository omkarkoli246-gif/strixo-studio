"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function MagneticButton({
  text,
}: {
  text: string;
}) {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x);
  const springY = useSpring(y);

  function handleMouseMove(
    e: React.MouseEvent<HTMLButtonElement>
  ) {

    const rect =
      e.currentTarget.getBoundingClientRect();

    const centerX =
      rect.left + rect.width / 2;

    const centerY =
      rect.top + rect.height / 2;

    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);

  }

  function handleMouseLeave() {

    x.set(0);
    y.set(0);

  }

  return (
    <motion.button
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-black shadow-2xl"
    >
      {text}
    </motion.button>
  );
}