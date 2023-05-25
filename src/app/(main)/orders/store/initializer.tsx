"use client"

import { useRef } from "react"
import { OrdersStore, useOrdersStore } from "."

export function OrdersStoreInitializer({ data }: Pick<OrdersStore, "data">) {
  const ref = useRef(false)

  if (!ref.current) {
    useOrdersStore.setState({ data })
    ref.current = true
  }

  return null
}
