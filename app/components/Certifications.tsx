import { certifications } from '../data'
import Icon from './Icons'
import AnimatedSection from './AnimatedSection'

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 md:py-16 px-5 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-8 md:mb-10">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#1B4FD8] mb-3">Credentials</div>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight mb-4">Certifications</h2>
          <p className="text-sm md:text-base text-[#888] max-w-lg leading-relaxed">Industry recognized credentials spanning project management, security, AI, and cloud.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {certifications.map((cert, i) => (
            <AnimatedSection key={cert.name} delay={i * 70 + 80}>
              <a href={cert.url} target="_blank" rel="noopener noreferrer"
                className="cert-card group bg-[#FAF8F5] border border-[#E8E4DE] rounded-3xl p-6 md:p-8 relative block h-full">
                <div className="flex items-center gap-3 mb-4 md:mb-5">
                  <div className="w-10 h-10 md:w-11 md:h-11 bg-[#EEF2FF] rounded-xl flex items-center justify-center text-[#1B4FD8]">
                    <Icon name="award" size={18} />
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase text-[#1B4FD8]">{cert.issuer}</span>
                </div>
                <div className="text-sm md:text-base font-semibold text-[#1A1A1A] leading-snug pr-8">{cert.name}</div>
                <div className="absolute bottom-5 right-5 md:bottom-6 md:right-6 text-[#888] group-hover:text-[#1B4FD8] transition-colors duration-200">
                  <Icon name="arrowUpRight" size={16} />
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}