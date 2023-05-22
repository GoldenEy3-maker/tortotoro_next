"use client"

import Button from "@/components/Button"
import * as DropdownMenu from "@/components/DropdownMenu"
import * as Table from "@/components/Table"
import { setStaticClass } from "@/utils/helpers"
import Image from "next/image"
import { useShiftsStore } from "../../store"
import styles from "./shiftsTable.module.scss"

function ShiftsTable() {
  const data = useShiftsStore((state) => state.data)
  const searchValue = useShiftsStore((state) => state.searchValue)
  const sortValue = useShiftsStore((state) => state.sortValue)

  return (
    <Table.Root columns="0.4fr 1fr 1fr 1fr 1fr 0.4fr">
      <Table.Head>
        <Table.HeadCell>#</Table.HeadCell>
        <Table.HeadCell>Дата</Table.HeadCell>
        <Table.HeadCell>Время</Table.HeadCell>
        <Table.HeadCell>Статус</Table.HeadCell>
        <Table.HeadCell>Кол. работников</Table.HeadCell>
        <Table.HeadCell>Действия</Table.HeadCell>
      </Table.Head>
      <Table.Body>
        {data &&
          data.length > 0 &&
          data
            .sort((a, b) => {
              switch (sortValue) {
                case "Дате":
                  return +new Date(b.date) - +new Date(a.date)
                case "Кол. работников":
                  return a.workers.length - b.workers.length
                default:
                  return 0
              }
            })
            .filter((shift) => {
              const value = searchValue.toLowerCase().trim()
              const id = shift.id.toLowerCase().trim()
              const date = shift.date.toLowerCase().trim()
              const time = shift.time.toLowerCase().trim()

              return (
                id.includes(value) ||
                date.includes(value) ||
                time.includes(value)
              )
            })
            .map((shift) => (
              <Table.Sub key={shift.id}>
                <Table.SubTrigger>
                  <Table.RowCell className={styles.idRowCell}>
                    {shift.id}
                  </Table.RowCell>
                  <Table.RowCell>{shift.date}</Table.RowCell>
                  <Table.RowCell>{shift.time}</Table.RowCell>
                  <Table.RowCell
                    className={setStaticClass(
                      styles.statusRowCell,
                      !shift.isOpen ? styles._close : undefined
                    )}
                  >
                    {shift.isOpen ? "Открыто" : "Закрыто"}
                  </Table.RowCell>
                  <Table.RowCell>{shift.workers.length}</Table.RowCell>
                  <Table.RowCell>
                    <DropdownMenu.Root>
                      <DropdownMenu.Trigger
                        type="button"
                        variant="icon"
                        onSurface={true}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 96 960 960"
                          width="24"
                        >
                          <path d="M480 896q-33 0-56.5-23.5T400 816q0-33 23.5-56.5T480 736q33 0 56.5 23.5T560 816q0 33-23.5 56.5T480 896Zm0-240q-33 0-56.5-23.5T400 576q0-33 23.5-56.5T480 496q33 0 56.5 23.5T560 576q0 33-23.5 56.5T480 656Zm0-240q-33 0-56.5-23.5T400 336q0-33 23.5-56.5T480 256q33 0 56.5 23.5T560 336q0 33-23.5 56.5T480 416Z" />
                        </svg>
                      </DropdownMenu.Trigger>
                      <DropdownMenu.Content>
                        <DropdownMenu.ContentItem title="Изменить">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="20"
                              viewBox="0 96 960 960"
                              width="20"
                            >
                              <path d="M200 856h56l345-345-56-56-345 345v56Zm572-403L602 285l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829 396l-57 57Zm-58 59L290 936H120V766l424-424 170 170Zm-141-29-28-28 56 56-28-28Z" />
                            </svg>
                          </span>
                          <span>Изменить</span>
                        </DropdownMenu.ContentItem>
                        <DropdownMenu.ContentItem
                          variant="danger"
                          title="Удалить"
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="20"
                              viewBox="0 96 960 960"
                              width="20"
                            >
                              <path d="M280 936q-33 0-56.5-23.5T200 856V336h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680 936H280Zm400-600H280v520h400V336ZM360 776h80V416h-80v360Zm160 0h80V416h-80v360ZM280 336v520-520Z" />
                            </svg>
                          </span>
                          <span>Удалить</span>
                        </DropdownMenu.ContentItem>
                      </DropdownMenu.Content>
                    </DropdownMenu.Root>
                  </Table.RowCell>
                </Table.SubTrigger>
                <Table.SubContent columns="1fr 1fr 1fr 0.2fr">
                  {shift.workers &&
                    shift.workers.length > 0 &&
                    shift.workers.map((worker) => (
                      <Table.Row key={worker.id}>
                        <Table.RowCell>
                          <div
                            style={{
                              width: 50,
                              height: 50,
                              position: "relative",
                              backgroundColor: "#ccc",
                              borderRadius: "50%",
                            }}
                          >
                            <Image src="/profile.png" alt="Фото профиля" fill />
                          </div>
                          <span>{worker.name}</span>
                        </Table.RowCell>
                        <Table.RowCell>{worker.jobTitle}</Table.RowCell>
                        <Table.RowCell>{worker.date}</Table.RowCell>
                        <Table.RowCell>
                          <Button variant="icon" isDanger={true}>
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

export default ShiftsTable
