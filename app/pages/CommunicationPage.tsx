import { motion } from "motion/react";
import { Megaphone, MessageCircleMore, Send, Users } from "lucide-react";

export function CommunicationPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <section className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-900 to-cyan-700 p-6 text-white md:p-8">
        <h1 className="text-3xl font-bold">Communication Hub</h1>
        <p className="mt-2 max-w-3xl text-sm text-blue-50/90 md:text-base">
          Student-lecturer chat, announcements feed, and discussion forum for active collaboration.
        </p>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1fr_1fr]">
        <article className="lms-elevated rounded-2xl p-5">
          <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
            <MessageCircleMore className="h-4 w-4 text-blue-700" /> Student ↔ Lecturer Chat
          </h2>
          <div className="mt-3 space-y-2">
            <div className="rounded-lg bg-slate-100 p-3 text-sm text-slate-700">Student: Can we review the slab load assumptions?</div>
            <div className="rounded-lg bg-blue-700 p-3 text-sm text-white">Lecturer: Yes, upload your calculation sheet and I will annotate it.</div>
          </div>
          <div className="mt-3 flex gap-2">
            <input className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Type a message..." />
            <button className="rounded-lg bg-blue-700 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-800">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </article>

        <article className="lms-elevated rounded-2xl p-5">
          <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
            <Megaphone className="h-4 w-4 text-emerald-600" /> Announcements
          </h2>
          <div className="mt-3 space-y-2">
            <div className="rounded-xl border border-slate-200 p-3">
              <p className="text-sm font-semibold text-slate-800">Semester Project Review</p>
              <p className="mt-1 text-sm text-slate-600">Panel review starts Wednesday 9.00 AM at CSCT Innovation Lab.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-3">
              <p className="text-sm font-semibold text-slate-800">Internship Documentation Window</p>
              <p className="mt-1 text-sm text-slate-600">Submit week 8 logbooks before Friday 5.00 PM.</p>
            </div>
          </div>
        </article>
      </section>

      <article className="lms-elevated rounded-2xl p-5">
        <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
          <Users className="h-4 w-4 text-blue-700" /> Discussion Forum
        </h2>
        <div className="mt-3 grid gap-2 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-3">
            <p className="text-sm font-semibold text-slate-800">Best tools for quantity take-off automation?</p>
            <p className="mt-1 text-xs text-slate-500">18 replies</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-3">
            <p className="text-sm font-semibold text-slate-800">How to structure site risk register for final report?</p>
            <p className="mt-1 text-xs text-slate-500">12 replies</p>
          </div>
        </div>
      </article>
    </motion.div>
  );
}
