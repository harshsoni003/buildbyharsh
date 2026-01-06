import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Code, Search, Briefcase } from "lucide-react";

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
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3.5 glass-pill hover:border-primary/30 transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <selected.icon className="w-5 h-5 text-primary" />
            </div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-primary glow-blue"
            />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-foreground">{selected.name}</p>
            <p className="text-xs text-muted-foreground font-mono">{selected.model}</p>
          </div>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 p-2 glass-card z-50"
          >
            {agents.map((agent, idx) => (
              <motion.button
                key={agent.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => {
                  setSelected(agent);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                  selected.id === agent.id
                    ? "bg-primary/20 text-foreground"
                    : "hover:bg-white/5 text-muted-foreground hover:text-foreground"
                }`}
              >
                <agent.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{agent.name}</span>
                <span className="text-xs font-mono text-muted-foreground ml-auto">{agent.model}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
