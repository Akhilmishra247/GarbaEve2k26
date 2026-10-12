import { Phone } from 'lucide-react'
import InstagramIcon from './InstagramIcon'

export default function PersonCard({ name, role, phone, img, instagram }) {
  return (
    <li data-reveal className="group overflow-hidden rounded-2xl border-4 border-ink bg-bone text-ink shadow-hard transition-transform duration-200 hover:-translate-y-2">
      <div className="relative aspect-portrait overflow-hidden bg-plum">
        <img src={img} alt={`Portrait of ${name}`} loading="lazy" width="600" height="800" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-4 pt-16">
          <h3 className="font-display text-2xl uppercase leading-none text-bone">{name}</h3>
          <p className="mt-1 text-sm font-bold uppercase tracking-widest text-sun">{role}</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 p-4">
        {phone && <a href={`tel:${phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 font-bold hover:text-crimson"><Phone aria-hidden="true" className="h-4 w-4" />{phone}</a>}
        {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label={`${name} on Instagram`} className="hover:text-crimson"><InstagramIcon className="h-5 w-5" /></a>}
      </div>
    </li>
  )
}
