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
  Bot, 
  Check, 
  Copy, 
  Edit, 
  Newspaper, 
  Sparkles, 
  Users, 
  FileText, 
  ArrowRight,
  CheckCircle,
  Circle,
  Bookmark,
  Hash,
  ListChecks
} from "lucide-react"

interface BlogIdeaOutputProps {
  generatedIdeas: string
  isLoading: boolean
}

export function BlogIdeaOutput({ generatedIdeas, isLoading }: BlogIdeaOutputProps) {
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
    
    if (titleLower.includes('blog post') || titleLower.includes('idea') || titleLower.includes('headline')) {
      return <Newspaper className="h-5 w-5 text-gray-700" />
    }
    if (titleLower.includes('description') || titleLower.includes('overview')) {
      return <FileText className="h-5 w-5 text-gray-700" />
    }
    if (titleLower.includes('key points') || titleLower.includes('sections') || titleLower.includes('outline')) {
      return <ListChecks className="h-5 w-5 text-gray-700" />
    }
    if (titleLower.includes('keywords') || titleLower.includes('seo')) {
      return <Hash className="h-5 w-5 text-gray-700" />
    }
    if (titleLower.includes('audience') || titleLower.includes('target')) {
      return <Users className="h-5 w-5 text-gray-700" />
    }
    if (titleLower.includes('strategy') || titleLower.includes('tips')) {
      return <Sparkles className="h-5 w-5 text-gray-700" />
    }
    
    return <ArrowRight className="h-5 w-5 text-gray-600" />
  }

  const getSectionColor = (title: string) => {
    const titleLower = title.toLowerCase()
    
    if (titleLower.includes('blog post') || titleLower.includes('idea') || titleLower.includes('headline')) {
      return "border-gray-300 bg-gradient-to-r from-gray-50 to-gray-100"
    }
    if (titleLower.includes('description') || titleLower.includes('overview')) {
      return "border-gray-300 bg-gradient-to-r from-gray-50 to-gray-100"
    }
    if (titleLower.includes('key points') || titleLower.includes('sections') || titleLower.includes('outline')) {
      return "border-gray-300 bg-gradient-to-r from-gray-50 to-gray-100"
    }
    if (titleLower.includes('keywords') || titleLower.includes('seo')) {
      return "border-gray-300 bg-gradient-to-r from-gray-50 to-gray-100"
    }
    if (titleLower.includes('audience') || titleLower.includes('target')) {
      return "border-gray-300 bg-gradient-to-r from-gray-50 to-gray-100"
    }
    if (titleLower.includes('strategy') || titleLower.includes('tips')) {
      return "border-gray-300 bg-gradient-to-r from-gray-50 to-gray-100"
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
            <div className="flex items-center justify-center w-6 h-6 bg-gray-600 text-white text-xs font-bold rounded-full mt-0.5">
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
              <CheckCircle className="h-4 w-4 mt-1 text-gray-600" />
            ) : (
              <Circle className="h-4 w-4 mt-1 text-gray-400" />
            )}
            <span className={`leading-relaxed ${isChecked ? 'text-gray-700 line-through' : 'text-gray-700'}`}>
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

  const formatBlogIdeas = (ideas: string) => {
    if (!ideas) return []

    // Split by numbered blog post ideas (e.g., "1. Blog Post Idea:")
    const blogIdeas = ideas.split(/(?=\d+\.[\s]*(?:Blog Post Idea|Idea|Title):?)/gi)
      .filter(idea => idea.trim())
    
    if (blogIdeas.length === 0) {
      // Fallback: split by double line breaks or numbered items
      return ideas.split(/\n\s*\n|\n(?=\d+\.)/g).map((section, index) => {
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

    return blogIdeas.map((idea, index) => {
      const trimmedIdea = idea.trim()
      if (!trimmedIdea) return null

      // Extract title and content
      const titleMatch = trimmedIdea.match(/^(\d+)\.[\s]*(?:Blog Post Idea|Idea|Title):?\s*(.+?)(?:\n|$)/)
      
      if (titleMatch) {
        const number = titleMatch[1]
        const title = titleMatch[2].trim()
        const content = trimmedIdea.replace(/^\d+\.[\s]*(?:Blog Post Idea|Idea|Title):?\s*.+?(?:\n|$)/, '').trim()
        
        // Parse the content to find sections
        const sections: {title: string, content: string}[] = []
        
        // Common sections in blog idea outputs
        const sectionPatterns = [
          { pattern: /description:?\s*(.+?)(?:\n(?:key points|target keywords|audience|sections):|$)/is, name: "Description" },
          { pattern: /key points:?\s*(.+?)(?:\n(?:description|target keywords|audience|sections):|$)/is, name: "Key Points" },
          { pattern: /target keywords:?\s*(.+?)(?:\n(?:description|key points|audience|sections):|$)/is, name: "Target Keywords" },
          { pattern: /audience:?\s*(.+?)(?:\n(?:description|key points|target keywords|sections):|$)/is, name: "Target Audience" },
          { pattern: /sections:?\s*(.+?)(?:\n(?:description|key points|target keywords|audience):|$)/is, name: "Sections" }
        ]
        
        // Extract sections
        sectionPatterns.forEach(section => {
          const match = content.match(section.pattern)
          if (match && match[1]) {
            sections.push({
              title: section.name,
              content: match[1].trim()
            })
          }
        })
        
        return (
          <div key={index} className="p-6 rounded-xl border-l-4 border-gray-600 bg-gradient-to-r from-gray-50 to-gray-100 mb-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-gray-600 text-white text-sm font-bold rounded-full">
                {number}
              </div>
              <h3 className="font-bold text-xl text-gray-800">
                {title}
              </h3>
            </div>
            
            {sections.length > 0 ? (
              <div className="space-y-4 mt-4">
                {sections.map((section, sIdx) => (
                  <div key={sIdx} className={`p-4 rounded-lg ${getSectionColor(section.title)}`}>
                    <div className="flex items-center gap-2 mb-2">
                      {getSectionIcon(section.title)}
                      <h4 className="font-semibold text-gray-800">{section.title}</h4>
                    </div>
                    <div className="pl-6">
                      {parseMarkdownList(section.content) || (
                        <p className="text-gray-700 leading-relaxed">{section.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3 mt-2">
                {parseMarkdownList(content) || (
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{content}</p>
                )}
              </div>
            )}
            
            <div className="mt-4 flex justify-end">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs flex items-center gap-1 text-gray-700 border-gray-300 hover:bg-gray-100"
              >
                <Bookmark className="h-3 w-3" />
                Save Idea
              </Button>
            </div>
          </div>
        )
      }

      // Fallback for ideas without clear title format
      return (
        <div key={index} className="p-4 rounded-lg border border-gray-200 bg-white mb-4 shadow-sm">
          <div className="space-y-3">
            {parseMarkdownList(trimmedIdea) || (
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{trimmedIdea}</p>
            )}
          </div>
        </div>
      )
    }).filter(Boolean)
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-[200px] w-full rounded-lg" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[80%]" />
        </div>
      </div>
    )
  }

  if (isEditing) {
    return (
      <div className="space-y-4">
        <Textarea
          value={editedIdeas}
          onChange={(e) => setEditedIdeas(e.target.value)}
          className="min-h-[300px] font-mono text-sm"
        />
        <div className="flex items-center gap-2 justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={handleEditToggle}
            className="text-gray-600"
          >
            Cancel
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => {
              setIsEditing(false)
            }}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Save Changes
          </Button>
        </div>
      </div>
    )
  }

  if (!generatedIdeas) {
    return null
  }

  return (
    <Card className="border-2 border-blue-100 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-md">
              <Newspaper className="h-4 w-4 text-white" />
            </div>
            <CardTitle className="text-lg bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Generated Blog Ideas
            </CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleEditToggle}
              className="h-8 w-8 p-0 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            >
              <Edit className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="h-8 w-8 p-0 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
              disabled={isCopied}
            >
              {isCopied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span className="sr-only">Copy</span>
            </Button>
          </div>
        </div>
        <CardDescription className="text-blue-600 flex items-center gap-1.5">
          <Bot className="h-3.5 w-3.5" />
          <span>AI-generated blog post ideas based on your requirements</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-2 pb-6">
        <div className="space-y-6 mt-2">
          {formatBlogIdeas(generatedIdeas)}
        </div>
      </CardContent>
    </Card>
  )
}