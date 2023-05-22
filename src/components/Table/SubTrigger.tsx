"use client"

import { useRippleEffect } from "@/hooks/rippleEffect"
import { setDynamicClass } from "@/utils/helpers"
import { DetailedHTMLProps, HTMLAttributes, useRef } from "react"
import { useTableContext } from "./context"
import styles from "./table.module.scss"

export function SubTrigger({
  className,
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  const rippleEffectEvent = useRippleEffect()
  const triggerRef = useRef<HTMLDivElement>(null)
  const { isSubOpen, toggle } = useTableContext()

  return (
    <div
      role="button"
      tabIndex={0}
      ref={triggerRef}
      className={setDynamicClass({
        statics: [className, styles.subTrigger],
        dynamics: [[styles._active]],
        conditions: [isSubOpen],
      })}
      onKeyDown={(event) => {
        // TODO: need fix
        if (
          event.key === " " ||
          event.key === "Enter" ||
          event.key === "Spacebar"
        ) {
          toggle()
        }
      }}
      onClick={toggle}
      {...props}
    >
      <div className={styles.subTriggerRippleEffect}>
        <div
          className={styles.subTriggerRippleEffect__wrapper}
          onPointerDown={rippleEffectEvent}
        ></div>
      </div>
      <div className={styles.subTrigger__wrapper}>{children}</div>
    </div>
  )
}
