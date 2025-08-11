"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { Textarea } from "@/components/ui/textarea"
import { Bot, Check, Copy, Edit, RefreshCw, FileText } from "lucide-react"

interface EmailOutputProps {
  generatedEmail: string
  isLoading: boolean
  onRegenerate?: () => void
}

export function EmailOutput({ generatedEmail, isLoading, onRegenerate }: EmailOutputProps) {
  const [isCopied, setIsCopied] = React.useState(false)
  const [isEditing, setIsEditing] = React.useState(false)
  const [subject, setSubject] = React.useState("")
  const [body, setBody] = React.useState("")

  // Helper function to properly process escaped newlines
  const processEscapedNewlines = (text: string): string => {
    // Replace literal \n with actual newlines
    return text.replace(/\\n/g, '\n');
  }

  React.useEffect(() => {
    if (generatedEmail) {
      try {
        const parsed = JSON.parse(generatedEmail)
        setSubject(parsed.subject || "Generated Subject")
        // Process the body to handle escaped newlines
        setBody(processEscapedNewlines(parsed.body || generatedEmail))
      } catch (_) {
        const lines = generatedEmail.split("\n")
        if (
          lines.length > 1 &&
          lines[0].toLowerCase().startsWith("subject:")
        ) {
          setSubject(lines[0].substring(8).trim())
          setBody(processEscapedNewlines(lines.slice(1).join("\n").trim()))
        } else {
          setSubject("Generated Subject")
          setBody(processEscapedNewlines(generatedEmail))
        }
      }
      setIsEditing(false)
    }
  }, [generatedEmail])

  const handleCopy = () => {
    const fullEmail = `Subject: ${subject}\n\n${body}`
    navigator.clipboard.writeText(fullEmail)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const handleEditToggle = () => {
    setIsEditing(!isEditing)
  }

  // Function to format text with newlines preserved
  const formatEmailText = (text: string) => {
    return text.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        <br />
      </React.Fragment>
    ));
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-1/3" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        <Skeleton className="h-8 w-1/4" />
      </div>
    )
  }

  if (!generatedEmail) {
    return (
      <div className="flex flex-col items-center justify-center h-52 text-center p-6 border bg-zinc-50">
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-primary/10 rounded-full mb-4">
          <Bot className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-lg font-medium mb-1">Your email will appear here</h3>
        <p className="text-zinc-500 text-sm">
          Fill in the details and let the AI work its magic.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <div className="flex flex-row items-center justify-between pb-3 mb-3 border-b">
        <h3 className="text-base font-medium flex items-center gap-2">
          <FileText className="h-4 w-4 text-zinc-600" />
          Generated Email
        </h3>
        <div className="flex gap-2">
          {onRegenerate && (
            <Button
              variant="outline"
              size="icon"
              onClick={onRegenerate}
              title="Regenerate"
              className="h-8 w-8 rounded-none"
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          )}
          <Button
            variant="outline"
            size="icon"
            onClick={handleEditToggle}
            title={isEditing ? "Save" : "Edit"}
            className="h-8 w-8 rounded-none"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleCopy}
            title="Copy"
            className="h-8 w-8 rounded-none"
          >
            {isCopied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
      {isEditing ? (
        <div className="space-y-4">
          <Input
            value={subject}
            onChange={e => setSubject(e.target.value)}
            className="font-medium text-base rounded-none"
            placeholder="Subject"
          />
          <Textarea
            value={body}
            onChange={e => setBody(e.target.value)}
            className="w-full min-h-[200px] resize-y rounded-none"
            placeholder="Email body"
          />
        </div>
      ) : (
        <div className="space-y-4">
          <h3 className="font-medium border-b pb-2 text-base">Subject: {subject}</h3>
          <div className="whitespace-pre-wrap text-base p-4 border rounded-md">
            {formatEmailText(body)}
          </div>
        </div>
      )}
    </div>
  )
}