import type { Metadata } from "next";

import "./globals.css";

import Particles from "../src/components/particles/Particles";

export const metadata: Metadata = {
  title:
    "STRIXO STUDIO | Premium Video Editing & Digital Marketing",

  description:
    "STRIXO STUDIO is a premium digital agency offering cinematic reel editing, branding, social media management and modern website solutions.",

  keywords: [
    "STRIXO STUDIO",
    "Video Editing",
    "Reel Editing",
    "Digital Marketing",
    "Social Media Agency",
    "Instagram Growth",
    "Branding",
    "Website Design",
  ],

  authors: [
    {
      name: "STRIXO STUDIO",
    },
  ],

  creator: "STRIXO STUDIO",

  icons: {
    icon: "/logo.jpeg",
  },

  openGraph: {
    title:
      "STRIXO STUDIO",

    description:
      "Premium cinematic edits, branding and digital marketing solutions.",

    url:
      "https://strixo-studio.vercel.app",

    siteName:
      "STRIXO STUDIO",

    locale:
      "en_US",

    type:
      "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body>

        <Particles />

        {children}

      </body>

    </html>
  );
}