import { ICONS, TONES } from './tones'

export default function ContactPanel({ index, title, text, icon, tone }) {
  const Icon = ICONS[icon]
  return (
    <li data-reveal className={`texture group relative flex flex-col justify-between gap-8 overflow-hidden rounded-2xl border-4 p-5 transition-transform duration-200 hover:-translate-y-2 hover:-rotate-1 sm:gap-12 sm:p-8 ${TONES[tone]}`}>
      <div className="flex items-start justify-between">
        <span className="font-display text-sm uppercase tracking-widest">No. {index + 1}</span>
        {Icon && <Icon aria-hidden="true" className="h-10 w-10 transition-transform duration-300 group-hover:rotate-12 sm:h-14 sm:w-14" />}
      </div>
      <div>
        <h3 className="font-display text-3xl uppercase leading-none sm:text-4xl">{title}</h3>
        <p className="mt-4 text-base opacity-80 sm:text-lg">{text}</p>
      </div>
    </li>
  )
}
