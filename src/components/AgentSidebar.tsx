import { motion } from "framer-motion";
import { AgentSelector } from "./AgentSelector";
import { ChatInterface } from "./ChatInterface";
import { ContextWindow } from "./ContextWindow";
import { ToolBelt } from "./ToolBelt";
import { SessionHistory } from "./SessionHistory";
import { CoreThermals } from "./CoreThermals";
import { SystemControls } from "./SystemControls";

interface AgentSidebarProps {
  thermalMetrics: { label: string; value: string; percentage: number; color: string }[];
}

export function AgentSidebar({ thermalMetrics }: AgentSidebarProps) {
  return (
    <motion.aside
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-[400px] h-full flex flex-col glass-card overflow-hidden"
    >
      {/* Header */}
      <div className="p-5 border-b border-white/5">
        <div className="flex items-center gap-2 mb-4">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-primary glow-blue"
          />
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Active Identity
          </h2>
        </div>
        <AgentSelector />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto scrollbar-thin p-5 space-y-6">
        {/* Command Center */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-success status-online" />
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Command Center
            </h2>
          </div>
          <ChatInterface />
        </div>

        <ContextWindow />
        <ToolBelt />
        <SessionHistory />
        <CoreThermals metrics={thermalMetrics} />
      </div>

      {/* Footer */}
      <div className="p-5 border-t border-white/5">
        <SystemControls />
      </div>
    </motion.aside>
  );
}
