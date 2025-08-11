"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Textarea } from "@/components/ui/textarea"
import { Check, Copy, Edit, Globe } from "lucide-react"

interface TranslatorOutputProps {
  translatedText: string
  isLoading: boolean
  targetLanguage: string
}

export function TranslatorOutput({ 
  translatedText, 
  isLoading, 
  targetLanguage 
}: TranslatorOutputProps) {
  const [isCopied, setIsCopied] = React.useState(false)
  const [isEditing, setIsEditing] = React.useState(false)
  const [editedText, setEditedText] = React.useState("")

  React.useEffect(() => {
    if (translatedText) {
      setEditedText(translatedText)
      setIsEditing(false)
    }
  }, [translatedText])

  const handleCopy = () => {
    navigator.clipboard.writeText(isEditing ? editedText : translatedText)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const handleEditToggle = () => {
    setIsEditing(!isEditing)
  }

  if (isLoading) {
    return (
      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-black" />
            <span className="text-black">
              Translating to {targetLanguage || "target language"}...
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!translatedText) {
    return (
      <Card className="flex flex-col items-center justify-center h-full text-center p-6 border-gray-200">
        <CardHeader>
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gray-100 rounded-full mb-4">
            <Globe className="w-8 h-8 text-black" />
          </div>
          <CardTitle className="text-black">Your translation will appear here</CardTitle>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card className="border-gray-200">
      <CardHeader className="flex flex-row items-center justify-between border-b border-gray-200">
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-black" />
          <span className="text-black">
            Translated to {targetLanguage}
          </span>
        </CardTitle>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="border-gray-200 hover:bg-gray-100"
            onClick={handleEditToggle}
            title={isEditing ? "Save" : "Edit"}
          >
            <Edit className="h-4 w-4 text-blue-600" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-gray-200 hover:bg-gray-100"
            onClick={handleCopy}
            title="Copy"
          >
            {isCopied ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4 text-blue-600" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        {isEditing ? (
          <Textarea
            value={editedText}
            onChange={e => setEditedText(e.target.value)}
            className="w-full min-h-[150px] resize-y border-gray-200 focus-visible:ring-black"
          />
        ) : (
          <div className="prose prose-sm max-w-none whitespace-pre-wrap text-sm">
            {translatedText}
          </div>
        )}
      </CardContent>
    </Card>
  )
}