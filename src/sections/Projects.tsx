import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Section } from '../components/Section'
import { SpotlightCard } from '../components/SpotlightCard'
import { ImageGallery } from '../components/ImageGallery'
import { projects, ctfBuilder, type Project } from '../data/content'

export function Projects() {
  return (
    <Section id="projects" eyebrow="02 / Work" title={<>Selected <span className="text-gradient">projects</span></>}>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
            className={p.featured ? 'md:col-span-2' : ''}
          >
            <ProjectCard project={p} defaultOpen={p.featured} />
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-center font-mono text-xs text-white/35">
        // more projects in progress — space reserved
      </p>

      {/* CTF Challenge Builder */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55 }}
        className="mt-10"
      >
        <SpotlightCard className="p-6 md:p-8" tilt={2}>
          <div className="grid gap-7 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <span className="tag uppercase text-cyan-soft/70">CTF · Challenge Author</span>
              <h3 className="mt-2 text-2xl font-bold text-white">{ctfBuilder.heading}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{ctfBuilder.blurb}</p>
              <div className="mt-4 flex gap-2.5 rounded-lg border border-amber-soft/25 bg-amber-soft/[0.06] p-3 text-xs leading-relaxed text-amber-soft/90">
                <span aria-hidden>⚠</span>
                <span>{ctfBuilder.liveNote}</span>
              </div>
            </div>
            <ImageGallery
              items={[ctfBuilder.listImage]}
              cols="grid-cols-1"
              aspect="aspect-[16/10]"
              fit="contain"
            />
          </div>
        </SpotlightCard>
      </motion.div>
    </Section>
  )
}

function ProjectCard({ project, defaultOpen = false }: { project: Project; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <SpotlightCard
      className={`flex h-full flex-col p-6 ${project.featured ? 'md:p-8 ring-1 ring-cyan-soft/20' : ''}`}
      tilt={project.featured ? 2 : 3}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="tag uppercase text-cyan-soft/70">
            {project.featured && <span className="mr-1.5 text-amber-soft">★ Featured</span>}
            {project.tag}
          </span>
          <h3 className={`mt-1.5 font-bold text-white ${project.featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
            {project.title}
          </h3>
        </div>
        {project.status && (
          <span
            className={`tag whitespace-nowrap rounded-full px-2.5 py-1 ${
              project.status === 'Active'
                ? 'bg-cyan-soft/15 text-cyan-soft'
                : 'bg-amber-soft/15 text-amber-soft'
            }`}
          >
            {project.status}
          </span>
        )}
      </div>

      <p className={`mt-3 leading-relaxed text-white/70 ${project.featured ? 'text-base md:text-lg md:max-w-3xl' : 'text-sm text-white/65'}`}>
        {project.summary}
      </p>

      {project.metrics && project.metrics.length > 0 && (
        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {project.metrics.map((m) => (
            <div key={m.label} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-center">
              <div className="text-gradient text-xl font-extrabold md:text-2xl">{m.value}</div>
              <div className="tag mt-0.5 uppercase text-white/45">{m.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span key={s} className="tag rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-white/65">
            {s}
          </span>
        ))}
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-5">
              <ul className="space-y-2">
                {project.details.map((d, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-white/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-glow" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              {project.images && project.images.length > 0 && (
                <div className="mt-5">
                  <p className="mb-2 font-mono text-xs uppercase tracking-widest text-white/40">
                    Screenshots
                  </p>
                  <ImageGallery items={project.images} cols="grid-cols-2 sm:grid-cols-3" />
                </div>
              )}

              {project.gallery ? <PlaceholderGallery title="Screenshots" count={project.gallery} /> : null}

              {project.note && (
                <div className="mt-5 flex gap-2.5 rounded-lg border border-amber-soft/25 bg-amber-soft/[0.06] p-3 text-xs leading-relaxed text-amber-soft/90">
                  <span aria-hidden>⚠</span>
                  <span>{project.note}</span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-5 flex flex-wrap items-center gap-2 pt-1">
        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-lg border border-white/12 bg-white/[0.04] px-3.5 py-2 text-sm font-medium text-white/85 transition-colors hover:border-cyan-soft/40 hover:text-white"
        >
          {open ? 'Hide details' : 'Expand details'}
        </button>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/12 px-3.5 py-2 text-sm text-white/70 transition-colors hover:border-white/30 hover:text-white"
          >
            GitHub
          </a>
        )}
        {project.caseStudy && (
          <a
            href={project.caseStudy}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-gradient-to-r from-indigo-glow to-electric px-3.5 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
          >
            {project.caseStudy.endsWith('.pdf') ? 'Read report (PDF)' : 'Case study'}
          </a>
        )}
      </div>
    </SpotlightCard>
  )
}

function PlaceholderGallery({ title, count }: { title: string; count: number }) {
  if (!count) return null
  return (
    <div className="mt-5">
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-white/40">{title}</p>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="group/ph relative flex aspect-video items-center justify-center overflow-hidden rounded-lg border border-indigo-glow/20 bg-midnight-700/60"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(99,102,241,0.08),transparent)]" />
            <span className="font-mono text-[10px] text-white/25 transition-colors group-hover/ph:text-white/45">
              SOON {i + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
