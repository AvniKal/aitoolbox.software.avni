import { Metadata } from "next";
import BlogIdeaGeneratorClient from "./_components/blog-idea-generator-client";

export const metadata: Metadata = {
  title: "AI Blog Idea Generator - Never Run Out of Content Ideas",
  description: "Generate endless, engaging blog post ideas with our AI-powered tool. Perfect for bloggers, content creators, and marketers looking to maintain a consistent content calendar.",
  keywords: ["blog idea generator", "content ideas", "blog post topics", "AI content ideas", "blogging inspiration", "content calendar ideas", "article topics"],
  openGraph: {
    title: "AI Blog Idea Generator - Never Run Out of Content Ideas",
    description: "Generate endless, engaging blog post ideas with our AI-powered tool. Perfect for bloggers and content creators.",
  },
};

const blogCategories = [
  {
    title: "How-To Guides",
    description: "Step-by-step tutorials and educational content that solves specific problems.",
  },
  {
    title: "List Posts",
    description: "Curated lists that provide value through organization and insights.",
  },
  {
    title: "Case Studies",
    description: "In-depth analyses of real-world examples and success stories.",
  },
  {
    title: "Opinion Pieces",
    description: "Thought leadership and personal perspectives on industry trends.",
  },
  {
    title: "Product Reviews",
    description: "Comprehensive evaluations of products or services in your niche.",
  },
  {
    title: "Trend Analysis",
    description: "Insights into current and emerging trends in your industry.",
  },
];

export default function BlogIdeaGeneratorPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
            AI-Powered Blog Idea Generator
          </h1>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-center">
            Overcome writer's block with fresh, engaging blog post ideas.
            <br className="hidden sm:inline" /> Perfect for bloggers, marketers, and content creators.
          </p>
        </header>
        
        <main className="mb-12">
          <BlogIdeaGeneratorClient />
        </main>

        {/* Blog Categories */}
        <div className="grid gap-6 mb-10">
          <h2 className="text-2xl font-bold">Popular Blog Post Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogCategories.map((category, index) => (
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
            <li>Enter your niche, topic, or let the AI suggest trending subjects</li>
            <li>Select your preferred content type or angle (optional)</li>
            <li>Generate unique, engaging blog post ideas instantly</li>
            <li>Save your favorites and start writing</li>
          </ol>
        </div>

        {/* Blogging Tips */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Blogging Success Tips</h2>
          <ul className="space-y-4">
            <li>
              <strong>Know your audience:</strong> Tailor content to your readers' interests and pain points.
            </li>
            <li>
              <strong>Be consistent:</strong> Maintain a regular posting schedule to build audience loyalty.
            </li>
            <li>
              <strong>Optimize for SEO:</strong> Use relevant keywords naturally throughout your content.
            </li>
            <li>
              <strong>Engage with readers:</strong> Respond to comments and encourage discussion.
            </li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">How many blog ideas can I generate?</h3>
              <p className="text-muted-foreground mt-1">
                You can generate an unlimited number of blog ideas. Our AI is designed to provide fresh, unique suggestions every time.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Are these ideas SEO-friendly?</h3>
              <p className="text-muted-foreground mt-1">
                Yes, the ideas are generated with SEO in mind, but we recommend doing additional keyword research to optimize for search engines.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Can I save my favorite ideas?</h3>
              <p className="text-muted-foreground mt-1">
                While we don't have a built-in save feature, you can easily copy and save your favorite ideas to your preferred note-taking app or content calendar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}