import React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const _spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});
const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Chakradhar Reddy | Software Engineer",
  description:
    "Software Engineer specializing in full-stack development, building scalable applications and elegant user experiences.",
  icons: {
    icon: [
      {
        url: "/modern-abt-me/favicon-32x32.png",
        sizes: "32x32",
        rel: "icon",
      },
      {
        url: "/modern-abt-me/favicon-16x16.png",
        sizes: "16x16",
        rel: "icon",
      },
      {
        url: "/modern-abt-me/site.webmanifest",
        rel: "manifest",
      },
    ],
    apple: "/modern-abt-me/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "f44ce9f6e29448d288d45f2aaded6c5d"}'
        ></script>
      </head>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
