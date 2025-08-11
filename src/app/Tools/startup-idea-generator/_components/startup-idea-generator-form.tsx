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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { 
  Loader2, 
  Rocket, 
  Target, 
  Users, 
  Layers, 
  Zap, 
  TrendingUp,
  Globe,
  DollarSign,
  Briefcase,
  LineChart,
  Building,
  Lightbulb,
  Scale,
  Award
} from "lucide-react"

// Define industry options
const industries = [
  { value: "Technology", icon: <Zap className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Healthcare", icon: <Target className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Finance", icon: <DollarSign className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Education", icon: <Briefcase className="h-4 w-4" />, color: "text-gray-600" },
  { value: "E-commerce", icon: <Globe className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Real Estate", icon: <Building className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Entertainment", icon: <Award className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Sustainability", icon: <Lightbulb className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Legal", icon: <Scale className="h-4 w-4" />, color: "text-gray-600" }
]

// Define target market options
const targetMarkets = [
  "B2B", "B2C", "B2B2C", "Enterprise", "SMBs", "Startups", "Consumers", 
  "Millennials", "Gen Z", "Professionals", "Students", "Parents", "Remote Workers"
]

// Define business models
const businessModels = [
  { id: "saas", label: "SaaS", icon: <Globe className="h-4 w-4" />, color: "text-gray-600" },
  { id: "marketplace", label: "Marketplace", icon: <Building className="h-4 w-4" />, color: "text-gray-600" },
  { id: "subscription", label: "Subscription", icon: <DollarSign className="h-4 w-4" />, color: "text-gray-600" },
  { id: "ecommerce", label: "E-commerce", icon: <Globe className="h-4 w-4" />, color: "text-gray-600" },
  { id: "freemium", label: "Freemium", icon: <Zap className="h-4 w-4" />, color: "text-gray-600" },
  { id: "advertising", label: "Advertising", icon: <TrendingUp className="h-4 w-4" />, color: "text-gray-600" }
]

const formSchema = z.object({
  industry: z.string().min(1, { message: "Please enter an industry or select one from the list." }),
  targetMarket: z.string().min(1, { message: "Please specify your target market." }),
  businessModels: z.array(z.string()).refine((value) => value.length > 0, {
    message: "Select at least one business model.",
  }),
  fundingStage: z.enum(["bootstrap", "seed", "seriesA", "established"], {
    required_error: "Please select a funding stage.",
  }),
  problemToSolve: z.string().min(10, { message: "Problem description must be at least 10 characters." }),
  techRequirements: z.string().optional(),
  additionalInfo: z.string().optional(),
})

export type StartupIdeaFormValues = z.infer<typeof formSchema>

interface StartupIdeaGeneratorFormProps {
  onSubmit: (data: StartupIdeaFormValues) => void
  isLoading: boolean
}

export function StartupIdeaGeneratorForm({
  onSubmit,
  isLoading,
}: StartupIdeaGeneratorFormProps) {
  const form = useForm<StartupIdeaFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      industry: "",
      targetMarket: "",
      businessModels: ["saas"],
      fundingStage: "seed",
      problemToSolve: "",
      techRequirements: "",
      additionalInfo: "",
    },
  })

  return (
    <Card className="border-2 border-gray-200 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="text-gray-800">
            Startup Idea Requirements
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Industry */}
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-gray-700 font-semibold">
                    <Briefcase className="h-4 w-4" />
                    Industry / Sector *
                  </FormLabel>
                  <div className="space-y-3">
                    <FormControl>
                      <Input
                        placeholder="Enter industry or sector"
                        className="border-gray-200 focus:border-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="border-gray-200 focus:border-gray-400">
                        <SelectValue placeholder="Or select an industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map(industry => (
                          <SelectItem key={industry.value} value={industry.value}>
                            <div className="flex items-center gap-2">
                              <span className={industry.color}>{industry.icon}</span>
                              {industry.value}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <FormDescription className="text-gray-600">
                    Specify the industry or sector for your startup idea
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Target Market */}
            <FormField
              control={form.control}
              name="targetMarket"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-gray-700 font-semibold">
                    <Users className="h-4 w-4" />
                    Target Market *
                  </FormLabel>
                  <div className="space-y-3">
                    <FormControl>
                      <Input
                        placeholder="Enter target market"
                        className="border-gray-200 focus:border-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="border-gray-200 focus:border-gray-400">
                        <SelectValue placeholder="Or select from common markets" />
                      </SelectTrigger>
                      <SelectContent>
                        {targetMarkets.map(market => (
                          <SelectItem key={market} value={market}>
                            {market}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <FormDescription className="text-gray-600">
                    Who will be the customers of your startup?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Business Models */}
            <FormField
              control={form.control}
              name="businessModels"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="flex items-center gap-2 text-gray-700 font-semibold">
                      <LineChart className="h-4 w-4" />
                      Business Models *
                    </FormLabel>
                    <FormDescription className="text-gray-600">
                      Select preferred business models for your startup
                    </FormDescription>
                  </div>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                    {businessModels.map((model) => (
                      <FormField
                        key={model.id}
                        control={form.control}
                        name="businessModels"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={model.id}
                              className="flex flex-col items-center justify-center rounded-md border border-gray-200 p-2 hover:bg-gray-50 transition-colors h-full min-h-[60px]"
                            >
                              <FormControl>
                                <div className="flex items-center justify-center w-full h-full">
                                  <Checkbox
                                    id={`business-model-${model.id}`}
                                    checked={field.value?.includes(model.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, model.id])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== model.id
                                            )
                                          )
                                    }}
                                    className="sr-only"
                                  />
                                  <Label 
                                    htmlFor={`business-model-${model.id}`}
                                    className={`flex flex-col items-center justify-center w-full h-full p-2 text-center cursor-pointer rounded-md transition-all duration-200 ${
                                      field.value?.includes(model.id) 
                                        ? 'bg-gray-200 border-gray-400 font-semibold shadow-sm' 
                                        : 'hover:bg-gray-50 border-transparent'
                                    }`}
                                  >
                                    <span className="text-sm text-gray-800">
                                      {model.label}
                                    </span>
                                  </Label>
                                </div>
                              </FormControl>
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

            {/* Funding Stage */}
            <FormField
              control={form.control}
              name="fundingStage"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="flex items-center gap-2 text-gray-700 font-semibold">
                    <DollarSign className="h-4 w-4" />
                    Funding Stage *
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-2"
                    >
                      <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                        <RadioGroupItem value="bootstrap" id="bootstrap" className="border-gray-400" />
                        <Label htmlFor="bootstrap" className="text-gray-700 font-medium cursor-pointer">Bootstrap / Self-funded</Label>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                        <RadioGroupItem value="seed" id="seed" className="border-gray-400" />
                        <Label htmlFor="seed" className="text-gray-700 font-medium cursor-pointer">Seed Funding</Label>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                        <RadioGroupItem value="seriesA" id="seriesA" className="border-gray-400" />
                        <Label htmlFor="seriesA" className="text-gray-700 font-medium cursor-pointer">Series A or Beyond</Label>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                        <RadioGroupItem value="established" id="established" className="border-gray-400" />
                        <Label htmlFor="established" className="text-gray-700 font-medium cursor-pointer">Established Company</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Problem to Solve */}
            <FormField
              control={form.control}
              name="problemToSolve"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-gray-700 font-semibold">
                    <Target className="h-4 w-4" />
                    Problem to Solve *
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the problem your startup should address..."
                      className="resize-y min-h-[100px] border-gray-200 focus:border-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-gray-600">
                    What pain point or challenge should your startup solve?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Tech Requirements */}
            <FormField
              control={form.control}
              name="techRequirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-gray-700 font-semibold">
                    <Layers className="h-4 w-4" />
                    Technology Requirements (Optional)
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any specific technologies or platforms you want to use..."
                      className="resize-y min-h-[80px] border-gray-200 focus:border-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-gray-600">
                    Specify any technologies, platforms, or technical requirements
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
                  <FormLabel className="flex items-center gap-2 text-gray-700 font-semibold">
                    <Lightbulb className="h-4 w-4" />
                    Additional Information (Optional)
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any other details that might help generate better startup ideas..."
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
              className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold py-3 text-lg shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating Startup Ideas...
                </>
              ) : (
                <>
                  <Rocket className="mr-2 h-5 w-5" />
                  Generate Startup Ideas
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}