"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

interface GrammarFixerFormProps {
  onSubmit: (data: { text: string; level: string }) => void;
  isLoading: boolean;
}

export default function GrammarFixerForm({ onSubmit, isLoading }: GrammarFixerFormProps) {
  const [text, setText] = useState("");
  const [level, setLevel] = useState("standard");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit({ text, level });
  };

  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setText(clipboardText);
    } catch (error) {
      console.error("Failed to read clipboard:", error);
    }
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="text">Your Text</Label>
        <Textarea
          id="text"
          placeholder="Enter or paste your text here to check for grammar, spelling, and punctuation errors..."
          className="min-h-[200px] resize-y"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <Button 
          type="button" 
          variant="outline" 
          size="sm" 
          onClick={handlePaste}
          disabled={isLoading}
        >
          Paste from Clipboard
        </Button>
        <Button 
          type="button" 
          variant="outline" 
          size="sm" 
          onClick={handleClear}
          disabled={isLoading || !text}
        >
          Clear
        </Button>
        <div className="text-xs text-muted-foreground ml-auto">
          {text.length} characters
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="level">Correction Level</Label>
        <Select
          value={level}
          onValueChange={setLevel}
          disabled={isLoading}
        >
          <SelectTrigger id="level" className="w-full">
            <SelectValue placeholder="Select correction level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light (Grammar & Spelling Only)</SelectItem>
            <SelectItem value="standard">Standard (Grammar, Spelling & Punctuation)</SelectItem>
            <SelectItem value="thorough">Thorough (Grammar, Spelling, Punctuation & Style)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button 
        type="submit" 
        className="w-full" 
        disabled={isLoading || !text.trim()}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Checking...
          </>
        ) : (
          "Check Grammar"
        )}
      </Button>
    </form>
  );
} 