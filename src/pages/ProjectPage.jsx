import { Link, useParams, useSearchParams } from 'react-router-dom'
import { projects } from '../data/portfolio.js'
import Placeholder from '../components/Placeholder.jsx'
import KilterRouteLab from '../components/KilterRouteLab.jsx'
import NotFound from './NotFound.jsx'

const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov', '.ogg']

function isVideo(src) {
  const lower = src.toLowerCase()
  return VIDEO_EXTENSIONS.some((ext) => lower.endsWith(ext))
}

function GalleryItem({ item, projectTitle, index }) {
  const alt = item.alt || `${projectTitle} screenshot ${index + 1}`

  if (isVideo(item.src)) {
    return (
      <video
        src={item.src}
        alt={alt}
        autoPlay
        muted
        loop
        playsInline
      />
    )
  }

  return <img src={item.src} alt={alt} />
}

function ProjectGallery({ project }) {
  if (project.slug === 'ml-kilter-route-generation') {
    return (
      <div className="project-demo">
        <KilterRouteLab />
      </div>
    )
  }

  return (
    <div className="project-gallery">
      {project.gallery?.length > 0 ? (
        project.gallery.map((item, index) => (
          <div className="project-gallery-item" key={index}>
            <GalleryItem item={item} projectTitle={project.title} index={index} />
          </div>
        ))
      ) : (
        <>
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </>
      )}
    </div>
  )
}

export default function ProjectPage() {
  const { slug } = useParams()
  const [searchParams] = useSearchParams()
  const project = projects.find((entry) => entry.slug === slug)
  const backTab = searchParams.get('tab')
  const backTo = backTab ? `/?tab=${backTab}` : '/projects'

  if (!project) return <NotFound />

  return (
    <main className="site-shell route-page project-page">
      <Link className="back-link" to={backTo}>← Back</Link>

      <header className="project-page-head">
        <div className="project-page-title">
          <p className="eyebrow">{project.meta}</p>
          <h1>{project.title}</h1>
          <p className="project-lede">{project.description}</p>
        </div>
        {project.stack?.length > 0 && (
          <div className="project-tech">
            <span className="section-label">Stack</span>
            <ul className="tech-tiles">
              {project.stack.map((tech) => <li className="tech-tile" key={tech}>{tech}</li>)}
            </ul>
          </div>
        )}
      </header>

      <section className="project-showcase" aria-labelledby="showcase-title">
        <h2 id="showcase-title" className="sr-only">Demo and screenshots</h2>
        <ProjectGallery project={project} />
      </section>

      <section className="project-detail-grid" aria-labelledby="about-title">
        <span id="about-title" className="section-label">About this project</span>
        <div>
          <p className="project-detail-copy">{project.details}</p>
          <div className="project-facts">
            <div className="fact"><span>Status </span><strong>{project.status}</strong></div>
          </div>
          {project.url && <a className="contact-link" href={project.url} target="_blank" rel="noreferrer">View on GitHub ↗</a>}
        </div>
      </section>
    </main>
  )
}
