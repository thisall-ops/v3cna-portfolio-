export const profile = {
  name: 'Thisal Ariyaratne',
  handle: 'V3CNA',
  shellUser: 'thisal',
  shellHost: 'arch',
  roles: [
    'Cyber Security Graduand',
    'Penetration Tester',
    'CTF Challenge Author',
    'Security Researcher',
  ],
  location: 'Malabe, Colombo, Sri Lanka',
  email: 'thisal687@gmail.com',
  photo: './v3cna.jpeg',
  cv: './Thisal_Ariyaratne_CV.pdf',
}

export const roleLines = [
  'Cyber Security Graduand (B.Sc. Hons)',
  'Penetration Testing · Web / Mobile / API',
  'HackKAP Challenge Author',
  'CTF Team Leader — Cronoz / Flag Hunters',
  'Security Researcher',
  'Arch Linux · 4+ years',
]

export type SocialLink = {
  key: string
  label: string
  href: string
  icon: string
}

export const socials: SocialLink[] = [
  { key: 'linkedin', label: 'linkedin', href: 'https://linkedin.com/in/thisal-ariyaratne-74027b235', icon: 'in' },
  { key: 'github', label: 'github', href: 'https://github.com/thisall-ops', icon: 'gh' },
  { key: 'email', label: 'email', href: 'mailto:thisal687@gmail.com', icon: '@' },
  { key: 'whatsapp', label: 'whatsapp', href: 'https://wa.me/qr/4N3ZEJIFO27UN1', icon: 'wa' },
  { key: 'cv.pdf', label: 'cv.pdf', href: './Thisal_Ariyaratne_CV.pdf', icon: 'pdf' },
]

export const whatsapp = {
  href: 'https://wa.me/qr/4N3ZEJIFO27UN1',
  qr: './whatsapp-qr.png',
}

export const about = {
  lead: 'Cyber security graduand who breaks systems in competitive CTFs, then builds the tooling to detect the same attacks.',
  paragraphs: [
    'Thisal Ariyaratne works at the seam between offensive tradecraft and applied security engineering. He hunts flags in national CTFs, assesses web, mobile, and API authentication flows, and turns findings into structured reports — attacker intuition paired with the discipline to document, remediate, and defend.',
    'He authors national-level CTF challenges for HackKAP Sri Lanka across web exploitation, cryptography, binary exploitation, reverse engineering, forensics, OSINT, and steganography, leads competitive teams to top-three finishes, and has just completed a B.Sc. (Hons) in Cyber Security (results pending, Oct 2026).',
    'His research project, BankShield-LK, is a static-analysis and machine-learning system that detects malicious Android banking APKs at 97.9% accuracy — a full pipeline from raw APK to an explained, backend-owned verdict. Alongside it he is building AP3X, a Rust AI security agent, backed by four years of daily Linux.',
  ],
  facts: [
    { label: 'Focus', value: 'Offensive Sec · AppSec · Research' },
    { label: 'Status', value: 'B.Sc. (Hons) Graduand · CEH candidate' },
    { label: 'Building', value: 'BankShield-LK · AP3X (Rust)' },
    { label: 'Daily Driver', value: 'Arch Linux · 4+ years' },
  ],
}

