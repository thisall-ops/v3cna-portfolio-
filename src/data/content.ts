export const profile = {
  name: 'Thisal Ariyaratne',
  handle: 'V3CNA',
  shellUser: 'thisal',
  shellHost: 'arch',
  roles: [
    'Cyber Security Undergraduate',
    'CTF Competitor',
    'Challenge Builder',
    'Security Researcher',
  ],
  location: 'Malabe, Colombo, Sri Lanka',
  email: 'thisal687@gmail.com',
  photo: './v3cna.jpeg',
  cv: './Thisal_Ariyaratne_CV.pdf',
}

export const roleLines = [
  'Cyber Security Undergraduate',
  'CTF Competitor',
  'HackKAP Challenge Builder',
  'Ph4ntom Club Secretary',
  'Student Interactive Society Vice Secretary',
  'Security Researcher',
  'Linux User',
]

export type SocialLink = {
  key: string
  label: string
  href: string
  icon: string
}

// Update remaining placeholder hrefs later.
export const socials: SocialLink[] = [
  { key: 'linkedin', label: 'linkedin', href: 'https://linkedin.com/in/thisal-ariyaratne-74027b235', icon: 'in' },
  { key: 'github', label: 'github', href: 'https://github.com/thisall-ops', icon: 'gh' },
  { key: 'hackthebox', label: 'hackthebox', href: 'https://app.hackthebox.com/profile', icon: 'htb' },
  { key: 'email', label: 'email', href: 'mailto:thisal687@gmail.com', icon: '@' },
  { key: 'instagram', label: 'instagram', href: 'https://www.instagram.com/thisa.al__?igsh=ZjY1bmR0MTljcGMz', icon: 'ig' },
  { key: 'whatsapp', label: 'whatsapp', href: 'https://wa.me/qr/4N3ZEJIFO27UN1', icon: 'wa' },
  { key: 'cv.pdf', label: 'cv.pdf', href: './Thisal_Ariyaratne_CV.pdf', icon: 'pdf' },
]

export const whatsapp = {
  href: 'https://wa.me/qr/4N3ZEJIFO27UN1',
  qr: './whatsapp-qr.png',
}

export const about = {
  lead: 'Cyber security undergraduate operating at the seam between offensive tradecraft and defensive operations.',
  paragraphs: [
    'Thisal Ariyaratne breaks systems in competitive CTFs, then turns around and analyzes the logs, traffic, and artifacts to understand exactly how they were attacked. That dual perspective — attacker intuition paired with analyst discipline — anchors a focus on offensive security, digital forensics, Linux internals, and applied security research.',
    'He authors national-level CTF challenges for HackKAP Sri Lanka, leads a competitive CTF team, and has earned multiple top-three finishes across national and inter-university competitions. His work centers on practical problem solving: reverse engineering, threat analysis, system investigation, and building security-focused tooling.',
    'Backed by four years of daily Linux use, he designs custom terminal workflows, experiments across distros, and is currently architecting AP3X — a Rust-based AI security agent exploring how AI can sharpen real cyber security operations.',
  ],
  facts: [
    { label: 'Focus', value: 'Offensive Sec · Forensics · Research' },
    { label: 'Daily Driver', value: 'Arch Linux · 4+ years' },
    { label: 'Building', value: 'AP3X — Rust AI security agent' },
    { label: 'Languages', value: 'Sinhala · English' },
  ],
}

export const skillGroups = [
  { title: 'Monitoring & Analysis', items: ['Wireshark', 'Tshark', 'Nmap', 'RustScan', 'PCAP analysis', 'Log analysis', 'Network monitoring'] },
  { title: 'Incident Investigation', items: ['Threat identification', 'Digital forensics', 'Evidence-chain documentation', 'CTF methodology'] },
  { title: 'Security Tools', items: ['Burp Suite', 'Metasploit', 'Gobuster', 'Hashcat', 'Hydra'] },
  { title: 'Networking & Protocols', items: ['TCP/IP', 'DNS', 'HTTP/HTTPS', 'OAuth 2.0', 'SAML 2.0', 'JWT'] },
  { title: 'Systems', items: ['Kali', 'Arch', 'Ubuntu', 'CachyOS', 'Windows'] },
  { title: 'Programming', items: ['Python', 'Bash', 'C', 'C++', 'C#', 'Rust'] },
]

export type GalleryImage = {
  src: string
  caption: string
}

export type Project = {
  id: string
  title: string
  tag: string
  summary: string
  stack: string[]
  details: string[]
  status?: string
  github?: string
  caseStudy?: string
  /** real screenshots with captions */
  images?: GalleryImage[]
  /** number of reserved placeholder slots when no images yet */
  gallery?: number
  evidence?: number
  /** small informational note shown in expanded details */
  note?: string
}

