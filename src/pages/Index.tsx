import { AgentSidebar } from "@/components/AgentSidebar";
import { MainDashboard } from "@/components/MainDashboard";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <MainDashboard />
      <AgentSidebar />
    </div>
  );
};

export default Index;
