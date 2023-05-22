import { setStaticClass } from "@/utils/helpers"
import { DetailedHTMLProps, HTMLAttributes } from "react"
import styles from "./section.module.scss"

export function Root({
  className,
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
  return (
    <section className={setStaticClass(className, styles.section)} {...props}>
      {children}
    </section>
  )
}
