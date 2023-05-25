import { FullIncludedShift } from "@/server/shift"
import { create } from "zustand"

export interface ShiftsStore {
  searchValue: string
  data: FullIncludedShift[] | null
}

export const useShiftsStore = create<ShiftsStore>((set) => ({
  searchValue: "",
  data: null,
}))

export { ShiftsStoreInitializer } from "./initializer"
