import { Activity, Cpu, Database, GitBranch, Layers, Zap } from "lucide-react";

const stats = [
  { label: "Active Processes", value: "24", icon: Activity, trend: "+3" },
  { label: "Memory Usage", value: "4.2GB", icon: Cpu, trend: "-0.5GB" },
  { label: "Data Streams", value: "156", icon: Database, trend: "+12" },
  { label: "Active Branches", value: "7", icon: GitBranch, trend: "0" },
];

const systemModules = [
  { name: "Neural Core", status: "Online", load: 78, icon: Layers },
  { name: "Vector Engine", status: "Processing", load: 92, icon: Zap },
  { name: "Memory Pool", status: "Optimizing", load: 45, icon: Database },
  { name: "Task Queue", status: "Online", load: 34, icon: Activity },
];

export function MainDashboard() {
  return (
    <div className="flex-1 p-8 overflow-y-auto scrollbar-thin">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
          <span className="text-sm font-mono text-success">SYSTEM OPERATIONAL</span>
        </div>
        <h1 className="text-4xl font-bold text-foreground tracking-tight">
          Agentic<span className="text-primary">OS</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Autonomous Agent Operating System v2.4.1
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="glass-panel p-5 animate-fade-in"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <span className={`text-xs font-mono ${stat.trend.startsWith('+') ? 'text-success' : stat.trend.startsWith('-') ? 'text-warning' : 'text-muted-foreground'}`}>
                {stat.trend}
              </span>
            </div>
            <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* System Modules */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-foreground mb-4">System Modules</h2>
        <div className="grid grid-cols-2 gap-4">
          {systemModules.map((module, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 animate-fade-in"
              style={{ animationDelay: `${(idx + 4) * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <module.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{module.name}</h3>
                  <p className="text-sm text-muted-foreground">{module.status}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Load</span>
                  <span className="font-mono text-foreground">{module.load}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      module.load > 80 ? 'bg-warning' : 'bg-primary'
                    }`}
                    style={{ width: `${module.load}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Log */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Live Activity</h2>
        <div className="glass-panel p-5">
          <div className="space-y-3 font-mono text-sm">
            {[
              { time: "14:23:45", event: "Agent spawned: Coder-v4.2", type: "info" },
              { time: "14:23:42", event: "Vector sync completed: 1,247 embeddings", type: "success" },
              { time: "14:23:38", event: "Context window expanded: +2048 tokens", type: "info" },
              { time: "14:23:31", event: "API rate limit warning: OpenAI", type: "warning" },
              { time: "14:23:28", event: "Task completed: Dashboard optimization", type: "success" },
            ].map((log, idx) => (
              <div key={idx} className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
                <span className="text-muted-foreground shrink-0">{log.time}</span>
                <span className={
                  log.type === 'success' ? 'text-success' :
                  log.type === 'warning' ? 'text-warning' :
                  'text-foreground/80'
                }>
                  {log.event}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
