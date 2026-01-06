import { RefreshCw, Settings } from "lucide-react";

export function SystemControls() {
  return (
    <div className="flex items-center gap-2 pt-4 border-t border-border/30">
      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-200">
        <RefreshCw className="w-4 h-4" />
        <span>Reset Environment</span>
      </button>
      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-200">
        <Settings className="w-4 h-4" />
        <span>Settings</span>
      </button>
    </div>
  );
}
