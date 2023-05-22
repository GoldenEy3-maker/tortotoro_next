"use client"

import { setDynamicClass } from "@/utils/helpers"
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from "react"
import styles from "./input.module.scss"

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string
  errorMessage?: string
  leadingIcon?: ReactNode
}

function Input({
  label,
  errorMessage,
  onFocus,
  onBlur,
  leadingIcon,
  className,
  ...props
}: InputProps) {
  const [isActive, setIsActive] = useState(false)

  return (
    <fieldset
      className={setDynamicClass({
        statics: [className, styles.customInput],
        dynamics: [[styles._active]],
        conditions: [isActive],
      })}
    >
      <div className={styles.customInput__wrapper}>
        <label htmlFor={props.id}>{label}</label>
        {leadingIcon ? (
          <div className={styles.customInput__leadingIcon}>{leadingIcon}</div>
        ) : null}
        <input
          {...props}
          onFocus={(event) => {
            setIsActive(true)

            if (onFocus) onFocus(event)
          }}
          onBlur={(event) => {
            if (props.value === "") setIsActive(false)

            if (onBlur) onBlur(event)
          }}
        />
      </div>
      {errorMessage ? (
        <p className={styles.customInput__validMessage}>{errorMessage}</p>
      ) : null}
    </fieldset>
  )
}

export default Input
