import { motion } from "framer-motion";

export function TrafficLights() {
  return (
    <div className="flex items-center gap-2">
      <motion.button
        whileHover={{ scale: 1.15 }}
        className="w-3 h-3 rounded-full bg-traffic-red"
        style={{ boxShadow: "0 0 8px hsl(0 100% 67% / 0.5)" }}
      />
      <motion.button
        whileHover={{ scale: 1.15 }}
        className="w-3 h-3 rounded-full bg-traffic-yellow"
        style={{ boxShadow: "0 0 8px hsl(45 100% 58% / 0.5)" }}
      />
      <motion.button
        whileHover={{ scale: 1.15 }}
        className="w-3 h-3 rounded-full bg-traffic-green"
        style={{ boxShadow: "0 0 8px hsl(130 70% 50% / 0.5)" }}
      />
    </div>
  );
}
