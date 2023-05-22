"use client"

import Button from "@/components/Button"
import * as Section from "@/components/Section"
import * as Toolbar from "@/components/Toolbar"
import React, { ChangeEvent, ReactNode } from "react"
import { SortValues, useShiftsStore } from "./store"

function ShiftsLayout({ children }: { children: ReactNode }) {
  const searchValue = useShiftsStore((state) => state.searchValue)
  const sortValue = useShiftsStore((state) => state.sortValue)

  function searchChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    useShiftsStore.setState({ searchValue: event.target.value })
  }

  function sortChangeHandler(value: SortValues) {
    useShiftsStore.setState({ sortValue: value })
  }

  return (
    <main className="shifts page-content__wrapper">
      <Section.Root>
        <Section.Header>
          <Section.Title>Смены</Section.Title>
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
              value={searchValue}
              onChange={searchChangeHandler}
            />
            <Toolbar.Sort
              label="Сортировать по:"
              value={sortValue}
              options={SortValues}
              handler={sortChangeHandler}
            />
          </Toolbar.Root>
          {children}
        </Section.Content>
      </Section.Root>
    </main>
  )
}

export default ShiftsLayout
