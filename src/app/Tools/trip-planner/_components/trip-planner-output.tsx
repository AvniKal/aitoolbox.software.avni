"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, MapPin, Calendar, DollarSign, Clock, Star, Check, RefreshCw, Edit, FileText } from "lucide-react";
import { toast } from "sonner";
import { TripPlannerResult } from "./trip-planner-client";

interface TripPlannerOutputProps {
  result: TripPlannerResult | null;
  isLoading: boolean;
  onRegenerate?: () => void;
}

export default function TripPlannerOutput({ result, isLoading, onRegenerate }: TripPlannerOutputProps) {
  const [copiedDay, setCopiedDay] = useState<number | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text: string, dayIndex?: number) => {
    try {
      await navigator.clipboard.writeText(text);
      if (dayIndex !== undefined) {
        setCopiedDay(dayIndex);
        setTimeout(() => setCopiedDay(null), 2000);
      } else {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }
      toast.success("Copied to clipboard!");
    } catch (error) {
      toast.error("Failed to copy to clipboard");
    }
  };

  const copyFullItinerary = () => {
    if (!result) return;
    
    let fullText = `🗺️ ${result.destination} - ${result.duration} Day Trip Plan\n\n`;
    fullText += `💰 Budget: ${result.budget}\n`;
    fullText += `🎯 Interests: ${result.interests.join(", ")}\n\n`;
    
    result.dailyItinerary.forEach((day, index) => {
      fullText += `📅 Day ${index + 1}: ${day.title}\n`;
      fullText += `🕐 ${day.timeOfDay}\n\n`;
      
      day.activities.forEach(activity => {
        fullText += `• ${activity.name}\n`;
        fullText += `  📍 ${activity.location}\n`;
        fullText += `  ⏱️ ${activity.duration}\n`;
        if (activity.cost) fullText += `  💵 ${activity.cost}\n`;
        fullText += `  ${activity.description}\n\n`;
      });
      
      if (day.restaurants.length > 0) {
        fullText += `🍽️ Recommended Restaurants:\n`;
        day.restaurants.forEach(restaurant => {
          fullText += `• ${restaurant.name} - ${restaurant.cuisine}\n`;
          fullText += `  📍 ${restaurant.location}\n`;
          if (restaurant.priceRange) fullText += `  💰 ${restaurant.priceRange}\n`;
          fullText += `  ${restaurant.description}\n\n`;
        });
      }
      
      fullText += `\n${"=".repeat(50)}\n\n`;
    });
    
    if (result.accommodation.length > 0) {
      fullText += `🏨 Recommended Accommodation:\n`;
      result.accommodation.forEach(hotel => {
        fullText += `• ${hotel.name} - ${hotel.type}\n`;
        fullText += `  📍 ${hotel.location}\n`;
        if (hotel.priceRange) fullText += `  💰 ${hotel.priceRange}\n`;
        fullText += `  ${hotel.description}\n\n`;
      });
    }
    
    copyToClipboard(fullText);
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="animate-pulse space-y-3">
          <div className="h-6 bg-muted rounded w-3/4"></div>
          <div className="h-4 bg-muted rounded w-1/2"></div>
          <div className="space-y-2">
            <div className="h-20 bg-muted rounded"></div>
            <div className="h-20 bg-muted rounded"></div>
            <div className="h-20 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="flex flex-col items-center justify-center h-52 text-center p-6 border bg-zinc-50">
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-primary/10 rounded-full mb-4">
          <MapPin className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-lg font-medium mb-1">Your trip plan will appear here</h3>
        <p className="text-zinc-500 text-sm">
          Fill in the details and let the AI work its magic.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="flex flex-row items-center justify-between pb-3 mb-3 border-b">
        <h3 className="text-base font-medium flex items-center gap-2">
          <FileText className="h-4 w-4 text-zinc-600" />
          Generated Trip Plan
        </h3>
        <div className="flex gap-2">
          {onRegenerate && (
            <Button
              variant="outline"
              size="icon"
              onClick={onRegenerate}
              title="Regenerate"
              className="h-8 w-8 rounded-none"
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          )}
          <Button
            variant="outline"
            size="icon"
            onClick={copyFullItinerary}
            title="Copy All"
            className="h-8 w-8 rounded-none"
          >
            {isCopied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Trip Overview */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium border-b pb-2 text-base flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {result.destination}
              </h3>
              <div className="flex items-center gap-4 mt-2 text-sm text-zinc-600">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {result.duration} days
                </span>
                <span className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  {result.budget}
                </span>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <strong className="text-sm">Interests:</strong>
            <div className="flex flex-wrap gap-1">
              {result.interests.map((interest, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Daily Itinerary */}
        <div className="space-y-4">
          <h4 className="text-base font-medium">Daily Itinerary</h4>
          {result.dailyItinerary.map((day, dayIndex) => (
            <div key={dayIndex} className="border rounded-none p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-medium text-base">Day {dayIndex + 1}: {day.title}</h5>
                  <p className="text-sm text-zinc-600 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {day.timeOfDay}
                  </p>
                </div>
                <Button
                  onClick={() => {
                    const dayText = `Day ${dayIndex + 1}: ${day.title}\n${day.timeOfDay}\n\nActivities:\n${day.activities.map(a => `• ${a.name} (${a.location}) - ${a.duration}\n  ${a.description}`).join('\n\n')}\n\nRestaurants:\n${day.restaurants.map(r => `• ${r.name} - ${r.cuisine} (${r.location})\n  ${r.description}`).join('\n\n')}`;
                    copyToClipboard(dayText, dayIndex);
                  }}
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2 rounded-none"
                >
                  <Copy className="h-3 w-3" />
                  {copiedDay === dayIndex ? "Copied!" : ""}
                </Button>
              </div>

              {/* Activities */}
              <div>
                <h6 className="font-medium text-sm mb-2">Activities</h6>
                <div className="space-y-3">
                  {day.activities.map((activity, actIndex) => (
                    <div key={actIndex} className="border-l-2 border-primary/20 pl-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h6 className="font-medium text-sm">{activity.name}</h6>
                          <p className="text-xs text-zinc-600 flex items-center gap-2 mt-1">
                            <MapPin className="h-3 w-3" />
                            {activity.location}
                            <Clock className="h-3 w-3" />
                            {activity.duration}
                            {activity.cost && (
                              <>
                                <DollarSign className="h-3 w-3" />
                                {activity.cost}
                              </>
                            )}
                          </p>
                          <p className="text-xs mt-1">{activity.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Restaurants */}
              {day.restaurants.length > 0 && (
                <div>
                  <h6 className="font-medium text-sm mb-2">Recommended Restaurants</h6>
                  <div className="space-y-2">
                    {day.restaurants.map((restaurant, restIndex) => (
                      <div key={restIndex} className="p-3 border rounded-none">
                        <div>
                          <h6 className="font-medium text-sm">{restaurant.name}</h6>
                          <p className="text-xs text-zinc-600">
                            {restaurant.cuisine} • {restaurant.location}
                            {restaurant.priceRange && (
                              <span className="ml-2 flex items-center gap-1">
                                <DollarSign className="h-3 w-3" />
                                {restaurant.priceRange}
                              </span>
                            )}
                          </p>
                          <p className="text-xs mt-1">{restaurant.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Accommodation */}
        {result.accommodation.length > 0 && (
          <div className="space-y-4">
            <h4 className="text-base font-medium">Recommended Accommodation</h4>
            <div className="space-y-3">
              {result.accommodation.map((hotel, index) => (
                <div key={index} className="p-4 border rounded-none">
                  <div>
                    <h5 className="font-medium text-sm">{hotel.name}</h5>
                    <p className="text-xs text-zinc-600">
                      {hotel.type} • {hotel.location}
                      {hotel.priceRange && (
                        <span className="ml-2 flex items-center gap-1">
                          <DollarSign className="h-3 w-3" />
                          {hotel.priceRange}
                        </span>
                      )}
                    </p>
                    <p className="text-xs mt-1">{hotel.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
