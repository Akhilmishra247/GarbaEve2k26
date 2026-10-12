import { GUIDELINES } from '../data/content'
import Section from './Section'
import GuidelinePanel from './GuidelinePanel'

export default function Guidelines() {
  return (
    <Section id="guidelines" label="Before you arrive" title="Know the rules" intro="Read these before you head to campus. They keep the celebration safe and enjoyable for everyone." className="bg-plum">
      <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {GUIDELINES.map((g, i) => <GuidelinePanel key={g.title} index={i} {...g} />)}
      </ol>
    </Section>
  )
}
