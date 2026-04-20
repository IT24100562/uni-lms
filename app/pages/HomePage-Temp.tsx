import { motion } from "motion/react";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router";

export function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm"
        >
          <BookOpen className="h-4 w-4" />
          Temporary Homepage Draft
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl"
        >
          This page is a safe placeholder for in-progress redesign work.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-4 max-w-2xl text-neutral-400"
        >
          Keeping this file syntactically valid prevents CI and deployment checks from failing when temporary prototypes are not complete.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="mt-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-500"
          >
            Go to Live Home
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
