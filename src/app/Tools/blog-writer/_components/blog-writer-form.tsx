"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

interface BlogWriterFormProps {
  onSubmit: (data: {
    topic: string;
    tone: string;
    length: string;
    targetAudience: string;
    additionalInfo: string;
  }) => void;
  isLoading: boolean;
}

export default function BlogWriterForm({ onSubmit, isLoading }: BlogWriterFormProps) {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("informative");
  const [length, setLength] = useState("medium");
  const [targetAudience, setTargetAudience] = useState("general");
  const [additionalInfo, setAdditionalInfo] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;
    
    onSubmit({
      topic,
      tone,
      length,
      targetAudience,
      additionalInfo
    });
  };

  const toneOptions = [
    { value: "informative", label: "Informative" },
    { value: "casual", label: "Casual" },
    { value: "formal", label: "Formal" },
    { value: "persuasive", label: "Persuasive" },
    { value: "entertaining", label: "Entertaining" },
    { value: "technical", label: "Technical" },
    { value: "conversational", label: "Conversational" }
  ];

  const lengthOptions = [
    { value: "short", label: "Short (300-500 words)" },
    { value: "medium", label: "Medium (500-800 words)" },
    { value: "long", label: "Long (800-1200 words)" },
    { value: "comprehensive", label: "Comprehensive (1200+ words)" }
  ];

  const audienceOptions = [
    { value: "general", label: "General" },
    { value: "beginners", label: "Beginners" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
    { value: "professionals", label: "Professionals" },
    { value: "students", label: "Students" },
    { value: "business", label: "Business" },
    { value: "technical", label: "Technical" }
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="topic" className="text-gray-700">Blog Topic</Label>
        <Input
          id="topic"
          placeholder="Enter your blog topic or title"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          disabled={isLoading}
          required
          className="border-gray-300 focus:border-gray-500 focus:ring-gray-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="tone" className="text-gray-700">Tone</Label>
          <Select
            value={tone}
            onValueChange={setTone}
            disabled={isLoading}
          >
            <SelectTrigger id="tone" className="w-full border-gray-300 focus:ring-gray-500 focus:border-gray-500">
              <SelectValue placeholder="Select tone" />
            </SelectTrigger>
            <SelectContent>
              {toneOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="length" className="text-gray-700">Length</Label>
          <Select
            value={length}
            onValueChange={setLength}
            disabled={isLoading}
          >
            <SelectTrigger id="length" className="w-full border-gray-300 focus:ring-gray-500 focus:border-gray-500">
              <SelectValue placeholder="Select length" />
            </SelectTrigger>
            <SelectContent>
              {lengthOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="targetAudience" className="text-gray-700">Target Audience</Label>
        <Select
          value={targetAudience}
          onValueChange={setTargetAudience}
          disabled={isLoading}
        >
          <SelectTrigger id="targetAudience" className="w-full border-gray-300 focus:ring-gray-500 focus:border-gray-500">
            <SelectValue placeholder="Select target audience" />
          </SelectTrigger>
          <SelectContent>
            {audienceOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="additionalInfo" className="text-gray-700">Additional Information (Optional)</Label>
        <Textarea
          id="additionalInfo"
          placeholder="Add any specific points, keywords, or requirements you want included in the blog post"
          className="min-h-[100px] resize-y border-gray-300 focus:border-gray-500 focus:ring-gray-500"
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
          disabled={isLoading}
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-gray-700 hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" 
        disabled={isLoading || !topic.trim()}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating...
          </>
        ) : (
          "Generate Blog"
        )}
      </Button>
    </form>
  );
} 