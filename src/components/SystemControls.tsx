import { motion } from "framer-motion";
import { RefreshCw, Settings } from "lucide-react";

export function SystemControls() {
  return (
    <div className="flex items-center gap-2 pt-4 border-t border-white/5">
      {[
        { icon: RefreshCw, label: "Reset" },
        { icon: Settings, label: "Settings" },
      ].map((item, idx) => (
        <motion.button
          key={idx}
          whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <item.icon className="w-4 h-4" />
          <span>{item.label}</span>
        </motion.button>
      ))}
    </div>
  );
}