export const projects: Project[] = [
  {
    id: 'ap3x',
    title: 'AP3X',
    tag: 'AI Security Tooling',
    status: 'Active',
    summary: 'AI-powered terminal security assistant built in Rust — an interactive TUI agent for Linux operations and security research.',
    stack: ['Rust', 'TUI', 'OpenAI', 'Claude', 'LLM Orchestration'],
    details: [
      'Custom Rust terminal AI agent featuring an interactive TUI, session management, multi-model selection, and slash-command workflows.',
      'Integrates multiple LLM providers (OpenAI, Claude) with secure API-key handling.',
      'Built to accelerate Linux operations, scripting, and day-to-day security research from a single command line.',
    ],
    github: '#',
    images: [
      { src: './media/ap3x/tui.png', caption: 'AP3X interactive terminal UI (TUI) at startup.' },
      { src: './media/ap3x/scan-directory.png', caption: 'Tasking AP3X to scan and summarise the contents of a directory.' },
      { src: './media/ap3x/analyze-file.png', caption: 'Asking AP3X to analyse a file directly from the terminal.' },
      { src: './media/ap3x/slash-commands.png', caption: 'Built-in slash-command workflow for fast actions.' },
      { src: './media/ap3x/models.png', caption: 'Multi-model selection across supported LLM providers.' },
      { src: './media/ap3x/modes.png', caption: 'Switching operating modes on the fly.' },
      { src: './media/ap3x/themes.png', caption: 'Customisable terminal themes.' },
    ],
  },
  {
    id: 'ap3x-soc',
    title: 'AP3X SOC',
    tag: 'AI-Assisted SOC',
    status: 'In Development',
    summary: 'AI-assisted security operations workflow integrating Wazuh SIEM with a custom Rust terminal agent for automated triage and threat hunting.',
    stack: ['Rust', 'Wazuh SIEM', 'MITRE ATT&CK', 'Detection Engineering'],
    details: [
      'Automated alert triage, MITRE ATT&CK mapping, and threat hunting across a simulated attack environment.',
      'Bridges the AP3X agent with SIEM tooling to support analyst-grade investigation.',
    ],
    github: '#',
    gallery: 4,
  },
  {
    id: 'fortress',
    title: 'Fortress Cloud Security Assessment',
    tag: 'IAM / AuthN Review',
    summary: 'Static security assessment of an authentication service covering OAuth 2.0, SAML 2.0, and JWT flows.',
    stack: ['OAuth 2.0', 'SAML 2.0', 'JWT', 'Threat Modeling', 'Reporting'],
    details: [
      'Identified critical protocol weaknesses and mapped realistic exploit chains.',
      'Documented findings, business impact, and prioritized remediation in a structured security report.',
      'Applied the same investigative and reporting discipline used in real-world security operations.',
    ],
    caseStudy: './docs/fortress-iam-assessment.pdf',
  },
  {
    id: 'archive-avalanche',
    title: 'Archive Avalanche',
    tag: 'CTF · Forensics',
    summary: 'A five-layer forensics challenge using 50,000 nested ZIP files to force scripted, automated extraction.',
    stack: ['Forensics', 'Python', 'Automation', 'Challenge Design'],
    details: [
      'Engineered for HackKAP CTF as an original forensics challenge.',
      'Five nested layers of 50,000 ZIP files defeat manual extraction and reward scripting.',
    ],
    note: 'This challenge is still live in HackKAP rotations, so the solution and internals are kept private.',
  },
  {
    id: 'red-herring',
    title: 'Red Herring Channel',
    tag: 'CTF · Steganography',
    summary: 'Multi-vector steganography challenge with layered decoys and a true solve path built on red/blue-channel LSB XOR.',
    stack: ['Steganography', 'EXIF', 'PNG Chunks', 'LSB', 'Crypto'],
    details: [
      'Embedded decoy flags across EXIF metadata, PNG chunks, green-channel LSB, and ROT13 trailing data.',
      'True solve path built around red/blue-channel LSB XOR with a decryption key hidden in a deliberate filename typo.',
    ],
    note: 'This challenge is still live in HackKAP rotations, so the solution and internals are kept private.',
  },
  {
    id: 'operation-intercept',
    title: 'Operation Intercept 2025',
    tag: 'Investigation Write-Up',
    summary: 'Investigation and write-up of the "Hidden Cargo" multi-stage challenge spanning visual, symbolic, and audio indicators.',
    stack: ['OSINT', 'Forensics', 'Reporting', 'Hobo Signs'],
    details: [
      'Structured analysis of visual, symbolic (Hobo sign symbols), and audio-based clues.',
      'Applied logical enumeration and systematic investigation to reconstruct a clear evidence chain.',
      'Published the full methodology as a community write-up on LinkedIn.',
    ],
    caseStudy: './docs/operation-intercept-hidden-cargo.pdf',
  },
]

