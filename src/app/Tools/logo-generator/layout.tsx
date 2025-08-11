import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free AI Logo Generator - Create Professional Logos Online | AI Toolbox',
  description: 'Generate professional logos for free using AI. No design skills required. Create custom business logos with our free online AI logo generator. Download high-quality PNG logos instantly.',
  keywords: [
    'ai logo generator free',
    'free ai logo generator',
    'free online ai logo generator',
    'ai logo maker',
    'logo generator free',
    'ai logo generator free download',
    'ai logo generator free without watermark',
    'best free ai logo generator',
    'logo maker free',
    'business logo generator',
    'professional logo design',
    'custom logo creator',
    'brand identity generator',
    'logo design tool',
    'startup logo generator',
    'company logo maker',
    'free logo design online',
    'ai powered logo generator',
    'instant logo creator',
    'logo generator no watermark'
  ],
  authors: [{ name: 'AI Toolbox' }],
  creator: 'AI Toolbox',
  publisher: 'AI Toolbox',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aitoolbox.software'),
  alternates: {
    canonical: '/logo-generator',
  },
  openGraph: {
    title: 'Free AI Logo Generator - Create Professional Logos in Seconds',
    description: 'Generate stunning business logos for free using advanced AI. No design experience needed. Download high-quality logos instantly. Perfect for startups, small businesses, and entrepreneurs.',
    type: 'website',
    url: '/logo-generator',
    siteName: 'AI Toolbox',
    images: [
      {
        url: '/mainOG.webp',
        width: 1200,
        height: 630,
        alt: 'Free AI Logo Generator - AI Toolbox',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Logo Generator - Create Professional Logos Online',
    description: 'Generate beautiful business logos for free using AI. No design skills required. Download instantly.',
    images: ['/mainOG.webp'],
    creator: '@aitoolbox',
  },
  robots: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
  category: 'Design Tools',
  classification: 'Business Tool',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'AI Logo Generator',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#3b82f6',
    'theme-color': '#3b82f6',
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'AI Logo Generator',
  description: 'Free AI-powered logo generator that creates professional business logos instantly. No design skills required.',
  url: 'https://aitoolbox.software/logo-generator',
  applicationCategory: 'DesignApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  creator: {
    '@type': 'Organization',
    name: 'AI Toolbox',
    url: 'https://aitoolbox.software',
  },
  featureList: [
    'AI-powered logo generation',
    'Free to use',
    'No watermarks',
    'High-quality PNG downloads',
    'Multiple design styles',
    'Custom brand inputs',
    'Instant generation',
    'Commercial usage rights'
  ],
  keywords: 'ai logo generator, free logo maker, business logo design, brand identity, startup logo, professional logo',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '2547',
    bestRating: '5',
    worstRating: '1',
  },
};

export default function LogoGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
} 