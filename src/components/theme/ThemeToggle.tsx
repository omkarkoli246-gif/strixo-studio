"use client";

import { Moon, Sun } from "lucide-react";

import { useEffect, useState } from "react";

export default function ThemeToggle() {

  const [dark, setDark] =
    useState(false);

  useEffect(() => {

    if (dark) {

      document.documentElement.classList.add(
        "dark"
      );

    } else {

      document.documentElement.classList.remove(
        "dark"
      );

    }

  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed bottom-28 right-6 z-[999999] w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-2xl"
    >

      {dark ? (
        <Sun className="w-6 h-6" />
      ) : (
        <Moon className="w-6 h-6" />
      )}

    </button>
  );
}