"use client"

import { Context } from "@/ts/utils"
import { generateContextError } from "@/utils/helpers"
import { createContext, useContext } from "react"

export interface TableContextState {
  isSubOpen: boolean
  toggle: () => void
}

export const TableContext = createContext<Context<TableContextState>>(null)

export function useTableContext() {
  const context = useContext(TableContext)

  if (!context)
    throw generateContextError("useTableContext", "TableContext.Provider")

  return context
}
