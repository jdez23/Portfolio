import Link from "next/link";

export default function CyclesPage() {
    return (
        <div className="relative flex flex-col min-h-screen overflow-hidden bg-[#101010]">
            {/* Top Bar */}
            <nav className="w-full flex items-center justify-between px-8 py-6 absolute top-0 left-0 z-20">
                <Link href="/" className="text-white font-bold text-lg tracking-wide">Jesse Hernandez</Link>
                <div className="flex gap-6">
                    <span className="text-white/90 font-medium text-base cursor-pointer hover:text-white transition-colors">About</span>
                    <span className="text-white/90 font-medium text-base cursor-pointer hover:text-white transition-colors">Work</span>
                    <span className="text-white/90 font-medium text-base cursor-pointer hover:text-white transition-colors">Contact</span>
                </div>
            </nav>
            {/* Horizontal Line */}
            <div className="absolute top-[68px] left-0 w-full z-10 flex justify-between px-8">
                <hr className="mx-0 w-full border-t border-white" style={{ borderTopWidth: '1px' }} />
            </div>

            <div className="flex-1 flex items-center justify-center text-white pt-24">
                <div className="container mx-auto px-8 py-16 flex flex-col md:flex-row items-center gap-12">
                    {/* Left Column: Images */}
                    <div className="md:w-1/2 flex justify-center items-center gap-8 bg-[#faf5e6] p-8 rounded-3xl">
                        <img src="/cycles1.PNG" alt="Cycles app screen 1" className="h-96 object-contain rounded-3xl" />
                        <img src="/cycles2.PNG" alt="Cycles app screen 2" className="h-96 object-contain rounded-3xl" />
                    </div>

                    {/* Right Column: Details */}
                    <div className="md:w-1/2 flex flex-col gap-6">
                        <h1 className="text-4xl font-bold">Cycles - Discover Playlist</h1>

                        <div className="flex items-center gap-4">
                            <img src="/cyclesLogo.png" alt="Cycles App Logo" className="w-16 h-16 rounded-2xl" />
                            <p className="text-xl">Full-Stack mobile app that turns playlists into a social experience</p>
                        </div>

                        <h2 className="text-xl font-semibold">Full-Stack Developer & Product Designer</h2>

                        <p className="text-lg text-white/80">React Native - Django/DRF - Firebase - AWS - Figma</p>

                        <div className="flex items-center gap-4 mt-1">
                            <a href="#">
                                <img src="/appStore.png" alt="Download on the App Store" className="w-30" />
                            </a>
                            <a href="#">
                                <img src="/github-mark-white.svg" alt="GitHub" className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Overview Section */}
            <section className="w-full bg-[#faf5e6] text-black py-42">
                <div className="container mx-auto px-8 flex flex-col items-center text-center">
                    <h2 className="text-4xl font-bold mb-6" style={{ color: '#f76709' }}>Project Overview</h2>
                    <p className="text-2xl max-w-4xl">
                        Cycles is a mobile app I designed and built to bring human connection back into music discovery.
                        It allows users to share playlists, follow others, and create a feed of curated music.
                        it turns listening into a communal act. Built with React Native, Django, and Firebase,
                        it’s designed for simplicity, and cultural relevance.
                    </p>
                </div>
            </section>

            {/* The Challenge, Solution, Impact Section */}
            <section className="w-full bg-[#f76709] text-black py-24">
                <div className="container mx-auto px-8 flex flex-col gap-24">

                    {/* Row 1: The Challenge */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="bg-[#faf5e6] p-8 rounded-3xl flex justify-center items-center gap-12">
                            <img src="/cycles4.png" alt="Cycles app screen" className="h-80 object-contain rounded-3xl" />
                            <img src="/cycles1.png" alt="Cycles app screen" className="h-80 object-contain rounded-3xl" />
                        </div>
                        <div className="flex flex-col gap-4 text-center">
                            <h3 className="text-2xl font-bold">THE CHALLENGE</h3>
                            <p className="text-lg">
                                TRADITIONAL STREAMING PLATFORMS PRIORITIZE ALGORITHMIC DISCOVERY OVER HUMAN CONNECTION, LEAVING PLAYLIST CURATORS INVISIBLE AND LISTENERS CRAVING CONTEXT. HOW DO WE BUILD A SPACE WHERE SHARING A PLAYLIST FEELS PERSONAL AND SOCIAL RATHER THAN TRANSACTIONAL?
                            </p>
                        </div>
                    </div>

                    {/* Row 2: The Solution */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-4 text-center">
                            <h3 className="text-2xl font-bold">THE SOLUTION</h3>
                            <p className="text-lg">
                                CYCLES ALLOWS USERS TO UPLOAD PLAYLISTS WITH CUSTOM TAGS, THEN SHARE THEM IN A SCROLLABLE, SOCIAL FEED. BY FOCUSING ON SIMPLE INTERACTIONS—FOLLOW, COMMENT, AND LIKE—PAIRED WITH A CLEAN, MOBILE-FIRST UI, CYCLES TRANSFORMS PLAYLISTS INTO STORIES AND FOSTERS GENUINE CONNECTIONS AROUND MUSIC TASTE.
                            </p>
                        </div>
                        <div className="bg-[#faf5e6] p-8 rounded-3xl flex justify-center items-center gap-12">
                            <img src="/cycles2.png" alt="Cycles app screen" className="h-80 object-contain rounded-3xl" />
                            <img src="/cycles3.png" alt="Cycles app screen" className="h-80 object-contain rounded-3xl" />
                        </div>
                    </div>

                    {/* Row 3: The Impact */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="bg-[#faf5e6] p-8 rounded-3xl flex justify-center items-center gap-6">
                            <img src="/cyclesAppStore.jpeg" alt="Cycles app screen" className="h-80 object-contain rounded-3xl" />
                            <img src="/appReview1.png" alt="Cycles app screen" className="h-80 object-contain rounded-3xl" />
                            <img src="/appReview2.png" alt="Cycles app screen" className="h-80 object-contain rounded-3xl" />
                        </div>
                        <div className="flex flex-col gap-4 text-center">
                            <h3 className="text-2xl font-bold">THE IMPACT</h3>
                            <p className="text-lg">
                                WITHIN WEEKS OF LAUNCH, CYCLES ATTRACTED EARLY ADOPTERS WHO BEGAN ACTIVELY CURATING AND ENGAGING WITH SHARED PLAYLISTS. THE APP'S HUMAN-CENTERED DESIGN LED TO 200+ ACTIVE USERS, ESTABLISHED A FOUNDATION FOR COMMUNITY-DRIVEN DISCOVERY, AND PROVED THAT MUSIC CURATION CAN THRIVE WHEN PEOPLE, NOT ALGORITHMS, DRIVE THE EXPERIENCE.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Prototype Section */}
            <section className="w-full bg-[#101010] py-24 text-white">
                <div className="container mx-auto px-8 grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Column */}
                    <div className="flex flex-col gap-6 text-center">
                        <img src="/wireframeSketch.jpg" alt="Ideation and Wireframe" className="w-7/8 mx-auto" />
                        <h3 className="text-2xl font-bold mt-4">From Ideation to Wireframe</h3>
                        <p className="text-lg text-white/80 px-4">
                            The initial concept for Cycles was born from a desire to make music discovery a shared experience. I started by sketching out core user flows on paper, focusing on how users would share, discover, and interact with playlists. These sketches evolved into low-fidelity wireframes, mapping out the app's structure and ensuring the main features were intuitive and accessible.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6 text-center">
                        <h3 className="text-2xl font-bold">High-Fidelity Mockups</h3>
                        <p className="text-lg text-white/80 px-4">
                            With the wireframes as a blueprint, I moved into Figma to create high-fidelity mockups. This phase was about defining the visual identity of Cycles—choosing a color palette, typography, and iconography that felt modern and engaging. I designed each screen with a focus on a clean, minimalist aesthetic that would keep the user's attention on the music and the community. The result was a polished, pixel-perfect representation of the final app.
                        </p>
                        <div className="grid grid-cols-2 mt-4">
                            <img src="/wireframe1.png" alt="High-Fidelity Mockup 1" className="w-full h-96 object-contain" />
                            <img src="/wireframe2.png" alt="High-Fidelity Mockup 2" className="w-full h-96 object-contain" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 