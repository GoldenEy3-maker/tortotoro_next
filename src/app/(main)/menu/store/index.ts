import { Menu } from "@prisma/client"
import { create } from "zustand"

export interface MenuStore {
  searchValue: string
  data: Menu[] | null
}

export const useMenuStore = create<MenuStore>((set) => ({
  data: null,
  searchValue: "",
}))

export { MenuStoreInitializer } from "./initializer"

