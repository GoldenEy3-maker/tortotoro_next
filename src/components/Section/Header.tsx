import { setStaticClass } from "@/utils/helpers"
import { DetailedHTMLProps, HTMLAttributes } from "react"
import styles from "./section.module.scss"

export function Header({
  className,
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
  return (
    <header
      className={setStaticClass(className, styles.sectionHeader)}
      {...props}
    >
      {children}
    </header>
  )
}
