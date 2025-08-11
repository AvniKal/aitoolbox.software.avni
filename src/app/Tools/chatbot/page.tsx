'use client';

import { RealtimeChat } from "@/components/realtime-chat";

export default function ChatbotPage() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 relative">
        <RealtimeChat
          systemPrompt="You are AIToolbox BOT, an intelligent, multi-functional AI assistant inside the AIToolbox platform. Your purpose is to help users access and use a wide range of AI tools through natural language. You respond in simple, clear English. Your tone is neutral, professional, and to the point. Avoid unnecessary words."
        />
      </div>
    </div>
  );
}