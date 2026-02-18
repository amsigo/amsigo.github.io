import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from '@/components/Layout'
import About from '@/pages/About'
import Experience from '@/pages/Experience'
import Projects from '@/pages/Projects'
import ProjectDetail from '@/pages/ProjectDetail'
import ExternalActivities from '@/pages/ExternalActivities'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectDetail />} />
        <Route path="activities" element={<ExternalActivities />} />
      </Route>
    </Routes>
    </>
  )
}
