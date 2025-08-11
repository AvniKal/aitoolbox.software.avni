import { Metadata } from "next";
import StartupIdeaGeneratorClient from "./_components/startup-idea-generator-client";

export const metadata: Metadata = {
  title: "AI Startup Idea Generator - Discover Your Next Business Venture",
  description: "Generate innovative, market-validated startup ideas with our AI-powered tool. Perfect for aspiring entrepreneurs and innovators looking for their next big opportunity.",
  keywords: ["startup idea generator", "business ideas", "startup opportunities", "entrepreneur ideas", "AI business ideas", "startup validation", "next big thing"],
  openGraph: {
    title: "AI Startup Idea Generator - Discover Your Next Business Venture",
    description: "Generate innovative, market-validated startup ideas with our AI-powered tool. Perfect for aspiring entrepreneurs and innovators.",
  },
};

const startupSectors = [
  {
    title: "Tech & SaaS",
    description: "Innovative software solutions and tech platforms for modern problems.",
  },
  {
    title: "E-commerce & D2C",
    description: "Direct-to-consumer brands and online retail innovations.",
  },
  {
    title: "Health & Wellness",
    description: "Solutions for physical, mental, and emotional well-being.",
  },
  {
    title: "Sustainability",
    description: "Eco-friendly and sustainable business ideas for a better future.",
  },
  {
    title: "Fintech",
    description: "Innovative financial services and technology solutions.",
  },
  {
    title: "EdTech",
    description: "Revolutionary approaches to education and learning.",
  },
];

export default function StartupIdeaGeneratorPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
            AI-Powered Startup Idea Generator
          </h1>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-center">
            Discover your next business opportunity with AI-powered startup ideas.
            <br className="hidden sm:inline" /> Perfect for aspiring entrepreneurs and innovators.
          </p>
        </header>
        
        <main className="mb-12">
          <StartupIdeaGeneratorClient />
        </main>

        {/* Startup Sectors */}
        <div className="grid gap-6 mb-10">
          <h2 className="text-2xl font-bold">Explore Startup Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {startupSectors.map((sector, index) => (
              <div key={index} className="border p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-1">{sector.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <ol className="list-decimal ml-5 space-y-3">
            <li>Select your areas of interest or let the AI surprise you</li>
            <li>Set any specific criteria like investment level or target market</li>
            <li>Generate unique, market-validated startup ideas</li>
            <li>Refine and develop the ideas that excite you most</li>
          </ol>
        </div>

        {/* Startup Success Tips */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Startup Success Tips</h2>
          <ul className="space-y-4">
            <li>
              <strong>Validate early:</strong> Test your idea with potential customers before building.
            </li>
            <li>
              <strong>Start small:</strong> Focus on a niche market before expanding.
            </li>
            <li>
              <strong>Solve real problems:</strong> The best startups address genuine pain points.
            </li>
            <li>
              <strong>Build a strong network:</strong> Connect with mentors and other entrepreneurs.
            </li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">How are these startup ideas generated?</h3>
              <p className="text-muted-foreground mt-1">
                Our AI analyzes market trends, successful startups, and emerging technologies to generate unique, viable business ideas with growth potential.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Are these ideas guaranteed to be successful?</h3>
              <p className="text-muted-foreground mt-1">
                No idea is guaranteed, but our AI focuses on market gaps and current trends. Success depends on execution, market conditions, and many other factors.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">How can I validate a startup idea?</h3>
              <p className="text-muted-foreground mt-1">
                Start by researching the market, talking to potential customers, creating a minimum viable product (MVP), and testing your assumptions with real users before full-scale development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}