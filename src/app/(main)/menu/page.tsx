import { getMenu } from "@/server/menu"
import { MenuList } from "./components/List"
import { MenuStoreInitializer, useMenuStore } from "./store"

export default async function MenuPage() {
  const data = await getMenu()

  useMenuStore.setState({ data })

  return (
    <>
      <MenuStoreInitializer data={data} />
      <MenuList />
    </>
  )
}
