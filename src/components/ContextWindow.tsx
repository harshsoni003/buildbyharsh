import { useState } from "react";
import { ChevronDown, Folder, Brain } from "lucide-react";

const contextItems = [
  { label: "Current Directory", value: "/root/project/agentic-os", icon: Folder },
  { label: "Memory Load", value: "12 active chunks", icon: Brain },
];

export function ContextWindow() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="rounded-xl bg-secondary/30 border border-border/30 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-secondary/50 transition-colors"
      >
        <span className="text-sm font-medium text-foreground">Working Context</span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? "" : "-rotate-90"}`} />
      </button>

      {isOpen && (
        <div className="px-4 pb-4 space-y-3 animate-fade-in">
          {contextItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center">
                <item.icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-sm text-foreground font-mono truncate">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
