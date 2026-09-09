import { Link } from 'react-router-dom'
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
          id="activities-title"
          action={
            <Link
              to="/agenda"
              className="flex min-h-10 items-center rounded-lg px-1 text-[13px] font-bold text-sky-700 transition hover:text-sky-900"
            >
              Ver todas
            </Link>
          }
        />
        <div className="space-y-2.5">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </section>

      <section className="mt-7" aria-labelledby="exam-title">
        <SectionHeader id="exam-title" title="Prova" />
        <ExamCard />
      </section>

      <section className="mt-7" aria-labelledby="notices-title">
        <SectionHeader id="notices-title" title="Avisos" />
        <NoticeCard />
      </section>
    </div>
  )
}
