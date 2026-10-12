import { CONTACT_PANELS, PEOPLE, SITE } from '../data/content'
import Section from './Section'
import ContactPanel from './ContactPanel'
import PersonCard from './PersonCard'

export default function ContactUs() {
  return (
    <Section id="contact" label="Get in touch" title="Contact us" intro={`Reach out to any core team member below, or follow ${SITE.instagram.handle} on Instagram for announcements.`} className="bg-ink">
      {/* <ul className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CONTACT_PANELS.map((p, i) => <ContactPanel key={p.title} index={i} {...p} />)}
      </ul> */}
      {/* <h3 className="mt-16 max-w-3xl font-display text-3xl uppercase sm:mt-24 sm:text-4xl md:text-6xl">The people behind the chaos</h3> */}
      <ul className="mx-auto mt-6 grid max-w-xs grid-cols-2 gap-3 sm:mt-8 sm:max-w-md sm:gap-5 md:mt-12 md:max-w-xl md:gap-8 lg:max-w-2xl">
        {PEOPLE.map((p) => <PersonCard key={p.name} {...p} />)}
      </ul>
    </Section>
  )
}
