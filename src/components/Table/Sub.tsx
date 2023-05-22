"use client"

import { setStaticClass } from "@/utils/helpers"
import { DetailedHTMLProps, HTMLAttributes, useState } from "react"
import { TableContext, TableContextState } from "./context"
import styles from "./table.module.scss"

export function Sub({
  className,
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  const [tableState, setTableState] = useState<TableContextState>({
    isSubOpen: false,
    toggle() {
      setTableState((state) => ({
        ...state,
        isSubOpen: !state.isSubOpen,
      }))
    },
  })

  return (
    <TableContext.Provider value={{ ...tableState, setState: setTableState }}>
      <div className={setStaticClass(className, styles.sub)} {...props}>
        {children}
      </div>
    </TableContext.Provider>
  )
}
