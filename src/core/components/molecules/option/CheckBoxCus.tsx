/* eslint-disable @typescript-eslint/no-unused-vars */

import { Checkbox } from '@/core/components/atom/checkbox'
import { FormField, FormItem } from '@/core/components/atom/form'
import { cn } from '@/lib/utils/utils'
import Error from '../text/Error'
import Label from '../text/Label'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TODO = any

const CheckBoxCus = ({ control, name, label, errors, required, fieldProps, des, className }: TODO) => {
  return (
    <FormField
      control={control}
      name={name}
      rules={{ required: required }}
      render={({ field }) => (
        // <FormItem className='mt-4 flex flex-row items-start space-x-2 space-y-0'>
        <FormItem className={cn('mt-4 flex flex-row items-start space-x-2 space-y-0', className)}>
          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          <div className='flex flex-col gap-1'>
            <Label label={label} name={name} isRequired={required} />
            <Label label={des} name={des} />
            <Error text={errors?.message} />
          </div>
        </FormItem>
      )}
    />
  )
}

export default CheckBoxCus
