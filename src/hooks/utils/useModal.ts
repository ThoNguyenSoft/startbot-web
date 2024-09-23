import { useSearchParams } from 'next/navigation'
import { Dispatch, SetStateAction, useState } from 'react'

export type Modal = {
  visible: boolean
  hide(): void
  show(): void
  setVisible: Dispatch<SetStateAction<boolean>>
}

const useModal = (_visible?: boolean) => {
  const [visible, setVisible] = useState(() => !!_visible)
  const searchParams = useSearchParams()
  const mode = searchParams.get('mode') || undefined

  const toggle = () => {
    setVisible(prev => !prev)
  }

  const show = () => {
    setVisible(true)
  }

  const hide = () => {
    setVisible(false)
  }

  // useEffect(() => {
  //   if (hideLinkMode) return
  //   if (mode) show()
  //   else {
  //     hide()
  //   }
  // }, [mode, hideLinkMode])

  return { toggle, visible, show, hide, setVisible, mode }
}

export default useModal
