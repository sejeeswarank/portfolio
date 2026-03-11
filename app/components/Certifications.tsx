import { certifications } from '../data'
import Icon from './Icons'
import AnimatedSection from './AnimatedSection'

export default function Certifications() {
  return (
    <section id="certifications" className="py-36 px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-20">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#1B4FD8] mb-3">Credentials</div>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-4">Certifications</h2>
          <p className="text-base text-[#888] max-w-lg leading-relaxed">Industry recognized credentials spanning project management, security, AI, and cloud.</p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <AnimatedSection key={i} delay={i * 70 + 80}>
              <a href={cert.url} target="_blank" rel="noopener noreferrer"
                className="cert-card group bg-[#FAF8F5] border border-[#E8E4DE] rounded-3xl p-8 relative block h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 bg-[#EEF2FF] rounded-xl flex items-center justify-center text-[#1B4FD8]">
                    <Icon name="award" size={20} />
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase text-[#1B4FD8]">{cert.issuer}</span>
                </div>
                <div className="text-base font-semibold text-[#1A1A1A] leading-snug pr-10">{cert.name}</div>
                <div className="absolute bottom-6 right-6 text-[#888] group-hover:text-[#1B4FD8] transition-colors duration-200">
                  <Icon name="arrowUpRight" size={18} />
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
