import { useState } from "react";
import { ChevronDown, Bot, Code, Search, Briefcase } from "lucide-react";

const agents = [
  { id: "researcher", name: "Researcher", model: "Claude-3.5-Sonnet", icon: Search },
  { id: "coder", name: "Coder", model: "GPT-4o", icon: Code },
  { id: "executive", name: "Executive", model: "Claude-3.5-Sonnet", icon: Briefcase },
];

export function AgentSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(agents[1]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 transition-all duration-200 group"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <selected.icon className="w-5 h-5 text-primary" />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-foreground">{selected.name}</p>
            <p className="text-xs text-muted-foreground font-mono">{selected.model}</p>
          </div>
        </div>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 p-2 rounded-xl bg-popover border border-border/50 shadow-xl z-50 animate-fade-in">
          {agents.map((agent) => (
            <button
              key={agent.id}
              onClick={() => {
                setSelected(agent);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 ${
                selected.id === agent.id
                  ? "bg-primary/20 text-foreground"
                  : "hover:bg-secondary/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              <agent.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{agent.name}</span>
              <span className="text-xs font-mono text-muted-foreground ml-auto">{agent.model}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
