'use client'

import { Context } from "@/ts/utils"
import { generateContextError } from "@/utils/helpers"
import { RefObject, createContext, useContext } from "react"

export interface SelectContextState {
  isOpen: boolean
  triggerRef: RefObject<HTMLButtonElement>
  toggle: () => void
}

export const SelectContext = createContext<Context<SelectContextState>>(null)

export function useSelectContext() {
  const context = useContext(SelectContext)

  if (!context) throw generateContextError("useSelectContext", "SelectContext.Provider")

  return context
}



