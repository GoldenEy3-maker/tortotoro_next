import { ValueOf } from "@/ts/utils"
import { User } from "@prisma/client"
import { create } from 'zustand'

export const SortValues = {
  ByName: "Имени",
  ByMonth: "Часам",
  ByShifts: "Сменам",
  ByDate: "Дате",
} as const

export type SortValues = ValueOf<typeof SortValues>

export interface WorkersStore {
  searchValue: string
  sortValue: SortValues
  data: User[] | null
}

export const useWorkersStore = create<WorkersStore>((set) => ({
  searchValue: '',
  sortValue: SortValues.ByName,
  data: null
}))

export { WorkersStoreInitializer } from './initializer'

