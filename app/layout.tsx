import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'Sejeeswaran K',
  description: 'Pre-Final year B.E. CSE (Blockchain Technology) student. I build real world systems combining Blockchain, AI/ML, and Cloud Security. Open to SDE Internships.',
  keywords: ['Blockchain Developer', 'AI Builder', 'Full Stack', 'SDE Intern', 'Solidity', 'Python', 'React'],
  authors: [{ name: 'Sejeeswaran K' }],
  openGraph: {
    title: 'Sejeeswaran K Portfolio',
    description: 'Blockchain Developer · Full-Stack Engineer · AI Builder',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/ksa.ico' },
      { url: '/ksa-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/ksa-192.png',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${dmSerif.variable} font-sans bg-cream text-ink antialiased`}>
        {children}
      </body>
    </html>
  )
}
