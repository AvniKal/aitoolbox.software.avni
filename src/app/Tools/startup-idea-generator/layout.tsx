import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Startup Idea Generator | AI Toolbox',
  description: 'Generate innovative startup ideas with AI assistance for any industry or market.',
  openGraph: {
    title: 'Startup Idea Generator | AI Toolbox',
    description: 'Generate innovative startup ideas with AI assistance for any industry or market.',
    type: 'website',
  },
  alternates: {
    canonical: '/startup-idea-generator',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'startup idea generator',
    'business idea generator',
    'AI startup ideas',
    'business concept generator',
    'startup inspiration',
    'business model generator',
    'entrepreneurship tool',
    'startup concept creator',
    'AI business ideas',
    'innovative startup concepts'
  ],
};

export default function StartupIdeaGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 