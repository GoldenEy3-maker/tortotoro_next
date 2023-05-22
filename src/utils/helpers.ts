interface SetDynamicClassProps {
  statics: (string | undefined)[]
  dynamics: string[][]
  conditions: boolean[]
}

export function setDynamicClass({ statics, dynamics, conditions }: SetDynamicClassProps) {
  const classes = statics.filter(cls => cls !== undefined) as string[]

  for (let i = 0;i < conditions.length;i++) {
    if (conditions[i]) {
      dynamics[i].forEach(internalDnClass => classes.push(internalDnClass))
    }
  }

  return classes.join(" ")
}

export function setStaticClass(...classes: (string | undefined)[]) {
  return classes.filter((cls) => cls !== undefined).join(" ")
}

export function getMonths() {
  return Array.from({ length: 12 }, (e, i) => {
    return new Date(0, i + 1, 0).toLocaleDateString("ru", { month: "short" })
  })
}

export function getDaysInCurrentMonth() {
  const date = new Date()
  const value = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  return Array.from({ length: value }, (e, i) => i + 1)
}

export function getHours() {
  return Array.from({ length: 24 }, (e, i) => `${i + 1}:00`)
}

export function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}

export function generateContextError(hookName: string, providerName: string) {
  return new Error(`The "${hookName}" hook must be used within the "${providerName}" provider!`)
}

