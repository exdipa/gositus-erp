import { CalendarDays, Hash, Mail, Phone, Tags } from 'lucide-react'
import Field from '@/components/global/Field'
import WingCard from '@/components/global/WingCard'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

/**
 * UIUXInputStandardsSection
 * req params: tidak ada
 * optional params: tidak ada
 * result: React element kumpulan standar input text, select, date, tag, dan textarea.
 */
function UIUXInputStandardsSection() {
  return (
    <WingCard title="Input Standard">
      <div className="grid grid-cols-6 gap-2">
        <div className="col-span-3">
          <Field label="Text Input">
            <Input placeholder="Masukkan nama standar" />
          </Field>
        </div>
        <div className="col-span-3">
          <Field label="Email Input" icon={<Mail size={14} />}>
            <Input placeholder="name@gosit.us" type="email" />
          </Field>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-2">
        <div className="col-span-3">
          <Field label="Phone Input" icon={<Phone size={14} />}>
            <div className="phone-field">
              <span className="phone-region">
                <span className="phone-flag" /> +62
              </span>
              <Input placeholder="812 0000 0000" />
            </div>
          </Field>
        </div>
        <div className="col-span-3">
          <Field label="Readonly Input">
            <Input readOnly value="Readonly value from backend" />
          </Field>
        </div>
      </div>
      <div className="fields">
        <Field label="Disabled Input">
          <Input disabled value="Disabled until permission granted" />
        </Field>
        <Field label="Datepicker Target" icon={<CalendarDays size={14} />}>
          <Input defaultValue="2026-06-03" type="date" />
        </Field>
        <Field label="Input Picker Target" icon={<Hash size={14} />}>
          <Input placeholder="Klik untuk buka picker data" />
        </Field>
        <Field label="Input Tag Target" icon={<Tags size={14} />}>
          <div className="tag-field">
            <span className="tag-chip">layout</span>
            <span className="tag-chip">form</span>
            <Input placeholder="Tambah tag" />
          </div>
        </Field>
        <Field label="Select Input">
          <Select defaultValue="medium">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low Priority</SelectItem>
              <SelectItem value="medium">Medium Priority</SelectItem>
              <SelectItem value="high">High Priority</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="Textarea">
          <Textarea placeholder="Catatan pendek" />
        </Field>
        <Field label="Autogrow Textarea Target">
          <Textarea className="autogrow-demo" placeholder="Textarea ini disiapkan sebagai target autogrow" />
        </Field>
      </div>
    </WingCard>
  )
}

export default UIUXInputStandardsSection