export const skillGroups = [
  { title: 'Offensive & AppSec', items: ['Penetration testing', 'Vulnerability assessment', 'Web app security', 'Mobile / APK security', 'API security', 'OWASP Top 10', 'Static analysis'] },
  { title: 'Security Tooling', items: ['Burp Suite', 'Metasploit', 'Nmap', 'RustScan', 'Gobuster', 'Hashcat', 'Hydra', 'Androguard'] },
  { title: 'Detection & Forensics', items: ['Wireshark', 'Tshark', 'Wazuh SIEM', 'PCAP analysis', 'Log analysis', 'Digital forensics', 'MITRE ATT&CK'] },
  { title: 'Protocols & Auth', items: ['TCP/IP', 'DNS', 'HTTP/HTTPS', 'OAuth 2.0', 'SAML 2.0', 'JWT', 'VPN'] },
  { title: 'Programming', items: ['Python', 'Bash', 'Rust', 'C', 'C++', 'C#'] },
  { title: 'Systems & Platforms', items: ['Kali', 'Arch', 'Ubuntu', 'Windows', 'Hack The Box', 'TryHackMe'] },
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
  featured?: boolean
  metrics?: { label: string; value: string }[]
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
    id: 'bankshield',
    title: 'BankShield-LK',
    tag: 'Mobile / ML Security',
    status: 'Active',
    featured: true,
    summary:
      'A static-analysis and machine-learning system that detects malicious Android banking APKs at 97.9% accuracy — the full pipeline from a raw APK to an explained, backend-owned verdict.',
    stack: ['Python', 'XGBoost', 'Androguard', 'FastAPI', 'React', 'TypeScript', 'Drebin-215'],
    metrics: [
      { label: 'Accuracy', value: '97.9%' },
      { label: 'ROC-AUC', value: '0.996' },
      { label: 'Static features', value: '215' },
      { label: 'Automated tests', value: '222' },
    ],
    details: [
      'Trained and tuned XGBoost and Random Forest models on 7,258 de-duplicated Drebin-215 feature vectors — reaching 97.9% accuracy and 0.996 ROC-AUC with verified zero cross-split leakage.',
      'Engineered an Androguard-based static extractor that maps 215 indicators (permissions, API calls, intents) across 8 naming schemas and scores unseen APKs without ever executing them.',
      'Wrapped the scanner in an asynchronous FastAPI backend (33 tests) and added a prompt-injection-hardened LLM explanation layer where the backend authoritatively owns every verdict — the model can explain, never decide.',
      'Shipped end-to-end with a React + TypeScript UI; 222 automated tests across the full stack.',
    ],
    github: 'https://github.com/thisall-ops/BankShield-LK',
    images: [
      { src: './media/bankshield/01-landing.png', caption: 'Landing — upload an APK for static analysis.' },
      { src: './media/bankshield/03-result.png', caption: 'Model classification with confidence and cross-model agreement.' },
      { src: './media/bankshield/04-ai-analysis.png', caption: 'AI security analysis — evidence explained; the verdict is owned by the backend.' },
      { src: './media/bankshield/02-progress.png', caption: 'Asynchronous scan progress while the APK is parsed.' },
      { src: './media/bankshield/05-error-handling.png', caption: 'Structured handling of corrupt / invalid APKs.' },
    ],
    note: 'Undergraduate research prototype — trained on the public Drebin-215 benchmark, not a certified product. Metrics characterise benchmark performance.',
  },
  {
    id: 'fortress',
    title: 'Fortress Cloud Security Assessment',
    tag: 'IAM / AuthN Review',
    summary: 'Static security assessment of an authentication service covering OAuth 2.0, SAML 2.0, and JWT flows.',
    stack: ['OAuth 2.0', 'SAML 2.0', 'JWT', 'Threat Modeling', 'Reporting'],
    details: [
      'Identified critical protocol weaknesses and mapped realistic exploit chains across the authentication surface.',
      'Documented findings, business impact, and prioritized remediation in a structured security report.',
      'Applied the same investigative and reporting discipline used in real-world VAPT engagements.',
    ],
    caseStudy: './docs/fortress-iam-assessment.pdf',
  },
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
    gallery: 4,
  },
  {
    id: 'archive-avalanche',
    title: 'Archive Avalanche',
    tag: 'CTF · Forensics',
    summary: 'A five-layer forensics challenge using 50,000 nested ZIP files to force scripted, automated extraction.',
    stack: ['Forensics', 'Python', 'Automation', 'Challenge Design'],
    details: [
      'Engineered for HackKAP CTF as an original national-level forensics challenge.',
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
  heading: 'CTF Challenge Author — HackKAP Sri Lanka',
  blurb:
    'As a challenge builder and crew member for HackKAP, I have authored 20+ original challenges for national-level competitions across Web Exploitation, Cryptography, Binary Exploitation, Reverse Engineering, Forensics, OSINT, and Steganography.',
  listImage: {
    src: './media/ctf/hackkap-challenge-list.png',
    caption:
      'Master list of CTF challenges I authored for HackKAP. Several are still live in active rotations, so individual solutions are kept private.',
  },
  liveNote:
    'Several of these challenges are still live in active HackKAP rotations, so I can only show the full authored set — not each challenge individually.',
}

// ---------------------------------------------------------------------------
// Certifications & credentials
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

// Academic qualifications — the CICRA pathway (with certificate images).
export const academicQuals: Cert[] = [
  {
    id: 'adv-diploma',
    title: 'Advanced Diploma in Cyber Security',
    issuer: 'CICRA Campus',
    date: 'Mar 2026',
    status: 'Completed',
    image: './media/certs/advanced-diploma-cyber-security.png',
    caption: 'Advanced Diploma in Cyber Security — CICRA Campus. Ref: ADCS-2026-04-09.',
  },
  {
    id: 'diploma',
    title: 'Diploma in Cyber Security',
    issuer: 'CICRA Campus',
    date: 'Aug 2025',
    status: 'Completed',
    image: './media/certs/diploma-cyber-security.png',
    caption: 'Diploma in Cyber Security — CICRA Campus. Ref: DCS-2025-10-81.',
  },
  {
    id: 'foundation',
    title: 'Foundation in Cyber Security',
    issuer: 'CICRA Campus',
    date: 'Nov 2024',
    status: 'Completed',
    image: './media/certs/foundation-cyber-security.png',
    caption: 'Foundation in Cyber Security — CICRA Campus. Ref: FND-2025-07-40.',
  },
]

// Professional certifications & training.
export const certifications: Cert[] = [
  {
    id: 'ad-rts',
    title: 'Certified AD Red Team Specialist (AD-RTS)',
    issuer: 'CyberWarfare Labs',
    date: '2026',
    status: 'Completed',
    image: './media/certs/ad-rts.jpg',
    caption: 'AD-RTS — Certified AD Red Team Specialist. Credential ID: 6a6761378aed14e94c9074d8.',
    verify: '#',
  },
  { id: 'ceh', title: 'Certified Ethical Hacker (CEH)', issuer: 'EC-Council (via CICRA Campus)', date: '2026', status: 'In Progress', verify: '#' },
  { id: 'crta', title: 'Certified Red Team Analyst (CRTA)', issuer: 'CyberWarfare Labs', date: '2025', status: 'In Progress', verify: '#' },
]

// Earned competition credentials with certificate images.
export const credentials: Cert[] = [
  {
    id: 'hackkap-cert',
    title: 'Challenge Author & Crew — HackKAP',
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

export const education = [
  { title: 'B.Sc. (Hons) Cyber Security (Top-Up)', org: 'Wrexham University, UK · pathway with CICRA Campus', date: 'Completed · Results Pending (Oct 2026)' },
  { title: 'Higher National Diploma in Cyber Security', org: 'CICRA Campus · affil. Deakin University', date: '2024 – 2026' },
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
