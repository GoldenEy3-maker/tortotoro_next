import { setStaticClass } from "@/utils/helpers"
import { DetailedHTMLProps, HTMLAttributes } from "react"
import styles from "./section.module.scss"

export function Content({
  className,
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div
      className={setStaticClass(className, styles.sectionContent)}
      {...props}
    >
      {children}
    </div>
  )
}
