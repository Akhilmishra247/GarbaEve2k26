import { Phone } from 'lucide-react'
import InstagramIcon from './InstagramIcon'

export default function PersonCard({ name, role, phone, img, instagram }) {
  return (
    <li data-reveal className="group overflow-hidden rounded-xl border-2 sm:border-3 md:border-4 border-ink bg-bone text-ink shadow-hardsm md:shadow-hard transition-transform duration-200 hover:-translate-y-1.5 md:rounded-2xl">
      <div className="relative aspect-[3/3.6] md:aspect-[3/3.7] overflow-hidden bg-plum">
        <img
          src={img}
          alt={`Portrait of ${name}`}
          loading="lazy"
          width="356"
          height="474"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-2.5 pt-8 sm:p-3 sm:pt-10 md:p-4 md:pt-14">
          <h3 className="font-display text-sm uppercase leading-tight text-bone sm:text-base md:text-2xl">
            {name}
          </h3>
          <p className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-sun sm:text-xs md:text-sm md:tracking-widest">
            {role}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between p-2 sm:p-2.5 md:p-3.5">
        {phone && (
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-1.5 text-[0.7rem] sm:text-xs md:text-base font-bold hover:text-crimson transition-colors"
          >
            <Phone aria-hidden="true" className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 shrink-0" />
            <span>{phone}</span>
          </a>
        )}
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on Instagram`}
            className="hover:text-crimson transition-colors"
          >
            <InstagramIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
          </a>
        )}
      </div>
    </li>
  )
}
