import { ICONS, TONES } from './tones'

export default function GuidelinePanel({ index, title, text, icon, tone }) {
  const Icon = ICONS[icon]
  return (
    <li data-reveal className={`texture group relative flex flex-col justify-between gap-8 overflow-hidden rounded-2xl border-4 p-5 transition-transform duration-200 hover:-translate-y-2 sm:gap-10 sm:p-6 ${TONES[tone]}`}>
      <div className="flex items-start justify-between">
        <span className="font-display text-5xl opacity-70">{String(index + 1).padStart(2, '0')}</span>
        {Icon && <Icon aria-hidden="true" className="h-12 w-12 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />}
      </div>
      <div>
        <h3 className="font-display text-2xl uppercase leading-tight">{title}</h3>
        <p className="mt-3 text-base opacity-80">{text}</p>
      </div>
    </li>
  )
}
