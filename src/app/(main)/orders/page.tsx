import { prisma } from "@/server/db"
import { getOrders } from "@/server/order"
import { OrdersTable } from "./components/Table"
import { OrdersStoreInitializer, useOrdersStore } from "./store"

async function createTestUsers() {
  return await prisma.user.createMany({
    data: [
      {
        login: "danilAdmin1",
        password: "danil",
        name: "Danil",
        role: "ADMIN",
        birthDate: new Date(2003, 11, 4),
      },
      {
        login: "danilCook2",
        password: "danil",
        name: "Danil",
        role: "COOK",
        birthDate: new Date(2003, 11, 4),
      },
      {
        login: "danilWaiter3",
        password: "danil",
        name: "Danil",
        role: "WAITER",
        birthDate: new Date(2003, 11, 4),
      },
    ],
  })
}

async function createTestMenu() {
  return await prisma.menu.createMany({
    data: [
      {
        title: "Тонкацу",
        description:
          "Тонка́цу — блюдо японской кухни, зажаренная во фритюре свиная отбивная. Наравне с тэмпурой это довольно популярный в Японии представитель ёсёку — западной кухни.",
        price: 899,
        addOptions: ["Сыр", "Помидоры"],
        removeOptions: ["Соус", "Лук"],
        status: "VISIBLE",
      },
      {
        title: "Тонкацу",
        description:
          "Тонка́цу — блюдо японской кухни, зажаренная во фритюре свиная отбивная. Наравне с тэмпурой это довольно популярный в Японии представитель ёсёку — западной кухни.",
        price: 1200,
        addOptions: ["Сыр", "Помидоры"],
        removeOptions: ["Соус", "Лук"],
        status: "VISIBLE",
      },
      {
        title: "Тонкацу",
        description:
          "Тонка́цу — блюдо японской кухни, зажаренная во фритюре свиная отбивная. Наравне с тэмпурой это довольно популярный в Японии представитель ёсёку — западной кухни.",
        price: 2200,
        addOptions: ["Сыр", "Помидоры"],
        removeOptions: ["Соус", "Лук"],
        status: "VISIBLE",
      },
    ],
  })
}

async function createTestOrder() {
  const cook = await prisma.user.findFirst({
    where: {
      role: {
        equals: "COOK",
      },
    },
  })

  const waiter = await prisma.user.findFirst({
    where: {
      role: {
        equals: "WAITER",
      },
    },
  })

  const menus = await prisma.menu.findMany()

  return await prisma.order.create({
    data: {
      status: "ACCEPTED",
      cook: {
        connect: {
          id: cook!.id,
        },
      },
      waiter: {
        connect: {
          id: waiter!.id,
        },
      },
      positions: {
        createMany: {
          data: menus.map((menu) => ({
            menuId: menu.id,
            count: 1,
            addOptions: ["Сыр"],
            removeOptions: ["Лук"],
          })),
        },
      },
    },
  })
}

export default async function OrdersPage() {
  const data = await getOrders()

  useOrdersStore.setState({ data })

  return (
    <>
      <OrdersStoreInitializer data={data} />
      <OrdersTable />
    </>
  )
}
