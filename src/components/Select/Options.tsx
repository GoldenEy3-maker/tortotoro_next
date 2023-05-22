import { setStaticClass } from "@/utils/helpers"
import { DetailedHTMLProps, HTMLAttributes } from "react"
import { useSelectContext } from "./context"
import styles from "./select.module.scss"

export function Options({
  className,
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  const { isOpen } = useSelectContext()

  return (
    <div
      className={setStaticClass(className, styles.customSelectOptions)}
      aria-hidden={!isOpen}
      {...props}
    >
      {children}
    </div>
  )
}
