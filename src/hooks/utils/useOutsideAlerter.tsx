import { ReactNode, useEffect, useRef } from 'react'

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref: React.RefObject<HTMLElement>, callBack: () => void) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        // alert('You clicked outside of me!')
        callBack()
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

interface OutsideAlerterProps {
  children: ReactNode
  className?: string
  callBack: () => void
}

/**
 * Component that alerts if you click outside of it
 */
export default function OutsideAlerter({ children, className, callBack }: OutsideAlerterProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  useOutsideAlerter(wrapperRef, callBack)

  return (
    <div className={className} ref={wrapperRef}>
      {children}
    </div>
  )
}
