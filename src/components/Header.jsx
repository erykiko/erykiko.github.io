import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-shell topbar">
      <Link className="wordmark" to="/">[ Eryk Kopciuch ]</Link>
      <nav className="nav" aria-label="Main navigation">
        <a href="/#projects">Projects</a>
        <a href="/#about">About</a>
        <a href="/#contact">Contact <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  )
}
