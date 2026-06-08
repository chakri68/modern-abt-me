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

const siteUrl = "https://chakri.me";
const description =
  "Chakradhar Reddy is a full-stack software engineer based in India, building elegant, scalable applications with a focus on clean interfaces, strong systems, and thoughtful user experience.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chakradhar Reddy — Software Engineer",
    template: "%s · Chakradhar Reddy",
  },
  description,
  keywords: [
    "Chakradhar Reddy",
    "chakri68",
    "Software Engineer",
    "Full-Stack Developer",
    "Frontend Engineer",
    "Backend Engineer",
    "System Design",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "India",
  ],
  authors: [{ name: "Chakradhar Reddy", url: siteUrl }],
  creator: "Chakradhar Reddy",
  publisher: "Chakradhar Reddy",
  applicationName: "Chakradhar Reddy",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Chakradhar Reddy",
    title: "Chakradhar Reddy — Software Engineer",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chakradhar Reddy — Software Engineer",
    description,
    creator: "@chakri681",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Chakradhar Reddy",
        alternateName: "chakri68",
        url: siteUrl,
        jobTitle: "Software Engineer",
        description,
        image: `${siteUrl}/opengraph-image`,
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
        },
        knowsAbout: [
          "Full-Stack Development",
          "System Design",
          "User Experience",
          "React",
          "Next.js",
          "TypeScript",
        ],
        sameAs: [
          "https://github.com/chakri68",
          "https://linkedin.com/in/chakradhar-reddy-d",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Chakradhar Reddy",
        description,
        inLanguage: "en",
        publisher: { "@id": `${siteUrl}/#person` },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "f44ce9f6e29448d288d45f2aaded6c5d"}'
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
