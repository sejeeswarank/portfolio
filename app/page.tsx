import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <footer className="bg-[#1A1A1A] border-t border-white/8 px-10 py-6 grid grid-cols-3 items-center">
        <span className="font-serif italic text-white/60 text-xl">&ldquo;Don&apos;t wait for it. Make it wait for us.&rdquo;</span>
        <span className="text-white/60 text-xl tracking-widest uppercase text-center">Sejeeswaran K · 2027</span>
        <a href="https://github.com/sejeeswarank" target="_blank" className="text-white/60 hover:text-white transition-colors flex items-center gap-1.5 text-xl font-medium justify-end">
          View Source ↗
        </a>
      </footer>
    </>
  )
}