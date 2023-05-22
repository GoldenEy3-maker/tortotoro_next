"use client"

import { SetStateContext } from "@/ts/utils"
import { setStaticClass } from "@/utils/helpers"
import {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react"
import { DropdownMenuContext, DropdownMenuContextState } from "./context"
import styles from "./dropdownMenu.module.scss"

export function Root({
  children,
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  const [dropdownMenuState, setDropdownMenuState] =
    useState<DropdownMenuContextState>({
      isOpen: false,
      triggerRef: { current: null },
      toggle() {
        setDropdownMenuState((state) => ({
          ...state,
          isOpen: !state.isOpen,
        }))
      },
    })
  const rootRef = useRef<HTMLDivElement>(null)

  function clickDocumentHandler(event: MouseEvent) {
    if (!rootRef.current?.contains(event.target as HTMLElement)) {
      setDropdownMenuState((state) => ({ ...state, isOpen: false }))
    }
  }

  useEffect(() => {
    document.addEventListener("click", clickDocumentHandler)

    return () => document.removeEventListener("click", clickDocumentHandler)
  }, [])

  return (
    <DropdownMenuContext.Provider
      value={{ ...dropdownMenuState, setState: setDropdownMenuState }}
    >
      <div
        className={setStaticClass(className, styles.root)}
        ref={rootRef}
        {...props}
      >
        {children}
      </div>
    </DropdownMenuContext.Provider>
  )
}
