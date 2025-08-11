import { Metadata } from "next";
import IdeaGeneratorClient from "./_components/idea-generator-client";

export const metadata: Metadata = {
  title: "AI Idea Generator - Spark Your Next Big Project or Business",
  description: "Generate innovative ideas for startups, projects, content, and more with our AI-powered idea generator. Overcome creative blocks and discover new opportunities!",
  keywords: ["AI idea generator", "business ideas", "startup ideas", "creative brainstorming", "project ideas", "innovation generator", "idea validation"],
  openGraph: {
    title: "AI Idea Generator - Spark Your Next Big Project or Business",
    description: "Generate innovative ideas for startups, projects, content, and more with our AI-powered idea generator. Overcome creative blocks today!",
  },
};

const ideaCategories = [
  {
    title: "Business Startups",
    description: "Discover profitable business ideas with market potential and growth opportunities.",
  },
  {
    title: "Side Hustles",
    description: "Find low-investment side business ideas to earn extra income.",
  },
  {
    title: "App & Tech",
    description: "Generate innovative app concepts and technology solutions for modern problems.",
  },
  {
    title: "Content Creation",
    description: "Get fresh content ideas for blogs, videos, podcasts, and social media.",
  },
  {
    title: "Product Innovation",
    description: "Brainstorm new product ideas or improvements to existing ones.",
  },
  {
    title: "Non-Profit & Social Good",
    description: "Find meaningful project ideas that can make a positive impact.",
  },
];

export default function IdeaGeneratorPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
            AI-Powered Idea Generator
          </h1>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-center">
            Break through creative blocks and discover your next big idea.
            <br className="hidden sm:inline" /> Perfect for entrepreneurs, creators, and innovators.
          </p>
        </header>
        
        <main className="mb-12">
          <IdeaGeneratorClient />
        </main>

        {/* Idea Categories */}
        <div className="grid gap-6 mb-10">
          <h2 className="text-2xl font-bold">Idea Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ideaCategories.map((category, index) => (
              <div key={index} className="border p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-1">{category.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <ol className="list-decimal ml-5 space-y-3">
            <li>Select your area of interest or let the AI surprise you</li>
            <li>Choose any specific filters or constraints (optional)</li>
            <li>Click "Generate" to receive unique, creative ideas</li>
            <li>Save your favorite ideas or refine them further</li>
          </ol>
        </div>

        {/* Brainstorming Tips */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Brainstorming Tips</h2>
          <ul className="space-y-4">
            <li>
              <strong>Quantity over quality initially:</strong> Generate many ideas before evaluating them.
            </li>
            <li>
              <strong>Combine concepts:</strong> Merge different ideas to create something unique.
            </li>
            <li>
              <strong>Challenge assumptions:</strong> Question existing solutions to find new opportunities.
            </li>
            <li>
              <strong>Think about problems:</strong> The best ideas often solve real-world problems.
            </li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">How does the AI generate ideas?</h3>
              <p className="text-muted-foreground mt-1">
                Our AI analyzes patterns from successful ideas and combines them with current trends to generate unique, innovative concepts across various categories.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Can I use these ideas for commercial purposes?</h3>
              <p className="text-muted-foreground mt-1">
                Absolutely! The ideas generated are yours to use as you see fit. We recommend validating and refining any idea before investing significant resources.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">How can I improve the quality of the ideas?</h3>
              <p className="text-muted-foreground mt-1">
                For better results, be specific about your interests or industry. You can also use the refinement options to narrow down the scope or combine multiple generated ideas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
