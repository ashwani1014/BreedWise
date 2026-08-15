"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/app/Context/AuthContext";
import { useState } from "react";

export default function TopNavBar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Discover", href: "/Discover" },
    { name: "Marketplace", href: "/Home" },
    { name: "AI Match", href: "/AIMatch" },
  ];

  const handleLogout = () => {
    logout();
    router.push("/Login");
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#fdf7ff]/80 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center h-20 px-6 max-w-[1280px] mx-auto">
          {/* Logo + Nav links */}
          <div className="flex items-center gap-12">
            <Link
              href="/Home"
              className="text-3xl font-bold text-[#4f378a] tracking-tight font-[Outfit,sans-serif]"
            >
              Breedwise
            </Link>
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                      ${isActive
                        ? "text-[#4f378a] font-semibold border-b-2 border-[#4f378a]"
                        : "text-gray-600 hover:text-[#4f378a] hover:bg-violet-50"
                      }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1">
              {["favorite", "notifications"].map((icon) => (
                <button
                  key={icon}
                  className="p-1 rounded-full text-gray-500 hover:text-[#4f378a] hover:bg-violet-50 transition-all duration-200 active:scale-95"
                >
                  <span className="material-symbols-outlined">{icon}</span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              {user ? (
                <div className="hidden md:flex items-center gap-3 px-3 py-2">
                  <Link
                    href="/Profile"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 text-[#4f378a] hover:bg-violet-100 hover:shadow-sm transition-all cursor-pointer border border-[#cbc4d2]/40"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#4f378a] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                    </div>
                    <span className="text-sm font-semibold pr-1 truncate max-w-[120px]">
                      {user.name}
                    </span>
                  </Link>
                </div>
              ) : (
                <Link
                  href="/Login"
                  className="hidden md:block text-sm font-medium text-gray-600 hover:text-[#4f378a] transition-colors px-3 py-2"
                >
                  Sign In
                </Link>
              )}

              <Link
                href={user ? "/Quiz" : "/Login"}
                className="hidden md:inline-flex text-sm font-medium bg-[#4f378a] text-white px-6 py-2 rounded-lg hover:bg-[#6750a4] transition-all shadow-sm active:scale-95 items-center justify-center"
              >
                Take Match Quiz
              </Link>

              {/* Hamburger button - mobile only */}
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden text-gray-600 p-1 hover:text-[#4f378a] transition-colors"
                aria-label="Open menu"
              >
                <span className="material-symbols-outlined text-[28px]">menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        >
          {/* Drawer Panel - click won't close the drawer itself */}
          <div
            className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl flex flex-col p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <span className="text-2xl font-bold text-[#4f378a]" style={{ fontFamily: "Outfit, sans-serif" }}>
                Breedwise
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1 rounded-full text-gray-500 hover:text-[#4f378a] hover:bg-violet-50 transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* User info */}
            {user && (
              <div className="flex items-center gap-3 p-3 bg-violet-50 rounded-xl mb-6">
                <div className="w-10 h-10 rounded-full bg-[#4f378a] text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{user.name}</p>
                  <p className="text-xs text-gray-500 truncate max-w-[160px]">{user.email}</p>
                </div>
              </div>
            )}

            {/* Nav links */}
            <nav className="flex flex-col gap-1 flex-1">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
                      ${isActive
                        ? "bg-violet-100 text-[#4f378a] font-semibold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-[#4f378a]"
                      }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/Profile"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-[#4f378a] transition-all"
              >
                My Profile
              </Link>
            </nav>

            {/* Bottom actions */}
            <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col gap-3">
              <Link
                href={user ? "/Quiz" : "/Login"}
                onClick={() => setMobileOpen(false)}
                className="w-full text-center text-sm font-semibold bg-[#4f378a] text-white px-6 py-3 rounded-xl hover:bg-[#6750a4] transition-all"
              >
                Take Match Quiz
              </Link>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 text-sm font-medium text-red-500 hover:bg-red-50 px-4 py-3 rounded-xl transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">logout</span>
                  Log Out
                </button>
              ) : (
                <Link
                  href="/Login"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center text-sm font-medium text-gray-600 hover:text-[#4f378a] px-4 py-3 rounded-xl"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
