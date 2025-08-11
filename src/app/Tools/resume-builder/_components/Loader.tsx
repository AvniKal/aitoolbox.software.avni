// components/Loader.tsx
"use client";

export default function Loader() {
  return (
    <div className="container mx-auto px-4 py-8 h-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm text-muted-foreground">Loading your resume...</p>
      </div>
    </div>
  );
}