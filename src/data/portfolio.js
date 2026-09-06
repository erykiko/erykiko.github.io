export const projects = [
  {
    slug: 'ml-kilter-route-generation',
    title: 'ML Kilter Route Generation',
    meta: 'Python / PyTorch',
    url: 'https://github.com/erykiko/ml-kilter-route-generation',
    description: 'A machine learning project exploring how to generate climbing routes for the Kilter Board from a board layout and target difficulty.',
    details: 'The project treats route generation as a sequence-to-sequence problem. A model takes a board ID and difficulty as input, then generates a tokenized sequence of hold placements and role markers. The intended direction is an encoder-decoder transformer trained on the Kilter Board Dataset.',
    stack: ['Python', 'PyTorch', 'Deep Learning'],
    status: 'Paused for now / future development',
    gallery: [],
    enabled: true,
  },
  {
    slug: 'dm-handy',
    title: 'DM-handy',
    meta: 'C++ / FTXUI',
    url: 'https://github.com/erykiko/DM-handy',
    description: 'A terminal user interface for organizing Dungeons & Dragons sessions.',
    details: 'DM-handy brings several useful session tools into one focused command-line application. It includes character card editing with file save/load, dice rolling with a summary of recent throws, and an initiative tracker with editable hit points.',
    stack: ['C++', 'FTXUI'],
    status: 'Personal project',
    gallery: [],
    enabled: false,
  },
  {
    slug: 'walkers-sandbox',
    title: 'WalkersSandbox',
    meta: 'In progress',
    description: 'A project allowing me to explore chunk-based terrain generation and procedural animations.',    
    details: 'A project demonstrating the integration of a dynamically generated environment with a procedural character animation system. It covers the implementation of continuous noise algorithms for chunk-based terrain generation and the use of Inverse Kinematics (IK) to drive a multi-legged agent across uneven ground.',
    stack: ['Unity'],
    status: 'In progress',
    gallery: [
      { src: '/walkers_sandbox.mp4', alt: 'WalkersSandbox chunk-based terrain generation demo' },
    ],
    enabled: true,
  },
]

export const facts = [
  ['Based in', 'Rzeszów / Remote'],
  ['Focus', 'Unity, Machine Learning'],
  ['Currently', 'Student, looking for a job'],
]

export const interests = [
  {
    label: '01 / Games',
    title: 'Clear interfaces.',
    description: 'TODO expand that section',
  },
  {
    label: '02 / Climbing',
    title: 'Problems to solve.',
    description: 'Climbing gives me a reason to think creatively, stay patient, and look for a different approach when the first one fails.',
  },
  {
    label: '03 / TTRPG\'s',
    title: 'Useful small systems.',
    description: 'TODO expand this section',
  },
]

export const experience = [
  {
    role: 'Unity Developer Intern',
    company: 'CI Global',
    dates: 'Summer 2026',
    description: 'Automated deployment and updates of company Unity apps, created a tool to speed up work on prefabs, refactored old project, based on simillar one.',
  },
  {
    role: 'Level Design Intern',
    company: 'Simplicity Games',
    dates: 'Nov - Dec 2022',
    description: 'Greyboxed and play-tested levels for a "Archery Red" - Unity VR game.',
  },
]

export const activities = [
  {
    role: 'SKNI KOD Member',
    company: 'Politechnika Rzeszowska',
    dates: '2023 — Present',
    description: 'Participating in student-led group projects, organisation of educational events.(chyba niegramatyczne)',
  },
]

export const education = {
  major: 'Computer Science',
  school: 'Politechnika Rzeszowska',
  status: 'Undergraduate',
}

export const tools = [
  {
    category: 'OS',
    items: ['Windows 11', 'Ubuntu'],
  },
  {
    category: 'Editor',
    items: ['VS Code', 'Neovim'],
  },
  {
    category: 'Game engine',
    items: ['Unity'],
  },
  {
    category: 'Languages',
    items: ['Python', 'C#', 'C++', 'JavaScript'],
  },
]
