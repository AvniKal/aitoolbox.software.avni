"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  Loader2, 
  Smartphone, 
  Users, 
  Tag, 
  Target, 
  Code,
  Settings,
  DollarSign,
  Layers,
  Zap,
  BarChart,
  Gamepad2,
  Heart,
  ShoppingCart,
  Camera,
  Map,
  Calendar,
  MessageSquare,
  Music,
  FileText
} from "lucide-react"

const appCategories = [
  { value: "Productivity", icon: <Settings className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Social Networking", icon: <Users className="h-4 w-4" />, color: "text-gray-600" },
  { value: "E-commerce", icon: <ShoppingCart className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Health & Fitness", icon: <Heart className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Entertainment", icon: <Music className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Education", icon: <FileText className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Finance", icon: <DollarSign className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Gaming", icon: <Gamepad2 className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Travel", icon: <Map className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Photography", icon: <Camera className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Communication", icon: <MessageSquare className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Utilities", icon: <Layers className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Business", icon: <BarChart className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Lifestyle", icon: <Calendar className="h-4 w-4" />, color: "text-gray-600" },
  { value: "AR/VR", icon: <Smartphone className="h-4 w-4" />, color: "text-gray-600" }
]

const targetAudiences = [
  "Young Adults (18-24)", "Professionals (25-40)", "Parents", "Students", "Seniors", 
  "Teenagers", "Children", "Small Business Owners", "Fitness Enthusiasts", "Travelers",
  "Remote Workers", "Gamers", "Creative Professionals", "Healthcare Providers", "Tech Enthusiasts"
]

const platforms = [
  { id: "ios", label: "iOS", icon: <Smartphone className="h-4 w-4" />, color: "text-gray-600" },
  { id: "android", label: "Android", icon: <Smartphone className="h-4 w-4" />, color: "text-gray-600" },
  { id: "web", label: "Web App", icon: <Code className="h-4 w-4" />, color: "text-gray-600" },
  { id: "cross-platform", label: "Cross-Platform", icon: <Layers className="h-4 w-4" />, color: "text-gray-600" }
]

const appPurposes = [
  { id: "solve-problem", label: "Solve a Problem", icon: <Target className="h-4 w-4 text-gray-600" />, color: "text-gray-600" },
  { id: "entertain", label: "Entertainment", icon: <Gamepad2 className="h-4 w-4 text-gray-600" />, color: "text-gray-600" },
  { id: "connect-people", label: "Connect People", icon: <Users className="h-4 w-4 text-gray-600" />, color: "text-gray-600" },
  { id: "improve-efficiency", label: "Improve Efficiency", icon: <Zap className="h-4 w-4 text-gray-600" />, color: "text-gray-600" },
  { id: "make-money", label: "Generate Revenue", icon: <DollarSign className="h-4 w-4 text-gray-600" />, color: "text-gray-600" },
  { id: "education", label: "Education", icon: <FileText className="h-4 w-4 text-gray-600" />, color: "text-gray-600" }
]

const complexityLevels = [
  { value: "simple", label: "Simple (MVP, basic features)" },
  { value: "moderate", label: "Moderate (Standard app with common features)" },
  { value: "complex", label: "Complex (Advanced features, integrations)" },
  { value: "innovative", label: "Innovative (Cutting-edge technology)" }
]

const formSchema = z.object({
  appCategory: z.string().min(1, { message: "Please enter an app category." }),
  targetAudience: z.string().min(1, { message: "Please specify your target audience." }),
  targetPlatform: z.array(z.string()).refine((value) => value.length > 0, {
    message: "Select at least one platform.",
  }),
  appPurpose: z.array(z.string()).refine((value) => value.length > 0, {
    message: "Select at least one app purpose.",
  }),
  technicalComplexity: z.string().min(1, { message: "Please select a technical complexity level." }),
  keyFeatures: z.string().optional(),
  competitorApps: z.string().optional(),
  additionalInfo: z.string().optional(),
})

export type AppIdeaFormValues = z.infer<typeof formSchema>

interface AppIdeaGeneratorFormProps {
  onSubmit: (data: AppIdeaFormValues) => void
  isLoading: boolean
}

export function AppIdeaGeneratorForm({
  onSubmit,
  isLoading,
}: AppIdeaGeneratorFormProps) {
  const form = useForm<AppIdeaFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      appCategory: "",
      targetAudience: "",
      targetPlatform: ["cross-platform"],
      appPurpose: ["solve-problem"],
      technicalComplexity: "moderate",
      keyFeatures: "",
      competitorApps: "",
      additionalInfo: "",
    },
  })

  return (
    <Card className="border-2 border-gray-300 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-200">
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg">
            <Smartphone className="h-5 w-5 text-white" />
          </div>
          <span className="bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent">
            App Idea Requirements
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* App Category */}
            <FormField
              control={form.control}
              name="appCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-gray-800 font-semibold">
                    <Tag className="h-4 w-4 text-gray-700" />
                    App Category *
                  </FormLabel>
                  <div className="space-y-3">
                    <FormControl>
                      <Input
                        placeholder="Enter app category or industry"
                        className="border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-400">
                        <SelectValue placeholder="Or select a common category" />
                      </SelectTrigger>
                      <SelectContent className="border-gray-300">
                        {appCategories.map(category => (
                          <SelectItem key={category.value} value={category.value}>
                            <div className="flex items-center gap-2">
                              <span className={category.color}>{category.icon}</span>
                              {category.value}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <FormDescription className="text-gray-600">
                    Specify what type of app you want to create
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Target Audience */}
            <FormField
              control={form.control}
              name="targetAudience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-gray-800 font-semibold">
                    <Users className="h-4 w-4 text-gray-700" />
                    Target Audience *
                  </FormLabel>
                  <div className="space-y-3">
                    <FormControl>
                      <Input
                        placeholder="Enter your target audience"
                        className="border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-400">
                        <SelectValue placeholder="Or select from common audiences" />
                      </SelectTrigger>
                      <SelectContent>
                        {targetAudiences.map(audience => (
                          <SelectItem key={audience} value={audience}>
                            {audience}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <FormDescription className="text-gray-600">
                    Who will be using your app?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Target Platform */}
            <FormField
              control={form.control}
              name="targetPlatform"
              render={() => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-gray-800 font-semibold">
                    <Smartphone className="h-4 w-4 text-gray-700" />
                    Target Platform *
                  </FormLabel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {platforms.map((platform) => (
                      <FormField
                        key={platform.id}
                        control={form.control}
                        name="targetPlatform"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={platform.id}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-gray-300 p-3 hover:bg-gray-100"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(platform.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, platform.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== platform.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer flex items-center gap-2">
                                <span className="text-gray-600">{platform.icon}</span>
                                {platform.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormDescription className="text-gray-600">
                    Which platforms will your app target?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* App Purpose */}
            <FormField
              control={form.control}
              name="appPurpose"
              render={() => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-gray-800 font-semibold">
                    <Target className="h-4 w-4 text-gray-700" />
                    App Purpose *
                  </FormLabel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {appPurposes.map((purpose) => (
                      <FormField
                        key={purpose.id}
                        control={form.control}
                        name="appPurpose"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={purpose.id}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-gray-300 p-3 hover:bg-gray-100"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(purpose.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, purpose.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== purpose.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer flex items-center gap-2">
                                <span className="text-gray-600">{purpose.icon}</span>
                                {purpose.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormDescription className="text-gray-600">
                    What is the main purpose of your app?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Technical Complexity */}
            <FormField
              control={form.control}
              name="technicalComplexity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-gray-800 font-semibold">
                    <Code className="h-4 w-4 text-gray-700" />
                    Technical Complexity *
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-400">
                        <SelectValue placeholder="Select complexity level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {complexityLevels.map(level => (
                        <SelectItem key={level.value} value={level.value}>
                          {level.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription className="text-gray-600">
                    How complex should the app be technically?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Key Features */}
              <FormField
                control={form.control}
                name="keyFeatures"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-gray-800 font-semibold">
                      <Layers className="h-4 w-4 text-gray-700" />
                      Must-Have Features (Optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., User authentication, messaging, etc."
                        className="border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-gray-600">
                      Key features you want in your app
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Competitor Apps */}
              <FormField
                control={form.control}
                name="competitorApps"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-gray-800 font-semibold">
                      <BarChart className="h-4 w-4 text-gray-700" />
                      Similar/Competitor Apps (Optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Uber, Instagram, Notion, etc."
                        className="border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-gray-600">
                      Existing apps similar to your idea
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Additional Info */}
            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-gray-800 font-semibold">
                    <FileText className="h-4 w-4 text-gray-700" />
                    Additional Information (Optional)
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any other details that might help generate better app ideas..."
                      className="resize-y min-h-[80px] border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-gray-600">
                    Any specific requirements, monetization preferences, or other details
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-6 text-base shadow-lg transition-all duration-200 transform hover:scale-[1.01]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Ideas...
                </>
              ) : (
                <>
                  <Smartphone className="mr-2 h-4 w-4" />
                  Generate App Ideas
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
} 