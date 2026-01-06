import { useState } from "react";
import { Mic, Paperclip, Code, Send } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "agent";
  content: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "agent",
    content: "System initialized. Ready to execute commands. What would you like me to do?",
  },
  {
    id: "2",
    role: "user",
    content: "Analyze the current project structure and suggest optimizations",
  },
  {
    id: "3",
    role: "agent",
    content: "Scanning directory tree... Found 47 files across 12 modules. Identified 3 potential optimizations:\n\n1. Consolidate utility functions\n2. Lazy load heavy components\n3. Add tree-shaking for unused exports",
  },
];

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };
    
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsProcessing(true);
    
    // Simulate agent response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "agent",
          content: "Processing your request... Analysis complete. Ready for next command.",
        },
      ]);
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[320px]">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto scrollbar-thin space-y-3 pr-1">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`animate-fade-in ${msg.role === "user" ? "flex justify-end" : ""}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-secondary text-foreground"
                  : "bg-primary/10 border border-primary/20 text-foreground/90"
              }`}
            >
              <p className="whitespace-pre-wrap">{msg.content}</p>
            </div>
          </div>
        ))}
        
        {isProcessing && (
          <div className="flex gap-1 px-4 py-3 bg-primary/10 border border-primary/20 rounded-2xl w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-typing" style={{ animationDelay: "0ms" }} />
            <span className="w-2 h-2 rounded-full bg-primary animate-typing" style={{ animationDelay: "200ms" }} />
            <span className="w-2 h-2 rounded-full bg-primary animate-typing" style={{ animationDelay: "400ms" }} />
          </div>
        )}
      </div>

      {/* Input */}
      <div className="mt-4 flex items-center gap-2 p-2 rounded-xl bg-secondary/50 border border-border/50 focus-within:border-primary/30 transition-colors">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Command system or ask agent..."
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none px-2"
        />
        <div className="flex items-center gap-1">
          <button className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors">
            <Mic className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors">
            <Paperclip className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors">
            <Code className="w-4 h-4" />
          </button>
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
