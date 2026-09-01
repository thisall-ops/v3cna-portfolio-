import { motion } from 'framer-motion'
import { Terminal } from '../components/Terminal'
import { PhotoFrame } from '../components/PhotoFrame'
import { profile } from '../data/content'

export function Hero() {
  return (
    <section id="top" className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 pb-16 pt-28 md:pt-24">
      {/* heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-soft opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-soft" />
          </span>
          <span className="tag text-white/60">OPEN TO SECURITY INTERNSHIPS · VAPT / APPSEC</span>
        </div>

        <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          <span className="text-gradient">THISAL</span>{' '}
          <span className="text-white">ARIYARATNE</span>
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-white/55">
          {profile.roles.map((r, i) => (
            <span key={r} className="flex items-center gap-3">
              {i > 0 && <span className="text-indigo-400/50">/</span>}
              <span>{r}</span>
            </span>
          ))}
        </div>
      </motion.div>

      {/* split layout */}
      <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <Terminal />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex"
        >
          <PhotoFrame />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mx-auto mt-14 flex flex-col items-center gap-2 text-white/40 transition-colors hover:text-cyan-soft"
      >
        <span className="tag">SCROLL</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="text-lg"
        >
          &#8595;
        </motion.span>
      </motion.a>
    </section>
  )
}
