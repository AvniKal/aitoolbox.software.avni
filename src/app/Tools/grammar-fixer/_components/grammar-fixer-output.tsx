"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Check, ClipboardCopy, AlertCircle } from "lucide-react";
import { GrammarFixerResult } from "./grammar-fixer-client";
import { toast } from "sonner";

interface GrammarFixerOutputProps {
  result: GrammarFixerResult | null;
  isLoading: boolean;
}

export default function GrammarFixerOutput({ result, isLoading }: GrammarFixerOutputProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!result?.correctedText) return;
    
    try {
      await navigator.clipboard.writeText(result.correctedText);
      setCopied(true);
      toast.success("Text copied to clipboard");
      
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
      toast.error("Failed to copy text to clipboard");
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "grammar":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      case "spelling":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "punctuation":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      case "clarity":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-[200px] w-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="flex flex-col items-center justify-center h-[200px] border border-dashed rounded-md p-6 text-center">
        <AlertCircle className="h-10 w-10 text-muted-foreground mb-2" />
        <h3 className="text-lg font-medium">No Text Analyzed Yet</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Enter your text and click &quot;Check Grammar&quot; to see corrections
        </p>
      </div>
    );
  }

  const hasCorrections = result.corrections && result.corrections.length > 0;

  return (
    <div className="space-y-4">
      <Tabs defaultValue="corrected" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="corrected">Corrected Text</TabsTrigger>
          <TabsTrigger value="corrections" disabled={!hasCorrections}>
            Corrections {hasCorrections ? `(${result.corrections.length})` : ""}
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="corrected" className="space-y-4 pt-4">
          <div className="relative">
            <div className="border rounded-md p-4 min-h-[200px] whitespace-pre-wrap">
              {result.correctedText}
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2"
              onClick={handleCopy}
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <ClipboardCopy className="h-4 w-4" />
              )}
              <span className="sr-only">Copy to clipboard</span>
            </Button>
          </div>
          
          {!hasCorrections && (
            <div className="flex items-center justify-center p-4 border rounded-md bg-green-50">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <p className="text-green-700">No grammar issues found in your text!</p>
            </div>
          )}

          <Button
            variant="outline"
            className="w-full"
            onClick={handleCopy}
          >
            {copied ? "Copied!" : "Copy Corrected Text"}
          </Button>
        </TabsContent>
        
        <TabsContent value="corrections" className="space-y-4 pt-4">
          {hasCorrections ? (
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                {result.corrections.length} {result.corrections.length === 1 ? "correction" : "corrections"} found
              </div>
              
              <div className="space-y-3">
                {result.corrections.map((correction, index) => (
                  <div key={index} className="border rounded-md p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className={getBadgeColor(correction.type)}>
                        {correction.type}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div className="p-2 bg-red-50 rounded text-sm">
                        <div className="font-medium text-red-800 mb-1">Original:</div>
                        <div className="text-red-700">{correction.original}</div>
                      </div>
                      <div className="p-2 bg-green-50 rounded text-sm">
                        <div className="font-medium text-green-800 mb-1">Corrected:</div>
                        <div className="text-green-700">{correction.corrected}</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 italic">
                      {correction.explanation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center p-4 border rounded-md">
              <p className="text-muted-foreground">No corrections needed</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}