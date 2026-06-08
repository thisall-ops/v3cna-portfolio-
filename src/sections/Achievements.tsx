import { motion } from 'framer-motion'
import { Section } from '../components/Section'
import { ImageGallery } from '../components/ImageGallery'
import { achievements } from '../data/content'

const rankStyle = (rank: string) => {
  if (rank.includes('1st Place')) return 'from-amber-soft to-amber-300 text-midnight-900'
  if (rank.includes('1st Runners')) return 'from-indigo-200 to-slate-300 text-midnight-900'
  if (rank.includes('2nd Runners')) return 'from-amber-700/80 to-amber-500/80 text-white'
  return 'from-indigo-glow to-electric text-white'
}

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="04 / Track Record" title={<>Competition <span className="text-gradient">achievements</span></>}>
      <div className="relative">
        {/* center/left rail */}
        <div className="absolute left-[7px] top-2 h-full w-px bg-gradient-to-b from-cyan-soft/60 via-indigo-glow/40 to-transparent md:left-1/2" />

        <div className="space-y-6">
          {achievements.map((a, i) => {
            const left = i % 2 === 0
            return (
              <motion.div
                key={`${a.title}-${i}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
                className={`relative pl-9 md:w-1/2 md:pl-0 ${
                  left ? 'md:pr-10 md:text-right' : 'md:ml-auto md:pl-10'
                }`}
              >
                {/* node */}
                <span
                  className={`absolute top-1.5 left-0 h-3.5 w-3.5 rounded-full border-2 border-midnight-900 bg-cyan-soft shadow-glow-cyan md:left-auto ${
                    left ? 'md:-right-[7px]' : 'md:-left-[7px]'
                  }`}
                />
                <div className="group rounded-xl glass p-5 transition-colors hover:border-cyan-soft/30">
                  <div className={`flex items-center gap-2 ${left ? 'md:justify-end' : ''}`}>
                    <span className="tag text-white/40">{a.date}</span>
                    <span
                      className={`tag rounded-full bg-gradient-to-r px-2.5 py-0.5 font-semibold ${rankStyle(a.rank)}`}
                    >
                      {a.rank}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-white">{a.title}</h3>
                  <p className="text-sm text-white/55">{a.event}</p>

                  {a.photos && a.photos.length > 0 && (
                    <div className="mt-4 text-left">
                      <ImageGallery
                        items={a.photos}
                        cols={a.photos.length > 2 ? 'grid-cols-2' : 'grid-cols-2'}
                        aspect="aspect-[4/3]"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
