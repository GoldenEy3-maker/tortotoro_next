"use client"

import { setStaticClass } from "@/utils/helpers"
import {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react"
import styles from "./select.module.scss"

import { ValueOf } from "@/ts/utils"
import { SelectContext, SelectContextState } from "./context"

export interface RootProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  label?: string
}

export function Root({ children, className, label, ...props }: RootProps) {
  const [selectState, setSelectState] = useState<SelectContextState>({
    isOpen: false,
    triggerRef: { current: null },
    toggle() {
      setSelectState((state) => ({ ...state, isOpen: !state.isOpen }))
    },
  })
  const rootRef = useRef<HTMLDivElement>(null)

  function clickDocumentHandler(event: MouseEvent) {
    if (!rootRef.current?.contains(event.target as HTMLElement))
      setSelectState((state) => ({ ...state, isOpen: false }))
  }

  useEffect(() => {
    document.addEventListener("click", clickDocumentHandler)

    return () => document.removeEventListener("click", clickDocumentHandler)
  }, [])

  return (
    <SelectContext.Provider
      value={{ ...selectState, setState: setSelectState }}
    >
      <div
        className={setStaticClass(className, styles.customSelect)}
        {...props}
      >
        {label ? (
          <span className={styles.customSelect__label}>{label}</span>
        ) : null}
        <div className={styles.customSelect__wrapper} ref={rootRef}>
          {children}
        </div>
      </div>
    </SelectContext.Provider>
  )
}
