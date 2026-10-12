import { CONTACT_PANELS, PEOPLE, SITE } from '../data/content'
import Section from './Section'
import ContactPanel from './ContactPanel'
import PersonCard from './PersonCard'

export default function ContactUs() {
  return (
    <Section id="contact" label="Get in touch" title="Contact us" intro={`Reach out to any core team member below, or follow ${SITE.instagram.handle} on Instagram for announcements.`} className="bg-ink">
      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {CONTACT_PANELS.map((p, i) => <ContactPanel key={p.title} index={i} {...p} />)}
      </ul>
      <h3 className="mt-24 max-w-3xl font-display text-4xl uppercase md:text-6xl">The people behind the chaos</h3>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PEOPLE.map((p) => <PersonCard key={p.name} {...p} />)}
      </ul>
    </Section>
  )
}
