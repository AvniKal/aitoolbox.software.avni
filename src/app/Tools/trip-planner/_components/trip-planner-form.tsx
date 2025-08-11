"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, MapPin, Calendar, DollarSign, Heart, FileText, Plane, User, Settings } from "lucide-react";

interface TripPlannerFormProps {
  onSubmit: (data: {
    destination: string;
    duration: string;
    budget: string;
    interests: string[];
    additionalInfo: string;
  }) => void;
  isLoading: boolean;
}

export default function TripPlannerForm({ onSubmit, isLoading }: TripPlannerFormProps) {
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [budget, setBudget] = useState("moderate");
  const [interests, setInterests] = useState<string[]>([]);
  const [additionalInfo, setAdditionalInfo] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination.trim() || !duration.trim()) return;
    
    onSubmit({
      destination,
      duration,
      budget,
      interests,
      additionalInfo
    });
  };

  const handleInterestChange = (interest: string) => {
    setInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const budgetOptions = [
    { value: "budget", label: "Budget ($0-50/day)" },
    { value: "moderate", label: "Moderate ($50-150/day)" },
    { value: "comfortable", label: "Comfortable ($150-300/day)" },
    { value: "luxury", label: "Luxury ($300+/day)" }
  ];

  const interestOptions = [
    "Adventure",
    "Culture",
    "Food",
    "History",
    "Nature",
    "Shopping",
    "Nightlife",
    "Art",
    "Architecture",
    "Museums",
    "Beaches",
    "Mountains"
  ];

  return (
    <Card className="rounded-none border-0 shadow-none">
      <CardContent className="p-4 pt-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="destination" className="text-base flex items-center gap-2">
              <MapPin className="h-4 w-4 text-zinc-500" />
              Destination
            </Label>
            <Input
              id="destination"
              placeholder="Enter your destination (e.g., Paris, France)"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              disabled={isLoading}
              required
              className="rounded-none text-base"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="duration" className="text-base flex items-center gap-2">
                <Calendar className="h-4 w-4 text-zinc-500" />
                Duration
              </Label>
              <Input
                id="duration"
                placeholder="Number of days (e.g., 5)"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                disabled={isLoading}
                required
                className="rounded-none text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget" className="text-base flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-zinc-500" />
                Budget Range
              </Label>
              <Select
                value={budget}
                onValueChange={setBudget}
                disabled={isLoading}
              >
                <SelectTrigger id="budget" className="w-full rounded-none text-sm">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent className="rounded-none">
                  {budgetOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-base flex items-center gap-2">
              <Heart className="h-4 w-4 text-zinc-500" />
              Travel Interests
            </Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {interestOptions.map((interest) => (
                <div
                  key={interest}
                  className="flex items-center space-x-2"
                >
                  <Checkbox
                    id={`interest-${interest}`}
                    checked={interests.includes(interest)}
                    onCheckedChange={() => handleInterestChange(interest)}
                    disabled={isLoading}
                  />
                  <Label
                    htmlFor={`interest-${interest}`}
                    className="text-sm cursor-pointer"
                  >
                    {interest}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalInfo" className="text-base flex items-center gap-2">
              <Settings className="h-4 w-4 text-zinc-500" />
              Additional Information (Optional)
            </Label>
            <Textarea
              id="additionalInfo"
              placeholder="Any specific preferences, dietary restrictions, mobility requirements, etc."
              className="min-h-[100px] resize-y rounded-none text-base"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full rounded-none text-base py-6" 
            disabled={isLoading || !destination.trim() || !duration.trim()}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Planning Trip...
              </>
            ) : (
              <>
                <Plane className="mr-2 h-4 w-4" />
                Generate Trip Plan
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
