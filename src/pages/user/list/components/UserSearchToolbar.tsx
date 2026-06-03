import { Mail, Menu } from 'lucide-react'
import Field from '@/components/global/Field'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

/**
 * UserSearchToolbar
 * req params: tidak ada
 * optional params: tidak ada
 * result: React element toolbar search datatable user.
 */
function UserSearchToolbar() {
  return (
    <>
      <div className="search-fields">
        <Field label="Nama">
          <Input placeholder="Nama" />
        </Field>
        <Field label="Work Email" icon={<Mail size={14} />}>
          <Input placeholder="Work Email" />
        </Field>
      </div>
      <Button className="btn-sea">
        <Menu size={16} />
        Show All
      </Button>
    </>
  )
}

export default UserSearchToolbar
