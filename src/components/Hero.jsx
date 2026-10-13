import { useEffect, useRef, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import gsap from 'gsap'
import { useGsap } from '../hooks/useMotion'
import { SITE } from '../data/content'

function HeroVideo() {
  const [failed, setFailed] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play().catch(() => {
        // Autoplay policy prevented playback until user interaction
      })
    }
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-ink" aria-hidden="true">
      <img src="/assets/img/hero-poster.svg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      {!failed && (
        <video
          ref={videoRef}
          className="grade absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/img/hero-poster.svg"
        >
          <source src="/assets/video/hero.mp4" type="video/mp4" onError={() => setFailed(true)} />
          <source src="/assets/video/hero.mp4.mp4" type="video/mp4" />
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
    <section id="home" ref={root} tabIndex={-1} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-28 pt-28 text-center sm:pt-36 md:pt-32">
      <HeroVideo />
      <div className="hero-copy flex w-full flex-col items-center">
        <p className="hero-eyebrow flex max-w-full flex-wrap items-center justify-center gap-2 text-center font-display text-[0.65rem] uppercase tracking-[0.16em] text-bone/80 sm:gap-3 sm:text-xs sm:tracking-[0.22em] md:text-base md:tracking-ultra">
          <span aria-hidden="true" className="inline-block h-3 w-3 shrink-0 rotate-45 bg-sun sm:h-4 sm:w-4" />{SITE.eyebrow}
        </p>
        <h1 aria-label={SITE.name} className="distress mt-6 w-full overflow-hidden bg-black py-2 font-display uppercase tracking-tight text-bone" style={{ fontSize: 'clamp(2rem, 10vw, 10rem)' }}>
          <span aria-hidden="true" className="flex justify-center">
           {[...SITE.name].map((c, i) => <span key={i} className="hero-char inline-block">{c}</span>)}
          </span>
        </h1>
        <p className="hero-in mt-6 max-w-xl text-base text-bone/80 sm:mt-8 sm:text-lg md:text-xl">{SITE.description}</p>
        <div className="hero-in mt-8 flex w-full max-w-md flex-col gap-4 sm:mt-10 sm:flex-row sm:justify-center sm:gap-5">
          <a href="#guidelines" className="btn w-full text-center sm:w-auto">Read the guidelines</a>
          <a href={SITE.signInHref} target="_blank" rel="noopener noreferrer" className="btn btn-red w-full text-center sm:w-auto">Register now</a>
        </div>
      </div>
      <div aria-hidden="true" className="hero-in absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-ultra text-bone/50">
        Scroll<ArrowDown className="h-4 w-4 animate-bounce motion-reduce:animate-none" />
      </div>
    </section>
  )
}