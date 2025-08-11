import React from "react";
import { Metadata } from "next";
import LogoGeneratorClient from "./_components/logo-generator-client";

export const metadata: Metadata = {
  title: "Free AI Logo Generator - Create Your Business Logo in Seconds",
  description: "Generate professional logos for your business instantly with our free AI-powered logo generator. Describe your ideal logo, and our AI will create stunning, unique designs in seconds. No design skills needed. Get a high-quality, commercial-use logo for free.",
  keywords: [
    "AI logo generator",
    "free logo maker",
    "logo design",
    "business logo",
    "custom logo",
    "AI branding",
    "logo creator",
    "online logo maker"
  ],
  authors: [{ name: "AI Toolbox" }],
  creator: "AI Toolbox",
  publisher: "AI Toolbox",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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

// Server-side rendered component with structured data
export default function LogoGeneratorPage() {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "AI Logo Generator",
    "description": "Free AI-powered logo generator that creates professional logos instantly",
    "url": "https://aitoolbox.software/logo-generator",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "AI-powered logo generation",
      "Multiple aspect ratios",
      "Slogan integration",
      "Instant download",
      "Commercial use rights",
      "No watermarks"
    ],
    "screenshot": "https://aitoolbox.software/mainOG.webp"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="w-full">
        <LogoGeneratorClient />

        <div className="container mx-auto px-4 py-16 text-gray-800">
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-6">Revolutionize Your Branding with AI</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                In today&apos;s competitive market, a strong brand identity is crucial. A professionally designed logo is the cornerstone of that identity, making your business memorable and recognizable. However, traditional logo design can be expensive and time-consuming. Our Free AI Logo Generator empowers you to bypass these hurdles, putting the power of advanced artificial intelligence at your fingertips. Create a unique, high-quality logo that truly represents your brand&apos;s vision—in seconds, not weeks.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-6">How Our AI Logo Generator Works</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Describe Your Vision</h3>
                  <p>Start by providing a detailed description of your desired logo. The more specific you are, the better the AI can understand your needs. Include details like your industry, preferred colors, style (e.g., modern, minimalist, vintage), and any specific icons or symbols you want to incorporate.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Choose Your Model & Aspect Ratio</h3>
                  <p>Select from a range of powerful AI models, each with a unique design specialty. Whether you need a classic square logo for social media profiles or a wide banner for your website header, our tool provides multiple aspect ratios to fit your needs perfectly.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Generate & Download</h3>
                  <p>With a single click, our AI gets to work, generating a selection of logos based on your input. Review the results, and once you&apos;ve found the perfect one, download it as a high-quality PNG file with a transparent background. All logos are free for commercial use, with no watermarks.</p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold text-center mb-6">Key Features of Our Free Logo Maker</h2>
              <ul className="list-disc list-inside space-y-3">
                <li className="text-lg"><strong className="font-semibold">Completely Free:</strong> No subscriptions, no hidden fees, and no watermarks. Generate and download unlimited logos for free.</li>
                <li className="text-lg"><strong className="font-semibold">Commercial Rights Included:</strong> Use your generated logo for any business purpose, from websites and business cards to merchandise and advertising.</li>
                <li className="text-lg"><strong className="font-semibold">High-Quality Output:</strong> Receive your logo as a high-resolution PNG file with a transparent background, perfect for any application.</li>
                <li className="text-lg"><strong className="font-semibold">No Design Skills Needed:</strong> You don&apos;t need to be a designer to create a beautiful logo. Our intuitive interface makes the process simple and fun.</li>
                <li className="text-lg"><strong className="font-semibold">Instantaneous Results:</strong> Why wait for a designer? Get professional logo concepts in seconds and accelerate your branding process.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
