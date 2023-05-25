"use client"

import { useRef } from "react"
import { ShiftsStore, useShiftsStore } from "."

export function ShiftsStoreInitializer({ data }: Pick<ShiftsStore, "data">) {
  const ref = useRef(false)

  if (!ref.current) {
    useShiftsStore.setState({ data: data })

    ref.current = true
  }

  return null
}
