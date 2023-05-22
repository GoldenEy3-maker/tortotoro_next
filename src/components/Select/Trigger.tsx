"use client"

import { setStaticClass } from "@/utils/helpers"
import { useEffect, useRef } from "react"
import Button, { ButtonProps } from "../Button"
import { useSelectContext } from "./context"
import styles from "./select.module.scss"

interface TriggerProps extends ButtonProps {
  value: string
}

export function Trigger({
  children,
  className,
  onClick,
  value,
  ...props
}: TriggerProps) {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const { toggle, setState } = useSelectContext()

  function handleClickEvent(event: React.MouseEvent<HTMLButtonElement>) {
    toggle()

    if (onClick) onClick(event)
  }

  useEffect(() => {
    if (triggerRef.current) {
      setState((state) => ({ ...state, triggerRef: triggerRef }))
    }
  }, [])

  return (
    <Button
      className={setStaticClass(className, styles.customSelectTrigger)}
      onClick={handleClickEvent}
      ref={triggerRef}
      {...props}
    >
      <span className={styles.customSelectTriggerValue}>{value}</span>
      <span className={styles.customSelectTriggerIcon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 96 960 960"
          width="20"
        >
          <path d="M480 723 240 483l51-51 189 189 189-189 51 51-240 240Z" />
        </svg>
      </span>
    </Button>
  )
}
