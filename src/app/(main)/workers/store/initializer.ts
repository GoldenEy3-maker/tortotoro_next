'use client'

import { useRef } from "react"
import { WorkersApi, useWorkersStore } from "."

export function WorkersStoreInitializer({ data }: { data: WorkersApi[] }) {
  const initializedRef = useRef(false)

  if (!initializedRef.current) {
    useWorkersStore.setState({ data: data })
    initializedRef.current = true
  }

  return null
}