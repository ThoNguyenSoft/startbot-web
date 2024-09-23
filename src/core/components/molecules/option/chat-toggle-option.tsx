import { Button } from '@/core/components/atom/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/core/components/atom/dropdown-menu'
import { RefIcon } from 'public/icons'

type Props = {
  item: {
    text: string
    menuItemProps: {
      onClick: () => void
    }
  }[]
}

export default function ChatToggleOption({ item }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='sm' className='size-8 bg-background px-0'>
          <RefIcon size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {item?.map((i, index) => (
          <DropdownMenuItem key={index} {...i.menuItemProps}>
            {i.text}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
