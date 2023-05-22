import { setStaticClass } from "@/utils/helpers"
import { DetailedHTMLProps, HTMLAttributes } from "react"
import styles from "./section.module.scss"

export function Title({
  className,
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return (
    <h2 className={setStaticClass(className, styles.sectionTitle)}>
      {children}
    </h2>
  )
}
