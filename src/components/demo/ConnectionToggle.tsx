import { ChevronDown, Cloud, CloudOff } from 'lucide-react'
import { useState } from 'react'
import { useConnection } from '../../context/useConnection'

export function ConnectionToggle() {
  const { isOnline, setIsOnline } = useConnection()
  const [isOpen, setIsOpen] = useState(false)

  function selectMode(online: boolean) {
    setIsOnline(online)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex min-h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-[13px] font-semibold text-ink shadow-sm transition hover:border-sky-main"
        aria-label="Alterar simulação de conexão"
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <span
          className={`size-2 rounded-full ${isOnline ? 'bg-success' : 'bg-alert'}`}
          aria-hidden="true"
        />
        {isOnline ? 'Online' : 'Offline'}
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={`text-muted transition ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 z-30 mt-2 w-52 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_12px_32px_rgba(38,59,83,0.14)]"
        >
          <p className="px-2 pb-2 pt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            Simular conexão
          </p>
          <button
            type="button"
            role="menuitem"
            onClick={() => selectMode(true)}
            className={`flex min-h-11 w-full items-center gap-3 rounded-xl px-3 text-left text-sm font-semibold transition ${
              isOnline ? 'bg-sky-soft text-ink' : 'text-muted hover:bg-slate-50'
            }`}
          >
            <Cloud size={17} aria-hidden="true" />
            Online
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => selectMode(false)}
            className={`flex min-h-11 w-full items-center gap-3 rounded-xl px-3 text-left text-sm font-semibold transition ${
              !isOnline ? 'bg-red-50 text-alert' : 'text-muted hover:bg-slate-50'
            }`}
          >
            <CloudOff size={17} aria-hidden="true" />
            Offline
          </button>
        </div>
      )}
    </div>
  )
}
