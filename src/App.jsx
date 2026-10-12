import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSmoothScroll } from './hooks/useMotion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Guidelines from './components/Guidelines'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

export default function App() {
  useSmoothScroll()
  useEffect(() => { const r = () => ScrollTrigger.refresh(); window.addEventListener('load', r); return () => window.removeEventListener('load', r) }, [])
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <main><Hero /><Ticker /><Guidelines /><ContactUs /></main>
      <Footer />
      <CustomCursor />
    </>
  )
}
