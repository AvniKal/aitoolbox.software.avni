import TextSummarizerClient from "./_components/text-summarizer-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Text Summarizer - Summarize Articles & Documents Instantly",
  description:
    "Generate concise, accurate summaries of long-form content with our AI-powered text summarizer. Save time and grasp key insights quickly.",
};

export default function TextSummarizerPage() {
  const features = [
    "Save hours of reading time with instant summaries",
    "Improve comprehension of complex documents",
    "Enhance productivity in research and content creation",
    "Get customizable summary lengths for different needs",
    "Free online access with no sign-up required",
  ];

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            AI Text Summarizer
          </h1>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Compress lengthy text into concise summaries while preserving key
            information. Free online AI text summarization tool for articles,
            reports, and more.
          </p>
        </header>

        <main className="mb-12">
          <TextSummarizerClient />
        </main>

        <section className="prose max-w-none mb-8">
          <h2 className="text-2xl font-bold mb-4">
            About Our Free AI Text Summarizer Tool
          </h2>
          <p>
            In today's information-overloaded world, the ability to quickly distill key insights from lengthy texts is invaluable. Our AI Text
            Summarizer is a free online tool that helps you create concise summaries of articles, reports, research papers, and more. Whether you're
            a student, researcher, or professional, this AI-powered summary generator saves time while preserving essential information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Why Use Our AI Summary Generator?
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            How Our AI Text Summarizer Works
          </h2>
          <p>
            Our advanced AI summary tool uses cutting-edge natural language processing (NLP) and machine learning algorithms to analyze your text. It
            identifies main ideas, key arguments, and supporting details, then reconstructs them into a coherent, shorter version. This free AI text
            summarizer processes content in seconds, making it the best choice for quick, accurate summarization.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">
            Best Practices for Effective Text Summarization
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Input clean, well-structured text for optimal results</li>
            <li>Choose the appropriate summary length based on your needs</li>
            <li>Review the generated summary and cross-reference with original text</li>
            <li>Use for initial understanding, not as a replacement for full reading</li>
            <li>Combine with other AI tools for comprehensive content analysis</li>
          </ol>
        </section>
      </div>
    </div>
  );
}
