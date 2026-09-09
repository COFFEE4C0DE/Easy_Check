import { Info } from 'lucide-react'
import { OfflineCategoryCard } from '../components/offline/OfflineCategoryCard'
import { SyncStatus } from '../components/offline/SyncStatus'
import { SectionHeader } from '../components/ui/SectionHeader'
import { savedContent } from '../data/mockData'

export function OfflinePage() {
  return (
    <div>
      <p className="text-sm font-medium text-muted">Dados no dispositivo</p>
      <h1 className="mt-1 text-[28px] font-bold tracking-[-0.04em] text-ink">
        Conteúdo offline
      </h1>

      <div className="mt-6">
        <SyncStatus />
      </div>

      <section className="mt-2" aria-labelledby="saved-content-title">
        <SectionHeader id="saved-content-title" title="Informações salvas" />
        <div className="space-y-2.5">
          {savedContent.map((item) => (
            <OfflineCategoryCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      <div className="mt-5 flex items-start gap-2.5 rounded-2xl bg-sky-50 px-4 py-3.5 text-[13px] leading-5 text-sky-900">
        <Info size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
        <p>Os dados serão atualizados automaticamente quando houver conexão.</p>
      </div>
    </div>
  )
}
