import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Trip Planner | AIToolbox.software",
  description: "Create personalized travel itineraries with AI. Get customized day-by-day plans with activities, restaurants, and accommodation recommendations for any destination.",
  keywords: [
    "AI trip planner",
    "travel itinerary generator",
    "vacation planner",
    "travel planning AI",
    "personalized travel guide",
    "trip organizer",
    "travel recommendations",
    "destination planner"
  ],
  openGraph: {
    title: "AI Trip Planner - Personalized Travel Itineraries",
    description: "Create customized travel plans with AI. Get detailed itineraries with activities, restaurants, and accommodation recommendations.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TripPlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
