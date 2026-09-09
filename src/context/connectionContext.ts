import { createContext } from 'react'

export interface ConnectionContextValue {
  isOnline: boolean
  setIsOnline: (isOnline: boolean) => void
}

export const ConnectionContext = createContext<
  ConnectionContextValue | undefined
>(undefined)
