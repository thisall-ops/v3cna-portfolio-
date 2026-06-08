import { socials, profile, whatsapp } from '../data/content'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <div className="flex items-center gap-2 font-mono text-lg font-bold tracking-widest">
            <span className="whitespace-nowrap">
              <span className="text-cyan-soft">V3</span><span className="text-white">CNA</span>
            </span>
          </div>
          <p className="mt-2 max-w-sm text-sm text-white/45">
            {profile.name} · {profile.location}. Built as a personal operating system —
            terminal-native, cyberpunk, professional.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {socials
              .filter((s) => !s.key.endsWith('.pdf'))
              .map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-xs text-white/65 transition-colors hover:border-cyan-soft/40 hover:text-cyan-soft"
                >
                  {s.label}
                </a>
              ))}
          </div>
        </div>

        {/* WhatsApp QR */}
        <a
          href={whatsapp.href}
          target="_blank"
          rel="noreferrer"
          data-cursor
          className="group mx-auto flex w-fit flex-col items-center gap-3 rounded-2xl glass p-5 transition-colors hover:border-cyan-soft/40"
        >
          <div className="glow-frame animate-border-flow">
            <div className="rounded-[14px] bg-white p-2.5">
              <img
                src={whatsapp.qr}
                alt="WhatsApp QR — scan to message Thisal"
                width={132}
                height={132}
                className="h-[132px] w-[132px] rounded-md"
              />
            </div>
          </div>
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-cyan-soft/80">Scan to connect</p>
            <p className="mt-1 text-xs text-white/45 transition-colors group-hover:text-white/70">
              WhatsApp · tap or scan
            </p>
          </div>
        </a>
      </div>

      <div className="border-t border-white/5 py-5 text-center font-mono text-xs text-white/30">
        &copy; {new Date().getFullYear()} {profile.name} — all systems nominal.
      </div>
    </footer>
  )
}
