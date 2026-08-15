import Link from "next/link";

export default function Footer() {
  return (

    <footer className="w-full py-[80px] mt-auto bg-[#fdf7ff] border-t border-[#cbc4d2]/20">
      <div className="max-w-[1280px] mx-auto px-[24px] flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="font-['Outfit'] text-[24px] leading-[32px] font-bold text-[#1d1b20]">Breedwise AI</span>
          <p className="font-['Inter'] text-[16px] leading-[24px] text-[#494551] text-center md:text-left">© 2026 Breedwise AI. Premium Pet Matching.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Link href="/PrivacyPolicy" className="font-['Inter'] text-[14px] leading-[20px] font-medium text-[#494551] hover:text-[#4f378a] transition-colors">Privacy Policy</Link>
          <Link href="/TermsOfService" className="font-['Inter'] text-[14px] leading-[20px] font-medium text-[#494551] hover:text-[#4f378a] transition-colors">Terms of Service</Link>
          <Link href="#" className="font-['Inter'] text-[14px] leading-[20px] font-medium text-[#494551] hover:text-[#4f378a] transition-colors">Breeder Verification</Link>
          <Link href="/Support" className="font-['Inter'] text-[14px] leading-[20px] font-medium text-[#494551] hover:text-[#4f378a] transition-colors">Contact Support</Link>
        </div>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-[#f2ecf4] flex items-center justify-center text-[#494551] hover:text-[#4f378a] transition-colors cursor-pointer">
            <span className="material-symbols-outlined">public</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#f2ecf4] flex items-center justify-center text-[#494551] hover:text-[#4f378a] transition-colors cursor-pointer">
            <span className="material-symbols-outlined">alternate_email</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
