import { useRippleEffect } from "@/hooks/rippleEffect"
import { setStaticClass } from "@/utils/helpers"
import { ButtonHTMLAttributes, DetailedHTMLProps, PointerEvent } from "react"
import { useSelectContext } from "./context"
import styles from "./select.module.scss"

interface OptionProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  value: string
}
export function Option({
  className,
  children,
  onPointerDown,
  onClick,
  value,
  ...props
}: OptionProps) {
  const rippleEffectEvent = useRippleEffect()
  const { triggerRef, setState } = useSelectContext()

  function handlePointerDownEvent(event: PointerEvent<HTMLButtonElement>) {
    rippleEffectEvent(event)

    if (onPointerDown) onPointerDown(event)
  }

  function handleClickEvent(event: React.MouseEvent<HTMLButtonElement>) {
    setState((state) => ({ ...state, isOpen: false }))
    if (triggerRef.current) triggerRef.current.focus()

    if (onClick) onClick(event)
  }

  return (
    <button
      onPointerDown={handlePointerDownEvent}
      className={setStaticClass(className, styles.customSelectOption)}
      onClick={handleClickEvent}
      {...props}
    >
      {children}
    </button>
  )
}
