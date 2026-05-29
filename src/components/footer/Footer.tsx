"use client";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919370309722"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition duration-300"
      >
        <FaWhatsapp size={30} />
      </a>

      {/* Footer */}
      <footer className="px-6 pb-10 pt-24">

        <div className="max-w-7xl mx-auto">

          <div className="glass rounded-[35px] p-12 shadow-2xl">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

              {/* Brand */}
              <div>

                <h2 className="text-4xl font-black gradient-text">
                  STRIXO STUDIO
                </h2>

                <p className="mt-6 text-gray-600 leading-relaxed">
                  Premium digital marketing agency helping
                  brands grow with modern websites,
                  reel editing and powerful branding.
                </p>

              </div>

              {/* Links */}
              <div>

                <h3 className="text-2xl font-bold text-black">
                  Quick Links
                </h3>

                <div className="mt-6 space-y-4 text-gray-600">

                  <p className="hover:text-black transition cursor-pointer">
                    Home
                  </p>

                  <p className="hover:text-black transition cursor-pointer">
                    Services
                  </p>

                  <p className="hover:text-black transition cursor-pointer">
                    Portfolio
                  </p>

                  <p className="hover:text-black transition cursor-pointer">
                    Contact
                  </p>

                </div>

              </div>

              {/* Contact */}
              <div>

                <h3 className="text-2xl font-bold text-black">
                  Connect
                </h3>

                <div className="mt-6 space-y-5 text-gray-600">

                  <p>
                    strixostudio4@gmail.com
                  </p>

                  <p>
                    +91 9370309722
                  </p>

                  <a
                    href="https://instagram.com/strixo_studio"
                    target="_blank"
                    className="flex items-center gap-3 hover:text-black transition"
                  >

                    <FaInstagram size={22} />

                    @strixo_studio

                  </a>

                </div>

              </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-black/10 mt-12 pt-8 text-center text-gray-500">

              © 2026 STRIXO STUDIO. All Rights Reserved.

            </div>

          </div>

        </div>

      </footer>
    </>
  );
}