"use client"

import { useRippleEffect } from "@/hooks/rippleEffect"
import { setStaticClass } from "@/utils/helpers"
import { useRouter } from "next/navigation"
import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react"
import styles from "./button.module.scss"

export interface ButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "ref"
  > {
  variant?: "text" | "elevated" | "filled" | "outlined" | "icon"
  isDanger?: boolean
  isWarning?: boolean
  href?: string
  onSurface?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "text",
      onSurface = false,
      onPointerDown,
      onClick,
      href,
      children,
      isDanger,
      isWarning,
      ...props
    },
    ref
  ) => {
    const router = useRouter()
    const rippleEffectEvent = useRippleEffect()

    return (
      <button
        className={setStaticClass(
          className,
          styles.btn,
          styles[variant],
          onSurface ? styles.onSurface : undefined,
          isDanger ? styles.isDanger : undefined,
          isWarning ? styles.isWarning : undefined
        )}
        ref={ref}
        {...props}
        onPointerDown={(event) => {
          rippleEffectEvent(event)

          if (onPointerDown) onPointerDown(event)
        }}
        onClick={(event) => {
          if (href) router.push(href)

          if (onClick) onClick(event)
        }}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "button`"

export default Button
