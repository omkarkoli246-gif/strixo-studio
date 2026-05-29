"use client";

const logos = [
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
    <section className="py-16 overflow-hidden">

      <div className="max-w-7xl mx-auto mb-12 text-center">

        <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">
          TOOLS & PLATFORMS
        </p>

        <h2 className="text-4xl md:text-5xl font-black mt-4 text-black">
          Powered By Industry Tools
        </h2>

      </div>

      <div className="overflow-hidden">

        <div className="flex gap-10 animate-marquee whitespace-nowrap w-max">

          {[...logos, ...logos].map((logo, index) => (

            <div
              key={index}
              className="glass px-10 py-6 rounded-full shadow-xl"
            >

              <h3 className="text-2xl font-black gradient-text">
                {logo}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}