import { prisma } from "../db"

export async function getWorkers() {
  return await prisma.user.findMany({
    where: {
      role: {
        not: "ADMIN"
      }
    },
  })
}
