import React from "react"
import ShiftsTable from "./components/Table"
import { ShiftsApi, useShiftsStore } from "./store"
import { ShiftsStoreInitializer } from "./store/initializer"

async function ShiftsPage() {
  const res = await fetch("http://localhost:3000/api/shifts")
  const data = (await res.json()) as ShiftsApi[]

  useShiftsStore.setState({ data: data })

  return (
    <>
      <ShiftsStoreInitializer data={data} />
      <ShiftsTable />
    </>
  )
}

export default ShiftsPage