// ---------------------------------------------------------------------------
// CTF Challenge Building (HackKAP)
// ---------------------------------------------------------------------------
export const ctfBuilder = {
  heading: 'CTF Challenge Builder — HackKAP Sri Lanka',
  blurb:
    'As a challenge builder and crew member for HackKAP, I have authored 20+ original challenges for national-level competitions across Web Exploitation, Cryptography, Binary Exploitation, Reverse Engineering, Forensics, OSINT, and Steganography.',
  // Master list of authored challenges. Individual challenge internals stay
  // private because many are still in active rotation.
  listImage: {
    src: './media/ctf/hackkap-challenge-list.png',
    caption:
      'Master list of CTF challenges I authored for HackKAP. Several are still live in active rotations, so individual solutions are kept private.',
  },
  liveNote:
    'Several of these challenges are still live in active HackKAP rotations, so I can only show the full authored set — not each challenge individually.',
}

// ---------------------------------------------------------------------------
// Certifications & competition credentials
// ---------------------------------------------------------------------------
export type Cert = {
  id: string
  title: string
  issuer: string
  date: string
  status: 'In Progress' | 'Completed'
  image?: string
  caption?: string
  verify?: string
}

// Professional certifications (in progress + completed, no gallery image).
export const certifications: Cert[] = [
  {
    id: 'ad-rts',
    title: 'Certified AD Red Team Specialist (AD-RTS)',
    issuer: 'CyberWarfare Labs',
    date: '2026',
    status: 'Completed',
    image: './media/certs/ad-rts.jpg',
    caption: 'AD-RTS — Certified AD Red Team Specialist. Credential ID: ADRTS-6a6761378aed14e94c9074d8.',
    verify: '#',
  },
  { id: 'crta', title: 'Certified Red Team Analyst (CRTA)', issuer: 'CyberWarFare Labs', date: '2025', status: 'In Progress', verify: '#' },
  { id: 'ceh', title: 'Certified Ethical Hacker (CEH)', issuer: 'Coursera / Pearson', date: '2025', status: 'In Progress', verify: '#' },
]

// Earned credentials with certificate images (diploma + competition certs).
export const credentials: Cert[] = [
  {
    id: 'idm-diploma',
    title: 'Higher National Diploma — Cyber Security',
    issuer: 'IDM / CICRA Campus',
    date: '2024 – 2026',
    status: 'Completed',
    image: './media/certs/idm-diploma.jpg',
    caption: 'Higher National Diploma in Cyber Security.',
  },
  {
    id: 'hackkap-cert',
    title: 'Challenge Builder & Crew — HackKAP',
    issuer: 'HackKAP Sri Lanka',
    date: '2024',
    status: 'Completed',
    image: './media/certs/hackkap.jpeg',
    caption: 'Recognition for authoring and running national-level CTF challenges with HackKAP.',
  },
  {
    id: 'cert-cicra-summit',
    title: 'CICRA Summit CTF',
    issuer: 'CICRA Campus',
    date: '2025',
    status: 'Completed',
    image: './media/certs/cicra-summit.jpg',
    caption: 'Participation / placement certificate — CICRA Summit CTF.',
  },
  {
    id: 'cert-zeroxarena',
    title: 'ZeroXArena 2026 — 1st Runners-Up',
    issuer: 'CICRA Campus',
    date: '2026',
    status: 'Completed',
    image: './media/certs/zeroxarena.jpg',
    caption: '1st Runners-Up with team CRONOZ at ZeroXArena 2026.',
  },
  {
    id: 'cert-sliit',
    title: 'SLIIT CS2 — 1st Runners-Up',
    issuer: 'SLIIT',
    date: '2025',
    status: 'Completed',
    image: './media/certs/sliit.jpg',
    caption: '1st Runners-Up with team FLAG HUNTERS at SLIIT CS2.',
  },
  {
    id: 'cert-lnbti',
    title: 'Battle of Multiverse 2026 — 2nd Runners-Up',
    issuer: 'LNBTI',
    date: '2026',
    status: 'Completed',
    image: './media/certs/lnbti-battle.jpg',
    caption: '2nd Runners-Up with team FLAG HUNTERS at LNBTI Battle of Multiverse 2026.',
  },
  {
    id: 'cert-cryptx',
    title: 'CryptX 2.0 — 2nd Runners-Up',
    issuer: 'University of Jaffna',
    date: '2025',
    status: 'Completed',
    image: './media/certs/cryptx.jpg',
    caption: '2nd Runners-Up with team CRONOZ at CryptX 2.0, UOJ.',
  },
  {
    id: 'cert-cypher',
    title: 'CYPHER 3.0 — 4th Place',
    issuer: 'KDU',
    date: '2025',
    status: 'Completed',
    image: './media/certs/cypher.jpg',
    caption: '4th Place with team FLAG HUNTERS at CYPHER 3.0, KDU.',
  },
  {
    id: 'cert-medusa',
    title: 'MEDUSA CTF 2025 — Finalist',
    issuer: 'MEDUSA',
    date: '2025',
    status: 'Completed',
    image: './media/certs/medusa-finalist.jpeg',
    caption: 'Finalist with team CHRONOS at MEDUSA CTF 2025.',
  },
]

