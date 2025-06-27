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
            <nav className="w-full flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 absolute top-0 left-0 z-20">
                <Link href="/" className="text-white font-bold text-lg tracking-wide">Jesse Hernandez</Link>
                <div className="flex gap-4 sm:gap-6">
                    <Link href="/#about" className="text-white/90 font-medium text-base cursor-pointer hover:text-white transition-colors">About</Link>
                    <Link href="/#projects" className="text-white/90 font-medium text-base cursor-pointer hover:text-white transition-colors">Work</Link>
                    <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-white/90 font-medium text-base cursor-pointer hover:text-white transition-colors">Resume</Link>
                    <Link href="mailto:jessemhernandez@gmail.com" className="text-white/90 font-medium text-base cursor-pointer hover:text-white transition-colors">Contact</Link>
                </div>
            </nav>
            {/* Horizontal Line */}
            <div className="absolute top-[68px] left-0 w-full z-10 flex justify-between px-4 sm:px-8">
                <hr className="mx-0 w-full border-t border-white" style={{ borderTopWidth: '1px' }} />
            </div>

            {/* Hero Section */}
            <div className="flex flex-1 items-center justify-center min-h-[60vh] sm:min-h-screen px-2">
                <div className="w-full px-4 sm:px-8">
                    <div
                        className="max-w-4xl mx-auto w-full h-[340px] sm:h-[550px] bg-cover bg-center rounded-3xl flex flex-col items-center justify-center text-center p-6 sm:p-12 md:p-16 lg:p-20 xl:p-24"
                        style={{ backgroundImage: "url('/gradient2.svg')" }}
                    >
                        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2 sm:mb-4 inked-font">Cycles Studios</h1>
                        <p className="text-base sm:text-xl text-white/90 max-w-xs sm:max-w-lg inked-font">
                            A creative studio bridging art, music, and tech for the next generation of culture.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-6 sm:mt-6">
                            <Link
                                href="https://www.cyclesstudios.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-1 rounded-full border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors font-sans text-sm"
                            >
                                View site
                            </Link>
                            <Link href="https://github.com/jdez23/Cycles-Studios" target="_blank" rel="noopener noreferrer">
                                <img src="/github-mark-white.svg" alt="GitHub" className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <section className="bg-[#101010] text-white">
                <div className="container mx-auto px-4 sm:px-8">
                    {/* Mission Statement */}
                    <div className="text-center max-w-4xl mx-auto mb-24 sm:mb-48 font-sans">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Mission</h2>
                        <p className="text-lg sm:text-2xl text-white/80">
                            Cycles Studios exists to give independent artists the same stage presence online that they fight for in real life. The platform blends editorial storytelling with interactive product design so musicians can share their work, their process, and their personalities without the gatekeepers of traditional media. My goal was to prove that thoughtful technology and strong creative direction can transform artist discovery into an immersive, community-driven experience.
                        </p>
                    </div>

                    {/* Grid Layout */}
                    <div className="flex flex-col gap-16 max-w-4xl mx-auto font-sans">
                        {/* Creative Direction & Production */}
                        <div className="flex flex-col gap-4 items-center text-center">
                            <h3 className="text-xl sm:text-2xl font-bold">Creative Direction & Production</h3>
                            <p className="text-white/80 text-base sm:text-lg">
                                I guide artists from concept to launch. For Chezi I produced and engineered studio sessions, shaping the sonic palette track by track. For Sophia Frame I helped develop a visual identity, planned social campaigns and matched her with the right mix engineers. For J.Dez I blended audio production with generative-AI artwork to create a fully integrated release. Each project shows my ability to translate vision into tangible assets across audio, visual and interactive media.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mt-4 items-center justify-center">
                                <div className="text-center">
                                    <img src="/sophia.jpg" alt="Sophia Frame" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg mx-auto" />
                                    <p className="mt-2 text-sm flex items-center justify-center gap-2">
                                        Sophia Frame
                                        <Link href="https://open.spotify.com/track/3FAhrboOosw3eojdgseKfy?si=ed103b2d72974f29" target="_blank" rel="noopener noreferrer">
                                            <img src="/spotify.png" alt="Spotify" className="w-4 h-4 object-contain inline-block" />
                                        </Link>
                                    </p>
                                </div>
                                <div className="text-center">
                                    <img src="/chezi.jpg" alt="Chezi" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg mx-auto" />
                                    <p className="mt-2 text-sm flex items-center justify-center gap-2">
                                        Chezi
                                        <Link href="https://open.spotify.com/album/4EDEhhvIeH5RhERTdydXlS?si=LZM7KaK4TGu2JBkxa4p17g" target="_blank" rel="noopener noreferrer">
                                            <img src="/spotify.png" alt="Spotify" className="w-4 h-4 object-contain inline-block" />
                                        </Link>
                                    </p>
                                </div>
                                <div className="text-center">
                                    <img src="/jdez.png" alt="J.Dez" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg mx-auto" />
                                    <p className="mt-2 text-sm flex items-center justify-center gap-2">
                                        J.Dez
                                        <Link href="https://open.spotify.com/track/2bLChcYmqDya9cJofRNQ78?si=0b2b374d6c7740fe" target="_blank" rel="noopener noreferrer">
                                            <img src="/spotify.png" alt="Spotify" className="w-4 h-4 object-contain inline-block" />
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Artist Conversation */}
                        <div className="flex flex-col gap-4 items-center text-center">
                            <h3 className="text-xl sm:text-2xl font-bold">Artist Conversation</h3>
                            <p className="text-base sm:text-lg text-white/80">
                                I devised and run a long-form interview series that lets emerging and established artists unpack process, identity and community on camera. I write the segments, coordinate a small crew, direct the shoots and handle post-production so each episode moves seamlessly from raw footage to polished multiplatform content. The result is a library of human-centred stories that doubles as user-research for new product ideas.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mt-4 items-center justify-center">
                                <div className="text-center">
                                    <img src="/shante.jpg" alt="Shante" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg mx-auto" />
                                    <p className="mt-2 text-sm flex items-center justify-center gap-2">
                                        Shante
                                        <Link href="https://www.instagram.com/reel/DINlJ0Sx8lc/?igsh=NjZiM2M3MzIxNA%3D%3D" target="_blank" rel="noopener noreferrer">
                                            <img src="/igTrans.png" alt="Instagram" className="w-5 h-5 object-contain inline-block" />
                                        </Link>
                                    </p>
                                </div>
                                <div className="text-center">
                                    <img src="/malachi.jpg" alt="Malachi" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg mx-auto" />
                                    <p className="mt-2 text-sm flex items-center justify-center gap-2">
                                        Malachi
                                        <Link href="https://www.instagram.com/reel/DIMaMtlSCrJ/?igsh=NjZiM2M3MzIxNA%3D%3D" target="_blank" rel="noopener noreferrer">
                                            <img src="/igTrans.png" alt="Instagram" className="w-5 h-5 object-contain inline-block" />
                                        </Link>
                                    </p>
                                </div>
                                <div className="text-center">
                                    <img src="/kiyomi.jpg" alt="Kiyomi" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg mx-auto" />
                                    <p className="mt-2 text-sm flex items-center justify-center gap-2">
                                        Kiyomi
                                        <Link href="https://www.instagram.com/reel/DIPyditSCvG/?igsh=NjZiM2M3MzIxNA%3D%3D" target="_blank" rel="noopener noreferrer">
                                            <img src="/igTrans.png" alt="Instagram" className="w-5 h-5 object-contain inline-block" />
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Street Interviews */}
                        <div className="flex flex-col gap-4 items-center text-center">
                            <h3 className="text-xl sm:text-2xl font-bold">Street Interviews</h3>
                            <p className="text-white/80 text-base sm:text-lg">
                                All across the Bay Area, I stage rapid-fire interviews that reveal how everyday listeners connect music to memory, identity, and community. To turn these moments into an interactive experience, I partnered with beloved local retailer Five Little Monkeys and hosted an on-site giveaway that tied a question of the day to a toy-store prize. I wrote the prompts, handled on-location directing, and produced a series of vertical clips that blended artist discovery with playful community engagement. The collaboration boosted the store&apos;s foot traffic, added a surge of new followers to our channels, and showed how content strategy can double as user research that feeds directly into the product roadmap.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mt-4 items-center justify-center">
                                <div className="text-center">
                                    <img src="/interview1.jpg" alt="Collab with Five Little Monkeys" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg mx-auto" />
                                    <p className="mt-2 text-sm flex flex-col items-center justify-center gap-1">
                                        <span>collab with</span>
                                        <span className="flex items-center justify-center gap-2">
                                            Five Little Monkeys
                                            <Link href="https://www.instagram.com/reel/DHMVbYkyPCB/?igsh=NjZiM2M3MzIxNA%3D%3D" target="_blank" rel="noopener noreferrer">
                                                <img src="/igTrans.png" alt="Instagram" className="w-5 h-5 object-contain inline-block" />
                                            </Link>
                                        </span>
                                    </p>
                                </div>
                                <div className="text-center">
                                    <img src="/interview2.jpg" alt="San Francisco Fisherman&apos;s Wharf" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg mx-auto" />
                                    <p className="mt-2 text-sm flex flex-col items-center justify-center gap-1">
                                        <span>San Francisco</span>
                                        <span className="flex items-center justify-center gap-2">
                                            Fisherman&apos;s Wharf
                                            <Link href="https://www.instagram.com/reel/DE18yuIxSYp/?igsh=NjZiM2M3MzIxNA%3D%3D" target="_blank" rel="noopener noreferrer">
                                                <img src="/igTrans.png" alt="Instagram" className="w-5 h-5 object-contain inline-block" />
                                            </Link>
                                        </span>
                                    </p>
                                </div>
                                <div className="text-center">
                                    <img src="/interview3.jpg" alt="World of Dance 2025" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg mx-auto" />
                                    <p className="mt-2 text-sm flex flex-col items-center justify-center gap-1">
                                        <span>World of</span>
                                        <span className="flex items-center justify-center gap-2">
                                            Dance 2025
                                            <Link href="https://www.instagram.com/reel/DGMyTAvpId_/?igsh=NjZiM2M3MzIxNA%3D%3D" target="_blank" rel="noopener noreferrer">
                                                <img src="/igTrans.png" alt="Instagram" className="w-5 h-5 object-contain inline-block" />
                                            </Link>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="flex flex-col gap-4 items-center text-center">
                            <h3 className="text-xl sm:text-2xl font-bold">Social Media</h3>
                            <p className="text-white/80 text-base sm:text-lg">
                                Cycles Studios is designed as a living product, so I prototype content on Instagram and TikTok the way I iterate on software features. I test new formats, read the analytics and refine weekly, turning storytelling experiments into measurable community growth. Every post is treated like a mini-launch, balancing narrative, design and data to keep the brand and its artists in motion.
                            </p>
                            <Link href="https://www.instagram.com/cycles_studios/" target="_blank" rel="noopener noreferrer">
                                <img src="/igTrans.png" alt="Instagram" className="w-12 h-12 object-contain" />
                            </Link>
                        </div>
                    </div>

                    {/* Final Paragraph */}
                    <div className="text-center max-w-4xl mx-auto mt-16 sm:mt-32 mb-16 sm:mb-24 font-sans">
                        <p className="text-base sm:text-xl text-white">
                            Cycles Studios has been my test-bed for everything I love about product work: listening first, prototyping fast, and shipping ideas that bring people closer to music and to one another. Curating interviews, engineering tracks, and designing multiplatform experiences has taught me that technology is only powerful when it feels personal. I&apos;m now looking to bring that blend of creative curiosity, systems thinking, and hands-on execution to a team that wants to push culture forward—one thoughtful product at a time.
                        </p>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className="relative w-full py-8 sm:py-12 px-4 sm:px-8 font-sans overflow-hidden bg-[#101010]">
                <div className="relative flex flex-col sm:flex-row justify-between items-center text-white max-w-6xl mx-auto gap-2 sm:gap-0">
                    <span className="flex items-center gap-4">
                        <Link href="https://github.com/jdez23" target="_blank" rel="noopener noreferrer">
                            <img src="/github-mark-white.svg" alt="GitHub" className="w-6 h-6 hover:scale-110 transition-transform" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/jesse-hernandez-a89302281" target="_blank" rel="noopener noreferrer">
                            <img src="/linkedin-white.png" alt="LinkedIn" className="w-7 h-6.5 hover:scale-110 transition-transform" />
                        </Link>
                        <Link href="mailto:jessemhernandez@gmail.com" className="font-semibold text-lg hover:underline">jessemhernandez@gmail.com</Link>
                    </span>
                    <span className="font-semibold text-lg">Let&apos;s shift culture.</span>
                </div>
            </footer>
        </div>
    );
} 