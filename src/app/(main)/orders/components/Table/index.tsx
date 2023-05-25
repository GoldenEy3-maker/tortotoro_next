"use client"

import Button from "@/components/Button"
import * as Table from "@/components/Table"
import { formatDate, formatTime, setDynamicClass } from "@/utils/helpers"
import { OrderStatus } from "@prisma/client"
import Image from "next/image"
import { useOrdersStore } from "../../store"
import styles from "./ordersTable.module.scss"

export function OrdersTable() {
  const data = useOrdersStore((state) =>
    state.data
      ?.sort((a, b) => {
        const dateA = a.createdAt
        const dateB = b.createdAt

        return +dateB - +dateA
      })
      .filter((order) => {
        const value = state.searchValue.toLowerCase().trim()
        const id = order.id.toLowerCase().trim()
        const date = formatDate(order.createdAt)
        const status = order.status.toLowerCase().trim()

        return (
          id.includes(value) || date.includes(value) || status.includes(value)
        )
      })
  )

  function formatStatus(status: OrderStatus) {
    switch (status) {
      case "ACCEPTED":
        return "Принят"
      case "INPROCESS":
        return "Готовится"
      case "READY":
        return "Готов"
      case "REJECTED":
        return "Отменен"
    }
  }

  return (
    <Table.Root columns="0.4fr 1fr 1fr 1fr 1fr 1fr 0.4fr">
      <Table.Head>
        <Table.HeadCell>#</Table.HeadCell>
        <Table.HeadCell>Официант</Table.HeadCell>
        <Table.HeadCell>Повар</Table.HeadCell>
        <Table.HeadCell>Дата</Table.HeadCell>
        <Table.HeadCell>Время</Table.HeadCell>
        <Table.HeadCell>Статус</Table.HeadCell>
        <Table.HeadCell>Действия</Table.HeadCell>
      </Table.Head>
      <Table.Body>
        {data &&
          data.length > 0 &&
          data.map((order) => (
            <Table.Sub key={order.id}>
              <Table.SubTrigger>
                <Table.RowCell className={styles.highlighted}>
                  {order.id.slice(0, order.id.indexOf("-"))}
                </Table.RowCell>
                <Table.RowCell>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      position: "relative",
                      backgroundColor: "#ccc",
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <Image src="/profile.png" alt="Фото профиля" fill />
                  </div>
                  <span>{order.waiter.name}</span>
                </Table.RowCell>
                <Table.RowCell>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      position: "relative",
                      backgroundColor: "#ccc",
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <Image src="/profile.png" alt="Фото профиля" fill />
                  </div>
                  <span>{order.cook.name}</span>
                </Table.RowCell>
                <Table.RowCell>{formatDate(order.createdAt)}</Table.RowCell>
                <Table.RowCell>{formatTime(order.createdAt)}</Table.RowCell>
                <Table.RowCell
                  className={setDynamicClass({
                    statics: [styles.highlighted],
                    dynamics: [
                      [styles._reject],
                      [styles._inProcess],
                      [styles._ready],
                    ],
                    conditions: [
                      order.status === "REJECTED",
                      order.status === "INPROCESS",
                      order.status === "READY",
                    ],
                  })}
                >
                  {formatStatus(order.status)}
                </Table.RowCell>
                <Table.RowCell>
                  <Button
                    variant="icon"
                    type="button"
                    onSurface={true}
                    title="Изменить"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 96 960 960"
                      width="24"
                    >
                      <path d="M200 856h56l345-345-56-56-345 345v56Zm572-403L602 285l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829 396l-57 57Zm-58 59L290 936H120V766l424-424 170 170Zm-141-29-28-28 56 56-28-28Z" />
                    </svg>
                  </Button>
                </Table.RowCell>
              </Table.SubTrigger>
              <Table.SubContent columns="1fr 1fr 1fr 1fr 0.3fr">
                {order.positions &&
                  order.positions.length > 0 &&
                  order.positions.map((position) => (
                    <Table.Row key={position.id}>
                      <Table.RowCell>
                        <div
                          style={{
                            width: 50,
                            height: 50,
                            position: "relative",
                            backgroundColor: "#ccc",
                            borderRadius: "50%",
                            overflow: "hidden",
                          }}
                        >
                          <Image src="/position-1.png" alt="Фото блюда" fill />
                        </div>
                        <span>{position.menu.title}</span>
                      </Table.RowCell>
                      <Table.RowCell>
                        {position.removeOptions.length > 0 ||
                        position.addOptions.length > 0 ? (
                          <ul className={styles.optionsList}>
                            {position.removeOptions.length > 0 &&
                              position.removeOptions.map(
                                (removeOptions, index) => (
                                  <li key={index} className={styles.remove}>
                                    {removeOptions}
                                  </li>
                                )
                              )}
                            {position.addOptions.length > 0 &&
                              position.addOptions.map((addOptions, index) => (
                                <li key={index} className={styles.add}>
                                  {addOptions}
                                </li>
                              ))}
                          </ul>
                        ) : (
                          "Без изменений"
                        )}
                      </Table.RowCell>
                      <Table.RowCell>{position.menu.price} руб</Table.RowCell>
                      <Table.RowCell>x{position.count}</Table.RowCell>
                      <Table.RowCell>
                        <Button
                          isDanger={true}
                          variant="icon"
                          type="button"
                          title="Удалить поцизию из заказа"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 96 960 960"
                            width="24"
                          >
                            <path d="M280 936q-33 0-56.5-23.5T200 856V336h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680 936H280Zm400-600H280v520h400V336ZM360 776h80V416h-80v360Zm160 0h80V416h-80v360ZM280 336v520-520Z" />
                          </svg>
                        </Button>
                      </Table.RowCell>
                    </Table.Row>
                  ))}
              </Table.SubContent>
            </Table.Sub>
          ))}
      </Table.Body>
    </Table.Root>
  )
}
