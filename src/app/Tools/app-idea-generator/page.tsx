import { Metadata } from "next";
import AppIdeaGeneratorClient from "./_components/app-idea-generator-client";

export const metadata: Metadata = {
  title: "AI App Idea Generator - Discover Your Next Mobile App Concept",
  description: "Generate innovative mobile and web app ideas with our AI-powered tool. Perfect for developers, entrepreneurs, and product managers looking for their next project.",
  keywords: ["app idea generator", "mobile app ideas", "web app concepts", "AI app development", "startup app ideas", "next app to build", "tech project ideas"],
  openGraph: {
    title: "AI App Idea Generator - Discover Your Next Mobile App Concept",
    description: "Generate innovative mobile and web app ideas with our AI-powered tool. Perfect for developers and entrepreneurs.",
  },
};

const appCategories = [
  {
    title: "Productivity",
    description: "Tools and apps that help users be more efficient and organized.",
  },
  {
    title: "Health & Fitness",
    description: "Apps for tracking health metrics, workouts, and wellness goals.",
  },
  {
    title: "Social Networking",
    description: "Innovative platforms for connecting people with shared interests.",
  },
  {
    title: "Education",
    description: "Learning platforms and educational tools for all ages.",
  },
  {
    title: "Finance",
    description: "Apps for budgeting, investing, and managing personal finances.",
  },
  {
    title: "Entertainment",
    description: "Gaming, streaming, and other entertainment-focused applications.",
  },
];

export default function AppIdeaGeneratorPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <AppIdeaGeneratorClient />
        
        <div className="mt-12">
          {/* App Categories */}
          <div className="grid gap-6 mb-10">
            <h2 className="text-2xl font-bold">Popular App Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {appCategories.map((category, index) => (
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
              <li>Select your preferred app category or let the AI suggest one</li>
              <li>Choose any specific features or target platforms (optional)</li>
              <li>Generate unique, innovative app ideas instantly</li>
              <li>Refine and develop the concepts that excite you most</li>
            </ol>
          </div>

          {/* App Development Tips */}
          <div className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-bold mb-4">App Development Tips</h2>
            <ul className="space-y-4">
              <li>
                <strong>Start with a clear problem:</strong> The best apps solve specific pain points.
              </li>
              <li>
                <strong>Focus on user experience:</strong> Intuitive design is key to user retention.
              </li>
              <li>
                <strong>Validate your idea:</strong> Build an MVP and get user feedback early.
              </li>
              <li>
                <strong>Consider monetization:</strong> Plan your revenue model from the start.
              </li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg">How are these app ideas generated?</h3>
                <p className="text-muted-foreground mt-1">
                  Our AI analyzes current app market trends, user needs, and technological possibilities to generate unique and viable app concepts.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Are these ideas technically feasible?</h3>
                <p className="text-muted-foreground mt-1">
                  While we aim for feasibility, some ideas may require advanced technical skills or resources. Consider your own capabilities when evaluating ideas.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Can I use these ideas for commercial purposes?</h3>
                <p className="text-muted-foreground mt-1">
                  Yes, the ideas generated are yours to use as you see fit. However, we recommend validating the market potential before significant investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}