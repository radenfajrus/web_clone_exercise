import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
export function useDebounceOnEnter<T>(value: T, delay?: number, init?: T,): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)
  
    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), (init && (value===init))?0:(delay || 500))
        return () => { clearTimeout(timer) }
    }, [value, delay])
  
    return debouncedValue
}

 