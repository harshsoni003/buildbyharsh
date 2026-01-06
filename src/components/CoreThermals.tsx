const metrics = [
  { label: "Latency", value: "120ms", percentage: 24, color: "bg-success" },
  { label: "Context Limit", value: "89%", percentage: 89, color: "bg-warning" },
];

export function CoreThermals() {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-foreground px-1">Core Thermals</h3>
      <div className="space-y-3">
        {metrics.map((metric, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">{metric.label}</span>
              <span className="font-mono text-foreground">{metric.value}</span>
            </div>
            <div className="h-1.5 rounded-full bg-muted/50 overflow-hidden">
              <div
                className={`h-full rounded-full ${metric.color} transition-all duration-500`}
                style={{ width: `${metric.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
