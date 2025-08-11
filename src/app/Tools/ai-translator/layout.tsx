import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Translator | AI Toolbox',
  description: 'Translate text between multiple languages with AI-powered accuracy.',
  openGraph: {
    title: 'AI Translator | AI Toolbox',
    description: 'Translate text between multiple languages with AI-powered accuracy.',
    type: 'website',
  },
};

export default function TranslatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 