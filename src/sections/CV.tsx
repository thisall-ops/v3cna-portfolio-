import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Section } from '../components/Section'
import { SpotlightCard } from '../components/SpotlightCard'
import { profile } from '../data/content'

export function CV() {
  const [preview, setPreview] = useState(false)

  return (
    <Section id="cv" eyebrow="05 / Document" title={<>Curriculum <span className="text-gradient">vitae</span></>}>
      <SpotlightCard className="p-7 md:p-10" tilt={2}>
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h3 className="text-2xl font-bold text-white">Full résumé, on demand.</h3>
            <p className="mt-3 max-w-xl text-white/65">
              A one-page, recruiter-ready overview of {profile.name.split(' ')[0]}&apos;s skills,
              projects, achievements, and education. Preview it inline or download the PDF.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={profile.cv}
                download
                className="rounded-xl bg-gradient-to-r from-indigo-glow to-electric px-5 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
              >
&#8595; Download CV
              </a>
              <button
                onClick={() => setPreview((p) => !p)}
                className="rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/85 transition-colors hover:border-cyan-soft/40 hover:text-white"
              >
                {preview ? 'Close preview' : 'Preview CV'}
              </button>
            </div>
          </div>

          <div className="relative hidden h-40 w-32 shrink-0 rotate-3 overflow-hidden rounded-lg border border-white/10 bg-midnight-700 shadow-glow md:block">
            <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(99,102,241,0.18),transparent)]" />
            <div className="space-y-1.5 p-3">
              <div className="h-2 w-12 rounded bg-cyan-soft/50" />
              <div className="h-1.5 w-20 rounded bg-white/20" />
              <div className="mt-3 h-1 w-full rounded bg-white/10" />
              <div className="h-1 w-full rounded bg-white/10" />
              <div className="h-1 w-3/4 rounded bg-white/10" />
              <div className="mt-3 h-1 w-full rounded bg-white/10" />
              <div className="h-1 w-2/3 rounded bg-white/10" />
            </div>
          </div>
        </div>

        <AnimatePresence>
          {preview && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-8 overflow-hidden rounded-xl border border-white/10">
                <object data={profile.cv} type="application/pdf" className="h-[70vh] w-full bg-midnight-700">
                  <div className="p-8 text-center text-white/60">
                    Inline preview unavailable.{' '}
                    <a href={profile.cv} className="text-cyan-soft underline" target="_blank" rel="noreferrer">
                      Open the PDF
                    </a>
                  </div>
                </object>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </SpotlightCard>
    </Section>
  )
}
