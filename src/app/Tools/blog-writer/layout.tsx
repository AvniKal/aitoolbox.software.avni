import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Blog Writer | AI Toolbox',
  description: 'Create engaging blog articles with AI assistance.',
  openGraph: {
    title: 'AI Blog Writer | AI Toolbox',
    description: 'Create engaging blog articles with AI assistance.',
    type: 'website',
  },
};

export default function BlogWriterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 