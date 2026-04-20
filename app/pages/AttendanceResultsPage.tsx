import { motion } from "motion/react";
import { Users, CalendarCheck, AlertTriangle, TrendingUp, Download, Filter, Search, ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { useState } from "react";

const overallAttendance = [
  { name: 'Week 1', rate: 98, target: 90 },
  { name: 'Week 2', rate: 95, target: 90 },
  { name: 'Week 3', rate: 92, target: 90 },
  { name: 'Week 4', rate: 89, target: 90 },
  { name: 'Week 5', rate: 94, target: 90 },
  { name: 'Week 6', rate: 96, target: 90 },
  { name: 'Week 7', rate: 91, target: 90 },
];

const courseAttendance = [
  { subject: 'Civil Eng', attendance: 95, color: '#3b82f6' },
  { subject: 'Architecture', attendance: 92, color: '#8b5cf6' },
  { subject: 'Management', attendance: 88, color: '#ec4899' },
  { subject: 'BIM Modeling', attendance: 98, color: '#10b981' },
];

const studentsData = [
  { id: "STU-001", name: "Alex Mercer", course: "Civil Eng", present: 28, total: 30, rate: 93, status: "Good" },
  { id: "STU-002", name: "Sarah Jenkins", course: "Architecture", present: 30, total: 30, rate: 100, status: "Excellent" },
  { id: "STU-003", name: "Michael Chang", course: "Management", present: 22, total: 30, rate: 73, status: "Warning" },
  { id: "STU-004", name: "Elena Rodriguez", course: "BIM Modeling", present: 29, total: 30, rate: 97, status: "Excellent" },
  { id: "STU-005", name: "David Kim", course: "Civil Eng", present: 25, total: 30, rate: 83, status: "Average" },
  { id: "STU-006", name: "Emily Chen", course: "Architecture", present: 27, total: 30, rate: 90, status: "Good" },
  { id: "STU-007", name: "James Wilson", course: "Management", present: 15, total: 30, rate: 50, status: "Critical" },
];

const stats = [
  { title: 'Average Attendance', value: '92.4%', change: '+2.1%', icon: CalendarCheck, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { title: 'Students at Risk', value: '43', change: '-12', icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-50' },
  { title: 'Most Attended', value: 'BIM Model', change: '98%', icon: TrendingUp, color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { title: 'Total Students', value: '2,845', change: 'Active', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
];

export function AttendanceResultsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = studentsData.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-7xl mx-auto py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">Attendance Overview</h1>
          <p className="text-slate-500 dark:text-slate-400">Track student engagement and identify attendance trends across cohorts.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-xl font-medium shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 text-sm">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-medium shadow-sm hover:bg-indigo-700 transition-colors flex items-center gap-2 text-sm">
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl ${stat.bg} dark:bg-opacity-10 ${stat.color} shrink-0`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                {stat.change}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500 mb-1">{stat.title}</p>
              <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Main Trend Chart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
          className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Attendance Trend</h3>
            <select className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Last 7 Weeks</option>
              <option>Last Month</option>
              <option>This Semester</option>
            </select>
          </div>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={overallAttendance} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} domain={[60, 100]} />
                <RechartsTooltip 
                  contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '3 3' }}
                />
                <Area type="monotone" dataKey="rate" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorRate)" activeDot={{ r: 6, strokeWidth: 0 }} />
                <Area type="monotone" dataKey="target" stroke="#94a3b8" strokeDasharray="5 5" strokeWidth={2} fill="none" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Breakdown by Course */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
          className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">By Course</h3>
          </div>
          <div className="h-[250px] w-full mb-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={courseAttendance} layout="vertical" margin={{ top: 0, right: 20, left: 10, bottom: 0 }} barSize={16}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                <XAxis type="number" hide domain={[0, 100]} />
                <YAxis dataKey="subject" type="category" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 12}} width={90} />
                <RechartsTooltip cursor={{fill: '#f1f5f9'}} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Bar dataKey="attendance" radius={[0, 8, 8, 0]} background={{ fill: '#f1f5f9', radius: [0, 8, 8, 0] }}>
                  {courseAttendance.map((entry, index) => (
                    <cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Student List Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Student Roster</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-full sm:w-64 transition-all"
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <th className="px-6 py-4">Student</th>
                <th className="px-6 py-4">Course</th>
                <th className="px-6 py-4">Sessions Attended</th>
                <th className="px-6 py-4">Attendance Rate</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} className="border-b border-slate-50 dark:border-slate-800 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 font-bold flex items-center justify-center text-xs shrink-0">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{student.name}</p>
                        <p className="text-xs text-slate-500">{student.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400">{student.course}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       <span className="text-sm font-bold text-slate-900 dark:text-white">{student.present}</span>
                       <span className="text-xs text-slate-400">/ {student.total}</span>
                       <div className="w-16 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full ml-2 overflow-hidden">
                         <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${student.rate}%` }} />
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{student.rate}%</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold ${
                      student.status === 'Excellent' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                      student.status === 'Good' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                      student.status === 'Average' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                      student.status === 'Warning' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                      'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-sm">
          <p className="text-slate-500">Showing <span className="font-semibold text-slate-900 dark:text-white">1</span> to <span className="font-semibold text-slate-900 dark:text-white">{filteredStudents.length}</span> of <span className="font-semibold text-slate-900 dark:text-white">245</span> entries</p>
          <div className="flex gap-1">
            <button className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-400 hover:text-slate-700 hover:bg-slate-50 disabled:opacity-50"><ChevronLeft className="w-5 h-5" /></button>
            <button className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-semibold flex items-center justify-center">1</button>
            <button className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 font-semibold flex items-center justify-center hover:bg-slate-50">2</button>
            <button className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 font-semibold flex items-center justify-center hover:bg-slate-50">3</button>
            <span className="w-8 h-8 flex items-center justify-center text-slate-400">...</span>
            <button className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-400 hover:text-slate-700 hover:bg-slate-50"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}