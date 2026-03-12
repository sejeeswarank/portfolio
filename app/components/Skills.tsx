'use client'
import { useState, useRef, useEffect } from 'react'
import { skillCategories } from '../data'
import Icon from './Icons'
import AnimatedSection from './AnimatedSection'

export default function Skills() {
  const [active, setActive] = useState('languages')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [dropdownStyle, setDropdownStyle] = useState<{ top: number; left: number; width: number }>({ top: 0, left: 0, width: 0 })
  const [animating, setAnimating] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const current = skillCategories.find(c => c.id === active)!

  const openDropdown = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      setDropdownStyle({
        top: rect.bottom + window.scrollY + 6,
        left: rect.left + window.scrollX,
        width: rect.width,
      })
    }
    setDropdownOpen(true)
    setTimeout(() => setAnimating(true), 10)
  }

  const closeDropdown = () => {
    setAnimating(false)
    setTimeout(() => setDropdownOpen(false), 200)
  }

  const toggle = () => {
    if (dropdownOpen) closeDropdown()
    else openDropdown()
  }

  useEffect(() => {
    if (!dropdownOpen) return
    const handler = () => closeDropdown()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [dropdownOpen])

  return (
    <section id="skills" className="py-12 md:py-16 px-5 md:px-10 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-8 md:mb-10">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#1B4FD8] mb-3">Expertise</div>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight mb-4">Tech Stack</h2>
          <p className="text-sm md:text-base text-[#888] max-w-xl leading-relaxed">Technologies I use to build end to end systems from smart contracts to cloud deployments.</p>
        </AnimatedSection>

        <AnimatedSection delay={100} className="flex flex-col md:grid md:grid-cols-[280px_1fr] gap-5 md:gap-12 items-start">

          {/* MOBILE ONLY: trigger button */}
          <div className="md:hidden w-full">
            <button
              ref={triggerRef}
              onClick={toggle}
              className="w-full flex items-center justify-between px-4 py-3 bg-white border border-[#E8E4DE] rounded-2xl text-sm font-medium"
            >
              <span className="flex items-center gap-2 text-[#1B4FD8] font-semibold">
                <Icon name={current.icon} size={16} />
                {current.label}
              </span>
              <svg
                className="w-4 h-4 text-[#888]"
                style={{ transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1)', transform: animating ? 'rotate(180deg)' : 'rotate(0deg)' }}
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* DESKTOP ONLY: vertical sidebar */}
          <div className="hidden md:flex flex-col gap-3">
            {skillCategories.map(cat => (
              <button key={cat.id} onClick={() => setActive(cat.id)}
                className={`text-left px-5 py-4 rounded-2xl border text-base font-medium flex items-center gap-3 transition-all duration-200 ${active === cat.id ? 'bg-[#1B4FD8] text-white border-[#1B4FD8]' : 'bg-white text-[#4A4A4A] border-[#E8E4DE] hover:border-[#1B4FD8] hover:text-[#1B4FD8]'}`}>
                <Icon name={cat.icon} size={20} /> {cat.label}
              </button>
            ))}
          </div>

          {/* Skill chips */}
          <div className="grid grid-cols-3 md:flex md:flex-wrap gap-2 md:gap-4">
            {current.skills.map(skill => (
              <div key={skill.name}
                className="skill-chip bg-white border border-[#E8E4DE] rounded-xl md:rounded-2xl px-2 md:px-5 py-2 md:py-3.5 text-xs md:text-base font-medium text-[#1A1A1A] cursor-default flex items-center gap-1.5 md:gap-2.5 justify-center md:justify-start overflow-hidden">
                {skill.logo && <img src={skill.logo} alt={skill.name} className="w-3.5 h-3.5 md:w-5 md:h-5 object-contain shrink-0" />}
                <span className="truncate">{skill.name}</span>
              </div>
            ))}
          </div>

        </AnimatedSection>
      </div>

      {/* PORTAL DROPDOWN — rendered outside stacking context, fixed to page */}
      {dropdownOpen && (
        <>
          <button
            type="button"
            aria-label="Close dropdown"
            style={{ position: 'fixed', inset: 0, zIndex: 9998, background: 'transparent', border: 'none', cursor: 'default' }}
            onClick={closeDropdown}
          />
          <div
            style={{
              position: 'absolute',
              top: dropdownStyle.top,
              left: dropdownStyle.left,
              width: dropdownStyle.width,
              zIndex: 9999,
              background: 'white',
              border: '1px solid #E8E4DE',
              borderRadius: '16px',
              boxShadow: '0 20px 48px rgba(0,0,0,0.14)',
              overflow: 'hidden',
              opacity: animating ? 1 : 0,
              transform: animating ? 'translateY(0) scaleY(1)' : 'translateY(-8px) scaleY(0.95)',
              transformOrigin: 'top center',
              transition: 'opacity 0.22s cubic-bezier(0.22,1,0.36,1), transform 0.22s cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            {skillCategories.map((cat, i) => (
              <button key={cat.id}
                onClick={() => { setActive(cat.id); closeDropdown() }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '13px 16px',
                  fontSize: '14px',
                  fontWeight: 500,
                  textAlign: 'left',
                  borderBottom: i < skillCategories.length - 1 ? '1px solid #F0EDE8' : 'none',
                  background: active === cat.id ? '#EEF2FF' : 'transparent',
                  color: active === cat.id ? '#1B4FD8' : '#4A4A4A',
                  transition: 'background 0.15s',
                  cursor: 'pointer',
                }}
              >
                <Icon name={cat.icon} size={16} />
                {cat.label}
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  )
}