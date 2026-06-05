import Link from 'next/link';

export default function TopNavBar() {
  return (
    <nav className="bg-white/90 backdrop-blur-md fixed top-0 w-full z-50 shadow-sm border-b border-gray-100">
      <div className="flex justify-between items-center h-20 px-6 max-w-[1280px] mx-auto">

        {/* Brand */}
        <Link
          className="text-2xl font-bold text-violet-700 hover:text-violet-800 transition-colors active:scale-95"
          href="#"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Breedwise
        </Link>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-1">
          {["Discover", "Marketplace", "Resources"].map((item) => (
            <Link
              key={item}
              className="text-gray-600 hover:text-violet-700 text-sm font-medium hover:bg-violet-50 transition-all duration-200 px-3 py-2 rounded-lg"
              href="#"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {item}
            </Link>
          ))}
          <Link
            className="text-violet-700 font-semibold border-b-2 border-violet-700 text-sm px-3 py-2"
            href="#"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            AI Match
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button className="hidden sm:flex text-gray-500 hover:text-violet-700 p-2 rounded-full hover:bg-violet-50 transition-all duration-200 cursor-pointer">
            <span className="material-symbols-outlined">favorite</span>
          </button>
          <button className="hidden sm:flex text-gray-500 hover:text-violet-700 p-2 rounded-full hover:bg-violet-50 transition-all duration-200 cursor-pointer">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="hidden md:flex text-gray-500 hover:text-violet-700 p-2 rounded-full hover:bg-violet-50 transition-all duration-200 cursor-pointer">
            <span className="material-symbols-outlined">search</span>
          </button>
          <Link
            className="hidden lg:block text-violet-700 text-sm font-medium hover:bg-violet-50 px-3 py-2 rounded-lg transition-all duration-200"
            href="/LoginPage"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Sign In
          </Link>
          <Link
            className="bg-violet-700 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-violet-800 transition-all duration-200 shadow-sm active:scale-95"
            href="#"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Find a Puppy
          </Link>
        </div>

      </div>
    </nav>
  );
}
