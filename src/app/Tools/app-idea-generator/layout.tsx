import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Mobile App Idea Generator | AI Toolbox',
  description: 'Generate innovative mobile app ideas and concepts for any platform or purpose.',
  openGraph: {
    title: 'AI Mobile App Idea Generator | AI Toolbox',
    description: 'Generate innovative mobile app ideas and concepts for any platform or purpose.',
    type: 'website',
  },
};

export default function AppIdeaGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 