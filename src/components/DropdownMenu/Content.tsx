"use client"

import { setStaticClass } from "@/utils/helpers"
import { DetailedHTMLProps, HTMLAttributes, useEffect, useRef } from "react"
import { useDropdownMenuContext } from "./context"
import styles from "./dropdownMenu.module.scss"

export function Content({
  children,
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  const { isOpen, setState } = useDropdownMenuContext()

  return (
    <div
      className={setStaticClass(className, styles.content)}
      aria-hidden={!isOpen}
      {...props}
    >
      {children}
    </div>
  )
}
