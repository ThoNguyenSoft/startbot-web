/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'

const useCountdown = () => {
  const [seconds, setSeconds] = useState(60)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let timerId: NodeJS.Timeout | undefined = undefined
    if (isActive && seconds > 0) {
      timerId = setTimeout(() => {
        setSeconds(seconds - 1)
      }, 1000)
    } else if (!isActive && seconds !== 60) {
      setSeconds(60)
    } else if (seconds === 0) {
      setIsActive(false)
    }
    return () => clearTimeout(timerId!)
  }, [isActive, seconds])

  const handleStart = () => {
    setIsActive(true)
  }

  const handleReset = () => {
    setIsActive(false)
  }

  return { seconds, isActive, handleStart, handleReset }
}

export default useCountdown
