import { motion } from "motion/react";
import { BarChart3, BookOpen, BriefcaseBusiness, ChevronLeft, ChevronRight, ClipboardList, DraftingCompass, GraduationCap, Map, MessageSquare, Settings, ShieldCheck, Sparkles } from "lucide-react";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const links = [
  { path: "/", label: "Dashboard", icon: Sparkles },
  { path: "/courses", label: "Courses", icon: BookOpen },
  { path: "/assignments", label: "Assignments", icon: ClipboardList },
  { path: "/industrial-training", label: "Industrial Training", icon: ShieldCheck },
  { path: "/practical-learning", label: "Practical Learning", icon: DraftingCompass },
  { path: "/group-projects", label: "Group Projects", icon: MessageSquare },
  { path: "/academic-progression", label: "Academic Progression", icon: Map },
  { path: "/industry-integration", label: "Industry Integration", icon: BriefcaseBusiness },
  { path: "/analytics", label: "Analytics", icon: BarChart3 },
  { path: "/certification", label: "Certification", icon: GraduationCap },
  { path: "/admin", label: "Admin", icon: Settings },
];

import { CSCTLogo } from "./ui/CSCTLogo";

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const activePath = useMemo(() => {
    if (location.pathname === "/") return "/";
    const found = links.find((link) => link.path !== "/" && location.pathname.startsWith(link.path));
    return found?.path ?? "/";
  }, [location.pathname]);

  return (
    <motion.aside
      animate={{ width: collapsed ? 86 : 272 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="lms-glass lms-glow-ring hidden h-[calc(100vh-118px)] shrink-0 overflow-hidden rounded-3xl border p-3 lg:flex lg:flex-col"
    >
      <div className="mb-4 flex items-center justify-between px-2 py-2">
        <button onClick={() => navigate("/")} className="flex flex-1 items-center justify-start overflow-hidden">
          {collapsed ? (
            <CSCTLogo variant="icon" className="h-10 w-10 shrink-0" />
          ) : (
            <CSCTLogo className="h-12 w-full" />
          )}
        </button>
        <button onClick={onToggle} className="ml-2 rounded-lg border border-slate-200 bg-white/70 p-1.5 text-slate-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      <nav className="space-y-1">
        {links.map((item) => {
          const Icon = item.icon;
          const active = activePath === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`group flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition ${
                active
                  ? "bg-gradient-to-r from-blue-700 to-cyan-600 text-white shadow-lg shadow-blue-600/25"
                  : "text-slate-600 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-blue-950/40"
              }`}
            >
              <Icon className="h-4.5 w-4.5 shrink-0" />
              {!collapsed ? <span>{item.label}</span> : null}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/90 to-cyan-50/90 p-3 dark:border-blue-900/50 dark:from-blue-950/40 dark:to-cyan-950/20">
        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300">Semester Pulse</p>
        {!collapsed ? <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">84% attendance • 6 modules active</p> : null}
      </div>
    </motion.aside>
  );
}
