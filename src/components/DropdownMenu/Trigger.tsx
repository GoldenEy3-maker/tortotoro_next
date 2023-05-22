"use client"

import { setStaticClass } from "@/utils/helpers"
import { useEffect, useRef } from "react"
import Button, { ButtonProps } from "../Button"
import { useDropdownMenuContext } from "./context"
import styles from "./dropdownMenu.module.scss"

export const Trigger = ({ className, children, ...props }: ButtonProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const { toggle, setState } = useDropdownMenuContext()

  useEffect(() => {
    if (triggerRef.current) {
      setState((state) => ({ ...state, triggerRef: triggerRef }))
    }
  }, [])

  return (
    <Button
      variant="icon"
      type="button"
      onClick={(event) => {
        event.stopPropagation()

        toggle()
      }}
      className={setStaticClass(className, styles.trigger)}
      ref={triggerRef}
      {...props}
    >
      {children}
    </Button>
  )
}
