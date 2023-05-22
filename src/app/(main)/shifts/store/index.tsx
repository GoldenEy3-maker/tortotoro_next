import { ValueOf } from "@/ts/utils"
import { create } from "zustand"
import { WorkersApi } from "../../workers/store"

export interface ShiftsApi {
  id: string
  date: string
  time: string
  isOpen: boolean
  workers: WorkersApi[]
}

export const SortValues = {
  ByDate: "Дате",
  ByWorkers: "Кол. работников",
} as const

export type SortValues = ValueOf<typeof SortValues>

interface ShiftsStore {
  searchValue: string
  sortValue: SortValues
  data: ShiftsApi[] | null
}

export const useShiftsStore = create<ShiftsStore>((set) => ({
  searchValue: "",
  sortValue: SortValues.ByDate,
  data: null,
}))
