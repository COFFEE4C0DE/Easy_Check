import { WifiOff } from 'lucide-react'
import { lastSync } from '../../data/mockData'

export function ConnectionBanner() {
  return (
    <aside
      className="mx-5 mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-3.5"
      aria-live="polite"
    >
      <div className="flex gap-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white text-amber-700 shadow-sm">
          <WifiOff size={18} aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-bold text-ink">Sem conexão</p>
          <p className="mt-0.5 text-[13px] leading-5 text-slate-600">
            Usando os últimos dados salvos.
          </p>
          <p className="mt-1 text-xs font-medium text-slate-500">
            Última sincronização: {lastSync}
          </p>
        </div>
      </div>
    </aside>
  )
}
