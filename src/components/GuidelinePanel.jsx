export default function GuidelinePanel({ index, title, text, isLast }) {
  return (
    <li
      data-reveal
      className="group relative flex items-start gap-3.5 pb-4 last:pb-0 sm:gap-5 sm:pb-5"
    >
      {/* Left Column: Big Dot + Vertical Flowing Line */}
      <div className="relative flex self-stretch flex-col items-center">
        {/* Big Dot for Heading */}
        <div className="relative z-10 mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-sun bg-plum shadow-[0_0_8px_rgba(255,201,60,0.4)] transition-transform duration-200 group-hover:scale-125 sm:h-5 sm:w-5">
          <div className="h-1.5 w-1.5 rounded-full bg-sun sm:h-2 sm:w-2" />
        </div>

        {/* Vertical Flowing Line to the next dot */}
        {!isLast && (
          <div className="my-1 w-[2px] grow bg-gradient-to-b from-sun/50 via-sun/25 to-sun/10" />
        )}
      </div>

      {/* Right Column: Heading and Details */}
      <div className="flex-1">
        <h3 className="font-body text-sm font-semibold tracking-wide text-sun sm:text-base">
          {title}
        </h3>
        <p className="mt-0.5 font-body text-xs font-normal leading-relaxed text-bone/80 sm:mt-1 sm:text-sm">
          {text}
        </p>
      </div>
    </li>
  )
}
