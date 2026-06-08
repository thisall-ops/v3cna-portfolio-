import { useEffect, useRef, useState } from 'react'
import { roleLines, socials, profile } from '../data/content'

type Line =
  | { kind: 'cmd'; text: string }
  | { kind: 'out'; text: string }
  | { kind: 'ls' }
  | { kind: 'blank' }

// The scripted boot sequence.
const script: Line[] = [
  { kind: 'cmd', text: 'whoami' },
  { kind: 'out', text: profile.name },
  { kind: 'blank' },
  { kind: 'cmd', text: 'cat role.txt' },
  ...roleLines.map((r) => ({ kind: 'out', text: r }) as Line),
  { kind: 'blank' },
  { kind: 'cmd', text: 'ls' },
  { kind: 'ls' },
]

const prompt = (
  <>
    <span className="text-cyan-soft">{profile.shellUser}</span>
    <span className="text-white/40">@</span>
    <span className="text-indigo-300">{profile.shellHost}</span>
    <span className="text-white/40">:~$ </span>
  </>
)

export function Terminal() {
  const [rendered, setRendered] = useState<number>(0)
  const [typed, setTyped] = useState<string>('')
  const [done, setDone] = useState(false)
  const idxRef = useRef(0)
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false
    let timer: ReturnType<typeof setTimeout>

    const run = () => {
      if (cancelled) return
      const i = idxRef.current
      if (i >= script.length) {
        setDone(true)
        return
      }
      const line = script[i]
      if (line.kind === 'cmd') {
        // type the command char by char
        let c = 0
        const type = () => {
          if (cancelled) return
          setTyped(line.text.slice(0, c))
          c++
          if (c <= line.text.length) {
            timer = setTimeout(type, 38)
          } else {
            timer = setTimeout(() => {
              setTyped('')
              idxRef.current = i + 1
              setRendered((r) => r + 1)
              run()
            }, 260)
          }
        }
        type()
      } else {
        idxRef.current = i + 1
        setRendered((r) => r + 1)
        timer = setTimeout(run, line.kind === 'blank' ? 60 : 110)
      }
    }

    timer = setTimeout(run, 600)
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' })
  }, [rendered, typed])

  const visible = script.slice(0, rendered)
  const typingLine = !done && rendered < script.length ? script[rendered] : null

  return (
    <div className="glow-frame animate-border-flow w-full shadow-glow">
      <div className="overflow-hidden rounded-[16px] bg-midnight-800/95">
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-white/40">
            {profile.shellUser}@{profile.shellHost}: ~/portfolio
          </span>
        </div>

        {/* body */}
        <div
          ref={bodyRef}
          className="h-[340px] overflow-y-auto px-5 py-4 font-mono text-[13.5px] leading-relaxed md:h-[400px]"
        >
          {visible.map((line, i) => (
            <LineView key={i} line={line} />
          ))}

          {typingLine && typingLine.kind === 'cmd' && (
            <div className="whitespace-pre-wrap">
              {prompt}
              <span className="text-white caret">{typed}</span>
            </div>
          )}

          {done && (
            <div className="whitespace-pre-wrap">
              {prompt}
              <span className="caret" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function LineView({ line }: { line: Line }) {
  if (line.kind === 'blank') return <div className="h-3" />
  if (line.kind === 'cmd')
    return (
      <div className="whitespace-pre-wrap">
        {prompt}
        <span className="text-white">{line.text}</span>
      </div>
    )
  if (line.kind === 'out')
    return <div className="pl-0 text-white/75">{line.text}</div>

  // ls grid of clickable entries
  return (
    <div className="mt-1 grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3">
      {socials.map((s) => {
        const ext = s.key.endsWith('.pdf')
        return (
          <a
            key={s.key}
            href={s.href}
            target={s.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            data-cursor
            className="group flex items-center gap-1.5 text-cyan-soft/90 transition-colors hover:text-cyan-soft"
          >
            <span className="text-white/30 transition-colors group-hover:text-indigo-300">
              {ext ? '#' : '>'}
            </span>
            <span className="underline-offset-4 group-hover:underline">{s.label}</span>
          </a>
        )
      })}
    </div>
  )
}
