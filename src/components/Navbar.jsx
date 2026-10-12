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
    <header ref={root} className="absolute inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 sm:gap-4">
        {/* Left Fest Logo */}
        <a href="#home" aria-label={`${SITE.name} home`} className="nav-in shrink-0">
          <img
            src="/assets/img/logo-garba.webp"
            alt="Garba Eve logo"
            className="h-10 w-10 rounded-lg object-cover shadow-hardsm transition-transform hover:scale-105 sm:h-12 sm:w-12 md:h-14 md:w-14"
          />
        </a>

        {/* Center Navigation Bar */}
        <nav
          aria-label="Primary"
          className="nav-in shrink-0 rounded-xl border border-bone/20 bg-plum/90 p-1 shadow-lg backdrop-blur-md sm:p-1.5"
        >
          <ul className="flex items-center gap-1">
            {NAV.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  className={`block whitespace-nowrap rounded-lg px-2.5 py-1.5 font-display text-[0.62rem] uppercase tracking-wide transition-colors sm:px-3 sm:py-2 sm:text-xs md:px-5 md:tracking-widest ${
                    active === id ? 'bg-burnt text-bone' : 'text-bone/70 hover:text-bone'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right College Logo */}
        <div className="nav-in shrink-0">
          <img
            src="/assets/img/jss-ate-logo.png?v=2"
            alt="J.S.S. Academy of Technical Education, Noida"
            className="h-10 w-10 rounded-full object-cover shadow-hardsm transition-transform hover:scale-105 sm:h-12 sm:w-12 md:h-14 md:w-14"
          />
        </div>
      </div>
    </header>
  )
}
