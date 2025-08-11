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
  Lightbulb, 
  Sparkles, 
  Target, 
  Users, 
  Layers, 
  Rocket, 
  TrendingUp, 
  Star,
  ArrowRight,
  Zap,
  CheckCircle,
  Circle
} from "lucide-react"

interface IdeaOutputProps {
  generatedIdea: string
  isLoading: boolean
}

export function IdeaOutput({ generatedIdea, isLoading }: IdeaOutputProps) {
  const [isCopied, setIsCopied] = React.useState(false)
  const [isEditing, setIsEditing] = React.useState(false)
  const [editedIdea, setEditedIdea] = React.useState("")

  React.useEffect(() => {
    if (generatedIdea) {
      setEditedIdea(generatedIdea)
      setIsEditing(false)
    }
  }, [generatedIdea])

  const handleCopy = () => {
    navigator.clipboard.writeText(isEditing ? editedIdea : generatedIdea)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const handleEditToggle = () => {
    setIsEditing(!isEditing)
  }

  const getSectionIcon = (title: string) => {
    const titleLower = title.toLowerCase()
    
    if (titleLower.includes('title') || titleLower.includes('idea')) {
      return <Lightbulb className="h-5 w-5 text-gray-700" />
    }
    if (titleLower.includes('concept') || titleLower.includes('overview') || titleLower.includes('thesis')) {
      return <Sparkles className="h-5 w-5 text-gray-600" />
    }
    if (titleLower.includes('audience') || titleLower.includes('target') || titleLower.includes('positioning')) {
      return <Users className="h-5 w-5 text-gray-600" />
    }
    if (titleLower.includes('feature') || titleLower.includes('component') || titleLower.includes('architecture')) {
      return <Layers className="h-5 w-5 text-gray-600" />
    }
    if (titleLower.includes('implementation') || titleLower.includes('strategy') || titleLower.includes('roadmap') || titleLower.includes('entry')) {
      return <Target className="h-5 w-5 text-gray-600" />
    }
    if (titleLower.includes('market') || titleLower.includes('potential') || titleLower.includes('competitive') || titleLower.includes('differentiation')) {
      return <TrendingUp className="h-5 w-5 text-gray-600" />
    }
    if (titleLower.includes('value') || titleLower.includes('proposition') || titleLower.includes('ecosystem')) {
      return <Star className="h-5 w-5 text-gray-600" />
    }
    if (titleLower.includes('step') || titleLower.includes('next') || titleLower.includes('metrics') || titleLower.includes('evolution')) {
      return <Rocket className="h-5 w-5 text-gray-600" />
    }
    
    return <ArrowRight className="h-5 w-5 text-gray-600" />
  }

  const getSectionColor = (title: string) => {
    const titleLower = title.toLowerCase()
    
    if (titleLower.includes('title') || titleLower.includes('idea')) {
      return "border-gray-500 bg-gradient-to-r from-gray-50 to-gray-100"
    }
    if (titleLower.includes('concept') || titleLower.includes('overview') || titleLower.includes('thesis')) {
      return "border-gray-400 bg-gradient-to-r from-gray-50 to-gray-100"
    }
    if (titleLower.includes('audience') || titleLower.includes('target') || titleLower.includes('positioning')) {
      return "border-gray-400 bg-gradient-to-r from-gray-50 to-gray-100"
    }
    if (titleLower.includes('feature') || titleLower.includes('component') || titleLower.includes('architecture')) {
      return "border-gray-300 bg-gradient-to-r from-gray-50 to-gray-100"
    }
    if (titleLower.includes('implementation') || titleLower.includes('strategy') || titleLower.includes('roadmap') || titleLower.includes('entry')) {
      return "border-gray-300 bg-gradient-to-r from-gray-50 to-gray-100"
    }
    if (titleLower.includes('market') || titleLower.includes('potential') || titleLower.includes('competitive') || titleLower.includes('differentiation')) {
      return "border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100"
    }
    if (titleLower.includes('value') || titleLower.includes('proposition') || titleLower.includes('ecosystem')) {
      return "border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100"
    }
    if (titleLower.includes('step') || titleLower.includes('next') || titleLower.includes('metrics') || titleLower.includes('evolution')) {
      return "border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100"
    }
    
    return "border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100"
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

  const formatIdea = (idea: string) => {
    if (!idea) return []

    // First, let's split by major headers (### or ##)
    const sections = idea.split(/(?=#{2,3}\s)/g).filter(section => section.trim())
    
    if (sections.length === 0) {
      // Fallback: split by double line breaks or numbered items
      return idea.split(/\n\s*\n|\n(?=\d+\.)/g).map((section, index) => {
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

      // Handle numbered sections without markdown headers
      if (/^\d+\./.test(trimmedSection)) {
        const parts = trimmedSection.split(/^(\d+\.\s*)/, 2)
        const content = parts[2] || trimmedSection
        const titleMatch = content.match(/^(.*?)[:.\n](.*)/) 
        
        if (titleMatch) {
          const title = titleMatch[1].trim()
          const description = titleMatch[2].trim()
          const sectionColor = getSectionColor(title)
          const sectionIcon = getSectionIcon(title)
          
          return (
            <div key={index} className={`p-6 rounded-xl border-l-4 ${sectionColor} mb-6 shadow-lg hover:shadow-xl transition-shadow duration-200`}>
              <div className="flex items-center gap-3 mb-4">
                {sectionIcon}
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
              </div>
              <div className="space-y-3">
                {parseMarkdownList(description) || (
                  <p className="text-gray-700 leading-relaxed text-base whitespace-pre-wrap">
                    {description}
                  </p>
                )}
              </div>
            </div>
          )
        }
      }

      // Handle **bold** sections
      if (trimmedSection.includes('**')) {
        const boldMatch = trimmedSection.match(/^\*\*(.*?)\*\*(.*)/)
        if (boldMatch) {
          const title = boldMatch[1].trim()
          const content = boldMatch[2].replace(/^[:\s]*/, '').trim()
          const sectionColor = getSectionColor(title)
          const sectionIcon = getSectionIcon(title)
          
          return (
            <div key={index} className={`p-6 rounded-xl border-l-4 ${sectionColor} mb-6 shadow-lg hover:shadow-xl transition-shadow duration-200`}>
              <div className="flex items-center gap-3 mb-4">
                {sectionIcon}
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
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
      }

      // Fallback: treat as regular content
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
      <Card className="border-2 border-blue-100">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
          <CardTitle className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
              <Sparkles className="h-5 w-5 text-white animate-pulse" />
            </div>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Generating Your Idea...
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="space-y-6">
            {/* Main Idea Title Skeleton */}
            <div className="p-4 rounded-lg border-l-4 border-yellow-200 bg-yellow-50">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="h-5 w-5 text-yellow-600" />
                <Skeleton className="h-6 w-48" />
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4 mt-2" />
            </div>
            
            {/* Other sections */}
            <div className="p-4 rounded-lg border-l-4 border-purple-200 bg-purple-50">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="h-5 w-5 text-purple-600" />
                <Skeleton className="h-6 w-40" />
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6 mt-2" />
            </div>
            
            <div className="p-4 rounded-lg border-l-4 border-blue-200 bg-blue-50">
              <div className="flex items-center gap-3 mb-3">
                <Users className="h-5 w-5 text-blue-600" />
                <Skeleton className="h-6 w-44" />
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5 mt-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!generatedIdea) {
    return (
      <Card className="flex flex-col items-center justify-center h-full text-center p-8 min-h-[400px] border-2 border-dashed border-gray-200">
        <CardHeader>
          <div className="flex items-center justify-center w-24 h-24 mx-auto bg-gradient-to-br from-purple-100 to-blue-100 rounded-full mb-6">
            <Lightbulb className="w-12 h-12 text-purple-600" />
          </div>
          <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Your AI-Generated Idea Will Appear Here
          </CardTitle>
          <CardDescription className="text-lg text-gray-600 mt-4">
            Fill out the form above and click{" "}
            <span className="font-semibold text-purple-600">&quot;Generate Idea&quot;</span>{" "}
            to spark your creativity with AI-powered suggestions.
          </CardDescription>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-500">
            <Zap className="h-4 w-4" />
            <span>Powered by Advanced AI</span>
          </div>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card className="border-2 border-green-100 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Your AI-Generated Idea
          </span>
        </CardTitle>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handleEditToggle}
            title={isEditing ? "Save" : "Edit"}
            className="border-green-300 text-green-700 hover:bg-green-100"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleCopy}
            title="Copy to clipboard"
            className="border-blue-300 text-blue-700 hover:bg-blue-100"
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
              value={editedIdea}
              onChange={e => setEditedIdea(e.target.value)}
              className="w-full min-h-[500px] resize-y font-mono text-sm border-gray-300 focus:border-purple-400"
              placeholder="Edit your idea..."
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
                  // You could save the edited version here if needed
                }}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
              >
                Save Changes
              </Button>
            </div>
          </div>
        ) : (
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6">
              {formatIdea(generatedIdea)}
            </div>
            
            {/* Success message */}
            <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2 text-green-700 font-medium">
                <Sparkles className="h-5 w-5" />
                <span>Your creative idea is ready! Use the buttons above to copy or edit.</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 