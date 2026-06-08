# V3CNA — Thisal Ariyaratne · Personal Operating System Portfolio

A premium, cyberpunk-inspired personal portfolio built as a "modern cybersecurity
engineer's personal operating system" — terminal-native, interactive, and professional.

> Not a green-on-black hacker terminal. Apple-level polish × Linear.app structure ×
> Arc Browser aesthetics × game-UI motion × a security identity.

---

## Quick start

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

Open the printed local URL (default http://localhost:5173).

---

## 1. Architecture plan

- **Type:** Single-page application (SPA), one continuous scroll with anchor nav.
- **Rendering:** Client-side React. No backend required — fully static, host anywhere
  (Netlify / Vercel / GitHub Pages / Cloudflare Pages). `base: './'` makes it portable.
- **State:** Local component state only (terminal sequence, expand/collapse, preview).
  No global store needed.
- **Motion:** Framer Motion for entrance/scroll reveals + layout animations; raw
  `requestAnimationFrame` + CSS custom properties for the cursor field and tilt
  (no React re-renders on mouse move = no jank).
- **Data:** Single source of truth in `src/data/content.ts`, derived entirely from
  the provided CV. Nothing invented.

## 2. Design system

| Token         | Value      | Use                                  |
|---------------|------------|--------------------------------------|
| Midnight      | `#070711`  | Base background                      |
| Violet (deep) | `#6d28d9`  | Primary glow / gradients             |
| Indigo        | `#4f46e5`  | Primary accent, buttons              |
| Electric blue | `#2563eb`  | Gradient pair                        |
| Soft cyan     | `#22d3ee`  | Highlights, terminal, active states  |
| Soft amber    | `#fbbf24`  | "In progress" / status accents only  |

- **Type:** `Inter` (UI) + `JetBrains Mono` (terminal, tags, metadata).
- **Surfaces:** `.glass` (blurred translucent panels), `.glow-frame` (animated
  gradient border for the terminal + photo).
- **Glow discipline:** glow is reserved for the hero, focal frames, and active
  states. Background is a subtle cursor-reactive radial field + faint masked grid +
  vignette — no rain, no matrix, no noise.
- **Motion rules:** subtle, eased (`cubic-bezier(0.22,1,0.36,1)`), once-on-view, and
  fully disabled under `prefers-reduced-motion`.

## 3. Wireframe (top → bottom)

```
┌ Navbar (glass pill, scroll-aware, active-section tracking) ──────────────┐
│ HERO  ── heading (THISAL ARIYARATNE + roles) ───────────────────────────│
│        ┌───────────────── split ─────────────────┐                       │
│        │ LEFT: interactive terminal  │ RIGHT: framed photo (v3cna.jpeg) │ │
│        └──────────────────────────────────────────┘                      │
│ ABOUT ── lead + facts grid + capabilities + education                    │
│ PROJECTS ── 2-col cards, expandable details + screenshot/evidence galleries│
│ CERTIFICATIONS ── gallery cards + reserved future slots                  │
│ ACHIEVEMENTS ── alternating premium timeline                             │
│ CV ── download + inline PDF preview                                      │
│ FOOTER ── identity + social links                                        │
└──────────────────────────────────────────────────────────────────────────┘
```

## 4. Component map

```
App
├─ useCursorField()           cursor-reactive background (CSS vars)
├─ CustomCursor               dot + easing ring, grows on interactive hover
├─ Navbar                     scroll-aware glass nav + animated active pill
├─ Hero
│  ├─ Terminal                scripted boot: whoami / cat role.txt / ls (clickable)
│  └─ PhotoFrame              square animated-glow frame, scanline, brackets
├─ About                      SpotlightCard lead + facts + skills + education
├─ Projects → ProjectCard     expandable details + Gallery (screenshots/evidence)
├─ Certifications             gallery cards + reserved placeholders
├─ Achievements               alternating timeline w/ rank medals
├─ CV                         download + inline <object> PDF preview
└─ Footer
Shared: Section, SpotlightCard (spotlight + 3D tilt)
```

## 5. File structure

```
portfolio/
├─ public/                v3cna.jpeg, Thisal_Ariyaratne_CV.pdf, favicon.svg
├─ src/
│  ├─ components/         CustomCursor, Navbar, Footer, Section, SpotlightCard, Terminal, PhotoFrame
│  ├─ sections/          Hero, About, Projects, Certifications, Achievements, CV
│  ├─ hooks/             useCursorField
│  ├─ data/content.ts    SINGLE SOURCE OF TRUTH (from CV)
│  ├─ styles/index.css   theme, cursor, frames, animations
│  ├─ App.tsx / main.tsx
└─ config: vite, tailwind, postcss, tsconfig
```

## 6. Build roadmap (status)

- [x] Scaffold (Vite + React + TS + Tailwind + Framer Motion)
- [x] Design system + global styles + cursor system
- [x] Hero: interactive terminal + framed photo
- [x] About / Projects / Certifications / Achievements / CV
- [x] Responsive, accessibility (reduced-motion, semantics), production build

## 7. Where to add your content later

All placeholders live in **`src/data/content.ts`**:

- `socials[]` — replace placeholder `href`s (LinkedIn, GitHub, HackTheBox, Email,
  Instagram). Email + LinkedIn + GitHub are pre-filled from the CV.
- `projects[].github` / `.caseStudy` — set real URLs (currently `#`).
- `projects[].gallery` / `.evidence` — these are *counts* of placeholder slots; wire
  real images into the `Gallery` component in `src/sections/Projects.tsx`.
- `certifications[]` — add real certs; drop images into the certificate placeholder
  in `src/sections/Certifications.tsx`, set `verify` links.
- CV: replace `public/Thisal_Ariyaratne_CV.pdf` (currently the latest PDF export of
  your CV). The DOCX can be exported to PDF for best in-browser preview.

## Notes

- Photo is loaded dynamically from `/v3cna.jpeg` and shown in a **rectangular**
  animated frame (no circular avatar), per spec.
- Terminal is real UI (typed character-by-character), not a screenshot — `ls`
  entries are live clickable links.
- Desktop-first, fully responsive down to mobile; custom cursor auto-disables on
  touch / coarse pointers.
