import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { activities, education, experience, facts, projects } from '../data/portfolio.js'
import AboutMe from '../components/Interests.jsx'

const DEFAULT_TAB = 'experience'
const TABS = [
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'activities', label: 'Activities' },
]

const visibleProjects = projects.filter((project) => project.enabled !== false)

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialTab = TABS.some((tab) => tab.id === searchParams.get('tab'))
    ? searchParams.get('tab')
    : DEFAULT_TAB
  const [activeTab, setActiveTab] = useState(initialTab)

  function selectTab(tabId) {
    setActiveTab(tabId)
    setSearchParams({ tab: tabId }, { replace: true })
  }

  return (
    <main id="top" className="site-shell">
      <section className="hero">
        <div className="hero-photo-wrap">
          <img
            className="hero-photo"
            src="/photo.jpg"
            alt="Eryk Kopciuch"
            onError={(event) => { event.currentTarget.style.display = 'none' }}
          />
          <div className="hero-photo-placeholder" aria-hidden="true">Photo</div>
        </div>
        <div className="hero-main">
          <p className="eyebrow">Eryk Kopciuch</p>
          <h1>Software Developer</h1>
          <p className="hero-lede">
            Computer Science student focused on Unity, game tooling, and machine learning. I have internship experience in Unity and VR development, and I keep building side projects to learn. Looking for my first full-time role.
          </p>
          <div className="hero-actions">
            <a className="button" href="#work">View work</a>
            <a className="button button-ghost" href="#contact">Get in touch</a>
            <a className="button" href="/resume.pdf" download>Download resume</a>
          </div>
          <div className="hero-meta">
            {facts.map(([label, value]) => (
              <div className="hero-fact" key={label}>
                <span className="eyebrow">{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="work-section" aria-labelledby="work-title">
        <div className="section-head">
          <h2 id="work-title">Work</h2>
          <span className="section-label">Experience / Education / Activities / Projects</span>
        </div>

        <div className="work-tabs" role="tablist" aria-label="Work categories">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={activeTab === tab.id ? 'work-tab active' : 'work-tab'}
              onClick={() => selectTab(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="work-panel" role="tabpanel">
          {activeTab === 'experience' && (
            <div className="experience-list">
              {experience.map((entry) => (
                <article className="experience-entry" key={`${entry.company}-${entry.dates}`}>
                  <div>
                    <p className="eyebrow">{entry.dates}</p>
                    <h3>{entry.role}</h3>
                  </div>
                  <div>
                    <p className="experience-company">{entry.company}</p>
                    <p className="experience-description">{entry.description}</p>
                  </div>
                </article>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <article className="education-entry">
              <div>
                <p className="eyebrow">{education.status}</p>
                <h3>{education.major}</h3>
              </div>
              <div>
                <p className="experience-company">{education.school}</p>
                <p className="experience-description">Undergraduate studies in Computer Science.</p>
              </div>
            </article>
          )}

          {activeTab === 'activities' && (
            <div className="experience-list">
              {activities.map((entry) => (
                <article className="experience-entry" key={`${entry.company}-${entry.dates}`}>
                  <div>
                    <p className="eyebrow">{entry.dates}</p>
                    <h3>{entry.role}</h3>
                  </div>
                  <div>
                    <p className="experience-company">{entry.company}</p>
                    <p className="experience-description">{entry.description}</p>
                  </div>
                </article>
              ))}
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="project-list">
              {visibleProjects.map((project) => (
                <Link className="project-row" to={`/projects/${project.slug}?tab=projects`} key={project.slug}>
                  <div>
                    <h3>{project.title}</h3>
                    <span className="meta">{project.meta}</span>
                  </div>
                  <p className="project-row-description">{project.description}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <AboutMe />

      <section id="contact" className="contact">
        <h2>Let&apos;s build<br />something.</h2>
        <div className="contact-copy">
          <p>Find me here.</p>
          <div className="contact-links">
            <a className="contact-link" href="https://www.linkedin.com/in/eryk-kopciuch-278a8a213/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a className="contact-link" href="https://github.com/erykiko" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a className="contact-link" href="mailto:eryk.kopciuch@gmail.com">eryk.kopciuch@gmail.com</a>
          </div>
        </div>
      </section>
    </main>
  )
}
