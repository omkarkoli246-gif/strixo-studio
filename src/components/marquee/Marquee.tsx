"use client";

export default function Marquee() {
  return (
    <section className="overflow-hidden py-10 bg-black">

      <div className="whitespace-nowrap animate-marquee flex items-center gap-16">

        <h2 className="text-5xl font-black text-white">
          STRIXO STUDIO
        </h2>

        <h2 className="text-5xl font-black text-indigo-500">
          VIDEO EDITING
        </h2>

        <h2 className="text-5xl font-black text-cyan-400">
          SOCIAL MEDIA
        </h2>

        <h2 className="text-5xl font-black text-white">
          BRANDING
        </h2>

        <h2 className="text-5xl font-black text-purple-500">
          CONTENT CREATION
        </h2>

      </div>

    </section>
  );
}