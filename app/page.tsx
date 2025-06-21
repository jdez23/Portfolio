import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative flex flex-1 items-center justify-center min-h-screen snap-start">
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
        <div className="absolute inset-0 w-full h-full -z-10">
          <img
            src="/gradient1.svg"
            alt="Background Gradient"
            className="object-cover w-full h-full"
            draggable="false"
          />
        </div>
        <div className="flex flex-col items-center text-center gap-6 font-sans">
          <h1 className="text-5xl sm:text-5xl font-bold text-white drop-shadow-lg whitespace-pre-line leading-tight">
            {`Creative\nTechnologist`}
          </h1>
          <p className="text-lg sm:text-3xl text-white/80 max-w-xl whitespace-pre-line">
            {`Building at the intersection\nof Art, Culture and Technology`}
          </p>
          <a
            href="#projects"
            className="mt-6 rounded-full border-2 border-white bg-white/10 text-white px-8 py-3 text-lg font-semibold backdrop-blur-sm hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/60"
            style={{ minWidth: 120 }}
          >
            View Work
          </a>
        </div>
      </div>
      {/* Portfolio Section */}
      <section className="w-full min-h-screen bg-[#101010] flex flex-col items-center justify-center px-8 py-16 font-sans snap-start">
        <div className="flex flex-col items-center gap-6 max-w-5xl w-full font-sans">
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2 text-center font-sans">About Me</h2>
          <img
            src="/about_me.jpeg"
            alt="About Me"
            className="w-85 h-85 object-cover rounded-2xl"
            draggable="false"
          />
          <p className="text-white text-sm sm:text-lg max-w-2xl text-center opacity-90 font-sans">
            I'm a self-taught creative technologist and full-stack product builder.<br /><br />
            I design thoughtful user experiences, write clean code, and shape systems that bridge creativity and functionality. My work spans mobile apps, backend APIs and brand identities with a focus on connecting people through music, culture, and design.<br /><br />
            Whether I'm prototyping a feature or scaling an idea, I think holistically about how things work and feel. I care about the details, the vision, and the impact.
          </p>
          <h3 className="text-white text-xl sm:text-2xl font-semibold mt-8 mb-2 text-center font-sans">Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 font-sans">
            {['JavaScript', 'Python', 'Java', 'React', 'Django', 'SQL', 'Firebase/AWS', 'UX/UI'].map(skill => (
              <span key={skill} className="px-4 py-2 rounded-full bg-white/10 text-white text-xs sm:text-sm font-medium border border-white/20 font-sans">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
      {/* Projects */}
      <section id="projects" className="w-full min-h-screen bg-[#faf5e6] flex flex-col items-center pt-16 font-sans snap-start">
        <div className="max-w-6xl w-full pb-16 px-8">
          {/* Featured Work */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 font-sans">Featured Work</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Cycles - Share your playlist */}
            <div className="flex-1 bg-[#101010] rounded-3xl p-4 flex flex-col gap-3 shadow-md">
              <div className="flex justify-center items-center gap-10 w-full h-[180px] rounded-2xl bg-[#faf5e6] p-4">
                <img src="/cyclesAppStore.jpeg" alt="Cycles app store screenshot" className="h-full object-contain rounded-lg" />
                <img src="/cycles1.PNG" alt="Cycles app screen 1" className="h-full object-contain rounded-lg" />
                <img src="/cycles2.PNG" alt="Cycles app screen 2" className="h-full object-contain rounded-lg" />
                <img src="/cycles3.png" alt="Cycles app screen 3" className="h-full object-contain rounded-lg" />
              </div>
              <h3 className="text-white text-lg font-semibold mt-2">Cycles - Discover Playlists</h3>
              <div className="flex gap-2 flex-wrap mt-2">
                <span className="px-3 py-1 rounded-full bg-black/10 text-white text-xs font-sans border border-white/20">JavaScript</span>
                <span className="px-3 py-1 rounded-full bg-black/10 text-white text-xs font-sans border border-white/20">Python</span>
                <span className="px-3 py-1 rounded-full bg-black/10 text-white text-xs font-sans border border-white/20">Django</span>
                <span className="px-3 py-1 rounded-full bg-black/10 text-white text-xs font-sans border border-white/20">React</span>
                <span className="px-3 py-1 rounded-full bg-black/10 text-white text-xs font-sans border border-white/20">Cloud</span>
                <span className="px-3 py-1 rounded-full bg-black/10 text-white text-xs font-sans border border-white/20">Full-Stack</span>
              </div>
              <p className="text-white/80 text-sm font-sans flex-grow">Cycles is a mobile app I designed and built to bring human connection back into music discovery. It allows users to share playlists, follow others, and create a feed of curated music — turning listening into a communal act. Built with React Native, Django, and Firebase, it's designed for speed, simplicity, and cultural relevance.</p>
              <div className="flex items-center gap-4 mt-auto">
                <Link href="/cycles" className="w-fit px-2 py-1 rounded-full border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors font-sans text-xs">
                  View
                </Link>

              </div>
            </div>
            {/* Cycles Studios */}
            <div className="flex-1 bg-[#101010] rounded-3xl p-4 flex flex-col gap-3 shadow-md">
              <div className="w-full h-[180px] rounded-2xl bg-[#faf5e6] p-4 overflow-hidden">
                <img src="/cyclesstudios.png" alt="Cycles Studios" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-white text-lg font-semibold mt-2">Cycles Studios</h3>
              <div className="flex gap-2 flex-wrap mt-2">
                <span className="px-3 py-1 rounded-full bg-black/10 text-white text-xs font-sans border border-white/20">Creative Direction</span>
                <span className="px-3 py-1 rounded-full bg-black/10 text-white text-xs font-sans border border-white/20">Media</span>
                <span className="px-3 py-1 rounded-full bg-black/10 text-white text-xs font-sans border border-white/20">Social Medias</span>
              </div>
              <p className="text-white/80 text-sm font-sans flex-grow">Cycles is a multi-dimensional identity — not just a visual brand, but a conceptual and emotional framework that unifies the app, the studio, and its community. It speaks to a new generation of artists and listeners who value design, storytelling, and sonic self-expression.</p>
              <div className="flex items-center gap-4 mt-auto">
                <Link href="/cycles-studios" className="w-fit px-2 py-1 rounded-full border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors font-sans text-xs">
                  View
                </Link>

              </div>
            </div>
          </div>

          {/* Other Work */}
          <h2 className="text-2xl sm:text-3xl font-bold mt-16 mb-8 font-sans">Other Work</h2>
          <div className="flex flex-col gap-16">
            {/* DigiCrate */}
            <div className="flex flex-col md:flex-row items-center md:items-center gap-10">
              <img src="/digicrate.png" alt="DigiCrate" className="w-[360px] h-[225px] object-cover rounded-3xl bg-black p-2 shadow-md" />
              <div className="flex-1 flex flex-col gap-2 items-start text-left justify-center">
                <h3 className="text-xl sm:text-2xl font-semibold font-sans">DigiCrate</h3>
                <p className="text-base sm:text-lg font-sans">DigiCrate is a full-stack web application with a Django REST backend and a Next.js/React frontend. Its main purpose is to let users discover random, sample-worthy songs by fetching metadata from Discogs and matching them with YouTube videos, then displaying the video and metadata in a visually engaging way.</p>
                <div className="flex gap-2 flex-wrap mt-2">
                  <img src="/github-mark.svg" alt="GitHub" className="w-6 h-6" />
                  <span className="px-3 py-1 rounded-full bg-black/10 text-black text-xs font-sans border border-black/20">JavaScript</span>
                  <span className="px-3 py-1 rounded-full bg-black/10 text-black text-xs font-sans border border-black/20">Python</span>
                  <span className="px-3 py-1 rounded-full bg-black/10 text-black text-xs font-sans border border-black/20">Django</span>
                  <span className="px-3 py-1 rounded-full bg-black/10 text-black text-xs font-sans border border-black/20">React</span>
                  <span className="px-3 py-1 rounded-full bg-black/10 text-black text-xs font-sans border border-black/20">Three.js</span>
                  <span className="px-3 py-1 rounded-full bg-black/10 text-black text-xs font-sans border border-black/20">Full-Stack</span>
                </div>
              </div>
            </div>
            {/* Deli-Stones */}
            <div className="flex flex-col md:flex-row items-center md:items-center gap-10">
              <img src="/deli-stones.png" alt="Deli-Stones" className="w-[360px] h-[225px] object-cover rounded-3xl bg-black p-2 shadow-md" />
              <div className="flex-1 flex flex-col gap-2 items-start text-left justify-center">
                <h3 className="text-xl sm:text-2xl font-semibold font-sans">Deli-Stones</h3>
                <p className="text-base sm:text-lg font-sans">Deli-Stones is a Java-based point-of-sale application that lets customers build fully customized sandwich orders through a command-line interface. Users can add sandwiches, drinks, and chips, with pricing dynamically calculated based on size and extras. Upon checkout, the order is saved as a timestamped receipt file.</p>
                <div className="flex gap-2 flex-wrap mt-2">
                  <img src="/github-mark.svg" alt="GitHub" className="w-6 h-6" />
                  <span className="px-3 py-1 rounded-full bg-black/10 text-black text-xs font-sans border border-black/20">Java</span>
                  <span className="px-3 py-1 rounded-full bg-black/10 text-black text-xs font-sans border border-black/20">Backend</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="relative w-full py-12 px-8 font-sans overflow-hidden z-0">
          <div className="absolute inset-0 w-full h-full -z-10">
            <img
              src="/gradient1.svg"
              alt="Background Gradient"
              className="object-cover w-full h-full"
              draggable="false"
            />
          </div>
          <div className="relative flex justify-between items-center text-white mx-auto">
            <span className="font-semibold text-lg">Contact</span>
            <span className="font-semibold text-lg">Let's shift culture.</span>
          </div>
        </footer>
      </section>
    </div>
  );
}
