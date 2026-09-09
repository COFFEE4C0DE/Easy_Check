import { CalendarDays, CloudOff, Home } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const navigationItems = [
  { label: 'Início', to: '/', icon: Home },
  { label: 'Agenda', to: '/agenda', icon: CalendarDays },
  { label: 'Offline', to: '/offline', icon: CloudOff },
]

export function BottomNavigation() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-20 mx-auto w-full max-w-[460px] border-t border-slate-200 bg-white/95 px-5 pb-[max(10px,env(safe-area-inset-bottom))] pt-2 backdrop-blur-sm"
      aria-label="Navegação principal"
    >
      <div className="grid grid-cols-3 gap-2">
        {navigationItems.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-xs font-semibold transition active:scale-[0.98] ${
                isActive
                  ? 'bg-sky-soft text-ink'
                  : 'text-muted hover:bg-slate-50 hover:text-ink'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  size={20}
                  strokeWidth={isActive ? 2.4 : 2}
                  aria-hidden="true"
                />
                {label}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
