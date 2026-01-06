import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const tasks = [
  { task: "Optimize Dashboard UI", time: "2m ago", status: "success" as const },
  { task: "Vector DB Sync", time: "15m ago", status: "success" as const },
  { task: "Model Fine-tuning", time: "1h ago", status: "failed" as const },
];

const statusConfig = {
  success: { icon: CheckCircle, color: "text-success" },
  failed: { icon: XCircle, color: "text-destructive" },
};

export function SessionHistory() {
  return (
    <div className="space-y-3">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1">
        Recent Tasks
      </h3>
      <div className="space-y-2">
        {tasks.map((task, idx) => {
          const { icon: Icon, color } = statusConfig[task.status];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.01, x: 4 }}
              className="flex items-center gap-3 px-3 py-2.5 glass-pill cursor-pointer group"
            >
              <Icon className={`w-4 h-4 ${color}`} />
              <p className="text-sm text-foreground truncate flex-1 group-hover:text-primary transition-colors">
                {task.task}
              </p>
              <span className="text-xs text-muted-foreground font-mono">{task.time}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
