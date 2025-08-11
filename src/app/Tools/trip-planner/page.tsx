import TripPlannerClient from "./_components/trip-planner-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChevronsUpDown,
  MapPin,
  Star,
  Clock,
  ThumbsUp,
  Plane,
  Settings,
  AlertCircle,
  RefreshCw,
  HelpCircle,
  FileEdit,
  User,
  FileText,
  Calendar,
  DollarSign,
  Heart,
  Globe,
  Compass,
  Hotel,
  Utensils,
  Camera,
  Mountain,
  TreePine,
  Building,
  Palette,
  ShoppingBag,
  Moon,
  Check,
  Zap,
  Target,
  Shield,
  Award,
  TrendingUp,
  Users,
  Map,
  Navigation,
  Smartphone,
  Wifi,
  CreditCard,
  Gift,
  Coffee,
  Car,
  Train,
  Bus,
  Ship,
  Bike,

  Compass as CompassIcon,
  Briefcase,
} from "lucide-react";

export default function TripPlannerPage() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto px-4">
      <div className="prose max-w-none mb-8 pt-5">
        <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <FileEdit className="h-6 w-6 text-primary" />
          AI Trip Planner Tool - Create Personalized Travel Itineraries
        </h1>

        <p className="text-lg leading-relaxed">
          Planning the perfect trip can be overwhelming. Our AI Trip Planner creates personalized travel itineraries based on your destination, interests, and budget. Get detailed day-by-day plans with activities, restaurants, and accommodation recommendations. Whether you're planning a weekend getaway, a family vacation, or a solo adventure, our intelligent travel planning tool helps you discover the best attractions, local experiences, and hidden gems for any destination worldwide.
        </p>
      </div>

      <TripPlannerClient />

      <article className="prose max-w-none mb-8">
        <div className="bg-zinc-50 p-6 border rounded-lg mb-8">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <Star className="h-6 w-6 text-amber-500" />
            Why Use Our AI Trip Planner?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-lg">Save Time & Reduce Stress</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Save hours of research and travel planning time</li>
                <li>Get personalized recommendations based on your interests</li>
                <li>Discover hidden gems and local favorites</li>
                <li>Stay within your budget with cost estimates</li>
                <li>Access comprehensive destination guides instantly</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-lg">Smart AI Technology</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Advanced AI algorithms analyze your preferences</li>
                <li>Real-time travel recommendations</li>
                <li>Seasonal and local event considerations</li>
                <li>Multi-language support for international travel</li>
                <li>Mobile-friendly travel planning experience</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border p-6 rounded-lg">
            <h3 className="font-semibold flex items-center gap-2 mb-3 text-lg">
              <Clock className="h-5 w-5 text-blue-600" />
              Quick & Comprehensive Travel Planning
            </h3>
            <p className="text-gray-700">
              Just enter your destination, duration, and interests. Our AI creates detailed itineraries with activities, restaurants, and accommodation suggestions tailored to your preferences. Perfect for last-minute travel planning, business trips, or extended vacations.
            </p>
          </div>
          <div className="border p-6 rounded-lg">
            <h3 className="font-semibold flex items-center gap-2 mb-3 text-lg">
              <ThumbsUp className="h-5 w-5 text-green-600" />
              Smart Travel Recommendations
            </h3>
            <p className="text-gray-700">
              Our AI considers your budget, interests, and travel style to suggest the best activities, dining options, and places to stay for your perfect trip. From luxury travel to budget-friendly adventures, we've got you covered.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <HelpCircle className="h-6 w-6 text-primary" />
          How to Use the AI Trip Planner
        </h2>
        <p className="mb-6 text-lg">
          Simply fill out the form above with your destination, trip duration, budget, and interests. Our AI will analyze your preferences and generate a comprehensive travel itinerary that you can copy, modify, or use as-is. Try it now for free!
        </p>
      </article>

      {/* Popular Destinations Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Globe className="h-6 w-6 text-primary" />
          Popular Travel Destinations
        </h2>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">European Cities</h3>
            <p className="text-sm text-gray-600">Paris, Rome, Barcelona, Amsterdam, Prague, Vienna, Budapest, Berlin, Florence, Venice</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Asian Destinations</h3>
            <p className="text-sm text-gray-600">Tokyo, Bangkok, Singapore, Seoul, Hong Kong, Taipei, Kyoto, Hanoi, Ho Chi Minh City, Kuala Lumpur</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">American Adventures</h3>
            <p className="text-sm text-gray-600">New York, Los Angeles, San Francisco, Chicago, Miami, Las Vegas, New Orleans, Seattle, Boston, Austin</p>
          </div>
        </div>
      </section>

      {/* Travel Types Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <CompassIcon className="h-6 w-6 text-primary" />
          Types of Travel We Plan
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border p-4 rounded-lg text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <User className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Solo Travel</h3>
            <p className="text-sm text-gray-600">Personalized itineraries for independent travelers with safety tips and solo-friendly activities</p>
          </div>
          <div className="border p-4 rounded-lg text-center">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Heart className="h-6 w-6 text-pink-600" />
            </div>
            <h3 className="font-semibold mb-2">Romantic Getaways</h3>
            <p className="text-sm text-gray-600">Couples' retreats with intimate dining, scenic spots, and romantic activities</p>
          </div>
          <div className="border p-4 rounded-lg text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2">Family Vacations</h3>
            <p className="text-sm text-gray-600">Kid-friendly activities, family restaurants, and accommodation for all ages</p>
          </div>
          <div className="border p-4 rounded-lg text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Briefcase className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2">Business Travel</h3>
            <p className="text-sm text-gray-600">Efficient itineraries with meeting locations, business hotels, and networking opportunities</p>
          </div>
        </div>
      </section>

      {/* Travel Planning Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          Advanced Travel Planning Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Hotel className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold">Accommodation Planning</h3>
            </div>
            <p className="text-gray-600">Find the perfect hotels, hostels, vacation rentals, and boutique accommodations that match your budget and preferences.</p>
          </div>
          <div className="border p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Utensils className="h-5 w-5 text-orange-600" />
              <h3 className="font-semibold">Restaurant Recommendations</h3>
            </div>
            <p className="text-gray-600">Discover local cuisine, fine dining, street food, and hidden culinary gems with detailed reviews and price ranges.</p>
          </div>
          <div className="border p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Camera className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold">Activity Planning</h3>
            </div>
            <p className="text-gray-600">Plan sightseeing tours, outdoor adventures, cultural experiences, and entertainment options for every day.</p>
          </div>
          <div className="border p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Car className="h-5 w-5 text-red-600" />
              <h3 className="font-semibold">Transportation Guide</h3>
            </div>
            <p className="text-gray-600">Get detailed transportation options including public transit, car rentals, walking routes, and airport transfers.</p>
          </div>
          <div className="border p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold">Budget Management</h3>
            </div>
            <p className="text-gray-600">Track expenses, get cost estimates, and find budget-friendly alternatives for every aspect of your trip.</p>
          </div>
          <div className="border p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Map className="h-5 w-5 text-purple-600" />
              <h3 className="font-semibold">Local Insights</h3>
            </div>
            <p className="text-gray-600">Access insider tips, local customs, weather considerations, and seasonal recommendations for authentic experiences.</p>
          </div>
        </div>
      </section>

      {/* Travel Planning Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Target className="h-6 w-6 text-primary" />
          Expert Travel Planning Tips
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Be Specific with Destinations</h3>
                <p className="text-sm text-gray-600">Use specific city names (e.g., "Tokyo, Japan" instead of just "Japan") for more accurate travel recommendations and local insights.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Select Multiple Travel Interests</h3>
                <p className="text-sm text-gray-600">Choose several interests that match your travel style to get a well-rounded itinerary with diverse activities and experiences.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Include Special Requirements</h3>
                <p className="text-sm text-gray-600">Mention dietary restrictions, accessibility needs, or other specific requirements in the additional information for personalized recommendations.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Consider Realistic Budgets</h3>
                <p className="text-sm text-gray-600">Research typical costs for your destination to set realistic daily budgets and avoid overspending during your travels.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Plan for Weather & Seasons</h3>
                <p className="text-sm text-gray-600">Consider seasonal factors, local weather patterns, and peak tourist seasons when planning your travel dates and activities.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Research Local Customs</h3>
                <p className="text-sm text-gray-600">Learn about local customs, dress codes, tipping practices, and cultural etiquette to ensure respectful and enjoyable travel experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Planning Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Award className="h-6 w-6 text-primary" />
          Benefits of AI-Powered Travel Planning
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border p-4 rounded-lg text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Time Saving</h3>
            <p className="text-sm text-gray-600">Reduce hours of research to minutes with instant personalized travel itineraries</p>
          </div>
          <div className="border p-4 rounded-lg text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2">Cost Effective</h3>
            <p className="text-sm text-gray-600">Find budget-friendly options and avoid tourist traps with local recommendations</p>
          </div>
          <div className="border p-4 rounded-lg text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <MapPin className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2">Local Insights</h3>
            <p className="text-sm text-gray-600">Discover authentic experiences and hidden gems that locals love</p>
          </div>
          <div className="border p-4 rounded-lg text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="font-semibold mb-2">Travel Safety</h3>
            <p className="text-sm text-gray-600">Get safety tips, reliable transportation options, and trusted accommodation recommendations</p>
          </div>
        </div>
      </section>

      <div className="mt-10 border-t pt-6">
        <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
          <Settings className="h-4 w-4 text-zinc-600" />
          Additional Travel Planning Tips
        </h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Book flights and accommodation early for better rates and availability</li>
          <li>Check visa requirements and travel documents for international destinations</li>
          <li>Purchase travel insurance for peace of mind during your journey</li>
          <li>Download offline maps and translation apps for seamless navigation</li>
          <li>Research local transportation options and purchase passes in advance</li>
          <li>Consider travel seasons and book activities that require reservations early</li>
        </ul>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-800 flex items-start gap-2">
            <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <span>
              While our AI produces comprehensive travel plans, we recommend reviewing all generated itineraries and doing additional research for the most up-to-date information about attractions, restaurants, local conditions, and travel restrictions. Always verify current travel advisories and health requirements before your trip.
            </span>
          </p>
        </div>
      </div>

      {/* About Section - SSR */}
      <div className="container mx-auto pb-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileEdit className="h-5 w-5 text-primary" />
              About AI Trip Planner - Your Smart Travel Companion
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The AI Trip Planner creates personalized travel itineraries based on your destination, duration, budget, and interests. Get detailed day-by-day plans with activities, restaurants, and accommodation recommendations. Our advanced artificial intelligence analyzes thousands of travel data points to provide you with the most relevant and up-to-date travel suggestions for any destination worldwide.
            </p>
            <div>
              <strong className="block mb-2">Key Features:</strong>
              <ul className="list-disc pl-6 space-y-2">
                <li>Customized daily itineraries based on your travel interests and preferences</li>
                <li>Restaurant recommendations with cuisine types, locations, and price ranges</li>
                <li>Activity suggestions with duration estimates and cost information</li>
                <li>Accommodation options within your budget range and travel style</li>
                <li>Practical travel tips and local transportation guidance</li>
                <li>Export and share your complete travel itinerary with travel companions</li>
                <li>Multi-language support for international travel planning</li>
                <li>Seasonal and weather-appropriate travel recommendations</li>
                <li>Accessibility considerations for travelers with special needs</li>
                <li>Real-time updates and local event integration</li>
              </ul>
            </div>
            <div>
              <strong className="block mb-2">How to use our travel planner:</strong>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Enter your destination (city, country, or specific region)</li>
                <li>Specify the number of days for your trip duration</li>
                <li>Select your budget range from budget to luxury options</li>
                <li>Choose your travel interests (adventure, culture, food, art, etc.)</li>
                <li>Add any additional preferences or special requirements</li>
                <li>Click "Generate Trip Plan" to create your personalized travel itinerary</li>
                <li>Copy individual days or the complete travel plan for your records</li>
                <li>Share your itinerary with travel companions or save for future reference</li>
              </ol>
            </div>
            <div>
              <strong className="block mb-2">Travel planning tips for better results:</strong>
              <ul className="list-disc pl-6 space-y-1">
                <li>Be specific with your destination (e.g., "Tokyo, Japan" vs "Japan") for more accurate recommendations</li>
                <li>Select multiple interests that match your travel style for a well-rounded itinerary</li>
                <li>Include dietary restrictions, accessibility needs, or other specific requirements in additional info</li>
                <li>Consider realistic daily budgets for your destination to avoid overspending</li>
                <li>Research local customs and cultural considerations before your trip</li>
                <li>Check visa requirements and travel documents for international destinations</li>
                <li>Book popular attractions and restaurants in advance when possible</li>
                <li>Download offline maps and translation apps for seamless navigation</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-800 flex items-start gap-2">
                <TrendingUp className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  Our AI travel planner is constantly learning and improving based on user feedback and travel trends. We regularly update our recommendations to include the latest attractions, restaurants, and travel experiences from around the world.
                </span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
