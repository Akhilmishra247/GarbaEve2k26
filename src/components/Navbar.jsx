import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { NAV, SITE } from '../data/content'
import { useGsap } from '../hooks/useMotion'

export default function Navbar() {
  const root = useRef(null)
  const [active, setActive] = useState('home')
  useGsap(root, () => { gsap.from('.nav-in', { y: -120, opacity: 0, duration: 0.9, ease: 'power4.out', stagger: 0.1 }) })
  useEffect(() => {
    const triggers = NAV.map(({ id }) => ScrollTrigger.create({
      trigger: `#${id}`, start: 'top 50%', end: 'bottom 50%', onToggle: (s) => s.isActive && setActive(id),
    }))
    return () => triggers.forEach((t) => t.kill())
  }, [])
  return (
    <header ref={root}>
      <a href="#home" aria-label={`${SITE.name} home`} className="nav-in fixed left-4 top-4 z-50 md:left-6 md:top-6">
        <img src="/assets/img/logo-garba.webp" alt="Garba Eve logo" className="h-12 w-12 rounded-lg object-cover shadow-hardsm md:h-16 md:w-16" />
      </a>
      <nav aria-label="Primary" className="nav-in fixed left-1/2 top-[4.5rem] z-50 w-max max-w-[calc(100vw-1.5rem)] -translate-x-1/2 overflow-x-auto rounded-xl border border-bone/20 bg-plum/90 p-1.5 backdrop-blur-md md:top-6">
        <ul className="flex w-max gap-1">
          {NAV.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} aria-current={active === id ? 'true' : undefined}
                className={`block whitespace-nowrap rounded-lg px-2 py-2 font-display text-[0.65rem] uppercase tracking-wide transition-colors sm:px-2.5 sm:text-xs md:px-5 md:tracking-widest ${active === id ? 'bg-burnt text-bone' : 'text-bone/70 hover:text-bone'}`}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="nav-in fixed right-4 top-4 z-50 flex items-center gap-2 md:right-6 md:top-6">
        <a href="https://luma.com/p4ugem08" className="btn !px-3 !py-2 text-xs !border-2 shadow-hardsm md:!px-6 md:!py-3">Register now</a>
      </div>
    </header>
  )
}
