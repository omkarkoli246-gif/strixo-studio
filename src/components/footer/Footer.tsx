"use client";

import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const quickLinks = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Reels", "#reels"],
  ["Websites", "#pricing"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <>
      <a
        href="https://wa.me/919370309722?text=Hi%20STRIXO%20STUDIO%2C%20I%20want%20to%20talk."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-16 w-16 place-items-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110"
      >
        <FaWhatsapp size={30} />
      </a>

      <footer className="px-6 pb-10 pt-24">
        <div className="mx-auto max-w-7xl border border-black/10 bg-white/75 p-8 shadow-sm backdrop-blur sm:p-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div>
              <Image
                src="/favicon.png"
                alt="STRIXO STUDIO logo"
                width={420}
                height={236}
                className="h-auto w-56 bg-black"
              />

              <p className="mt-6 max-w-sm leading-7 text-gray-600">
                Premium digital marketing agency helping brands grow with
                modern websites, reel editing, ads and powerful branding.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black text-black">Quick Links</h3>

              <div className="mt-6 grid gap-4 text-gray-600">
                {quickLinks.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="transition hover:text-black"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-black text-black">Connect</h3>

              <div className="mt-6 space-y-5 text-gray-600">
                <p>strixostudio4@gmail.com</p>
                <p>+91 9370309722</p>

                <a
                  href="https://instagram.com/strixo_studio"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 transition hover:text-black"
                >
                  <FaInstagram size={22} />
                  @strixo_studio
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-black/10 pt-8 text-center text-gray-500">
            © 2026 STRIXO STUDIO. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
