import { useState, useEffect } from "react";
import { Activity, Cpu, Database, GitBranch } from "lucide-react";
import { TrafficLights } from "@/components/TrafficLights";
import { AgentSidebar } from "@/components/AgentSidebar";
import { MainDashboard } from "@/components/MainDashboard";

const initialStats = [
  { label: "Active Processes", value: "24", icon: Activity, trend: "+3" },
  { label: "Memory Usage", value: "4.2GB", icon: Cpu, trend: "-0.5GB" },
  { label: "Data Streams", value: "156", icon: Database, trend: "+12" },
  { label: "Active Branches", value: "7", icon: GitBranch, trend: "0" },
];

const generateRandomMemory = () => {
  const base = 4.0 + Math.random() * 1.5;
  return base.toFixed(1) + "GB";
};

const generateRandomTrend = () => {
  const delta = (Math.random() - 0.5) * 1;
  return delta >= 0 ? `+${delta.toFixed(1)}GB` : `${delta.toFixed(1)}GB`;
};

const logTemplates = [
  { event: "Agent spawned: Coder-v4.2", type: "info" },
  { event: "Vector sync completed: 1,247 embeddings", type: "success" },
  { event: "Context window expanded: +2048 tokens", type: "info" },
  { event: "API rate limit warning: OpenAI", type: "warning" },
  { event: "Task completed: Dashboard optimization", type: "success" },
  { event: "Memory garbage collection initiated", type: "info" },
  { event: "New checkpoint saved: model_v4.2.1", type: "success" },
  { event: "Neural core temperature: optimal", type: "info" },
];

const Index = () => {
  const [stats, setStats] = useState(initialStats);
  const [logs, setLogs] = useState(() => {
    const now = new Date();
    return logTemplates.slice(0, 5).map((log, idx) => ({
      ...log,
      time: new Date(now.getTime() - idx * 5000).toLocaleTimeString('en-US', { hour12: false }),
    }));
  });

  const [thermalMetrics, setThermalMetrics] = useState([
    { label: "Latency", value: "120ms", percentage: 24, color: "bg-success" },
    { label: "Context Limit", value: "89%", percentage: 89, color: "bg-warning" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update memory usage
      setStats(prev => prev.map((stat, idx) => 
        idx === 1 ? { ...stat, value: generateRandomMemory(), trend: generateRandomTrend() } : stat
      ));

      // Add new log
      const randomLog = logTemplates[Math.floor(Math.random() * logTemplates.length)];
      const newLog = {
        ...randomLog,
        time: new Date().toLocaleTimeString('en-US', { hour12: false }),
      };
      setLogs(prev => [newLog, ...prev.slice(0, 4)]);

      // Update thermal metrics
      setThermalMetrics(prev => prev.map(metric => ({
        ...metric,
        percentage: Math.min(100, Math.max(10, metric.percentage + Math.floor((Math.random() - 0.5) * 10))),
        value: metric.label === "Latency" 
          ? `${Math.floor(80 + Math.random() * 80)}ms`
          : `${Math.min(100, Math.max(50, Math.floor(70 + Math.random() * 25)))}%`,
      })));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex overflow-hidden bg-background text-foreground p-6 gap-6">
      {/* Main Container with Glass Effect */}
      <div className="flex-1 flex gap-6 glass-card p-2 relative">
        {/* Traffic Lights */}
        <div className="absolute top-5 left-5 z-10">
          <TrafficLights />
        </div>

        {/* Main Dashboard */}
        <MainDashboard stats={stats} logs={logs} />

        {/* Right Sidebar */}
        <AgentSidebar thermalMetrics={thermalMetrics} />
      </div>
    </div>
  );
};

export default Index;
