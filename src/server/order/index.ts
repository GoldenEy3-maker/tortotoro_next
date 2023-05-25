import { UnwrapArray } from "@/ts/utils"
import { prisma } from "../db"

export async function getOrders() {
  return await prisma.order.findMany({
    include: {
      cook: true,
      positions: {
        include: {
          menu: true
        }
      },
      waiter: true,
    }
  })
}

export type FullIncludedOrder = UnwrapArray<Awaited<ReturnType<typeof getOrders>>>