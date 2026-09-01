import { useRef, useState } from 'react'
import { profile } from '../data/content'

/**
 * Premium HUD "identity" frame: animated gradient border, duotone-on-hover
 * portrait, scanning highlight, corner brackets, a live status chip, and a
 * bottom identity plate. Subtle 3D parallax on pointer move.
 */
export function PhotoFrame() {
  const ref = useRef<HTMLDivElement>(null)
  const [hover, setHover] = useState(false)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(1100px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg)`
  }
  const onLeave = () => {
    setHover(false)
    if (ref.current) ref.current.style.transform = 'perspective(1100px) rotateY(0) rotateX(0)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={onLeave}
      className="glow-frame animate-border-flow relative w-full self-stretch shadow-glow transition-transform duration-200 ease-out"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative h-full min-h-[360px] overflow-hidden rounded-[16px] bg-midnight-700 md:min-h-[440px]">
        <img
          src={profile.photo}
          alt={`${profile.name} — ${profile.handle}`}
          loading="eager"
          className="h-full w-full object-cover object-center transition-all duration-500"
          style={{
            filter: hover
              ? 'contrast(1.08) saturate(1.12)'
              : 'contrast(1.05) saturate(0.9) brightness(0.98)',
            transform: hover ? 'scale(1.03)' : 'scale(1)',
          }}
        />

        {/* duotone / brand tint that lifts on hover */}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-color transition-opacity duration-500"
          style={{
            background: 'linear-gradient(150deg, rgba(37,99,235,0.55), rgba(34,211,238,0.28))',
            opacity: hover ? 0 : 0.35,
          }}
        />

        {/* bottom fade for legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight-900 via-midnight-900/15 to-transparent" />

        {/* faint HUD grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '34px 34px',
            maskImage: 'radial-gradient(circle at 50% 40%, black 0%, transparent 75%)',
          }}
        />

        {/* scan line */}
        <div className="scanline pointer-events-none absolute inset-x-0 h-28" aria-hidden />

        {/* corner brackets */}
        {[
          'left-3 top-3 border-l-2 border-t-2',
          'right-3 top-3 border-r-2 border-t-2',
          'left-3 bottom-3 border-l-2 border-b-2',
          'right-3 bottom-3 border-r-2 border-b-2',
        ].map((c) => (
          <span key={c} className={`pointer-events-none absolute h-7 w-7 border-cyan-soft/70 ${c}`} />
        ))}

        {/* top status chip */}
        <div className="pointer-events-none absolute right-3 top-3 flex items-center gap-1.5 rounded-md glass px-2.5 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-200/90">Verified</span>
        </div>

        {/* identity plate */}
        <div className="absolute inset-x-3 bottom-3 rounded-xl glass px-3.5 py-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-soft animate-pulse-glow" />
              <span className="font-mono text-xs tracking-widest text-white/85">@{profile.handle}</span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">{profile.location.split(',')[0]}</span>
          </div>
          <p className="mt-1.5 text-sm font-semibold text-white">{profile.name}</p>
          <p className="font-mono text-[11px] text-cyan-soft/80">{profile.roles[0]} · {profile.roles[1]}</p>
        </div>
      </div>
    </div>
  )
}
