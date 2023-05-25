import { UnwrapArray } from "@/ts/utils"
import { prisma } from "../db"

export async function getShifts() {
  return await prisma.shift.findMany({
    include: {
      workers: true
    }
  })
}

export type FullIncludedShift = UnwrapArray<Awaited<ReturnType<typeof getShifts>>>