import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Paperclip, Code, Send } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "agent";
  content: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "user",
    content: "Scan directory and suggest optimizations",
  },
  {
    id: "2",
    role: "agent",
    content: "Scanning directory tree... Found 47 files across 12 modules. Identified 3 potential optimizations:\n\n• Consolidate utility functions\n• Lazy load heavy components\n• Add tree-shaking for unused exports",
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
    
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "agent",
          content: "Analyzing request... Task queued for execution. Standing by for further instructions.",
        },
      ]);
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[280px]">
      <div className="flex-1 overflow-y-auto scrollbar-thin space-y-3 pr-1">
        <AnimatePresence>
          {messages.map((msg, idx) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={msg.role === "user" ? "flex justify-end" : ""}
            >
              <div
                className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-white/10 text-foreground border border-white/10"
                    : "bg-primary/10 border border-primary/20 text-foreground/90"
                }`}
              >
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        <AnimatePresence>
          {isProcessing && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex gap-1.5 px-4 py-3 bg-primary/10 border border-primary/20 rounded-2xl w-fit"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                  className="w-2 h-2 rounded-full bg-primary"
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-center gap-2 p-2 glass-pill focus-within:border-primary/30 transition-all duration-300">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Command system or ask agent..."
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none px-2"
        />
        <div className="flex items-center gap-0.5">
          {[Mic, Paperclip, Code].map((Icon, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon className="w-4 h-4" />
            </motion.button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSend}
            disabled={!input.trim()}
            className="p-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all ml-1"
          >
            <Send className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
