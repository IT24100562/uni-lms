import { motion } from "motion/react";
import { BookOpen, Trophy, Users, Zap, CheckCircle2, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router";
import heroVideo from "../../fotor-video_remover_object-preview-20260413161126_1.mp4";

export function HomePage() {
  return (
    <div className="relative -mt-24 min-h-screen overflow-hidden bg-neutral-950 pt-24 font-sans text-neutral-50">
      {/* Cinematic Video Background */}
      <div className="absolute inset-x-0 top-0 z-0 h-screen overflow-hidden pointer-events-none">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}
        />
        <div
          className="absolute inset-0 w-full"
          style={{
            background: "linear-gradient(to right, rgba(2,6,23,0.22) 0%, rgba(2,6,23,0.12) 40%, rgba(2,6,23,0.55) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/5 via-transparent to-neutral-950/30" />
      </div>

      {/* Background radial blobs */}
      <div className="absolute inset-x-0 top-0 z-[1] flex h-screen justify-center pointer-events-none">
        <div className="absolute top-[-10%] h-[460px] w-[920px] rounded-full bg-blue-600/14 blur-[80px] mix-blend-screen" />
        <div className="absolute left-[-10%] top-[20%] hidden h-[560px] w-[560px] rounded-full bg-indigo-600/8 blur-[80px] mix-blend-screen md:block" />
        <div className="absolute right-[-10%] top-[40%] hidden h-[560px] w-[560px] rounded-full bg-purple-600/8 blur-[80px] mix-blend-screen md:block" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <section className="flex min-h-[68vh] flex-col items-center justify-end pb-10 text-center md:pb-16">      
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
        <section className="mt-16 mb-40 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to succeed</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">Our platform combines world-class content with powerful analytics and interactive tools.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <BookOpen className="w-6 h-6 text-blue-400" />,
                title: "Curated Curriculums",
                description: "Expert-led courses designed to take you from beginner to advanced intuitively."
              },
              {
                icon: <Zap className="w-6 h-6 text-indigo-400" />,
                title: "Interactive Labs",
                description: "Learn by doing with our built-in coding environments and real-world projects."
              },
              {
                icon: <Trophy className="w-6 h-6 text-purple-400" />,
                title: "Industry Certifications",
                description: "Earn globally recognized certificates that boost your resume and career."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mb-40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Active Students", value: "50K+" },
              { label: "Expert Instructors", value: "200+" },
              { label: "Course Modules", value: "1,500+" },
              { label: "Success Rate", value: "94%" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 md:p-8 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 text-center backdrop-blur-md"
              >
                <div className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-medium text-neutral-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA / Testimonial minimal */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-10 md:p-16 rounded-3xl bg-blue-600/10 border border-blue-500/20 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 blur-[100px] rounded-full" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to start your journey?</h2>
                <p className="text-neutral-300 mb-6 text-lg">Join thousands of students building their future with us today.</p>
                <ul className="space-y-3">
                  {["Access to all premium courses", "1-on-1 mentorship sessions", "Exclusive community access"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-neutral-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-auto flex-shrink-0">
                <Link to="/admission" className="block w-full text-center px-8 py-4 rounded-xl bg-white text-blue-950 font-bold hover:bg-neutral-200 transition-colors shadow-xl">
                  Enroll Now
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
