import { ResumeProvider } from "@/contexts/resume-context";
import Head from "next/head";

export default function ResumeBuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>AI-Powered Resume Builder | Create Professional Resumes</title>
        <meta
          name="description"
          content="Free online resume builder with AI optimization. Create ATS-friendly resumes in minutes. Download as PDF or share directly with employers."
        />
        <meta
          name="keywords"
          content="resume builder, CV creator, professional resume, ATS resume, job application, AI resume helper"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="AI Resume Builder - Create Perfect Job Applications"
        />
        <meta
          property="og:description"
          content="Build interview-winning resumes with our free AI-powered tool"
        />
      </Head>

      <div className="sr-only" aria-hidden="true">
        <h1>Free Online Resume Builder</h1>
        <h2>Create Professional Resumes in Minutes</h2>
        <p>
          Our AI-powered resume builder helps you create perfect, ATS-optimized
          resumes for your job applications. With smart suggestions and
          professional templates, you can:
        </p>
        <ul>
          <li>Generate customized resumes in PDF format</li>
          <li>Get AI-powered content improvements</li>
          <li>Optimize for Applicant Tracking Systems</li>
          <li>Choose from multiple professional designs</li>
          <li>Save and edit your resumes anytime</li>
        </ul>
        <h3>How It Works</h3>
        <ol>
          <li>Enter your personal and professional information</li>
          <li>Our AI suggests powerful resume content</li>
          <li>Customize the design and layout</li>
          <li>Download as PDF or share directly</li>
        </ol>
        <p>
          Trusted by thousands of job seekers worldwide. Create your perfect
          resume today - no signup required!
        </p>
      </div>

      {/* Client-side interactive part */}
      <ResumeProvider>{children}</ResumeProvider>
    </>
  );
}