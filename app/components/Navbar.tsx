'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-10 h-22 flex items-center justify-between" style={{height:'5.5rem'}}>
        <a href="#hero" className="font-serif text-3xl tracking-tight">Sejees<span className="text-[#1B4FD8]">waran</span></a>
        <ul className="hidden md:flex items-center gap-12 list-none">
          {['Projects','Skills','Certifications'].map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-lg font-medium text-[#4A4A4A] hover:text-[#1B4FD8] transition-colors duration-200">{item}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="text-lg font-semibold bg-[#1B4FD8] text-white px-7 py-3 rounded-xl hover:bg-[#1440B8] transition-colors duration-200">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
