import React from "react";
import type { Metadata } from "next";
import {
  Space_Grotesk,
  Instrument_Serif,
  Instrument_Sans,
  DM_Mono,
  Cormorant_Garamond,
  EB_Garamond,
  STIX_Two_Text,
  JetBrains_Mono,
  Newsreader,
  Rozha_One,
  Courier_Prime,
  Libre_Caslon_Display,
  Libre_Caslon_Text,
  Spectral,
} from "next/font/google";
import "./globals.css";
import { themeInitScript } from "@/lib/themes";

// Only the default (classic) theme's faces are preloaded. The rest are
// declared (next/font wants literal options, hence the repetition) but fetched lazily, when a theme that uses them is actually shown.
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--f-grotesk" });
const iserif = Instrument_Serif({ subsets: ["latin"], preload: false, weight: "400", style: ["normal", "italic"], variable: "--f-iserif" });
const isans = Instrument_Sans({ subsets: ["latin"], preload: false, variable: "--f-isans" });
const dmmono = DM_Mono({ subsets: ["latin"], preload: false, weight: ["400", "500"], variable: "--f-dmmono" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], preload: false, weight: ["500", "600"], style: ["normal", "italic"], variable: "--f-cormorant" });
const garamond = EB_Garamond({ subsets: ["latin"], preload: false, style: ["normal", "italic"], variable: "--f-garamond" });
const stix = STIX_Two_Text({ subsets: ["latin"], preload: false, style: ["normal", "italic"], variable: "--f-stix" });
const jbmono = JetBrains_Mono({ subsets: ["latin"], variable: "--f-jbmono" });
const newsreader = Newsreader({ subsets: ["latin"], preload: false, style: ["normal", "italic"], variable: "--f-newsreader" });
const rozha = Rozha_One({ subsets: ["latin"], preload: false, weight: "400", variable: "--f-rozha" });
const courier = Courier_Prime({ subsets: ["latin"], preload: false, weight: ["400", "700"], style: ["normal", "italic"], variable: "--f-courier" });
const caslond = Libre_Caslon_Display({ subsets: ["latin"], preload: false, weight: "400", variable: "--f-caslond" });
const caslont = Libre_Caslon_Text({ subsets: ["latin"], preload: false, weight: ["400", "700"], style: ["normal", "italic"], variable: "--f-caslont" });
const spectral = Spectral({ subsets: ["latin"], preload: false, weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--f-spectral" });

const fontVars = [
  grotesk, iserif, isans, dmmono, cormorant, garamond, stix, jbmono,
  newsreader, rozha, courier, caslond, caslont, spectral,
]
  .map((f) => f.variable)
  .join(" ");

const siteUrl = "https://chakri.me";
const description =
  "Chakradhar Reddy is a full-stack software engineer based in India, building elegant, scalable applications with a focus on clean interfaces, strong systems, and thoughtful user experience.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chakradhar Reddy · Software Engineer",
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
    title: "Chakradhar Reddy · Software Engineer",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chakradhar Reddy · Software Engineer",
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
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
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
    <html lang="en" className={fontVars} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "e3351d29ed364ad5a47d321cfb97bd59"}'
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
