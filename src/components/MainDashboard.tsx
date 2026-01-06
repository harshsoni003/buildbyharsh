import { motion } from "framer-motion";
import { Activity, Cpu, Database, GitBranch, Layers, Zap } from "lucide-react";

interface MainDashboardProps {
  stats: { label: string; value: string; icon: any; trend: string }[];
  logs: { time: string; event: string; type: string }[];
}

const systemModules = [
  { name: "Neural Core", status: "Online", progress: 78, color: "bg-accent" },
  { name: "Vector Engine", status: "Processing", progress: 92, color: "bg-warning" },
  { name: "Memory Pool", status: "Optimizing", progress: 45, color: "bg-primary" },
  { name: "Task Queue", status: "Online", progress: 34, color: "bg-purple-500" },
];

const moduleIcons = [Layers, Zap, Database, Activity];

export function MainDashboard({ stats, logs }: MainDashboardProps) {
  return (
    <div className="flex-1 p-6 overflow-y-auto scrollbar-thin">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-3">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2.5 h-2.5 rounded-full bg-success status-online"
          />
          <span className="text-sm font-mono text-success tracking-wide">SYSTEM OPERATIONAL</span>
        </div>
        <h1 className="text-5xl font-bold text-foreground tracking-tight">
          Agentic<span className="text-gradient">OS</span>
        </h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Autonomous Agent Operating System v2.4.1
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="glass-card p-5"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <span className={`text-xs font-mono px-2 py-1 rounded-lg ${
                stat.trend.startsWith('+') ? 'text-success bg-success/10' : 
                stat.trend.startsWith('-') ? 'text-warning bg-warning/10' : 
                'text-muted-foreground bg-white/5'
              }`}>
                {stat.trend}
              </span>
            </div>
            <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* System Modules */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-foreground mb-4">System Modules</h2>
        <div className="grid grid-cols-2 gap-4">
          {systemModules.map((module, idx) => {
            const Icon = moduleIcons[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="glass-card p-5"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{module.name}</h3>
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`w-1.5 h-1.5 rounded-full ${module.status === "Online" ? "bg-success" : "bg-warning"}`}
                      />
                      <p className="text-sm text-muted-foreground">{module.status}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Load</span>
                    <span className="font-mono text-foreground">{module.progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${module.progress}%` }}
                      transition={{ duration: 1.2, delay: 0.6 + idx * 0.1, ease: "easeOut" }}
                      className={`h-full rounded-full ${module.color}`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Activity Log */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Live Activity</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="glass-card p-5"
        >
          <div className="space-y-3 font-mono text-sm">
            {logs.map((log, idx) => (
              <motion.div
                key={`${log.time}-${idx}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-4"
              >
                <span className="text-muted-foreground shrink-0">{log.time}</span>
                <span className={
                  log.type === 'success' ? 'text-success' :
                  log.type === 'warning' ? 'text-warning' :
                  'text-foreground/80'
                }>
                  {log.event}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
