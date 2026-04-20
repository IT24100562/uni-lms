import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  icon: LucideIcon;
  color: string;
}

export function StatCard({
  title,
  value,
  change,
  icon: Icon,
  color,
}: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <p className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wide">{title}</p>
      <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
      <p className="text-xs text-gray-500 font-medium">{change}</p>
    </motion.div>
  );
}
