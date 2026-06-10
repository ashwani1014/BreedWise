"use client";

import React, { useEffect, useState } from 'react';

export default function YourMatch() {
    const [text, setText] = useState("Analyzing your lifestyle...");
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setOpacity(0.5);
            setTimeout(() => {
                setText(prev =>
                    prev === "Analyzing your lifestyle..."
                        ? "Finding your perfect match..."
                        : "Analyzing your lifestyle..."
                );
                setOpacity(1);
            }, 500);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#fdf7ff] text-[#1d1b20] min-h-screen flex flex-col justify-center items-center overflow-hidden">
            <style>{`
                .pulse-ring {
                    animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
                }
                @keyframes pulse-ring {
                    0% { transform: scale(0.8); opacity: 0.5; }
                    100% { transform: scale(2.4); opacity: 0; }
                }
                .scan-line {
                    animation: scan 3s linear infinite;
                }
                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
            `}</style>

            {/* Decorative Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#e9ddff] rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#e9ddff] rounded-full mix-blend-multiply filter blur-[120px] opacity-30"></div>
            </div>

            {/* Main Content Container */}
            <main className="relative z-10 w-full max-w-lg px-[16px] md:px-[24px] flex flex-col items-center justify-center text-center">

                {/* Animated Loader Graphic */}
                <div className="relative w-48 h-48 mb-[48px] flex items-center justify-center">
                    {/* Pulsing Rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#4f378a]/20 pulse-ring"></div>
                    <div className="absolute inset-0 rounded-full border-2 border-[#4f378a]/40 pulse-ring" style={{ animationDelay: '0.5s' }}></div>

                    {/* Central Icon Container */}
                    <div className="relative z-10 w-32 h-32 bg-[#fdf7ff] rounded-full shadow-[0px_4px_20px_rgba(31,41,51,0.08),0px_2px_4px_rgba(31,41,51,0.04)] flex items-center justify-center overflow-hidden border border-[#cbc4d2]/30">
                        {/* Paw Icon */}
                        <span className="material-symbols-outlined text-[64px] text-[#4f378a]" style={{ fontVariationSettings: "'FILL' 1" }}>pets</span>
                        {/* Scanning Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4f378a]/20 to-transparent scan-line"></div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="space-y-[12px]">
                    <h1 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-['Outfit'] text-[#4f378a]">
                        AI Match Processing
                    </h1>

                    {/* Dynamic Status Text */}
                    <div className="h-8 flex items-center justify-center">
                        <p
                            className="text-[18px] leading-[28px] font-normal font-['Inter'] text-[#494551] transition-opacity duration-500"
                            style={{ opacity }}
                        >
                            {text}
                        </p>
                    </div>
                </div>

                {/* Progress Indicator (Visual) */}
                <div className="w-full max-w-xs mt-[80px]">
                    <div className="h-2 w-full bg-[#e6e0e9] rounded-full overflow-hidden">
                        <div className="h-full bg-[#4f378a] rounded-full w-2/3 shadow-[0_0_10px_rgba(79,55,138,0.5)]"></div>
                    </div>
                    <div className="mt-[8px] flex justify-between px-[4px]">
                        <span className="text-[14px] leading-[20px] tracking-[0.02em] font-medium font-['Inter'] text-[#7a7582]">Data Parsed</span>
                        <span className="text-[14px] leading-[20px] tracking-[0.02em] font-medium font-['Inter'] text-[#7a7582]">68%</span>
                    </div>
                </div>
            </main>
        </div>
    );
}
