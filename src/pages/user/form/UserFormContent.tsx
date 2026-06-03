import UserEmployeeInformationSection from '@/pages/user/form/components/UserEmployeeInformationSection'
import UserPersonalInformationSection from '@/pages/user/form/components/UserPersonalInformationSection'
import type { User } from '@/types/user'

type UserFormContentProps = {
  user: User
  mode: 'add' | 'view' | 'profile'
}

/**
 * UserFormContent
 * req params: user:User, mode:'add'|'view'|'profile'
 * optional params: tidak ada
 * result: React element isi form personal dan employee information.
 */
function UserFormContent({ user, mode }: UserFormContentProps) {
  return (
    <div className="wingset">
      <UserPersonalInformationSection user={user} mode={mode} />
      <UserEmployeeInformationSection user={user} />
    </div>
  )
}

export default UserFormContent
