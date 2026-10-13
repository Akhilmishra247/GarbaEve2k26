import { CONTACT_PANELS, PEOPLE, SECURITY_PEOPLE, SITE } from '../data/content'
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
      <div className="mx-auto mt-8 w-full max-w-5xl sm:mt-12">
        <ul className="mx-auto grid max-w-xs grid-cols-1 gap-5 sm:max-w-5xl sm:grid-cols-3 sm:gap-6 lg:gap-8 items-stretch">
          {PEOPLE.map((p, index) => (
            <PersonCard key={p.name} index={index} {...p} />
          ))}
        </ul>

        {/* Security Section */}
        <div className="mt-14 sm:mt-20">
          <div data-reveal className="flex flex-col items-center text-center">
            <h3
              className="font-display font-black uppercase leading-[0.9] tracking-tight text-3xl sm:text-5xl md:text-6xl"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #ffd36e 0%, #fff4e0 28%, #ff8a3d 52%, #e0284a 72%, #f59a3a 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
            </h3>
          </div>

          <ul className="mx-auto mt-6 grid max-w-xs grid-cols-1 sm:mt-8 sm:max-w-xs">
            {SECURITY_PEOPLE.map((p, index) => (
              <PersonCard
                key={p.name}
                index={PEOPLE.length + index}
                passLabel="SECURITY PASS"
                {...p}
              />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}