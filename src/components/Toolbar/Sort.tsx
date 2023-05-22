import * as Select from "@/components/Select"

interface SortProps<T, F> {
  options: F
  value: T
  handler: (value: T) => void
  label?: string
}

export function Sort<T extends string, F extends object>({
  value,
  options,
  label,
  handler,
}: SortProps<T, F>) {
  return (
    <Select.Root label={label}>
      <Select.Trigger value={value} variant="elevated" />
      <Select.Options>
        {Object.values(options).map((value, index) => (
          <Select.Option
            key={index}
            value={value}
            onClick={() => handler(value)}
          >
            {value}
          </Select.Option>
        ))}
      </Select.Options>
    </Select.Root>
  )
}
