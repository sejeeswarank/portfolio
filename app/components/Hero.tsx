'use client'
import { useEffect, useRef } from 'react'
import Icon from './Icons'

const stats = [
  { num: '6+', label: 'Projects Built' },
  { num: '25+', label: 'Technologies' },
  { num: '318', label: 'Contributions' },
  { num: '7.9', label: 'CGPA' },
]

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.querySelectorAll('.stat-num').forEach((n, i) => {
          ; (n as HTMLElement).style.animationDelay = `${0.8 + i * 0.12}s`
        })
        observer.unobserve(el)
      }
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-12 px-5 md:px-10 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(27,79,216,0.07) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(#E8E4DE 1px, transparent 1px), linear-gradient(90deg, #E8E4DE 1px, transparent 1px)', backgroundSize: '72px 72px', maskImage: 'radial-gradient(ellipse 70% 70% at 80% 50%, black 0%, transparent 70%)' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">

          <h1 className="fade-up visible font-serif tracking-tight leading-[1.02] mb-4 md:mb-5" style={{ fontSize: 'clamp(2.2rem, 7vw, 6rem)', transitionDelay: '0.2s' }}>
            Sejees<em className="text-[#1B4FD8] not-italic">waran</em> K
          </h1>
          <p className="fade-up visible text-base md:text-lg text-[#4A4A4A] mb-4 md:mb-6 tracking-tight" style={{ transitionDelay: '0.32s' }}>
            Software Development Engineer · Blockchain · AI Builder
          </p>
          <p className="fade-up visible text-sm md:text-base text-[#888] leading-relaxed max-w-2xl mb-8 md:mb-12" style={{ transitionDelay: '0.42s' }}>
            Pre-Final year B.E. CSE (Blockchain Technology) student at Sathyabama Institute of Science and Technology.
            I build real world systems combining Blockchain, AIML, and Cloud Security, not just toy projects.
          </p>
          <div className="fade-up visible flex gap-3 md:gap-4 flex-wrap mb-8" style={{ transitionDelay: '0.52s' }}>
            <a href="#projects" className="bg-[#1B4FD8] text-white px-5 md:px-7 py-3 md:py-3.5 rounded-xl font-semibold text-sm md:text-base hover:bg-[#1440B8] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#1B4FD8]/25 flex items-center gap-2">
              View My Work <Icon name="arrowUpRight" size={16} />
            </a>
            <a href="mailto:sejeeswaran369@gmail.com" className="border-2 border-[#E8E4DE] text-[#1A1A1A] px-5 md:px-7 py-3 md:py-3.5 rounded-xl font-semibold text-sm md:text-base hover:border-[#1A1A1A] transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2">
              <Icon name="mail" size={16} /> Get in Touch
            </a>
            <a href="/Sejeeswarank_Resume.pdf" download className="border-2 border-[#E8E4DE] text-[#1A1A1A] px-5 md:px-7 py-3 md:py-3.5 rounded-xl font-semibold text-sm md:text-base hover:border-[#1A1A1A] transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2">
              <Icon name="download" size={16} /> Resume
            </a>
          </div>
          <div ref={statsRef} className="grid grid-cols-2 md:flex md:gap-12 gap-6 pt-6 md:pt-8 border-t-2 border-[#E8E4DE] fade-up visible" style={{ transitionDelay: '0.62s' }}>
            {stats.map(s => (
              <div key={s.label}>
                <div className="stat-num font-serif text-3xl md:text-4xl tracking-tight text-[#1A1A1A] leading-none mb-1.5">{s.num}</div>
                <div className="text-xs md:text-sm text-[#888] tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}