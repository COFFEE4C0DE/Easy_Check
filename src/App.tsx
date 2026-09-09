import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { ConnectionProvider } from './context/ConnectionContext'
import { AgendaPage } from './pages/AgendaPage'
import { DashboardPage } from './pages/DashboardPage'
import { OfflinePage } from './pages/OfflinePage'

function App() {
  return (
    <BrowserRouter>
      <ConnectionProvider>
        <Routes>
          <Route element={<AppShell />}>
            <Route index element={<DashboardPage />} />
            <Route path="agenda" element={<AgendaPage />} />
            <Route path="offline" element={<OfflinePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </ConnectionProvider>
    </BrowserRouter>
  )
}

export default App
