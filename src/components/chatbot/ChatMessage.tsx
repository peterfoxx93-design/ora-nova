"use client"

interface ChatMessageProps {
  role: "user" | "assistant"
  content: string
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  return (
    <div
      className={`flex ${role === "user" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          role === "user"
            ? "bg-accent text-white rounded-br-md"
            : "bg-neutral-200 text-neutral-900 rounded-bl-md"
        }`}
      >
        {content}
      </div>
    </div>
  )
}
