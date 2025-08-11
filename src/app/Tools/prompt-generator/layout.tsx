import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free AI Prompt Generator & Optimizer | Unlimited No Login | AI Toolbox',
  description: 'Generate optimized AI prompts for ChatGPT, Claude, Gemini, and more. Transform basic prompts into powerful, professional instructions. No sign-up required - completely free and unlimited.',
  keywords: [
    'free ai prompt generator',
    'ai prompt optimizer',
    'prompt engineering tool',
    'chatgpt prompt generator',
    'claude prompt generator',
    'gemini prompt generator',
    'ai prompt enhancer',
    'prompt engineering',
    'professional ai prompts',
    'system prompts',
    'user prompts',
    'unlimited prompt generator',
    'no login prompt tool',
    'best ai prompt generator',
    'prompt optimization'
  ],
  authors: [{ name: 'AIToolbox' }],
  creator: 'AIToolbox',
  robots: 'index, follow',
  alternates: {
    canonical: '/prompt-generator',
  },
  openGraph: {
    title: 'Free AI Prompt Generator & Optimizer | Unlimited No Login | AI Toolbox',
    description: 'Generate optimized AI prompts for ChatGPT, Claude, Gemini, and more. Transform basic prompts into powerful, professional instructions. No sign-up required.',
    url: 'https://aitoolbox.software/prompt-generator',
    siteName: 'AIToolbox',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'AIToolbox - Free AI Prompt Generator & Optimizer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Prompt Generator & Optimizer | Unlimited No Login | AI Toolbox',
    description: 'Generate optimized AI prompts for ChatGPT, Claude, Gemini, and more. Completely free, unlimited, and no login required.',
    images: ['/logo.png'],
  },
};

export default function PromptGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 