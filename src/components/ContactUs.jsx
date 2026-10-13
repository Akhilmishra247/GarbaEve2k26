import { CONTACT_PANELS, PEOPLE, SITE } from '../data/content'
import Section from './Section'
import ContactPanel from './ContactPanel'
import PersonCard from './PersonCard'

const titleBase =
  'block font-display font-black uppercase leading-[0.9] tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-9xl'

const ContactTitle = (
  <span className="block text-center">
    {/* Line 1: solid gradient fill */}
    <span
      className={titleBase}
      style={{
        backgroundImage:
          'linear-gradient(90deg, #ffd36e 0%, #fff4e0 28%, #ff8a3d 52%, #e0284a 72%, #f59a3a 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
      }}
    >
      Contact
    </span>
    {/* Line 2: outlined, hollow text */}
    <span
      aria-hidden="false"
      className={`${titleBase} -mt-1 sm:-mt-2 md:-mt-3`}
      style={{
        WebkitTextFillColor: 'transparent',
        WebkitTextStroke: '2px rgba(255,255,255,0.35)',
        color: 'transparent',
      }}
    >
      Us
    </span>
  </span>
)

export default function ContactUs() {
  return (
    <Section
      id="contact"
      label="Get in touch"
      title={ContactTitle}
      intro={`Reach out to any core team member below, or follow ${SITE.instagram.handle} on Instagram for announcements.`}
      className="bg-ink"
    >
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