import WorkersTable from "@/app/(main)/workers/components/Table"
import { WorkersApi, WorkersStoreInitializer, useWorkersStore } from "./store"

async function WorkersPage() {
  const res = await fetch(
    `${process.env.VERCEL_URL ?? process.env.API_URL}/api/workers`
  )
  const data = (await res.json()) as WorkersApi[]

  useWorkersStore.setState({ data: data })

  return (
    <>
      <WorkersStoreInitializer data={data} />
      <WorkersTable />
    </>
  )
}

export default WorkersPage
