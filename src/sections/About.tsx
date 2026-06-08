import { motion } from 'framer-motion'
import { Section } from '../components/Section'
import { SpotlightCard } from '../components/SpotlightCard'
import { about, skillGroups, education } from '../data/content'

export function About() {
  return (
    <Section id="about" eyebrow="01 / Profile" title={<>About <span className="text-gradient">the operator</span></>}>
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <SpotlightCard className="p-7 md:p-9">
          <p className="text-lg font-medium leading-relaxed text-white/90 md:text-xl">{about.lead}</p>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-white/65">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </SpotlightCard>

        <div className="grid grid-cols-2 gap-4">
          {about.facts.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <SpotlightCard className="h-full p-5">
                <p className="tag uppercase text-cyan-soft/70">{f.label}</p>
                <p className="mt-2 text-sm font-medium text-white/90">{f.value}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* skills */}
      <div className="mt-10">
        <h3 className="mb-5 font-mono text-sm uppercase tracking-widest text-white/45">// Capabilities</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <SpotlightCard className="h-full p-5">
                <p className="mb-3 text-sm font-semibold text-white">{g.title}</p>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="tag rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-white/70"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* education */}
      <div className="mt-10">
        <h3 className="mb-5 font-mono text-sm uppercase tracking-widest text-white/45">// Education</h3>
        <div className="space-y-3">
          {education.map((e) => (
            <SpotlightCard key={e.title} className="flex flex-col gap-1 p-5 md:flex-row md:items-center md:justify-between" tilt={2}>
              <div>
                <p className="font-medium text-white">{e.title}</p>
                <p className="text-sm text-white/55">{e.org}</p>
              </div>
              <span className="tag whitespace-nowrap rounded-md border border-indigo-glow/30 bg-indigo-glow/10 px-2.5 py-1 text-indigo-200">
                {e.date}
              </span>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </Section>
  )
}
