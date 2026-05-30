"use client";

import Image from "next/image";
import {
  ArrowDown,
  IndianRupee,
  MessageCircle,
  PlayCircle,
} from "lucide-react";

const heroStats = [
  {
    label: "Single Reel",
    value: "₹1,500",
  },
  {
    label: "Delivery",
    value: "2-3 Days",
  },
  {
    label: "Export",
    value: "4K",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[96svh] overflow-hidden bg-black px-6 pb-16 pt-28 text-white"
    >
      <video
        src="/videos/video1.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.38]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92),rgba(0,0,0,0.58),rgba(0,0,0,0.78))]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(96svh-7rem)] max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.38em] text-[#f8dca8]">
            Claim Offer
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-none sm:text-7xl lg:text-8xl">
            STRIXO STUDIO
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            Professional reels, script, editing, effects, meta ads campaigns,
            social media handling and premium websites for growing brands.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/919370309722?text=Hi%20STRIXO%20STUDIO%2C%20I%20want%20to%20claim%20the%20reel%20offer."
              target="_blank"
              className="inline-flex items-center justify-center gap-3 bg-[#f8dca8] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:bg-white"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Now
            </a>

            <a
              href="#reels"
              className="inline-flex items-center justify-center gap-3 border border-white/25 bg-white/10 px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white backdrop-blur transition hover:bg-white hover:text-black"
            >
              <ArrowDown className="h-5 w-5" />
              View Packages
            </a>
          </div>

          <dl className="mt-10 grid max-w-2xl grid-cols-3 border-y border-white/15">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="border-r border-white/15 px-4 py-5 last:border-r-0 first:pl-0"
              >
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                  {stat.label}
                </dt>
                <dd className="mt-2 text-2xl font-black text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-h-[520px]">
          <div className="absolute inset-x-8 top-0 h-[440px] overflow-hidden border border-white/20 bg-black shadow-2xl">
            <video
              src="/videos/video2.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-0 w-[70%] border border-white/20 bg-black/80 p-5 shadow-2xl backdrop-blur">
            <Image
              src="/favicon.png"
              alt="STRIXO STUDIO logo"
              width={720}
              height={405}
              priority
              className="h-auto w-full"
            />
          </div>

          <a
            href="#video-showcase"
            className="absolute bottom-8 right-0 inline-flex items-center gap-3 bg-white px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-black shadow-2xl transition hover:bg-[#f8dca8]"
          >
            <PlayCircle className="h-5 w-5" />
            Watch Work
          </a>

          <div className="absolute right-8 top-8 flex items-center gap-3 bg-black/75 px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#f8dca8] backdrop-blur">
            <IndianRupee className="h-5 w-5" />
            Reels from ₹1,500
          </div>
        </div>
      </div>
    </section>
  );
}
