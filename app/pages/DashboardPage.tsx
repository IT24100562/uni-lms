import { motion } from "motion/react";
import { 
  Users, BookOpen, GraduationCap, TrendingUp, 
  Award, Clock, Calendar, CheckCircle2,
  MoreVertical, Bell, Search, LayoutDashboard,
  Settings, HelpCircle, LogOut, ChevronRight
} from "lucide-react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';
import { useState } from "react";
import { useNavigate } from "react-router";

// Mock Data
const performanceData = [
  { name: 'Mon', score: 65, avg: 55 },
  { name: 'Tue', score: 75, avg: 58 },
  { name: 'Wed', score: 85, avg: 62 },
  { name: 'Thu', score: 72, avg: 60 },
  { name: 'Fri', score: 88, avg: 65 },
  { name: 'Sat', score: 92, avg: 68 },
  { name: 'Sun', score: 95, avg: 70 },
];

const courseProgress = [
  { name: 'Civil Eng', students: 120, completion: 85 },
  { name: 'Quantity Survey', students: 98, completion: 65 },
  { name: 'Architecture', students: 86, completion: 72 },
  { name: 'BIM', students: 45, completion: 90 },
];

const recentActivities = [
  { id: 1, type: 'assignment', title: 'Concrete Tech Assignment Due', time: '2 hours ago', status: 'pending' },
  { id: 2, type: 'grade', title: 'Surveying Mid-term Graded', time: '5 hours ago', status: 'completed' },
  { id: 3, type: 'course', title: 'New Module: Advanced BIM', time: '1 day ago', status: 'new' },
  { id: 4, type: 'system', title: 'System Maintenance Scheduled', time: '2 days ago', status: 'info' },
];

const stats = [
  { title: 'Total Students', value: '2,845', change: '+12.5%', icon: Users, color: 'blue' },
  { title: 'Active Courses', value: '48', change: '+4.2%', icon: BookOpen, color: 'purple' },
  { title: 'Overall Pass Rate', value: '92.4%', change: '+1.2%', icon: Award, color: 'emerald' },
  { title: 'Avg. Engagement', value: '4.8h', change: '+18.1%', icon: TrendingUp, color: 'orange' },
];

