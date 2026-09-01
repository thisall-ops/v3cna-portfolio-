import { useRef } from 'react'
import { profile } from '../data/content'

/**
 * Framed professional photo. The portrait itself is shown AS-IS — no colour
 * filter, tint, duotone, or scan overlay on the image. Only frame chrome
 * (gradient border, corner brackets, handle plate) sits around it, plus a
 * subtle bottom fade so the @handle plate stays legible.
 */
export function PhotoFrame() {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(1000px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg)`
  }
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="glow-frame animate-border-flow relative w-full self-stretch shadow-glow transition-transform duration-200 ease-out"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative h-full min-h-[340px] overflow-hidden rounded-[16px] bg-midnight-700 md:min-h-[400px]">
        <img
          src={profile.photo}
          alt={`${profile.name} — ${profile.handle}`}
          loading="eager"
          className="h-full w-full object-cover object-center"
        />

        {/* subtle bottom fade — only for handle-plate legibility, no colour cast */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-midnight-900/80 to-transparent" />

        {/* corner brackets (frame chrome, not on the photo) */}
        {['left-3 top-3 border-l-2 border-t-2', 'right-3 top-3 border-r-2 border-t-2', 'left-3 bottom-3 border-l-2 border-b-2', 'right-3 bottom-3 border-r-2 border-b-2'].map((c) => (
          <span key={c} className={`pointer-events-none absolute h-6 w-6 border-cyan-soft/70 ${c}`} />
        ))}

        {/* handle plate */}
        <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-2 rounded-md glass px-2.5 py-1.5">
          <span className="h-2 w-2 rounded-full bg-cyan-soft animate-pulse-glow" />
          <span className="font-mono text-xs tracking-widest text-white/80">@{profile.handle}</span>
        </div>
      </div>
    </div>
  )
}
