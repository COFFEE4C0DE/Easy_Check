import { ArrowRight, Clock3, MapPin } from 'lucide-react'
import { nextClass } from '../../data/mockData'

export function NextClassCard() {
  return (
    <article className="relative overflow-hidden rounded-[20px] border border-sky-200 bg-sky-soft p-5 shadow-[0_8px_24px_rgba(57,126,166,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(57,126,166,0.12)]">
      <div
        className="absolute -right-6 -top-8 size-28 rounded-full border-[18px] border-white/35"
        aria-hidden="true"
      />
      <p className="relative text-[11px] font-extrabold uppercase tracking-[0.16em] text-sky-800">
        Próxima aula
      </p>
      <div className="relative mt-4 flex items-center gap-4">
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold tracking-[-0.025em] text-ink">
            {nextClass.subject}
          </h2>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[13px] font-medium text-slate-600">
            <span className="flex items-center gap-1.5">
              <Clock3 size={16} aria-hidden="true" />
              {nextClass.startTime} — {nextClass.endTime}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={16} aria-hidden="true" />
              {nextClass.room}
            </span>
          </div>
        </div>
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/80 text-sky-800">
          <ArrowRight size={19} aria-hidden="true" />
        </span>
      </div>
    </article>
  )
}
