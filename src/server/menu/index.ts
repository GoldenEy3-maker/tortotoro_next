import { prisma } from "../db"

export async function getMenu() {
  return await prisma.menu.findMany()
}