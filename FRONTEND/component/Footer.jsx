import Link from "next/link";

export default function Footer() {
  return (

    <footer className="w-full py-[80px] mt-auto bg-[#fdf7ff] border-t border-[#cbc4d2]/20">
      <div className="max-w-[1280px] mx-auto px-[24px] flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="font-['Outfit'] text-[24px] leading-[32px] font-bold text-[#1d1b20]">Breedwise AI</span>
          <p className="font-['Inter'] text-[16px] leading-[24px] text-[#494551] text-center md:text-left">© 2024 Breedwise AI. Premium Pet Matching.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="font-['Inter'] text-[14px] leading-[20px] font-medium text-[#494551] hover:text-[#4f378a] transition-colors" href="#">Privacy Policy</a>
          <a className="font-['Inter'] text-[14px] leading-[20px] font-medium text-[#494551] hover:text-[#4f378a] transition-colors" href="#">Terms of Service</a>
          <a className="font-['Inter'] text-[14px] leading-[20px] font-medium text-[#494551] hover:text-[#4f378a] transition-colors" href="#">Breeder Verification</a>
          <a className="font-['Inter'] text-[14px] leading-[20px] font-medium text-[#494551] hover:text-[#4f378a] transition-colors" href="#">Contact Support</a>
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
