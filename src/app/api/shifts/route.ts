import { ShiftsApi } from "@/app/(main)/shifts/store"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  function generateUUID() {
    const uuid = crypto.randomUUID()

    return uuid.slice(0, uuid.indexOf('-'))
  }

  const data: ShiftsApi[] = [
    {
      id: generateUUID(),
      date: "2023-02-12",
      time: '09:00-18:00',
      isOpen: true,
      workers: [
        {
          id: crypto.randomUUID(),
          name: "Chelsey Dietrich",
          jobTitle: "Официант",
          date: "12.05.1995",
          hoursPerMonth: 100,
          shiftsPerMonth: 30
        },
        {
          id: crypto.randomUUID(),
          name: "Clementina DuBuque",
          jobTitle: "Повар",
          date: "12.06.1992",
          hoursPerMonth: 95,
          shiftsPerMonth: 25
        },
        {
          id: crypto.randomUUID(),
          name: "Clementine Bauch",
          jobTitle: "Повар",
          date: "01.02.1990",
          hoursPerMonth: 105,
          shiftsPerMonth: 22
        }
      ]
    },
    {
      id: generateUUID(),
      date: "2023-03-20",
      time: '09:00-15:00',
      isOpen: true,
      workers: [
        {
          id: crypto.randomUUID(),
          name: "Chelsey Dietrich",
          jobTitle: "Официант",
          date: "12.05.1995",
          hoursPerMonth: 100,
          shiftsPerMonth: 30
        },
        {
          id: crypto.randomUUID(),
          name: "Clementina DuBuque",
          jobTitle: "Повар",
          date: "12.06.1992",
          hoursPerMonth: 95,
          shiftsPerMonth: 25
        },
        {
          id: crypto.randomUUID(),
          name: "Clementine Bauch",
          jobTitle: "Повар",
          date: "01.02.1990",
          hoursPerMonth: 105,
          shiftsPerMonth: 22
        }
      ]
    },
    {
      id: generateUUID(),
      date: "2023-02-10",
      time: '09:00-20:00',
      isOpen: false,
      workers: [
        {
          id: crypto.randomUUID(),
          name: "Chelsey Dietrich",
          jobTitle: "Официант",
          date: "12.05.1995",
          hoursPerMonth: 100,
          shiftsPerMonth: 30
        },
        {
          id: crypto.randomUUID(),
          name: "Clementina DuBuque",
          jobTitle: "Повар",
          date: "12.06.1992",
          hoursPerMonth: 95,
          shiftsPerMonth: 25
        },
        {
          id: crypto.randomUUID(),
          name: "Clementine Bauch",
          jobTitle: "Повар",
          date: "01.02.1990",
          hoursPerMonth: 105,
          shiftsPerMonth: 22
        },
        {
          id: crypto.randomUUID(),
          name: "Clementine Bauch",
          jobTitle: "Повар",
          date: "01.02.1990",
          hoursPerMonth: 105,
          shiftsPerMonth: 22
        },
        {
          id: crypto.randomUUID(),
          name: "Clementine Bauch",
          jobTitle: "Повар",
          date: "01.02.1990",
          hoursPerMonth: 105,
          shiftsPerMonth: 22
        },
        {
          id: crypto.randomUUID(),
          name: "Clementine Bauch",
          jobTitle: "Повар",
          date: "01.02.1990",
          hoursPerMonth: 105,
          shiftsPerMonth: 22
        },
      ]
    },
    {
      id: generateUUID(),
      date: "2023-01-24",
      time: '09:00-20:00',
      isOpen: true,
      workers: [
        {
          id: crypto.randomUUID(),
          name: "Chelsey Dietrich",
          jobTitle: "Официант",
          date: "12.05.1995",
          hoursPerMonth: 100,
          shiftsPerMonth: 30
        },
        {
          id: crypto.randomUUID(),
          name: "Clementina DuBuque",
          jobTitle: "Повар",
          date: "12.06.1992",
          hoursPerMonth: 95,
          shiftsPerMonth: 25
        },
        {
          id: crypto.randomUUID(),
          name: "Clementine Bauch",
          jobTitle: "Повар",
          date: "01.02.1990",
          hoursPerMonth: 105,
          shiftsPerMonth: 22
        },
        {
          id: crypto.randomUUID(),
          name: "Clementine Bauch",
          jobTitle: "Повар",
          date: "01.02.1990",
          hoursPerMonth: 105,
          shiftsPerMonth: 22
        }
      ]
    },
  ]

  await new Promise(res => setTimeout(res, 3000))

  return NextResponse.json(data)
}