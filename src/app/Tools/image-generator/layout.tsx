import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free AI Image & Photo Generator | AIToolbox",
  description:
    "Generate stunning AI-powered images and photos for free. Simply enter a text prompt and our AI image generator will create high-quality visuals at no cost.",
  keywords: [
    "free ai image generator",
    "ai photo generator",
    "ai image creator",
    "generate images free",
    "text to image",
    "no cost ai tools",
    "aitoolbox image generator",
  ],
  authors: [{ name: "AIToolbox" }],
  creator: "AIToolbox",
  robots: "index, follow",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "/image-generator",
  },
  openGraph: {
    title: "Free AI Image & Photo Generator | AIToolbox",
    description:
      "Create photorealistic, digital art, cartoon, fantasy images and more — completely free with our AI image generator.",
    url: "https://aitoolbox.software/image-generator",
    siteName: "AIToolbox",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "AIToolbox – Free AI Image Generator",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Image & Photo Generator | AIToolbox",
    description:
      "Generate stunning images & photos for free with our AI image generator. No cost and unlimited usage.",
    images: ["/logo.png"],
  },
};

export default function ImageGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 