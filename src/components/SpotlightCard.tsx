import { useRef, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  /** max tilt in degrees */
  tilt?: number
}

/**
 * Card that gently responds to the cursor: a soft spotlight glow follows
 * the pointer and the card tilts subtly in 3D. Pure DOM updates — no
 * re-renders. Professional, low-motion.
 */
export function SpotlightCard({ children, className = '', tilt = 4 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    el.style.setProperty('--spot-x', `${px * 100}%`)
    el.style.setProperty('--spot-y', `${py * 100}%`)
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * tilt}deg) rotateY(${(px - 0.5) * tilt}deg)`
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative overflow-hidden rounded-2xl glass transition-transform duration-200 ease-out ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(420px circle at var(--spot-x,50%) var(--spot-y,50%), rgba(99,102,241,0.16), transparent 60%)',
        }}
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
