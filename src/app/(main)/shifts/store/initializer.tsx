"use client"

import { useRef } from "react"
import { ShiftsApi, useShiftsStore } from "."

export function ShiftsStoreInitializer({ data }: { data: ShiftsApi[] }) {
  const ref = useRef(false)

  if (!ref.current) {
    useShiftsStore.setState({ data: data })

    ref.current = true
  }

  return null
}
