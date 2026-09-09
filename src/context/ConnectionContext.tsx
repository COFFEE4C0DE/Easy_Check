import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

interface ConnectionContextValue {
  isOnline: boolean
  setIsOnline: (isOnline: boolean) => void
}

const ConnectionContext = createContext<ConnectionContextValue | undefined>(
  undefined,
)

export function ConnectionProvider({ children }: { children: ReactNode }) {
  const [isOnline, setIsOnline] = useState(true)
  const value = useMemo(() => ({ isOnline, setIsOnline }), [isOnline])

  return (
    <ConnectionContext.Provider value={value}>
      {children}
    </ConnectionContext.Provider>
  )
}

export function useConnection() {
  const context = useContext(ConnectionContext)

  if (!context) {
    throw new Error('useConnection must be used inside ConnectionProvider')
  }

  return context
}
