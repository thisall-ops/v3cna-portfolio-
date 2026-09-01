import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section } from '../components/Section'
import { SpotlightCard } from '../components/SpotlightCard'
import { ImageGallery } from '../components/ImageGallery'
import { Lightbox } from '../components/Lightbox'
import { academicQuals, certifications, credentials } from '../data/content'

export function Certifications() {
  const credentialItems = credentials.map((c) => ({
    src: c.image!,
    caption: c.caption ?? c.title,
  }))

  const certImages = certifications
    .filter((c) => c.image)
    .map((c) => ({ src: c.image!, caption: c.caption ?? c.title }))
  const academicItems = academicQuals
    .filter((c) => c.image)
    .map((c) => ({ src: c.image!, caption: c.caption ?? c.title }))
  const [activeCert, setActiveCert] = useState<number | null>(null)

  return (
    <Section id="certifications" eyebrow="03 / Credentials" title={<>Certifications <span className="text-gradient">& training</span></>}>
      {/* Academic qualifications — CICRA pathway */}
      <h3 className="mb-2 font-mono text-sm uppercase tracking-widest text-white/45">// Academic qualifications</h3>
      <p className="mb-5 max-w-2xl text-sm text-white/55">
        The CICRA Campus pathway — Foundation to Advanced Diploma. Tap any certificate to view it full-size.
      </p>
      <ImageGallery
        items={academicItems}
        cols="grid-cols-1 sm:grid-cols-3"
        aspect="aspect-[3/4]"
        fit="contain"
      />

      {/* Professional certifications & training */}
      <h3 className="mb-5 mt-14 font-mono text-sm uppercase tracking-widest text-white/45">// Professional certifications & training</h3>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
          >
            <SpotlightCard className="flex h-full flex-col overflow-hidden" tilt={3}>
              {c.image ? (
                <button
                  type="button"
                  data-cursor
                  onClick={() => setActiveCert(certImages.findIndex((it) => it.src === c.image))}
                  className="group relative block aspect-[4/3] w-full overflow-hidden border-b border-white/8 bg-midnight-700/60"
                >
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <span className="pointer-events-none absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-md glass text-xs text-white/70 opacity-0 transition-opacity group-hover:opacity-100">
                    ⤢
                  </span>
                </button>
              ) : (
                <div className="relative flex aspect-[4/3] items-center justify-center border-b border-white/8 bg-midnight-700/60">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.16),transparent_60%)]" />
                  <div className="text-center">
                    <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-soft/30 font-mono text-cyan-soft">
                      {'</>'}
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
                      {c.status.toLowerCase()}
                    </span>
                  </div>
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="tag text-white/45">{c.issuer}</span>
                  <span
                    className={`tag rounded-full px-2 py-0.5 ${
                      c.status === 'Completed' ? 'bg-emerald-400/15 text-emerald-300' : 'bg-amber-soft/15 text-amber-soft'
                    }`}
                  >
                    {c.status}
                  </span>
                </div>
                <h3 className="font-semibold leading-snug text-white">{c.title}</h3>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="tag text-white/40">{c.date}</span>
                  {c.verify && c.verify !== '#' && (
                    <a
                      href={c.verify}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-cyan-soft/90 underline-offset-4 transition-colors hover:text-cyan-soft hover:underline"
                    >
                      Verify &#8599;
                    </a>
                  )}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      <Lightbox
        items={certImages}
        index={activeCert}
        onClose={() => setActiveCert(null)}
        onNavigate={setActiveCert}
      />

      {/* Earned credentials gallery */}
      <h3 className="mb-2 mt-14 font-mono text-sm uppercase tracking-widest text-white/45">// Competition certificates</h3>
      <p className="mb-5 max-w-2xl text-sm text-white/55">
        Tap any certificate to view it full-size.
      </p>
      <ImageGallery
        items={credentialItems}
        cols="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
        aspect="aspect-[4/3]"
        fit="cover"
      />
    </Section>
  )
}
