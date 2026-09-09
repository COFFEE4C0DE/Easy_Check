import type { DeadlineStatus } from '../../types'

interface StatusBadgeProps {
  children: string
  status: DeadlineStatus
}

const styles: Record<DeadlineStatus, string> = {
  normal: 'bg-sky-50 text-sky-700',
  soon: 'bg-amber-100 text-amber-800',
  urgent: 'bg-red-50 text-red-700',
}

export function StatusBadge({ children, status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex min-h-7 shrink-0 items-center rounded-full px-2.5 text-xs font-bold ${styles[status]}`}
    >
      {children}
    </span>
  )
}
