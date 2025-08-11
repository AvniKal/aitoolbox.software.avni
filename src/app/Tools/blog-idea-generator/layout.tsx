import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Blog Post Idea Generator | AI Toolbox',
  description: 'Generate engaging blog post ideas and titles for any topic or niche with AI.',
  openGraph: {
    title: 'AI Blog Post Idea Generator | AI Toolbox',
    description: 'Generate engaging blog post ideas and titles for any topic or niche with AI.',
    type: 'website',
  },
};

export default function BlogIdeaGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 