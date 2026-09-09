import { useMemo, useState, type ReactNode } from 'react'
import { ConnectionContext } from './connectionContext'

export function ConnectionProvider({ children }: { children: ReactNode }) {
  const [isOnline, setIsOnline] = useState(true)
  const value = useMemo(() => ({ isOnline, setIsOnline }), [isOnline])

  return (
    <ConnectionContext.Provider value={value}>
      {children}
    </ConnectionContext.Provider>
  )
}
