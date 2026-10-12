import { useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
gsap.registerPlugin(ScrollTrigger)

export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Lenis smooth scroll tied to ScrollTrigger; in-page #links glide. Plain browser behavior if reduced motion. */
export function useSmoothScroll() {
  useEffect(() => {
    const reduced = reducedMotion()
    const lenis = reduced ? null : new Lenis({ lerp: 0.1 })
    let tick
    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update)
      tick = (t) => lenis.raf(t * 1000)
      gsap.ticker.add(tick)
      gsap.ticker.lagSmoothing(0)
    }
    const onClick = (e) => {
      const a = e.target.closest?.('a[href^="#"]')
      const id = a?.getAttribute('href').slice(1)
      const target = id && document.getElementById(id)
      if (!target || e.defaultPrevented || e.metaKey || e.ctrlKey) return
      e.preventDefault()
      history.replaceState(null, '', `#${id}`)
      target.focus?.({ preventScroll: true })
      lenis ? lenis.scrollTo(target, { offset: 0 }) : target.scrollIntoView()
    }
    document.addEventListener('click', onClick)
    return () => { document.removeEventListener('click', onClick); if (lenis) { gsap.ticker.remove(tick); lenis.destroy() } }
  }, [])
}

/** Runs fn inside a scoped gsap.matchMedia only when motion is allowed. */
export function useGsap(ref, fn) {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => fn(ref.current))
    return () => mm.revert()
  }, []) // eslint-disable-line
}
