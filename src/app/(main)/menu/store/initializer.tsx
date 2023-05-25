"use client"

import { useRef } from "react"
import { MenuStore, useMenuStore } from "."

export function MenuStoreInitializer({ data }: Pick<MenuStore, "data">) {
  const ref = useRef(false)

  if (!ref.current) {
    useMenuStore.setState({ data: data })
    ref.current = true
  }

  return null
}
