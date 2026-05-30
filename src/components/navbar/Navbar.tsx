"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Home",
    id: "home",
  },
  {
    label: "Services",
    id: "services",
  },
  {
    label: "Reels",
    id: "reels",
  },
  {
    label: "Websites",
    id: "pricing",
  },
  {
    label: "Portfolio",
    id: "portfolio",
  },
  {
    label: "Contact",
    id: "contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 220;

      navItems.forEach((item) => {
        const element = document.getElementById(item.id);

        if (!element) return;

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActive(item.id);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-[9999] w-full border-b transition-all duration-500 ${
          scrolled
            ? "border-black/10 bg-white/[0.88] text-black shadow-xl backdrop-blur-xl"
            : "border-white/10 bg-black/[0.08] text-white backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center overflow-hidden border border-[#d9a55b]/55 bg-black">
              <Image
                src="/favicon.png"
                alt="STRIXO STUDIO"
                width={44}
                height={44}
                className="h-full w-full object-cover object-top"
              />
            </span>
            <span className="text-xl font-black tracking-[0.12em]">
              STRIXO
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-black uppercase tracking-[0.12em] transition ${
                  active === item.id
                    ? "text-[#d9a55b]"
                    : scrolled
                      ? "text-black hover:text-[#b8752e]"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="https://wa.me/919370309722?text=Hi%20STRIXO%20STUDIO%2C%20I%20want%20to%20start%20a%20project."
            target="_blank"
            className="hidden bg-black px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#d9a55b] hover:text-black md:block"
          >
            Let&apos;s Talk
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
            className="md:hidden"
          >
            {open ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>
        </div>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center gap-8 bg-black text-white"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-4xl font-black"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      ) : null}
    </>
  );
}
