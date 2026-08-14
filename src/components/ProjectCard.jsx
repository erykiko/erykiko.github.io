import { Link } from 'react-router-dom'
import Placeholder from './Placeholder.jsx'

export default function ProjectCard({ project }) {
  return (
    <Link className="project" to={`/projects/${project.slug}`}>
      <Placeholder />
      <div className="project-info">
        <h3>{project.title}</h3>
        <span className="meta">{project.meta} {project.url && '↗'}</span>
      </div>
    </Link>
  )
}
