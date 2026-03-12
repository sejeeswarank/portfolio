'use client'
import { useState } from 'react'
import { skillCategories } from '../data'
import Icon from './Icons'
import AnimatedSection from './AnimatedSection'

export default function Skills() {
  const [active, setActive] = useState('languages')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const current = skillCategories.find(c => c.id === active)!
  const activeLabel = current.label

  return (
    <section id="skills" className="py-12 md:py-16 px-5 md:px-10 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-8 md:mb-10">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#1B4FD8] mb-3">Expertise</div>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight mb-4">Tech Stack</h2>
          <p className="text-sm md:text-base text-[#888] max-w-xl leading-relaxed">Technologies I use to build end to end systems from smart contracts to cloud deployments.</p>
        </AnimatedSection>

        <AnimatedSection delay={100} className="flex flex-col md:grid md:grid-cols-[280px_1fr] gap-5 md:gap-12 items-start">

          {/* MOBILE: Dropdown selector */}
          <div className="md:hidden relative w-full">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white border border-[#E8E4DE] rounded-2xl text-sm font-medium text-[#1A1A1A]"
            >
              <span className="flex items-center gap-2 text-[#1B4FD8] font-semibold">
                <Icon name={skillCategories.find(c => c.id === active)!.icon} size={16} />
                {activeLabel}
              </span>
              <svg className={`w-4 h-4 text-[#888] transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E8E4DE] rounded-2xl shadow-lg z-20 overflow-hidden">
                {skillCategories.map(cat => (
                  <button key={cat.id}
                    onClick={() => { setActive(cat.id); setDropdownOpen(false) }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-left transition-colors border-b border-[#F0EDE8] last:border-0
                      ${active === cat.id ? 'bg-[#EEF2FF] text-[#1B4FD8]' : 'text-[#4A4A4A] hover:bg-[#FAF8F5]'}`}>
                    <Icon name={cat.icon} size={16} /> {cat.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* DESKTOP: Vertical sidebar buttons — unchanged */}
          <div className="hidden md:flex flex-col gap-3">
            {skillCategories.map(cat => (
              <button key={cat.id} onClick={() => setActive(cat.id)}
                className={`text-left px-5 py-4 rounded-2xl border text-base font-medium flex items-center gap-3 transition-all duration-200 ${active === cat.id ? 'bg-[#1B4FD8] text-white border-[#1B4FD8]' : 'bg-white text-[#4A4A4A] border-[#E8E4DE] hover:border-[#1B4FD8] hover:text-[#1B4FD8]'}`}>
                <Icon name={cat.icon} size={20} /> {cat.label}
              </button>
            ))}
          </div>

          {/* Skill chips — 3-col grid on mobile, flex wrap on desktop */}
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
    </section>
  )
}