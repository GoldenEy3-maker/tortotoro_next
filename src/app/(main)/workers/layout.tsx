"use client"

import Button from "@/components/Button"
import * as Section from "@/components/Section"
import * as Toolbar from "@/components/Toolbar"
import { ChangeEvent, ReactNode } from "react"
import { SortValues, useWorkersStore } from "./store"

function WorkersPageLayout({ children }: { children: ReactNode }) {
  const searchValue = useWorkersStore((state) => state.searchValue)
  const sortValue = useWorkersStore((state) => state.sortValue)

  function toolbarSortHandler(value: SortValues) {
    useWorkersStore.setState({ sortValue: value })
  }

  function toolbarSearchHandler(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value

    useWorkersStore.setState({ searchValue: value })
  }

  return (
    <main className="workers page-content__wrapper">
      <Section.Root>
        <Section.Header>
          <Section.Title>Работники</Section.Title>
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
              id="search-workers"
              name="search-workers"
              onChange={toolbarSearchHandler}
            />
            <Toolbar.Sort
              label="Сортировать по:"
              value={sortValue}
              handler={toolbarSortHandler}
              options={SortValues}
            />
          </Toolbar.Root>
          {children}
        </Section.Content>
      </Section.Root>
    </main>
  )
}

export default WorkersPageLayout
