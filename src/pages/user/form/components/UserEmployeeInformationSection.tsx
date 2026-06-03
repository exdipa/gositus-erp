import { Calendar } from 'lucide-react'
import Field from '@/components/global/Field'
import SelectField from '@/components/global/SelectField'
import UploadBox from '@/components/global/UploadBox'
import WingBox from '@/components/global/WingBox'
import { legacyAssetBasePath } from '@/data/assets'
import type { User } from '@/types/user'
import { Button } from '@/components/ui/button'

type UserEmployeeInformationSectionProps = {
  user: User
}

/**
 * UserEmployeeInformationSection
 * req params: user:User
 * optional params: tidak ada
 * result: React element section employee information user.
 */
function UserEmployeeInformationSection({ user }: UserEmployeeInformationSectionProps) {
  return (
    <WingBox title="Employee Information">
      <div className="fields">
        <SelectField label="Divisi" value={user.division} options={['Frontend Programmer', 'Project Manager']} />
        <Field label="Join Date" icon={<Calendar size={14} />}>
          <Button variant="ghost" className="inps">
            {user.joinDate}
          </Button>
        </Field>
      </div>
      <div className="upload-grid">
        <UploadBox label="KTP" image={`${legacyAssetBasePath}/ktp/ktp-ahmad_hendri.jpg`} />
        <UploadBox label="NPWP" image={`${legacyAssetBasePath}/npwp/npwp-ahmad_hendri.jpg`} />
      </div>
    </WingBox>
  )
}

export default UserEmployeeInformationSection
