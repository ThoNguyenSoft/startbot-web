// import { Button } from './button'
import { Calendar } from './calendar'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
// import { Label } from '@components/molecules'
import { CalendarIcon } from 'lucide-react'
import { Control, Controller, FieldValues } from 'react-hook-form'

import { Label } from '@/core/components/molecules/text'
import { cn, formatDateToDDMMYYYY2 } from '@/lib/utils/utils'
import { Button } from './button'

// type Item = {
//     value: string;//     label: string;
// };
interface Props {
  control: Control<FieldValues, unknown>
  name: string
  label: string
  className?: string
  isRequired?: boolean
  error?: string
}
// row: the default value is row
// row: when you want to change direction of it => row = false
export default function CalendarField({ className = '', control, label, name, isRequired, error }: Props) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <div className={`flex flex-col gap-1 ${className}`}>
              <Label name={name} label={label} isRequired={isRequired} />
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant='outline'
                    className={cn(
                      'flex h-[35px] w-full justify-start font-normal',
                      !field.value && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className='size-4 opacity-50' />
                    {/* <span>{format(Number(new Date()), "dd/MM/yyyy")}</span> */}
                    {field.value ? (
                      // format(Number(field.value), "dd/MM/yyyy")?.toString()
                      formatDateToDDMMYYYY2(field.value)
                    ) : (
                      // <span>{label}</span>
                      <span>dd/mm/yy</span>
                    )}
                    {/* <span>{field?.value?.toString()}</span> */}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    selected={field.value}
                    onSelect={field.onChange}
                    // disabled={date => date > new Date() || date < new Date("1900-01-01")}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          )
        }}
      />
      {error && <p className='pt-1 text-xs text-red-500'>{error}</p>}
    </>
  )
}
