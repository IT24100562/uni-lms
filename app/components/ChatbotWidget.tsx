import { useMemo, useState } from "react";
import { Bot, MessageCircle, Send, User, X } from "lucide-react";

type ChatRole = "bot" | "user";

type ChatMessage = {
  id: number;
  role: ChatRole;
  text: string;
};

const QUICK_PROMPTS = [
  "How do I enroll in courses?",
  "Where can I see attendance?",
  "How do I contact support?",
];

function getBotReply(input: string): string {
  const normalized = input.toLowerCase();

  if (normalized.includes("enroll") || normalized.includes("course")) {
    return "Open Courses, choose a program, and click Enroll. If enrollment is closed, check Admission for intake dates.";
  }

  if (normalized.includes("attendance")) {
    return "Go to Attendance from the main menu. You can view your presence percentage and detailed session records there.";
  }

  if (normalized.includes("payment") || normalized.includes("fee")) {
    return "Use the Payment page to complete fees securely. After payment, your status updates automatically in your profile.";
  }

  if (normalized.includes("support") || normalized.includes("help") || normalized.includes("contact")) {
    return "You can use the Communication page to message staff, or visit About for contact channels.";
  }

  return "I can help with courses, attendance, payments, and platform navigation. Try asking about one of these.";
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: "bot",
      text: "Hi! I am your CSCT assistant. Ask me anything about courses, attendance, or support.",
    },
  ]);

  const nextId = useMemo(() => messages.length + 1, [messages.length]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) {
      return;
    }

    setMessages((prev) => [
      ...prev,
      { id: nextId, role: "user", text: trimmed },
      { id: nextId + 1, role: "bot", text: getBotReply(trimmed) },
    ]);
    setInput("");
  };

  return (
    <>
      {isOpen ? (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-sm rounded-2xl border border-sky-200/70 bg-white/95 shadow-[0_20px_45px_rgba(2,132,199,0.22)] backdrop-blur-md">
          <div className="flex items-center justify-between rounded-t-2xl bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <div>
                <p className="text-sm font-semibold">CSCT Assistant</p>
                <p className="text-xs text-blue-100">Online now</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-md p-1 transition hover:bg-white/20"
              aria-label="Close chatbot"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-80 space-y-3 overflow-y-auto px-3 py-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "bot" && (
                  <span className="mt-1 rounded-full bg-sky-100 p-1 text-sky-700">
                    <Bot className="h-3.5 w-3.5" />
                  </span>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-800"
                  }`}
                >
                  {message.text}
                </div>

                {message.role === "user" && (
                  <span className="mt-1 rounded-full bg-blue-100 p-1 text-blue-700">
                    <User className="h-3.5 w-3.5" />
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 px-3 pb-2">
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => sendMessage(prompt)}
                className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 hover:bg-sky-100"
              >
                {prompt}
              </button>
            ))}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(input);
            }}
            className="flex items-center gap-2 border-t border-slate-200 p-3"
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your question..."
              className="flex-1 rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <button
              type="submit"
              className="rounded-xl bg-blue-600 p-2 text-white transition hover:bg-blue-500"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        className="lms-fab lms-pulse-badge"
        aria-label="Open chatbot"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-5 w-5" />
      </button>
    </>
  );
}