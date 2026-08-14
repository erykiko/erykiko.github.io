import { projects } from '../data/portfolio.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects({ compact = false }) {
  return (
    <section id="projects">
      <div className="section-head">
        <h2>{compact ? 'Selected projects' : 'Projects'}</h2>
        <span className="section-label">(01 — 03)</span>
      </div>
      <div className="work-grid">
        {projects.map((project) => <ProjectCard project={project} key={project.slug} />)}
      </div>
    </section>
  )
}
