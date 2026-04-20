import { motion } from "motion/react";
import { CheckSquare, FolderOpen, MessageCircle, Plus, Users } from "lucide-react";
import { groupProjects, teamSharedFiles, teamTasks } from "../data/csctData";

export function GroupProjectsPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <section className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-900 to-cyan-700 p-6 text-white md:p-8">
        <h1 className="text-3xl font-bold">Group Project Workspace</h1>
        <p className="mt-2 max-w-3xl text-sm text-blue-50/90 md:text-base">
          Team creation, shared files, task tracking, and built-in chat for collaborative construction projects.
        </p>
      </section>

      <section className="lms-elevated rounded-2xl p-5">
        <h2 className="inline-flex items-center gap-2 text-base font-semibold text-slate-900">
          <Plus className="h-4 w-4 text-blue-700" /> Team Creation
        </h2>
        <div className="mt-3 grid gap-2 md:grid-cols-3">
          <input placeholder="Team name" className="rounded-lg border border-slate-300 px-3 py-2 text-sm" />
          <input placeholder="Project title" className="rounded-lg border border-slate-300 px-3 py-2 text-sm" />
          <button className="rounded-lg bg-blue-700 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-800">Create Team</button>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        {groupProjects.map((item) => (
          <article key={item.id} className="lms-elevated rounded-2xl p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h2 className="text-base font-semibold text-slate-900">{item.team}</h2>
                <p className="text-sm text-slate-600">{item.project}</p>
              </div>
              <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">{item.progress}%</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-slate-100">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.progress}%` }}
                viewport={{ once: true }}
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
              />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
              <div className="rounded-lg border border-slate-200 p-2 text-center">
                <Users className="mx-auto h-4 w-4 text-slate-500" />
                <p className="mt-1 text-slate-700">{item.members} members</p>
              </div>
              <div className="rounded-lg border border-slate-200 p-2 text-center">
                <CheckSquare className="mx-auto h-4 w-4 text-slate-500" />
                <p className="mt-1 text-slate-700">{item.tasksOpen} open tasks</p>
              </div>
              <div className="rounded-lg border border-slate-200 p-2 text-center">
                <FolderOpen className="mx-auto h-4 w-4 text-slate-500" />
                <p className="mt-1 text-slate-700">{item.files} files</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">Latest message: {item.lastMessage}</p>
            <button className="mt-3 inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50">
              <MessageCircle className="h-4 w-4" /> Open Team Chat
            </button>
          </article>
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_1fr]">
        <article className="lms-elevated rounded-2xl p-5">
          <h3 className="inline-flex items-center gap-2 text-base font-semibold text-slate-900">
            <CheckSquare className="h-4 w-4 text-blue-700" /> Task Tracking
          </h3>
          <div className="mt-3 space-y-2">
            {teamTasks.map((task) => (
              <div key={task.id} className="rounded-xl border border-slate-200 p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">{task.title}</p>
                  <span className={`rounded-full px-2 py-1 text-xs font-semibold ${task.status === "Done" ? "bg-emerald-100 text-emerald-700" : task.status === "In progress" ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-700"}`}>
                    {task.status}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-500">Owner: {task.owner} • Due {task.dueDate}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="lms-elevated rounded-2xl p-5">
          <h3 className="inline-flex items-center gap-2 text-base font-semibold text-slate-900">
            <FolderOpen className="h-4 w-4 text-emerald-600" /> Shared Files
          </h3>
          <div className="mt-3 space-y-2">
            {teamSharedFiles.map((file) => (
              <div key={file.id} className="rounded-xl border border-slate-200 p-3">
                <p className="text-sm font-semibold text-slate-800">{file.name}</p>
                <p className="mt-1 text-xs text-slate-500">{file.category} • Updated {file.updatedAt}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </motion.div>
  );
}
