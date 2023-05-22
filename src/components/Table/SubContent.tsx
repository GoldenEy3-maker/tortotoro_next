"use client"

import { setStaticClass } from "@/utils/helpers"
import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from "react"
import { useTableContext } from "./context"
import styles from "./table.module.scss"

interface SubContentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  columns: string
}

export function SubContent({
  className,
  children,
  columns,
  ...props
}: SubContentProps) {
  const { isSubOpen } = useTableContext()

  return (
    <div
      className={setStaticClass(className, styles.subContent)}
      style={{ "--template-columns": columns } as CSSProperties}
      aria-hidden={!isSubOpen}
      {...props}
    >
      <div className={styles.subContent__wrapper}>{children}</div>
    </div>
  )
}
