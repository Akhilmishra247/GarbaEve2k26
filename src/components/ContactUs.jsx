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
      align="center"
      intro={`Reach out to any core team member below, or follow ${SITE.instagram.handle} on Instagram for announcements.`}
      className="bg-ink"
    >
      <div className="mx-auto mt-8 w-full max-w-6xl sm:mt-12">
        <ul className="grid grid-cols-2 gap-3.5 sm:gap-6 lg:grid-cols-4 lg:gap-6 items-stretch">
          {PEOPLE.map((p, index) => (
            <PersonCard key={p.name} index={index} {...p} />
          ))}
        </ul>
      </div>
    </Section>
  )
}