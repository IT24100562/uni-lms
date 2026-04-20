import { motion } from "motion/react";
import { ArrowRight, BadgeCheck, FileBadge, Globe2, ShieldCheck } from "lucide-react";
import { certificationTrackers, certifications, ukPartnerships } from "../data/csctData";

export function CertificationPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <section className="rounded-3xl border border-blue-100 bg-gradient-to-r from-slate-900 to-blue-800 p-6 text-white md:p-8">
        <h1 className="text-3xl font-bold">Certification and Degree Progression</h1>
        <p className="mt-2 max-w-3xl text-sm text-blue-50/90 md:text-base">
          Track course completion, generate certificates, and monitor progression from HND to BSc to MSc pathways.
        </p>
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        {certifications.map((item) => {
          const progress = Math.round((item.completedCredits / item.totalCredits) * 100);
          return (
            <article key={item.program} className="lms-elevated rounded-2xl p-5">
              <h2 className="text-base font-semibold text-slate-900">{item.program}</h2>
              <p className="mt-2 text-xs text-slate-500">{item.completedCredits}/{item.totalCredits} credits</p>
              <div className="mt-2 h-2 rounded-full bg-slate-100">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${progress}%` }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-500"
                />
              </div>
              <p className="mt-2 text-sm text-slate-600">{item.next}</p>
              {item.certificateReady ? (
                <button className="mt-3 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-700">
                  <FileBadge className="h-4 w-4" /> Generate Certificate
                </button>
              ) : (
                <p className="mt-3 inline-flex items-center gap-1 text-xs text-blue-700">
                  <BadgeCheck className="h-3.5 w-3.5" /> Continue modules to unlock certificate
                </p>
              )}
            </article>
          );
        })}
      </section>

      <article className="lms-elevated rounded-2xl p-5">
        <h3 className="text-base font-semibold text-slate-900">Degree Progression Path</h3>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm font-medium text-slate-700">
          <span className="rounded-lg bg-slate-100 px-3 py-2">HND</span>
          <ArrowRight className="h-4 w-4 text-slate-500" />
          <span className="rounded-lg bg-blue-100 px-3 py-2 text-blue-700">BSc</span>
          <ArrowRight className="h-4 w-4 text-slate-500" />
          <span className="rounded-lg bg-emerald-100 px-3 py-2 text-emerald-700">MSc</span>
        </div>
      </article>

      <section className="grid gap-4 xl:grid-cols-[1fr_1fr]">
        <article className="lms-elevated rounded-2xl p-5">
          <h3 className="inline-flex items-center gap-2 text-base font-semibold text-slate-900">
            <Globe2 className="h-4 w-4 text-blue-700" /> UK Partnerships and Accreditation
          </h3>
          <div className="mt-3 space-y-2">
            {ukPartnerships.map((partner) => (
              <div key={partner.id} className="rounded-xl border border-slate-200 p-3">
                <p className="text-sm font-semibold text-slate-800">{partner.institution}</p>
                <p className="mt-1 text-sm text-slate-600">{partner.program}</p>
                <p className={`mt-2 text-xs font-semibold ${partner.status === "Active" ? "text-emerald-700" : "text-amber-700"}`}>
                  {partner.status}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="lms-elevated rounded-2xl p-5">
          <h3 className="inline-flex items-center gap-2 text-base font-semibold text-slate-900">
            <ShieldCheck className="h-4 w-4 text-emerald-600" /> Certification Progress Tracker
          </h3>
          <div className="mt-3 space-y-3">
            {certificationTrackers.map((item) => (
              <div key={item.id} className="rounded-xl border border-slate-200 p-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">{item.name}</p>
                  <p className="text-xs font-semibold text-blue-700">{item.progress}%</p>
                </div>
                <div className="mt-2 h-2 rounded-full bg-slate-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-500"
                  />
                </div>
                <p className="mt-2 text-xs text-slate-600">{item.requirement}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </motion.div>
  );
}
