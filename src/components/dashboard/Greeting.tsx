import { student } from '../../data/mockData'

export function Greeting() {
  return (
    <div className="mb-6">
      <p className="text-sm font-medium text-muted">{student.displayDate}</p>
      <h1 className="mt-1 text-[28px] font-bold leading-tight tracking-[-0.045em] text-ink">
        Olá, {student.name}
      </h1>
      <p className="mt-1 text-sm text-muted">Aqui está o seu dia.</p>
    </div>
  )
}
