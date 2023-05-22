import { WorkersApi } from "@/app/(main)/workers/store"
import { NextResponse } from 'next/server'

export async function GET() {
  const data: WorkersApi[] = [
    {
      id: crypto.randomUUID(),
      name: "Chelsey Dietrich",
      jobTitle: "Официант",
      date: "1995-05-12",
      hoursPerMonth: 100,
      shiftsPerMonth: 30
    },
    {
      id: crypto.randomUUID(),
      name: "Clementina DuBuque",
      jobTitle: "Повар",
      date: "1992-06-12",
      hoursPerMonth: 95,
      shiftsPerMonth: 25
    },
    {
      id: crypto.randomUUID(),
      name: "Clementine Bauch",
      jobTitle: "Повар",
      date: "1990-02-01",
      hoursPerMonth: 105,
      shiftsPerMonth: 22
    },
    {
      id: crypto.randomUUID(),
      name: "Ervin Howell",
      jobTitle: "Официант",
      date: "1992-03-02",
      hoursPerMonth: 105,
      shiftsPerMonth: 22
    },
    {
      id: crypto.randomUUID(),
      name: "Kurtis Weissnat",
      jobTitle: "Повар",
      date: "1998-02-02",
      hoursPerMonth: 115,
      shiftsPerMonth: 35
    },
    {
      id: crypto.randomUUID(),
      name: "Leanne Graham",
      jobTitle: "Официант",
      date: "1995-05-12",
      hoursPerMonth: 100,
      shiftsPerMonth: 30
    },
    {
      id: crypto.randomUUID(),
      name: "Mrs. Dennis Schulist",
      jobTitle: "Повар",
      date: "1992-06-12",
      hoursPerMonth: 95,
      shiftsPerMonth: 25
    },
    {
      id: crypto.randomUUID(),
      name: "Nicholas Runolfsdottir V",
      jobTitle: "Повар",
      date: "1990-02-01",
      hoursPerMonth: 105,
      shiftsPerMonth: 22
    },
    {
      id: crypto.randomUUID(),
      name: "Patricia Lebsack",
      jobTitle: "Официант",
      date: "1992-03-02",
      hoursPerMonth: 105,
      shiftsPerMonth: 22
    },
    {
      id: crypto.randomUUID(),
      name: "Kurtis Weissnat",
      jobTitle: "Повар",
      date: "1998-02-02",
      hoursPerMonth: 115,
      shiftsPerMonth: 35
    }
  ]

  await new Promise((res, rej) => setTimeout(res, 3000))

  return NextResponse.json(data)
}