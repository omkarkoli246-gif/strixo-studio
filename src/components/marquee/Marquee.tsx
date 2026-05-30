"use client";

const items = [
  "STRIXO STUDIO",
  "REEL EDITING",
  "META ADS",
  "SOCIAL MEDIA",
  "WEBSITES",
  "BRANDING",
];

export default function Marquee() {
  return (
    <section className="overflow-hidden bg-black py-8">
      <div className="flex w-max animate-marquee items-center gap-16 whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <h2
            key={`${item}-${index}`}
            className={`text-4xl font-black sm:text-5xl ${
              index % 3 === 0
                ? "text-white"
                : index % 3 === 1
                  ? "text-[#f8dca8]"
                  : "text-cyan-300"
            }`}
          >
            {item}
          </h2>
        ))}
      </div>
    </section>
  );
}
