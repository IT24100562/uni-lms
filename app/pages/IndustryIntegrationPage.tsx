import { motion } from "motion/react";
import { BellRing, BriefcaseBusiness, Building2, Link2 } from "lucide-react";
import { industryNews, industryOpportunities, industryPartners } from "../data/csctData";

export function IndustryIntegrationPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <section className="rounded-3xl border border-blue-100 bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700 p-6 text-white md:p-8">
        <h1 className="text-3xl font-bold">Industry Integration</h1>
        <p className="mt-2 max-w-3xl text-sm text-blue-50/90 md:text-base">
          Connect students with internships, partner companies, and live construction industry announcements.
        </p>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1fr_1fr]">
        <article className="lms-elevated rounded-2xl p-5">
          <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
            <BriefcaseBusiness className="h-4 w-4 text-blue-700" /> Internship Opportunities
          </h2>
          <div className="mt-3 space-y-2">
            {industryOpportunities.map((item) => (
              <div key={item.id} className="rounded-xl border border-slate-200 p-3">
                <p className="text-sm font-semibold text-slate-800">{item.company}</p>
                <p className="mt-1 text-sm text-slate-600">{item.role} • {item.location}</p>
                <p className="mt-2 text-xs text-slate-500">Apply before {item.closingDate}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="lms-elevated rounded-2xl p-5">
          <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
            <Link2 className="h-4 w-4 text-emerald-600" /> Company Connections
          </h2>
          <div className="mt-3 space-y-2">
            {industryPartners.map((partner) => (
              <div key={partner.id} className="rounded-xl border border-slate-200 p-3">
                <p className="text-sm font-semibold text-slate-800">{partner.company}</p>
                <p className="mt-1 text-sm text-slate-600">{partner.focus}</p>
                <p className="mt-2 text-xs text-blue-700">{partner.contact}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <article className="lms-elevated rounded-2xl p-5">
        <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
          <BellRing className="h-4 w-4 text-blue-700" /> Industry Announcements
        </h2>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {industryNews.map((news) => (
            <div key={news.id} className="rounded-xl border border-slate-200 p-4">
              <p className="text-xs text-slate-500">{news.postedAt}</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">{news.title}</p>
              <p className="mt-2 text-sm text-slate-600">{news.body}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-5">
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
          <Building2 className="h-4 w-4" /> CSCT Partner Network
        </p>
        <p className="mt-2 text-sm text-slate-700">
          Partner offices host student shadowing, provide live project datasets, and join curriculum review panels each semester.
        </p>
      </article>
    </motion.div>
  );
}
