import { Link } from 'react-router-dom'
import { education, experience, facts } from '../data/portfolio.js'
import Interests from '../components/Interests.jsx'
import Projects from '../components/Projects.jsx'

export default function HomePage() {
  return (
    <main id="top" className="site-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">Student, aspiring to be a software developer</p>
          <h1>Ideas into<br />useful things.</h1>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Open to opportunities / 2025</p>
          <p>I am an early-career developer building thoughtful, accessible websites while growing my skills one project at a time.</p>
        </div>
      </section>

      <Projects compact />

      <section id="about" className="split">
        <div><span className="section-label">(02) About</span></div>
        <div>
          <p className="about-text">I am a curious developer focused on learning in public, building useful interfaces, and turning feedback into better work.</p>
          <div className="about-aside">
            {facts.map(([label, value]) => <div className="fact" key={label}><span>{label}</span><strong>{value}</strong></div>)}
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="section-head"><h2>Experience</h2><span className="section-label">(03)</span></div>
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
        <div className="education-row">
          <span className="section-label">Current major</span>
          <div>
            <h3>{education.major}</h3>
            <p className="experience-company">{education.school} / {education.status}</p>
          </div>
        </div>
      </section>

      <Interests />

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
