"use client";

const particles = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: (index * 37 + 11) % 100,
  top: (index * 53 + 17) % 100,
  duration: 2.5 + (index % 6) * 0.55,
}));

export default function Particles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute h-1.5 w-1.5 rounded-full bg-white/20"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animation: `particlePulse ${particle.duration}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}
