import { ValueOf } from "@/ts/utils"
import { create } from 'zustand'

export interface WorkersApi {
  id: string,
  name: string,
  jobTitle: string,
  date: string,
  hoursPerMonth: number,
  shiftsPerMonth: number
}

export const SortValues = {
  ByName: "Имени",
  ByMonth: "Часам",
  ByShifts: "Сменам",
  ByDate: "Дате",
} as const

export type SortValues = ValueOf<typeof SortValues>

interface WorkersStore {
  searchValue: string
  sortValue: SortValues
  data: WorkersApi[] | null
}

export const useWorkersStore = create<WorkersStore>((set) => ({
  searchValue: '',
  sortValue: SortValues.ByName,
  data: null
}))

export { WorkersStoreInitializer } from './initializer'

