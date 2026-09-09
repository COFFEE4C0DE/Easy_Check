import { BookOpen } from 'lucide-react'
import { exam } from '../../data/mockData'
import { StatusBadge } from '../ui/StatusBadge'

export function ExamCard() {
  return (
    <article className="flex items-center gap-3 rounded-[18px] border border-slate-200/80 bg-white p-3.5 shadow-[0_4px_16px_rgba(38,59,83,0.035)]">
      <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-sky-50 text-sky-700">
        <BookOpen size={20} aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[15px] font-bold text-ink">{exam.subject}</p>
        <p className="mt-0.5 text-xs text-muted">Próxima avaliação</p>
      </div>
      <div className="flex shrink-0 flex-col items-end gap-1.5">
        <time className="text-xs font-extrabold tracking-wide text-ink">
          {exam.date}
        </time>
        <StatusBadge status={exam.status}>{exam.deadline}</StatusBadge>
      </div>
    </article>
  )
}
