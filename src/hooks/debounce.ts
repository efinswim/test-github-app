import React from "react"

export function useDebounce(value: string, delay: number = 300): string {
  const [debounced, setDebounced] = React.useState<string>(value)

  React.useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(handler)
  }, [value, delay])

  return debounced;
}