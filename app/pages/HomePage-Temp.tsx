import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Trophy, Users, Zap, CheckCircle2, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router";
import { useEffect, useState } from "react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1541888086925-920a0b8f4165?auto=format&fit=crop&w=2000&q=80", // Architecture/Civil
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80", // Modern Tech Building
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"  // Collaborative students
];

export function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-50 overflow-hidden relative">
      {/* Animated Hero Background Images */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.15, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${HERO_IMAGES[currentImageIndex]})`,
            }}
          />
        </AnimatePresence>
        {/* Dark vignette gradient overlay for readability */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-neutral-950 opacity-90" style={{ background: "radial-gradient(circle at center, transparent 0%, #0a0a0a 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-transparent to-neutral-950" />
      </div>

      {/* Background radial blobs */}
      <div className="fixed inset-0 z-[1] flex justify-center pointer-events-none">
        <div className="absolute top-[-10%] w-[1000px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm md:text-base font-medium text-neutral-300 mb-8 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            Elevate your learning experience
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60"
          >
            The Next Generation of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Tech Education
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed"
          >
            Master the most in-demand skills with our interactive, enterprise-grade learning management platform designed for modern professionals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link to="/dashboard" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors flex justify-center items-center gap-2 shadow-[0_0_40px_rgba(37,99,235,0.3)]">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/courses" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all flex justify-center items-center gap-2 backdrop-blur-sm">
               View Courses <Play className="w-4 h-4" fill="currentColor" />
            </Link>
          </motion.div>
        </section>

        {/* Feature Grid */}
        <section className="mb-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
