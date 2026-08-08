"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/app/Context/AuthContext";

export default function TopNavBar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const navLinks = [
    { name: "Discover", href: "/Discover" },
    { name: "Marketplace", href: "/Home" }, // Using /Home for Marketplace since that's the available puppies page
    { name: "AI Match", href: "/AIMatch" },
  ];

  return (
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
                  href="/Settings"
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

            <Link href={user ? "/Quiz" : "/Login"} className="text-sm font-medium bg-[#4f378a] text-white px-6 py-2 rounded-lg hover:bg-[#6750a4] transition-all shadow-sm active:scale-95 inline-flex items-center justify-center">
              Take Match Quiz
            </Link>
            <button className="md:hidden text-gray-500 p-1">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
