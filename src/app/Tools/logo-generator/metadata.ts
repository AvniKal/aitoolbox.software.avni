import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI Logo Generator - Create Professional Logos Instantly",
  description: "Generate stunning professional logos in seconds with our free AI logo generator. No design skills needed. Choose from multiple aspect ratios, add slogans, and download instantly. Perfect for businesses, startups, and brands.",
  keywords: [
    "AI logo generator",
    "free logo maker",
    "logo design",
    "business logo",
    "startup logo",
    "brand identity",
    "logo creator",
    "artificial intelligence",
    "professional logo",
    "instant logo"
  ],
  authors: [{ name: "AI Toolbox" }],
  creator: "AI Toolbox",
  publisher: "AI Toolbox",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aitoolbox.software"),
  alternates: {
    canonical: "/logo-generator",
  },
  openGraph: {
    title: "Free AI Logo Generator - Create Professional Logos Instantly",
    description: "Generate stunning professional logos in seconds with our free AI logo generator. Multiple aspect ratios, slogan support, and instant download.",
    url: "/logo-generator",
    siteName: "AI Toolbox",
    images: [
      {
        url: "/mainOG.webp",
        width: 1200,
        height: 630,
        alt: "AI Logo Generator - Create Professional Logos",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Logo Generator - Create Professional Logos Instantly",
    description: "Generate stunning professional logos in seconds with our free AI logo generator.",
    images: ["/mainOG.webp"],
    creator: "@aitoolbox",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
 
};
