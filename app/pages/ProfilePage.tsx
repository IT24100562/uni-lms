import { motion } from "motion/react";
import { User, Mail, Phone, MapPin, Building, Shield, Bell, Key, Camera, LogOut, CheckCircle2, TrendingUp, Award, Clock } from "lucide-react";
import { useState } from "react";

const stats = [
  { label: 'Courses Completed', value: '12', icon: Award, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { label: 'Total Learning Hours', value: '148h', icon: Clock, color: 'text-blue-500', bg: 'bg-blue-50' },
  { label: 'Avg Assessment Score', value: '94%', icon: TrendingUp, color: 'text-indigo-500', bg: 'bg-indigo-50' },
];

const achievements = [
  { id: 1, title: 'Early Bird', description: 'Complete 3 morning sessions.', date: 'Oct 12, 2023' },
  { id: 2, title: 'Code Master', description: 'A+ in Advanced React Course.', date: 'Sep 28, 2023' },
];

export function ProfilePage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      {/* Header Profile Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-sm mb-8 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        
        {/* Avatar */}
        <div className="relative z-10 shrink-0">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl bg-slate-100">
            <img src="https://i.pravatar.cc/300?img=11" alt="Alex Mercer" className="w-full h-full object-cover" />
          </div>
          <button className="absolute bottom-0 right-0 p-2.5 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 shadow-lg transition-transform hover:scale-105 focus:ring-4 focus:ring-indigo-100">
            <Camera className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center md:text-left z-10 space-y-1">
          <div className="inline-flex items-center justify-center space-x-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            <Shield className="w-3.5 h-3.5" />
            <span>Premium Student</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Alex Mercer</h1>
          <p className="text-slate-500 font-medium pb-4 border-b border-slate-100 dark:border-slate-800">alex.mercer@university.edu</p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-y-3 gap-x-6 pt-3 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2"><Building className="w-4 h-4 text-slate-400" /> Engineering Faculty</div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400" /> Boston, MA</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-slate-400" /> +1 (555) 123-4567</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-row md:flex-col gap-3 shrink-0 z-10 w-full md:w-auto mt-6 md:mt-0">
          <button className="flex-1 md:flex-none justify-center px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl shadow-sm transition-colors">
            Edit Profile
          </button>
          <button className="flex-1 md:flex-none justify-center text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 px-6 py-2.5 text-sm font-semibold rounded-xl shadow-sm transition-colors flex items-center gap-2">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Navigation & Stats */}
        <div className="space-y-6">
          <nav className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-2 shadow-sm flex flex-col gap-1">
            {[
              { id: 'overview', icon: User, label: 'Overview' },
              { id: 'security', icon: Key, label: 'Security & Login' },
              { id: 'notifications', icon: Bell, label: 'Notifications' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                  activeTab === tab.id 
                    ? "bg-slate-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400" 
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-50/50 dark:hover:bg-slate-800/50"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <h3 className="font-bold text-slate-900 dark:text-white mb-6">Learning Stats</h3>
            <div className="space-y-5">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white leading-none">{stat.value}</h4>
                    <p className="text-xs text-slate-500 font-medium mt-1">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Content Area */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm"
          >
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Form fields */}
                    {['First Name', 'Last Name', 'Email Address', 'Phone'].map((field, idx) => (
                      <div key={idx} className="space-y-2">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{field}</label>
                        <input 
                          type={field.includes('Email') ? 'email' : field.includes('Phone') ? 'tel' : 'text'} 
                          defaultValue={
                            field === 'First Name' ? 'Alex' : 
                            field === 'Last Name' ? 'Mercer' : 
                            field === 'Email Address' ? 'alex.mercer@university.edu' : 
                            '+1 (555) 123-4567'
                          } 
                          className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" 
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-xl text-sm hover:shadow-lg transition-all">
                      Save Changes
                    </button>
                  </div>
                </div>

                <div className="border-t border-slate-100 dark:border-slate-800 pt-8">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Recent Achievements</h3>
                  <div className="space-y-4">
                    {achievements.map((item) => (
                      <div key={item.id} className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                        <div className="w-10 h-10 shrink-0 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-full flex items-center justify-center">
                          <Award className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4>
                          <p className="text-sm text-slate-500">{item.description}</p>
                          <span className="text-xs text-slate-400 mt-2 block font-medium">{item.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'security' && (
              <div className="space-y-8">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Change Password</h3>
                <div className="space-y-4 max-w-md">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Current Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">New Password</label>
                    <input type="password" placeholder="New Password" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                  </div>
                  <button className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-xl text-sm hover:shadow-lg transition-all mt-4">Update Password</button>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
               <div className="space-y-6">
                 <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Notification Preferences</h3>
                 <div className="space-y-1">
                   {['Email when course update', 'Push notification for grades', 'Weekly summary digest'].map((notif, idx) => (
                     <div key={idx} className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                       <p className="font-semibold text-slate-700 dark:text-slate-300 text-sm">{notif}</p>
                       {/* Basic toggle UI for simplicity */}
                       <label className="relative inline-flex items-center cursor-pointer">
                         <input type="checkbox" className="sr-only peer" defaultChecked={idx !== 2} />
                         <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-indigo-600"></div>
                       </label>
                     </div>
                   ))}
                 </div>
               </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
