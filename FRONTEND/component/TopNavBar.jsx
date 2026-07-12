"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNavBar() {
  const pathname = usePathname();

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
            <Link href="/Login" className="hidden md:block text-sm font-medium text-gray-600 hover:text-[#4f378a] transition-colors px-3 py-2">
              Sign In
            </Link>
            <button className="text-sm font-medium bg-[#4f378a] text-white px-6 py-2 rounded-lg hover:bg-[#6750a4] transition-all shadow-sm active:scale-95">
              Find a Puppy
            </button>
            <button className="md:hidden text-gray-500 p-1">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
