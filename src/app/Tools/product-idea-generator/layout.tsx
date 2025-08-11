import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Product Idea Generator | AI Toolbox',
  description: 'Generate innovative business and product ideas for any market or industry with AI.',
  openGraph: {
    title: 'AI Product Idea Generator | AI Toolbox',
    description: 'Generate innovative business and product ideas for any market or industry with AI.',
    type: 'website',
  },
};

export default function ProductIdeaGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 