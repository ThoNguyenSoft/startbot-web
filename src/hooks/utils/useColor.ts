'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const useColor = (lightColor: string, darkColor: string, isHovered = false) => {
  const [fillColor, setFillColor] = useState('')
  const { theme } = useTheme()
  const getFillColor = (lightColor: string, darkColor: string, isHovered = false) => {
    if (theme === 'dark') return lightColor
    if (!isHovered) return darkColor
    return lightColor
  }
  useEffect(() => {
    setFillColor(getFillColor(lightColor, darkColor, isHovered))
  }, [theme, isHovered])
  return { fillColor }
}

export default useColor
