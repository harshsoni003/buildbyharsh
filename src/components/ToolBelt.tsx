import { motion } from "framer-motion";
import { Globe, Terminal, HardDrive, Zap } from "lucide-react";

const tools = [
  { name: "Web Search", status: "enabled" as const, icon: Globe },
  { name: "Code Interpreter", status: "active" as const, icon: Terminal },
  { name: "FileSystem", status: "enabled" as const, icon: HardDrive },
  { name: "API Caller", status: "standby" as const, icon: Zap },
];

const statusConfig = {
  active: { bg: "bg-primary/15", border: "border-primary/30", text: "text-primary", dot: "bg-primary glow-blue" },
  enabled: { bg: "bg-success/10", border: "border-success/30", text: "text-success", dot: "bg-success status-online" },
  standby: { bg: "bg-warning/10", border: "border-warning/30", text: "text-warning", dot: "bg-warning status-processing" },
};

export function ToolBelt() {
  return (
    <div className="space-y-3">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1">
        Capabilities
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {tools.map((tool, idx) => {
          const config = statusConfig[tool.status];
          return (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className={`flex items-center gap-2.5 px-3 py-3 rounded-2xl border ${config.bg} ${config.border} ${config.text} transition-all duration-200 cursor-pointer`}
            >
              <tool.icon className="w-4 h-4" />
              <span className="text-xs font-medium flex-1 truncate">{tool.name}</span>
              <motion.div
                animate={tool.status === "active" ? { opacity: [0.5, 1, 0.5] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
                className={`w-2 h-2 rounded-full ${config.dot}`}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
