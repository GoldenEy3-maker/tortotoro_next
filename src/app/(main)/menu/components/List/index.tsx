"use client"

import Button from "@/components/Button"
import { formatDate, setStaticClass } from "@/utils/helpers"
import { MenuStatus } from "@prisma/client"
import Image from "next/image"
import { useMenuStore } from "../../store"
import styles from "./menuList.module.scss"

export function MenuList() {
  const data = useMenuStore((state) =>
    state.data
      ?.sort((a, b) => {
        const dateA = a.createdAt
        const dateB = b.createdAt

        return +dateB - +dateA
      })
      .filter((menu) => {
        const value = state.searchValue.toLowerCase().trim()

        const date = formatDate(menu.createdAt)
        const title = menu.title.toLowerCase().trim()
        const description = menu.description.toLowerCase().trim()
        const status = formatStatus(menu.status).toLowerCase().trim()

        return (
          date.includes(value) ||
          title.includes(value) ||
          description.includes(value) ||
          status.includes(value)
        )
      })
  )

  function formatStatus(status: MenuStatus) {
    switch (status) {
      case "HIDE":
        return "Скрыто"
      case "VISIBLE":
        return "Открыто"
    }
  }

  return (
    <div className={styles.menu}>
      <ul className={styles.menuList}>
        {data &&
          data.length > 0 &&
          data.map((menu) => (
            <li key={menu.id} className={styles.menuItem}>
              <div className={styles.menuItem__img}>
                <Image src="/position-2.png" alt="Фото" fill />
              </div>
              <div className={styles.menuItemInfo}>
                <header className={styles.menuItemInfoHeader}>
                  <h3 className={styles.menuItemInfoHeader__title}>
                    {menu.title}
                  </h3>
                  <Button type="button" variant="icon" title="Изменить">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 96 960 960"
                      width="24"
                    >
                      <path d="M200 856h56l345-345-56-56-345 345v56Zm572-403L602 285l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829 396l-57 57Zm-58 59L290 936H120V766l424-424 170 170Zm-141-29-28-28 56 56-28-28Z" />
                    </svg>
                  </Button>
                </header>
                <p className={styles.menuItemInfo__text}>{menu.description}</p>
                {menu.addOptions.length > 0 || menu.removeOptions.length > 0 ? (
                  <div className={styles.menuItemInfoOptions}>
                    <h4 className={styles.menuItemInfoOptions__title}>Опции</h4>
                    <ul className={styles.menuItemInfoOptionsList}>
                      {menu.removeOptions.length > 0 &&
                        menu.removeOptions.map((remove, index) => (
                          <li
                            key={index}
                            className={setStaticClass(
                              styles.menuItemInfoOptionsItem,
                              styles._remove
                            )}
                          >
                            {remove}
                          </li>
                        ))}
                      {menu.addOptions.length > 0 &&
                        menu.addOptions.map((add, index) => (
                          <li
                            key={index}
                            className={setStaticClass(
                              styles.menuItemInfoOptionsItem,
                              styles._add
                            )}
                          >
                            {add}
                          </li>
                        ))}
                    </ul>
                  </div>
                ) : null}
              </div>
              <div className={styles.menuItemActions}>
                <Button
                  type="button"
                  variant={"elevated"}
                  isDanger={menu.status === "VISIBLE" ? true : false}
                  title={
                    menu.status === "VISIBLE"
                      ? "Скрыть позицию"
                      : "Открыть позицию"
                  }
                >
                  {menu.status === "VISIBLE"
                    ? "Скрыть позицию"
                    : "Открыть позицию"}
                </Button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}
