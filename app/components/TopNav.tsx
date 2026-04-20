import { useEffect, useMemo, useRef, useState } from "react";
import { Bell, Building2, ChevronDown, ChevronRight, Command, Menu, Moon, Sparkles, Sun, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { CSCTLogo } from "./ui/CSCTLogo";

const navItems = [
  { id: "home", label: "Home", path: "/" },
  { id: "courses", label: "Courses", path: "/courses" },
  { id: "assignments", label: "Assignments", path: "/assignments" },
  { id: "analytics", label: "Analytics", path: "/analytics" },
  { id: "industrial-training", label: "Industrial Training", path: "/industrial-training" },
  { id: "practical-learning", label: "Practical Learning", path: "/practical-learning" },
  { id: "group-projects", label: "Group Projects", path: "/group-projects" },
  { id: "academic-progression", label: "Academic Progression", path: "/academic-progression" },
  { id: "industry-integration", label: "Industry Integration", path: "/industry-integration" },
  { id: "certification", label: "Certification", path: "/certification" },
  { id: "communication", label: "Communication", path: "/communication" },
  { id: "lecturer", label: "Lecturer", path: "/lecturer" },
  { id: "admin", label: "Admin", path: "/admin" },
  { id: "admission", label: "Admission", path: "/admission" },
  { id: "about", label: "About", path: "/about" }
];

const primaryNavItemIds = ["home", "courses", "assignments", "analytics"];

export function TopNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const { role, isAuthenticated, loginAs, logout } = useAuth();

  const primaryNavItems = navItems.filter((item) => primaryNavItemIds.includes(item.id));
  const secondaryNavItems = navItems.filter((item) => !primaryNavItemIds.includes(item.id));

  useEffect(() => {
    const root = document.documentElement;
    const saved = window.localStorage.getItem("csct-dark-mode");
    const shouldDark = saved === "true";
    setDarkMode(shouldDark);
    root.classList.toggle("dark", shouldDark);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 24) {
        setIsNavVisible(true);
        lastScrollY.current = currentY;
        return;
      }

      if (currentY > lastScrollY.current + 8) {
        setIsNavVisible(false);
        setShowMoreMenu(false);
      } else if (currentY < lastScrollY.current - 8) {
        setIsNavVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    window.localStorage.setItem("csct-dark-mode", String(next));
    document.documentElement.classList.toggle("dark", next);
  };

  const activeId = useMemo(() => {
    if (location.pathname === "/") return "home";
    const found = navItems.find((item) => item.path !== "/" && location.pathname.startsWith(item.path));
    if (found) return found.id;
    return "home";
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/15 bg-transparent backdrop-blur-sm transition-transform duration-300 dark:border-slate-800/30 dark:bg-transparent ${
        isNavVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto w-full max-w-[1480px] px-3 py-3 sm:px-6">
        <div className="rounded-3xl border border-white/20 bg-white/10 px-3 py-3 backdrop-blur-xl sm:px-5 dark:border-slate-700/50 dark:bg-slate-950/30">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate("/")} className="inline-flex items-center gap-3">
              <CSCTLogo variant="icon" className="h-10 w-10 shrink-0" />
              <span className="hidden leading-tight sm:block">
                <span className="block text-sm font-bold text-slate-800 dark:text-slate-100">CSCT NeoLMS</span>
                <span className="block text-[10px] uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Campus Experience OS</span>
              </span>
            </button>

            <nav className="ml-3 hidden items-center gap-1 rounded-2xl border border-white/20 bg-white/10 p-1 lg:flex dark:border-slate-700/60 dark:bg-slate-900/35">
              {primaryNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setShowMoreMenu(false);
                    navigate(item.path);
                  }}
                  className={`rounded-xl px-3 py-2 text-xs font-semibold transition-all ${
                    activeId === item.id
                      ? "bg-gradient-to-r from-blue-700 to-cyan-600 text-white shadow-lg shadow-blue-500/30"
                      : "text-slate-700 hover:bg-slate-900/10 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/15 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="relative">
                <button
                  onClick={() => setShowMoreMenu((prev) => !prev)}
                  className={`inline-flex items-center gap-1 rounded-xl px-3 py-2 text-xs font-semibold transition-all ${
                    secondaryNavItems.some((item) => item.id === activeId)
                      ? "bg-gradient-to-r from-blue-700 to-cyan-600 text-white shadow-lg shadow-blue-500/30"
                      : "text-slate-700 hover:bg-slate-900/10 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/15 dark:hover:text-white"
                  }`}
                >
                  More <ChevronDown className="h-3.5 w-3.5" />
                </button>

                {showMoreMenu ? (
                  <div className="absolute right-0 top-11 z-50 min-w-[220px] rounded-2xl border border-white/25 bg-slate-900/80 p-2 shadow-xl backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/90">
                    {secondaryNavItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setShowMoreMenu(false);
                          navigate(item.path);
                        }}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm ${
                          activeId === item.id
                            ? "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300"
                            : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            </nav>

            <div className="ml-auto hidden items-center gap-2 sm:flex">
              <button className="inline-flex items-center gap-1 rounded-xl border border-slate-400/25 bg-slate-100/50 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-200/55 dark:border-slate-700 dark:bg-slate-900/35 dark:text-slate-200 dark:hover:bg-slate-800/60">
                <Command className="h-3.5 w-3.5" /> Quick Search
              </button>
              <button className="lms-pulse-badge inline-flex items-center gap-1 rounded-xl border border-slate-400/25 bg-slate-100/50 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-200/55 dark:border-slate-700 dark:bg-slate-900/35 dark:text-slate-200 dark:hover:bg-slate-800/60">
                <Bell className="h-3.5 w-3.5" /> Alerts
              </button>
              <button
                onClick={toggleTheme}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-400/25 bg-slate-100/50 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-200/55 dark:border-slate-700 dark:bg-slate-900/35 dark:text-slate-200 dark:hover:bg-slate-800/60"
              >
                {darkMode ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
                {darkMode ? "Light" : "Dark"}
              </button>

              {isAuthenticated ? (
                <button
                  onClick={logout}
                  className="rounded-xl bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white hover:bg-slate-700"
                >
                  Logout ({role})
                </button>
              ) : (
                <button
                  onClick={() => setShowLogin(true)}
                  className="inline-flex items-center gap-1 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 px-3.5 py-2 text-xs font-semibold text-white"
                >
                  <Sparkles className="h-3.5 w-3.5" /> Role Login
                </button>
              )}
            </div>

            <button
              onClick={() => setShowMobileMenu((value) => !value)}
              className="ml-auto inline-flex rounded-xl border border-slate-400/25 bg-slate-100/50 p-2 text-slate-700 dark:border-slate-700 dark:bg-slate-900/35 dark:text-slate-100 lg:hidden"
              aria-label="Toggle menu"
            >
              {showMobileMenu ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

          {showMobileMenu ? (
            <div className="mt-3 grid gap-1 rounded-2xl border border-white/25 bg-slate-900/80 p-2 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/90 lg:hidden">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setShowMobileMenu(false);
                    navigate(item.path);
                  }}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm ${
                    activeId === item.id ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  }`}
                >
                  {item.label}
                  <ChevronRight className="h-4 w-4" />
                </button>
              ))}
              <button onClick={toggleTheme} className="mt-1 rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200">
                {darkMode ? "Switch to Light" : "Switch to Dark"}
              </button>
              {isAuthenticated ? (
                <button onClick={logout} className="mt-1 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white">
                  Logout ({role})
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowMobileMenu(false);
                    setShowLogin(true);
                  }}
                  className="mt-1 rounded-lg bg-gradient-to-r from-[#00a884] to-[#006dff] px-3 py-2 text-sm font-semibold text-white"
                >
                  Role Login
                </button>
              )}
            </div>
          ) : null}
        </div>
      </div>

      {showLogin ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Choose Demo Role</h3>
                <p className="text-xs text-slate-500">Switch perspective instantly for client walkthrough</p>
              </div>
              <button onClick={() => setShowLogin(false)} className="rounded-lg p-1.5 hover:bg-slate-100">
                <X className="h-4 w-4 text-slate-500" />
              </button>
            </div>
            <div className="space-y-2 pt-2">
              <button
                onClick={() => {
                  loginAs("admin");
                  setShowLogin(false);
                  navigate("/courses");
                }}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left hover:border-[#006dff] hover:bg-blue-50"
              >
                <p className="text-sm font-semibold text-slate-900">Admin</p>
                <p className="text-xs text-slate-600">Full management, deletion, setup controls</p>
              </button>
              <button
                onClick={() => {
                  loginAs("lecturer");
                  setShowLogin(false);
                  navigate("/assignments");
                }}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left hover:border-[#00a884] hover:bg-emerald-50"
              >
                <p className="text-sm font-semibold text-slate-900">Lecturer</p>
                <p className="text-xs text-slate-600">Publish and manage learning activities</p>
              </button>
              <button
                onClick={() => {
                  loginAs("student");
                  setShowLogin(false);
                  navigate("/analytics");
                }}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left hover:border-[#8f5cff] hover:bg-violet-50"
              >
                <p className="text-sm font-semibold text-slate-900">Student</p>
                <p className="text-xs text-slate-600">Track progress and submit assessments</p>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
