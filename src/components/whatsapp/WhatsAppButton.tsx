"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919370309722"
      target="_blank"
      className="fixed bottom-6 right-6 z-[99999] w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300"
    >

      <MessageCircle className="text-white w-8 h-8" />

    </a>
  );
}