import { Mail } from 'lucide-react'
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
      className="h-5 w-auto sm:h-6 md:h-7 text-bone/70"
      fill="currentColor"
    >
      {bars}
    </svg>
  )
}

export default function PersonCard({ name, role, phone, img, instagram, email, linkedin }) {
  const iconCls = 'h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6'
  const linkCls = 'text-bone/80 hover:text-sun transition-colors'

  return (
    <li
      data-reveal
      className="group relative flex flex-col overflow-hidden rounded-xl border-2 border-white/15 bg-[#1f1317] text-bone shadow-[6px_8px_0_rgba(0,0,0,0.35)] transition-transform duration-200 hover:-translate-y-1.5 md:rounded-2xl"
    >
      {/* Lanyard slot */}
      <span
        aria-hidden="true"
        className="mx-auto mt-3 block h-2.5 w-14 rounded-full border-2 border-white/25 sm:mt-4 sm:h-3 sm:w-16 md:w-20"
      />

      {/* Header */}
      <p className="mt-3 text-center text-[0.5rem] font-bold uppercase tracking-[0.25em] text-sun sm:text-[0.6rem] md:mt-4 md:text-xs md:tracking-[0.3em]">
        
      </p>

      {/* Avatar with gradient ring */}
      <div
        className="mx-auto mt-3 rounded-full p-[3px] sm:mt-4 sm:p-1"
        style={{ background: 'linear-gradient(160deg, #ff9a2e 0%, #ff5a2e 55%, #e03a3a 100%)' }}
      >
        <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-[#1f1317] bg-plum sm:h-24 sm:w-24 md:h-36 md:w-36">
          <img
            src={img}
            alt={`Portrait of ${name}`}
            loading="lazy"
            width="356"
            height="474"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Name */}
      <h3 className="mt-3 px-3 text-center font-display text-sm leading-tight text-bone sm:text-lg md:mt-4 md:text-2xl">
        {name}
      </h3>

      {/* Role tape */}
      <div className="mt-2.5 flex justify-center px-2 md:mt-3">
        <span
          className="-rotate-1 bg-sun px-3 py-1 text-center text-[0.5rem] font-extrabold uppercase tracking-[0.18em] text-ink sm:text-[0.6rem] md:px-4 md:py-1.5 md:text-xs md:tracking-[0.22em]"
          style={{ clipPath: 'polygon(2% 0, 100% 6%, 98% 100%, 0 94%)' }}
        >
          {role}
        </span>
      </div>

      {/* Phone */}
      <div className="mt-3 flex-1 px-3 text-center md:mt-4">
        {phone && (
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="text-[0.7rem] font-bold tracking-wide text-bone/70 transition-colors hover:text-sun sm:text-sm md:text-lg"
          >
            {phone}
          </a>
        )}
      </div>

      {/* Perforation */}
      <div className="mt-3 border-t-2 border-dashed border-white/20 md:mt-4" />

      {/* Footer: socials + barcode */}
      <div className="flex items-center justify-between px-3 py-2.5 sm:px-4 md:py-3.5">
        <div className="flex items-center gap-2 sm:gap-3">
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
        <Barcode seed={name} />
      </div>
    </li>
  )
}