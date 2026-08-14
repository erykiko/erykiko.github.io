import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFound from './pages/NotFound.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="site-shell"><span>© 2025 [ NAME ]</span><span>Built with intention</span></footer>
    </>
  )
}
