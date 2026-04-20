import { CheckCircle2, FileText, BookOpen, Trophy } from "lucide-react";

interface ActivityItemProps {
  type: "completed" | "submitted" | "enrolled" | "achievement";
  title: string;
  description: string;
  time: string;
}

const activityConfig = {
  completed: {
    icon: CheckCircle2,
    bg: "bg-gradient-to-br from-emerald-50 to-green-100",
    color: "text-emerald-600",
  },
  submitted: {
    icon: FileText,
    bg: "bg-gradient-to-br from-blue-50 to-cyan-100",
    color: "text-blue-600",
  },
  enrolled: {
    icon: BookOpen,
    bg: "bg-gradient-to-br from-teal-50 to-cyan-100",
    color: "text-teal-600",
  },
  achievement: {
    icon: Trophy,
    bg: "bg-gradient-to-br from-amber-50 to-orange-100",
    color: "text-amber-600",
  },
};

export function ActivityItem({
  type,
  title,
  description,
  time,
}: ActivityItemProps) {
  const config = activityConfig[type];
  const Icon = config.icon;

  return (
    <div className="flex items-start gap-3">
      <div className={`p-2.5 rounded-xl ${config.bg} shrink-0`}>
        <Icon className={`w-4 h-4 ${config.color}`} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-800 font-semibold">{title}</p>
        <p className="text-xs text-gray-500 mt-0.5 truncate">{description}</p>
      </div>
      <span className="text-xs text-gray-400 shrink-0 font-medium">{time}</span>
    </div>
  );
}
