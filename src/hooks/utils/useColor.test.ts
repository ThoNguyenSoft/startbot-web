import { renderHook } from '@testing-library/react-hooks'
import useColor from './useColor'

describe('useColor', () => {
  it('should return the correct fillColor when theme is light and isHovered is false', () => {
    const lightColor = 'light-color'
    const darkColor = 'dark-color'
    const isHovered = false

    const { result } = renderHook(() => useColor(lightColor, darkColor, isHovered))

    expect(result.current.fillColor).toEqual(darkColor)
  })
})
