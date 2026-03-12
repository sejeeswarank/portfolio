'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navLinks = ['Projects', 'Skills', 'Certifications']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 md:h-22 flex items-center justify-between" style={{ height: '4rem' }}>
        <a href="#hero" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <img src="/ksa-192.png" alt="KSA Logo" className="w-8 h-8 md:w-9 md:h-9 rounded-lg object-cover" />
          <span className="font-serif text-xl md:text-2xl tracking-tight">Sejees<span className="text-[#1B4FD8]">waran</span></span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10 list-none">
          {navLinks.map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-base font-medium text-[#4A4A4A] hover:text-[#1B4FD8] transition-colors duration-200">{item}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="text-base font-semibold bg-[#1B4FD8] text-white px-5 py-2.5 rounded-xl hover:bg-[#1440B8] transition-colors duration-200">Contact</a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ background: 'rgba(250,248,245,0.97)', backdropFilter: 'blur(12px)', borderTop: '1px solid #E8E4DE' }}>
        <ul className="flex flex-col px-5 py-4 gap-1 list-none">
          {navLinks.map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}
                className="block text-base font-medium text-[#4A4A4A] hover:text-[#1B4FD8] transition-colors py-3 border-b border-[#E8E4DE]"
                onClick={() => setMenuOpen(false)}>{item}</a>
            </li>
          ))}
          <li className="pt-3">
            <a href="#contact"
              className="block text-center text-base font-semibold bg-[#1B4FD8] text-white px-5 py-3 rounded-xl hover:bg-[#1440B8] transition-colors"
              onClick={() => setMenuOpen(false)}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}