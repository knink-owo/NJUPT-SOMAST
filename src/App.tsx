import { useEffect } from "react";
import type { ReactNode } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Footer, Header, JoinStrip, ScrollToTop } from "./components/Layout";
import HomePage from "./pages/Home";
import ActivitiesPage from "./pages/Activities";
import DepartmentsPage from "./pages/Departments";
import { site } from "./content";

const titles: Record<string, string> = {
  "/": `${site.brandCn} · ${site.fullName}`,
  "/activities": `活动与现场 · ${site.brandCn}`,
  "/departments": `组织与部门 · ${site.brandCn}`,
};

function PageTransition({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const { pathname } = useLocation();

  if (reduce) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.24, ease: [0.22, 0.61, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = titles[pathname] ?? `${site.brandCn} · ${site.fullName}`;
  }, [pathname]);

  return (
    <>
      <a className="skip" href="#main">
        跳到主要内容
      </a>
      <ScrollToTop />
      <Header />
      <main id="main">
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/departments" element={<DepartmentsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </PageTransition>
        <JoinStrip />
      </main>
      <Footer />
    </>
  );
}
