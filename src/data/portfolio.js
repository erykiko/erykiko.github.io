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
    gallery: [
      {src: '/kilter.png'}
    ],
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
    description: 'Souls-like games taught me to stay calm under pressure, learn from repeated failure, and approach hard challenges as puzzles that just need the right timing and pattern.',
  },
  {
    label: '02 / Climbing',
    description: 'Climbing trains me to break hard problems into small moves, stay calm under pressure, and try a completely different angle when the obvious path does not work.',
  },
  {
    label: '03 / TTRPGs',
    description: 'Running tabletop RPGs taught me how to improvise, keep a group aligned, and write rules that stay fun even when the plan falls apart.',
  },
]

export const experience = [
  {
    role: 'Unity Developer Intern',
    company: 'CI Global',
    dates: 'Summer 2026',
    description: 'Automated deployment and updates of company Unity apps, created a tool to speed up prefab work, and refactored an old project based on a similar one.',
  },
  {
    role: 'Level Design Intern',
    company: 'Simplicity Games',
    dates: 'Nov - Dec 2022',
    description: 'Greyboxed and play-tested levels for "Archery Red", a Unity VR game.',
  },
]

export const activities = [
  {
    role: 'SKNI KOD Member',
    company: 'Politechnika Rzeszowska',
    dates: '2023 — Present',
    description: 'Participating in student-led group projects and organizing educational events.',
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
    items: ['CachyOS'],
  },
  {
    category: 'Editor',
    items: ['VS Code', 'Rider'],
  },
  {
    category: 'Game engine',
    items: ['Unity'],
  },
  {
    category: 'Languages',
    items: ['Python', 'C#', 'C++'],
  },
  {
    category: 'AI agents',
    items: ['Claude Code', 'Opencode'],
  },
]
