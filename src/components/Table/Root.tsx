import { setStaticClass } from "@/utils/helpers"
import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from "react"
import styles from "./table.module.scss"

interface RootProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  columns: string
}

export function Root({ children, className, columns, ...props }: RootProps) {
  return (
    <div
      className={setStaticClass(className, styles.root)}
      style={{ "--template-columns": columns } as CSSProperties}
      {...props}
    >
      {children}
    </div>
  )
}
