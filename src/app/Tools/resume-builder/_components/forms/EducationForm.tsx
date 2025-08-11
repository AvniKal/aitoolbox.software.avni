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
import { educationSchema, EducationValues } from "@/lib/resume/validation";
import { cn } from "@/lib/utils";
import { EditorFormProps } from "@/types/types";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { zodResolver } from "@hookform/resolvers/zod";
import { GripHorizontal, Plus, Trash2 } from "lucide-react";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";

export default function EducationForm({
  resumeData,
  setResumeData,
}: EditorFormProps) {
  const form = useForm<EducationValues>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      educations: resumeData.educations || [],
    },
  });

  useEffect(() => {
    const { unsubscribe } = form.watch((values) => {
      const validEducations = values.educations?.filter(
        (edu) => edu && (edu.degree || edu.school || edu.startDate || edu.endDate)
      );
      setResumeData({
        ...resumeData,
        educations: validEducations?.length ? validEducations.filter((edu): edu is NonNullable<typeof edu> => !!edu) : [],
      });
    });
    return unsubscribe;
  }, [form, resumeData, setResumeData]);

  const { fields, append, remove, move } = useFieldArray({
    control: form.control,
    name: "educations",
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = fields.findIndex((field) => field.id === active.id);
      const newIndex = fields.findIndex((field) => field.id === over.id);
      move(oldIndex, newIndex);
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p className="text-sm text-muted-foreground">
          Add your academic background
        </p>
      </div>

      <Form {...form}>
        <div className="space-y-4">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis]}
          >
            <SortableContext
              items={fields}
              strategy={verticalListSortingStrategy}
            >
              {fields.map((field, index) => (
                <EducationItem
                  key={field.id}
                  id={field.id}
                  index={index}
                  form={form}
                  remove={remove}
                />
              ))}
            </SortableContext>
          </DndContext>

          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() =>
              append({
                degree: "",
                school: "",
                startDate: "",
                endDate: "",
              })
            }
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Education
          </Button>
        </div>
      </Form>
    </div>
  );
}

function EducationItem({
  id,
  form,
  index,
  remove,
}: {
  id: string;
  form: ReturnType<typeof useForm<EducationValues>>;
  index: number;
  remove: (index: number) => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      className={cn(
        "space-y-4 rounded-lg border bg-background p-4",
        isDragging && "z-50 border-2 border-primary shadow-lg"
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-muted-foreground">
          Education #{index + 1}
        </h3>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded p-1 text-muted-foreground hover:bg-muted"
            onClick={() => remove(index)}
          >
            <Trash2 className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="cursor-grab rounded p-1 text-muted-foreground hover:bg-muted"
            {...attributes}
            {...listeners}
          >
            <GripHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>

      <FormField
        control={form.control}
        name={`educations.${index}.degree`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Degree</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="e.g., Bachelor of Science"
                autoFocus
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`educations.${index}.school`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Institution</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="e.g., University of California"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name={`educations.${index}.startDate`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start Date</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="date"
                  value={field.value?.slice(0, 10)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`educations.${index}.endDate`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>End Date</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="date"
                  value={field.value?.slice(0, 10)}
                  placeholder="Present"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}