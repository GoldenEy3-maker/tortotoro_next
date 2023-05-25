import { FullIncludedOrder } from "@/server/order"
import { create } from "zustand"

export interface OrdersStore {
  searchValue: string
  data: FullIncludedOrder[] | null
}

export const useOrdersStore = create<OrdersStore>((set) => ({
  data: null,
  searchValue: '',
}))

export { OrdersStoreInitializer } from './initializer'
