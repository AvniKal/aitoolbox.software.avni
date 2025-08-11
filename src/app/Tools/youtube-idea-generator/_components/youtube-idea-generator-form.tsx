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
  Youtube, 
  Users, 
  Tag, 
  Layers, 
  Zap, 
  TrendingUp,
  Video,
  Camera,
  Film,
  Play,
  Eye,
  Clock,
  ThumbsUp,
  Flame
} from "lucide-react"

// Define YouTube channel types
const channelTypes = [
  { value: "educational", label: "Educational", icon: <Layers className="h-4 w-4" />, color: "text-gray-600" },
  { value: "entertainment", label: "Entertainment", icon: <Film className="h-4 w-4" />, color: "text-gray-600" },
  { value: "vlog", label: "Vlog", icon: <Camera className="h-4 w-4" />, color: "text-gray-600" },
  { value: "gaming", label: "Gaming", icon: <Play className="h-4 w-4" />, color: "text-gray-600" },
  { value: "tutorial", label: "Tutorial/How-To", icon: <Zap className="h-4 w-4" />, color: "text-gray-600" },
  { value: "review", label: "Review", icon: <ThumbsUp className="h-4 w-4" />, color: "text-gray-600" },
  { value: "commentary", label: "Commentary", icon: <Eye className="h-4 w-4" />, color: "text-gray-600" },
  { value: "shorts", label: "Shorts/TikTok Style", icon: <Flame className="h-4 w-4" />, color: "text-gray-600" },
  { value: "podcast", label: "Podcast/Interview", icon: <Users className="h-4 w-4" />, color: "text-gray-600" }
]

// Define target audience options
const targetAudiences = [
  "General", "Beginners", "Experts", "Teens", "Young Adults", "Adults", "Seniors", 
  "Professionals", "Students", "Hobbyists", "Parents", "Entrepreneurs", "Tech Enthusiasts"
]

// Define video formats
const videoFormats = [
  { id: "tutorial", label: "Tutorial/How-To" },
  { id: "review", label: "Review" },
  { id: "listicle", label: "List Video" },
  { id: "vlog", label: "Vlog" },
  { id: "reaction", label: "Reaction" },
  { id: "shorts", label: "Shorts" },
  { id: "commentary", label: "Commentary" },
  { id: "interview", label: "Interview" }
]

// Define video lengths
const videoLengths = [
  { id: "short", label: "Short (< 5 min)", icon: <Clock className="h-4 w-4" /> },
  { id: "medium", label: "Medium (5-15 min)", icon: <Clock className="h-4 w-4" /> },
  { id: "long", label: "Long (> 15 min)", icon: <Clock className="h-4 w-4" /> }
]

// Define form schema
const formSchema = z.object({
  channelNiche: z.string().min(1, { message: "Please enter your channel niche or topic." }),
  channelType: z.string().min(1, { message: "Please select a channel type." }),
  targetAudience: z.string().min(1, { message: "Please specify your target audience." }),
  videoFormats: z.array(z.string()).refine((value) => value.length > 0, {
    message: "Select at least one video format.",
  }),
  videoLength: z.string().min(1, { message: "Please select a video length." }),
  competitorChannels: z.string().optional(),
  trendingTopics: z.string().optional(),
  additionalInfo: z.string().optional(),
})

export type YouTubeIdeaFormValues = z.infer<typeof formSchema>

interface YouTubeIdeaGeneratorFormProps {
  onSubmit: (data: YouTubeIdeaFormValues) => void
  isLoading: boolean
}

