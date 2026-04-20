import { motion } from "motion/react";
import { Clock3, FileText, FolderUp, MessageSquare, UploadCloud, Users } from "lucide-react";
import { ChangeEvent, DragEvent, useMemo, useState } from "react";
import { upcomingAssignments } from "../data/csctData";

const acceptedTypes = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/png",
  "image/jpeg",
];

export function AssignmentsPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [groupMode, setGroupMode] = useState(true);

  const handleFiles = (incoming: FileList | null) => {
    if (!incoming) return;
    const valid = Array.from(incoming).filter((file) => acceptedTypes.includes(file.type));
    setFiles((prev) => [...prev, ...valid].slice(0, 5));
  };

  const onDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
    handleFiles(event.dataTransfer.files);
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleFiles(event.target.files);
  };

  const preview = useMemo(() => files.map((file) => ({ name: file.name, sizeKb: Math.ceil(file.size / 1024) })), [files]);

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <section className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 p-6 text-white md:p-8">
        <h1 className="text-3xl font-bold">Assignment Submission System</h1>
        <p className="mt-2 max-w-3xl text-sm text-blue-50/90 md:text-base">
          Upload PDF, DOCX, and drawing evidence with deadline tracking, status indicators, lecturer feedback, and group project support.
        </p>
      </section>

      <section className="grid gap-5 grid-cols-1">
        <article className="lms-elevated rounded-2xl p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Upcoming Deadlines</h2>
            <Clock3 className="h-4 w-4 text-slate-500" />
          </div>
          <div className="space-y-3">
            {upcomingAssignments.map((item) => {
              const diff = new Date(item.dueAt).getTime() - Date.now();
              const hours = Math.floor(diff / (1000 * 60 * 60));
              const days = Math.max(0, Math.floor(hours / 24));
              const remainingHours = Math.max(0, hours % 24);

              return (
                <div key={item.id} className="rounded-xl border border-slate-200 p-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.course}</p>
                    </div>
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-semibold ${
                        item.status === "Pending"
                          ? "bg-amber-100 text-amber-700"
                          : item.status === "Submitted"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-600">{days}d {remainingHours}h left</p>
                </div>
              );
            })}
          </div>
        </article>

        <article className="lms-elevated rounded-2xl p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Upload Submission</h2>
            <UploadCloud className="h-4 w-4 text-slate-500" />
          </div>
          <div
            onDragOver={(event) => {
              event.preventDefault();
              setIsDragOver(true);
            }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={onDrop}
            className={`rounded-2xl border-2 border-dashed p-8 text-center transition ${
              isDragOver ? "border-blue-500 bg-blue-50" : "border-slate-300 bg-slate-50"
            }`}
          >
            <FolderUp className="mx-auto h-8 w-8 text-blue-600" />
            <p className="mt-2 text-sm font-medium text-slate-700">Drag and drop assignment files</p>
            <p className="mt-1 text-xs text-slate-500">Accepted: PDF, DOCX, Drawings (PNG/JPG)</p>
            <label className="mt-4 inline-flex cursor-pointer items-center rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700">
              Choose Files
              <input type="file" multiple onChange={onInputChange} className="hidden" />
            </label>
          </div>

          <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3">
            <div>
              <p className="text-sm font-semibold text-slate-800">Group project submission</p>
              <p className="text-xs text-slate-500">Enable team upload and shared feedback thread</p>
            </div>
            <button
              onClick={() => setGroupMode((prev) => !prev)}
              className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                groupMode ? "bg-blue-700 text-white" : "bg-slate-100 text-slate-600"
              }`}
            >
              {groupMode ? "Enabled" : "Disabled"}
            </button>
          </div>

          <div className="mt-4 space-y-2">
            {preview.length === 0 ? <p className="text-xs text-slate-500">No files selected yet.</p> : null}
            {preview.map((file) => (
              <div key={file.name} className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                <p className="text-xs font-medium text-slate-700">{file.name}</p>
                <span className="text-xs text-slate-500">{file.sizeKb} KB</span>
              </div>
            ))}
          </div>

          <button className="mt-4 w-full rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.01] hover:bg-blue-800">
            Submit Assignment
          </button>
        </article>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="lms-elevated rounded-2xl p-5">
          <h3 className="inline-flex items-center gap-2 text-base font-semibold text-slate-900">
            <MessageSquare className="h-4 w-4 text-emerald-600" /> Lecturer Feedback
          </h3>
          <div className="mt-3 space-y-2">
            <div className="rounded-xl border border-slate-200 p-3">
              <p className="text-sm font-semibold text-slate-800">Bill of Quantities: Mixed-use Building</p>
              <p className="mt-1 text-sm text-slate-600">Great cost breakdown and assumptions. Add market rate references for steel.</p>
              <p className="mt-2 text-xs text-emerald-700">Mark: 84/100</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-3">
              <p className="text-sm font-semibold text-slate-800">Site Safety Observation Log</p>
              <p className="mt-1 text-sm text-slate-600">Need clearer photo captions and PPE risk commentary.</p>
              <p className="mt-2 text-xs text-amber-700">Mark: Pending review</p>
            </div>
          </div>
        </article>

        <article className="lms-elevated rounded-2xl p-5">
          <h3 className="inline-flex items-center gap-2 text-base font-semibold text-slate-900">
            <Users className="h-4 w-4 text-blue-600" /> Group Submission Status
          </h3>
          <div className="mt-3 space-y-2">
            <div className="rounded-xl border border-slate-200 p-3">
              <p className="text-sm font-semibold text-slate-800">Team SteelFrame - Construction Sequence Optimization</p>
              <p className="mt-1 text-xs text-slate-500">4 files uploaded, final report pending</p>
              <span className="mt-2 inline-block rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">Pending</span>
            </div>
            <div className="rounded-xl border border-slate-200 p-3">
              <p className="text-sm font-semibold text-slate-800">Team SmartSite - Digital Site Logbook Prototype</p>
              <p className="mt-1 text-xs text-slate-500">All deliverables submitted and under lecturer review</p>
              <span className="mt-2 inline-block rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">Submitted</span>
            </div>
          </div>
          <button className="mt-4 inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50">
            <FileText className="h-4 w-4" /> Open Group Workspace
          </button>
        </article>
      </section>
    </motion.div>
  );
}
