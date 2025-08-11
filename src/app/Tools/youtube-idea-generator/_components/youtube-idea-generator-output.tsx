"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Textarea } from "@/components/ui/textarea"
import { 
  AlertCircle, 
  ArrowRight, 
  Bot,
  Camera, 
  Check, 
  CheckCircle, 
  ChevronRight, 
  Circle, 
  Clock, 
  Copy, 
  Edit, 
  FileText, 
  Film, 
  Flame, 
  Layers, 
  ListChecks, 
  Sparkles, 
  Tag, 
  ThumbsUp, 
  TrendingUp, 
  Users, 
  Video, 
  Youtube, 
  Zap
} from "lucide-react"

interface YouTubeIdeaOutputProps {
  generatedIdeas: string
  isLoading: boolean
}

export function YouTubeIdeaOutput({ generatedIdeas, isLoading }: YouTubeIdeaOutputProps) {
  const [isCopied, setIsCopied] = React.useState(false)
  const [isEditing, setIsEditing] = React.useState(false)
  const [editedIdeas, setEditedIdeas] = React.useState("")

  React.useEffect(() => {
    if (generatedIdeas) {
      setEditedIdeas(generatedIdeas)
      setIsEditing(false)
    }
  }, [generatedIdeas])

  const handleCopy = () => {
    navigator.clipboard.writeText(isEditing ? editedIdeas : generatedIdeas)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const handleEditToggle = () => {
    setIsEditing(!isEditing)
  }

  const getSectionIcon = (title: string) => {
    const titleLower = title.toLowerCase()
    
    if (titleLower.includes('title') || titleLower.includes('idea') || titleLower.includes('#')) {
      return <Video className="h-5 w-5 text-gray-700" />
    }
    if (titleLower.includes('hook') || titleLower.includes('intro') || titleLower.includes('opening')) {
      return <Flame className="h-5 w-5 text-gray-700" />
    }
    if (titleLower.includes('thumbnail') || titleLower.includes('preview')) {
      return <Camera className="h-5 w-5 text-gray-700" />
    }
    if (titleLower.includes('script') || titleLower.includes('outline') || titleLower.includes('content')) {
      return <FileText className="h-5 w-5 text-gray-600" />
    }
    if (titleLower.includes('seo') || titleLower.includes('keywords') || titleLower.includes('tags')) {
      return <Tag className="h-5 w-5 text-gray-700" />
    }
    if (titleLower.includes('engagement') || titleLower.includes('cta') || titleLower.includes('call to action')) {
      return <ThumbsUp className="h-5 w-5 text-gray-700" />
    }
    if (titleLower.includes('duration') || titleLower.includes('length') || titleLower.includes('time')) {
      return <Clock className="h-5 w-5 text-gray-700" />
    }
    if (titleLower.includes('trending') || titleLower.includes('viral') || titleLower.includes('popular')) {
      return <TrendingUp className="h-5 w-5 text-gray-700" />
    }
    
    return <ArrowRight className="h-5 w-5 text-gray-600" />
  }

  const getSectionColor = (title: string) => {
    const titleLower = title.toLowerCase()
    
    if (titleLower.includes('title') || titleLower.includes('idea') || titleLower.includes('#')) {
      return "border-gray-400 bg-gradient-to-r from-gray-50 to-gray-100"
    }
    if (titleLower.includes('hook') || titleLower.includes('intro') || titleLower.includes('opening')) {
      return "border-gray-300 bg-gradient-to-r from-gray-50 to-gray-75"
    }
    if (titleLower.includes('thumbnail') || titleLower.includes('preview')) {
      return "border-gray-400 bg-gradient-to-r from-gray-50 to-gray-100"
    }
    if (titleLower.includes('script') || titleLower.includes('outline') || titleLower.includes('content')) {
      return "border-gray-300 bg-gradient-to-r from-gray-50 to-gray-75"
    }
    if (titleLower.includes('seo') || titleLower.includes('keywords') || titleLower.includes('tags')) {
      return "border-gray-400 bg-gradient-to-r from-gray-50 to-gray-100"
    }
    if (titleLower.includes('engagement') || titleLower.includes('cta') || titleLower.includes('call to action')) {
      return "border-gray-300 bg-gradient-to-r from-gray-50 to-gray-75"
    }
    if (titleLower.includes('duration') || titleLower.includes('length') || titleLower.includes('time')) {
      return "border-gray-400 bg-gradient-to-r from-gray-50 to-gray-100"
    }
    if (titleLower.includes('trending') || titleLower.includes('viral') || titleLower.includes('popular')) {
      return "border-gray-300 bg-gradient-to-r from-gray-50 to-gray-75"
    }
    
    return "border-gray-300 bg-gradient-to-r from-gray-50 to-gray-100"
  }

  const parseMarkdownList = (content: string) => {
    const lines = content.split('\n')
    const items: React.ReactNode[] = []
    
    lines.forEach((line, index) => {
      const trimmedLine = line.trim()
      if (!trimmedLine) return
      
      // Handle bullet points (- or *)
      if (trimmedLine.match(/^[-*]\s+/)) {
        const text = trimmedLine.replace(/^[-*]\s+/, '')
        items.push(
          <div key={index} className="flex items-start gap-3 py-2">
            <Circle className="h-4 w-4 mt-1 text-gray-500 fill-current" />
            <span className="text-gray-700 leading-relaxed">{text}</span>
          </div>
        )
      }
      // Handle numbered lists
      else if (trimmedLine.match(/^\d+\.\s+/)) {
        const text = trimmedLine.replace(/^\d+\.\s+/, '')
        const number = trimmedLine.match(/^(\d+)\./)?.[1] || '1'
        items.push(
          <div key={index} className="flex items-start gap-3 py-2">
            <div className="flex items-center justify-center w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full mt-0.5">
              {number}
            </div>
            <span className="text-gray-700 leading-relaxed">{text}</span>
          </div>
        )
      }
      // Handle checklist items
      else if (trimmedLine.match(/^[-*]\s*\[[ x]\]/)) {
        const isChecked = trimmedLine.includes('[x]')
        const text = trimmedLine.replace(/^[-*]\s*\[[ x]\]\s*/, '')
        items.push(
          <div key={index} className="flex items-start gap-3 py-2">
            {isChecked ? (
              <CheckCircle className="h-4 w-4 mt-1 text-green-500" />
            ) : (
              <Circle className="h-4 w-4 mt-1 text-gray-400" />
            )}
            <span className={`leading-relaxed ${isChecked ? 'text-gray-600 line-through' : 'text-gray-700'}`}>
              {text}
            </span>
          </div>
        )
      }
      // Regular text
      else if (trimmedLine && !trimmedLine.startsWith('#')) {
        items.push(
          <p key={index} className="text-gray-700 leading-relaxed py-1">
            {trimmedLine}
          </p>
        )
      }
    })
    
    return items.length > 0 ? <div className="space-y-1">{items}</div> : null
  }

  const formatIdeas = (ideas: string) => {
    if (!ideas) return []

    // First, let's split by major headers (### or ##) or numbered ideas (1., 2., etc.)
    const sections = ideas.split(/(?=#{2,3}\s|(?:^|\n)\d+\.\s)/g).filter(section => section.trim())
    
    if (sections.length === 0) {
      // Fallback: split by double line breaks
      return ideas.split(/\n\s*\n/g).map((section, index) => {
        const trimmedSection = section.trim()
        if (!trimmedSection) return null

        return (
          <div key={index} className="p-4 rounded-lg border border-gray-200 bg-white mb-4 shadow-sm">
            <div className="space-y-3">
              {parseMarkdownList(trimmedSection) || (
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{trimmedSection}</p>
              )}
            </div>
          </div>
        )
      }).filter(Boolean)
    }

    return sections.map((section, index) => {
      const trimmedSection = section.trim()
      if (!trimmedSection) return null

      // Extract header and content
      const headerMatch = trimmedSection.match(/^(#{2,3})\s+(.+?)(\n|$)/)
      
      if (headerMatch) {
        const headerLevel = headerMatch[1].length
        const title = headerMatch[2].trim()
        const content = trimmedSection.replace(/^#{2,3}\s+.+?(\n|$)/, '').trim()
        
        const sectionColor = getSectionColor(title)
        const sectionIcon = getSectionIcon(title)
        
        return (
          <div key={index} className={`p-6 rounded-xl border-l-4 ${sectionColor} mb-6 shadow-lg hover:shadow-xl transition-shadow duration-200`}>
            <div className="flex items-center gap-3 mb-4">
              {sectionIcon}
              <h3 className={`font-bold text-gray-800 ${headerLevel === 2 ? 'text-2xl' : 'text-xl'}`}>
                {title}
              </h3>
            </div>
            {content && (
              <div className="space-y-3">
                {parseMarkdownList(content) || (
                  <p className="text-gray-700 leading-relaxed text-base whitespace-pre-wrap">
                    {content}
                  </p>
                )}
              </div>
            )}
          </div>
        )
      }

      // Handle numbered sections (like 1. Video Idea: Title)
      const numberedMatch = trimmedSection.match(/^(\d+)\.\s+(.+?)(?:\n|$)/)
      if (numberedMatch) {
        const ideaNumber = numberedMatch[1]
        const firstLine = numberedMatch[2].trim()
        const restContent = trimmedSection.replace(/^\d+\.\s+.+?(?:\n|$)/, '').trim()
        
        return (
          <div key={index} className="p-6 rounded-xl border-l-4 border-red-300 bg-gradient-to-r from-red-50 to-red-100 mb-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-red-500 text-white text-sm font-bold rounded-full">
                {ideaNumber}
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                {firstLine}
              </h3>
            </div>
            {restContent && (
              <div className="space-y-4 mt-4">
                {parseMarkdownList(restContent) || (
                  <div className="text-gray-700 leading-relaxed text-base whitespace-pre-wrap">
                    {restContent.split(/\n\s*\n/).map((paragraph, i) => {
                      // Check if paragraph has a subsection heading (bold text or h4)
                      const subheaderMatch = paragraph.match(/^(#{4}\s+|\*\*)(.+?)(\*\*)?(?:\n|$)/)
                      
                      if (subheaderMatch) {
                        const subheading = subheaderMatch[2].trim()
                        const subcontent = paragraph.replace(/^(?:#{4}\s+|\*\*)(.+?)(?:\*\*)?(?:\n|$)/, '').trim()
                        const subIcon = getSectionIcon(subheading)
                        const subColor = getSectionColor(subheading)
                        
                        return (
                          <div key={i} className={`p-4 rounded-lg border-l-4 ${subColor} mt-4`}>
                            <div className="flex items-center gap-2 mb-2">
                              {subIcon}
                              <h4 className="font-semibold text-gray-800">{subheading}</h4>
                            </div>
                            {subcontent && (
                              <div className="pl-6">
                                {parseMarkdownList(subcontent) || (
                                  <p className="text-gray-700 leading-relaxed">
                                    {subcontent}
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                        )
                      }
                      
                      return (
                        <p key={i} className="text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      )
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        )
      }

      // Fallback for other formats
      return (
        <div key={index} className="p-4 rounded-lg border border-gray-200 bg-white mb-4 shadow-sm">
          <div className="space-y-3">
            {parseMarkdownList(trimmedSection) || (
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{trimmedSection}</p>
            )}
          </div>
        </div>
      )
    }).filter(Boolean)
  }

  if (isLoading) {
    return (
      <Card className="border-2 border-gray-200">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
          <CardTitle className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg">
              <Sparkles className="h-5 w-5 text-white animate-pulse" />
            </div>
            <span className="bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent">
              Generating Your YouTube Video Ideas...
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="space-y-6">
            {/* Idea 1 Skeleton */}
            <div className="p-4 rounded-lg border-l-4 border-gray-200 bg-gray-50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <Skeleton className="h-6 w-48" />
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4 mt-2" />
            </div>
            
            {/* Idea 2 Skeleton */}
            <div className="p-4 rounded-lg border-l-4 border-gray-200 bg-gray-50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <Skeleton className="h-6 w-40" />
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6 mt-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!generatedIdeas) {
    return (
      <Card className="flex flex-col items-center justify-center h-full min-h-[400px] border-2 border-dashed border-gray-200 bg-gray-50/50">
        <div className="w-full max-w-md px-6 py-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full shadow-sm">
            <Youtube className="w-10 h-10 text-gray-600" />
          </div>
          <h3 className="mb-4 text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            Your AI-Generated YouTube Ideas Will Appear Here
          </h3>
          <p className="mb-6 text-gray-600">
            Fill out the form above and click{" "}
            <span className="font-semibold text-gray-800">"Generate YouTube Video Ideas"</span>{" "}
            to get creative content suggestions.
          </p>
          <div className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-600 bg-white rounded-full shadow-sm">
            <Zap className="w-4 h-4 mr-2 text-yellow-500" />
            <span>Powered by Advanced AI</span>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="border-2 border-gray-200 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <span className="bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent">
            Your AI-Generated YouTube Video Ideas
          </span>
        </CardTitle>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handleEditToggle}
            title={isEditing ? "Save" : "Edit"}
            className="border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleCopy}
            title="Copy to clipboard"
            className="border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            {isCopied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {isEditing ? (
          <div className="space-y-4">
            <Textarea
              value={editedIdeas}
              onChange={e => setEditedIdeas(e.target.value)}
              className="w-full min-h-[500px] resize-y font-mono text-sm border-gray-300 focus:border-red-400"
              placeholder="Edit your ideas..."
            />
            <div className="flex justify-end gap-2">
              <Button 
                variant="outline" 
                onClick={() => setIsEditing(false)}
                className="border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </Button>
              <Button 
                onClick={() => {
                  setIsEditing(false)
                }}
                className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white"
              >
                Save Changes
              </Button>
            </div>
          </div>
        ) : (
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6">
              {formatIdeas(generatedIdeas)}
            </div>
            
            {/* Success message */}
            <div className="mt-8 p-4 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 text-gray-700 font-medium">
                <Sparkles className="h-5 w-5" />
                <span>Your YouTube video ideas are ready! Use the buttons above to copy or edit.</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}