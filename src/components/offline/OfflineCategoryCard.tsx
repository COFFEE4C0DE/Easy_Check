import { ArrowRight, Bell, BookOpen, CalendarDays, ClipboardList } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface OfflineCategoryCardProps {
  id: 'agenda' | 'activities' | 'exams' | 'notices'
  title: string
  count: string
}

const icons: Record<OfflineCategoryCardProps['id'], LucideIcon> = {
  agenda: CalendarDays,
  activities: ClipboardList,
  exams: BookOpen,
  notices: Bell,
}

export function OfflineCategoryCard({
  id,
  title,
  count,
}: OfflineCategoryCardProps) {
  const Icon = icons[id]

  return (
    <article className="flex items-center gap-3 rounded-[18px] border border-slate-200/80 bg-white p-3 shadow-[0_4px_16px_rgba(38,59,83,0.035)] transition hover:border-sky-200 hover:shadow-[0_7px_20px_rgba(38,59,83,0.07)]">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-700">
        <Icon size={20} aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="text-[15px] font-bold text-ink">{title}</h3>
        <p className="mt-0.5 text-xs text-muted">{count}</p>
      </div>
      <ArrowRight size={18} className="shrink-0 text-slate-400" aria-hidden="true" />
    </article>
  )
}
