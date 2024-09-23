import { useRef } from 'react'

const useScrollElement = () => {
  const scrollRef = useRef<HTMLElement | null>(null)

  const scrollToElement = (id: string) => {
    scrollRef.current = document.getElementById(id)
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return { scrollToElement }
}

export default useScrollElement
