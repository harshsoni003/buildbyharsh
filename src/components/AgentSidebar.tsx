import { AgentSelector } from "./AgentSelector";
import { ChatInterface } from "./ChatInterface";
import { ContextWindow } from "./ContextWindow";
import { ToolBelt } from "./ToolBelt";
import { SessionHistory } from "./SessionHistory";
import { CoreThermals } from "./CoreThermals";
import { SystemControls } from "./SystemControls";

export function AgentSidebar() {
  return (
    <aside className="w-[380px] h-screen flex flex-col bg-sidebar border-l border-border/50 overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-border/30">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Active Identity
          </h2>
        </div>
        <AgentSelector />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto scrollbar-thin p-4 space-y-6">
        {/* Command Center */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-success" />
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Command Center
            </h2>
          </div>
          <ChatInterface />
        </div>

        {/* Context Window */}
        <ContextWindow />

        {/* Tool Belt */}
        <ToolBelt />

        {/* Session History */}
        <SessionHistory />

        {/* Core Thermals */}
        <CoreThermals />
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border/30">
        <SystemControls />
      </div>
    </aside>
  );
}
