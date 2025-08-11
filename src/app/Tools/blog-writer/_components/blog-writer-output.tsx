"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Check, ClipboardCopy, AlertCircle, FileText, List, Tag, Info } from "lucide-react";
import { BlogWriterResult } from "./blog-writer-client";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";

interface BlogWriterOutputProps {
  result: BlogWriterResult | null;
  isLoading: boolean;
}

export default function BlogWriterOutput({ result, isLoading }: BlogWriterOutputProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("Content copied to clipboard");
      
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
      toast.error("Failed to copy content to clipboard");
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-3/4 bg-gray-200" />
        <Skeleton className="h-[400px] w-full bg-gray-200" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-3/4 bg-gray-200" />
          <Skeleton className="h-4 w-1/2 bg-gray-200" />
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="flex flex-col items-center justify-center h-[400px] border border-dashed border-gray-300 rounded-md p-6 text-center">
        <AlertCircle className="h-10 w-10 text-gray-400 mb-2" />
        <h3 className="text-lg font-medium text-gray-700">No Blog Generated Yet</h3>
        <p className="text-sm text-gray-500 mt-1">
          Fill out the form and click &quot;Generate Blog&quot; to create your content
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gray-100">
          <TabsTrigger value="content" className="text-gray-700 data-[state=active]:bg-gray-200 data-[state=active]:text-gray-900">
            <FileText className="h-4 w-4 mr-2 text-gray-600" />
            Content
          </TabsTrigger>
          <TabsTrigger value="outline" className="text-gray-700 data-[state=active]:bg-gray-200 data-[state=active]:text-gray-900">
            <List className="h-4 w-4 mr-2 text-gray-600" />
            Outline
          </TabsTrigger>
          <TabsTrigger value="keywords" className="text-gray-700 data-[state=active]:bg-gray-200 data-[state=active]:text-gray-900">
            <Tag className="h-4 w-4 mr-2 text-gray-600" />
            Keywords
          </TabsTrigger>
          <TabsTrigger value="meta" className="text-gray-700 data-[state=active]:bg-gray-200 data-[state=active]:text-gray-900">
            <Info className="h-4 w-4 mr-2 text-gray-600" />
            Meta
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="content" className="space-y-4 pt-4">
          <div className="relative">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{result.title}</h2>
            <div className="prose prose-sm max-w-none">
              {result.content.split('\n\n').map((paragraph, index) => {
                // Check if the paragraph is a heading (starts with # or ##)
                if (paragraph.startsWith('# ')) {
                  return <h2 key={index} className="text-xl font-bold mt-4 mb-2">{paragraph.substring(2)}</h2>;
                } else if (paragraph.startsWith('## ')) {
                  return <h3 key={index} className="text-lg font-bold mt-3 mb-2">{paragraph.substring(3)}</h3>;
                } else if (paragraph.startsWith('### ')) {
                  return <h4 key={index} className="text-md font-bold mt-2 mb-1">{paragraph.substring(4)}</h4>;
                } else {
                  return <p key={index} className="mb-4">{paragraph}</p>;
                }
              })}
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 text-gray-600 hover:bg-gray-100"
              onClick={() => handleCopy(result.content)}
            >
              {copied ? (
                <Check className="h-4 w-4 text-gray-700" />
              ) : (
                <ClipboardCopy className="h-4 w-4 text-gray-600" />
              )}
              <span className="sr-only">Copy to clipboard</span>
            </Button>
          </div>

          <Button
            variant="outline"
            className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
            onClick={() => handleCopy(result.content)}
          >
            {copied ? "Copied!" : "Copy Blog Content"}
          </Button>
        </TabsContent>
        
        <TabsContent value="outline" className="pt-4">
          <Card className="border-gray-200">
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Blog Outline</h3>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                {result.outline.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="keywords" className="pt-4">
          <Card className="border-gray-200">
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">SEO Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {result.keywords.map((keyword, index) => (
                  <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="meta" className="pt-4">
          <Card className="border-gray-200">
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Meta Description</h3>
              <div className="border border-gray-200 rounded-md p-4 bg-gray-50">
                <p className="text-sm text-gray-700">{result.metaDescription}</p>
                <div className="text-xs text-gray-500 mt-2">
                  {result.metaDescription.length} characters 
                  {result.metaDescription.length > 160 && 
                    <span className="text-red-500"> (exceeds 160 character limit)</span>
                  }
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}