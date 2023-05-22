"use client"

import sectionStyles from "@/components/Section/section.module.scss"
import * as Select from "@/components/Select"
import { ValueOf } from "@/ts/utils"
import {
  getDaysInCurrentMonth,
  getHours,
  getMonths,
  getRandomNumber,
} from "@/utils/helpers"

import CustomChart from "@/components/Chart"
import { useState } from "react"

const SelectValues = {
  Month: "Месяц",
  Day: "День",
  Year: "Год",
} as const

type SelectValues = ValueOf<typeof SelectValues>

function Sales() {
  const [selectState, setSelectState] = useState<SelectValues>(
    SelectValues.Month
  )

  function handleChangeSelect(value: string) {
    setSelectState(value as SelectValues)
  }

  function handleSelectValue(value: SelectValues) {
    let data: number[] = []
    let labels = []

    switch (value) {
      case "Месяц":
        data = getDaysInCurrentMonth().map(() => getRandomNumber(50000, 100000))
        labels = getDaysInCurrentMonth()
        break
      case "Год":
        data = getMonths().map(() => getRandomNumber(100000, 200000))
        labels = getMonths()
        break
      case "День":
        data = getHours().map(() => getRandomNumber(600, 5000))
        labels = getHours()
    }

    return { data, labels }
  }

  return (
    <section className={sectionStyles.section}>
      <header className={sectionStyles.sectionHeader}>
        <h2 className={sectionStyles.sectionTitle}>Статистика продаж</h2>

        <Select.Root>
          <Select.Trigger variant="elevated" value={selectState} />
          <Select.Options>
            {Object.values(SelectValues).map((value, index) => (
              <Select.Option
                key={index}
                value={value}
                onClick={() => handleChangeSelect(value)}
              >
                {value}
              </Select.Option>
            ))}
          </Select.Options>
        </Select.Root>
      </header>
      <div className={sectionStyles.sectionContent}>
        <CustomChart
          key={crypto.randomUUID()}
          type="line"
          data={{
            labels: handleSelectValue(selectState).labels,
            datasets: [
              {
                fill: true,
                label: "Продажи",
                data: handleSelectValue(selectState).data,
                borderColor: "hsl(274, 69%, 50%)",
              },
            ],
          }}
          gradiant={{
            top: {
              offset: 0.6,
              color: "hsla(274, 69%, 50%, .2)",
            },
            bottom: {
              offset: 1,
              color: "hsl(0, 0%, 100%, 0)",
            },
          }}
          width={1000}
          height={300}
        />
      </div>
    </section>
  )
}

export default Sales
