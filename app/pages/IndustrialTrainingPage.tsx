import { motion } from "motion/react";
import { Camera, CheckCircle2, ClipboardCheck, FileText, FileUp, NotebookPen, UserRoundCheck } from "lucide-react";
import { internshipWeeks, siteReports, supervisorFeedback } from "../data/csctData";

export function IndustrialTrainingPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <section className="rounded-3xl border border-blue-100 bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700 p-6 text-white md:p-8">
        <h1 className="text-3xl font-bold">Industrial Training Module</h1>
        <p className="mt-2 max-w-3xl text-sm text-blue-50/90 md:text-base">
          Internship logbook with weekly progress updates, supervisor feedback, report upload, and construction site photo evidence.
        </p>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <article className="lms-elevated rounded-2xl p-5">
          <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
            <NotebookPen className="h-4 w-4 text-blue-700" /> Internship Weekly Logbook
          </h2>
          <div className="mt-4 space-y-3">
            {internshipWeeks.map((week) => (
              <div key={week.week} className="rounded-xl border border-slate-200 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">Week {week.week} - {week.site}</p>
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">{week.progress}%</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{week.update}</p>
                <p className="mt-2 inline-flex items-center gap-1 text-xs text-emerald-700">
                  <UserRoundCheck className="h-3.5 w-3.5" /> Supervisor: {week.supervisor}
                </p>
                <div className="mt-2 h-2 rounded-full bg-slate-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${week.progress}%` }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </article>

        <div className="space-y-4">
          <article className="lms-elevated rounded-2xl p-5">
            <h3 className="inline-flex items-center gap-2 text-base font-semibold text-slate-900">
              <ClipboardCheck className="h-4 w-4 text-blue-700" /> Supervisor Feedback Form
            </h3>
            <div className="mt-3 space-y-2">
              <textarea
                rows={4}
                placeholder="Weekly feedback notes"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
              <button className="rounded-lg bg-blue-700 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-800">Submit Feedback</button>
            </div>
            <div className="mt-4 space-y-2">
              {supervisorFeedback.map((item) => (
                <div key={item.id} className="rounded-xl border border-slate-200 p-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs font-semibold text-slate-800">Week {item.week} • {item.supervisor}</p>
                    <span className={`rounded-full px-2 py-1 text-[11px] font-semibold ${item.status === "Reviewed" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-600">{item.comment}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="lms-elevated rounded-2xl p-5">
            <h3 className="inline-flex items-center gap-2 text-base font-semibold text-slate-900">
              <FileUp className="h-4 w-4 text-emerald-600" /> Upload Reports and Site Photos
            </h3>
            <div className="mt-3 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-4 text-center">
              <Camera className="mx-auto h-6 w-6 text-slate-500" />
              <p className="mt-2 text-sm text-slate-600">Drop weekly report PDFs, photos, and drawing updates</p>
            </div>
            <button className="mt-3 w-full rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50">
              Choose Files
            </button>
            <div className="mt-3 space-y-2">
              {siteReports.map((report) => (
                <div key={report.id} className="rounded-lg border border-slate-200 p-2.5">
                  <p className="text-xs font-semibold text-slate-800">{report.title}</p>
                  <p className="mt-1 text-xs text-slate-500">Week {report.week} • {report.type} • {report.uploadedAt} • {report.size}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="lms-elevated rounded-2xl p-5">
            <h3 className="text-base font-semibold text-slate-900">Internship Completion</h3>
            <p className="mt-2 text-sm text-slate-600">Current progress: 61% of required industrial training hours validated.</p>
            <p className="mt-2 inline-flex items-center gap-1 text-xs text-emerald-700">
              <CheckCircle2 className="h-3.5 w-3.5" /> On track for semester completion
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-xs text-blue-700">
              <FileText className="h-3.5 w-3.5" /> 3 site reports uploaded and awaiting faculty moderation
            </p>
          </article>
        </div>
      </section>
    </motion.div>
  );
}
