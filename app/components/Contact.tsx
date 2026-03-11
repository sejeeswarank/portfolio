import Icon from './Icons'
import AnimatedSection from './AnimatedSection'

export default function Contact() {
  const links = [
    { iconName: 'mail', label: 'EMAIL', value: 'sejeeswaran369@gmail.com', href: 'mailto:sejeeswaran369@gmail.com' },
    { iconName: 'phone', label: 'PHONE', value: '+91 8111010133', href: 'tel:+918111010133' },
    { iconName: 'linkedin', label: 'LINKEDIN', value: 'in/sejeeswarank', href: 'https://www.linkedin.com/in/sejeeswarank' },
    { iconName: 'github', label: 'GITHUB', value: 'github.com/sejeeswarank', href: 'https://github.com/sejeeswarank' },
  ]
  return (
    <section id="contact" className="py-36 px-10 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <AnimatedSection>
          <div className="text-sm font-semibold tracking-widest uppercase text-white/40 mb-4">Get In Touch</div>
          <h2 className="font-serif text-6xl md:text-7xl tracking-tight text-white mb-5">Let&apos;s Connect</h2>
          <p className="text-xl text-white/50 max-w-lg mx-auto leading-relaxed mb-16">
            I&apos;m a fresher actively looking for SDE opportunities. Feel free to reach out, I&apos;d love to chat!
          </p>
        </AnimatedSection>
        <AnimatedSection delay={120} className="flex justify-center gap-6 flex-wrap mb-24 stagger-children">
          {links.map(l => (
            <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 rounded-2xl px-10 py-6 flex items-center gap-5 text-lg font-medium hover:bg-white/10 hover:border-white/25 hover:-translate-y-1 transition-all duration-200">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white/70">
                <Icon name={l.iconName} size={24} />
              </div>
              <div className="text-left">
                <div className="text-sm text-white/40 tracking-widest mb-1">{l.label}</div>
                <div className="text-lg">{l.value}</div>
              </div>
            </a>
          ))}
        </AnimatedSection>
        <AnimatedSection delay={240}>
          <p className="font-serif text-4xl md:text-5xl italic text-white/30 tracking-tight max-w-3xl mx-auto leading-relaxed">
            &ldquo;I don&apos;t just learn technologies,<br />I build systems with them.&rdquo;
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}