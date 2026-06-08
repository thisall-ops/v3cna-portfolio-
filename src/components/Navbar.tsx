import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certs' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'cv', label: 'CV' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 ${
          scrolled ? '' : ''
        }`}
      >
        <a
          href="#top"
          className={`flex items-center gap-2 rounded-xl px-3 py-2 font-mono text-sm font-bold tracking-widest transition-all ${
            scrolled ? 'glass' : ''
          }`}
        >
          <span className="whitespace-nowrap">
            <span className="text-cyan-soft">V3</span><span className="text-white">CNA</span>
          </span>
        </a>

        <div
          className={`hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex ${
            scrolled ? 'glass' : 'glass'
          }`}
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${
                active === l.id ? 'text-white' : 'text-white/55 hover:text-white'
              }`}
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-white/10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#cv"
          className="hidden rounded-full bg-gradient-to-r from-indigo-glow to-electric px-4 py-2 text-sm font-medium text-white shadow-glow transition-transform hover:scale-105 md:inline-block"
        >
          Resume
        </a>
      </nav>
    </motion.header>
  )
}
