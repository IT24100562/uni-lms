import { motion } from "motion/react";
import { FileText, Filter, GraduationCap, MessageSquare, Upload } from "lucide-react";

export function LecturerDashboardPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <section className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-900 to-slate-800 p-6 text-white md:p-8">
        <h1 className="text-3xl font-bold">Lecturer Dashboard</h1>
        <p className="mt-2 max-w-3xl text-sm text-blue-50/90 md:text-base">
          Manage modules, upload resources, review submissions, and grade with structured feedback workflows.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["Active Courses", "12"],
          ["Pending Submissions", "38"],
          ["Feedback Sent", "124"],
          ["Avg Course Completion", "69%"],
        ].map(([label, value]) => (
          <article key={label} className="lms-elevated rounded-2xl p-4">
            <p className="text-xs text-slate-500">{label}</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">{value}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-2">
        <article className="lms-elevated rounded-2xl p-5">
          <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
            <Upload className="h-4 w-4 text-blue-700" /> Upload Learning Materials
          </h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <input className="rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Course code" />
            <input className="rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Module title" />
            <input className="rounded-lg border border-slate-300 px-3 py-2 text-sm sm:col-span-2" placeholder="Video URL" />
            <textarea rows={4} className="rounded-lg border border-slate-300 px-3 py-2 text-sm sm:col-span-2" placeholder="Module description" />
          </div>
          <button className="mt-3 rounded-lg bg-blue-700 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-800">Publish Module</button>
        </article>

        <article className="lms-elevated rounded-2xl p-5">
          <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
            <Filter className="h-4 w-4 text-emerald-600" /> Filter Student Submissions
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            <button className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">All</button>
            <button className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">Pending</button>
            <button className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Submitted</button>
            <button className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">Graded</button>
          </div>
          <div className="mt-3 space-y-2">
            <div className="rounded-xl border border-slate-200 p-3">
              <p className="text-sm font-semibold text-slate-800">HND Civil - Structural Drawing Pack</p>
              <p className="mt-1 text-xs text-slate-500">Submitted by 26 students, 11 pending grading</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-3">
              <p className="text-sm font-semibold text-slate-800">MSc CM - Site Safety Audit Report</p>
              <p className="mt-1 text-xs text-slate-500">Submitted by 18 students, 6 pending grading</p>
            </div>
          </div>
        </article>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <article className="lms-elevated rounded-2xl p-5">
          <h3 className="inline-flex items-center gap-2 text-base font-semibold text-slate-900">
            <FileText className="h-4 w-4 text-blue-700" /> Grade and Feedback
          </h3>
          <textarea rows={5} className="mt-3 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Write feedback comments and marks..." />
          <button className="mt-3 rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-700">Save Grade</button>
        </article>

        <article className="lms-elevated rounded-2xl p-5">
          <h3 className="inline-flex items-center gap-2 text-base font-semibold text-slate-900">
            <MessageSquare className="h-4 w-4 text-emerald-600" /> Student Communication
          </h3>
          <p className="mt-2 text-sm text-slate-600">Broadcast announcements and answer course forum questions.</p>
          <button className="mt-3 rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50">Open Course Chat</button>
          <p className="mt-3 inline-flex items-center gap-1 text-xs text-blue-700">
            <GraduationCap className="h-3.5 w-3.5" /> Practical learning alerts enabled
          </p>
        </article>
      </section>
    </motion.div>
  );
}
