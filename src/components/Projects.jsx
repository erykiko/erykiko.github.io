import { projects } from '../data/portfolio.js'
import ProjectCard from './ProjectCard.jsx'

const visibleProjects = projects.filter((project) => project.enabled !== false)

export default function Projects({ compact = false }) {
  const count = visibleProjects.length
  const label = count > 0 ? `(01 — ${String(count).padStart(2, '0')})` : ''

  return (
    <section id="projects">
      <div className="section-head">
        <h2>{compact ? 'Selected projects' : 'Projects'}</h2>
        <span className="section-label">{label}</span>
      </div>
      <div className="work-grid">
        {visibleProjects.map((project) => <ProjectCard project={project} key={project.slug} />)}
      </div>
    </section>
  )
}
