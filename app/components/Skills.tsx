'use client'
import { useState } from 'react'
import { skillCategories } from '../data'
import Icon from './Icons'
import AnimatedSection from './AnimatedSection'

export default function Skills() {
  const [active, setActive] = useState('languages')
  const current = skillCategories.find(c => c.id === active)!
  return (
    <section id="skills" className="py-36 px-10 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-20">
          <div className="text-sm font-semibold tracking-widest uppercase text-[#1B4FD8] mb-4">Expertise</div>
          <h2 className="font-serif text-6xl md:text-7xl tracking-tight mb-5">Tech Stack</h2>
          <p className="text-xl text-[#888] max-w-xl leading-relaxed">Technologies I use to build end to end systems from smart contracts to cloud deployments.</p>
        </AnimatedSection>
        <AnimatedSection delay={100} className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-3">
            {skillCategories.map(cat => (
              <button key={cat.id} onClick={() => setActive(cat.id)}
                className={`text-left px-6 py-5 rounded-2xl border text-lg font-medium flex items-center gap-4 transition-all duration-200 ${active === cat.id ? 'bg-[#1B4FD8] text-white border-[#1B4FD8]' : 'bg-white text-[#4A4A4A] border-[#E8E4DE] hover:border-[#1B4FD8] hover:text-[#1B4FD8]'}`}>
                <Icon name={cat.icon} size={20} /> {cat.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {current.skills.map(skill => (
              <div key={skill.name} className="skill-chip bg-white border border-[#E8E4DE] rounded-2xl px-7 py-5 text-lg font-medium text-[#1A1A1A] cursor-default">
                {skill.name}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
