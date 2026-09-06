import { useState } from 'react'
import { interests, tools } from '../data/portfolio.js'

const SECTION_TABS = [
  { id: 'about', label: 'About me' },
  { id: 'tools', label: 'Tools' },
  { id: 'interests', label: 'Interests' },
]

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState('about')
  const [activeInterest, setActiveInterest] = useState(0)

  return (
    <section id="about-me" className="about-me" aria-labelledby="about-me-title">
      <div className="section-head">
        <h2 id="about-me-title">About me</h2>
        <span className="section-label">Personal / Interests</span>
      </div>

      <div className="work-tabs" role="tablist" aria-label="About me categories">
        {SECTION_TABS.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? 'work-tab active' : 'work-tab'}
            onClick={() => setActiveTab(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="about-me-panel" role="tabpanel">
        {activeTab === 'about' && (
          <div className="about-me-copy">
            <p>
              I am an early-career software developer from Rzeszów, currently studying Computer Science. I enjoy building things that are useful and easy to use, whether that is a web interface, a machine learning experiment, or a small game tool.
            </p>
            <p>
              Outside of coding I climb, play and run tabletop RPG sessions, and follow game design and AI. I am always looking for ways to combine these interests with code.
            </p>
          </div>
        )}

        {activeTab === 'tools' && (
          <div className="tools-list">
            {tools.map((group) => (
              <div className="tools-group" key={group.category}>
                <span className="section-label">{group.category}</span>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'interests' && (
          <div className="interest-carousel">
            <div className="interest-menu" role="tablist" aria-label="Interests">
              {interests.map((interest, index) => (
                <button
                  className={index === activeInterest ? 'interest-tab active' : 'interest-tab'}
                  key={interest.label}
                  onClick={() => setActiveInterest(index)}
                  role="tab"
                  aria-selected={index === activeInterest}
                >
                  {interest.label}
                </button>
              ))}
            </div>
            <div className="interest-panel" role="tabpanel">
              <span className="section-label">{interests[activeInterest].label}</span>
              <h3>{interests[activeInterest].title}</h3>
              <p>{interests[activeInterest].description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
