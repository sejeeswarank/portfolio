'use client'
import { useState } from 'react'
import { skillCategories } from '../data'
import Icon from './Icons'
import AnimatedSection from './AnimatedSection'

export default function Skills() {
  const [active, setActive] = useState('languages')
  const current = skillCategories.find(c => c.id === active)!
  return (
    <section id="skills" className="py-12 md:py-16 px-5 md:px-10 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-8 md:mb-10">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#1B4FD8] mb-3">Expertise</div>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight mb-4">Tech Stack</h2>
          <p className="text-sm md:text-base text-[#888] max-w-xl leading-relaxed">Technologies I use to build end to end systems from smart contracts to cloud deployments.</p>
        </AnimatedSection>
        <AnimatedSection delay={100} className="flex flex-col md:grid md:grid-cols-[280px_1fr] gap-5 md:gap-12 items-start">

          {/* Category tabs — horizontal scroll on mobile */}
          <div className="flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible pb-1 md:pb-0 -mx-5 md:mx-0 px-5 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {skillCategories.map(cat => (
              <button key={cat.id} onClick={() => setActive(cat.id)}
                className={`text-left px-3 md:px-5 py-2.5 md:py-4 rounded-xl md:rounded-2xl border text-xs md:text-base font-medium flex items-center gap-2 md:gap-3 transition-all duration-200 whitespace-nowrap shrink-0 md:w-full ${active === cat.id ? 'bg-[#1B4FD8] text-white border-[#1B4FD8]' : 'bg-white text-[#4A4A4A] border-[#E8E4DE] hover:border-[#1B4FD8] hover:text-[#1B4FD8]'}`}>
                <Icon name={cat.icon} size={14} /> {cat.label}
              </button>
            ))}
          </div>

          {/* Skill chips — 3 per row on mobile, flex wrap on desktop */}
          <div className="grid grid-cols-3 md:flex md:flex-wrap gap-2 md:gap-4">
            {current.skills.map(skill => (
              <div key={skill.name}
                className="skill-chip bg-white border border-[#E8E4DE] rounded-xl md:rounded-2xl px-2 md:px-5 py-2 md:py-3.5 text-xs md:text-base font-medium text-[#1A1A1A] cursor-default flex items-center gap-1.5 md:gap-2.5 justify-center md:justify-start overflow-hidden">
                {skill.logo && <img src={skill.logo} alt={skill.name} className="w-3.5 h-3.5 md:w-5 md:h-5 object-contain shrink-0" />}
                <span className="truncate text-center md:text-left">{skill.name}</span>
              </div>
            ))}
          </div>

        </AnimatedSection>
      </div>
    </section>
  )
}