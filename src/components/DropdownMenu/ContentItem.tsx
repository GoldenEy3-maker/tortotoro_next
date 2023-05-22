"use client"

import { useRippleEffect } from "@/hooks/rippleEffect"
import { setDynamicClass } from "@/utils/helpers"
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import { useDropdownMenuContext } from "./context"
import styles from "./dropdownMenu.module.scss"

interface ContentItemProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "danger"
}

export function ContentItem({
  children,
  className,
  onClick,
  variant,
  ...props
}: ContentItemProps) {
  const rippleEffectEvent = useRippleEffect()
  const { triggerRef, setState } = useDropdownMenuContext()

  function handleClickEvent(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()

    setState((state) => ({ ...state, isOpen: false }))
    if (triggerRef.current) triggerRef.current.focus()

    if (onClick) onClick(event)
  }

  return (
    <button
      type="button"
      onPointerDown={rippleEffectEvent}
      onClick={handleClickEvent}
      className={setDynamicClass({
        statics: [className, styles.contentItem],
        dynamics: [[styles._dangerItem]],
        conditions: [variant !== undefined && variant === "danger"],
      })}
      {...props}
    >
      {children}
    </button>
  )
}
