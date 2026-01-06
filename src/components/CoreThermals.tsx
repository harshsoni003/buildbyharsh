import { motion } from "framer-motion";

interface CoreThermalsProps {
  metrics: { label: string; value: string; percentage: number; color: string }[];
}

export function CoreThermals({ metrics }: CoreThermalsProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1">
        Core Thermals
      </h3>
      <div className="space-y-3">
        {metrics.map((metric, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">{metric.label}</span>
              <span className="font-mono text-foreground">{metric.value}</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${metric.percentage}%` }}
                transition={{ duration: 1, delay: idx * 0.2, ease: "easeOut" }}
                className={`h-full rounded-full ${metric.color}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
