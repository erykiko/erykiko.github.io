import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-shell topbar">
      <Link className="wordmark" to="/">[ Eryk Kopciuch ]</Link>
      <nav className="nav" aria-label="Main navigation">
        <a href="/#work">Work</a>
        <a href="/#about-me">About me</a>
        <a href="/#contact">Contact</a>
      </nav>
    </header>
  )
}
