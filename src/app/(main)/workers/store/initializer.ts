'use client'

import { useRef } from "react"
import { WorkersStore, useWorkersStore } from "."

export function WorkersStoreInitializer({ data }: Pick<WorkersStore, 'data'>) {
  const initializedRef = useRef(false)

  if (!initializedRef.current) {
    useWorkersStore.setState({ data: data })
    initializedRef.current = true
  }

  return null
}