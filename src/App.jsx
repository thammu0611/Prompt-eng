import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Institute from './pages/Institute'
import Leadership from './pages/Leadership'
import Academics from './pages/Academics'
import Departments from './pages/Departments'
import Admissions from './pages/Admissions'
import Faculty from './pages/Faculty'
import Research from './pages/Research'
import CampusLife from './pages/CampusLife'
import Placements from './pages/Placements'
import Gallery from './pages/Gallery'
import News from './pages/News'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/institute" element={<Institute />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/research" element={<Research />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
