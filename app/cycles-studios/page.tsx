"use client";
import Link from "next/link";

export default function CyclesStudiosPage() {
    return (
        <div className="min-h-screen bg-[#101010] text-white">
            <style jsx>{`
                @font-face {
                    font-family: 'Inked';
                    src: url('/Inked.otf') format('opentype');
                    font-weight: normal;
                    font-style: normal;
                }
                .inked-font {
                    font-family: 'Inked', sans-serif;
                }
            `}</style>

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

            {/* Hero Section */}
            <div className="flex flex-1 items-center justify-center min-h-screen">
                <div className="relative w-full max-w-5xl mx-auto">
                    <div
                        className="h-[550px] bg-cover bg-center rounded-3xl flex flex-col items-center justify-center text-center p-8"
                        style={{ backgroundImage: "url('/gradient2.svg')" }}
                    >
                        <h1 className="text-5xl font-bold text-white mb-4 inked-font">Cycles Studios</h1>
                        <p className="text-xl text-white/90 max-w-lg inked-font">
                            A creative studio bridging art, music, and tech for the next generation of culture.
                        </p>
                        <div className="flex items-center gap-4 mt-8">
                            <a
                                href="https://www.cyclesstudios.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-1 rounded-full border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors font-sans text-sm"
                            >
                                view
                            </a>
                            <a href="https://github.com/jdez23/Cycles-Studios" target="_blank" rel="noopener noreferrer">
                                <img src="/github-mark-white.svg" alt="GitHub" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <section className="bg-[#101010] text-white">
                <div className="container mx-auto px-8">
                    {/* Mission Statement */}
                    <div className="text-center max-w-4xl mx-auto mb-48">
                        <h2 className="text-3xl font-bold mb-6 inked-font">Mission</h2>
                        <p className="text-2xl text-white/80 inked-font">
                            At Cycles Studios, we create spaces—digital and real—for artists to be seen, heard, and celebrated. Through interviews, visual storytelling, and creative direction, we elevate voices at the intersection of music, identity, and expression.
                        </p>
                    </div>

                    {/* Grid Layout */}
                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
                        {/* Artist Conversation */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-bold inked-font">Artist Conversation</h3>
                            <p className="text-lg text-white/80 inked-font">
                                An ongoing series of intimate interviews with emerging and established artists—discussing process, identity, community, and the creative hustle.
                            </p>
                            <div className="flex gap-4 mt-4">
                                <div className="text-left">
                                    <img src="/shante.jpg" alt="Shante" className="w-40 h-40 object-cover rounded-lg" />
                                    <p className="mt-2 text-sm inked-font">Shante</p>
                                </div>
                                <div className="text-left">
                                    <img src="/malachi.jpg" alt="Malachi" className="w-40 h-40 object-cover rounded-lg" />
                                    <p className="mt-2 text-sm inked-font">Malachi</p>
                                </div>
                                <div className="text-left">
                                    <img src="/kiyomi.jpg" alt="Kiyomi" className="w-40 h-40 object-cover rounded-lg" />
                                    <p className="mt-2 text-sm inked-font">Kiyomi</p>
                                </div>
                            </div>
                        </div>

                        {/* Street Interviews */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-bold inked-font">Street Interviews</h3>
                            <p className="text-white/80 text-lg inked-font">
                                In the heart of the Bay Area, we take to the streets to ask the people meaningful questions about music and culture. Each interview offers a glimpse into how music shapes identity, memory, and connection.
                            </p>
                            <div className="flex gap-4 mt-4">
                                <div className="text-left">
                                    <img src="/interview1.jpg" alt="Collaboration with Five Little Monkeys" className="w-40 h-40 object-cover rounded-lg" />
                                    <p className="mt-2 text-sm inked-font">Collaboration with Five Little Monkeys</p>
                                </div>
                                <div className="text-left">
                                    <img src="/interview2.jpg" alt="San Francisco Fisherman's Wharf" className="w-40 h-40 object-cover rounded-lg" />
                                    <p className="mt-2 text-sm inked-font">San Francisco Fisherman's Wharf</p>
                                </div>
                                <div className="text-left">
                                    <img src="/interview3.jpg" alt="World of Dance 2025" className="w-40 h-40 object-cover rounded-lg" />
                                    <p className="mt-2 text-sm inked-font">World of Dance 2025</p>
                                </div>
                            </div>
                        </div>

                        {/* Creative Direction & Production */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-bold inked-font">Creative Direction & Production</h3>
                            <p className="text-white/80 text-lg inked-font">
                                I work with artists to turn their ideas into multidimensional experiences. Guiding them from concept to execution.
                            </p>
                            <div className="flex gap-4 mt-4">
                                <div className="text-left">
                                    <img src="/sophia.jpg" alt="Sophia Frame" className="w-40 h-40 object-cover rounded-lg" />
                                    <p className="mt-2 text-sm inked-font">Sophia Frame</p>
                                </div>
                                <div className="text-left">
                                    <img src="/chezi.jpg" alt="Chezi" className="w-40 h-40 object-cover rounded-lg" />
                                    <p className="mt-2 text-sm inked-font">Chezi</p>
                                </div>
                                <div className="text-left">
                                    <img src="/jdez.png" alt="J.Dez" className="w-40 h-40 object-cover rounded-lg" />
                                    <p className="mt-2 text-sm inked-font">J.Dez</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-bold inked-font">Social Media</h3>
                            <p className="text-white/80 text-lg inked-font">
                                Cycles Studios isn't just a brand, it's a presence. Our storytelling extends to platforms like Instagram and TikTok, where we experiment with formats, grow community, and remix culture in real time.
                            </p>
                            <div className="flex gap-4 mt-4">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center inked-font">F</div>
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center inked-font">T</div>
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center inked-font">I</div>
                            </div>
                        </div>
                    </div>

                    {/* Final Paragraph */}
                    <div className="text-center max-w-4xl mx-auto mt-32 mb-24">
                        <p className="text-xl text-white inked-font">
                            Whether it's collaborating with artists, building platforms, or reimagining how we connect—Cycles Studios is my way of doing more than just making media. It's about making meaning.
                        </p>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className="relative w-full py-12 px-8 font-sans overflow-hidden">
                <div className="absolute inset-0 w-full h-full -z-10">
                    <img
                        src="/gradient1.svg"
                        alt="Background Gradient"
                        className="object-cover w-full h-full"
                        draggable="false"
                    />
                </div>
                <div className="relative flex justify-between items-center text-white max-w-6xl mx-auto">
                    <span className="font-semibold text-lg inked-font">Contact</span>
                    <span className="font-semibold text-lg inked-font">Let's shift culture.</span>
                </div>
            </footer>
        </div>
    );
} 