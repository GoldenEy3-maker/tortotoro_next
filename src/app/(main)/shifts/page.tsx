import { prisma } from "@/server/db"
import { getShifts } from "@/server/shift"
import React from "react"
import ShiftsTable from "./components/Table"
import { ShiftsStoreInitializer, useShiftsStore } from "./store"

async function createTestShift() {
  const workers = await prisma.user.findMany({
    where: {
      role: {
        not: "ADMIN",
      },
    },
  })

  await prisma.shift.create({
    data: {
      endDate: new Date(2023, 2, 1, 18, 0),
      startDate: new Date(2023, 2, 1, 9, 0),
      status: "OPEN",
      workers: {
        connect: workers.map((worker) => ({ id: worker.id })),
      },
    },
  })
}

async function ShiftsPage() {
  const data = await getShifts()

  useShiftsStore.setState({ data: data })

  return (
    <>
      <ShiftsStoreInitializer data={data} />
      <ShiftsTable />
    </>
  )
}

export default ShiftsPage
