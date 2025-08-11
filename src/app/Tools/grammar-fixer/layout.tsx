import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Grammar Fixer | AI Toolbox',
  description: 'Fix grammar, spelling and punctuation errors in your text.',
  openGraph: {
    title: 'AI Grammar Fixer | AI Toolbox',
    description: 'Fix grammar, spelling and punctuation errors in your text.',
    type: 'website',
  },
};

export default function GrammarFixerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 