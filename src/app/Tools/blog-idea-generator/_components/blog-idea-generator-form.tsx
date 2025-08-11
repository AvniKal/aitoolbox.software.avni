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
  Newspaper, 
  Users, 
  Tag, 
  Target, 
  PenTool,
  BookOpen,
  FileText,
  BarChart,
  HelpCircle,
  ListChecks,
  Lightbulb,
  Search,
  MessageCircle
} from "lucide-react"

const blogNiches = [
  { value: "Technology" },
  { value: "Health & Wellness" },
  { value: "Finance & Money" },
  { value: "Travel" },
  { value: "Food & Cooking" },
  { value: "Lifestyle" },
  { value: "Business & Entrepreneurship" },
  { value: "Marketing" },
  { value: "Personal Development" },
  { value: "Education" },
  { value: "Parenting" },
  { value: "Fashion" },
  { value: "Home & Garden" },
  { value: "Entertainment" },
  { value: "Sports & Fitness" }
]

const targetAudiences = [
  "Beginners", "Professionals", "Students", "Parents", "Entrepreneurs", 
  "Millennials", "Gen Z", "Seniors", "Tech Enthusiasts", "Fitness Buffs",
  "Travelers", "Foodies", "Remote Workers", "Small Business Owners", "Marketers"
]

const contentGoals = [
  { id: "educate", label: "Educate & Inform" },
  { id: "entertain", label: "Entertain & Engage" },
  { id: "solve-problems", label: "Solve Problems" },
  { id: "generate-leads", label: "Generate Leads" },
  { id: "build-authority", label: "Build Authority" },
  { id: "seo-traffic", label: "Boost SEO & Traffic" }
]

const postTypes = [
  { id: "how-to", label: "How-To Guides" },
  { id: "listicle", label: "Listicles" },
  { id: "case-study", label: "Case Studies" },
  { id: "opinion", label: "Opinion Pieces" },
  { id: "tutorial", label: "Tutorials" },
  { id: "comparison", label: "Comparisons" },
  { id: "tips", label: "Tips & Tricks" }
]

const formSchema = z.object({
  blogNiche: z.string().min(1, { message: "Please enter a blog niche or topic." }),
  targetAudience: z.string().min(1, { message: "Please specify your target audience." }),
  contentGoals: z.array(z.string()).refine((value) => value.length > 0, {
    message: "Select at least one content goal.",
  }),
  postTypes: z.array(z.string()).refine((value) => value.length > 0, {
    message: "Select at least one post type.",
  }),
  keywords: z.string().optional(),
  competitorTopics: z.string().optional(),
  additionalInfo: z.string().optional(),
})

export type BlogIdeaFormValues = z.infer<typeof formSchema>

interface BlogIdeaGeneratorFormProps {
  onSubmit: (data: BlogIdeaFormValues) => void
  isLoading: boolean
}

export function BlogIdeaGeneratorForm({
  onSubmit,
  isLoading,
}: BlogIdeaGeneratorFormProps) {
  const form = useForm<BlogIdeaFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      blogNiche: "",
      targetAudience: "",
      contentGoals: ["educate"],
      postTypes: ["how-to"],
      keywords: "",
      competitorTopics: "",
      additionalInfo: "",
    },
  })

  return (
    <Card className="border-2 border-gray-200 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
        <CardTitle className="flex items-center justify-center gap-3 text-center">
          <div className="p-2 bg-gray-600 rounded-lg">
            <Newspaper className="h-5 w-5 text-white" />
          </div>
          <span className="text-gray-700">
            Blog Idea Requirements
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Blog Niche/Topic */}
            <FormField
              control={form.control}
              name="blogNiche"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-semibold">
                    Blog Niche / Topic *
                  </FormLabel>
                  <div className="space-y-3">
                    <FormControl>
                      <Input
                        placeholder="Enter your blog niche or topic"
                        className="border-gray-200 focus:border-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="border-gray-200 focus:border-gray-400">
                        <SelectValue placeholder="Or select a common niche" />
                      </SelectTrigger>
                      <SelectContent>
                        {blogNiches.map(niche => (
                          <SelectItem key={niche.value} value={niche.value}>
                            {niche.value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <FormDescription className="text-gray-600">
                    Specify what your blog is about or the topic you want ideas for
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
                  <FormLabel className="text-gray-700 font-semibold">
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
                    Who will be reading your blog content?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Content Goals */}
            <FormField
              control={form.control}
              name="contentGoals"
              render={() => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-semibold">
                    Content Goals *
                  </FormLabel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {contentGoals.map((goal) => (
                      <FormField
                        key={goal.id}
                        control={form.control}
                        name="contentGoals"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={goal.id}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-gray-200 p-3 hover:bg-gray-50"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(goal.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, goal.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== goal.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                {goal.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormDescription className="text-gray-600">
                    What do you want to achieve with your blog content?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Post Types */}
            <FormField
              control={form.control}
              name="postTypes"
              render={() => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-semibold">
                    Post Types *
                  </FormLabel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {postTypes.map((type) => (
                      <FormField
                        key={type.id}
                        control={form.control}
                        name="postTypes"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={type.id}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-gray-200 p-3 hover:bg-gray-50"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(type.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, type.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== type.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                {type.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormDescription className="text-gray-600">
                    What types of blog posts do you want to create?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Keywords */}
              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-semibold">
                      Target Keywords (Optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., SEO, content marketing, blogging tips"
                        className="border-gray-200 focus:border-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-gray-600">
                      Keywords you want to target for SEO
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Competitor Topics */}
              <FormField
                control={form.control}
                name="competitorTopics"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-gray-700 font-semibold">
                      <Search className="h-4 w-4 text-gray-600" />
                      Competitor Topics (Optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Topics your competitors are writing about"
                        className="border-gray-200 focus:border-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-gray-600">
                      Topics you want to create better content for
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
                  <FormLabel className="flex items-center gap-2 text-gray-700 font-semibold">
                    <Lightbulb className="h-4 w-4 text-gray-600" />
                    Additional Information (Optional)
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any other details that might help generate better blog ideas..."
                      className="resize-y min-h-[80px] border-gray-200 focus:border-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-gray-600">
                    Any specific requirements, brand voice, or content preferences
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-gray-700 hover:bg-gray-800 text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Generate Blog Ideas
                </span>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}