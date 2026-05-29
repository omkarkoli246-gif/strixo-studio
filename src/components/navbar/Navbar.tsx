"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  Menu,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

export default function Navbar() {

  const [scrolled, setScrolled] =
    useState(false);

  const [open, setOpen] =
    useState(false);

  const [active, setActive] =
    useState("home");

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = [
        "home",
        "services",
        "portfolio",
        "pricing",
        "contact",
      ];

      const scrollPosition =
        window.scrollY + 200;

      sections.forEach((section) => {

        const element =
          document.getElementById(section);

        if (element) {

          const offsetTop =
            element.offsetTop;

          const offsetHeight =
            element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition <
              offsetTop + offsetHeight
          ) {
            setActive(section);
          }

        }

      });

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-white/70 shadow-xl border-b border-white/20"
            : "bg-transparent"
        }`}
      >

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* Logo */}
          <Link href="/">

            <h1 className="text-3xl font-black gradient-text">
              STRIXO
            </h1>

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">

            <a
              href="#home"
              className={`font-semibold transition ${
                active === "home"
                  ? "text-indigo-600"
                  : "text-black hover:text-indigo-600"
              }`}
            >
              Home
            </a>

            <a
              href="#services"
              className={`font-semibold transition ${
                active === "services"
                  ? "text-indigo-600"
                  : "text-black hover:text-indigo-600"
              }`}
            >
              Services
            </a>

            <a
              href="#portfolio"
              className={`font-semibold transition ${
                active === "portfolio"
                  ? "text-indigo-600"
                  : "text-black hover:text-indigo-600"
              }`}
            >
              Portfolio
            </a>

            <a
              href="#pricing"
              className={`font-semibold transition ${
                active === "pricing"
                  ? "text-indigo-600"
                  : "text-black hover:text-indigo-600"
              }`}
            >
              Pricing
            </a>

            <a
              href="#contact"
              className={`font-semibold transition ${
                active === "contact"
                  ? "text-indigo-600"
                  : "text-black hover:text-indigo-600"
              }`}
            >
              Contact
            </a>

          </div>

          {/* Desktop Button */}
          <a
            href="#contact"
            className="hidden md:block px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold shadow-xl hover:scale-105 transition duration-300"
          >
            Let’s Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >

            {open ? (
              <X className="w-8 h-8 text-black" />
            ) : (
              <Menu className="w-8 h-8 text-black" />
            )}

          </button>

        </div>

      </motion.nav>

      {/* Mobile Menu */}
      {open && (

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className="fixed inset-0 z-[9998] bg-[#f8f5ef] flex flex-col items-center justify-center gap-10"
        >

          <a
            href="#home"
            className="text-4xl font-black"
            onClick={() => setOpen(false)}
          >
            Home
          </a>

          <a
            href="#services"
            className="text-4xl font-black"
            onClick={() => setOpen(false)}
          >
            Services
          </a>

          <a
            href="#portfolio"
            className="text-4xl font-black"
            onClick={() => setOpen(false)}
          >
            Portfolio
          </a>

          <a
            href="#pricing"
            className="text-4xl font-black"
            onClick={() => setOpen(false)}
          >
            Pricing
          </a>

          <a
            href="#contact"
            className="text-4xl font-black"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>

        </motion.div>

      )}
    </>
  );
}