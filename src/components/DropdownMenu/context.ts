'use client'

import { Context } from "@/ts/utils"
import { generateContextError } from "@/utils/helpers"
import { RefObject, createContext, useContext } from "react"

export interface DropdownMenuContextState {
  isOpen: boolean
  triggerRef: RefObject<HTMLButtonElement>
  toggle: () => void
}

export const DropdownMenuContext = createContext<Context<DropdownMenuContextState>>(null)

export function useDropdownMenuContext() {
  const context = useContext(DropdownMenuContext)

  if (!context) throw generateContextError('useDropdownMenuContext', "DropdownMenuContext.Provider")

  return context
}