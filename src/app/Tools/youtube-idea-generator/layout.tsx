import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YouTube Video Idea Generator | AI Toolbox',
  description: 'Generate creative YouTube video ideas for any niche or topic with AI assistance.',
  openGraph: {
    title: 'YouTube Video Idea Generator | AI Toolbox',
    description: 'Generate creative YouTube video ideas for any niche or topic with AI assistance.',
    type: 'website',
  },
  alternates: {
    canonical: '/youtube-idea-generator',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'youtube video ideas',
    'youtube content ideas',
    'video content generator',
    'youtube title ideas',
    'youtube video inspiration',
    'content creator tools',
    'youtube channel ideas',
    'video topic generator',
    'AI youtube ideas',
    'youtube content strategy'
  ],
};

export default function YouTubeIdeaGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 