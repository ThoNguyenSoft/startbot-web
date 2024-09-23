import { Button } from '@/core/components/atom/button'
import useScrollElement from '@/hooks/scroll/useScrollElement'
import { ChevronUpIcon } from 'lucide-react'

const ScrollToTop = () => {
  const { scrollToElement } = useScrollElement()
  const onClickTop = () => {
    scrollToElement('layout-page')
  }

  return (
    <Button type='button' onClick={onClickTop} className={`fixed bottom-3 right-3 z-[1000] hidden sm:block`}>
      <ChevronUpIcon className='size-4' />
    </Button>
  )
}

export default ScrollToTop
