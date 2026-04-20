import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, GraduationCap, Map } from "lucide-react";
import { academicJourneyEvents, academicPathway } from "../data/csctData";

export function AcademicProgressionPage() {
  const completed = academicPathway.filter((item) => item.completed).length;
  const progress = Math.round((completed / academicPathway.length) * 100);

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <section className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-950 to-cyan-700 p-6 text-white md:p-8">
        <h1 className="text-3xl font-bold">Academic Progression</h1>
        <p className="mt-2 max-w-3xl text-sm text-blue-50/90 md:text-base">
          Visualize the full CSCT pathway from HND to BSc to MSc and track each learner journey milestone.
        </p>
      </section>

      <article className="lms-elevated rounded-2xl p-5">
        <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
          <Map className="h-4 w-4 text-blue-700" /> Pathway Map
        </h2>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm font-semibold">
          <span className="rounded-lg bg-slate-100 px-3 py-2 text-slate-700">HND</span>
          <ArrowRight className="h-4 w-4 text-slate-500" />
          <span className="rounded-lg bg-blue-100 px-3 py-2 text-blue-700">BSc</span>
          <ArrowRight className="h-4 w-4 text-slate-500" />
          <span className="rounded-lg bg-emerald-100 px-3 py-2 text-emerald-700">MSc</span>
        </div>
        <div className="mt-4 h-2 rounded-full bg-slate-100">
          <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" style={{ width: `${progress}%` }} />
        </div>
        <p className="mt-2 text-xs text-slate-600">{progress}% of progression milestones completed</p>
      </article>

      <section className="grid gap-5 xl:grid-cols-[1fr_1fr]">
        <article className="lms-elevated rounded-2xl p-5">
          <h3 className="inline-flex items-center gap-2 text-base font-semibold text-slate-900">
            <GraduationCap className="h-4 w-4 text-blue-700" /> Milestone Tracker
          </h3>
          <div className="mt-3 space-y-2">
            {academicPathway.map((item) => (
              <div key={item.id} className="rounded-xl border border-slate-200 p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">{item.stage}</span>
                </div>
                <p className="mt-1 text-xs text-slate-500">Target: {item.targetTerm}</p>
                <p className={`mt-2 inline-flex items-center gap-1 text-xs ${item.completed ? "text-emerald-700" : "text-blue-700"}`}>
                  <CheckCircle2 className="h-3.5 w-3.5" /> {item.completed ? "Completed" : "In progress"}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="lms-elevated rounded-2xl p-5">
          <h3 className="text-base font-semibold text-slate-900">Student Academic Journey</h3>
          <div className="mt-3 space-y-2">
            {academicJourneyEvents.map((event) => (
              <div key={event.id} className="rounded-xl border border-slate-200 p-3">
                <p className="text-xs text-slate-500">{event.date}</p>
                <p className="mt-1 text-sm font-semibold text-slate-800">{event.title}</p>
                <p className="mt-1 text-sm text-slate-600">{event.detail}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </motion.div>
  );
}
