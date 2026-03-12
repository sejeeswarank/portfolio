import Image from 'next/image'
import { projects } from '../data'
import Icon from './Icons'
import AnimatedSection from './AnimatedSection'

function ProjectLogo({ logo, name, size, logoBg }: Readonly<{ logo: string; name: string; size: number; logoBg?: string }>) {
  if (logoBg) {
    return (
      <div className="rounded-2xl shrink-0 overflow-hidden flex items-center justify-center" style={{ width: size, height: size, background: logoBg }}>
        <Image src={logo} alt={name} width={size} height={size} className="object-contain" />
      </div>
    )
  }
  return <Image src={logo} alt={name} width={size} height={size} className="object-contain rounded-2xl" />
}

export default function Projects() {
  const featured = projects.find(p => p.featured)!
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-16 px-10 bg-white">
      <div className="max-w-7xl mx-auto">

        <AnimatedSection className="mb-10">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#1B4FD8] mb-3">Work</div>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-4">Featured Projects</h2>
          <p className="text-base text-[#888] max-w-xl leading-relaxed">Real world systems built with Blockchain, AI, and Cloud where each solving a genuine problem.</p>
        </AnimatedSection>

        {/* Featured */}
        <AnimatedSection delay={100} className="rounded-3xl border border-[#1B4FD8]/15 bg-gradient-to-br from-[#EEF2FF] to-[#F8F9FF] p-12 md:p-16 grid md:grid-cols-2 gap-14 items-start mb-10">
          <div className="flex flex-col justify-between h-full">
            <div className="flex items-center gap-4 md:gap-5 mb-4 md:mb-5">
              <ProjectLogo logo={featured.logo} name={featured.name} size={52} logoBg={featured.logoBg} />
              <div>
                <h3 className="font-serif text-xl md:text-2xl tracking-tight">{featured.name}</h3>
                {featured.status === 'ongoing' && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    {' '}In Progress
                  </span>
                )}
              </div>
            </div>
            <p className="text-base text-[#4A4A4A] leading-relaxed mb-7">{featured.desc}</p>
            <div className="flex flex-wrap gap-3 mb-9">
              {featured.tags.map(t => (
                <span key={t} className="bg-[#EEF2FF] text-[#1B4FD8] text-sm font-medium px-4 py-2 rounded-full">{t}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={featured.liveUrl!} target="_blank" className="bg-[#1B4FD8] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-[#1440B8] transition-colors flex items-center gap-2">
                <Icon name="externalLink" size={14} /> Live Demo
              </a>
              <a href={featured.githubUrl} target="_blank" className="border-2 border-[#E8E4DE] text-[#1A1A1A] text-sm font-semibold px-6 py-3 rounded-xl hover:border-[#1A1A1A] transition-colors flex items-center gap-2">
                <Icon name="github" size={15} /> GitHub
              </a>
            </div>
          </div>
          {/* Pipeline */}
          <div className="bg-white rounded-2xl border border-[#1B4FD8]/10 p-8 flex flex-col gap-5">
            <div className="text-sm font-bold tracking-widest uppercase text-[#888] mb-2">How It Works</div>
            {featured.pipeline?.map((step, i) => (
              <div key={step.label}>
                <div className="flex items-center gap-4 bg-[#FAF8F5] rounded-xl px-5 py-4 border border-[#E8E4DE]">
                  <div className="w-12 h-12 bg-[#EEF2FF] rounded-xl flex items-center justify-center text-[#1B4FD8] shrink-0">
                    <Icon name={step.icon} size={22} />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-[#1A1A1A]">{step.label}</div>
                    <div className="text-sm text-[#888] mt-0.5">{step.sub}</div>
                  </div>
                </div>
                {i < (featured.pipeline?.length ?? 0) - 1 && (
                  <div className="flex justify-center my-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1B4FD8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {rest.map((p, i) => (
            <AnimatedSection key={p.id} delay={i * 80 + 150} className="project-card group bg-[#FAF8F5] border border-[#E8E4DE] rounded-3xl p-9 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/5 hover:border-transparent transition-all duration-300 relative overflow-hidden">
              <div className="hover-bar absolute top-0 left-0 right-0 h-0.5 bg-[#1B4FD8]" />
              <div className="flex items-start justify-between mb-7">
                <ProjectLogo logo={p.logo} name={p.name} size={60} logoBg={p.logoBg} />
                <div className="flex gap-2.5">
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" className="w-10 h-10 border border-[#E8E4DE] bg-white rounded-xl flex items-center justify-center text-[#888] hover:border-[#1B4FD8] hover:text-[#1B4FD8] transition-all duration-200">
                      <Icon name="externalLink" size={16} />
                    </a>
                  )}
                  <a href={p.githubUrl} target="_blank" className="w-10 h-10 border border-[#E8E4DE] bg-white rounded-xl flex items-center justify-center text-[#888] hover:border-[#1B4FD8] hover:text-[#1B4FD8] transition-all duration-200">
                    <Icon name="github" size={17} />
                  </a>
                </div>
              </div>
              <h3 className="font-serif text-xl tracking-tight mb-2">{p.name}</h3>
              <p className="text-[#888] text-sm leading-relaxed mb-5">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="bg-[#F0F0F0] text-[#4A4A4A] text-sm font-medium px-3.5 py-1.5 rounded-full">{t}</span>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}