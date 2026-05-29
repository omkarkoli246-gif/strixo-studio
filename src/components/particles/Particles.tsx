"use client";

import { useEffect, useState } from "react";

export default function Particles() {

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const particles = Array.from(
    { length: 25 },
    (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 2 + Math.random() * 5,
    })
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {particles.map((particle) => (

        <span
          key={particle.id}
          className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDuration: `${particle.duration}s`,
          }}
        />

      ))}

    </div>
  );
}