export function YouTubeIdeaGeneratorForm({
  onSubmit,
  isLoading,
}: YouTubeIdeaGeneratorFormProps) {
  const form = useForm<YouTubeIdeaFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      channelNiche: "",
      channelType: "",
      targetAudience: "",
      videoFormats: ["tutorial"],
      videoLength: "medium",
      competitorChannels: "",
      trendingTopics: "",
      additionalInfo: "",
    },
  })

  return (
    <Card className="border-2 border-gray-200 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
        <CardTitle className="flex items-center justify-center gap-3 text-center">
          <div className="p-2 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg">
            <Youtube className="h-5 w-5 text-white" />
          </div>
          <span className="bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent">
            YouTube Video Requirements
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Channel Niche */}
            <FormField
              control={form.control}
              name="channelNiche"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-gray-600 font-semibold">
                    <Tag className="h-4 w-4" />
                    Channel Niche / Topic *
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., Tech Reviews, Cooking, Travel, Fitness"
                      className="border-gray-200 focus:border-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-gray-600">
                    What is your channel about? Be specific about your niche.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Channel Type */}
            <FormField
              control={form.control}
              name="channelType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-gray-600 font-semibold">
                    <Video className="h-4 w-4" />
                    Channel Type *
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-gray-200 focus:border-gray-400">
                        <SelectValue placeholder="Select a channel type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {channelTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center gap-2">
                            <span className={type.color}>{type.icon}</span>
                            {type.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription className="text-gray-600">
                    What type of content do you primarily create?
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
                  <FormLabel className="flex items-center gap-2 text-gray-600 font-semibold">
                    <Users className="h-4 w-4" />
                    Target Audience *
                  </FormLabel>
                  <div className="space-y-3">
                    <FormControl>
                      <Input
                        placeholder="Enter your target audience"
                        className="border-gray-200 focus:border-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="border-gray-200 focus:border-gray-400">
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
                    Who is your content primarily targeting?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Video Formats */}
            <FormField
              control={form.control}
              name="videoFormats"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="flex items-center gap-2 text-gray-600 font-semibold">
                      <Film className="h-4 w-4" />
                      Video Formats *
                    </FormLabel>
                    <FormDescription className="text-gray-600">
                      Select the video formats you want to create
                    </FormDescription>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {videoFormats.map((format) => (
                      <FormField
                        key={format.id}
                        control={form.control}
                        name="videoFormats"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={format.id}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-gray-200 p-3 hover:bg-gray-50"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(format.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, format.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== format.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                {format.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Video Length */}
            <FormField
              control={form.control}
              name="videoLength"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-gray-600 font-semibold">
                    <Clock className="h-4 w-4" />
                    Preferred Video Length *
                  </FormLabel>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {videoLengths.map((length) => (
                      <FormItem
                        key={length.id}
                        className={`flex items-center space-x-3 space-y-0 rounded-md border p-4 cursor-pointer hover:bg-gray-50 ${
                          field.value === length.id
                            ? "border-gray-400 bg-gray-50"
                            : "border-gray-200"
                        }`}
                        onClick={() => form.setValue("videoLength", length.id)}
                      >
                        <FormControl>
                          <input
                            type="radio"
                            className="sr-only"
                            checked={field.value === length.id}
                            onChange={() => {}}
                          />
                        </FormControl>
                        <div className="flex items-center gap-2">
                          {length.icon}
                          <FormLabel className="font-normal cursor-pointer m-0">
                            {length.label}
                          </FormLabel>
                        </div>
                      </FormItem>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Competitor Channels */}
            <FormField
              control={form.control}
              name="competitorChannels"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-gray-600 font-semibold">
                    <TrendingUp className="h-4 w-4" />
                    Similar Channels (Optional)
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="List channels similar to yours or that inspire you..."
                      className="resize-y min-h-[80px] border-gray-200 focus:border-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-gray-600">
                    Channels that create similar content or inspire you
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Trending Topics */}
            <FormField
              control={form.control}
              name="trendingTopics"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-gray-600 font-semibold">
                    <Flame className="h-4 w-4" />
                    Trending Topics (Optional)
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any current trends or topics you want to cover..."
                      className="resize-y min-h-[80px] border-gray-200 focus:border-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-gray-600">
                    Current trends or topics you&apos;d like to cover in your videos
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Additional Info */}
            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-gray-600 font-semibold">
                    <Layers className="h-4 w-4" />
                    Additional Information (Optional)
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any other details that might help generate better video ideas..."
                      className="resize-y min-h-[80px] border-gray-200 focus:border-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-gray-600">
                    Any specific requirements, constraints, or preferences
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-3 text-lg shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Youtube className="mr-2 h-5 w-5" />
                  Generate
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}