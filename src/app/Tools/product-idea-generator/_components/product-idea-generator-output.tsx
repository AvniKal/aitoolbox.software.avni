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
  Package, 
  Sparkles, 
  Target, 
  Users, 
  Layers, 
  TrendingUp, 
  ArrowRight,
  Zap,
  CheckCircle,
  Circle,
  DollarSign,
  Briefcase,
  Building,
  ShoppingBag,
  // Store
} from "lucide-react"

interface ProductIdeaOutputProps {
  generatedIdeas: string
  isLoading: boolean
}

export function ProductIdeaOutput({ generatedIdeas, isLoading }: ProductIdeaOutputProps) {
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
    
    if (titleLower.includes('product') || titleLower.includes('idea') || titleLower.includes('#')) {
      return <Package className="h-5 w-5 text-blue-600" />
    }
    if (titleLower.includes('problem') || titleLower.includes('challenge') || titleLower.includes('pain')) {
      return <Target className="h-5 w-5 text-red-600" />
    }
    if (titleLower.includes('solution') || titleLower.includes('benefits')) {
      return <Zap className="h-5 w-5 text-green-600" />
    }
    if (titleLower.includes('feature') || titleLower.includes('specification')) {
      return <Layers className="h-5 w-5 text-purple-600" />
    }
    if (titleLower.includes('market') || titleLower.includes('audience') || titleLower.includes('customer')) {
      return <Users className="h-5 w-5 text-orange-600" />
    }
    if (titleLower.includes('price') || titleLower.includes('cost') || titleLower.includes('pricing')) {
      return <DollarSign className="h-5 w-5 text-emerald-600" />
    }
    if (titleLower.includes('business') || titleLower.includes('model') || titleLower.includes('revenue')) {
      return <Briefcase className="h-5 w-5 text-indigo-600" />
    }
    if (titleLower.includes('trend') || titleLower.includes('growth') || titleLower.includes('potential')) {
      return <TrendingUp className="h-5 w-5 text-teal-600" />
    }
    if (titleLower.includes('competitor') || titleLower.includes('competition') || titleLower.includes('alternative')) {
      return <Building className="h-5 w-5 text-yellow-600" />
    }
    if (titleLower.includes('marketing') || titleLower.includes('sales') || titleLower.includes('distribution')) {
      return <ShoppingBag className="h-5 w-5 text-pink-600" />
    }
    
    return <ArrowRight className="h-5 w-5 text-gray-600" />
  }

  const getSectionColor = (title: string) => {
    const titleLower = title.toLowerCase()
    
    if (titleLower.includes('product') || titleLower.includes('idea') || titleLower.includes('#')) {
      return "border-blue-300 bg-gradient-to-r from-blue-50 to-blue-100"
    }
    if (titleLower.includes('problem') || titleLower.includes('challenge') || titleLower.includes('pain')) {
      return "border-red-300 bg-gradient-to-r from-red-50 to-red-100"
    }
    if (titleLower.includes('solution') || titleLower.includes('benefits')) {
      return "border-green-300 bg-gradient-to-r from-green-50 to-green-100"
    }
    if (titleLower.includes('feature') || titleLower.includes('specification')) {
      return "border-purple-300 bg-gradient-to-r from-purple-50 to-purple-100"
    }
    if (titleLower.includes('market') || titleLower.includes('audience') || titleLower.includes('customer')) {
      return "border-orange-300 bg-gradient-to-r from-orange-50 to-orange-100"
    }
    if (titleLower.includes('price') || titleLower.includes('cost') || titleLower.includes('pricing')) {
      return "border-emerald-300 bg-gradient-to-r from-emerald-50 to-emerald-100"
    }
    if (titleLower.includes('business') || titleLower.includes('model') || titleLower.includes('revenue')) {
      return "border-indigo-300 bg-gradient-to-r from-indigo-50 to-indigo-100"
    }
    if (titleLower.includes('trend') || titleLower.includes('growth') || titleLower.includes('potential')) {
      return "border-teal-300 bg-gradient-to-r from-teal-50 to-teal-100"
    }
    if (titleLower.includes('competitor') || titleLower.includes('competition') || titleLower.includes('alternative')) {
      return "border-yellow-300 bg-gradient-to-r from-yellow-50 to-yellow-100"
    }
    if (titleLower.includes('marketing') || titleLower.includes('sales') || titleLower.includes('distribution')) {
      return "border-pink-300 bg-gradient-to-r from-pink-50 to-pink-100"
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
            <Circle className="h-4 w-4 mt-1 text-blue-500 fill-current" />
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
            <div className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white text-xs font-bold rounded-full mt-0.5">
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
            <span className={`leading-relaxed ${isChecked ? 'text-green-700 line-through' : 'text-gray-700'}`}>
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

      // Handle numbered sections (like 1. Product Idea: Name)
      const numberedMatch = trimmedSection.match(/^(\d+)\.\s+(.+?)(?:\n|$)/)
      if (numberedMatch) {
        const ideaNumber = numberedMatch[1]
        const firstLine = numberedMatch[2].trim()
        const restContent = trimmedSection.replace(/^\d+\.\s+.+?(?:\n|$)/, '').trim()
        
        return (
          <div key={index} className="p-6 rounded-xl border-l-4 border-blue-300 bg-gradient-to-r from-blue-50 to-blue-100 mb-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white text-sm font-bold rounded-full">
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
      <Card className="border-2 border-blue-100">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
          <CardTitle className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
              <Sparkles className="h-5 w-5 text-white animate-pulse" />
            </div>
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Generating Your Product Ideas...
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="space-y-6">
            {/* Idea 1 Skeleton */}
            <div className="p-4 rounded-lg border-l-4 border-blue-200 bg-blue-50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-200 rounded-full"></div>
                <Skeleton className="h-6 w-48" />
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4 mt-2" />
            </div>
            
            {/* Idea 2 Skeleton */}
            <div className="p-4 rounded-lg border-l-4 border-blue-200 bg-blue-50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-200 rounded-full"></div>
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
      <Card className="flex flex-col items-center justify-center h-full p-8 min-h-[400px] border-2 border-dashed border-gray-200">
        <div className="text-center max-w-lg">
          <div className="flex items-center justify-center w-24 h-24 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-6">
            <Package className="w-12 h-12 text-gray-600" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent mb-4">
            Your AI-Generated Product Ideas Will Appear Here
          </h2>
          <p className="text-gray-600">
            Fill out the form above and click <span className="font-semibold text-gray-700">"Generate Product Ideas"</span> to get innovative product suggestions.
          </p>
          <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mt-4">
            <Zap className="h-3.5 w-3.5" />
            <span>Powered by Advanced AI</span>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="border-2 border-blue-100 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            Your AI-Generated Product Ideas
          </span>
        </CardTitle>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handleEditToggle}
            title={isEditing ? "Save" : "Edit"}
            className="border-blue-300 text-blue-700 hover:bg-blue-100"
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
              value={editedIdeas}
              onChange={e => setEditedIdeas(e.target.value)}
              className="w-full min-h-[500px] resize-y font-mono text-sm border-gray-300 focus:border-blue-400"
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
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
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
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg">
              <div className="flex items-center gap-2 text-blue-700 font-medium">
                <Sparkles className="h-5 w-5" />
                <span>Your product ideas are ready! Use the buttons above to copy or edit.</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}