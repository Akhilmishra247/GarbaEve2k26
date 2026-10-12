import { useRef } from 'react'
import gsap from 'gsap'
import { ArrowRight, ArrowUp } from 'lucide-react'
import InstagramIcon from './InstagramIcon'
import { NAV, SITE } from '../data/content'
import { useGsap } from '../hooks/useMotion'

export default function Footer() {
  const ref = useRef(null)
  useGsap(ref, (el) => {
    gsap.from(el.querySelectorAll('.foot-in'), { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08, scrollTrigger: { trigger: el, start: 'top 90%' } })
  })
  const marqueeText = `${SITE.name} ✦ ONE NIGHT ✦ ENDLESS CIRCLES ✦`

  return (
    <footer ref={ref} className="overflow-hidden bg-black px-4 pt-10 md:px-10 md:pt-14">
      <div className="foot-in mx-auto grid max-w-screen-2xl grid-cols-1 gap-9 pb-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        <div>
          <div className="flex items-center gap-4">
            <img src="/assets/img/logo-garba.webp" alt="Garba Eve logo" className="h-14 w-14 shrink-0 rounded-lg object-cover shadow-hardsm" />
            <p className="font-display text-2xl uppercase">{SITE.name}</p>
          </div>
          <p className="mt-4 max-w-sm text-bone/70">{SITE.tagline}</p>
        </div>

        <nav aria-label="Footer" className="sm:justify-self-end lg:justify-self-start">
          <h2 className="mb-4 font-display text-sm uppercase tracking-widest text-bone/50">Quick links</h2>
          <ul className="space-y-3">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="group inline-flex items-center gap-2 font-display text-lg uppercase text-burnt transition-colors hover:text-sun">
                  <span className="relative">
                    {n.label}
                    <span aria-hidden="true" className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-sun transition-transform duration-200 group-hover:scale-x-100" />
                  </span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 font-display text-sm uppercase tracking-widest text-bone/50">Connect</h2>
          <a href="https://instagram.com/jss_garba2k26?srtk=MWFodTRianFyZnh4dQ%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-sun transition-colors hover:text-burnt">
            <InstagramIcon className="h-5 w-5" />{SITE.instagram.handle}
          </a>
        </div>
      </div>

      {/* <p aria-hidden="true" className="footer-wordmark foot-in mx-auto my-2 w-full select-none text-center font-display uppercase" style={{ fontSize: 'clamp(1.75rem, 8vw, 8rem)' }}>{SITE.name}</p> */}

      {/* <div className="marquee overflow-hidden border-y border-bone/20 py-3" aria-label="Garba Eve'26 — One night — Endless circles">
        <div className="marquee-track flex">
          {[0, 1].map((copy) => (
            <div key={copy} aria-hidden={copy === 1} className="flex shrink-0">
              {[0, 1, 2].map((item) => (
                <span key={item} className="whitespace-nowrap px-5 font-display text-sm uppercase tracking-widest text-sun md:text-base">{marqueeText}</span>
              ))}
            </div>
          ))}
        </div>
      </div> */}

      <div className="foot-in mx-auto flex max-w-screen-2xl flex-col gap-4 border-t border-bone/20 py-5 text-sm text-bone/60 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <img src="/assets/img/team-mmil-logo.png?v=2" alt="Microsoft Mobile Innovation Lab" className="h-10 w-auto object-contain" />
          <p className="text-xs sm:text-sm">Designed and Developed by MMIL</p>
        </div>
        <a href="#home" className="inline-flex w-fit items-center gap-2 font-bold uppercase tracking-widest text-sun transition-all duration-200 hover:-translate-y-1 hover:text-bone hover:[text-shadow:2px_2px_0_#ff5722]">
          Back to top<ArrowUp aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </footer>
  )
}
