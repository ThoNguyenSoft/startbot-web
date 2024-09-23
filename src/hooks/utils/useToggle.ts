import { useState } from 'react'

const useToggle = () => {
  const [isToggle, setIsToggle] = useState<boolean>(false)

  const onMouseLeave = () => {
    setIsToggle(false)
  }
  const onMouseEnter = () => {
    setIsToggle(true)
  }

  return { onMouseLeave, onMouseEnter, isToggle }
}

export default useToggle
