export const projects = [
  {
    slug: 'ml-kilter-route-generation',
    title: 'ML Kilter Route Generation',
    meta: 'Python / PyTorch',
    url: 'https://github.com/erykiko/ml-kilter-route-generation',
    description: 'A machine learning project exploring how to generate climbing routes for the Kilter Board from a board layout and target difficulty.',
    details: 'The project treats route generation as a sequence-to-sequence problem. A model takes a board ID and difficulty as input, then generates a tokenized sequence of hold placements and role markers. The intended direction is an encoder-decoder transformer trained on the Kilter Board Dataset.',
    stack: 'Python, PyTorch, Hugging Face Transformers',
    status: 'Paused for now / future development',
  },
  {
    slug: 'dm-handy',
    title: 'DM-handy',
    meta: 'C++ / FTXUI',
    url: 'https://github.com/erykiko/DM-handy',
    description: 'A terminal user interface for organizing Dungeons & Dragons sessions.',
    details: 'DM-handy brings several useful session tools into one focused command-line application. It includes character card editing with file save/load, dice rolling with a summary of recent throws, and an initiative tracker with editable hit points.',
    stack: 'C++, FTXUI',
    status: 'Personal project',
  },
  {
    slug: 'walkers-sandbox',
    title: 'WalkersSandbox',
    meta: 'In progress',
    description: 'An active project currently being explored and developed.',
    details: 'This project page is a placeholder while the project is in progress. More details, screenshots, and a link will be added as the work takes shape.',
    stack: 'Details coming soon',
    status: 'In progress',
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
    label: '02 / Machine learning',
    title: 'Learning from data.',
    description: 'I am curious about how models can find patterns and help solve practical problems, especially when the process is explainable.',
  },
  {
    label: '03 / Climbing',
    title: 'Problems to solve.',
    description: 'Climbing gives me a reason to think creatively, stay patient, and look for a different approach when the first one fails.',
  },
  {
    label: '04 / TTRPG\'s',
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

export const education = {
  major: 'Computer Science',
  school: 'Politechnika Rzeszowska',
  status: 'Undergraduate',
}
