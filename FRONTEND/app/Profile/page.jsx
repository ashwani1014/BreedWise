import React from 'react';

export default function ProfilePage() {
    return (
        <>
            <style>{`
        .level-1-shadow {
            box-shadow: 0px 4px 20px rgba(31, 41, 51, 0.04), 0px 2px 4px rgba(31, 41, 51, 0.02);
        }
        .level-2-shadow {
            box-shadow: 0px 8px 30px rgba(31, 41, 51, 0.08), 0px 4px 8px rgba(31, 41, 51, 0.04);
        }
      `}</style>
            <div className="bg-slate-50 text-gray-900 text-base antialiased flex" style={{ fontFamily: 'Inter, sans-serif' }}>
                {/* SideNavBar */}
                <nav className="fixed left-0 top-0 h-screen w-72 flex flex-col justify-between p-6 bg-[#f8f2fa] dark:bg-[#ece6ee] border-r border-[#cbc4d2]/30 shadow-sm z-50">
                    {/* Header */}
                    <div className="flex flex-col mb-20">
                        <div className="flex items-center gap-3 mb-12">
                            <img
                                alt="Premium Member Avatar"
                                className="w-12 h-12 rounded-full object-cover border-2 border-white"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA5xNha6pTS6-uKbr7cr1MYmrNp4UFuA-VGL8tD-39Lnnb-SB7nSCkZEbHOFra9NTaj0YANUTWEYcTAHXlZmiTvVYffCXckfrOtktPqiR-jYuKXeGIgmVrRESUsz9s7jLpvl0Gnjgnv3jOOrmlql9NkmojO0_mEg_AfekWfrlnVZKE9sHkhOBIHF_S2jMVWgoIaw9nIZgjcutiHJFWc9eM_1ecVAmejFWZkZ873EbJ3siAPjfU5PT2do0Jh1XuDMDaeDSKREc1EvBs"
                            />
                            <div>
                                <h1 className="text-2xl font-bold text-[#4F378A] dark:text-[#cfbcff]" style={{ fontFamily: 'Outfit, sans-serif' }}>Breedwise Pro</h1>
                                <p className="text-sm font-medium text-gray-600">Verified Adopter</p>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <ul className="flex flex-col gap-1">
                            <li>
                                <a className="flex items-center gap-3 bg-[#e0d2ff] dark:bg-[#4F378A] text-[#22005d] dark:text-white rounded-xl px-4 py-3 text-sm font-semibold active:scale-98 transition-all hover:translate-x-1 duration-200" href="#">
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
                                    Overview
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center gap-3 text-gray-600 dark:text-[#7a7582] hover:bg-[#e6e0e9] dark:hover:bg-[#322f35] rounded-xl px-4 py-3 text-sm font-medium transition-all hover:translate-x-1 duration-200 active:scale-98" href="#">
                                    <span className="material-symbols-outlined">pets</span>
                                    My Matches
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center gap-3 text-gray-600 dark:text-[#7a7582] hover:bg-[#e6e0e9] dark:hover:bg-[#322f35] rounded-xl px-4 py-3 text-sm font-medium transition-all hover:translate-x-1 duration-200 active:scale-98" href="#">
                                    <span className="material-symbols-outlined">bookmark</span>
                                    Saved Breeds
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center gap-3 text-gray-600 dark:text-[#7a7582] hover:bg-[#e6e0e9] dark:hover:bg-[#322f35] rounded-xl px-4 py-3 text-sm font-medium transition-all hover:translate-x-1 duration-200 active:scale-98" href="#">
                                    <span className="material-symbols-outlined">chat_bubble</span>
                                    Inquiries
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center gap-3 text-gray-600 dark:text-[#7a7582] hover:bg-[#e6e0e9] dark:hover:bg-[#322f35] rounded-xl px-4 py-3 text-sm font-medium transition-all hover:translate-x-1 duration-200 active:scale-98" href="#">
                                    <span className="material-symbols-outlined">settings</span>
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Footer section */}
                    <div className="flex flex-col gap-3 mt-auto">
                        <button className="w-full bg-[#4F378A] text-white text-sm font-medium py-3 px-6 rounded-lg mb-4 hover:bg-violet-800 transition-colors cursor-pointer">
                            Start New Quiz
                        </button>
                        <ul className="flex flex-col gap-1 border-t border-[#cbc4d2]/30 pt-4">
                            <li>
                                <a className="flex items-center gap-3 text-gray-600 dark:text-[#7a7582] hover:bg-[#e6e0e9] dark:hover:bg-[#322f35] rounded-xl px-4 py-3 text-sm font-medium transition-all hover:translate-x-1 duration-200 active:scale-98" href="#">
                                    <span className="material-symbols-outlined">help</span>
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center gap-3 text-gray-600 dark:text-[#7a7582] hover:bg-[#e6e0e9] dark:hover:bg-[#322f35] rounded-xl px-4 py-3 text-sm font-medium transition-all hover:translate-x-1 duration-200 active:scale-98" href="#">
                                    <span className="material-symbols-outlined">logout</span>
                                    Log Out
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* Main Content Canvas */}
                <main className="ml-72 flex-1 min-h-screen p-12 max-w-screen-xl mx-auto w-full">
                    {/* Header Section */}
                    <header className="mb-12">
                        <h2 className="text-5xl font-semibold tracking-tight text-gray-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Welcome back, Alex.</h2>
                        <p className="text-lg text-gray-600">Here is a curated overview of your recent AI matches and saved companions.</p>
                    </header>

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
                        {/* Main Hero Card (Recommended) */}
                        <div className="md:col-span-8 bg-white rounded-xl level-1-shadow overflow-hidden flex flex-col md:flex-row hover:-translate-y-1 transition-transform duration-300">
                            <div className="md:w-1/2 h-64 md:h-auto relative">
                                <img
                                    alt="Golden Retriever Profile"
                                    className="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNbXMZ8KIJC4cOhWGUFv0F6fC2ud8w1f-gBawLcMioEfFD4EbdBxokP-_hRKAck4Z2QRAY4U6PRQgWa_JyHUHrb07tni-3rGnwXjsczp6XJ-5n6hbzY5ksSpWmZeoSiLBHOdxqJERXFgeAPibY4ldhSG2k9F9rDHFlPKRr3uRObTa4WcgAc_wtoX6QP6ZxyhktL8DoOqy_-roCHLQtpTcRA6xeX_m3Irqmzc9BSoQFpHEX2FURq21h6eAf836JmU5LSlyxCWSdeiBT"
                                />
                                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#4F378A] to-[#c9a74d] text-white text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                    <span className="material-symbols-outlined text-[16px]">stars</span> Match 98%
                                </div>
                            </div>
                            <div className="p-6 md:w-1/2 flex flex-col justify-center">
                                <div className="mb-4">
                                    <p className="text-sm text-[#4F378A] font-semibold tracking-wider uppercase mb-1">Top Recommendation</p>
                                    <h3 className="text-3xl font-semibold tracking-tight text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Golden Retriever</h3>
                                </div>
                                <p className="text-base text-gray-600 mb-6">Based on your recent lifestyle quiz, the Golden Retriever's affectionate nature and moderate energy level perfectly align with your suburban living arrangement and desire for a family-friendly companion.</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="bg-[#f8f2fa] text-gray-900 px-3 py-1 rounded-full text-sm font-medium">Family Friendly</span>
                                    <span className="bg-[#f8f2fa] text-gray-900 px-3 py-1 rounded-full text-sm font-medium">Highly Trainable</span>
                                    <span className="bg-[#f8f2fa] text-gray-900 px-3 py-1 rounded-full text-sm font-medium">Moderate Energy</span>
                                </div>
                                <button className="bg-[#4F378A] text-white text-sm font-medium py-3 px-6 rounded-lg w-fit hover:bg-violet-800 transition-colors flex items-center gap-2 cursor-pointer">
                                    View Full Profile <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                </button>
                            </div>
                        </div>

                        {/* Quick Stats / Profile Summary */}
                        <div className="md:col-span-4 flex flex-col gap-6">
                            <div className="bg-white rounded-xl level-1-shadow p-6 flex-1">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-medium text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Quiz Status</h3>
                                    <span className="material-symbols-outlined text-[#c9a74d] text-[28px]">verified</span>
                                </div>
                                <p className="text-base text-gray-600 mb-4">Your lifestyle profile is currently up to date. You have answered 45/45 structural matching questions.</p>
                                <div className="w-full bg-[#e6e0e9] rounded-full h-2 mb-4">
                                    <div className="bg-[#4F378A] h-2 rounded-full" style={{ width: "100%" }}></div>
                                </div>
                                <a className="text-sm font-medium text-[#4F378A] underline hover:text-violet-800 cursor-pointer" href="#">Update Preferences</a>
                            </div>
                            <div className="bg-white rounded-xl level-1-shadow p-6 flex-1">
                                <h3 className="text-2xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Recent Activity</h3>
                                <ul className="flex flex-col gap-3">
                                    <li className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[#e1d4fd] text-[#645a7d] flex items-center justify-center">
                                            <span className="material-symbols-outlined text-[20px]">favorite</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">Favorited 'Luna'</p>
                                            <p className="text-xs text-gray-500">2 hours ago</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[#ece6ee] text-gray-600 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-[20px]">search</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">Searched 'French Bulldog'</p>
                                            <p className="text-xs text-gray-500">Yesterday</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Saved & Favorites Section */}
                    <div className="mb-20">
                        <div className="flex justify-between items-end mb-6">
                            <h2 className="text-3xl font-semibold tracking-tight text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Saved Companions</h2>
                            <a className="text-sm font-medium text-[#4F378A] hover:underline cursor-pointer" href="#">View All</a>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Pet Card 1 */}
                            <div className="bg-white rounded-xl level-1-shadow overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-1 transition-all duration-300">
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        alt="French Bulldog"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCipifsm4T3jDHxHVFiDeEN6HOFv_9AAN5wNEga_00c35XIyZKySX0CsQcf4L3BewRsbI-lAfopznnPdfBdz1WKoqDMY_HksO_d7I0JQs9xUl2--6_peubQ64v7psW9Lql2NAfS5dtoXDHvCyHm7kykMfWsttkx8nEfc7saJPnF9TBK89QzpRGIG3uSEBqJU5TnHpwsIfbQTLO9sWrGl2ZxZ9DrdBi1Q6z31cNUS7NAuxLaNIsSgM0Pilb0WnhBGRVTG4Yo7EUElVK7"
                                    />
                                    <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-[#4F378A] shadow-sm hover:bg-white transition-colors cursor-pointer">
                                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                    </button>
                                </div>
                                <div className="p-4 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-2xl font-medium text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>French Bulldog</h3>
                                        <span className="bg-[#c9a74d]/20 text-[#503d00] px-2 py-0.5 rounded text-[12px] font-medium">92% Match</span>
                                    </div>
                                    <p className="text-base text-gray-600 mb-4">Adaptable, playful, and smart. Great for apartment living.</p>
                                    <div className="mt-auto flex items-center gap-2 text-gray-600 text-sm font-medium">
                                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                                        <span>3 verified breeders near you</span>
                                    </div>
                                </div>
                            </div>

                            {/* Pet Card 2 */}
                            <div className="bg-white rounded-xl level-1-shadow overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-1 transition-all duration-300">
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        alt="Australian Shepherd"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsULZGkfLwM2YrG3vieuxK6RgB7YlAkDaoMC63o_4e81cZjB7IQ6q3kdSzjWU69e7W200u1yiQasjHEMmj6xyEUiaxmbxIksStbBw4PjFiuaIx7iHKlJj5POZbnc2PRqnsqJFRI5erLawWQL5BPleYJD54S82qvWj3EEW_zBJj8M2RdS3pjcX50Y7AP1XNAIBB70pAZTuPFjH3g99oXeKOypzEocl8u66DwoRvZU1zkVezhzvSi8wNILS1yhvxR21igO6-M9fcDDa4"
                                    />
                                    <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-[#4F378A] shadow-sm hover:bg-white transition-colors cursor-pointer">
                                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                    </button>
                                </div>
                                <div className="p-4 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-2xl font-medium text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Australian Shepherd</h3>
                                        <span className="bg-[#c9a74d]/20 text-[#503d00] px-2 py-0.5 rounded text-[12px] font-medium">88% Match</span>
                                    </div>
                                    <p className="text-base text-gray-600 mb-4">Intelligent, work-oriented, and exuberant. Needs active lifestyle.</p>
                                    <div className="mt-auto flex items-center gap-2 text-gray-600 text-sm font-medium">
                                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                                        <span>1 verified breeder near you</span>
                                    </div>
                                </div>
                            </div>

                            {/* Pet Card 3 (Specific Dog Profile) */}
                            <div className="bg-white rounded-xl level-1-shadow overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-1 transition-all duration-300">
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        alt="Specific Dog Profile - Bella"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTsuEHxw6r8FEAN3gWNVg8D0uVDFZLlq7DVQWA3pBo0Lvo1ncs9ORlLaZbTxy1au0pA50Lr4UkHeoNut1D9d9W9oUdbQxdE6XtBPPF3pTIykL4OXFqHnNkD1ygq38Q5v99c4A4twXAwSLUbSKJ3fljh10Jakudi2IU1IYIg7VaG5bwbmRiOXgeHsVJlVl9pZVwQFIEVWcPzzjREB7Ju6MXmJd0f18P6i4YU9iDKAIrRyHyMbFb_ClDObYhiwxYXLP9TdTqvLfEJoKv"
                                    />
                                    <div className="absolute top-3 left-3 bg-[#e6f4ea] text-[#137333] text-[12px] font-medium px-2 py-1 rounded flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[14px]">check_circle</span> Available
                                    </div>
                                    <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-[#4F378A] shadow-sm hover:bg-white transition-colors cursor-pointer">
                                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                    </button>
                                </div>
                                <div className="p-4 flex flex-col flex-1">
                                    <div className="flex justify-between items-end mb-1">
                                        <h3 className="text-2xl font-medium text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Bella</h3>
                                        <span className="text-sm font-medium text-gray-600">2 yrs • Female</span>
                                    </div>
                                    <p className="text-base text-[#4F378A] mb-3">Labrador Mix</p>
                                    <p className="text-base text-gray-600 mb-4 line-clamp-2">Bella is a gentle soul looking for a quiet home. She loves long walks and afternoon naps in the sun.</p>
                                    <div className="mt-auto pt-3 border-t border-[#cbc4d2]/20 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-[#e6e0e9] flex items-center justify-center">
                                                <span className="material-symbols-outlined text-[14px] text-gray-600">storefront</span>
                                            </div>
                                            <span className="text-[12px] font-medium text-gray-600">Oakridge Rescue</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
