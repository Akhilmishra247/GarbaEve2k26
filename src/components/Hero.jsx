import { useRef, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import gsap from 'gsap'
import { useGsap } from '../hooks/useMotion'
import { SITE } from '../data/content'

function HeroVideo() {
  const [failed, setFailed] = useState(false) // hero.mp4 not added yet -> poster only
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-ink" aria-hidden="true">
      <img src="/assets/img/hero-poster.svg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      {!failed && (
        <video className="grade absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/assets/img/hero-poster.svg">
          <source src="/assets/video/hero.webm" type="video/webm" />
          <source src="/assets/video/hero.mp4" type="video/mp4" onError={() => setFailed(true)} />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-burnt/10 to-ink" />
    </div>
  )
}

export default function Hero() {
  const root = useRef(null)
  useGsap(root, (el) => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.3 })
    tl.from('.hero-eyebrow', { y: 30, opacity: 0, duration: 0.7 })
      .from('.hero-char', { yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.06, ease: 'expo.out' }, '-=0.3')
      .from('.hero-in', { y: 40, opacity: 0, duration: 0.8, stagger: 0.12 }, '-=0.4')
    gsap.to('.hero-copy', { yPercent: -10, ease: 'none', scrollTrigger: { trigger: el, start: 'top top', end: 'bottom top', scrub: true } })
  })
  return (
    <section id="home" ref={root} tabIndex={-1} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-28 pt-32 text-center">
      <HeroVideo />
      <div className="hero-copy flex w-full flex-col items-center">
        <p className="hero-eyebrow flex items-center gap-3 font-display text-xs uppercase tracking-ultra text-bone/80 md:text-base">
          <span aria-hidden="true" className="inline-block h-4 w-4 rotate-45 bg-sun" />{SITE.eyebrow}
        </p>
        <h1 aria-label={SITE.name} className="distress mt-6 w-full overflow-hidden bg-black py-2 font-display text-titlesm uppercase tracking-tight text-bone md:text-title">
          <span aria-hidden="true" className="flex justify-center">
           {[...SITE.name].map((c, i) => <span key={i} className="hero-char inline-block">{c}</span>)}
          </span>
        </h1>
        <p className="hero-in mt-8 max-w-xl text-lg text-bone/80 md:text-xl">{SITE.description}</p>
        <div className="hero-in mt-10 flex flex-col gap-5 sm:flex-row">
          <a href="#guidelines" className="btn">Read the guidelines</a>
          <a href="#contact" className="btn btn-red">Contact us</a>
        </div>
      </div>
      <div aria-hidden="true" className="hero-in absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-ultra text-bone/50">
        Scroll<ArrowDown className="h-4 w-4 animate-bounce motion-reduce:animate-none" />
      </div>
    </section>
  )
}
