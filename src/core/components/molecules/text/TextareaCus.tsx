/* eslint-disable @typescript-eslint/no-unused-vars */

import { FormField, FormItem } from '@/core/components/atom/form'
import { Textarea } from '@/core/components/atom/textarea'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TODO = any

const TextareaCus = ({ control, name, label, placeholder, errors, required, className }: TODO) => {
  return (
    <FormField
      control={control}
      name={name}
      rules={{ required: required }}
      render={({ field: { value, onChange } }) => (
        <FormItem className='space-x-2 space-y-0'>
          <Textarea
            placeholder={placeholder}
            value={value}
            label={label}
            onChange={onChange}
            isRequired={required}
            error={errors ? errors?.message : null}
            className={className}
            // size={size}
          />
        </FormItem>
      )}
    />
  )
}

export default TextareaCus
