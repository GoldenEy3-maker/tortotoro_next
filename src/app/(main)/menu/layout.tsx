"use client"

import Button from "@/components/Button"
import * as Section from "@/components/Section"
import * as Toolbar from "@/components/Toolbar"
import { ChangeEvent, ReactNode } from "react"
import { useMenuStore } from "./store"

export default function MenuLayout({ children }: { children: ReactNode }) {
  const searchValue = useMenuStore((state) => state.searchValue)

  function searchHandler(event: ChangeEvent<HTMLInputElement>) {
    useMenuStore.setState({ searchValue: event.target.value })
  }

  return (
    <div className="menu page-content__wrapper">
      <Section.Root>
        <Section.Header>
          <Section.Title>Меню</Section.Title>
          <Button variant="filled" title="Добавить">
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
              onChange={searchHandler}
              value={searchValue}
            />
          </Toolbar.Root>
          {children}
        </Section.Content>
      </Section.Root>
    </div>
  )
}
