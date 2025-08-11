import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Lightbulb, Lock, RocketIcon } from "lucide-react";

export default function AboutResumeBuilder() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          Privacy-First Resume Builder
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Create professional resumes instantly. No signups, no data storage.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Lock className="w-6 h-6 text-primary" />
              <CardTitle>Why Use Our Builder?</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Unlike other resume builders, we{" "}
              <strong>never store your data</strong>. Your information stays on
              your device until you choose to download it.
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>No account required</li>
              <li>No hidden fees</li>
              <li>No data mining</li>
              <li>Works offline after first load</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-primary" />
              <CardTitle>Key Features</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Real-Time Preview</h3>
              <p className="text-sm text-muted-foreground">
                See changes instantly as you build your resume
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">ATS-Friendly</h3>
              <p className="text-sm text-muted-foreground">
                Optimized formats that pass applicant tracking systems
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Professional Formatting</h3>
              <p className="text-sm text-muted-foreground">
                Automatically formatted to industry standards with proper
                spacing and sections
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <RocketIcon className="w-6 h-6 text-primary" />
            <CardTitle>How It Works</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Fill Your Details",
                description: "Enter your information in our simple form",
              },
              {
                step: "2",
                title: "Preview Instantly",
                description: "See your resume update in real-time",
              },
              {
                step: "3",
                title: "Download & Apply",
                description: "Get your PDF with one click",
              },
            ].map((item) => (
              <div key={item.step} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    {item.step}
                  </div>
                  <h3 className="font-medium">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground pl-8">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
