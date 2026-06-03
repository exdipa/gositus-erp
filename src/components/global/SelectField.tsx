import Field from '@/components/global/Field'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type SelectFieldProps = {
  label: string
  value: string
  options: string[]
}

/**
 * SelectField
 * req params: label:string, value:string, options:string[]
 * optional params: tidak ada
 * result: React element field select dengan opsi statis.
 */
function SelectField({ label, value, options }: SelectFieldProps) {
  return (
    <Field label={label}>
      <Select defaultValue={value}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  )
}

export default SelectField
