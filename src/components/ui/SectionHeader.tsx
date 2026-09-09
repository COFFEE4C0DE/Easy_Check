import type { ReactNode } from 'react'

interface SectionHeaderProps {
  id?: string
  title: string
  action?: ReactNode
}

export function SectionHeader({ id, title, action }: SectionHeaderProps) {
  return (
    <div className="mb-3 flex items-center justify-between gap-4">
      <h2
        id={id}
        className="text-[17px] font-bold tracking-[-0.02em] text-ink"
      >
        {title}
      </h2>
      {action}
    </div>
  )
}
