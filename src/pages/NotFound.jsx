import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="site-shell route-page">
      <p className="eyebrow">404</p>
      <h1>Page not found.</h1>
      <Link className="back-link" to="/">← Back home</Link>
    </main>
  )
}
