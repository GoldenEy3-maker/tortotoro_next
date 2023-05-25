import WorkersTable from "@/app/(main)/workers/components/Table"
import { getWorkers } from "@/server/worker"
import { WorkersStoreInitializer, useWorkersStore } from "./store"

async function WorkersPage() {
  const data = await getWorkers()

  useWorkersStore.setState({ data: data })

  return (
    <>
      <WorkersStoreInitializer data={data} />
      <WorkersTable />
    </>
  )
}

export default WorkersPage
