import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/portfolio.js'
import Placeholder from '../components/Placeholder.jsx'
import NotFound from './NotFound.jsx'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((entry) => entry.slug === slug)

  if (!project) return <NotFound />

  return (
    <main className="site-shell route-page project-page">
      <Link className="back-link" to="/projects">← All projects</Link>
      <div className="project-page-head">
        <p className="eyebrow">{project.meta}</p>
        <h1>{project.title}</h1>
        <p className="project-lede">{project.description}</p>
      </div>
      <Placeholder />
      <div className="project-detail-grid">
        <span className="section-label">About this project</span>
        <div>
          <p className="project-detail-copy">{project.details}</p>
          <div className="project-facts">
            <div className="fact"><span>Stack</span><strong>{project.stack}</strong></div>
            <div className="fact"><span>Status</span><strong>{project.status}</strong></div>
          </div>
          {project.url && <a className="contact-link" href={project.url} target="_blank" rel="noreferrer">View on GitHub ↗</a>}
        </div>
      </div>
    </main>
  )
}
