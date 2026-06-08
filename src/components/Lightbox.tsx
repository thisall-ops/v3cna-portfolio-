import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export type LightboxItem = {
  src: string
  caption?: string
}

type Props = {
  items: LightboxItem[]
  index: number | null
  onClose: () => void
  onNavigate: (next: number) => void
}

/**
 * Full-screen image viewer with caption, keyboard nav, and backdrop blur.
 * Used by every image gallery in the portfolio.
 */
export function Lightbox({ items, index, onClose, onNavigate }: Props) {
  const open = index !== null
  const item = open ? items[index!] : null

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate((index! + 1) % items.length)
      if (e.key === 'ArrowLeft') onNavigate((index! - 1 + items.length) % items.length)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, index, items.length, onClose, onNavigate])

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9990] flex items-center justify-center bg-midnight-900/85 p-4 backdrop-blur-md md:p-10"
          onClick={onClose}
        >
          {/* close */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full glass text-white/80 transition-colors hover:text-cyan-soft"
          >
            ✕
          </button>

          {items.length > 1 && (
            <>
              <button
                aria-label="Previous"
                onClick={(e) => { e.stopPropagation(); onNavigate((index! - 1 + items.length) % items.length) }}
                className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full glass text-white/80 transition-colors hover:text-cyan-soft md:left-6"
              >
                ‹
              </button>
              <button
                aria-label="Next"
                onClick={(e) => { e.stopPropagation(); onNavigate((index! + 1) % items.length) }}
                className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full glass text-white/80 transition-colors hover:text-cyan-soft md:right-6"
              >
                ›
              </button>
            </>
          )}

          <motion.figure
            key={index}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-full max-w-5xl flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={item.src}
              alt={item.caption ?? ''}
              className="max-h-[78vh] w-auto rounded-xl border border-white/10 object-contain shadow-glow"
            />
            {item.caption && (
              <figcaption className="max-w-2xl text-center text-sm text-white/70">
                {item.caption}
                {items.length > 1 && (
                  <span className="ml-2 font-mono text-xs text-white/35">
                    {index! + 1}/{items.length}
                  </span>
                )}
              </figcaption>
            )}
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
