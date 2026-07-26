export type Project = {
  id: string
  name: string
  featured: boolean
  summary: string
  whyItMatters: string
  stack: string[]
  url: string
}

export const projects: Project[] = [
  {
    id: 'returnticketer',
    name: 'ReturnTicketer',
    featured: true,
    summary:
      'Desktop app that generates multiple hardware return tickets in one pass — built for EUC / hardware return workflows.',
    whyItMatters:
      'Shows how I turn repetitive EUC/hardware processes into reliable tooling that reduces friction for EUC teams and employees.',
    stack: ['Tauri', 'Rust', 'TypeScript', 'Vite'],
    url: 'https://github.com/JosephGurak/ReturnTicketer',
  },
  {
    id: 'powershell-scripts',
    name: 'PowerShell endpoint scripts',
    featured: true,
    summary:
      'Scripts for desktop storage hygiene and Windows theme switching — practical endpoint automation.',
    whyItMatters:
      'Maps directly to DEX remediation habits: diagnose local device state, act with scripts, and leave the employee with a cleaner experience.',
    stack: ['PowerShell', 'Windows'],
    url: 'https://github.com/JosephGurak/powershell_scripts',
  },
  {
    id: 'mathsharp',
    name: 'MathSharp + browser extension',
    featured: true,
    summary:
      'Deterministic math engine (Rust/WASM) with a Chrome side panel — solve, history, and matrices on-device.',
    whyItMatters:
      'Shipping a real digital experience: local compute, clear UX, and a product that stays useful without guessing.',
    stack: ['Rust', 'WASM', 'Dioxus', 'Chrome Extension'],
    url: 'https://github.com/JosephGurak/mathsharp',
  },
  {
    id: 'craw',
    name: 'CRAW',
    featured: true,
    summary:
      'Custom Radial Application Window — a Tauri desktop launcher focused on fast, intentional app access.',
    whyItMatters:
      'Desktop productivity UX matters to employee experience; CRAW explores how launch patterns can feel lighter and more human.',
    stack: ['Tauri', 'Rust', 'CSS'],
    url: 'https://github.com/JosephGurak/CRAW',
  },
  {
    id: 'mathsharp-crate',
    name: 'mathsharp (Rust crate)',
    featured: false,
    summary: 'Zero-dependency math crate for units, geometry, trig, and linear algebra.',
    whyItMatters: 'Engineering discipline and API design under a hard dependency constraint.',
    stack: ['Rust'],
    url: 'https://github.com/JosephGurak/mathsharp',
  },
  {
    id: 'mathsharp-ports',
    name: 'MathSharp language ports',
    featured: false,
    summary: 'Go, JavaScript, and Python ports of the MathSharp surface for broader tooling experiments.',
    whyItMatters: 'Cross-language comfort helps when bridging DEX platforms, scripts, and integrations.',
    stack: ['Go', 'JavaScript', 'Python'],
    url: 'https://github.com/JosephGurak/mathsharp_golang',
  },
  {
    id: 'studytool',
    name: 'studytool',
    featured: false,
    summary: 'Flashcard-style study utility built in Rust.',
    whyItMatters: 'Small product loops — capture knowledge, practice, improve.',
    stack: ['Rust'],
    url: 'https://github.com/JosephGurak/studytool',
  },
  {
    id: 'se-tool',
    name: 'se_tool',
    featured: false,
    summary: 'Space Engineers ship-building calculation helper.',
    whyItMatters: 'Domain tooling with clear inputs and reproducible outputs.',
    stack: ['Rust'],
    url: 'https://github.com/JosephGurak/se_tool',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const secondaryProjects = projects.filter((p) => !p.featured)

export const proofCapabilities = [
  'NQL',
  'DEX automation',
  'Platform administration',
  'EUC tooling',
  'Endpoint scripting',
]

export const skillGroups = [
  {
    title: 'Digital Experience',
    items: [
      'Nexthink (Infinity)',
      'NQL',
      'DEX automation & remote-action style workflows',
      'Digital adoption & application experience concepts',
    ],
  },
  {
    title: 'Endpoint & automation',
    items: ['PowerShell', 'Windows endpoint hygiene', 'EUC workflow tooling', 'Desktop remediation scripts'],
  },
  {
    title: 'Build & ship',
    items: ['Rust', 'Tauri desktop apps', 'React / TypeScript', 'WASM & browser extensions'],
  },
]

export const siteMeta = {
  name: 'Joseph Gurak',
  headline: 'Building better digital employee experience',
  supporting:
    'As an EUC engineer I use Nexthink with certified depth across NQL, DEX automation, and platform administration — while shipping endpoint tooling and practical apps that reduce friction for people at work.',
  email: 'josephgurak@outlook.com',
  github: 'https://github.com/JosephGurak',
  location: 'United States',
}
