import { GUIDELINES } from '../data/content'
import Section from './Section'
import GuidelinePanel from './GuidelinePanel'

export default function Guidelines() {
  return (
    <Section id="guidelines" label="Before you arrive" title="Know the rules" intro="Read these before you head to campus. They keep the celebration safe and enjoyable for everyone." className="bg-plum">
      <div className="mx-auto mt-8 max-w-3xl sm:mt-12">
        <div className="relative overflow-hidden rounded-2xl border border-bone/15 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-md sm:rounded-3xl sm:p-8 md:p-10">
          {/* Subtle ambient glass glow */}
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sun/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-burnt/10 blur-3xl"
            aria-hidden="true"
          />

          {/* Top subtle highlight */}
          <div
            className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-sun/40 to-transparent"
            aria-hidden="true"
          />

          <ol className="relative flex flex-col">
            {GUIDELINES.map((g, i) => (
              <GuidelinePanel
                key={g.title}
                index={i}
                isLast={i === GUIDELINES.length - 1}
                {...g}
              />
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}
