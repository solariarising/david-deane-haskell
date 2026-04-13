import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";

const PageLayout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main id="main-content" className="flex-1 pt-16 md:pt-20">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default PageLayout;
