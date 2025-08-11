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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { 
  Loader2, 
  User, 
  Settings
} from "lucide-react"

const promptTypes = [
  { value: "user", label: "User Prompt", icon: <User className="h-4 w-4" /> },
  { value: "system", label: "System Prompt", icon: <Settings className="h-4 w-4" /> },
]

const promptCategories = [
  "Creative Writing",
  "Code Generation", 
  "Data Analysis",
  "Customer Support",
  "Content Creation",
  "Research & Summarization",
  "Problem Solving",
  "Education & Learning",
  "Business & Marketing",
  "Translation & Language",
  "General Purpose"
]

const toneOptions = [
  "Professional",
  "Casual", 
  "Technical",
  "Creative",
  "Authoritative",
  "Friendly",
  "Academic",
  "Conversational"
]

const formSchema = z.object({
  prompt: z
    .string()
    .min(10, { message: "Prompt must be at least 10 characters." })
    .max(2000, { message: "Prompt must be less than 2000 characters." }),
  promptType: z.enum(["user", "system"], {
    required_error: "Please select a prompt type.",
  }),
  category: z.string().optional(),
  tone: z.string().optional(),
  objective: z.string().optional(),
})

export type PromptFormValues = z.infer<typeof formSchema>

interface PromptGeneratorFormProps {
  onSubmit: (data: PromptFormValues) => void
  isLoading: boolean
}

export function PromptGeneratorForm({
  onSubmit,
  isLoading,
}: PromptGeneratorFormProps) {
  const form = useForm<PromptFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      promptType: "user",
      category: "",
      tone: "",
      objective: "",
    },
  })

  return (
    <Card className="rounded-none border-0 shadow-none">
      <CardContent className="p-4 pt-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Prompt Type */}
            <FormField
              control={form.control}
              name="promptType"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-base">Prompt Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-row space-x-2"
                    >
                      {promptTypes.map((type) => (
                        <div key={type.value} className="flex items-center space-x-2 p-2 rounded-none border">
                          <RadioGroupItem value={type.value} id={type.value} className="rounded-none" />
                          <Label htmlFor={type.value} className="flex items-center gap-2 cursor-pointer">
                            <span>{type.icon}</span>
                            <span>{type.label}</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormDescription className="text-sm text-zinc-500">
                    User prompts are instructions for AI responses. System prompts define AI behavior.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Original Prompt */}
            <FormField
              control={form.control}
              name="prompt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Your Prompt</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your prompt here..."
                      className="resize-y min-h-[120px] rounded-none text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-sm text-zinc-500">
                    Enter your basic prompt that you want to enhance and optimize.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Category */}
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Category (Optional)</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="rounded-none text-sm">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="rounded-none">
                        {promptCategories.map(category => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Tone */}
              <FormField
                control={form.control}
                name="tone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Desired Tone (Optional)</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="rounded-none text-sm">
                          <SelectValue placeholder="Select tone" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="rounded-none">
                        {toneOptions.map(tone => (
                          <SelectItem key={tone} value={tone}>
                            {tone}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Objective */}
            <FormField
              control={form.control}
              name="objective"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Specific Objective (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="What specific outcome do you want?"
                      className="resize-y min-h-[80px] rounded-none text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              disabled={isLoading} 
              className="w-full rounded-none text-base py-6"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enhancing Prompt...
                </>
              ) : (
                "Generate Enhanced Prompt"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}