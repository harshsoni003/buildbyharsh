import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Folder, Brain } from "lucide-react";

const contextItems = [
  { label: "Current Directory", value: "/root/project/agentic-os", icon: Folder },
  { label: "Memory Load", value: "12 Active Chunks", icon: Brain },
];

export function ContextWindow() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="glass-pill overflow-hidden">
      <motion.button
        whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 transition-colors"
      >
        <span className="text-sm font-medium text-foreground">Working Context</span>
        <motion.div animate={{ rotate: isOpen ? 0 : -90 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-3">
              {contextItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm text-foreground font-mono truncate">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
