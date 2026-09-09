import { useContext } from 'react'
import { ConnectionContext } from './connectionContext'

export function useConnection() {
  const context = useContext(ConnectionContext)

  if (!context) {
    throw new Error('useConnection must be used inside ConnectionProvider')
  }

  return context
}
