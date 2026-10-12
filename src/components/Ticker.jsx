import { Flame } from 'lucide-react'
import { TICKER } from '../data/content'

export default function Ticker() {
  return (
    <div className="marquee overflow-hidden border-y-4 border-ink bg-sun py-4 text-ink" role="region" aria-label="Festival highlights">
      <div className="marquee-track flex">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {TICKER.map((t) => (
              <li key={t} className="flex items-center gap-6 pr-6 font-display text-3xl uppercase md:text-5xl">{t}<Flame aria-hidden="true" className="h-6 w-6 text-crimson md:h-9 md:w-9" /></li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
