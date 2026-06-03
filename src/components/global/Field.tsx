import type React from 'react'
import { Label } from '@/components/ui/label'

type FieldProps = {
  label: string
  icon?: React.ReactNode
  children: React.ReactNode
}

/**
 * Field
 * req params: label:string, children:React.ReactNode
 * optional params: icon:React.ReactNode = undefined
 * result: React element pembungkus label, input area, dan footer field.
 */
function Field({ label, icon, children }: FieldProps) {
  return (
    <div className="fieldset">
      <div className="field-header">
        <Label>
          {icon}
          {label}
        </Label>
      </div>
      <div className="field-input">{children}</div>
      <div className="field-footer" />
    </div>
  )
}

export default Field
