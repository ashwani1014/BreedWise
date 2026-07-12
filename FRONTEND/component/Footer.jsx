import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-20 mt-auto bg-[#fdf7ff] border-t border-[#cbc4d2]/20">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold text-gray-900 font-[Outfit,sans-serif]">Breedwise</div>
        <div className="flex flex-wrap justify-center gap-6">
          {["Privacy Policy", "Terms of Service", "Breeder Verification", "Contact Support"].map(
            (link) => (
              <Link
                key={link}
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-[#4f378a] transition-colors"
              >
                {link}
              </Link>
            )
          )}
        </div>
        <div className="text-base text-gray-600 opacity-80 hover:opacity-100 transition-opacity">
          © 2026 Breedwise AI. Premium Pet Matching.
        </div>
      </div>
    </footer>
  );
}
