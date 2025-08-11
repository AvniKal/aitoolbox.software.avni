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
  Package, 
  Target, 
  Users, 
  Layers, 
  Zap, 
  TrendingUp,
  DollarSign,
  Briefcase,
  LineChart,
  Building,
  Lightbulb,
  ShoppingBag,
  Store
} from "lucide-react"

// Define industry options
const industries = [
  { value: "Technology", icon: <Zap className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Health & Wellness", icon: <Target className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Home & Kitchen", icon: <Building className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Beauty & Personal Care", icon: <Briefcase className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Fashion & Apparel", icon: <ShoppingBag className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Sports & Outdoors", icon: <Target className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Toys & Games", icon: <Lightbulb className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Food & Beverage", icon: <Store className="h-4 w-4" />, color: "text-gray-600" },
  { value: "Sustainable Products", icon: <Layers className="h-4 w-4" />, color: "text-gray-600" }
]

// Define target market options
const targetMarkets = [
  "Consumers", "Professionals", "Businesses", "Parents", "Children", "Teenagers", 
  "Young Adults", "Seniors", "Athletes", "Remote Workers", "Travelers", "Health-conscious Individuals"
]

// Define price points
const pricePoints = [
  { id: "budget", label: "Budget-friendly", icon: <DollarSign className="h-4 w-4" />, color: "text-gray-600" },
  { id: "mid-range", label: "Mid-range", icon: <DollarSign className="h-4 w-4" />, color: "text-gray-600" },
  { id: "premium", label: "Premium", icon: <DollarSign className="h-4 w-4" />, color: "text-gray-600" },
  { id: "luxury", label: "Luxury", icon: <DollarSign className="h-4 w-4" />, color: "text-gray-600" }
]

// Define product types
const productTypes = [
  { id: "physical", label: "Physical Product", icon: <Package className="h-4 w-4" />, color: "text-gray-600" },
  { id: "digital", label: "Digital Product", icon: <Zap className="h-4 w-4" />, color: "text-gray-600" },
  { id: "subscription", label: "Subscription", icon: <LineChart className="h-4 w-4" />, color: "text-gray-600" },
  { id: "service", label: "Service", icon: <Users className="h-4 w-4" />, color: "text-gray-600" }
]

const formSchema = z.object({
  industry: z.string().min(1, { message: "Please enter an industry or select one from the list." }),
  targetMarket: z.string().min(1, { message: "Please specify your target market." }),
  productTypes: z.array(z.string()).refine((value) => value.length > 0, {
    message: "Select at least one product type.",
  }),
  pricePoint: z.string().min(1, { message: "Please select a price point." }),
  problemToSolve: z.string().min(10, { message: "Problem description must be at least 10 characters." }),
  competitorProducts: z.string().optional(),
  additionalInfo: z.string().optional(),
})

export type ProductIdeaFormValues = z.infer<typeof formSchema>

interface ProductIdeaGeneratorFormProps {
  onSubmit: (data: ProductIdeaFormValues) => void
  isLoading: boolean
}

export function ProductIdeaGeneratorForm({
  onSubmit,
  isLoading,
}: ProductIdeaGeneratorFormProps) {
  const form = useForm<ProductIdeaFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      industry: "",
      targetMarket: "",
      productTypes: ["physical"],
      pricePoint: "mid-range",
      problemToSolve: "",
      competitorProducts: "",
      additionalInfo: "",
    },
  })

  return (
    <Card className="border-2 border-gray-100 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
        <CardTitle className="flex items-center justify-center gap-3">
          <div className="p-2 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg">
            <Package className="h-5 w-5 text-white" />
          </div>
          <span className="bg-gradient-to-r from-gray-700 to-gray-600 bg-clip-text text-transparent">
            Product Idea Requirements
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
                    Industry / Category *
                  </FormLabel>
                  <div className="space-y-3">
                    <FormControl>
                      <Input
                        placeholder="Enter industry or category"
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
                    Specify the industry or category for your product idea
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
                        className="border-blue-200 focus:border-blue-400"
                        {...field}
                      />
                    </FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="border-blue-200 focus:border-blue-400">
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
                    Who will be the customers for your product?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Product Types */}
            <FormField
              control={form.control}
              name="productTypes"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="flex items-center gap-2 text-gray-700 font-semibold">
                      <Package className="h-4 w-4" />
                      Product Types *
                    </FormLabel>
                    <FormDescription className="text-gray-600">
                      Select the types of products you&apos;re interested in
                    </FormDescription>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {productTypes.map((type) => (
                      <FormField
                        key={type.id}
                        control={form.control}
                        name="productTypes"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={type.id}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-blue-200 p-3 hover:bg-blue-50"
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
                              <FormLabel className="font-normal cursor-pointer flex items-center gap-2">
                                <span className={type.color}>{type.icon}</span>
                                {type.label}
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

            {/* Price Point */}
            <FormField
              control={form.control}
              name="pricePoint"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="flex items-center gap-2 text-gray-700 font-semibold">
                    <DollarSign className="h-4 w-4" />
                    Price Point *
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-2"
                    >
                      {pricePoints.map(price => (
                        <div key={price.id} className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                          <RadioGroupItem value={price.id} id={price.id} className="border-gray-400 text-gray-600" />
                          <Label htmlFor={price.id} className="flex items-center gap-2 text-gray-700 font-medium cursor-pointer">
                            <span className="text-gray-600">{price.icon}</span>
                            {price.label}
                          </Label>
                        </div>
                      ))}
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
                      placeholder="Describe the problem your product should address..."
                      className="resize-y min-h-[100px] border-blue-200 focus:border-blue-400"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-gray-600">
                    What pain point or challenge should your product solve?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Competitor Products */}
            <FormField
              control={form.control}
              name="competitorProducts"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-gray-700 font-semibold">
                    <TrendingUp className="h-4 w-4" />
                    Similar Products (Optional)
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="List any similar or competitor products in the market..."
                      className="resize-y min-h-[80px] border-blue-200 focus:border-blue-400"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-gray-600">
                    Existing products that are similar or competitive
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
                      placeholder="Any other details that might help generate better product ideas..."
                      className="resize-y min-h-[80px] border-blue-200 focus:border-blue-400"
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
                  Generating Product Ideas...
                </>
              ) : (
                <>
                  <Package className="mr-2 h-5 w-5" />
                  Generate Product Ideas
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}