"use client"

import Button from "@/components/Button"
import * as Section from "@/components/Section"
import * as Toolbar from "@/components/Toolbar"
import { ChangeEvent, ReactNode } from "react"
import { useOrdersStore } from "./store"

export default function OrdersLayout({ children }: { children: ReactNode }) {
  const searchValue = useOrdersStore((state) => state.searchValue)

  function searchToolbarHandler(event: ChangeEvent<HTMLInputElement>) {
    useOrdersStore.setState({ searchValue: event.target.value })
  }

  return (
    <main className="orders page-content__wrapper">
      <Section.Root>
        <Section.Header>
          <Section.Title>Заказы</Section.Title>
          <Button type="button" variant="filled" title="Добавить">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 96 960 960"
                width="24"
              >
                <path d="M440 856V616H200v-80h240V296h80v240h240v80H520v240h-80Z" />
              </svg>
            </span>
            <span>Добавить</span>
          </Button>
        </Section.Header>
        <Section.Content>
          <Toolbar.Root>
            <Toolbar.Search
              label="Поиск"
              onChange={searchToolbarHandler}
              value={searchValue}
            />
          </Toolbar.Root>
          {children}
        </Section.Content>
      </Section.Root>
    </main>
  )
}
