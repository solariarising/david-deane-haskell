import { ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RouteSeo from "@/components/RouteSeo";
import AiSummary from "./pages/AiSummary";
import About from "./pages/About";
import Books from "./pages/Books";
import Index from "./pages/Index";
import Media from "./pages/Media";
import NotFound from "./pages/NotFound";
import Vault from "./pages/Vault";

export const AppProviders = ({ children }: { children: ReactNode }) => <>{children}</>;

export const AppRoutes = () => (
  <>
    <RouteSeo />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/ai-summary" element={<AiSummary />} />
      <Route path="/about" element={<About />} />
      <Route path="/books" element={<Books />} />
      <Route path="/contact" element={<Navigate to="/about#contact" replace />} />
      <Route path="/media" element={<Media />} />
      <Route path="/vault" element={<Vault />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const App = () => (
  <AppProviders>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </AppProviders>
);

export default App;
