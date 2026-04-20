import { AnimatePresence, motion } from "motion/react";
import { Outlet, useLocation } from "react-router";
import { TopNav } from "./TopNav";
import { SiteFooter } from "./SiteFooter";
import { ChatbotWidget } from "./ChatbotWidget";

export function Root() {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";

  return (
    <div className="lms-ambient min-h-screen text-slate-900">
      <TopNav />
      <main
        className={
          isHomeRoute
            ? "w-full"
            : "mx-auto w-full max-w-[1480px] px-3 pb-8 pt-4 sm:px-6 sm:pt-6"
        }
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <SiteFooter />
      <ChatbotWidget />
    </div>
  );
}
