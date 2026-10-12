import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const INTERACTIVE = 'a, button, [data-cursor]'

export default function CustomCursor() {
  const dot = useRef(null), ring = useRef(null)
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return // touch: disabled
    document.documentElement.classList.add('cursor-on')
    gsap.set([dot.current, ring.current], { xPercent: -50, yPercent: -50, opacity: 0 })
    const dx = gsap.quickTo(dot.current, 'x', { duration: 0.08 }), dy = gsap.quickTo(dot.current, 'y', { duration: 0.08 })
    const rx = gsap.quickTo(ring.current, 'x', { duration: 0.5, ease: 'power3' }), ry = gsap.quickTo(ring.current, 'y', { duration: 0.5, ease: 'power3' })
    const move = (e) => { gsap.set([dot.current, ring.current], { opacity: 1 }); dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY) }
    const over = (e) => {
      const hot = !!e.target.closest?.(INTERACTIVE)
      gsap.to(ring.current, { scale: hot ? 1.9 : 1, backgroundColor: hot ? 'rgba(255,201,60,.25)' : 'rgba(255,201,60,0)', duration: 0.25 })
      gsap.to(dot.current, { scale: hot ? 0.4 : 1, duration: 0.2 })
    }
    const leave = () => gsap.to([dot.current, ring.current], { opacity: 0 })
    window.addEventListener('pointermove', move); document.addEventListener('mouseover', over); document.addEventListener('mouseleave', leave)
    return () => {
      document.documentElement.classList.remove('cursor-on')
      window.removeEventListener('pointermove', move); document.removeEventListener('mouseover', over); document.removeEventListener('mouseleave', leave)
    }
  }, [])
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-100 hidden md:block">
      <div ref={ring} className="fixed left-0 top-0 h-10 w-10 rounded-full border-2 border-sun" />
      <div ref={dot} className="fixed left-0 top-0 h-2 w-2 rounded-full bg-sun" />
    </div>
  )
}
