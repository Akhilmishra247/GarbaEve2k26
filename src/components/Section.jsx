import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsap } from '../hooks/useMotion'

/** Section shell. Headings and every [data-reveal] child animate in progressively as they enter view. */
export default function Section({ id, label, title, intro, children, className = '' }) {
  const ref = useRef(null)
  useGsap(ref, (el) => {
    gsap.from(el.querySelector('h2'), { yPercent: 50, opacity: 0, duration: 0.9, ease: 'power4.out', scrollTrigger: { trigger: el, start: 'top 75%' } })
    const items = el.querySelectorAll('[data-reveal]')
    gsap.set(items, { y: 60, opacity: 0 })
    ScrollTrigger.batch(items, { start: 'top 90%', once: true, onEnter: (b) => gsap.to(b, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12 }) })
  })
  return (
    <section id={id} ref={ref} tabIndex={-1} className={`px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-32 ${className}`}>
      <div className="mx-auto max-w-screen-2xl">
        <p className="inline-block rounded bg-sun px-3 py-1 font-display text-[0.65rem] uppercase tracking-widest text-ink sm:text-xs">{label}</p>
        <h2 className="mt-4 font-display text-rules uppercase">{title}</h2>
        {intro && <p className="mt-4 max-w-xl text-base text-bone/70 sm:text-lg">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
