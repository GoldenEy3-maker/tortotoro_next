import { Dispatch, SetStateAction } from "react"

export type ValueOf<T> = T[keyof T]

export type Context<S, G = S> = {
  setState: Dispatch<SetStateAction<S>>
} & S | null

export type SetStateContext<S> = (key: keyof S, value: ValueOf<S>) => void
