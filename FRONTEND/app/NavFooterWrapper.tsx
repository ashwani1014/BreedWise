"use client";

import { usePathname } from "next/navigation";
import TopNavBar from "@/component/TopNavBar";
import Footer from "@/component/Footer";

// Pages jahan Navbar/Footer nahi chahiye
const NO_NAV_ROUTES = ["/Login", "/Signup"];

// Pages jahan Footer nahi chahiye (Quiz ka apna fixed bottom nav hai)
const NO_FOOTER_ROUTES = ["/Quiz", "/YourMatch"];

export default function NavFooterWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const showNav = !NO_NAV_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  const showFooter = showNav && !NO_FOOTER_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  const SIDEBAR_ROUTES = ["/Profile", "/AIMatch", "/Favourite"];
  const isSidebarPage = SIDEBAR_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  return (
    <>
      {showNav && <TopNavBar />}
      {children}
      {showFooter && (
        <div className={isSidebarPage ? "md:ml-80" : ""}>
          <Footer />
        </div>
      )}
    </>
  );
}