export function DashboardPage() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 font-sans overflow-hidden">
      
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between z-20"
      >
        <div>
          <div className="p-6">
            <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-bold text-xl">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                <GraduationCap size={20} />
              </div>
              NeoLMS
            </div>
          </div>
          
          <nav className="px-4 space-y-1 mt-4">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-3">Menu</div>
            {[
              { name: 'Dashboard', icon: LayoutDashboard, active: true },
              { name: 'Courses', icon: BookOpen },
              { name: 'Students', icon: Users },
              { name: 'Schedule', icon: Calendar },
              { name: 'Grades', icon: Award },
            ].map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ x: 4, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                whileTap={{ scale: 0.98 }}
                className={"" + "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors " + (
                  item.active 
                    ? 'text-blue-700 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20' 
                    : 'text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-slate-200'
                )}
              >
                <item.icon size={18} className={item.active ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'} />
                {item.name}
              </motion.button>
            ))}
          </nav>
        </div>

        <div className="p-4 space-y-1">
          <button 
            onClick={() => setIsAdmin(!isAdmin)}
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="flex items-center gap-3">
              <Settings size={18} className="text-slate-400" />
              Toggle View
            </span>
            <span className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded-md">{isAdmin ? 'Admin' : 'Student'}</span>
          </button>
          
          <button onClick={() => navigate("/login")} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 transition-colors mt-2">
            <LogOut size={18} />
            Logout
          </button>

          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3 px-2">
            <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-9 h-9 rounded-full ring-2 ring-white dark:ring-slate-800" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">{isAdmin ? 'Dr. Sarah Jenkins' : 'Alex Mercer'}</p>
              <p className="text-xs text-slate-500 truncate">{isAdmin ? 'Administrator' : 'Engineering Student'}</p>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Header */}
        <header className="h-16 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 z-10">
          <div className="flex items-center gap-4 flex-1">
            <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100">
              Welcome back, {isAdmin ? 'Sarah' : 'Alex'} 👋
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search courses, students..." 
                className="w-64 bg-slate-100 dark:bg-slate-800 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-700 dark:text-slate-200 placeholder:text-slate-400 transition-all"
              />
            </div>
            
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900" />
            </motion.button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto p-8 relative">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Stats Row */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, staggerChildren: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -4, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm transition-all"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{stat.title}</p>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{stat.value}</h3>
                    </div>
                    <div className={"" + "p-2.5 rounded-xl bg-" + stat.color + "-50 dark:bg-" + stat.color + "-900/20 text-" + stat.color + "-600 dark:text-" + stat.color + "-400"}>
                      <stat.icon size={20} />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    <span className="text-emerald-500 font-medium flex items-center">{stat.change}</span>
                    <span className="text-slate-400 ml-2">vs last month</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Main Chart */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Performance Overview</h3>
                    <p className="text-sm text-slate-500">Average scores vs Your scores</p>
                  </div>
                  <button className="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400">
                    <MoreVertical size={20} />
                  </button>
                </div>
                
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={performanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorAvg" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                        cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '3 3' }}
                      />
                      <Area type="monotone" dataKey="avg" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorAvg)" />
                      <Area type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" activeDot={{ r: 6, strokeWidth: 0 }} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              {/* Secondary Chart / Activities */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Course Progress</h3>
                  <button className="text-sm font-medium text-blue-600 hover:text-blue-700">View All</button>
                </div>
                
                <div className="h-[200px] w-full mb-6">
                  <ResponsiveContainer width={200} height={200}>
                    <BarChart data={courseProgress} layout="vertical" margin={{ top: 0, right: 0, left: -20, bottom: 0 }} barSize={12}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 12}} width={90} />
                      <Tooltip cursor={{fill: '#f1f5f9'}} contentStyle={{ borderRadius: '8px', border: 'none' }} />
                      <Bar dataKey="completion" fill="#3b82f6" radius={[0, 4, 4, 0]} background={{ fill: '#f1f5f9', radius: [0, 4, 4, 0] }} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-auto space-y-4">
                  <div className="flex justify-between items-center px-4 py-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg text-blue-600 dark:text-blue-300">
                        <Award size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Top Performer</p>
                        <p className="text-xs text-slate-500">In Civil Engineering</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-blue-600">98%</span>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Timeline / Activities */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Recent Activity</h3>
                </div>
                
                <div className="space-y-6">
                  {recentActivities.map((activity, index) => (
                    <div key={activity.id} className="flex gap-4 relative">
                      {index !== recentActivities.length - 1 && (
                        <div className="absolute left-4 top-8 bottom-[-24px] w-px bg-slate-200 dark:bg-slate-800" />
                      )}
                      <div className={"" + "relative z-10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 border-white dark:border-slate-900 " + 
                        (activity.status === 'pending' ? 'bg-orange-100 text-orange-600' : 
                          activity.status === 'completed' ? 'bg-emerald-100 text-emerald-600' : 
                          activity.status === 'new' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-600')}
                      >
                        {activity.status === 'pending' ? <Clock size={14} /> : 
                         activity.status === 'completed' ? <CheckCircle2 size={14} /> : 
                         activity.status === 'new' ? <BookOpen size={14} /> : <Bell size={14} />}
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{activity.title}</p>
                        <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
                      </div>
                      <button className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-slate-400 transition-colors self-start">
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Upcoming Deadlines / Quick Actions */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 shadow-lg text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full blur-2xl translate-y-1/4 -translate-x-1/4" />
                
                <div className="relative z-10">
                  <p className="text-indigo-200 font-medium text-sm tracking-wider uppercase mb-2">Next Milestone</p>
                  <h2 className="text-3xl font-extrabold mb-4 leading-tight">Structural Design Final Project</h2>
                  
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Calendar className="text-indigo-200" size={24} />
                      <div>
                        <p className="font-semibold text-white">Due in 3 days</p>
                        <p className="text-xs text-indigo-200">Friday, 11:59 PM</p>
                      </div>
                    </div>
                    <div className="h-10 w-px bg-white/20" />
                    <div className="text-center">
                      <p className="text-2xl font-bold">75%</p>
                      <p className="text-[10px] text-indigo-200 uppercase tracking-wide">Class Avg</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-white text-indigo-700 font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-indigo-50 transition-all active:scale-95 text-sm">
                      Continue Work
                    </button>
                    <button className="bg-indigo-800/50 hover:bg-indigo-800 text-white font-semibold py-3 px-4 rounded-xl border border-indigo-400/30 transition-all backdrop-blur-sm active:scale-95 text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
