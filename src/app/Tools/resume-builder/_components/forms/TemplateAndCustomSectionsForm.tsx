"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { resumeSchema, ResumeValues } from "@/lib/resume/validation";
import { cn } from "@/lib/utils";
import { EditorFormProps } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trash2 } from "lucide-react";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";

export default function TemplateAndCustomSectionsForm({
  resumeData,
  setResumeData,
}: EditorFormProps) {
  const form = useForm<ResumeValues>({
    resolver: zodResolver(resumeSchema),
    defaultValues: {
      template: resumeData.template || "templateA",
      customSections: resumeData.customSections || [],
    },
  });

  useEffect(() => {
    const { unsubscribe } = form.watch((values) => {
      setResumeData({
        ...resumeData,
        template: values.template,
        customSections: values.customSections?.filter(
          (section) =>
            section &&
            section.title.trim() !== "" &&
            section.items.length > 0 &&
            section.items.some((item) => item.trim() !== "")
        ) || [],
      });
    });
    return unsubscribe;
  }, [form, resumeData, setResumeData]);

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "customSections",
  });

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Template & Custom Sections</h2>
        <p className="text-sm text-muted-foreground">
          Choose your template and add any extra sections
        </p>
      </div>

      <Form {...form}>
        <div className="space-y-4">
          {/* Template Selector */}
          <FormField
            control={form.control}
            name="template"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Template</FormLabel>
                <FormControl>
                  <select {...field} className="border rounded p-2 w-full">
                    <option value="templateA">Template A</option>
                    <option value="templateB">Template B</option>
                    <option value="templateC">Template C</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Custom Sections */}
          {fields.map((field, index) => (
            <div
              key={field.id}
              className={cn(
                "space-y-4 rounded-lg border bg-background p-4"
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Custom Section #{index + 1}
                </h3>
                <button
                  type="button"
                  className="rounded p-1 text-muted-foreground hover:bg-muted"
                  onClick={() => remove(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              <FormField
                control={form.control}
                name={`customSections.${index}.title`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Section Title</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g., Certifications" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`customSections.${index}.items`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Items (comma separated)</FormLabel>
                    <FormControl>
                      <Textarea
                        value={field.value?.join(", ") || ""}
                        onChange={(e) =>
                          field.onChange(
                            e.target.value
                              .split(",")
                              .map((item) => item.trim())
                              .filter(Boolean)
                          )
                        }
                        placeholder="e.g., AWS Certified, Scrum Master"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => append({ title: "", items: [] })}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Custom Section
          </Button>
        </div>
      </Form>
    </div>
  );
}

