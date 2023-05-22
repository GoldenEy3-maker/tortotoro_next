import { ValueOf } from "./utils"

export const RouterPaths = {
  HomePage: "/",
  AuthPage: "/auth",
  WorkersPage: "/workers",
  ShiftsPage: '/shifts'
} as const

export type RouterPaths = ValueOf<typeof RouterPaths>