import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ask AIToolbox | AI Toolbox',
  description: 'Chat with our advanced AI assistant powered by Pollinations.AI',
  openGraph: {
    title: 'Ask AIToolbox | AI Toolbox',
    description: 'Chat with our advanced AI assistant powered by Pollinations.AI',
    type: 'website',
  },
};

export default function ChatbotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 