// ---------------------------------------------------------------------------
// Competition achievements (timeline) — each with on-site event photos
// ---------------------------------------------------------------------------
export type Achievement = {
  date: string
  title: string
  event: string
  rank: string
  photos?: GalleryImage[]
}

export const achievements: Achievement[] = [
  { date: '2024', title: 'CODE BREAKERS', event: 'HackKAP CTF', rank: '1st Place' },
  {
    date: '2025',
    title: 'FLAG HUNTERS',
    event: 'CICRA Campus CTF',
    rank: '1st Place',
    photos: [
      { src: './media/events/cicra-summit-1.jpeg', caption: 'CICRA Campus CTF — team FLAG HUNTERS.' },
    ],
  },
  {
    date: '2026',
    title: 'CRONOZ',
    event: 'ZeroXArena (CICRA)',
    rank: '1st Runners-Up',
    photos: [
      { src: './media/events/zeroxarena-1.jpeg', caption: 'ZeroXArena 2026 — on site with team CRONOZ.' },
      { src: './media/events/zeroxarena-2.jpeg', caption: 'ZeroXArena 2026 — competition floor.' },
    ],
  },
  {
    date: '—',
    title: 'FLAG HUNTERS',
    event: 'SLIIT CS2',
    rank: '1st Runners-Up',
    photos: [
      { src: './media/events/sliit-1.jpeg', caption: 'SLIIT CS2 — team FLAG HUNTERS.' },
      { src: './media/events/sliit-2.jpeg', caption: 'SLIIT CS2 — during the competition.' },
      { src: './media/events/sliit-3.jpeg', caption: 'SLIIT CS2 — award moment.' },
    ],
  },
  {
    date: '2026',
    title: 'FLAG HUNTERS',
    event: 'LNBTI — Battle of Multiverse',
    rank: '2nd Runners-Up',
    photos: [
      { src: './media/events/lnbti-1.jpeg', caption: 'Battle of Multiverse 2026 — team FLAG HUNTERS.' },
      { src: './media/events/lnbti-2.jpeg', caption: 'Battle of Multiverse 2026 — competing.' },
      { src: './media/events/lnbti-3.jpeg', caption: 'Battle of Multiverse 2026 — on stage.' },
      { src: './media/events/lnbti-4.jpeg', caption: 'Battle of Multiverse 2026 — the team.' },
    ],
  },
  {
    date: '—',
    title: 'CRONOZ',
    event: 'CryptX 2.0 — UOJ',
    rank: '2nd Runners-Up',
    photos: [
      { src: './media/events/cryptx-1.jpeg', caption: 'CryptX 2.0 at University of Jaffna — team CRONOZ.' },
      { src: './media/events/cryptx-2.jpeg', caption: 'CryptX 2.0 — competition floor.' },
      { src: './media/events/cryptx-3.jpeg', caption: 'CryptX 2.0 — solving challenges.' },
      { src: './media/events/cryptx-4.jpeg', caption: 'CryptX 2.0 — award presentation.' },
    ],
  },
  {
    date: '—',
    title: 'FLAG HUNTERS',
    event: 'CYPHER 3.0 — KDU',
    rank: '4th Place',
    photos: [
      { src: './media/events/cypher-1.jpeg', caption: 'CYPHER 3.0 at KDU — team FLAG HUNTERS.' },
      { src: './media/events/cypher-2.jpeg', caption: 'CYPHER 3.0 — during the competition.' },
    ],
  },
  { date: '2025', title: 'CHRONOS', event: 'MEDUSA CTF', rank: 'Finalist' },
]

export const education = [
  { title: 'B.Sc. (Hons) Cyber Security (Top-Up)', org: 'Wrexham University, UK · pathway with CICRA Campus', date: 'Expected Oct 2026' },
  { title: 'Higher National Diploma in Cyber Security', org: 'CICRA Campus · affil. Deakin University', date: '2024 – 2026' },
  { title: 'Foundation in Cyber Security', org: 'CICRA Campus', date: '2024' },
]
