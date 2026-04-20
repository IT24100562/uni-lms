import { motion } from "motion/react";
import { Search, Filter, Star, Clock, BookOpen, ChevronRight, PlayCircle } from "lucide-react";
import { useState } from "react";

const courses = [
  {
    id: 1,
    title: "Advanced Structural Engineering",
    category: "Civil",
    instructor: "Dr. Sarah Jenkins",
    rating: 4.8,
    reviews: 124,
    progress: 65,
    totalModules: 12,
    completedModules: 8,
    duration: "24h 30m",
    image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=800&q=80",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 2,
    title: "Construction Management 101",
    category: "Management",
    instructor: "Prof. Michael Chang",
    rating: 4.9,
    reviews: 89,
    progress: 15,
    totalModules: 8,
    completedModules: 1,
    duration: "16h 45m",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: 3,
    title: "BIM Modeling & Coordination",
    category: "Architecture",
    instructor: "Elena Rodriguez",
    rating: 4.7,
    reviews: 256,
    progress: 100,
    totalModules: 15,
    completedModules: 15,
    duration: "32h 15m",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 4,
    title: "Sustainable Urban Design",
    category: "Environment",
    instructor: "Dr. Emily Chen",
    rating: 4.6,
    reviews: 167,
    progress: 0,
    totalModules: 10,
    completedModules: 0,
    duration: "18h 00m",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80",
    color: "from-orange-500 to-red-600"
  }
];

const categories = ["All", "Civil", "Architecture", "Management", "Environment"];

export function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter(c => 
    (activeCategory === "All" || c.category === activeCategory) &&
    c.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-7xl mx-auto py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">My Learning Journey</h1>
          <p className="text-slate-500 dark:text-slate-400">Continue where you left off and discover new courses.</p>
        </div>
        <div className="flex gap-3 items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-full md:w-64 transition-all shadow-sm"
            />
          </div>
          <button className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-500 hover:text-indigo-600 transition-colors shadow-sm">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={"" + "px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all " + 
              (activeCategory === cat 
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md" 
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400")}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCourses.map((course, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={course.id}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col"
          >
            {/* Image Header */}
            <div className="relative h-48 overflow-hidden">
              <div className={"" + "absolute inset-0 bg-gradient-to-t " + course.color + " opacity-60 mix-blend-multiply z-10"} />
              <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold text-white/90 border border-white/20">
                  {course.category}
                </span>
              </div>
              <button className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-sm">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-300 delay-100">
                  <PlayCircle className="w-6 h-6 text-indigo-600 ml-1" />
                </div>
              </button>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{course.rating}</span>
                  <span className="text-xs text-slate-400">({course.reviews})</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <Clock className="w-3.5 h-3.5" />
                  {course.duration}
                </div>
              </div>

              <h3 className="font-bold text-lg text-slate-900 dark:text-white leading-tight mb-1 line-clamp-2">{course.title}</h3>
              <p className="text-sm text-slate-500 mb-4">{course.instructor}</p>

              <div className="mt-auto">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {course.progress === 100 ? 'Completed' : 'Progress'}
                  </span>
                  <span className="text-slate-500 font-semibold">{course.progress}%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-4">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: course.progress + '%' }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className={"" + "h-full rounded-full bg-gradient-to-r " + course.color} 
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 relative">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <BookOpen className="w-4 h-4" />
                    {course.completedModules}/{course.totalModules} Modules
                  </div>
                  <button className="text-sm font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group/btn">
                    {course.progress === 0 ? 'Start' : course.progress === 100 ? 'Review' : 'Continue'}
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
