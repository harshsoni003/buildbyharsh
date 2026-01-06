import { CheckCircle, XCircle, Clock } from "lucide-react";

const tasks = [
  { task: "Optimize Dashboard UI", time: "2m ago", status: "success" as const },
  { task: "Vector DB Sync", time: "15m ago", status: "success" as const },
  { task: "Model Fine-tuning", time: "1h ago", status: "failed" as const },
];

const statusConfig = {
  success: { icon: CheckCircle, color: "text-success" },
  failed: { icon: XCircle, color: "text-destructive" },
  pending: { icon: Clock, color: "text-warning" },
};

export function SessionHistory() {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-foreground px-1">Recent Tasks</h3>
      <div className="space-y-2">
        {tasks.map((task, idx) => {
          const { icon: Icon, color } = statusConfig[task.status];
          return (
            <div
              key={idx}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-secondary/30 border border-border/30 hover:bg-secondary/50 transition-colors cursor-pointer group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <Icon className={`w-4 h-4 ${color}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground truncate group-hover:text-primary transition-colors">
                  {task.task}
                </p>
              </div>
              <span className="text-xs text-muted-foreground font-mono">{task.time}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
