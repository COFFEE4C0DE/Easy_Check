import { Star } from 'lucide-react'
import { student } from '../../data/mockData'
import { ConnectionToggle } from '../demo/ConnectionToggle'

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4">
      <a
        href="/"
        className="flex items-center gap-2 rounded-lg text-lg font-bold tracking-[-0.035em] text-ink"
        aria-label="Easy Check — Início"
      >
        <span className="grid size-8 place-items-center rounded-[11px] bg-ink">
          <Star
            size={17}
            fill="currentColor"
            strokeWidth={2.3}
            className="text-brand-yellow"
            aria-hidden="true"
          />
        </span>
        Easy Check
      </a>

      <div className="flex items-center gap-2.5">
        <ConnectionToggle />
        <div
          className="grid size-10 place-items-center rounded-full bg-sky-soft text-sm font-bold text-ink"
          aria-label={`Perfil de ${student.name}`}
          role="img"
        >
          {student.initials}
        </div>
      </div>
    </header>
  )
}
