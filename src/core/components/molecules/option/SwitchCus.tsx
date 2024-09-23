/* eslint-disable @typescript-eslint/no-unused-vars */

import { FormField, FormItem } from '@/core/components/atom/form'
import { cn } from '@/lib/utils/utils'
import { Switch } from '../../atom/switch'
import Error from '../text/Error'
import Label from '../text/Label'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TODO = any

const SwitchCus = ({
  control,
  name,
  label,
  errors,
  required,
  fieldProps,
  des,
  className,
  clxBox,
  clxLabel,
  clxSwitch
}: TODO) => {
  return (
    <FormField
      control={control}
      name={name}
      rules={{ required: required }}
      render={({ field }) => (
        <FormItem className={cn('mt-4 flex flex-row items-start space-x-2 space-y-0', className)}>
          <Switch onCheckedChange={field.onChange} checked={field.value} className={clxSwitch} />
          <div className={(cn('flex flex-col gap-1'), clxBox)}>
            <Label label={label} name={name} isRequired={required} className={clxLabel} />
            <Label label={des} name={des} />
            <Error text={errors?.message} />
          </div>
        </FormItem>
      )}
    />
  )
}

export default SwitchCus
