import { ActivityCard } from '../components/dashboard/ActivityCard'
import { ExamCard } from '../components/dashboard/ExamCard'
import { Greeting } from '../components/dashboard/Greeting'
import { NextClassCard } from '../components/dashboard/NextClassCard'
import { NoticeCard } from '../components/dashboard/NoticeCard'
import { SectionHeader } from '../components/ui/SectionHeader'
import { activities } from '../data/mockData'

export function DashboardPage() {
  return (
    <div>
      <Greeting />
      <NextClassCard />

      <section className="mt-7" aria-labelledby="activities-title">
        <SectionHeader
          title="Próximas atividades"
          action={
            <button
              type="button"
              className="min-h-10 rounded-lg px-1 text-[13px] font-bold text-sky-700 transition hover:text-sky-900"
            >
              Ver todas
            </button>
          }
        />
        <div className="space-y-2.5">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </section>

      <section className="mt-7" aria-labelledby="exam-title">
        <SectionHeader title="Prova" />
        <ExamCard />
      </section>

      <section className="mt-7" aria-labelledby="notices-title">
        <SectionHeader title="Avisos" />
        <NoticeCard />
      </section>
    </div>
  )
}
