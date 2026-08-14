import { useEffect, useState } from 'react'
import { interests } from '../data/portfolio.js'

export default function Interests() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeInterest = interests[activeIndex]

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % interests.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  function showInterest(index) {
    setActiveIndex((index + interests.length) % interests.length)
  }

  return (
    <section className="interests" aria-labelledby="interests-title">
      <div className="section-head">
        <h2 id="interests-title">Interests</h2>
        <span className="section-label">(04)</span>
      </div>
      <div className="interest-carousel">
        <div className="interest-menu" role="tablist" aria-label="Interests">
          {interests.map((interest, index) => (
            <button
              className={index === activeIndex ? 'interest-tab active' : 'interest-tab'}
              key={interest.label}
              onClick={() => showInterest(index)}
              role="tab"
              aria-selected={index === activeIndex}
            >
              {interest.label}
            </button>
          ))}
        </div>
        <div className="interest-panel" role="tabpanel" aria-live="polite">
          <span className="section-label">{activeInterest.label}</span>
          <h3>{activeInterest.title}</h3>
          <p>{activeInterest.description}</p>
        </div>
      </div>
    </section>
  )
}
