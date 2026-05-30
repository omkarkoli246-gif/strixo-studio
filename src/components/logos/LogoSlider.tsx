"use client";

const tools = [
  "Instagram",
  "Meta",
  "YouTube",
  "Canva",
  "Adobe",
  "CapCut",
  "Premiere Pro",
  "After Effects",
];

export default function LogoSlider() {
  return (
    <section className="overflow-hidden py-16">
      <div className="mx-auto mb-10 max-w-7xl px-6 text-center">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b8752e]">
          Tools & Platforms
        </p>

        <h2 className="mt-4 text-4xl font-black text-black sm:text-5xl">
          Built with industry-standard workflows
        </h2>
      </div>

      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-5 whitespace-nowrap">
          {[...tools, ...tools].map((tool, index) => (
            <div
              key={`${tool}-${index}`}
              className="border border-black/10 bg-white/75 px-9 py-5 shadow-sm backdrop-blur"
            >
              <h3 className="text-2xl font-black text-black">{tool}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
