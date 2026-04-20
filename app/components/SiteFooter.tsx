import { ArrowUpRight, Globe, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const links = {
  platform: ["Learning Studio", "Assignment Hub", "Performance Analytics", "Student Success Tracker"],
  institution: ["Admissions", "Industry Pathways", "Campus Life", "Careers"],
  legal: ["Privacy Policy", "Terms", "Accessibility", "Data Processing"],
};

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-10 w-full max-w-[1380px] px-3 pb-8 sm:px-6">
      <div className="overflow-hidden rounded-3xl border border-slate-200/70 bg-[linear-gradient(130deg,#0b1a35_0%,#102857_40%,#0b3a4f_100%)] text-white shadow-2xl shadow-slate-900/20">
        <div className="grid gap-8 px-6 py-10 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div>
            <h3 className="text-lg font-bold">CSCT NeoLMS</h3>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-cyan-200/80">Campus Experience OS</p>
            <p className="mt-4 text-sm leading-6 text-slate-200/80">
              A modern academic interface to present admissions excellence, operational maturity, and student outcomes to stakeholders.
            </p>
            <div className="mt-5 space-y-2 text-xs text-slate-200/80">
              <p className="inline-flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-cyan-300" /> (+94) 077 594 5162</p>
              <p className="inline-flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-cyan-300" /> csctmktg1@csct.edu.lk</p>
              <p className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-cyan-300" /> 128, Pagoda Road, Pita Kotte</p>
              <p className="inline-flex items-center gap-2"><Globe className="h-3.5 w-3.5 text-cyan-300" /> www.csct.edu.lk</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Platform</h4>
            <ul className="mt-3 space-y-2.5 text-sm text-slate-200/80">
              {links.platform.map((item) => (
                <li key={item}>
                  <button className="inline-flex items-center gap-1 hover:text-white">
                    <ArrowUpRight className="h-3.5 w-3.5 text-cyan-300" /> {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Institution</h4>
            <ul className="mt-3 space-y-2.5 text-sm text-slate-200/80">
              {links.institution.map((item) => (
                <li key={item}>
                  <button className="inline-flex items-center gap-1 hover:text-white">
                    <ArrowUpRight className="h-3.5 w-3.5 text-cyan-300" /> {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Legal</h4>
            <ul className="mt-3 space-y-2.5 text-sm text-slate-200/80">
              {links.legal.map((item) => (
                <li key={item}>
                  <button className="inline-flex items-center gap-1 hover:text-white">
                    <ArrowUpRight className="h-3.5 w-3.5 text-cyan-300" /> {item}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-2 text-slate-200/80">
              <button className="rounded-lg border border-white/20 p-2 hover:bg-white/10"><Instagram className="h-4 w-4" /></button>
              <button className="rounded-lg border border-white/20 p-2 hover:bg-white/10"><Linkedin className="h-4 w-4" /></button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 px-6 py-4 text-xs text-slate-300/70 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© 2026 CSCT NeoLMS. Built for high-impact academic demos.</p>
          <p>Designed for conversion, clarity, and confidence.</p>
        </div>
      </div>
    </footer>
  );
}
