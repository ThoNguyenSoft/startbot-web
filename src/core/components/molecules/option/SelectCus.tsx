/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller } from 'react-hook-form'

// import { Label } from "@/bundles/core/components/atom/label";
import { FormItem } from '@/core/components/atom/form'
import { ScrollArea } from '@/core/components/atom/scroll-area'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/core/components/atom/select'
import Error from '../text/Error'
import Label from '../text/Label'

export type Item = {
  value: string
  label: string
  valRef?: string
}

export type TSelectGroupFieldProps = {
  optValue: Item[]
  control: any
  name: string
  placeHolder?: string
  label?: string
  disabled?: boolean
  required?: boolean
  className?: string
  errors?: any
  onChange?: (params: string) => void
}

const SelectCus: React.FC<TSelectGroupFieldProps> = ({
  optValue,
  label,
  control,
  name,
  placeHolder = 'Select status',
  disabled = false,
  required,
  errors,
  className,
  onChange
}) => {
  return (
    // <FormItem className='min-w-[200px] space-y-0'>
    <FormItem className={className}>
      {label && <Label isRequired={required} name={name} label={label} />}
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          if (onChange && field.value) {
            onChange(field?.value ?? '')
          }
          return (
            <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value} disabled={disabled}>
              <SelectTrigger>
                <SelectValue placeholder={placeHolder} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <ScrollArea className='h-[180px]'>
                    {optValue?.map(item => (
                      <SelectItem className='w-full' key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </ScrollArea>
                </SelectGroup>
              </SelectContent>
            </Select>
          )
        }}
      />
      {errors && <Error text={errors ? errors?.message : null} />}
    </FormItem>
  )
}

export default SelectCus
