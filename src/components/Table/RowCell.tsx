import { setStaticClass } from "@/utils/helpers"
import { DetailedHTMLProps, HTMLAttributes } from "react"
import styles from "./table.module.scss"

export function RowCell({
  children,
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div className={setStaticClass(className, styles.rowCell)} {...props}>
      {children}
    </div>
  )
}
