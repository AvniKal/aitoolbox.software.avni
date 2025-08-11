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
import { 
  Check, 
  Copy, 
  Edit, 
  RefreshCw,
  Download,
  MessageSquare
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface PromptOutputProps {
  generatedPrompt: string
  isLoading: boolean
  promptType: "user" | "system"
  originalPrompt: string
  onRegenerate?: () => void
}

export function PromptOutput({ 
  generatedPrompt, 
  isLoading, 
  promptType,
  originalPrompt,
  onRegenerate 
}: PromptOutputProps) {
  const [isCopied, setIsCopied] = React.useState(false)
  const [isEditing, setIsEditing] = React.useState(false)
  const [editedPrompt, setEditedPrompt] = React.useState("")

  React.useEffect(() => {
    if (generatedPrompt) {
      setEditedPrompt(generatedPrompt)
      setIsEditing(false)
    }
  }, [generatedPrompt])

  const handleCopy = () => {
    navigator.clipboard.writeText(isEditing ? editedPrompt : generatedPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const handleEditToggle = () => {
    setIsEditing(!isEditing)
  }

  const handleDownload = () => {
    const content = isEditing ? editedPrompt : generatedPrompt
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${promptType}-prompt.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const formatPrompt = (prompt: string) => {
    if (!prompt) return null

    // Return the prompt as plain text without any formatting or styling
    return (
      <div className="p-4 bg-white border rounded-none">
        <pre className="text-zinc-800 whitespace-pre-wrap font-sans text-base">
          {prompt}
        </pre>
      </div>
    )
  }

  if (isLoading) {
    return (
      <Card className="rounded-none">
        <CardHeader>
          <CardTitle className="text-base">
            Enhancing Your Prompt...
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-4">
          <div className="space-y-3">
            <Skeleton className="h-5 w-full rounded-none" />
            <Skeleton className="h-5 w-5/6 rounded-none" />
            <Skeleton className="h-5 w-4/5 rounded-none" />
            <div className="space-y-2 mt-4">
              <Skeleton className="h-5 w-full rounded-none" />
              <Skeleton className="h-5 w-full rounded-none" />
              <Skeleton className="h-5 w-3/4 rounded-none" />
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!generatedPrompt) {
    return (
      <Card className="flex flex-col items-center justify-center h-full text-center p-8 min-h-[200px] border-dashed rounded-none">
        <p className="text-base text-muted-foreground">
          Your enhanced prompt will appear here after generation.
        </p>
      </Card>
    )
  }

  return (
    <Card className="rounded-none">
      <CardHeader className="flex flex-row items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="text-sm rounded-none">
            {promptType === "user" ? "User Prompt" : "System Prompt"}
          </Badge>
        </div>
        <div className="flex gap-2">
          {onRegenerate && (
            <Button
              variant="outline"
              size="icon"
              onClick={onRegenerate}
              title="Regenerate"
              className="h-8 w-8 rounded-none"
            >
              <RefreshCw className="h-3 w-3" />
            </Button>
          )}
          <Button
            variant="outline"
            size="icon"
            onClick={handleEditToggle}
            title={isEditing ? "Save" : "Edit"}
            className="h-8 w-8 rounded-none"
          >
            <Edit className="h-3 w-3" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleDownload}
            title="Download as file"
            className="h-8 w-8 rounded-none"
          >
            <Download className="h-3 w-3" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleCopy}
            title="Copy to clipboard"
            className="h-8 w-8 rounded-none"
          >
            {isCopied ? (
              <Check className="h-3 w-3" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        {/* Original Prompt Preview */}
        {originalPrompt && (
          <div className="mb-4 p-3 bg-zinc-50 border rounded-none text-sm">
            <h4 className="text-sm font-medium text-zinc-600 mb-1 flex items-center gap-1">
              <MessageSquare className="h-3 w-3" />
              Original Prompt:
            </h4>
            <p className="text-base text-zinc-700 italic line-clamp-3">{originalPrompt}</p>
          </div>
        )}

        {isEditing ? (
          <div className="space-y-4">
            <Textarea
              value={editedPrompt}
              onChange={e => setEditedPrompt(e.target.value)}
              className="w-full min-h-[300px] resize-y font-mono text-base rounded-none"
              placeholder="Edit your enhanced prompt..."
            />
            <div className="flex justify-end gap-2">
              <Button 
                variant="outline" 
                onClick={() => setIsEditing(false)}
                size="sm"
                className="rounded-none"
              >
                Cancel
              </Button>
              <Button 
                onClick={() => {
                  setIsEditing(false)
                }}
                size="sm"
                className="rounded-none"
              >
                Save Changes
              </Button>
            </div>
          </div>
        ) : (
          <div>
            {formatPrompt(generatedPrompt)}
          </div>
        )}
      </CardContent>
    </Card>
  )
}