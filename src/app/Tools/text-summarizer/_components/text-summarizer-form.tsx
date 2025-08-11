"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const countWords = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

const formSchema = z.object({
  text: z.string().refine((val) => {
    const words = countWords(val)
    return words >= 100 && words <= 5000
  }, { message: "Text must be between 100 and 5000 words." }),
  summaryLength: z.enum(["very-short", "short", "medium", "detailed"], {
    required_error: "Please select a summary length.",
  }),
})
export type FormValues = z.infer<typeof formSchema>

export function TextSummarizerForm({
  onSubmit,
  isLoading,
}: {
  onSubmit: (data: FormValues) => void
  isLoading: boolean
}) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
      summaryLength: "medium",
    },
  })

  const watchText = form.watch("text")
  const wordCount = countWords(watchText)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Text to Summarize</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Paste your text here (100-5000 words)..."
                  className="h-[300px] resize-none overflow-auto"
                  {...field}
                />
              </FormControl>
              <div className="text-sm text-muted-foreground mt-1">
                {wordCount} words
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="summaryLength"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Summary Length</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select summary length" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="very-short">Very Short (~50 words)</SelectItem>
                  <SelectItem value="short">Short (~100 words)</SelectItem>
                  <SelectItem value="medium">Medium (~250 words)</SelectItem>
                  <SelectItem value="detailed">Detailed (~500 words)</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading || wordCount < 100 || wordCount > 5000}>
          {isLoading ? "Summarizing..." : "Generate Summary"}
        </Button>
      </form>
    </Form>
  )
} 