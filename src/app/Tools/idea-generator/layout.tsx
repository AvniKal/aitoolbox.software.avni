import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Idea Generator | Free Creative Ideas for Business, Startups & Projects | AI Toolbox',
  description: 'Generate innovative ideas for startups, business, apps, YouTube channels, and projects with AI. Get creative inspiration for any topic with our free AI-powered idea generator.',
  keywords: [
    'ai idea generator',
    'startup ideas',
    'business ideas', 
    'app ideas',
    'youtube video ideas',
    'project ideas',
    'creative ideas',
    'ai brainstorming',
    'innovation generator',
    'free idea generator'
  ],
  authors: [{ name: 'AIToolbox' }],
  creator: 'AIToolbox',
  robots: 'index, follow',
  alternates: {
    canonical: '/idea-generator',
  },
  openGraph: {
    title: 'AI Idea Generator | Free Creative Ideas Generator | AI Toolbox',
    description: 'Generate unlimited creative ideas for startups, businesses, apps, and projects. Free AI-powered idea generation for any topic or industry.',
    url: 'https://aitoolbox.software/idea-generator',
    siteName: 'AIToolbox',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'AIToolbox - AI Idea Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Idea Generator | Free Creative Ideas | AI Toolbox',
    description: 'Generate innovative startup, business, and project ideas with AI. Free and unlimited creative inspiration.',
    images: ['/logo.png'],
  },
};

export default function IdeaGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 