"use client"

import * as DropdownMenu from "@/components/DropdownMenu"
import * as Table from "@/components/Table"
import Image from "next/image"
import { useWorkersStore } from "../../store"

function WorkersTable() {
  const data = useWorkersStore((state) => state.data)
  const searchValue = useWorkersStore((state) => state.searchValue)
  const sortValue = useWorkersStore((state) => state.sortValue)

  return (
    <>
      <Table.Root columns="2fr 1fr 1fr 1fr 1fr 0.5fr">
        <Table.Head>
          <Table.HeadCell>Имя</Table.HeadCell>
          <Table.HeadCell>Должность</Table.HeadCell>
          <Table.HeadCell>Дата рождения</Table.HeadCell>
          <Table.HeadCell>Кол. часов/месяц</Table.HeadCell>
          <Table.HeadCell>Кол. смен/месяц</Table.HeadCell>
          <Table.HeadCell>Действия</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {data &&
            data.length > 0 &&
            data
              .sort((a, b) => {
                const nameA = a.name.toLowerCase()
                const nameB = b.name.toLowerCase()
                const dateA = new Date(a.date)
                const dateB = new Date(b.date)
                const hoursPerMonthA = a.hoursPerMonth
                const hoursPerMonthB = b.hoursPerMonth
                const shiftsPerMonthA = a.shiftsPerMonth
                const shiftsPerMonthB = b.shiftsPerMonth

                switch (sortValue) {
                  case "Имени":
                    if (nameA < nameB) return -1
                    if (nameA > nameB) return 1
                  case "Дате":
                    return +dateA - +dateB
                  case "Часам":
                    return hoursPerMonthA - hoursPerMonthB
                  case "Сменам":
                    return shiftsPerMonthA - shiftsPerMonthB
                  default:
                    return 0
                }
              })
              .filter((user) =>
                user.name
                  .toLowerCase()
                  .trim()
                  .includes(searchValue.toLowerCase().trim())
              )
              .map((user) => (
                <Table.Row key={user.id}>
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
                    <span>{user.name}</span>
                  </Table.RowCell>
                  <Table.RowCell>{user.jobTitle}</Table.RowCell>
                  <Table.RowCell>{user.date}</Table.RowCell>
                  <Table.RowCell>{user.hoursPerMonth}</Table.RowCell>
                  <Table.RowCell>{user.shiftsPerMonth}</Table.RowCell>
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
                </Table.Row>
              ))}
        </Table.Body>
      </Table.Root>
    </>
  )
}

export default WorkersTable
