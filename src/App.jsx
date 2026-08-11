import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import PopupModal from './components/PopupModal.jsx'
import ScrollToTop, { useScrollResetOnRouteChange } from './components/ScrollToTop.jsx'
import Loader from './components/Loader.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Academic from './pages/Academic.jsx'
import Admission from './pages/Admission.jsx'
import News from './pages/News.jsx'
import Contact from './pages/Contact.jsx'

// Wraps each route's content in a small fade/slide so navigating
// between pages feels like one continuous experience.
function PageTransition({ children }) {
  const location = useLocation()
  useScrollResetOnRouteChange()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.28, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <Loader />}
      <Navbar />
      <PageTransition>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </PageTransition>
      <Footer />
      <ScrollToTop />
      <PopupModal />
      <SpeedInsights />
    </>
  )
}
