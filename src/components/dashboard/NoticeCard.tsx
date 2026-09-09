import { Bell } from 'lucide-react'
import { notice } from '../../data/mockData'

export function NoticeCard() {
  return (
    <article className="flex gap-3 rounded-[18px] border border-slate-200/80 bg-white p-4 shadow-[0_4px_16px_rgba(38,59,83,0.035)]">
      <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-amber-50 text-amber-700">
        <Bell size={19} aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="text-[15px] font-bold text-ink">{notice.title}</p>
        <p className="mt-1 text-[13px] leading-5 text-muted">
          {notice.description}
        </p>
        <p className="mt-2 text-xs font-semibold text-slate-400">{notice.time}</p>
      </div>
    </article>
  )
}
