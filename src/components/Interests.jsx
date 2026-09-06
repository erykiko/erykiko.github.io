import { useState } from 'react'
import { interests, tools } from '../data/portfolio.js'

const SECTION_TABS = [
  { id: 'about', label: 'Who am I?' },
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

      <div className="work-tabs" role="tablist" aria-label="About categories">
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
          <div className="about-me-grid">
            <div className="about-me-copy">
              <p>
                I am an early-career software developer from Rzeszów, currently studying Computer Science. I enjoy building things, whether that is a web interface, a machine learning experiment, or a small game.
              </p>
              <p>
                Outside of coding I climb, play video games and run tabletop RPG sessions. I follow game design and AI and always look for ways to combine these interests with code.
              </p>
            </div>
            <div className="fastfetch-shell">
              <div className="fastfetch-bar">
                <span></span>
                <span></span>
                <span></span>
                <span className="fastfetch-title">erykiko@portfolio</span>
              </div>
              <div className="fastfetch-body">
                <div className="fastfetch-prompt">
                  <span className="fastfetch-user">erykiko@portfolio</span>
                  <span className="fastfetch-separator">:~$</span>
                  <span> mytools</span>
                </div>
                <dl className="fastfetch-info">
                  {tools.map((group) => (
                    <div className="fastfetch-row" key={group.category}>
                      <dt className="fastfetch-key">{group.category}</dt>
                      <dd className="fastfetch-value">{group.items.join(', ')}</dd>
                    </div>
                  ))}
                </dl>
                <div className="fastfetch-colors" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
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
              <p className="interest-description">{interests[activeInterest].description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
