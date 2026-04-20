import { motion } from 'motion/react';
import { Calendar, Clock } from 'lucide-react';

interface DeadlineCardProps {
  title: string;
  course: string;
  dueDate: string;
  dueTime: string;
  priority: 'high' | 'medium' | 'low';
}

export function DeadlineCard({ title, course, dueDate, dueTime, priority }: DeadlineCardProps) {
  const priorityColors = {
    high: 'bg-red-50 text-red-700 border-red-200',
    medium: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    low: 'bg-green-50 text-green-700 border-green-200',
  };

  return (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
      className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className={`p-2 rounded-lg ${priorityColors[priority]} border`}>
        <Calendar className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-500 mb-2">{course}</p>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{dueDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{dueTime}</span>
          </div>
        </div>
      </div>
      <div className={`px-2.5 py-1 rounded-full text-xs font-medium ${priorityColors[priority]} border`}>
        {priority}
      </div>
    </motion.div>
  );
}
