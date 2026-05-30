"use client";

import { motion } from "framer-motion";
import {
  BadgePercent,
  Check,
  CreditCard,
  Film,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const singlePackage = {
  title: "Single Reel Package",
  price: "₹1,500",
  subtitle: "Per reel",
  description: "1 professional reel video with script, editing and effects.",
  features: ["Script + Editing + Effects", "4K export", "Delivery: 2-3 days"],
};

const monthlyPackages = [
  {
    title: "Starter Monthly",
    reels: "8 Reels / Month",
    actual: "₹12,000",
    price: "₹10,999",
    note: "Best for small businesses and creators",
  },
  {
    title: "Growth Monthly",
    reels: "15 Reels / Month",
    actual: "₹22,500",
    price: "₹18,999",
    note: "Best for brands growing on Instagram",
    featured: true,
  },
  {
    title: "Premium Monthly",
    reels: "30 Reels / Month",
    actual: "₹45,000",
    price: "₹34,999",
    note: "Daily content strategy + professional branding",
  },
];

const yearlyPackages = [
  {
    title: "Creator Yearly",
    reels: "100 Reels / Year",
    actual: "₹1,50,000",
    price: "₹1,19,999",
    note: "Saves ₹30K+",
  },
  {
    title: "Business Yearly",
    reels: "200 Reels / Year",
    actual: "₹3,00,000",
    price: "₹2,19,999",
    note: "Full-year branding solution",
    featured: true,
  },
  {
    title: "Elite Brand Package",
    reels: "365 Reels / Year",
    actual: "₹5,47,500",
    price: "₹3,99,999",
    note: "Daily premium content for full business domination",
  },
];

const addOns = [
  {
    title: "Meta Ads Management",
    price: "₹2,000",
    period: "Per campaign",
  },
  {
    title: "Social Media Handling",
    price: "₹23,999",
    period: "Per month",
  },
  {
    title: "Thumbnail / Poster Design",
    price: "₹499",
    period: "Each",
  },
];

function upiLink(note: string) {
  return `upi://pay?pa=9370309722@fam&pn=STRIXO%20STUDIO&cu=INR&tn=${encodeURIComponent(note)}`;
}

function whatsappLink(packageName: string) {
  return `https://wa.me/919370309722?text=${encodeURIComponent(
    `Hi STRIXO STUDIO, I want to claim the ${packageName} offer.`
  )}`;
}

function PackageCard({
  item,
}: {
  item: {
    title: string;
    reels: string;
    actual: string;
    price: string;
    note: string;
    featured?: boolean;
  };
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`border p-7 shadow-sm ${
        item.featured
          ? "border-black bg-black text-white"
          : "border-black/10 bg-white/75 text-black"
      }`}
    >
      {item.featured ? (
        <p className="mb-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#f8dca8]">
          <Sparkles className="h-4 w-4" />
          Best Value
        </p>
      ) : null}

      <h3 className="text-2xl font-black">{item.title}</h3>
      <p className={item.featured ? "mt-2 text-white/60" : "mt-2 text-gray-500"}>
        {item.reels}
      </p>

      <div
        className={`my-7 border-y py-6 ${
          item.featured ? "border-white/15" : "border-black/10"
        }`}
      >
        <p className={item.featured ? "text-sm text-white/50" : "text-sm text-gray-500"}>
          Actual Cost: <span className="line-through">{item.actual}</span>
        </p>
        <p className="mt-2 text-4xl font-black">{item.price}</p>
      </div>

      <p className={item.featured ? "text-white/75" : "text-gray-700"}>
        {item.note}
      </p>

      <div className="mt-8 grid gap-3">
        <a
          href={whatsappLink(item.title)}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center justify-center gap-3 px-5 py-4 text-sm font-black uppercase tracking-[0.12em] transition ${
            item.featured
              ? "bg-[#f8dca8] text-black hover:bg-white"
              : "bg-black text-white hover:bg-[#d9a55b] hover:text-black"
          }`}
        >
          <MessageCircle className="h-5 w-5" />
          Claim Offer
        </a>

        <a
          href={upiLink(`${item.title} payment`)}
          className={`inline-flex items-center justify-center gap-3 border px-5 py-4 text-sm font-black uppercase tracking-[0.12em] transition ${
            item.featured
              ? "border-white/20 text-white hover:bg-white hover:text-black"
              : "border-black/15 text-black hover:bg-black hover:text-white"
          }`}
        >
          <CreditCard className="h-5 w-5" />
          Pay Advance
        </a>
      </div>
    </motion.article>
  );
}

export default function ReelPackages() {
  return (
    <section id="reels" className="section-spacing px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.26em] text-[#b8752e]">
            STRIXO_STUDIO Reel Packages
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight text-black sm:text-6xl">
            Reel packages for creators, businesses and full-year brands
          </h2>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 grid gap-8 border border-black bg-black p-7 text-white shadow-xl lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div>
            <p className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.22em] text-[#f8dca8]">
              <Film className="h-5 w-5" />
              Single Reel
            </p>
            <h3 className="mt-5 text-4xl font-black">
              {singlePackage.title}
            </h3>
            <p className="mt-4 max-w-xl text-white/70">
              {singlePackage.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr]">
            <div className="border border-white/15 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-white/50">
                Price
              </p>
              <p className="mt-2 text-5xl font-black">{singlePackage.price}</p>
              <p className="mt-2 text-white/60">{singlePackage.subtitle}</p>
            </div>

            <div>
              <ul className="space-y-4">
                {singlePackage.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 text-[#f8dca8]" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink(singlePackage.title)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#f8dca8] px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-black transition hover:bg-white"
                >
                  <MessageCircle className="h-5 w-5" />
                  Book Reel
                </a>

                <a
                  href={upiLink("Single Reel Package payment")}
                  className="inline-flex items-center justify-center gap-3 border border-white/20 px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-black"
                >
                  <CreditCard className="h-5 w-5" />
                  Pay Advance
                </a>
              </div>
            </div>
          </div>
        </motion.article>

        <div className="mt-16">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b8752e]">
            Monthly Packages
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {monthlyPackages.map((item) => (
              <PackageCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b8752e]">
            Yearly Packages
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {yearlyPackages.map((item) => (
              <PackageCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        <div className="mt-16 border border-black/10 bg-white/75 p-7 shadow-sm">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.24em] text-[#b8752e]">
                <BadgePercent className="h-5 w-5" />
                Add-On Services
              </p>
              <h3 className="mt-4 text-3xl font-black text-black">
                Extra services for campaigns and daily growth
              </h3>
            </div>

            <a
              href={whatsappLink("Add-On Services")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-black px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#d9a55b] hover:text-black"
            >
              <MessageCircle className="h-5 w-5" />
              Ask Details
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {addOns.map((addOn) => (
              <div key={addOn.title} className="border border-black/10 p-5">
                <h4 className="text-xl font-black text-black">{addOn.title}</h4>
                <p className="mt-4 text-3xl font-black text-[#b8752e]">
                  {addOn.price}
                </p>
                <p className="mt-1 text-sm uppercase tracking-[0.16em] text-gray-500">
                  {addOn.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
