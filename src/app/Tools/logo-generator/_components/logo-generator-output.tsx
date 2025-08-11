"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Download, 
  Sparkles, 
  Loader2, 
  AlertCircle, 
  CheckCircle, 
  Share2, 
  RotateCcw,
  Star,
  Palette,
  Zap
} from "lucide-react";
import Image from "next/image";

interface LogoGeneratorOutputProps {
  logo: string | null;
  isGenerating: boolean;
  error: string | null;
}

export function LogoGeneratorOutput({ logo, isGenerating, error }: LogoGeneratorOutputProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleDownload = async () => {
    if (!logo) return;

    setIsDownloading(true);
    try {
      // Create a link element and trigger download
      const link = document.createElement('a');
      link.href = logo;
      link.download = `logo-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDownloadComplete(true);
      setTimeout(() => setDownloadComplete(false), 3000);
    } catch (err) {
      console.error('Download failed:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShare = async () => {
    if (!logo) return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My AI Generated Logo',
          text: 'Check out this logo I created with AI!',
          url: logo
        });
      } catch (err) {
        console.error('Share failed:', err);
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(logo);
        alert('Logo URL copied to clipboard!');
      } catch (err) {
        console.error('Copy failed:', err);
      }
    }
  };

  if (isGenerating) {
    return (
      <Card className="w-full h-[500px] flex items-center justify-center">
        <CardContent className="text-center space-y-6">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
            <Sparkles className="w-6 h-6 text-blue-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">
              Creating Your Logo...
            </h3>
            <p className="text-sm text-gray-600 max-w-sm mx-auto">
              Our AI is analyzing your requirements and crafting the perfect logo design. This usually takes 30-60 seconds.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Loader2 className="w-3 h-3 animate-spin" />
              <span>Processing...</span>
            </div>
            <div className="flex items-center gap-1">
              <Palette className="w-3 h-3" />
              <span>Designing...</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap className="w-3 h-3" />
              <span>Optimizing...</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full">
        <CardContent className="p-6">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="ml-2">
              <strong>Generation Failed:</strong> {error}
            </AlertDescription>
          </Alert>
          
          <div className="mt-4 text-center space-y-3">
            <p className="text-sm text-gray-600">
              Don&apos;t worry! Here are some things you can try:
            </p>
            <ul className="text-xs text-gray-500 space-y-1 text-left max-w-sm mx-auto">
              <li>• Make sure your brand name is clear and specific</li>
              <li>• Try simplifying your requirements</li>
              <li>• Check your internet connection</li>
              <li>• Wait a moment and try again</li>
            </ul>
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-3"
              onClick={() => window.location.reload()}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (logo) {
    return (
      <Card className="w-full">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>Your Logo is Ready!</span>
            </CardTitle>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              <Star className="w-3 h-3 mr-1" />
              Generated
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Logo Preview */}
          <div className="relative bg-gradient-to-br from-gray-50 to-white border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
            <div className="relative inline-block">
              <Image
                src={logo}
                alt="Generated Logo"
                width={300}
                height={300}
                className="max-w-full h-auto max-h-64 object-contain mx-auto"
                style={{ imageRendering: 'crisp-edges' }}
              />
              
              {/* Watermark overlay - can be removed */}
              <div className="absolute top-2 right-2">
                <Badge variant="outline" className="text-xs bg-white/90">
                  AI Generated
                </Badge>
              </div>
            </div>
          </div>

          {/* Logo Preview Variants */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white border rounded p-3 text-center">
              <Image
                src={logo}
                alt="Logo on white"
                width={80}
                height={80}
                className="w-full h-16 object-contain"
              />
              <p className="text-xs text-gray-500 mt-1">White</p>
            </div>
            <div className="bg-gray-900 border rounded p-3 text-center">
              <Image
                src={logo}
                alt="Logo on dark"
                width={80}
                height={80}
                className="w-full h-16 object-contain"
              />
              <p className="text-xs text-white mt-1">Dark</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 border rounded p-3 text-center">
              <Image
                src={logo}
                alt="Logo on color"
                width={80}
                height={80}
                className="w-full h-16 object-contain"
              />
              <p className="text-xs text-white mt-1">Color</p>
            </div>
          </div>

          {/* Download Actions */}
          <div className="space-y-3 pt-4 border-t">
            <Button
              onClick={handleDownload}
              disabled={isDownloading || downloadComplete}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
              size="lg"
            >
              {isDownloading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Downloading...
                </div>
              ) : downloadComplete ? (
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Downloaded!
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download High Quality PNG
                </div>
              )}
            </Button>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="flex-1"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.location.reload()}
                className="flex-1"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Generate New
              </Button>
            </div>
          </div>

          {/* Usage Rights Info */}
          <Alert>
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription>
              <strong>Commercial Use Allowed:</strong> You can use this logo for your business, 
              website, marketing materials, and more. No attribution required.
            </AlertDescription>
          </Alert>

          {/* Tips for Usage */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-800 text-sm mb-2">
              💡 Tips for Using Your Logo
            </h4>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>• Save multiple copies in different formats (PNG, SVG, JPG)</li>
              <li>• Test how it looks at different sizes (favicon to billboard)</li>
              <li>• Ensure it works well in both color and black & white</li>
              <li>• Consider creating variations for different use cases</li>
              <li>• Use consistent spacing and sizing across all materials</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Default empty state
  return (
    <Card className="w-full h-[500px] flex items-center justify-center">
      <CardContent className="text-center space-y-4">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
          <Sparkles className="w-12 h-12 text-gray-400" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-600">
            Ready to Create Your Logo?
          </h3>
          <p className="text-sm text-gray-500 max-w-sm mx-auto">
            Fill in your brand details on the left and click &quot;Generate Logo&quot; to see your AI-created logo appear here.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <Zap className="w-3 h-3" />
            <span>Fast Generation</span>
          </div>
          <div className="flex items-center gap-1">
            <Download className="w-3 h-3" />
            <span>Free Download</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            <span>Commercial Use</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 