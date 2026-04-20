import { motion } from "motion/react";
import { BarChart3, BookCopy, BriefcaseBusiness, UserCog, UserPlus } from "lucide-react";

export function AdminPanelPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <section className="rounded-3xl border border-blue-100 bg-gradient-to-r from-slate-900 to-blue-800 p-6 text-white md:p-8">
        <h1 className="text-3xl font-bold">Admin Control Panel</h1>
        <p className="mt-2 max-w-3xl text-sm text-blue-50/90 md:text-base">
          Manage students, lecturers, and courses with institution-level analytics for progress and engagement.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["Students", "2,460"],
          ["Lecturers", "112"],
          ["Active Courses", "74"],
          ["Avg Engagement", "84%"],
        ].map(([label, value]) => (
          <article key={label} className="lms-elevated rounded-2xl p-4">
            <p className="text-xs text-slate-500">{label}</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">{value}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-3">
        <article className="lms-elevated rounded-2xl p-5">
          <h2 className="inline-flex items-center gap-2 text-base font-semibold text-slate-900">
            <UserPlus className="h-4 w-4 text-blue-700" /> Manage Students
          </h2>
          <p className="mt-2 text-sm text-slate-600">Enroll students by HND, BSc, MSc streams and assign IDs.</p>
          <button className="mt-3 rounded-lg bg-blue-700 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-800">Open Student Registry</button>
        </article>

        <article className="lms-elevated rounded-2xl p-5">
          <h2 className="inline-flex items-center gap-2 text-base font-semibold text-slate-900">
            <UserCog className="h-4 w-4 text-emerald-600" /> Assign Lecturers
          </h2>
          <p className="mt-2 text-sm text-slate-600">Map lecturers to construction, surveying, and CAD modules.</p>
          <button className="mt-3 rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50">Open Course Allocation</button>
        </article>

        <article className="lms-elevated rounded-2xl p-5">
          <h2 className="inline-flex items-center gap-2 text-base font-semibold text-slate-900">
            <BookCopy className="h-4 w-4 text-amber-600" /> Course Lifecycle
          </h2>
          <p className="mt-2 text-sm text-slate-600">Archive, duplicate, and configure semester offerings.</p>
          <button className="mt-3 rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50">Manage Courses</button>
        </article>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <article className="lms-elevated rounded-2xl p-5">
          <h3 className="inline-flex items-center gap-2 text-base font-semibold text-slate-900">
            <BarChart3 className="h-4 w-4 text-blue-700" /> Student Progress Analytics
          </h3>
          <div className="mt-3 space-y-2">
            <div className="rounded-xl border border-slate-200 p-3">
              <p className="text-xs text-slate-500">HND Civil Engineering completion</p>
              <p className="text-xl font-semibold text-slate-900">76%</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-3">
              <p className="text-xs text-slate-500">BSc Quantity Surveying completion</p>
              <p className="text-xl font-semibold text-slate-900">71%</p>
            </div>
          </div>
        </article>

        <article className="lms-elevated rounded-2xl p-5">
          <h3 className="inline-flex items-center gap-2 text-base font-semibold text-slate-900">
            <BriefcaseBusiness className="h-4 w-4 text-emerald-600" /> Course Engagement
          </h3>
          <div className="mt-3 space-y-2">
            <div className="rounded-xl border border-slate-200 p-3">
              <p className="text-xs text-slate-500">Average weekly active learners</p>
              <p className="text-xl font-semibold text-slate-900">1,892</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-3">
              <p className="text-xs text-slate-500">Discussion posts this week</p>
              <p className="text-xl font-semibold text-slate-900">548</p>
            </div>
          </div>
        </article>
      </section>
    </motion.div>
  );
}
