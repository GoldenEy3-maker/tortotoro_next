import { setStaticClass } from "@/utils/helpers"
import { DetailedHTMLProps, HTMLAttributes } from "react"
import styles from "./toolbar.module.scss"

export function Root({
  className,
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div className={setStaticClass(className, styles.toolbar)} {...props}>
      {children}
    </div>
  )
}
