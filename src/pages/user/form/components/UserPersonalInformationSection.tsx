import { Calendar } from 'lucide-react'
import AvatarCover from '@/components/global/AvatarCover'
import Field from '@/components/global/Field'
import ProfileActions from '@/pages/user/form/components/ProfileActions'
import WingBox from '@/components/global/WingBox'
import type { User } from '@/types/user'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type UserPersonalInformationSectionProps = {
  user: User
  mode: 'add' | 'view' | 'profile'
}

/**
 * UserPersonalInformationSection
 * req params: user:User, mode:'add'|'view'|'profile'
 * optional params: tidak ada
 * result: React element section personal information user.
 */
function UserPersonalInformationSection({ user, mode }: UserPersonalInformationSectionProps) {
  const readonly = mode === 'profile'

  return (
    <WingBox title="Personal Information" actions={mode === 'profile' ? <ProfileActions /> : undefined}>
      {mode !== 'add' && <AvatarCover user={user} />}
      <div className="fields">
        <Field label="Name">
          <Input defaultValue={user.name} disabled={readonly} />
        </Field>
        <Field label="NIK">
          <Input defaultValue={user.nik} disabled={readonly} />
        </Field>
      </div>
      <div className="fields">
        <Field label="Personal Email">
          <Input defaultValue={user.personalEmail} />
        </Field>
        <Field label="Work Email">
          <Input defaultValue={user.email} disabled={readonly} />
        </Field>
      </div>
      <div className="fields">
        <Field label="Phone">
          <div className="phone-field">
            <Button variant="ghost" className="phone-region">
              <span className="phone-flag" />
            </Button>
            <Input defaultValue="812-7713-1222" />
          </div>
        </Field>
        <Field label="Gender">
          <div className="radio-row">
            <Button className="radio-blue">Male</Button>
            <Button variant="outline">Female</Button>
          </div>
        </Field>
      </div>
      <div className="fields">
        <Field label="Place of Birth">
          <Input defaultValue={user.pob} />
        </Field>
        <Field label="Date of Birth" icon={<Calendar size={14} />}>
          <Button variant="ghost" className="inps">
            {user.dob}
          </Button>
        </Field>
      </div>
      <Field label="Address">
        <Textarea defaultValue="Jakarta Barat" />
      </Field>
      <div className="fields">
        <Field label="Country">
          <Input defaultValue="Indonesia" />
        </Field>
        <Field label="City">
          <Input defaultValue="Jakarta" />
        </Field>
      </div>
    </WingBox>
  )
}

export default UserPersonalInformationSection
