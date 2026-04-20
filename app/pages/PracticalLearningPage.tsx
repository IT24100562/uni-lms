import { motion } from "motion/react";
import { CheckCircle2, Compass, FileCode2, HardHat, UploadCloud } from "lucide-react";
import { constructionSubmissions, fieldworkAssignments, practicalUploads } from "../data/csctData";

function statusStyle(status: "Submitted" | "Reviewing" | "Approved") {
  if (status === "Approved") return "bg-emerald-100 text-emerald-700";
  if (status === "Reviewing") return "bg-amber-100 text-amber-700";
  return "bg-blue-100 text-blue-700";
}

export function PracticalLearningPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <section className="rounded-3xl border border-blue-100 bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-700 p-6 text-white md:p-8">
        <h1 className="text-3xl font-bold">Practical Learning System</h1>
        <p className="mt-2 max-w-3xl text-sm text-blue-50/90 md:text-base">
          Upload AutoCAD drawings and plans, complete fieldwork-based assignments, and submit construction projects with industry rubrics.
        </p>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <article className="lms-elevated rounded-2xl p-5">
          <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
            <UploadCloud className="h-4 w-4 text-blue-700" /> Drawing and Plan Uploads
          </h2>
          <div className="mt-3 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-4 text-center">
            <FileCode2 className="mx-auto h-6 w-6 text-slate-500" />
            <p className="mt-2 text-sm text-slate-600">Supports DWG, RVT, and PDF plan submissions up to 200 MB.</p>
            <button className="mt-3 rounded-lg bg-blue-700 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-800">Choose Files</button>
          </div>
          <div className="mt-4 space-y-2">
            {practicalUploads.map((upload) => (
              <div key={upload.id} className="rounded-xl border border-slate-200 p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">{upload.title}</p>
                  <span className={`rounded-full px-2 py-1 text-xs font-semibold ${statusStyle(upload.status)}`}>{upload.status}</span>
                </div>
                <p className="mt-1 text-xs text-slate-500">{upload.module} • {upload.format}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="lms-elevated rounded-2xl p-5">
          <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
            <Compass className="h-4 w-4 text-emerald-600" /> Fieldwork-Based Assignments
          </h2>
          <div className="mt-3 space-y-2">
            {fieldworkAssignments.map((task) => (
              <div key={task.id} className="rounded-xl border border-slate-200 p-3">
                <p className="text-sm font-semibold text-slate-800">{task.title}</p>
                <p className="mt-1 text-xs text-slate-500">{task.location}</p>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700">Due {task.dueDate}</span>
                  <span className="rounded-full bg-blue-100 px-2 py-1 font-semibold text-blue-700">{task.points} marks</span>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <article className="lms-elevated rounded-2xl p-5">
        <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
          <HardHat className="h-4 w-4 text-blue-700" /> Construction Project Submissions
        </h2>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {constructionSubmissions.map((submission) => (
            <div key={submission.id} className="rounded-xl border border-slate-200 p-4">
              <p className="text-sm font-semibold text-slate-800">{submission.title}</p>
              <p className="mt-1 text-xs text-slate-500">{submission.milestone}</p>
              <p className="mt-2 text-xs text-slate-600">Rubric: {submission.rubric}</p>
              <p className="mt-2 inline-flex items-center gap-1 text-xs text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5" /> {submission.status}
              </p>
            </div>
          ))}
        </div>
      </article>
    </motion.div>
  );
}
