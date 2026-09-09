import { BookOpen, Clock3, MapPin } from 'lucide-react'

const agendaItems = [
  {
    group: 'Hoje',
    time: '19:00',
    title: 'Engenharia de Software',
    detail: 'Sala 304',
    type: 'class',
  },
  {
    group: '12 SET',
    time: 'Entrega',
    title: 'Trabalho — Scrum',
    detail: 'Engenharia de Software',
    type: 'activity',
  },
  {
    group: '14 SET',
    time: 'Atividade',
    title: 'Lista de exercícios',
    detail: 'Desenvolvimento Web',
    type: 'activity',
  },
  {
    group: '16 SET',
    time: 'Avaliação',
    title: 'Prova — Banco de Dados',
    detail: 'Banco de Dados',
    type: 'exam',
  },
] as const

export function AgendaPage() {
  return (
    <div>
      <p className="text-sm font-medium text-muted">Seus compromissos</p>
      <h1 className="mt-1 text-[28px] font-bold tracking-[-0.04em] text-ink">
        Agenda
      </h1>

      <div className="relative mt-7">
        <div
          className="absolute bottom-8 left-[22px] top-6 w-px bg-slate-200"
          aria-hidden="true"
        />
        <ol className="relative space-y-5">
          {agendaItems.map((item) => (
            <li key={`${item.group}-${item.title}`} className="flex gap-4">
              <div
                className={`relative z-10 grid size-11 shrink-0 place-items-center rounded-2xl border-4 border-app-bg ${
                  item.type === 'class'
                    ? 'bg-sky-main text-white'
                    : item.type === 'exam'
                      ? 'bg-ink text-white'
                      : 'bg-white text-sky-700 shadow-sm'
                }`}
              >
                {item.type === 'class' ? (
                  <Clock3 size={17} aria-hidden="true" />
                ) : (
                  <BookOpen size={17} aria-hidden="true" />
                )}
              </div>

              <article className="min-w-0 flex-1 rounded-[18px] border border-slate-200/80 bg-white p-4 shadow-[0_4px_16px_rgba(38,59,83,0.035)]">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.13em] text-sky-700">
                    {item.group}
                  </span>
                  <span className="text-xs font-semibold text-muted">
                    {item.time}
                  </span>
                </div>
                <h2 className="mt-2 text-[15px] font-bold text-ink">
                  {item.title}
                </h2>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                  {item.type === 'class' && <MapPin size={14} aria-hidden="true" />}
                  {item.detail}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
