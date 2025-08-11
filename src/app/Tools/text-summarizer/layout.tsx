import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Text Summarizer | AI Toolbox',
  description: 'Compress lengthy text into concise summaries.',
  openGraph: {
    title: 'AI Text Summarizer | AI Toolbox',
    description: 'Compress lengthy text into concise summaries.',
    type: 'website',
  },
};

export default function TextSummarizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 