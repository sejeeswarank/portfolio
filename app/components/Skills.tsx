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
        <AnimatedSection delay={100} className="flex flex-col md:grid md:grid-cols-[280px_1fr] gap-6 md:gap-12 items-start">
          {/* Category buttons — horizontal scroll on mobile, vertical on desktop */}
          <div className="flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-x-visible pb-1 md:pb-0 -mx-5 md:mx-0 px-5 md:px-0 scrollbar-none">
            {skillCategories.map(cat => (
              <button key={cat.id} onClick={() => setActive(cat.id)}
                className={`text-left px-4 md:px-5 py-3 md:py-4 rounded-2xl border text-sm md:text-base font-medium flex items-center gap-2 md:gap-3 transition-all duration-200 whitespace-nowrap shrink-0 md:shrink md:w-full ${active === cat.id ? 'bg-[#1B4FD8] text-white border-[#1B4FD8]' : 'bg-white text-[#4A4A4A] border-[#E8E4DE] hover:border-[#1B4FD8] hover:text-[#1B4FD8]'}`}>
                <Icon name={cat.icon} size={18} /> {cat.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {current.skills.map(skill => (
              <div key={skill.name} className="skill-chip bg-white border border-[#E8E4DE] rounded-2xl px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base font-medium text-[#1A1A1A] cursor-default flex items-center gap-2 md:gap-2.5">
                {skill.logo && <img src={skill.logo} alt={skill.name} className="w-4 h-4 md:w-5 md:h-5 object-contain" />}
                {skill.name}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}