import { Globe, Terminal, HardDrive, Zap } from "lucide-react";

const tools = [
  { name: "Web Search", status: "enabled" as const, icon: Globe },
  { name: "Code Interpreter", status: "active" as const, icon: Terminal },
  { name: "FileSystem", status: "enabled" as const, icon: HardDrive },
  { name: "API Caller", status: "standby" as const, icon: Zap },
];

const statusStyles = {
  active: "bg-primary/20 border-primary/40 text-primary",
  enabled: "bg-success/10 border-success/30 text-success",
  standby: "bg-warning/10 border-warning/30 text-warning",
};

const statusDot = {
  active: "status-dot-active",
  enabled: "status-dot-enabled",
  standby: "status-dot-standby",
};

export function ToolBelt() {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-foreground px-1">Capabilities</h3>
      <div className="grid grid-cols-2 gap-2">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border ${statusStyles[tool.status]} transition-all duration-200 hover:scale-[1.02]`}
          >
            <tool.icon className="w-4 h-4" />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium truncate">{tool.name}</p>
            </div>
            <div className={`status-dot ${statusDot[tool.status]}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
