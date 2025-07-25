
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load all pages except the home page
const ResearchHome = lazy(() => import("./pages/ResearchHome"));
const Publications = lazy(() => import("./pages/Publications"));
const Research = lazy(() => import("./pages/Research"));
const AcademicEngagement = lazy(() => import("./pages/AcademicEngagement"));
const Teaching = lazy(() => import("./pages/Teaching"));
const CV = lazy(() => import("./pages/CV"));
const NotFound = lazy(() => import("./pages/NotFound"));

const LoadingFallback = () => (
  <div className="min-h-screen bg-white p-6">
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-start pb-8 mt-6 mb-6">
        <Skeleton className="w-48 h-64 rounded-lg" />
        <div className="flex-1 space-y-4">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-6 w-48" />
          <div className="flex gap-2">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-6 w-28" />
          </div>
          <Skeleton className="h-24 w-full" />
        </div>
      </div>
    </div>
  </div>
);

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <HashRouter>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<ResearchHome />} />
          <Route path="/research-home" element={<ResearchHome />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/research" element={<Research />} />
          <Route path="/academic-engagement" element={<AcademicEngagement />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/cv" element={<CV />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </HashRouter>
  </TooltipProvider>
);

export default App;
