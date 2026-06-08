import { useState } from 'react'
import { Lightbox, type LightboxItem } from './Lightbox'

type Props = {
  items: LightboxItem[]
  /** tailwind grid cols classes */
  cols?: string
  /** aspect ratio for thumbnails */
  aspect?: string
  /** object-fit cover or contain */
  fit?: 'cover' | 'contain'
}

/**
 * Responsive thumbnail grid that opens a shared Lightbox.
 * Captions appear on hover and inside the lightbox.
 */
export function ImageGallery({
  items,
  cols = 'grid-cols-2 sm:grid-cols-3',
  aspect = 'aspect-video',
  fit = 'cover',
}: Props) {
  const [active, setActive] = useState<number | null>(null)

  return (
    <>
      <div className={`grid gap-3 ${cols}`}>
        {items.map((it, i) => (
          <button
            key={i}
            data-cursor
            onClick={() => setActive(i)}
            className="group relative block overflow-hidden rounded-xl border border-white/10 bg-midnight-700/60 text-left transition-colors hover:border-cyan-soft/40"
          >
            <div className={aspect}>
              <img
                src={it.src}
                alt={it.caption ?? ''}
                loading="lazy"
                className={`h-full w-full object-${fit} transition-transform duration-500 group-hover:scale-[1.05]`}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight-900/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {it.caption && (
              <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-3 text-xs leading-snug text-white/90 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {it.caption}
              </span>
            )}
            <span className="pointer-events-none absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-md glass text-xs text-white/70 opacity-0 transition-opacity group-hover:opacity-100">
              ⤢
            </span>
          </button>
        ))}
      </div>

      <Lightbox
        items={items}
        index={active}
        onClose={() => setActive(null)}
        onNavigate={setActive}
      />
    </>
  )
}
