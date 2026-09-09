import { ClipboardList } from 'lucide-react'
import type { Activity } from '../../types'
import { StatusBadge } from '../ui/StatusBadge'

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <article className="flex items-center gap-3 rounded-[18px] border border-slate-200/80 bg-white p-3.5 shadow-[0_4px_16px_rgba(38,59,83,0.035)] transition hover:border-sky-200 hover:shadow-[0_7px_20px_rgba(38,59,83,0.07)]">
      <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-slate-50 text-sky-700">
        <ClipboardList size={20} aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[15px] font-bold text-ink">{activity.title}</p>
        <p className="mt-0.5 truncate text-xs text-muted">{activity.subject}</p>
      </div>
      <div className="flex shrink-0 flex-col items-end gap-1.5">
        <time className="text-xs font-extrabold tracking-wide text-ink">
          {activity.date}
        </time>
        <StatusBadge status={activity.status}>{activity.deadline}</StatusBadge>
      </div>
    </article>
  )
}
