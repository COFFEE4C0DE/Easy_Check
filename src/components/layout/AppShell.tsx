import { Outlet } from 'react-router-dom'
import { useConnection } from '../../context/useConnection'
import { BottomNavigation } from './BottomNavigation'
import { ConnectionBanner } from './ConnectionBanner'
import { Header } from './Header'
import { ScrollToTop } from './ScrollToTop'

export function AppShell() {
  const { isOnline } = useConnection()

  return (
    <div className="relative mx-auto min-h-[100svh] w-full max-w-[460px] overflow-hidden bg-app-bg shadow-[0_18px_60px_rgba(38,59,83,0.10)] sm:min-h-[calc(100svh-48px)] sm:rounded-[28px] sm:border sm:border-white">
      <ScrollToTop />
      <Header />
      {!isOnline && <ConnectionBanner />}
      <main className="px-5 pb-28 pt-6">
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  )
}
