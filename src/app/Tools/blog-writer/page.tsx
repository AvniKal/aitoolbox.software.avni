import { Metadata } from "next";
import BlogWriterClient from "./_components/blog-writer-client";

export const metadata: Metadata = {
  title: "AI Blog Writer - Create High-Quality Blog Posts in Minutes",
  description: "Generate engaging, SEO-optimized blog posts with our AI blog writer. Perfect for content creators, marketers, and businesses. No writing experience needed!",
  keywords: ["AI blog writer", "blog post generator", "content creation tool", "SEO blog writer", "AI content writer", "blog post ideas", "article generator"],
  openGraph: {
    title: "AI Blog Writer - Create High-Quality Blog Posts in Minutes",
    description: "Generate engaging, SEO-optimized blog posts with our AI blog writer. Perfect for content creators, marketers, and businesses.",
  },
};

const blogUseCases = [
  {
    title: "Content Marketers",
    description: "Create consistent, high-quality content that drives traffic and engagement.",
  },
  {
    title: "Small Business Owners",
    description: "Maintain an active blog to attract and engage customers without the writing hassle.",
  },
  {
    title: "SEO Specialists",
    description: "Generate SEO-optimized content that ranks well in search engines.",
  },
  {
    title: "Agencies",
    description: "Scale your content production while maintaining quality and consistency.",
  },
  {
    title: "Freelance Writers",
    description: "Overcome writer's block and increase your writing productivity.",
  },
  {
    title: "E-commerce Stores",
    description: "Create product descriptions and blog content that converts visitors into customers.",
  },
];

export default function BlogWriterPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
            AI-Powered Blog Writer
          </h1>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-center">
            Create compelling, SEO-optimized blog posts in minutes.
            <br className="hidden sm:inline" /> Perfect for content creators, marketers, and businesses.
          </p>
        </header>
        
        <main className="mb-12">
          <BlogWriterClient />
        </main>

        {/* Use Cases */}
        <div className="grid gap-6 mb-10">
          <h2 className="text-2xl font-bold">Who Can Benefit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogUseCases.map((useCase, index) => (
              <div key={index} className="border p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-1">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <ol className="list-decimal ml-5 space-y-3">
            <li>Enter your blog topic or let our AI suggest trending ideas</li>
            <li>Select your preferred tone, style, and target audience</li>
            <li>Generate a complete, well-structured blog post in seconds</li>
            <li>Edit, refine, and customize the content to match your voice</li>
          </ol>
        </div>

        {/* Writing Tips */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Blog Writing Tips</h2>
          <ul className="space-y-4">
            <li>
              <strong>Start with a strong headline:</strong> Capture attention with clear, benefit-driven titles.
            </li>
            <li>
              <strong>Use proper structure:</strong> Break content into scannable sections with subheadings.
            </li>
            <li>
              <strong>Incorporate keywords naturally:</strong> Optimize for SEO without keyword stuffing.
            </li>
            <li>
              <strong>Add visuals and examples:</strong> Enhance engagement with relevant images and real-world examples.
            </li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">Is the AI blog writer free to use?</h3>
              <p className="text-muted-foreground mt-1">
                Yes! Our basic blog writing features are completely free. We may offer premium features in the future, but core functionality will remain accessible.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Can I customize the generated content?</h3>
              <p className="text-muted-foreground mt-1">
                Absolutely! The AI generates a first draft that you can edit, refine, and customize to match your unique voice and style.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">How does the AI ensure content quality?</h3>
              <p className="text-muted-foreground mt-1">
                Our AI is trained on high-quality content and follows best practices for readability, SEO, and engagement. However, we always recommend reviewing and personalizing the content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
