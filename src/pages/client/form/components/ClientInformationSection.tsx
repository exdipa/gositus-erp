import { MapPin } from 'lucide-react'
import Field from '@/components/global/Field'
import SelectField from '@/components/global/SelectField'
import WingBox from '@/components/global/WingBox'
import type { Client } from '@/types/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type ClientInformationSectionProps = {
  client: Client
}

/**
 * ClientInformationSection
 * req params: client:Client
 * optional params: tidak ada
 * result: React element section form informasi client.
 */
function ClientInformationSection({ client }: ClientInformationSectionProps) {
  return (
    <WingBox title="Client Information">
      <div className="fields">
        <SelectField label="PT/CV" value={client.type} options={['PT', 'CV']} />
        <Field label="Company Name">
          <Input defaultValue={client.name} />
        </Field>
      </div>
      <div className="fields">
        <Field label="Email">
          <Input defaultValue={client.email} />
        </Field>
        <Field label="Phone">
          <div className="phone-field">
            <Button variant="ghost" className="phone-region">
              <span className="phone-flag" />
            </Button>
            <Input defaultValue="812-7713-1222" />
          </div>
        </Field>
      </div>
      <Field label="Address" icon={<MapPin size={14} />}>
        <Textarea defaultValue={client.address} />
      </Field>
      <div className="fields">
        <Field label="Country">
          <Input defaultValue={client.country} />
        </Field>
        <Field label="City">
          <Input defaultValue={client.city} />
        </Field>
      </div>
    </WingBox>
  )
}

export default ClientInformationSection
