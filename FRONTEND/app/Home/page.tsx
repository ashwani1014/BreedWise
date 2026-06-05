import Link from 'next/link';

export default function Home() {
    return (
        <div className="bg-background text-on-background font-body-md text-body-md antialiased min-h-screen flex flex-col">
            {/* TopNavBar */}
            <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-container-highest/80 backdrop-blur-md shadow-sm dark:shadow-none">
                <div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
                    <div className="flex items-center gap-lg">
                        <Link className="font-headline-lg text-headline-lg font-bold text-primary dark:text-inverse-primary tracking-tight" href="#">Breedwise</Link>
                        <div className="hidden md:flex items-center gap-md">
                            <Link className="text-on-surface-variant dark:text-outline hover:text-primary dark:hover:text-inverse-primary transition-colors hover:bg-primary-container/10 dark:hover:bg-primary-fixed/10 transition-all duration-300 rounded-lg px-sm py-base font-label-sm text-label-sm" href="#">Discover</Link>
                            <Link className="text-primary dark:text-inverse-primary font-semibold border-b-2 border-primary dark:border-inverse-primary pb-1 hover:bg-primary-container/10 dark:hover:bg-primary-fixed/10 transition-all duration-300 rounded-lg px-sm py-base font-label-sm text-label-sm" href="#">Marketplace</Link>
                            <Link className="text-on-surface-variant dark:text-outline hover:text-primary dark:hover:text-inverse-primary transition-colors hover:bg-primary-container/10 dark:hover:bg-primary-fixed/10 transition-all duration-300 rounded-lg px-sm py-base font-label-sm text-label-sm" href="#">AI Match</Link>
                            <Link className="text-on-surface-variant dark:text-outline hover:text-primary dark:hover:text-inverse-primary transition-colors hover:bg-primary-container/10 dark:hover:bg-primary-fixed/10 transition-all duration-300 rounded-lg px-sm py-base font-label-sm text-label-sm" href="#">Resources</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-md">
                        <div className="hidden md:flex items-center gap-sm">
                            <button className="text-on-surface-variant hover:text-primary p-xs rounded-full hover:bg-primary-container/10 transition-all duration-300 active:scale-95 transition-transform">
                                <span className="material-symbols-outlined">favorite</span>
                            </button>
                            <button className="text-on-surface-variant hover:text-primary p-xs rounded-full hover:bg-primary-container/10 transition-all duration-300 active:scale-95 transition-transform">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                        </div>
                        <div className="flex items-center gap-sm">
                            <button className="hidden md:block font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors px-sm py-base">Sign In</button>
                            <button className="font-label-sm text-label-sm bg-primary text-on-primary px-md py-sm rounded-lg hover:bg-primary-container hover:text-on-primary-container transition-all shadow-sm active:scale-95">Find a Puppy</button>
                            <button className="md:hidden text-on-surface-variant p-xs">
                                <span className="material-symbols-outlined">menu</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content Canvas */}
            <main className="flex-1 mt-20 pt-lg pb-xl px-gutter max-w-container-max mx-auto w-full">
                {/* Header Section */}
                <header className="mb-lg flex flex-col md:flex-row justify-between items-start md:items-end gap-md">
                    <div>
                        <h1 className="font-display-lg text-display-lg text-primary mb-xs">Available Puppies</h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Connect with verified breeders and adoption centers to find your perfect match. Our AI-assisted vetting ensures highest quality companions.</p>
                    </div>
                    <div className="flex gap-sm w-full md:w-auto">
                        <div className="relative flex-1 md:w-64">
                            <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline">search</span>
                            <input className="w-full pl-xl pr-sm py-sm bg-surface-container-low border border-outline-variant rounded-lg focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md text-on-surface outline-none transition-all" placeholder="Search breeds..." type="text" />
                        </div>
                        <button className="bg-surface-container-high text-on-surface px-md py-sm rounded-lg border border-outline-variant hover:bg-surface-variant transition-colors flex items-center gap-xs font-label-sm text-label-sm">
                            <span className="material-symbols-outlined">tune</span>
                            Filters
                        </button>
                    </div>
                </header>

                {/* Bento Grid Layout for Featured */}
                <section className="grid grid-cols-1 md:grid-cols-12 gap-md mb-xl">
                    {/* Featured Breeder */}
                    <div className="md:col-span-8 bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(31,41,51,0.04),0px_2px_4px_rgba(31,41,51,0.02)] overflow-hidden flex flex-col md:flex-row border border-outline-variant/20 hover:-translate-y-[2px] hover:shadow-[0px_8px_30px_rgba(31,41,51,0.08)] transition-all duration-300">
                        <div className="md:w-1/2 h-64 md:h-auto bg-surface-container-low relative">
                            <img alt="Golden Retriever puppies playing" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDczI_uxd-RUNeyV1XxjR9-T6TsyO1zdfH0jhiAmJQkHrORSH5AcJK-_NZIGg2ck5-i8bJlKJYReUhp5QQ_s9FZgILvHF3cbLMhRM9nY2EmURdNNRBJMk6Wz2lroeGg1Il__1Ck0YPY-KhU2tWCRrAKDyh-Eh0bmMJBTF8NJm24K_XSluAj0KpW2_SRLPpx5eZYcPevEcxCDzjPExu_qBJ7ypRtH9kvwz6qngs9e_6loMuF-4RPP_aZKnYH2bZkNP9QHl6t4fxfAx5_" />
                            <div className="absolute top-sm left-sm bg-tertiary-container text-on-tertiary-container px-sm py-xs rounded-full font-label-sm text-label-sm flex items-center gap-xs backdrop-blur-md bg-opacity-90">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '16px' }}>verified</span>
                                Verified Breeder
                            </div>
                        </div>
                        <div className="p-md md:w-1/2 flex flex-col justify-center">
                            <div className="flex items-center gap-sm mb-sm">
                                <span className="bg-primary-container text-on-primary-container px-sm py-xs rounded-full font-label-sm text-label-sm font-semibold">Premium</span>
                                <div className="flex items-center text-tertiary">
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '18px' }}>star</span>
                                    <span className="font-label-sm text-label-sm ml-xs text-on-surface">4.9 (124 reviews)</span>
                                </div>
                            </div>
                            <h2 className="font-headline-md text-headline-md text-primary mb-xs">Oakwood Retrievers</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-md">Specializing in health-tested, family-raised Golden Retrievers with exceptional temperaments.</p>
                            <div className="mt-auto flex items-center justify-between">
                                <div className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm">
                                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>location_on</span>
                                    Portland, OR
                                </div>
                                <button className="text-primary font-label-sm text-label-sm font-semibold hover:text-primary-container transition-colors flex items-center gap-xs">
                                    View Profile <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Spotlight Adoption Center */}
                    <div className="md:col-span-4 bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(31,41,51,0.04),0px_2px_4px_rgba(31,41,51,0.02)] overflow-hidden border border-outline-variant/20 relative flex flex-col justify-end p-md hover:-translate-y-[2px] hover:shadow-[0px_8px_30px_rgba(31,41,51,0.08)] transition-all duration-300 min-h-[300px]">
                        <img alt="Dogs at adoption center" className="absolute inset-0 w-full h-full object-cover z-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBempgKEbIiJAsE1EeD59mD4eN9mF8_JjRe4-izKNQ77hiT_7UGKJ6PSl-U_ho9OJ8c5mD9gkbimjpgCGZT6UeJ6HHJfphBXBi-AKjx-Ol3xNVhq2hyq9AJxeK3k32t8TDPzi8mcZRxF2Sh4Xcrw_6EWjJnNw9EyuM_tREFE3bVnUa9aQmbmm7Im_YP8iOBxiBhEN7r6TCGV-nnRzQymIYbPO58RiipsklgHLuXXsJKpqCg8EWI2AiYyXOuZfvRmvAIStjiyHks6GP1" />
                        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/40 to-transparent z-10"></div>
                        <div className="relative z-20">
                            <div className="inline-flex items-center gap-xs bg-surface-container-lowest/20 backdrop-blur-md text-on-primary px-sm py-xs rounded-full font-label-sm text-label-sm mb-sm border border-outline-variant/30">
                                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>volunteer_activism</span>
                                Adoption Center
                            </div>
                            <h3 className="font-headline-md text-headline-md text-surface-container-lowest mb-xs">Safe Haven Rescue</h3>
                            <p className="font-body-md text-body-md text-surface-variant mb-md">Finding forever homes for mixed breeds.</p>
                            <button className="w-full bg-surface-container-lowest text-primary py-sm rounded-lg font-label-sm text-label-sm font-semibold hover:bg-surface-variant transition-colors">Support &amp; Adopt</button>
                        </div>
                    </div>
                </section>

                {/* Puppy Listings Grid */}
                <div className="flex items-center justify-between mb-md">
                    <h2 className="font-headline-md text-headline-md text-on-surface">New Matches</h2>
                    <div className="flex items-center gap-sm">
                        <span className="font-body-md text-body-md text-on-surface-variant">Sort by:</span>
                        <select className="bg-transparent border-none font-label-sm text-label-sm text-primary font-semibold focus:ring-0 cursor-pointer p-0">
                            <option>AI Match Score</option>
                            <option>Distance</option>
                            <option>Price: Low to High</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
                    {/* Listing Card 1 */}
                    <div className="bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(31,41,51,0.04),0px_2px_4px_rgba(31,41,51,0.02)] overflow-hidden border border-outline-variant/20 hover:-translate-y-[2px] hover:shadow-[0px_8px_30px_rgba(31,41,51,0.08)] transition-all duration-300 flex flex-col group">
                        <div className="h-48 relative overflow-hidden">
                            <img alt="French Bulldog Puppy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq-cNeN7EoxbudV-lAAg2CVtQgqdh6D2jLAxJjB7gWhFn7LmgMixe0KzhRghgChr08WbPENmrzHq59S1Q_Q8MtBwqfBD26ov_OyVwIWY7UKBTE_4J2BV3RjWkB7UD3fHdifCJLoNgNQ_zkuH9C4KG1odhwoaZ70f4P1BA5Ny8swp3tbgFpnr_UMmieQFdQYIj-31kk-uNDTYs5OxGL2VkNyLdgUX35VOKf3JwhBOzAqn0xpOoV0V-gzwxxI4UT-ElPFeDVjNknlm_r" />
                            <button className="absolute top-sm right-sm p-xs bg-surface-container-lowest/80 backdrop-blur-sm rounded-full text-outline hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">favorite</span>
                            </button>
                            <div className="absolute bottom-sm left-sm bg-gradient-to-r from-primary to-primary-container text-on-primary px-sm py-xs rounded-lg font-label-sm text-label-sm font-semibold flex items-center gap-xs shadow-sm">
                                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>auto_awesome</span>
                                98% Match
                            </div>
                        </div>
                        <div className="p-md flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-xs">
                                <h3 className="font-headline-md text-headline-md text-on-surface">Luna</h3>
                                <span className="font-label-sm text-label-sm text-primary font-semibold bg-primary-container/10 px-sm py-xs rounded-lg">$2,500</span>
                            </div>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-sm">French Bulldog • Female • 8 weeks</p>
                            <div className="flex items-center gap-xs mb-md border-t border-outline-variant/20 pt-sm mt-auto">
                                <div className="w-6 h-6 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-label-sm text-label-sm font-bold text-[10px]">OB</div>
                                <div className="flex-1">
                                    <p className="font-label-sm text-label-sm text-on-surface truncate">Ocean Breeze Frenchies</p>
                                    <div className="flex items-center text-tertiary">
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '12px' }}>star</span>
                                        <span className="font-label-sm text-label-sm text-[12px] ml-[2px] text-on-surface-variant">4.8</span>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full bg-primary text-on-primary py-sm rounded-lg font-label-sm text-label-sm hover:bg-primary-container hover:text-on-primary-container transition-all">Contact Seller</button>
                        </div>
                    </div>

                    {/* Listing Card 2 */}
                    <div className="bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(31,41,51,0.04),0px_2px_4px_rgba(31,41,51,0.02)] overflow-hidden border border-outline-variant/20 hover:-translate-y-[2px] hover:shadow-[0px_8px_30px_rgba(31,41,51,0.08)] transition-all duration-300 flex flex-col group">
                        <div className="h-48 relative overflow-hidden">
                            <img alt="Labradoodle Puppy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPSOWGaqhvffQ7uX4xuHADq1PB0ZMlFuRL_Q1fhevw73k1bpY9xoB-c3tr7e-qKzrRk-Lc5_L8PXiFNXXbQJuIdCn93RSv1HqoCF9VHbNVwc374gwnXHYvi6U7vSfKGl-PT3DqqWr71qh9WKTRaDWYpl3Eq7PR3jpVFzbNSE-oDvqkveuvSFb0AovvpNWsYh68tAokNo1RpGo5UlMe_pamDLJDs8qy_0TTrQSfjzes5FSJFWkD5U0JcXlNDKebQ0r_KHXLY4zUey3v" />
                            <button className="absolute top-sm right-sm p-xs bg-surface-container-lowest/80 backdrop-blur-sm rounded-full text-outline hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">favorite</span>
                            </button>
                            <div className="absolute bottom-sm left-sm bg-gradient-to-r from-primary to-primary-container text-on-primary px-sm py-xs rounded-lg font-label-sm text-label-sm font-semibold flex items-center gap-xs shadow-sm">
                                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>auto_awesome</span>
                                92% Match
                            </div>
                        </div>
                        <div className="p-md flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-xs">
                                <h3 className="font-headline-md text-headline-md text-on-surface">Milo</h3>
                                <span className="font-label-sm text-label-sm text-primary font-semibold bg-primary-container/10 px-sm py-xs rounded-lg">$1,800</span>
                            </div>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-sm">Labradoodle • Male • 10 weeks</p>
                            <div className="flex items-center gap-xs mb-md border-t border-outline-variant/20 pt-sm mt-auto">
                                <div className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-sm text-label-sm font-bold text-[10px]">SC</div>
                                <div className="flex-1">
                                    <p className="font-label-sm text-label-sm text-on-surface truncate">Sunset Creek Doodles</p>
                                    <div className="flex items-center text-tertiary">
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '12px' }}>star</span>
                                        <span className="font-label-sm text-label-sm text-[12px] ml-[2px] text-on-surface-variant">5.0</span>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full bg-primary text-on-primary py-sm rounded-lg font-label-sm text-label-sm hover:bg-primary-container hover:text-on-primary-container transition-all">Contact Seller</button>
                        </div>
                    </div>

                    {/* Listing Card 3 */}
                    <div className="bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(31,41,51,0.04),0px_2px_4px_rgba(31,41,51,0.02)] overflow-hidden border border-outline-variant/20 hover:-translate-y-[2px] hover:shadow-[0px_8px_30px_rgba(31,41,51,0.08)] transition-all duration-300 flex flex-col group">
                        <div className="h-48 relative overflow-hidden">
                            <img alt="Corgi Puppy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdcfb84zyZv9hYx8xOFASxW6ZSrkKMFZyyxr6IS6_KH1qs8PBV-SVWtDXSmu01VaQPq3A2Nt18zIdlO0XUHVPzpmQbeDd9SbZvRJoekFsZoaovEgXLSJQYPk0vMutyBQrxrceawm8WcxPRMFf5gnql5e4XFId-wuNBIZJ37qpTrkTFr1izi489aW4bGzeKj609rJmTLNVWgOsRv2IaxEyAnbdQOeh8Iz_ei39QFrSFuiuUuCsLm599K6XCm3CeGXGWJRxs6nFTafii" />
                            <button className="absolute top-sm right-sm p-xs bg-surface-container-lowest/80 backdrop-blur-sm rounded-full text-outline hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">favorite</span>
                            </button>
                            <div className="absolute bottom-sm left-sm bg-gradient-to-r from-primary to-primary-container text-on-primary px-sm py-xs rounded-lg font-label-sm text-label-sm font-semibold flex items-center gap-xs shadow-sm">
                                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>auto_awesome</span>
                                88% Match
                            </div>
                        </div>
                        <div className="p-md flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-xs">
                                <h3 className="font-headline-md text-headline-md text-on-surface">Winston</h3>
                                <span className="font-label-sm text-label-sm text-primary font-semibold bg-primary-container/10 px-sm py-xs rounded-lg">$2,200</span>
                            </div>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-sm">Pembroke Corgi • Male • 9 weeks</p>
                            <div className="flex items-center gap-xs mb-md border-t border-outline-variant/20 pt-sm mt-auto">
                                <div className="w-6 h-6 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-label-sm text-label-sm font-bold text-[10px]">RP</div>
                                <div className="flex-1">
                                    <p className="font-label-sm text-label-sm text-on-surface truncate">Royal Paws Kennel</p>
                                    <div className="flex items-center text-tertiary">
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '12px' }}>star</span>
                                        <span className="font-label-sm text-label-sm text-[12px] ml-[2px] text-on-surface-variant">4.7</span>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full bg-primary text-on-primary py-sm rounded-lg font-label-sm text-label-sm hover:bg-primary-container hover:text-on-primary-container transition-all">Contact Seller</button>
                        </div>
                    </div>

                    {/* Listing Card 4 */}
                    <div className="bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(31,41,51,0.04),0px_2px_4px_rgba(31,41,51,0.02)] overflow-hidden border border-outline-variant/20 hover:-translate-y-[2px] hover:shadow-[0px_8px_30px_rgba(31,41,51,0.08)] transition-all duration-300 flex flex-col group">
                        <div className="h-48 relative overflow-hidden">
                            <img alt="Husky Puppy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu90OKhQZ_IhdLqYqA0dsmZEmNwMiJCg9jvxnqOrQnS2_FxPrK3-pvSx-P3OGr4VnEoeqtk0CK_zsmKD-GxvRoP9JL4AAP9gxRZk8MZbX_JBvVsLDWMNCEY2-Wc6Dm-aHa8Sfb2w2VYCfHaifQYyzLhWI3ZOKVqpjGtPP_ewHLDP3N-smaBIyZbDsJUtnJKBDSe3Gda6YTmOq88_8chTq6ryT7qJ8GyDiHtM1rzTKk86-_pCFiwIbv0ysr_MsQvriAYzuySy9X8M27" />
                            <button className="absolute top-sm right-sm p-xs bg-surface-container-lowest/80 backdrop-blur-sm rounded-full text-outline hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">favorite</span>
                            </button>
                            <div className="absolute bottom-sm left-sm bg-gradient-to-r from-primary to-primary-container text-on-primary px-sm py-xs rounded-lg font-label-sm text-label-sm font-semibold flex items-center gap-xs shadow-sm">
                                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>auto_awesome</span>
                                85% Match
                            </div>
                        </div>
                        <div className="p-md flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-xs">
                                <h3 className="font-headline-md text-headline-md text-on-surface">Koda</h3>
                                <span className="font-label-sm text-label-sm text-primary font-semibold bg-primary-container/10 px-sm py-xs rounded-lg">$1,500</span>
                            </div>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-sm">Siberian Husky • Male • 12 weeks</p>
                            <div className="flex items-center gap-xs mb-md border-t border-outline-variant/20 pt-sm mt-auto">
                                <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold text-[10px]">NA</div>
                                <div className="flex-1">
                                    <p className="font-label-sm text-label-sm text-on-surface truncate">Northern Aurora</p>
                                    <div className="flex items-center text-tertiary">
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '12px' }}>star</span>
                                        <span className="font-label-sm text-label-sm text-[12px] ml-[2px] text-on-surface-variant">4.9</span>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full bg-primary text-on-primary py-sm rounded-lg font-label-sm text-label-sm hover:bg-primary-container hover:text-on-primary-container transition-all">Contact Seller</button>
                        </div>
                    </div>
                </div>

                <div className="mt-lg flex justify-center">
                    <button className="bg-surface-container-low text-primary border border-outline-variant/50 px-lg py-sm rounded-lg font-label-sm text-label-sm font-semibold hover:bg-surface-variant transition-colors shadow-sm">Load More Matches</button>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full py-xl mt-auto bg-surface dark:bg-surface-container-lowest border-t border-outline-variant/20">
                <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-md">
                    <div className="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-on-surface">Breedwise</div>
                    <div className="flex flex-wrap justify-center gap-md">
                        <Link className="font-label-sm text-label-sm text-on-surface-variant dark:text-outline hover:text-primary transition-colors" href="#">Privacy Policy</Link>
                        <Link className="font-label-sm text-label-sm text-on-surface-variant dark:text-outline hover:text-primary transition-colors" href="#">Terms of Service</Link>
                        <Link className="font-label-sm text-label-sm text-on-surface-variant dark:text-outline hover:text-primary transition-colors" href="#">Breeder Verification</Link>
                        <Link className="font-label-sm text-label-sm text-on-surface-variant dark:text-outline hover:text-primary transition-colors" href="#">Contact Support</Link>
                    </div>
                    <div className="font-body-md text-body-md text-on-surface-variant opacity-80 hover:opacity-100 transition-opacity">
                        © 2024 Breedwise AI. Premium Pet Matching.
                    </div>
                </div>
            </footer>
        </div>
    );
}
