import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";

const PageLayout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default PageLayout;
