import { motion } from 'motion/react';
import { Mail, Lock, UserPlus, User } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 bg-[url('https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80')] bg-cover bg-center relative p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="w-full max-w-xl p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl relative z-10"
      >
        <div className="text-center mb-10">
          <motion.div
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 150, delay: 0.2 }}
            className="w-16 h-16 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-full mx-auto flex items-center justify-center mb-6 shadow-xl"
          >
            <UserPlus className="text-white w-8 h-8" />
          </motion.div>
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-3 tracking-tight">Create Account</h2>
          <p className="text-gray-300 text-lg">Join us to start learning today.</p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">First Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-purple-400 transition-colors" />
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-gray-500"
                  placeholder="John"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">Last Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-purple-400 transition-colors" />
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-gray-500"
                  placeholder="Doe"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-2">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-purple-400 transition-colors" />
              <input 
                type="email" 
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-gray-500"
                placeholder="john.doe@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-2">Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-purple-400 transition-colors" />
              <input 
                type="password" 
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-gray-500"
                placeholder="••••••••"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white rounded-xl py-4 font-bold text-lg flex items-center justify-center space-x-2 transition-all shadow-lg shadow-purple-500/25"
          >
            <UserPlus className="w-6 h-6" />
            <span>Sign Up Free</span>
          </motion.button>
        </form>

        <p className="mt-8 text-center text-gray-400">
          Already have an account? <a href="/login" className="text-purple-400 hover:text-purple-300 font-semibold underline underline-offset-4 transition-colors">Sign in</a>
        </p>
      </motion.div>
    </div>
  );
}