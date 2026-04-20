import { motion } from "motion/react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, Award, Target, Clock } from "lucide-react";
import { useLms } from "../context/LmsContext";

export function AnalyticsPage() {
  const {
    state: { courses, assignments, currentGpa, weeklyStudyHours, weeklyStudyTargetHours },
  } = useLms();

  const avgGrade =
    courses.length === 0 ? 0 : Math.round(courses.reduce((sum, course) => sum + course.progress, 0) / courses.length);

  const gradeTrend = courses.slice(0, 6).map((course) => ({
    name: course.code,
    grade: course.progress,
  }));

  const assignmentStatusData = [
    { name: "Pending", value: assignments.filter((item) => item.status === "pending").length, color: "#f59e0b" },
    { name: "Submitted", value: assignments.filter((item) => item.status === "submitted").length, color: "#3b82f6" },
    { name: "Graded", value: assignments.filter((item) => item.status === "graded").length, color: "#10b981" },
    { name: "Overdue", value: assignments.filter((item) => item.status === "overdue").length, color: "#ef4444" },
  ].filter((item) => item.value > 0);

  const studyHoursData = [
    { day: "Mon", hours: weeklyStudyHours[0] ?? 0 },
    { day: "Tue", hours: weeklyStudyHours[1] ?? 0 },
    { day: "Wed", hours: weeklyStudyHours[2] ?? 0 },
    { day: "Thu", hours: weeklyStudyHours[3] ?? 0 },
    { day: "Fri", hours: weeklyStudyHours[4] ?? 0 },
    { day: "Sat", hours: weeklyStudyHours[5] ?? 0 },
    { day: "Sun", hours: weeklyStudyHours[6] ?? 0 },
  ];

  const totalStudyHours = studyHoursData.reduce((sum, item) => sum + item.hours, 0);
  const studyTargetPercent = weeklyStudyTargetHours > 0 ? Math.round((totalStudyHours / weeklyStudyTargetHours) * 100) : 0;

  const stats = [
    {
      label: "Current GPA",
      value: currentGpa.toFixed(2),
      desc: "Out of 4.00",
      icon: Award,
      color: "from-indigo-500 to-purple-500",
    },
    {
      label: "Avg Course Progress",
      value: `${avgGrade}%`,
      desc: "Across all courses",
      icon: TrendingUp,
      color: "from-emerald-500 to-green-500",
    },
    {
      label: "Assignments Completed",
      value: String(assignments.filter((item) => item.status === "graded").length),
      desc: `Of ${assignments.length} total`,
      icon: Target,
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Study This Week",
      value: `${totalStudyHours}h`,
      desc: `${studyTargetPercent}% of ${weeklyStudyTargetHours}h target`,
      icon: Clock,
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="lms-shell rounded-3xl px-5 py-6 sm:px-6">
        <h1 className="text-2xl font-bold text-slate-900">Academic Analytics</h1>
        <p className="mt-1 text-sm text-slate-600">Real-time overview of your learning momentum and outcomes.</p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="lms-elevated rounded-xl p-5"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-xs text-gray-500">{stat.desc}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="lms-elevated rounded-xl p-6 lg:col-span-2">
          <h2 className="text-gray-900 font-semibold">Course Progress Breakdown</h2>
          <p className="text-xs text-gray-500 mt-1">Progress percentage by active course</p>
          {gradeTrend.length === 0 ? <p className="text-xs text-gray-500 mt-2">No course data yet. Add courses from Course Management to populate this chart.</p> : null}
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={gradeTrend} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="grade" fill="#6366f1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="lms-elevated rounded-xl p-6">
          <h2 className="text-gray-900 font-semibold">Assignment Status</h2>
          <p className="text-xs text-gray-500 mt-1">Distribution of current assignment pipeline</p>
          {assignmentStatusData.length === 0 ? <p className="text-xs text-gray-500 mt-2">No assignment data yet. Add assignments to populate this chart.</p> : null}
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={assignmentStatusData} dataKey="value" nameKey="name" innerRadius={45} outerRadius={80} paddingAngle={3}>
                {assignmentStatusData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2">
            {assignmentStatusData.map((entry) => (
              <div key={entry.name} className="flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-2 text-gray-600">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
                  {entry.name}
                </span>
                <span className="text-gray-800 font-medium">{entry.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="lms-elevated rounded-xl p-6">
        <h2 className="text-gray-900 font-semibold">Weekly Study Hours</h2>
        <p className="text-xs text-gray-500 mt-1">Track daily effort against your target</p>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={studyHoursData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="studyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
            <XAxis dataKey="day" tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip />
            <Area type="monotone" dataKey="hours" stroke="#06b6d4" strokeWidth={2.5} fill="url(#studyGradient)" dot={{ r: 3 }} />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}
