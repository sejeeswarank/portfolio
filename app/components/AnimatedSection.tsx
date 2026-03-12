'use client'
import { useEffect, useRef, ReactNode, CSSProperties } from 'react'

type Props = Readonly<{
  children: ReactNode
  className?: string
  delay?: number // ms
  as?: keyof JSX.IntrinsicElements
  style?: CSSProperties
}>

export default function AnimatedSection({ children, className = '', delay = 0, as: Tag = 'div', style }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={`fade-up ${className}`} style={style}>
      {children}
    </Tag>
  )
}
