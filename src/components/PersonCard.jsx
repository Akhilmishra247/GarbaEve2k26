import { Mail, Phone } from 'lucide-react'
import InstagramIcon from './InstagramIcon'

function LinkedInIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

// Deterministic barcode so each card gets its own pattern
function Barcode({ seed }) {
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0
  const bars = []
  let x = 0
  for (let i = 0; i < 24; i++) {
    h = (h * 1664525 + 1013904223) >>> 0
    const w = 1 + (h % 3)
    bars.push(<rect key={i} x={x} y="0" width={w} height="26" />)
    x += w + 1.5
  }
  return (
    <svg
      viewBox={`0 0 ${x} 26`}
      aria-hidden="true"
      className="h-4 w-auto text-bone/60 transition-colors duration-300 group-hover:text-sun/90 sm:h-5 md:h-6"
      fill="currentColor"
    >
      {bars}
    </svg>
  )
}

export default function PersonCard({ name, role, phone, img, imgPosition, instagram, email, linkedin, index = 0 }) {
  const iconCls = 'h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5'
  const linkCls = 'text-bone/70 hover:text-sun transition-colors'

  return (
    <li
      data-reveal
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border-2 border-white/15 bg-[#1f1317] text-bone shadow-[6px_8px_0_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-sun/60 hover:shadow-[0_16px_36px_-8px_rgba(255,77,28,0.35),6px_8px_0_rgba(255,201,60,0.3)] md:rounded-2xl"
    >
      {/* Holographic light shimmer sweep on hover */}
      <div
        className="pointer-events-none absolute -inset-full -translate-x-full -rotate-45 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full"
        aria-hidden="true"
      />

      {/* Top section: Lanyard slot + Badge label + Avatar + Name + Role */}
      <div className="relative z-10 pt-3 sm:pt-4">
        {/* Lanyard slot */}
        <span
          aria-hidden="true"
          className="mx-auto block h-2.5 w-14 rounded-full border-2 border-white/25 bg-black/40 transition-colors duration-300 group-hover:border-sun/60 group-hover:bg-sun/10 sm:h-3 sm:w-16 md:w-20"
        />

        {/* Header Pass Label */}
        <p className="mt-2 text-center text-[0.5rem] font-bold uppercase tracking-[0.22em] text-sun/85 transition-colors duration-300 group-hover:text-sun sm:mt-2.5 sm:text-[0.6rem] md:mt-3 md:text-xs md:tracking-[0.28em]">
          CORE TEAM PASS
        </p>

        {/* Avatar */}
        <div className="mx-auto mt-3 flex justify-center sm:mt-4">
          <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-white/20 bg-plum transition-all duration-500 group-hover:scale-105 group-hover:border-sun sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 xl:h-36 xl:w-36">
            <img
              src={img}
              alt={`Portrait of ${name}`}
              loading="lazy"
              width="356"
              height="474"
              style={{ objectPosition: imgPosition || 'center top' }}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
        </div>

        {/* Name with fixed min-height for uniform row alignment */}
        <div className="mt-3 flex min-h-[2.5rem] items-center justify-center px-2 text-center sm:min-h-[3rem] md:mt-4 md:min-h-[3.75rem]">
          <h3 className="font-display text-xs leading-tight text-bone transition-colors duration-300 group-hover:text-sun sm:text-base md:text-lg lg:text-xl">
            {name}
          </h3>
        </div>

        {/* Role tape */}
        <div className="mt-1.5 flex justify-center px-2 sm:mt-2">
          <span
            className="-rotate-1 bg-sun px-2.5 py-0.5 text-center text-[0.52rem] font-extrabold uppercase tracking-[0.16em] text-ink transition-transform duration-300 group-hover:rotate-1 group-hover:scale-105 sm:px-3 sm:py-1 sm:text-[0.6rem] md:px-4 md:py-1.5 md:text-xs md:tracking-[0.2em]"
            style={{ clipPath: 'polygon(2% 0, 100% 6%, 98% 100%, 0 94%)' }}
          >
            {role}
          </span>
        </div>
      </div>

      {/* Middle/Flexible section: Phone link */}
      <div className="relative z-10 my-3 flex flex-1 items-center justify-center px-2 text-center sm:my-3.5 md:my-4">
        {phone && (
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="group/phone inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[0.7rem] font-bold tracking-wide text-bone/85 transition-all duration-300 hover:border-sun/60 hover:bg-sun/15 hover:text-sun hover:shadow-[0_0_12px_rgba(255,201,60,0.3)] sm:px-3 sm:py-1.5 sm:text-xs md:text-sm lg:text-base"
          >
            <Phone className="h-3 w-3 text-sun transition-transform duration-200 group-hover/phone:scale-110 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
            <span>{phone}</span>
          </a>
        )}
      </div>

      {/* Bottom section: Perforation + Footer (Stub ID & Barcode) */}
      <div className="relative z-10">
        {/* Perforation */}
        <div className="border-t-2 border-dashed border-white/20 transition-colors duration-300 group-hover:border-sun/40" />

        {/* Footer: socials / pass id + barcode */}
        <div className="flex items-center justify-between px-3 py-2.5 sm:px-4 md:py-3.5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[0.55rem] uppercase tracking-wider text-bone/45 transition-colors duration-300 group-hover:text-sun/80 sm:text-[0.65rem] md:text-xs">
              #{String(index + 1).padStart(2, '0')}
            </span>
            {email && (
              <a href={`mailto:${email}`} aria-label={`Email ${name}`} className={linkCls}>
                <Mail className={iconCls} aria-hidden="true" fill="currentColor" stroke="#1f1317" />
              </a>
            )}
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on Instagram`}
                className={linkCls}
              >
                <InstagramIcon className={iconCls} />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on LinkedIn`}
                className={linkCls}
              >
                <LinkedInIcon className={iconCls} />
              </a>
            )}
          </div>
          <div className="transition-transform duration-300 group-hover:scale-105">
            <Barcode seed={name} />
          </div>
        </div>
      </div>
    </li>
  )
}