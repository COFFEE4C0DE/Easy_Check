import { Check, CloudOff, LoaderCircle, RefreshCw } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useConnection } from '../../context/useConnection'
import { lastSync } from '../../data/mockData'

type SyncState = 'idle' | 'syncing' | 'success' | 'offline'

export function SyncStatus() {
  const { isOnline } = useConnection()
  const [syncState, setSyncState] = useState<SyncState>('idle')
  const timerRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    return () => window.clearTimeout(timerRef.current)
  }, [])

  const visibleSyncState =
    isOnline && syncState === 'offline' ? 'idle' : syncState

  function handleSync() {
    window.clearTimeout(timerRef.current)

    if (!isOnline) {
      setSyncState('offline')
      return
    }

    setSyncState('syncing')
    timerRef.current = window.setTimeout(() => setSyncState('success'), 1000)
  }

  const buttonContent = {
    idle: (
      <>
        <RefreshCw size={18} aria-hidden="true" />
        Sincronizar agora
      </>
    ),
    syncing: (
      <>
        <LoaderCircle size={18} className="animate-spin" aria-hidden="true" />
        Sincronizando...
      </>
    ),
    success: (
      <>
        <Check size={18} aria-hidden="true" />
        Atualizado agora
      </>
    ),
    offline: (
      <>
        <CloudOff size={18} aria-hidden="true" />
        Sem conexão
      </>
    ),
  }

  return (
    <>
      <section className="relative overflow-hidden rounded-[20px] border border-emerald-100 bg-white p-5 shadow-[0_8px_24px_rgba(38,59,83,0.05)]">
        <div
          className="absolute -right-9 -top-9 size-28 rounded-full bg-emerald-50"
          aria-hidden="true"
        />
        <div className="relative flex items-start gap-3.5">
          <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-success">
            <Check size={21} strokeWidth={2.5} aria-hidden="true" />
          </span>
          <div>
            <p className="text-base font-bold text-ink">Disponível offline</p>
            <p className="mt-1 text-[13px] leading-5 text-muted">
              Seus principais dados estão salvos neste dispositivo.
            </p>
          </div>
        </div>

        <div className="relative mt-4 flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
          <span className="text-xs font-semibold text-muted">
            Última sincronização
          </span>
          <span className="text-[13px] font-bold text-ink">{lastSync}</span>
        </div>
      </section>

      <button
        type="button"
        onClick={handleSync}
        disabled={visibleSyncState === 'syncing'}
        className={`mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl px-5 text-sm font-bold shadow-sm transition active:scale-[0.99] disabled:cursor-wait ${
          visibleSyncState === 'success'
            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
            : visibleSyncState === 'offline'
              ? 'bg-slate-200 text-slate-600'
              : 'bg-ink text-white hover:bg-slate-700'
        }`}
      >
        {buttonContent[visibleSyncState]}
      </button>

      <div aria-live="polite">
        {visibleSyncState === 'offline' && (
          <div
            role="status"
            className="mt-3 flex gap-2.5 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-[13px] leading-5 text-amber-900"
          >
            <CloudOff size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
            <p>
              A sincronização será realizada quando a conexão for restabelecida.
            </p>
          </div>
        )}
        {visibleSyncState === 'success' && (
          <p className="mt-3 text-center text-[13px] font-semibold text-success">
            Seus dados foram atualizados com sucesso.
          </p>
        )}
      </div>
    </>
  )
}
