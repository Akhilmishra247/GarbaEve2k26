import { ICONS, TONES } from './tones'

export default function ContactPanel({ index, title, text, icon, tone }) {
  const Icon = ICONS[icon]
  return (
    <li data-reveal className={`texture group relative flex flex-col justify-between gap-12 overflow-hidden rounded-2xl border-4 p-8 transition-transform duration-200 hover:-translate-y-2 hover:-rotate-1 ${TONES[tone]}`}>
      <div className="flex items-start justify-between">
        <span className="font-display text-sm uppercase tracking-widest">No. {index + 1}</span>
        {Icon && <Icon aria-hidden="true" className="h-14 w-14 transition-transform duration-300 group-hover:rotate-12" />}
      </div>
      <div>
        <h3 className="font-display text-4xl uppercase leading-none">{title}</h3>
        <p className="mt-4 text-lg opacity-80">{text}</p>
      </div>
    </li>
  )
}
