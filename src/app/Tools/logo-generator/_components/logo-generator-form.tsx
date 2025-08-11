"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Wand2, Info } from "lucide-react";

interface LogoData {
  prompt: string;
  brandName: string;
  slogan?: string;
  industry?: string;
  style?: string;
  colors?: string;
  icon?: string;
  font?: string;
  shape?: string;
  competitors?: string;
  useCase?: string;
  emotion?: string;
  doNotInclude?: string;
}

interface LogoGeneratorFormProps {
  onGenerate: (data: LogoData) => void;
  isGenerating: boolean;
}

export function LogoGeneratorForm({ onGenerate, isGenerating }: LogoGeneratorFormProps) {
  const [formData, setFormData] = useState<LogoData>({
    prompt: "",
    brandName: "",
    slogan: "",
    industry: "",
    style: "",
    colors: "",
    icon: "",
    font: "",
    shape: "",
    competitors: "",
    useCase: "",
    emotion: "",
    doNotInclude: ""
  });

  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.brandName.trim()) {
      alert("Please enter a brand name");
      return;
    }
    onGenerate(formData);
  };

  const handleInputChange = (field: keyof LogoData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const industries = [
    "Technology", "Healthcare", "Finance", "Food & Beverage", "Education", 
    "Fitness", "Real Estate", "Legal", "Consulting", "Retail", "Fashion",
    "Travel", "Entertainment", "Automotive", "Construction", "Beauty",
    "Non-profit", "Gaming", "Agriculture", "Manufacturing"
  ];

  const styles = [
    "Modern", "Minimalist", "Vintage", "Playful", "Elegant", "Bold", 
    "Organic", "Corporate", "Creative", "Luxury", "Rustic", "Futuristic"
  ];

  const emotions = [
    "Trust", "Innovation", "Warmth", "Power", "Elegance", "Energy", 
    "Reliability", "Creativity", "Sophistication", "Friendliness"
  ];

  const useCases = [
    "Web", "Print", "Merchandise", "Social Media", "Business Cards", 
    "Signage", "Mobile App", "Packaging"
  ];

  const colorSuggestions = [
    "Blue", "Red", "Green", "Black", "Orange", "Purple", "Yellow", 
    "White", "Gray", "Brown", "Navy", "Teal", "Pink", "Gold"
  ];

  const fontTypes = [
    "Sans-serif", "Serif", "Script", "Display", "Monospace"
  ];

  const shapes = [
    "Circle", "Square", "Triangle", "Hexagon", "Oval", "Diamond"
  ];

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2 mb-2">
          <Wand2 className="w-5 h-5 text-blue-600" />
          <CardTitle className="text-xl">Logo Generator</CardTitle>
        </div>
        <CardDescription>
          Fill in the details below to generate your perfect logo. Only the brand name is required.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Essential Fields */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="brandName" className="text-sm font-medium flex items-center gap-2">
                Brand Name <Badge variant="destructive" className="text-xs">Required</Badge>
              </Label>
              <Input
                id="brandName"
                placeholder="Enter your brand or company name"
                value={formData.brandName}
                onChange={(e) => handleInputChange("brandName", e.target.value)}
                className="text-base"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry" className="text-sm font-medium">Industry</Label>
              <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry.toLowerCase()}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="style" className="text-sm font-medium">Design Style</Label>
              <Select value={formData.style} onValueChange={(value) => handleInputChange("style", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a design style" />
                </SelectTrigger>
                <SelectContent>
                  {styles.map((style) => (
                    <SelectItem key={style} value={style.toLowerCase()}>
                      {style}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="colors" className="text-sm font-medium">Primary Colors</Label>
              <Input
                id="colors"
                placeholder="e.g., blue, white or #1a73e8, #ffffff"
                value={formData.colors}
                onChange={(e) => handleInputChange("colors", e.target.value)}
              />
              <div className="flex flex-wrap gap-1 mt-2">
                {colorSuggestions.map((color) => (
                  <Badge
                    key={color}
                    variant="outline"
                    className="cursor-pointer text-xs hover:bg-gray-100"
                    onClick={() => {
                      const currentColors = formData.colors ? formData.colors.split(',').map(c => c.trim()) : [];
                      if (!currentColors.includes(color.toLowerCase())) {
                        const newColors = [...currentColors, color.toLowerCase()].join(', ');
                        handleInputChange("colors", newColors);
                      }
                    }}
                  >
                    {color}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Advanced Options Toggle */}
          <div className="pt-4 border-t">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="w-full justify-between"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Advanced Options
              </span>
              <span className="text-xs text-gray-500">
                {showAdvanced ? "Hide" : "Show"} ({showAdvanced ? "Less" : "More"} Control)
              </span>
            </Button>
          </div>

          {/* Advanced Fields */}
          {showAdvanced && (
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="slogan" className="text-sm font-medium">Slogan/Tagline</Label>
                <Input
                  id="slogan"
                  placeholder="Your brand&apos;s tagline (optional)"
                  value={formData.slogan}
                  onChange={(e) => handleInputChange("slogan", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="emotion" className="text-sm font-medium">Emotional Impact</Label>
                  <Select value={formData.emotion} onValueChange={(value) => handleInputChange("emotion", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Desired emotion" />
                    </SelectTrigger>
                    <SelectContent>
                      {emotions.map((emotion) => (
                        <SelectItem key={emotion} value={emotion.toLowerCase()}>
                          {emotion}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="useCase" className="text-sm font-medium">Primary Use</Label>
                  <Select value={formData.useCase} onValueChange={(value) => handleInputChange("useCase", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Where will it be used?" />
                    </SelectTrigger>
                    <SelectContent>
                      {useCases.map((useCase) => (
                        <SelectItem key={useCase} value={useCase.toLowerCase()}>
                          {useCase}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="font" className="text-sm font-medium">Typography Style</Label>
                  <Select value={formData.font} onValueChange={(value) => handleInputChange("font", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Font type" />
                    </SelectTrigger>
                    <SelectContent>
                      {fontTypes.map((font) => (
                        <SelectItem key={font} value={font.toLowerCase()}>
                          {font}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="shape" className="text-sm font-medium">Shape/Form</Label>
                  <Select value={formData.shape} onValueChange={(value) => handleInputChange("shape", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Logo shape" />
                    </SelectTrigger>
                    <SelectContent>
                      {shapes.map((shape) => (
                        <SelectItem key={shape} value={shape.toLowerCase()}>
                          {shape}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="icon" className="text-sm font-medium">Icon/Symbol</Label>
                <Input
                  id="icon"
                  placeholder="e.g., mountain, gear, leaf, arrow (optional)"
                  value={formData.icon}
                  onChange={(e) => handleInputChange("icon", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="competitors" className="text-sm font-medium">Similar Brands</Label>
                <Input
                  id="competitors"
                  placeholder="Brands with similar style (for reference)"
                  value={formData.competitors}
                  onChange={(e) => handleInputChange("competitors", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="doNotInclude" className="text-sm font-medium">Avoid These Elements</Label>
                <Textarea
                  id="doNotInclude"
                  placeholder="Elements to avoid (e.g., specific colors, symbols, styles)"
                  value={formData.doNotInclude}
                  onChange={(e) => handleInputChange("doNotInclude", e.target.value)}
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="prompt" className="text-sm font-medium">Custom Instructions</Label>
                <Textarea
                  id="prompt"
                  placeholder="Any additional specific requirements or creative direction"
                  value={formData.prompt}
                  onChange={(e) => handleInputChange("prompt", e.target.value)}
                  rows={3}
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-6 border-t">
            <Button
              type="submit"
              disabled={isGenerating || !formData.brandName.trim()}
              className="w-full h-12 text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {isGenerating ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Generating Your Logo...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Generate Logo
                </div>
              )}
            </Button>
          </div>

          {/* Helper Text */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="space-y-1">
                <p className="text-sm font-medium text-blue-800">
                  💡 Pro Tips for Better Results
                </p>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• Be specific about your industry for better design context</li>
                  <li>• Choose colors that align with your brand personality</li>
                  <li>• Consider where you&apos;ll use the logo most (web, print, etc.)</li>
                  <li>• Use advanced options for more personalized results</li>
                </ul>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
} 