import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  id: string
  eyebrow: string
  title: ReactNode
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, children, className = '' }: Props) {
  return (
    <section id={id} className={`relative z-10 mx-auto w-full max-w-6xl px-6 py-24 md:py-32 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-cyan-soft to-transparent" />
          <span className="tag uppercase text-cyan-soft/80">{eyebrow}</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      </motion.div>
      {children}
    </section>
  )
}
